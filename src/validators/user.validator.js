import Joi, { optional } from '@hapi/joi';

export const userRegistrationValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
export const noteValidator = (req, res, next) => {
  const schema = Joi.object({
    Title: Joi.string().min(3).required(),
    Description: Joi.string().min(5).required(),
    Color: Joi.string().optional(),
    
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
