import Contact from "../models/contactUsModel.js";

// Create contact feedback
export function createContact(req, res, next) {
  const contact = new Contact(req.body);
  contact
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

// get all the contacts with their information
export function getAllContacts(req, res, next) {
  Contact.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

// Get Contact by ID
export function getContact(req, res, next) {
  const { id } = req.params;
  Contact.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

// Delete a contact by its ID
export function deleteContact(req, res, next) {
  const { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((response) => {
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
export function editContact(req, res, next) {
  const { id } = req.params;
  Contact.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
