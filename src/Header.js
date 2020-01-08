import React, { Component } from 'react';
import './styles/components/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Header extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {searchVal: ''};  
    }
    handleChange(event) {
        this.setState({searchVal: event.target.value});
      }
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Mtg Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.value} onChange={this.handleChange} />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;