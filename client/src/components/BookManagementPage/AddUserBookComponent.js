import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { addBookAction } from '../../redux/BookInfo/actions/creators';
import { connect } from 'react-redux';

class AddUserBook extends Component {

    state = {
        title: '',
        description: '',
        genre: '',
        author: '',
    }

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ ...this.state, [name]: value });
        console.log(this.state);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addBookAction(this.state);
        this.setState({
            title: '',
            description: '',
            genre: '',
            author: '',
        });
    }


    render() {
        return (
            <div className="container" id="update" >
                <Card className={"border border-dark bg-dark text-white"} >
                    <Card.Header><h3>Add Book</h3></Card.Header>
                    <div className="form-container">
                        <Form onSubmit={this.handleOnSubmit}>
                            <Card.Body >
                                <div className="form-group" >
                                    <label>Title</label>
                                    <input
                                        type="text" name="title"
                                        onChange={this.handleTextChange}
                                        value={this.state.title}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Description</label>
                                    <input
                                        type="text" name="description"
                                        onChange={this.handleTextChange}
                                        value={this.state.description}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Genre</label>
                                    <input
                                        type="text" name="genre"
                                        onChange={this.handleTextChange}
                                        value={this.state.genre}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                                 <div className="form-group" >
                                    <label>Author</label>
                                    <input
                                        type="text" name="author"
                                        onChange={this.handleTextChange}
                                        value={this.state.author}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div> 

                                <br></br>


                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Add Book</button>
                                    <Button id="btn" href='/book' className="w-30 p-3 float-right" variant="primary" >
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
export default connect(null, { addBookAction })(AddUserBook);