import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { addUserAction } from '../../redux/actions/creators';
import { connect } from 'react-redux';

class AddUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        role: '',
        email: '',
    }

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ ...this.state, [name]: value });
        console.log(this.state);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUserAction(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            role: '',
            email: '',
        });
    }


    render() {
        return (
            <div className="container" id="update" >
                <Card className={"border border-dark bg-dark text-white"} >
                    <Card.Header><h3>Add User</h3></Card.Header>
                    <div className="form-container">
                        <Form onSubmit={this.handleOnSubmit}>
                            <Card.Body >
                                <div className="form-group" >
                                    <label>First Name</label>
                                    <input
                                        type="text" name="firstName"
                                        onChange={this.handleTextChange}
                                        value={this.state.firstName}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Last Name</label>
                                    <input
                                        type="text" name="lastName"
                                        onChange={this.handleTextChange}
                                        value={this.state.lastName}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Role</label>
                                    <input
                                        type="text" name="role"
                                        onChange={this.handleTextChange}
                                        value={this.state.role}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                 <div className="form-group" >
                                    <label>Email</label>
                                    <input
                                        type="text" name="email"
                                        onChange={this.handleTextChange}
                                        value={this.state.email}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div> 

                                <br></br>


                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Add User</button>
                                    <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                        Back
                                    </Button>



                                </div>

                            </Card.Body>
                        </Form>
                    </div>
                </Card>

            </div >
        );
    }

}
export default connect(null, { addUserAction })(AddUser);