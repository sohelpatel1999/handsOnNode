const Person = require("../models/person");

async function createPerson(req, res) {
  try {
    const person = new Person(req.body);
    const savedPerson = await person.save();
    res.status(200).send(savedPerson);
  } catch (error) {
    res.status(500).send({ error: "Error saving person", details: error });
  }
}

async function getAllPerson(req, res) {
  try {
    const response = await Person.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: "Error Getting person", details: error });
  }
}

async function getPerson(req, res) {
  try {
    const ID = req.params.id;
    console.log(ID);
    const response = await Person.findById(ID);
    if (!response) {
      return res.status(404).send({ message: "person not found" });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: "Error Getting person", details: error });
  }
}

async function updatePerson(req, res) {
  try {
    const ID = req.params.id;
    console.log(ID);
    const data = req.body;
    const response = await Person.findByIdAndUpdate(ID, data, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).send({ message: "person not found" });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: "Error updating person", details: error });
  }
}

async function deletePerson(req, res) {
  try {
    const ID = req.params.id;
    console.log(ID);
    const response = await Person.findByIdAndDelete(ID);
    if (!response) {
      return res.status(404).send({ message: "person not found" });
    }
    res.status(200).send({ message: "person deleted" });
  } catch (error) {
    res.status(500).send({ error: "Error Deleting person", details: error });
  }
}

module.exports = {
  createPerson,
  getAllPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
