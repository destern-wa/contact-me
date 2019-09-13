import React, {Component} from 'react';
import { Row, Col, Container, Label, ListGroup, ListGroupItem, Form, FormGroup, Input, Button } from "reactstrap";
import {faAddressBook, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./App.css";
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

    if (this.state.selectedItemId) {
      this.editContact();
    } else {
      this.addContact();
    }
  };

  onFormCancel = e => {
    e.preventDefault();
    this.setState({
      currentItem: {id: Date.now()},
      selectedItemId: null,
      formHeading: "Add new contact"
    });
  };

  handleInput = (prop, val) => {
    let item  = JSON.parse(JSON.stringify(this.state.currentItem));
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

  createContactListItems = contact => {
    return (
      <ListGroupItem
        key={contact.id}
        onClick={() => this.showContact(contact.id)}
        active={this.state.selectedItemId === contact.id}
      >
        <FontAwesomeIcon icon={faAddressCard} />&nbsp;
        {contact.name}

      </ListGroupItem>
    )
  };

  render() {
    const contactListItems = this.state.contacts.map(this.createContactListItems);
    return (
      <Container>
        <header className="App-header bg-dark text-light">
          <h1><FontAwesomeIcon icon={faAddressBook} />&nbsp;Contact Me</h1>
        </header>
        <main>
          <Row>
            <Col xs="12" sm="4">
              <h2>Contacts</h2>
              <ListGroup className="theList">
                {contactListItems}
              </ListGroup>
            </Col>
            <Col xs="12" sm="8">
              <h2>{this.state.formHeading}</h2>
              <Form onSubmit={this.onFormSubmit}>
                <FormGroup row>
                  <Label for="contactName" sm={4} xs={12}>Name</Label>
                  <Col>
                    <Input id="contactName" name="name"
                      type="text" placeholder="Contact name"
                      onChange={e=>this.handleInput("name", e.target.value)}
                      value={this.state.currentItem.name || ''}
                      // ref={this.props.InputElement}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactAddress" sm={4} xs={12}>Address</Label>
                  <Col>
                    <Input id="contactAddress" name="addressLine1"
                           type="text" placeholder="Address line 1"
                           onChange={e=>this.handleInput("addressLine1", e.target.value)}
                           value={this.state.currentItem.addressLine1 || ''}
                      // value={this.props.currentItem.text}
                      // ref={this.props.InputElement}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactAddressLine2" className="hidden" sm={4} xs={12}>Address line 2</Label>
                  <Col>
                    <Input id="contactAddressLine2" name="addressLine2"
                           type="text" placeholder="Address line 2"
                           onChange={e=>this.handleInput("addressLine2", e.target.value)}
                           value={this.state.currentItem.addressLine2 || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactSuburb" sm={4} xs={12}>Suburb</Label>
                  <Col>
                    <Input id="contactSuburb" name="suburb"
                           type="text" placeholder="Suburb"
                           onChange={e=>this.handleInput("suburb", e.target.value)}
                           value={this.state.currentItem.suburb || ''}
                      // value={this.props.currentItem.text}
                      // ref={this.props.InputElement}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactState" sm={4} xs={12}>State</Label>
                  <Col>
                    <Input id="contactState" name="state"
                           type="text" placeholder="State"
                           onChange={e=>this.handleInput("state", e.target.value)}
                           value={this.state.currentItem.state || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactCountry" sm={4} xs={12}>Country</Label>
                  <Col>
                    <Input id="contactCountry" name="country"
                           type="text" placeholder="Country"
                           onChange={e=>this.handleInput("country", e.target.value)}
                           value={this.state.currentItem.country || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactEmail" sm={4} xs={12}>Email</Label>
                  <Col>
                    <Input id="contactEmail" name="email"
                           type="email" placeholder="user@email.domain"
                           onChange={e=>this.handleInput("email", e.target.value)}
                           value={this.state.currentItem.email || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactPhone" sm={4} xs={12}>Phone</Label>
                  <Col>
                    <Input id="contactPhone" name="phone"
                           type="text" placeholder=""
                           onChange={e=>this.handleInput("phone", e.target.value)}
                           value={this.state.currentItem.phone || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contactMobile" sm={4} xs={12}>Mobile</Label>
                  <Col>
                    <Input id="contactMobile" name="mobile"
                           type="text" placeholder=""
                           onChange={e=>this.handleInput("mobile", e.target.value)}
                           value={this.state.currentItem.mobile || ''}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col style={{textAlign:"center"}}>
                    <Button outline color="danger" type="cancel" id="btnCancel" value="Cancel" onClick={this.onFormCancel}>Cancel</Button>
                    <Button color="primary" type="submit" id="btnSave" value="Save">Save</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
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
