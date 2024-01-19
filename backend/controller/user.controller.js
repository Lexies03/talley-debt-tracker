const UserModel = require("../model/user.entity");

const loginUser = async (request, response) => {
  try {
    
  } catch (error) {
    
  }
};

const getUser = async (request, response) => {
  try {
    const user = await UserModel.find();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to get all users");
  }
};

const createUser = async (request, response) => {
  try {
    const user = await UserModel.create({ ...request.body });
    response.status(201).json(user);
  } catch (error) {
    response.status(500).send("Failed to add users");
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

module.exports = { getUser, createUser, deleteUser, updateUser };
