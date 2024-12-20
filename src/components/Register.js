import React from "react";
import '../App.css';

const Register = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="card p-4" style={{width:"400px"}}>
                <h3 className="text-center">Register</h3>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 w-100">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;    