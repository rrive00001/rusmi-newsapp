import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import styles from "../styles/mystyles.css";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import { connect } from "react-redux";
import Router from "next/router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/Home.module.css";
import Image from 'react-bootstrap/Image'


// import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';


// 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: {},
    };
  }

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData = async () => {
    const { data } = await axios.get(
      "https://jakpost.vercel.app/api/category/life/food"
    );
    console.log("ini ringkasan data JAKPOST", data);
    //console.log('clicked', country.Slug);
    this.setState({ newsData: data });
  };

  render() {
    const{ newsData } = this.state
    return (
      <div>
            <Navbar bg="success" variant="dark" expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/indexNews">HOME</Nav.Link>
                            <NavDropdown title="CATEGORY" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">Indonesia</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">World</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Selengkapnya....
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
        </Navbar>

            <br/>

            <br/>
            <h3>DETAIL BERITA</h3>

             <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


            <Container>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    
                </Row>
            </Container>


            <br/>


            <Navbar bg="success" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>© Copyright 2022 | Horas Wicaksono</Navbar.Brand>
                </Container>
            </Navbar>
    </div>
    );
  }
}
