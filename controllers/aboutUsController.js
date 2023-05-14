import AboutUs from "../models/aboutUsModel.js";

export const getMaps = async (req, res) => {
  try {
    const aboutUsData = await AboutUs.find({});

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

//
//
// CRUD for the Map form
//

export const getMap = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addMap = async (req, res) => {
  try {
    const aboutUsData = await AboutUs(req.body);
    await aboutUsData.save();
    res.send({ message: aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateMap = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!AboutUs) {
      return res.status(404).json({ msg: "Map not found" });
    }
    aboutUsData.set(req.body);
    await aboutUsData.save();
    res.send({ msg: "Map updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteMap = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOneAndDelete({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: "Map not found" });
    }

    res.json({ msg: "Map deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

//
//
// CRUD for the Facebook icon
//

export const getFacebook = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addFacebook = async (req, res) => {
  try {
    const aboutUsData = await AboutUs(req.body);
    await aboutUsData.save();
    res.send({ message: aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateFacebook = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!AboutUs) {
      return res.status(404).json({ msg: "Facebook not found" });
    }
    aboutUsData.set(req.body);
    await aboutUsData.save();
    res.send({ msg: "Facebook updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteFacebook = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOneAndDelete({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: "Facebook not found" });
    }

    res.json({ msg: "Facebook deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

//
//
// CRUD for the Instagram icon
//

export const getInstagram = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addInstagram = async (req, res) => {
  try {
    const aboutUsData = await AboutUs(req.body);
    await aboutUsData.save();
    res.send({ message: aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateInstagram = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!AboutUs) {
      return res.status(404).json({ msg: "Instagram not found" });
    }
    aboutUsData.set(req.body);
    await aboutUsData.save();
    res.send({ msg: "Instagram updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteInstagram = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOneAndDelete({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: "Instagram not found" });
    }

    res.json({ msg: "Instagram deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

//
//
// CRUD for the Whatsapp icon
//

export const getWhatsapp = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: `No ${id} link found` });
    }
    res.send(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addWhatsapp = async (req, res) => {
  try {
    const aboutUsData = await AboutUs(req.body);
    await aboutUsData.save();
    res.send({ message: aboutUsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateWhatsapp = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutUsData = await AboutUs.findOne({ _id: id });

    if (!AboutUs) {
      return res.status(404).json({ msg: "Whatsapp not found" });
    }
    aboutUsData.set(req.body);
    await aboutUsData.save();
    res.send({ msg: "Whatsapp updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteWhatsapp = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutUsData = await AboutUs.findOneAndDelete({ _id: id });

    if (!aboutUsData) {
      return res.status(404).send({ msg: "Whatsapp not found" });
    }

    res.json({ msg: "Whatsapp deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
