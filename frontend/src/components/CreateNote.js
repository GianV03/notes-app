import React, { Component } from 'react'

export default class CreateNote extends Component {

  onSubmit = (e) =>{
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>
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
