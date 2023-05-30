import ContactUs from "../models/contactUsModel.js";

class Controller {
  async getContactUsByTitle(req, res, next) {
    let { userName } = req.params;
    try {
      const contactUs = await ContactUs.find({ userName: userName });
      if (!contactUs) {
        return res.status(404).json({ error: "Contact Us not found" });
      }
      res.status(200).json({ success: "Contact Us found", contactUs });
    } catch (err) {
      next(err);
    }
  }

  // get ContactUs using ID
  async getContactUsById(req, res, next) {
    let { id } = req.params;
    try {
      const contactUs = await ContactUs.findOne({ _id: id });
      if (!contactUs) {
        return res.status(404).send({ error: "Contact Us not found" });
      }
      res.status(200).send({ success: "Contact Us found", contactUs });
    } catch (err) {
      next(err);
    }
  }
  // get all ContactUs
  async getAllContactUses(req, res, next) {
    try {
      const response = await ContactUs.find({});
      res
        .status(200)
        .json({ success: "All Contact Us getting successfully", response });
    } catch (err) {
      next(err);
    }
  }
  // edit contactUs
  async editContactUs(req, res, next) {
    const { id } = req.params;
    await ContactUs.findOneAndUpdate({ _id: id }, req.body)
      .then((buyProperty) => {
        res.status(200).send({ status: 200, message: contactUs });
      })
      .catch((err) => {
        next(err);
      });
  }
  //   delete contactUs by id
  async deleteContactUs(req, res, next) {
    const { id } = req.params;
    await ContactUs.findOneAndDelete({ _id: id })
      .then((contactUs) => {
        fs.unlinkSync(contactUs.image);
        res.status(200).json({ status: 200, message: `Successfully deleted` });
      })
      .catch((error) => {
        next(error);
      });
  }

  // create contactUs
  addContactUs(req, res, next) {
    const contactUs = new ContactUs(req.body);
    contactUs
      .save()
      .then((response) => {
        res.status(201).send({ status: 201, message: response });
      })
      .catch((err) => {
        next(err);
        console.log(err);
      });
  }

  // Pagination four Contact Us es
  async getFourContactUsesOnly(req, res) {
    try {
      const contactUs = await ContactUs.find().sort({ createdAt: -1 }).limit(4);
      res.json(buyProperties);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

const controller = new Controller();
export default controller;
