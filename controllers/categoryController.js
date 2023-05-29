import Category from "../models/categoryModel.js";
import fs from "fs";

//Get all Categories
export function getCategories(req, res, next) {
  Category.find({})
    .then((categories) => {
      res.status(200).send({ status: 200, message: categories });
    })
    .catch((err) => {
      next(err);
    });
}

// Get category by Id
export function createCategory(req, res, next) {
  const category = new Category(req.body);
  category
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
      console.log(err);
    });
}
export function getCategory(req, res, next) {
  const { id } = req.params;
  Category.find({ _id: id })
    .then((category) => {
      res.status(200).send({ status: 200, message: category });
    })
    .catch((err) => {
      next(err);
    });
}

// Edit Category
export function editCategory(req, res, next) {
  const { id } = req.params;
  Category.findOneAndUpdate({ _id: id }, req.body)
    .then((category) => {
      if (req.body.image) fs.unlinkSync(category.image);
      res.status(200).send({ status: 200, message: category });
    })
    .catch((err) => {
      next(err);
    });
}

// Delete category
export function deleteCategory(req, res, next) {
  const { id } = req.params;
  Category.findOneAndDelete({ _id: id })
    .then((category) => {
      fs.unlinkSync(category.image);
      res.status(200).send({ status: 200, message: `Successfully deleted` });
    })
    .catch((error) => {
      next(error);
    });
}
