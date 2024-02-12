import axios from 'axios';
import  { React, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router-dom';

const CreateNote = () => {

  const {id} = useParams();

  /** States */
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date());
  const [isNew, setNew] = useState(true);
  const [_id, setId] = useState('');

  /** Brings needed data from the backend */
  const initValues = async () =>{
    const usersRes = await axios.get('http://localhost:4000/api/users');
    const categoriesRes = await axios.get('http://localhost:4000/api/categories');

    setCategories(categoriesRes.data);
    setSelectedCategory(categoriesRes.data[0]);
    setUsers( usersRes.data.map(user=> user.username) );
    setUserSelected( usersRes.data[0].username );

    /** When it is 'editing' */
    if(id){

      const note = await axios.get(`http://localhost:4000/api/notes/${ id }`);

      setUserSelected( note.data.author );
      setSelectedCategory(note.data.category);
      setTitle( note.data.title );
      setContent( note.data.content );
      setDate(new Date(note.data.date));
      setNew(false);
      setId( id ); 

    }
  }

  useEffect( ()=>{

    initValues();
   
  }, []);

  /** Submits data to update or create */
  const onSubmit = (e) =>{

    e.preventDefault();


    const newNote  = {
      categoryId: selectedCategory,
      title: title,
      content: content,
      date: date,
      author: userSelected
    };


    if(isNew){

      axios.post('http://localhost:4000/api/notes', newNote);

    }else{
      console.log(newNote)
      axios.put(`http://localhost:4000/api/notes/${_id}`, newNote);

    }
    
    window.location.href="/"

  }

  /** Updates states when inputs are changed */
  const onInputChange = e => {

    const { name, value } = e.target;
  
    /** Stores the actions to every 'name' */
    const actions = {
      'category': setSelectedCategory,
      'userSelected': setUserSelected,
      'title': setTitle,
      'content': setContent,
    };
    
    if (actions[name]) {
      actions[name](value);
    }

  }

  const onChangeDate = date => {
      console.log(date)
     setDate(new Date(date));
  }


    return (

      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>

          {/** SELECT USER */}
          <div className="form-group">
            <select 
            className="form-control"
            name="userSelected"
            onChange={ onInputChange}
            value={userSelected}
            >
              {
                 users.map(user=> 
                  <option key={user} value={user}>
                    {user}
                  </option>)
              }
              
            </select>
          </div>

          {/** SELECT CATEGORY */}
          <div className="form-group">
            <select 
            className="form-control"
            name="category"
            onChange={ onInputChange}
            value={selectedCategory}
            >
              {
                 categories.map(category=> 
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>)
              }
              
            </select>
          </div>

          {/** Title */}
          <div className="form-group">
            <input type="text" 
              className="form-control" name="title"  
              onChange={ onInputChange}
              placeholder="Title" required 
              value={title}
              />
          </div>

          {/** Content */}
          <div className="form-group">
            <textarea name="content" 
              className="form-control" placeholder="content"
              onChange={ onInputChange}
              value={ content}
              ></textarea>
          </div>

          {/** Date */}
          <div className="form-group">
            <DatePicker 
              className="form-control" 
              onChange={ onChangeDate}
              value={date}
              />
          </div>

          <form onSubmit={ onSubmit}>

            <button type="submit" className="btn btn-primary">
              Create Note
            </button>

          </form>
        </div>
        </div>

    );

}


export default CreateNote;