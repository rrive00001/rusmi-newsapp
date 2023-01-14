import React, { Component } from "react";
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Router from "next/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Home.module.css";
import { updateCategory } from '../redux/action/category_action';
import { updateList } from '../redux/action/newslist_action';
import { updateSearch } from "../redux/action/search_action";
import { updateNewsDetails } from "../redux/action/details_action";
import { updateMostViewed } from "../redux/action/mostviewed_action";

//import {createStore} from "redux";
//import { saveToLocalStorage, loadFromLocalStorage } from "/redux/helper";


const NewsDetails = (props) => {
  return 
     <>
        <div>
          <style type="text/css">
            {`
              .carousel {
                width:900px;
                height:500px;
                margin: auto;
              }
              
              .btn-flat {
                background-color: #517D18;
                color: white;
              }

              .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
            `}
          </style>

          <Navbar bg="success" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">LOGO</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/indexNews">HOME</Nav.Link>
                  <NavDropdown title="CATEGORY" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action4">
                      Indonesia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Business
                    </NavDropdown.Item>
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

          <br />
          <h3>DETAIL BERITA</h3>
         

          <br />
          <br />
          <br /> 
          <br />
          <br />
          <br />

          <Navbar bg="success" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand>© Copyright 2023 | RR</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </>
}


const mapStateToProps = state => ({
  newsDetailsReducer: state.newsDetailsReducer
});

export default connect(mapStateToProps)(NewsDetails);
