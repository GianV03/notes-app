import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import  Swal  from 'sweetalert2'

const Noteslist = () =>{

  const [notes, setNotes] = useState([]);

  useEffect(()=>{ 
    getNotes();
  }, []);

  const getNotes = async () =>{

    const notes = await axios.get('http://localhost:4000/api/notes');
    console.log(notes.data)
    setNotes(notes.data);

  }

  const deleteNote = async id =>{

    /** Dialog to confirm action */
    Swal.fire({
      title: "Do you want to delete de note?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Don't delete"
    }).then(async (result) => {

      /** When action is confirmed */
      if (result.isConfirmed) {

        await axios.delete(`http://localhost:4000/api/notes/${id}`);
        getNotes();
        Swal.fire("Deleted!", "", "success");

      }

    });


  }

    return (

      <div className="row">
        {
          notes.map(
            
          note => 

          <div className="col-md-4 p-2" key={note._id}> 
            <div className="card">

                <div className="card-header d-flex justify-content-between" style={{ backgroundColor: note.category?.color }}>
                  <h5> { note.title } </h5>
                  <Link className="btn btn-secondary" to={`/edit/${note._id}`}>
                    Edit
                  </Link>
                </div>

                <div className="card-body">
                  <p> { note.content } </p>
                  <p> { note.author } </p>
                  <p> { format(note.date) } </p>
                  <p><b>{ JSON.stringify(note.category?.name).slice(1, -1)  } </b></p>
                </div>

                <div className="card-footer"  style={{ backgroundColor: note.category?.color }}>
                  <button className="btn btn-danger" onClick={()=>deleteNote(note._id)}>Delete</button>
                </div>

              </div> 
          </div>

          )
        }
      </div>
    )

}

export default Noteslist;
