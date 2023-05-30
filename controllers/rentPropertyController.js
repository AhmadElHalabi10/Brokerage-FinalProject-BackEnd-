import RentProperty from "../models/rentPropertyModel.js";
import fs from "fs";
class Controller {
  // get one RentProperty by title
  async getRentPropertyByTitle(req, res, next) {
    let { title } = req.params;
    try {
      const rentProperty = await RentProperty.find({ title: title });
      if (!rentProperty) {
        return res.status(404).json({ error: "Property not found" });
      }
      res.status(200).json({ success: "Property found", rentProperty });
    } catch (err) {
      next(err);
    }
  }

  // get RentProperty using ID
  async getRentPropertyById(req, res, next) {
    let { id } = req.params;
    try {
      const rentProperty = await RentProperty.findOne({ _id: id });
      if (!rentProperty) {
        return res.status(404).send({ error: "Property not found" });
      }
      res.status(200).send({ success: "Property found", rentProperty });
    } catch (err) {
      next(err);
    }
  }
  // get all RentProperty
  async getAllRentProperties(req, res, next) {
    try {
      const response = await RentProperty.find({});
      res
        .status(200)
        .json({ success: "All property getting successfully", response });
    } catch (err) {
      next(err);
    }
  }
  // edit rentProperty
  async editRentProperty(req, res, next) {
    const { id } = req.params;
    await RentProperty.findOneAndUpdate({ _id: id }, req.body)
      .then((rentProperty) => {
        if (req.body.image) fs.unlinkSync(rentProperty.image);
        res.status(200).send({ status: 200, message: rentProperty });
      })
      .catch((err) => {
        next(err);
      });
  }
  //   delete rentProperty by id
  async deleteRentProperty(req, res, next) {
    const { id } = req.params;
    await RentProperty.findOneAndDelete({ _id: id })
      .then((rentProperty) => {
        fs.unlinkSync(rentProperty.image);
        res.status(200).json({ status: 200, message: `Successfully deleted` });
      })
      .catch((error) => {
        next(error);
      });
  }

  // create rentProperty
  addRentProperty(req, res, next) {
    const rentProperty = new RentProperty(req.body);
    rentProperty
      .save()
      .then((response) => {
        res.status(201).send({ status: 201, message: response });
      })
      .catch((err) => {
        next(err);
        console.log(err);
      });
  }

  // Pagination four rentRroperties
  async getFourRentPropertiesOnly(req, res) {
    try {
      const rentProperties = await RentProperty.find()
        .sort({ createdAt: -1 })
        .limit(4);
      res.json(rentProperties);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

const controller = new Controller();
export default controller;
