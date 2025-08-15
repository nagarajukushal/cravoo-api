import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
    <div className="row w-100 justify-content-end">
      <div className="col-12 col-sm-10 col-md-7 col-lg-5 ms-auto me-4 me-lg-5">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="John Doe"/>
                <label htmlFor="floatingName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-outline-primary btn-login text-uppercase fw-bold" type="submit">Sign up</button>
                {/* <button className="btn btn-outline-danger btn-login text-uppercase fw-bold mt-2" type="reset">Reset Password</button> */}
              </div>
              <div className='mt-4'>
                <strong>Already have an account? </strong> <Link to = '/login'>Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;