import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateUser = () =>{

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState();

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    setUsers(res.data);
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

   const onSubmit = async e =>{

    e.preventDefault();
    
    await axios.post('http://localhost:4000/api/users', { username : username });

    setUsername('');

    getUsers();
  }

  const deleteUser = async (id) =>{
    await axios.delete('http://localhost:4000/api/users/' + id);
    getUsers();
  }

    return (

      <div className="row">
        <div className="col-md-4">
            <div className="card card-body">
              <h3> Create New User </h3>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input 
                  type="text" className="form-control" 
                  onChange={onChangeUsername} 
                  value={username}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
              </form>
            </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
          {
            users.map(user=> (
              <li className="list-group-item list-group-item-action" 
                key={user._id}
                onDoubleClick={()=> deleteUser(user._id)}
                >
                {user.username}
              </li>)
            )
          }
          </ul>
        </div>
      </div>

    );

}

export default CreateUser;