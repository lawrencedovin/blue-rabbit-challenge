import React from "react";
import "./PersonForm.css";

const PersonForm = () => {
    return (
        // <form>
        //     <div class="input-group input-group-sm">
        //         <span class="input-group-text">First and Last name</span>
        //         <input type="text" aria-label="First name" class="form-control" />
        //         <input type="text" aria-label="Last name" class="form-control" />
        //     </div>
        //     <div class="mb-3">
        //         <label for="formFileSm" class="form-label">Upload Image</label>
        //         <input class="form-control form-control-sm" id="formFileSm" type="file" />
        //     </div>
        // </form>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-3 my-4">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">Create New Person</h5>
                  <form>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="firstNameInput"/>
                      <label for="floatingInput">First Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="lastNameInput" />
                      <label for="floatingInput">Last Name</label>
                    </div>
                    <div class="form-floating mb-4">
                      <input type="text" class="form-control" id="lastNameInput" />
                      <label for="floatingInput">Last Name</label>
                    </div>
                    <div class="d-grid mb-2">
                      <button class="btn btn-submit btn-login text-uppercase fw-bold" type="submit">
                        <i class="fab fa-google me-2"></i> Sign in with Google
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