import CardMain from "../models/cardMainModel.js";
import fs from "fs";

//Get all CardMains
export function getCardMains(req, res, next) {
  CardMain.find({})
    .then((cardMains) => {
      res.status(200).send({ status: 200, message: cardMains });
    })
    .catch((err) => {
      next(err);
    });
}

// Get cardMain by Id
export function createCardMain(req, res, next) {
  const cardMain = new CardMain(req.body);
  cardMain
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
      console.log(err);
    });
}
export function getCardMain(req, res, next) {
  const { id } = req.params;
  CardMain.find({ _id: id })
    .then((cardMain) => {
      res.status(200).send({ status: 200, message: cardMain });
    })
    .catch((err) => {
      next(err);
    });
}

// Edit CardMain
export function editCardMain(req, res, next) {
  const { id } = req.params;
  CardMain.findOneAndUpdate({ _id: id }, req.body)
    .then((cardMain) => {
      if (req.body.picture) fs.unlinkSync(cardMain.picture);
      res.status(200).send({ status: 200, message: cardMain });
    })
    .catch((err) => {
      next(err);
    });
}

// Delete cardMain
export function deleteCardMain(req, res, next) {
  const { id } = req.params;
  CardMain.findOneAndDelete({ _id: id })
    .then((CardMain) => {
      fs.unlinkSync(cardMain.picture);
      res.status(200).send({ status: 200, message: `Successfully deleted` });
    })
    .catch((error) => {
      next(error);
    });
}
