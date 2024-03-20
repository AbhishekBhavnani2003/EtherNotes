import React, { useContext, useEffect, useRef, useState } from 'react';
import Notecontext from "../context/notes/notecontext";
import { useNavigate } from 'react-router-dom';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = (props) => {
    const context = useContext(Notecontext);
    const history = useNavigate();
    const { Notes, getnote, editnote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getnote();
        }
        else {
            history('/login')
        }
    }, []);

    const refClose = useRef(null);
    const ref = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const updatenote = (currentnote) => {
        ref.current.click();
        setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    };

    const handleClick = (e) => {
        editnote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        setNote({ id: "", etitle: "", edescription: "", etag: "" });
        props.showalert("Updated Successfully", "success")
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Addnote showalert={props.showalert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content my-5">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {Notes.length === 0 && 'No notes to display'}
                </div>
                {Notes.map((note) => {
                    return <Noteitem showalert={props.showalert} key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}


export default Notes;
