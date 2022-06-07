import HttpStatus from 'http-status-codes';
import * as UserService from '../services/note.service';


export const getallNote = async (req, res, next) => {
  try {
    const data = await UserService.getallNote();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: ' Get All Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const data = await UserService.createNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Create Note Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const data = await UserService.getNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Get Note Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const data = await UserService.updateNote(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Update Note Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const data = await UserService.deleteNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Delete Note Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const archivedNote = async (req, res, next) => {
  try {
    const data = await UserService.archivedNote(req.params._id, req.body.UserId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note  is  archived Successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const trashNote = async (req, res, next) => {
  try {
    const data = await UserService.trashNote(req.params._id, req.body.UserId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: ' This data is deleted permanently from DB '
    });
  } catch (error) {
    next(error);
  }
};

