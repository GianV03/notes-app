import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date(),
    new: false,
    _id: ''
  }

  async componentDidMount(){

    const usersRes = await axios.get('http://localhost:4000/api/users');

    this.setState({
      users : usersRes.data.map(user=> user.username), 
      userSelected : usersRes.data[0].username
    });

    if(this.props.match.params.id){

      const note = await axios.get(`http://localhost:4000/api/notes/${this.props.match.params.id}`);

      this.setState(
        { 
          userSelected: note.data.author,
          title: note.data.title,
          content: note.data.content,
          date: Date(note.data.date),
          new: false,
          _id : this.props.match.params.id
        }
      );

    }

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const newNote  = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected
    };

    if(this.state.new){

      axios.post('http://localhost:4000/api/notes', newNote);

    }else{

      axios.put(`http://localhost:4000/api/notes/${this.state._id}`, newNote);

    }
    
    window.location.href="/"

  }

  onInputChange = e => {

    this.setState({ 
      [e.target.name] : e.target.value
    });

  }

  onChangeDate = date => {
    this.setState({ date : date });
  }

  render() {

    return (

      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>

          {/** SELECT USER */}
          <div className="form-group">
            <select 
            className="form-control"
            name="userSelected"
            onChange={this.onInputChange}
            value={this.state.userSelected}
            >
              {
                this.state.users.map(user=> 
                  <option key={user} value={user}>
                    {user}
                  </option>)
              }
              
            </select>
          </div>

          <div className="form-group">
            <input type="text" 
              className="form-control" name="title"  
              onChange={this.onInputChange}
              placeholder="Title" required 
              value={this.state.title}
              />
          </div>

          <div className="form-group">
            <textarea name="content" 
              className="form-control" placeholder="content"
              onChange={this.onInputChange}
              value={this.state.content}
              ></textarea>
          </div>

          <div className="form-group">
            <DatePicker 
              className="form-control" 
              onChange={this.onChangeDate}
              value={this.state.date}
              />
          </div>

          <form onSubmit={this.onSubmit}>

            <button type="submit" className="btn btn-primary">
              Create Note
            </button>

          </form>
        </div>
      </div>

    )

  }

}
