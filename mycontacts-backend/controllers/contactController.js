//Don't have to write try catch block, asyncHandler will automatically when error occurs, pass it to the error handler
const asyncHandler = require("express-async-handler");
const { ObjectId } = require("mongodb");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Get individual contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;

  if (!isValidObjectId(contactId)) {
    res.status(400).send({ msg: "Invalid ID" });
    return;
  }

  const contact = await Contact.findById(contactId);

  if (!contact) {
    res.status(404).send("Contact not found");
    return;
  }

  res.status(200).json(contact);
});


//@desc Update individual contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;

  if (!isValidObjectId(contactId)) {
    res.status(400).send({ msg: "Invalid ID" });
    return;
  }

  const contact = await Contact.findById(contactId);

  if (!contact) {
    res.status(404).send("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete individual contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;

  if (!isValidObjectId(contactId)) {
    res.status(400).send("Invalid ID");
    return;
  }

  const contact = await Contact.findById(contactId);

  if (!contact) {
    res.status(404).send("Contact not found");
    return;
  }

  // Use findByIdAndDelete instead of findByIdAndRemove
  const deletedContact = await Contact.findByIdAndDelete(contactId);

  if (!deletedContact) {
    // If the contact was not found, it means it has already been deleted
    res.status(200).json({ message: "Contact already deleted" });
  } else {
    // Respond with the deleted contact information
    res.status(200).json(deletedContact);
  }
});

// Checks if the ObjectId is valid or not
function isValidObjectId(id) {
  return ObjectId.isValid(id);
}

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
