import React, { Component } from 'react';
import './styles/components/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import CardSuggestionItem from './CardSuggestionItem';


class Header extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Mtg Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline onSubmit={this.props.handleSubmit}>
                        <AsyncTypeahead
                            id="searchBox"
                            allowNew={false}
                            isLoading= {this.props.searchSuggestionIsLoading}
                            options= {this.props.suggestions}
                            multiple={false}
                            onInputChange={this.props.handleInputChange}
                            onChange={this.props.handleSuggestSelectionChange}
                            labelKey="name"
                            minLength={3}
                            onSearch={this.props.handleSearchSuggestion}
                            placeholder="Search for a MTG card..."
                            renderMenuItemChildren={(option, props, idx) => (
                                <CardSuggestionItem key={idx} cardName={option} />
                            )}
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;