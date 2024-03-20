const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note')

// ROUTE 1 : - Get all the notes using : GET "/api/notes/fetchallnotes" . login require
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(" Intrenal Server Error ");
    }
})

// ROUTE 2 : - Add the new note using : POST "/api/notes/addnote" . login require
router.post('/addnote', fetchuser, [
    body('title', 'Enter the valid title').isLength({ min: 3 }),
    body('description', ' Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {

        const { title, description, tag } = req.body;
        // error - bad request and error 
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savednote = await note.save()
        res.json(savednote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send(" Intrenal Server Error ");
    }
})

// ROUTE 3 : - Update the existing note  : PUT "/api/notes/updatenote" . login require
router.put('/updatenote/:id', fetchuser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        try {
            // newnote object
            const newNote = {};
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };

            // Find the note to be updated and to be updated 

            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send(" Not Found")
            }
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send(" Not Allowed")
            }

            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json({ note })
        } catch (error) {
            console.error(error.message);
            res.status(500).send(" Intrenal Server Error ");
        }
    }

)

// ROUTE 4 : - Delete an existing note  : Delete "/api/notes/deletenote" . login require
router.delete('/deletenote/:id', fetchuser,
    async (req, res) => {
        try {
            // Find the note to be delete and delete it 

            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send(" Not Found")
            }

            // Allow deletion if it is of logged in user only 
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send(" Not Allowed")
            }

            note = await Note.findByIdAndDelete(req.params.id)
            res.json({ " Success ": "Note has been deleted", note: note })
        } catch (error) {
            console.error(error.message);
            res.status(500).send(" Intrenal Server Error ");
        }
    }
)


module.exports = router