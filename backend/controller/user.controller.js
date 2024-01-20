const UserModel = require("../model/user.entity");
const bcrypt = require("bcrypt");

const registerUser = async (request, response) => {
  const { fname, lname, username, email, password } = request.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      // throw new Error("Email already exist");
      response.status(400).json("Email already exist");
    }else{
      //hash the password
      //generate the salt
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const newuser = await UserModel.create({
        fname,
        lname,
        username,
        email,
        password: hash,
      });
      response.status(201).json(newuser);
      // return newuser;
    }
    // response.status(201).json(user);
    
  } catch (error) {
    response.status(500).send("Failed to add users");
  }
};

// const loginUser = async (request, response) => {
//   try {
//     const user = await UserModel.create({ ...request.body });
//     response.status(201).json(user);
//   } catch (error) {
//     response.status(500).send("Failed to add users");
//   }
// };

const getUser = async (request, response) => {
  try {
    const user = await UserModel.find();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to get all users");
  }
};

const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UserModel.findOneAndDelete({ _id: id });
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to delete users");
  }
};

// const updateUser = async (request, response) => {
//   try {
//     const id = request.params.id;
//     const user = await UserModel.findOneAndUpdate({ _id: id }, { ...request.body });
//     response.status(200).json(user);
//   } catch (error) {
//     response.status(500).send("Failed tp update user");
//   }
// };

const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...request.body }
    );
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to update user");
    console.log(error);
  }
};

module.exports = { getUser, registerUser, deleteUser, updateUser };
