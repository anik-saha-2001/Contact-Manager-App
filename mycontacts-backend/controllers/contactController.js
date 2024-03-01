//Don't have to write try catch block, asyncHandler will automatically when error occurs, pass it to the error handler
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  return res.status(200).send({ msg: `Get all contacts` });
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
  return res.status(201).send({ msg: `Create contact` });
});

//@desc Get individual contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  return res.status(200).send({ msg: `Get the contact ${req.params.id}` });
});

//@desc Update individual contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  return res.status(200).send({ msg: `Update the contact ${req.params.id}` });
});

//@desc Delete individual contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  return res.status(200).send({ msg: `Delete the contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
