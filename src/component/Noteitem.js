import React, { useContext } from 'react';
import notecontext from "../context/notes/notecontext";

const Noteitem = ({ note, updatenote, showalert }) => {
    const context = useContext(notecontext);
    const { deletenote } = context;

    return (
        <div className='col-md-3 my-4'>
            <div className="card" >
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-3" onClick={() => { deletenote(note._id); showalert(" Deleted Successfully", "success") }}></i> {/* Use note._id instead of Notes._id */}
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {
                            updatenote(note);
                        }}></i> 
                    </div>
                    <p className="card-text">{note.description}</p> 
                </div>
            </div>
        </div>
    );
}

export default Noteitem;
