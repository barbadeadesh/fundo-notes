import express from 'express';
import * as NoteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { noteValidator } from '../validators/user.validator';


const router = express.Router();

router.get('',userAuth, NoteController.getallNote);

router.post('',noteValidator,userAuth, NoteController.createNote);

router.get('/:_id', userAuth,NoteController.getNote);

router.put('/:_id', userAuth,NoteController.updateNote);

router.delete('/:_id',userAuth, NoteController.deleteNote);

router.put('/isArchived/:_id',userAuth,NoteController.archivedNote);

router.put('/isTrash/:_id',userAuth, NoteController.trashNote);





export default router;

