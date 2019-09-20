import React from "react";
import {Col, ListGroup, ListGroupItem} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";

const ContactsList = (props) => {
  const createContactListItems = contact => {
    return (
      <ListGroupItem
        key={contact.id}
        onClick={() => props.showContact(contact.id)}
        active={props.selectedItemId === contact.id}
      >
        <FontAwesomeIcon icon={faAddressCard} />&nbsp;
        {contact.name}

      </ListGroupItem>
    )
  };
  const contactListItems = props.contacts.map(createContactListItems);
  return (
    <Col xs="12" sm="4">
      <h2>Contacts</h2>
      <ListGroup className="theList">
        {contactListItems}
      </ListGroup>
    </Col>
  );
};

export default ContactsList;