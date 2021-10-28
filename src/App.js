import React, {Component} from 'react';
import { Row, Col, Container } from "reactstrap";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import ContactsList from "./Components/ContactsList";
import ContactDetails from "./Components/ContactDetails";

export default class App extends Component {
  state = {};

  constructor( props ) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Win Dough",
          addressLine1: "30 Evergreen Street",
          addressLine2: "",
          suburb: "Anywhere",
          state: "WA",
          country: "Australia",
          phone: "+61892221111",
          mobile: "+61490000000",
        },
        {
          id: 2,
          name: "Ad Ministrasdv",
          addressLine1: "Unit 7A",
          addressLine2: "This Street",
          suburb: "Mytown",
          state: "SS",
          country: "USA",
          phone: "+01692627111",
          mobile: "+01590600070",
        }
      ],
      currentItem: {
        id: Date.now()
      },
      selectedItemId: null,
      formHeading: "Add new contact"
    };
  }

  addContact = () => {
    console.log("ADDING CONTACT");
    const newItem = this.state.currentItem;
    if (!newItem.name) {
      alert("Name is required!");
      return;
    }
    // use spread operator to insert new item (at start) of list
    this.setState({
      contacts: [...this.state.contacts, newItem],
      currentItem: { id: Date.now() }
    })
  };

  editContact = () => {
    console.log("EDITING CONTACT");
    const updatedContacts = this.state.contacts.map(contact => {
      if (contact.id === this.state.selectedItemId) {
        return this.state.currentItem;
      }
      return contact;
    });
    this.setState({
      contacts: updatedContacts
    })
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    if (this.state.selectedItemId) {
      this.editContact();
    } else {
      this.addContact();
    }
  };

  onFormCancel = e => {
    e.preventDefault();
    console.log("FORM CANCELLED");
    this.setState({
      currentItem: {id: Date.now()},
      selectedItemId: null,
      formHeading: "Add new contact"
    });
  };

  handleInput = (prop, val) => {
    let item  = this.state.currentItem;
    item[prop] = val;
    this.setState( {
        currentItem: item
      });
  };

  showContact = id => {
    console.log(`Contact with id ${id} was clicked`);
    const selectedContact = this.state.contacts.find(item => item.id === id);

    // Make sure we got a contact
    if (!selectedContact) {
      this.setState({
        selectedItemId: null
      });
    } else {
      this.setState({
        selectedItemId: id,
        currentItem: selectedContact,
        formHeading: "Edit contact"
      })
    }
  };

  render() {
    return (
      <Container>
        <AppHeader />
        <main>
          <Row>
            <ContactsList
              contacts={this.state.contacts}
              showContact={this.showContact}
              selectedItemId={this.state.selectedItemId}
            />
          <ContactDetails
            formHeading = {this.state.formHeading}
            currentItem = {this.state.currentItem}
            onFormSubmit = {this.onFormSubmit}
            onFormCancel = {this.onFormCancel}
            handleInput = {this.handleInput}
          />
          </Row>
        </main>
        <footer>
          <Row>
            <Col>
              &copy; Copyright David Stern 2019
            </Col>
            <Col>
              <p>Date: {new Date().toLocaleString('en-au')}</p>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
