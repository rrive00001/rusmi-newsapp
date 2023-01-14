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


const NewsCategoryList = (props) => {
  return <div>
            <h1>DAFTAR KATEGORI BERITA</h1>
            <br/>

            <Container>
                <Row>
                    <Col> {[
                            'Primary',
                            ].map((variant) => (
                                <Card
                                bg={variant.toLowerCase()}
                                key={variant}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2"
                                >
                                    <Card.Header>CATEGORY</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{props.newsReducer.Category} </Card.Title>
                                    </Card.Body>
                                </Card>
                        ))}                    
                    </Col>
                    
                    </Row>
                </Container>
                <br/>                
    </div>
}


const mapStateToProps = state => ({
  newsCategoryReducer: state.newsCategoryReducer
});

export default connect(mapStateToProps)(NewsCategoryList);
