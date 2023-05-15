import Property from "../models/propertyModel.js";
import fs from "fs";
class Controller {
  // get one Property by id
  async getByName(req, res, next) {
    let { name } = req.params;
    try {
      const property = await Property.find({ name: name });
      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }
      res.status(200).json({ success: "Property found", product });
    } catch (err) {
      next(err);
    }
  }
  // getAllProperty have the same subCategory
  async getCategory(req, res, next) {
    let { id } = req.params;
    try {
      const property = await Property.find({ subCategory: id });
      if (!property) {
        return res
          .status(404)
          .json({ error: "Not Product found in this category  " });
      }
      res
        .status(200)
        .json({ success: "Property found in this category", property });
    } catch (err) {
      next(err);
    }
  }
  // get Property using ID
  async getById(req, res, next) {
    let { id } = req.params;
    try {
      const product = await Property.findOne({ _id: id });
      if (!property) {
        return res.status(404).send({ error: "Property not found" });
      }
      res.status(200).send({ success: "Property found", product });
    } catch (err) {
      next(err);
    }
  }
  // get all Property
  async getAll(req, res, next) {
    try {
      const response = await Property.find({});
      res
        .status(200)
        .json({ success: "All property getting successfully", response });
    } catch (err) {
      next(err);
    }
  }
  // edit property
  async editProperty(req, res, next) {
    const { id } = req.params;
    await Product.findOneAndUpdate({ _id: id }, req.body)
      .then((product) => {
        if (req.body.image) fs.unlinkSync(product.image);
        res.status(200).send({ status: 200, message: product });
      })
      .catch((err) => {
        next(err);
      });
  }
  //   delete property by id
  async deleteProperty(req, res, next) {
    const { id } = req.params;
    await Product.findOneAndDelete({ _id: id })
      .then((property) => {
        fs.unlinkSync(property.image);
        res.status(200).json({ status: 200, message: `Successfully deleted` });
      })
      .catch((error) => {
        next(error);
      });
  }
  // create Property
  addProperty(req, res, next) {
    const property = new Property(req.body);
    property
      .save()
      .then((response) => {
        res.status(201).send({ status: 201, message: response });
      })
      .catch((err) => {
        next(err);
        console.log(err);
      });
  }

  async getFourPropertyOnly(req, res) {
    try {
      const properties = await Property.find().sort({ createdAt: -1 }).limit(4);
      res.json(properties);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

const controller = new Controller();
export default controller;
