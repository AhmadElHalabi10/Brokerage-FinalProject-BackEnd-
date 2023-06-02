import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mailgun from "mailgun-js";

class Controller {
  // Register
  async register(req, res, next) {
    const { userName, email, password, firstName, lastName } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({
        message:
          "You should have a password and to be at least 6 characters long",
      });
    }

    try {
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
      const user = await Admin.create({
        userName,
        password: hash,
        email,
        firstName,
        lastName,
      });
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: user._id, userName, role: user.role },
        process.env.JWT_KEY,
        {
          expiresIn: maxAge, // 3hrs in sec
        }
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });
      res.status(201).json({
        message: "Admin successfully created",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error creating admin",
      });
    }
  }

  // Login
  async login(req, res, next) {
    const { userName, password } = req.body;
    const mg = mailgun({
      apiKey: process.env.API_KEYS,
      domain: process.env.DOMAIN,
    });

    // Check if userName or password is provided
    if (!userName || !password) {
      return res.status(400).json({
        message: "Username or password is not presented",
      });
    }
    // Check if the entered admin name is presented,
    // then comparing the given password with the password in the DB schema
    try {
      const user = await Admin.findOne({ userName });
      if (!user) {
        res.status(400).json({
          message: "Login not successful",
          error: "Admin not found",
        });
      } else {
        // comparing given password with hashed password
        bcrypt.compare(password, user.password).then(function (result) {
          if (result) {
            const maxAge = 3 * 60 * 60 * 1000;
            const token = jwt.sign(
              { id: user._id, userName, role: user.role },

              process.env.JWT_KEY,

              {
                expiresIn: maxAge, // 3hrs in sec
              }
            );
            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.status(201).json({
              message: "Admin successfully Logged in",
              user: user._id,
              userName: user.userName,
              role: user.role,
              token,
            });
            const data = {
              from: "Admin Login <noreply@yourdomain.com>",
              to: "AhmadElHalabi@gmail.com",
              subject: "Admin Login Successful",
              html: `<div>Admin ${user.userName} logged in successfully.</div>`,
            };
            mg.messages().send(data, function (error, body) {
              if (error) {
                console.log(error);
              } else {
                console.log("okay");
              }
            });
          } else {
            res.status(400).json({ message: "Login not successful" });
          }
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      });
    }
  }
  // Change the role
  async upgradeRole(req, res, next) {
    const { role } = req.body;
    const { id } = req.params;
    // Verify if role and id are present
    if (!role) {
      return res.status(400).json({ message: "Role is not provided" });
    }

    try {
      const user = await Admin.findById({ _id: id });

      // Verify if user is found
      if (!user) {
        return res.status(400).json({ message: "Admin not found" });
      }

      // Verify if user is not already an superAdmin
      if (user.role === "superAdmin") {
        return res
          .status(400)
          .json({ message: "Admin is already a superAdmin" });
      }

      // Upgrade user role
      user.role = role;
      await user.save();

      res.status(201).json({ message: "UpgradeRole successful", user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message });
    }
  }

  // Update the admin role
  async updateAdmin(req, res, next) {
    const { userName, password, lastName, firstName, email } = req.body;

    const { id } = req.params;

    // Verify if the required fields are present
    if (!userName || !password || !lastName || !firstName || !email) {
      return res.status(400).json({ message: "Some fields are missing" });
    }

    try {
      // Find the admin to update
      let admin = await Admin.findById(id);

      // Verify if admin is found
      if (!admin) {
        return res.status(400).json({ message: "Admin not found" });
      }

      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Update the admin object with the new values
      admin.userName = userName;
      admin.password = hashedPassword;
      admin.firstName = firstName;
      admin.lastName = lastName;
      admin.email = email;

      // Save the updated admin object
      await admin.save();

      res.status(201).json({ message: "Update Admin successful", admin });
    } catch (error) {
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message });
    }
  }

  // delete the admin
  async deleteAdmin(req, res, next) {
    let { id } = req.params;
    try {
      const response = await Admin.findByIdAndDelete({ _id: id });
      res
        .status(200)
        .send({ success: "Admin deleting successfully ", response });
    } catch (err) {
      next(err);
    }
  }

  // Get all the admin
  async getallAdmin(req, res, next) {
    try {
      const response = await Admin.find();
      res
        .status(200)
        .send({ success: "Admin getting successfully ", response });
    } catch (err) {
      next(err);
    }
  }

  // logout
  async logout(req, res, next) {
    await res.clearCookie("jwt");
    res.status(200).send({ message: "Logged out successfully" });
  }
}
const controller = new Controller();

export default controller;
