import React, { useEffect, useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { getUserAction } from '../../redux/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {

    let dispatch = useDispatch();


    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        role: ''
       
    }
    );
    let { id } = useParams();
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUserAction(id));
    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

    const { firstName, lastName, role} = state;

    return (
        <div className="container" id="update" >

            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header id="header" ><h3 className="profile">PROFILE DETAILS</h3></Card.Header>
                <Form>
                    <Card.Body id="body" >
                        <div className="container">
                            <div className="profile-item">
                                <h3><label id="label">First Name:</label> {firstName}</h3>
                            </div>
                            <div className="profile-item">
                                <h3> <label id="label">Last Name:</label> {lastName}</h3>
                            </div>
                            <div className="profile-item">
                                <h3> <label id="label">Role :</label> {role}</h3>
                            </div>
                            {/* <div className="profile-item">
                                <h2 className=" p-3 "> <label id="label"> </label><br></br> {bio}</h2>
                            </div> */}
                            <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                Home
                            </Button>
                            <Button id="btn" href={'/' + id} className="w-30 p-3 float-right" variant="primary" >
                                Update
                            </Button>
                        </div>



                    </Card.Body>
                </Form>
            </Card>

        </div >
    );

}


export default ViewDetails;