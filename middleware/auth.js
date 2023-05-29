import jwt from "jsonwebtoken";

// Verify if the token is valid
export function verifyToken(req, res, next) {
  const token = req.body.token;
  if (!token) {
    return res.status(403).send("A token is required ");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    console.log(req.user);
  } catch (err) {
    return res.status(401).send(err);
  }
  return next();
}

// Verify if the admin a general admin or super admin
export function isSuperAdmin(req, res, next) {
  try {
    if (req.user.role === "admin") {
      return res.send({ message: "you are not a super admin" });
    }
    next();
  } catch (err) {
    next(err);
    res.send({ message: err.message });
  }
}

export function isGeneralAdmin(req, res, next) {
  console.log(req.user);
  try {
    if (req.user.role === "admin") {
      return res.send({ message: "Hello admin!" });
    } else if (req.user.role === "admin" || req.user.role === "superAdmin") {
      next();
    } else {
      return res.send({ message: "you are not an  admin" });
    }
  } catch (err) {
    next(err);
    res.send({ message: err.message });
  }
}
