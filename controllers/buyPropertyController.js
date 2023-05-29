import BuyProperty from "../models/buyPropertyModel.js";
import fs from "fs";
class Controller {
  // get one BuyProperty by title
  async getBuyPropertyByTitle(req, res, next) {
    let { title } = req.params;
    try {
      const buyProperty = await BuyProperty.find({ title: title });
      if (!buyProperty) {
        return res.status(404).json({ error: "Property not found" });
      }
      res.status(200).json({ success: "Property found", buyProperty });
    } catch (err) {
      next(err);
    }
  }
  // getAllProperty have the same subCategory
  // async getCategory(req, res, next) {
  //   let { id } = req.params;
  //   try {
  //     const property = await Property.find({ subCategory: id });
  //     if (!property) {
  //       return res
  //         .status(404)
  //         .json({ error: "Not Product found in this category  " });
  //     }
  //     res
  //       .status(200)
  //       .json({ success: "Property found in this category", property });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // get BuyProperty using ID
  async getBuyPropertyById(req, res, next) {
    let { id } = req.params;
    try {
      const buyProperty = await BuyProperty.findOne({ _id: id });
      if (!buyProperty) {
        return res.status(404).send({ error: "Property not found" });
      }
      res.status(200).send({ success: "Property found", buyProperty });
    } catch (err) {
      next(err);
    }
  }
  // get all BuyProperty
  async getAllBuyProperties(req, res, next) {
    try {
      const response = await BuyProperty.find({});
      res
        .status(200)
        .json({ success: "All property getting successfully", response });
    } catch (err) {
      next(err);
    }
  }
  // edit buyProperty
  async editBuyProperty(req, res, next) {
    const { id } = req.params;
    await BuyProperty.findOneAndUpdate({ _id: id }, req.body)
      .then((buyProperty) => {
        if (req.body.image) fs.unlinkSync(buyProperty.image);
        res.status(200).send({ status: 200, message: buyProperty });
      })
      .catch((err) => {
        next(err);
      });
  }
  //   delete buyProperty by id
  async deleteBuyProperty(req, res, next) {
    const { id } = req.params;
    await BuyProperty.findOneAndDelete({ _id: id })
      .then((buyProperty) => {
        fs.unlinkSync(buyProperty.image);
        res.status(200).json({ status: 200, message: `Successfully deleted` });
      })
      .catch((error) => {
        next(error);
      });
  }

  // create buyProperty
  addBuyProperty(req, res, next) {
    const buyProperty = new BuyProperty(req.body);
    buyProperty
      .save()
      .then((response) => {
        res.status(201).send({ status: 201, message: response });
      })
      .catch((err) => {
        next(err);
        console.log(err);
      });
  }

  // Pagination four properties
  async getFourBuyPropertiesOnly(req, res) {
    try {
      const buyProperties = await BuyProperty.find()
        .sort({ createdAt: -1 })
        .limit(4);
      res.json(buyProperties);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

const controller = new Controller();
export default controller;
