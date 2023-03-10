import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { updateSubCategory } from "../redux/action/subcategory_action";
import { updateList } from '../redux/action/newslist_action';
import { updateSearch } from "../redux/action/search_action";
import { updateNewsDetails } from "../redux/action/details_action";
import { updateMostViewed } from "../redux/action/mostviewed_action";
import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'react-bootstrap/Image'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: {},
      mostViewedData:{},
      
    };
  }

  componentDidMount() {
    this.getNewsData();
    this.getMostViewedData();
  }

  getNewsData = async () => {
    const { data } = await axios.get("https://jakpost.vercel.app/api/category");
    console.log("ini CATEGORY data JAKPOST", data);
    this.setState({ newsData: data });
  };

  getMostViewedData = async () => {
    const { data } = await axios.get("https://jakpost.vercel.app/api/category/most-viewed");
    console.log("ini MOST VIEWED data  JAKPOST", data);
    this.setState({ mostViewedData: data });
  };

 

  getNewsCategory(category) {
    this.state.data.map((category,list) => <li key={list}>{category.category}</li>);
    this.props.dispatch(updateCategory(category.category));    
    Router.push(`/api/category/${category.link}`);
    
  }

   showMostViewedData(mostviewed){
    this.state.data.map((mostviewed,list) => <li key={list}>{mostviewed.mostviewed}</li>);
    this.props.dispatch(updateMostViewed(mostviewed.mostviewed)); 
     Router.push(`/api/category/mostviewed/${category.link}`);   
  }

    getSubCategory(subcategory){
      this.state.data.map((subcategory,list1) => <li key={list1}>{subcategory.subcategory}</li>);
      this.props.dispatch(updateSubCategory(subcategory.subcategory));
       Router.push(`/api/category/${subCategory.link}`);
    
  //   //Router.push(`/api/category/[category]/[sub_category]/${subCategory.Slug}`);

   }

  //buat dapat daftar berita per kategori
  getNewsList(category){
    console.log('clicked', category);
//    this.state.data.map((newslist,list) => <li key={list}>{newslist.link}</li>);   
 //   Router.push(`/newslist/${category.link}`);
//    Router.push(`[/api/category/[category]/[sub_category]/page/[page]`);

  }

 
  
  getNewsMostViewed(mostviewed){
    this.props.dispatch(updateMostViewed(mostviewed.post));
    Router.push(`/api/category/${category.Slug}`);

  }

  render() {
    const { newsData } = this.state
    const { mostViewedData } = this.state
    return (
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
              }

              a {
                color = white;
              }
              
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
          <h3>HEADLINE NEWS</h3>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://img.jakpost.net/c/2022/08/11/2022_08_11_128829_1660201636._large.jpg"
                alt="Megawati"
              />
              <Carousel.Caption>
                <h3>Megawati has picked presidential candidate for 2024, says Puan</h3>
                <p>
                  The party chairman has arrived at the??decision and we are all just waiting for the announcement.
                </p>
                <a href ="https://jakpost.vercel.app/api/detailpost/indonesia/2023/01/09/megawati-has-picked-presidential-candidate-for-2024-says-puan">
                  Megawati has picked presidential candidate for 2024, says Puan
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://img.jakpost.net/c/2019/04/16/2019_04_16_70126_1555384127._thumbnail.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Parties rally to reject PDI's proposal to adopt closed-list electoral system</h3>
                <p>Eight out of nine political parties at the House of Representatives have expressed??strong.</p>
                <a href ="https://jakpost.vercel.app/api/detailpost/indonesia/2023/01/08/party-leaders-reject-closed-list-electoral-system">
                  Parties rally to reject PDI's proposal to adopt closed-list electoral system
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br />
          <br />
          <br /> 
          <br />
          <br />
          <br />
          <br/>
          <Navbar bg="success" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand>CATEGORY</Navbar.Brand>
            </Container>
          </Navbar>
          
          <br/>

          <Container>
            {newsData.category && newsData.category.map((category) => {
              return category.subCategory ? 
              <DropdownButton variant="flat" size="xxl" as={ButtonGroup} 
               title={category.name} id="bg-nested-dropdown">
                {category.subCategory && category.subCategory.map((subCategory) =>{
                  return (
                    <Dropdown.Item onClick={() => this. getNewsList(category)}>
                      <a href={subCategory.link}>
                        {subCategory.name}<br/>
                      </a>
                    </Dropdown.Item>
                  )
                })}
                  
              </DropdownButton> : 
                <a href ={category.link}>
                  <Button variant="flat" size="xxl" 
                  onClick={() => this. getNewsList(category)}>
                    {category.name}
                  </Button>
                </a>
           })}
          </Container>
          <br/>

          <Navbar bg="success" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand>?? Copyright 2023 | RR</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

//buat connect redux ke component
const mapStateToProps = (state) => ({
  newsListReducer : state.newsListReducer,
  newsSearchReducer : state.newsSearchReducer,
  newsDetailsReducer : state.newsDetailsReducer,
  mostViewedReducer : state.mostViewedReducer
});

export default connect(mapStateToProps)(App);
