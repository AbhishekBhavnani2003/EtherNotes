import React, { useContext, useState } from 'react'
import notecontext from "../context/notes/notecontext";

const Addnote = (props) => {
  const context = useContext(notecontext);
  const { addnote } = context;
  const [note, setnote] = useState(
    { title: "", description: "", tag: "" }
  )

  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showalert("Added Successfully", "success")
  }

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: [e.target.value] })
  }
  return (
    <div className='container my-3' >
      <h1 style={{ padding: '20px', marginLeft: '-15px' }}>Add the Note </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description </label>
          <input type="text" className="form-control" id="description" name="description" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag </label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note </button>
      </form>
    </div>
  )
}

export default Addnote