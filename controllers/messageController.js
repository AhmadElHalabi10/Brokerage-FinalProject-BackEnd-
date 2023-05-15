import Message from "../models/messageModel.js";

export function createMessage(req, res, next) {
  const message = new Message(req.body);
  message
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
export function getMessages(req, res, next) {
  Message.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getMessage(req, res, next) {
  const { id } = req.params;
  Message.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function deleteMessage(req, res, next) {
  const { id } = req.params;
  Message.findOneAndDelete({ _id: id })
    .then((response) => {
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
export function editMessage(req, res, next) {
  const { id } = req.params;
  Message.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
