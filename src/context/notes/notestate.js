import React, { useState  } from "react";
import notecontext from "./notecontext";

const Notestate = (props) => 
{
  const host = "http://localhost:5000"
  const NotesInitial = []

  const [Notes, setNotes] = useState(NotesInitial)



  // get all note 

  const getnote = async () => 
  {

 // api call 
 const  url = `${host}/api/notes/fetchallnotes` ; 
 const response = await fetch(url, {
   method: "GET", 
   headers: {
     "Content-Type": "application/json",
     "auth-token" : localStorage.getItem('token')
   },
 });

// logic 
const json = await response.json() ; 
setNotes(json)
  }





  // add the note 

  const addnote = async (title , description , tag) => 
  {

 // api call 
 const  url = `${host}/api/notes/addnote` ; 
 const response = await fetch(url, {
   method: "POST", 
   headers: {
     "Content-Type": "application/json",
     "auth-token" : localStorage.getItem('token')
   },
   body : JSON.stringify({ title: String(title), description: String(description), tag: String(tag) })

 });

// logic 
   const note = await response.json() ;
   setNotes(Notes.concat(note))
  }



  // delete the note  


  const deletenote = async (id) => 
  {
    const  url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
    });
   const json = response.json(); 
   console.log(json)
   const newnotes = Notes.filter((note) => {return note._id !== id})
    setNotes(newnotes)
    
  }


  // edit the note 
  const editnote = async (id , title , description , tag ) => 
  {
    // api call 
    const  url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
      body : JSON.stringify({ title: String(title), description: String(description), tag: String(tag) })
    });
   const json = await response.json(); 
   console.log(json)

   let newnotes = JSON.parse(JSON.stringify(Notes))
   // edit the note logic 
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if(element._id === id)
      {
        newnotes[index].title= title ; 
        newnotes[index].description= description ; 
        newnotes[index].tag= tag ; 
        break ; 
      }
      
    }
    setNotes(newnotes) ;
  }

   
  return (
    <notecontext.Provider value={{Notes, addnote , deletenote , editnote , getnote}}>
       {props.children}
    </notecontext.Provider>
  )
}

export default Notestate ; 