import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";

const SignUp = () => {

    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
        pnumber: '',
        password: ''

    })

    const Push = async (e) => {

        const {fName, lName, email, pnumber, password} = details;

        const res = await fetch("https://a-dev-auth-default-rtdb.firebaseio.com/simpleform.json",
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fName,
                    lName,
                    email,
                    pnumber,
                    password

                })
            })
    }




    return (

            <div>
            <br />
            <br />
            <br />

            <h1 className="mb-3">Sign Up</h1>
            <Form className="mt-30 w-50 mx-auto" onSubmit={Push}>
            {error && <Alert varient="danger">{error}</Alert>}
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value = {firstName}  onChange={(e)=>
                        setDetails({...details,fName:e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value = {lastName}  onChange={(e)=>
                        setDetails({...details,lName:e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Email Address" onChange={(e)=>
                        setDetails({...details,email:e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone Number" onChange={(e)=>
                        setDetails({...details,pnumber:e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" onChange={(e)=>
                        setDetails({...details,password:e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password"  />
                </Form.Group>
                <Button variant="primary" disabled={loading} type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <br />
            <br />
        </div>



    )
}
export default SignUp;

