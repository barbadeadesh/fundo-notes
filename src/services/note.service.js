
import Note  from '../models/note.model'
import bcrypt from "bcrypt";
import noteModel from '../models/note.model';


export const getallNote = async () => {
  const data = await Note.find();
  return data;
};

export const createNote = async (body) => {
  const data = await Note.create(body);
  return data;
};

export const getNote = async (id) => {
  const data = await Note.findById(id);
  return data;
};

export const updateNote = async (_id,body) => {
  const data = await Note.findByIdAndUpdate(
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

export const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
  return '';
};

export const archivedNote = async (id, UserId) => {
  const data = await noteModel.findOne({_id: id, UserId: UserId});
   const currentStatues = data.isArchived;
   const resData = await Note.findOneAndUpdate ({_id: id, UserId:UserId},{isArchived: currentStatues});
   return resData;
  
  };
 
  export const trashNote = async (id, UserId) => {
    const data = await noteModel.findOne({_id: id, UserId: UserId});
     const currentStatues = data.istrash;
     const resData = await Note.findOneAndDelete ({_id: id, UserId:UserId});
     return resData;
    
    };
