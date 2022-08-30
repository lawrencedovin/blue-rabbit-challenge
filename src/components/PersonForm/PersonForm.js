import React from "react";
import "./PersonForm.css";
import { client } from "../../utils/axiosClient";

const PersonForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPerson = (firstName, lastName, image) => {

    }
  }
    return (
        // <form>
        //     <div className="input-group input-group-sm">
        //         <span className="input-group-text">First and Last name</span>
        //         <input type="text" aria-label="First name" className="form-control" />
        //         <input type="text" aria-label="Last name" className="form-control" />
        //     </div>
        //     <div className="mb-3">
        //         <label for="formFileSm" className="form-label">Upload Image</label>
        //         <input className="form-control form-control-sm" id="formFileSm" type="file" />
        //     </div>
        // </form>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-4">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">New Person Form</h5>
                  <formaxi>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="firstNameInput" placeholder="First Name"/>
                      <label for="firstNameInput">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="lastNameInput" placeholder="Last Name"/>
                      <label for="lastNameInput">Last Name</label>
                    </div>
                    <div className="mb-4">
                        <label for="imageInput" className="form-label text-start">Upload Image</label>
                        <input type="file" className="form-control" id="imageInput" />
                    </div>
                    <div className="d-grid mb-2">
                      <button className="btn btn-submit btn-login text-uppercase fw-bold" type="submit">
                        <i className="fab fa-google me-2"></i> Confirm
                      </button>
                    </div>
                  </formaxi>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default PersonForm;