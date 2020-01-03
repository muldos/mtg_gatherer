import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddColorForm extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        const { _title, _color } = this.refs
        event.preventDefault();
        
        console.log(`New Color: ${_title.value} ${_color.value}`)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Control ref="_title" type="text" placeholder="color title ... " required />
                <Form.Control ref="_color" type="color" required />
                <Button type="submit">Add</Button>
            </Form>
        );

    }

}

export default AddColorForm;