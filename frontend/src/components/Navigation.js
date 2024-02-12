
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Note</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Create Category</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/user">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

}

export default Navigation;
