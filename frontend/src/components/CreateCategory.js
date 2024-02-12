import axios from 'axios'
import { React, useEffect, useState } from 'react'

const CreateCategory = () =>{

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState();
    const [color, setColor] = useState();
    const [description, setDescription] = useState();

    useEffect(
        ()=>{
            getCategories();
    }, []);

    const getCategories = async () =>{
        const categories = await axios.get('http://localhost:4000/api/categories');
        setCategories(categories.data);
    }

    const onInputChange = (e) =>{

        console.log(e.target.value)
        const{ name, value } = e.target;

        const actions = {
            'name' : setName,
            'color' : setColor,
            'description' : setDescription
        }

        if(actions[name]){
            actions[name](value)
        }
    }

    const onSubmit = async () =>{

        const newCategory = {
            name: name,
            color: color, 
            description: description
        }

        await axios.post('http://localhost:4000/api/categories', newCategory);
        getCategories();
    }

    const onDelete = async (id) =>{
      await axios.delete(`http://localhost:4000/api/categories/${id}`);
      getCategories();
    }

    return(
        <div className="row">
        <div className="col-md-4">
            <div className="card card-body">
              <h3> Create New Category </h3>
              <form onSubmit={onSubmit}>

                <div className="form-group">
                  <input 
                  type="text" className="form-control"
                  name="name"
                  onChange={onInputChange}
                  placeholder="name" required
                  value={name}
                  />
                </div>

                <div className="form-group">
                  <input 
                  type="color" className="form-control"
                  name="color"
                  onChange={onInputChange}
                  placeholder="color" 
                  value={color}
                  />
                </div>

                <div className="form-group">
                    <textarea
                    className="form-control" 
                    name="description" placeholder="description"
                    onChange={onInputChange}
                    value={description}
                    >
                    </textarea>
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
                categories.map(category =>(
                    <li className="list-group-item list-group-item-action" 
                     key={category._id}
                     onDoubleClick={() => onDelete(category._id)}
                     style={{backgroundColor: category.color, color: 'white'}}
                     >
                     {category.name} |   {category.description}
                     </li>
                )
                )
            }
          </ul>
        </div>
      </div>
       
    );

        
}

export default CreateCategory;