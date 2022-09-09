import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

import { useNavigate } from 'react-router-dom';

function Login() {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    function validateForm() {
        return uname.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (uname == "admin" && password == "admin") {
            navigate('/homepage');
        } else {
            alert("Incorrect credentials")
        }


    }

    return (
        <div>
            <div className="Login ">
                <h2 className="text-center">CRES DATABASE</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="uname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
      
                            autoFocus
                            type="text"
                            value={uname}
                            onChange={(e) => setUname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <button className="btn btn-outline-dark btn-md mt-2">Login</button>
                </Form>
            </div>





        </div>
    )
}

export default Login