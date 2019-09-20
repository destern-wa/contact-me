import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {Component} from "react";

export default class ContactDetails extends Component {

  render () {

    return (
      <Col xs="12" sm="8">
        <h2>{this.props.formHeading}</h2>
        <Form onSubmit={this.props.onFormSubmit}>
          <FormGroup row>
            <Label for="contactName" sm={4} xs={12}>Name</Label>
            <Col>
              <Input id="contactName" name="name"
                     type="text" placeholder="Contact name"
                     onChange={e => this.props.handleInput("name", e.target.value)}
                     value={this.props.currentItem.name || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactAddress" sm={4} xs={12}>Address</Label>
            <Col>
              <Input id="contactAddress" name="addressLine1"
                     type="text" placeholder="Address line 1"
                     onChange={e => this.props.handleInput("addressLine1", e.target.value)}
                     value={this.props.currentItem.addressLine1 || ''}
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
                     onChange={e => this.props.handleInput("addressLine2", e.target.value)}
                     value={this.props.currentItem.addressLine2 || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactSuburb" sm={4} xs={12}>Suburb</Label>
            <Col>
              <Input id="contactSuburb" name="suburb"
                     type="text" placeholder="Suburb"
                     onChange={e => this.props.handleInput("suburb", e.target.value)}
                     value={this.props.currentItem.suburb || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactState" sm={4} xs={12}>State</Label>
            <Col>
              <Input id="contactState" name="state"
                     type="text" placeholder="State"
                     onChange={e => this.props.handleInput("state", e.target.value)}
                     value={this.props.currentItem.state || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactCountry" sm={4} xs={12}>Country</Label>
            <Col>
              <Input id="contactCountry" name="country"
                     type="text" placeholder="Country"
                     onChange={e => this.props.handleInput("country", e.target.value)}
                     value={this.props.currentItem.country || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactEmail" sm={4} xs={12}>Email</Label>
            <Col>
              <Input id="contactEmail" name="email"
                     type="email" placeholder="user@email.domain"
                     onChange={e => this.props.handleInput("email", e.target.value)}
                     value={this.props.currentItem.email || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactPhone" sm={4} xs={12}>Phone</Label>
            <Col>
              <Input id="contactPhone" name="phone"
                     type="text" placeholder=""
                     onChange={e => this.props.handleInput("phone", e.target.value)}
                     value={this.props.currentItem.phone || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactMobile" sm={4} xs={12}>Mobile</Label>
            <Col>
              <Input id="contactMobile" name="mobile"
                     type="text" placeholder=""
                     onChange={e => this.props.handleInput("mobile", e.target.value)}
                     value={this.props.currentItem.mobile || ''}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col style={{textAlign: "center"}}>
              <Button outline color="danger" type="cancel" id="btnCancel" value="Cancel"
                      onClick={this.props.onFormCancel}>Cancel</Button>
              <Button color="primary" type="submit" id="btnSave" value="Save">Save</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    );
  };
}