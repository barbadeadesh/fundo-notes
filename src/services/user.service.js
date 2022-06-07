import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


export const newUser = async (body) => {
  console.log("service", body)
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(body.password, salt)
  body.password = hash;
  const data = await User.create(body);
  return data;
};

export const userLogin = async (body) => {
  const data = await User.findOne({email: body.email});

  console.log("my data", data);

  if (data == null) {
    throw new Error("user does not exist")
  }
  else {
    if ( await bcrypt.compare(body.password, data.password)) {

      let token = jwt.sign({ _id: data._id, email: data.email }, process.env.SECRET_KEY);
      
      return token;
    }
    else {
      throw new Error("password does not match")

    }
  }
}
