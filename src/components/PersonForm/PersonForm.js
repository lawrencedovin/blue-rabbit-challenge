import React, {useState} from "react";
import "./PersonForm.css";
import { client } from "../../utils/axiosClient";

const PersonForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('names', firstName, lastName, 'image', image);
    addPerson(firstName, lastName, image);
  };

  const addPerson = (firstName, lastName, image) => {
    client
       .post('', {
          firstName,
          lastName,
          image
       })
       .then((response) => {
          setPosts([response.data, ...posts]);
       });
       setFirstName('');
       setLastName('');
       setImage('');
 };

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-4">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">New Person Form</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstNameInput" 
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label for="firstNameInput">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastNameInput" 
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label for="lastNameInput">Last Name</label>
                    </div>
                    <div className="mb-4">
                        <label for="imageInput" className="form-label text-start">Upload Image</label>
                        <input 
                          type="file" 
                          className="form-control" 
                          id="imageInput" 
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="d-grid mb-2">
                      <button className="btn btn-submit btn-login text-uppercase fw-bold" type="submit">
                        <i className="fab fa-google me-2"></i> Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default PersonForm;