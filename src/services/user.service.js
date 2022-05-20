import User from '../models/user.model';
import bcrypt from "bcrypt";


//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};
// user login
export const userLogIn = async (body) => {
  const data = await User.find(body);
  return data;
};
//create new user
export const newUser = async (body) => {
  console.log("service", body)
  const saltRounds = 10;
  
  const salt =  await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(body.password, salt)
  body.password = hash;
     const data = await User.create(body);
       return data;



};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
