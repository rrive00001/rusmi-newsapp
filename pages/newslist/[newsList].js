import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
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
//import styles from "../styles/Home.module.css";



// import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';



const NewsList = (props) =>{
  return <>
        <div>
        <style type="text/css">
            {`
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
            <h3> BABABABA DAFTAR BERITA PER KATEGORI</h3>
            <br/>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  ini isi berita
                  {props.newsListReducer.title}
                </Card.Text>
                <Button variant="flat">Go somewhere</Button>
                </Card.Body>
              </Card>
            <br/>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>ini JUDUL <br/>{props.newsListReducer.link}</Card.Title>
                      <Card.Text>
                        Ini isi berita<br/>
                        {props.newsListReducer.headline}

                      </Card.Text>
                       <Button variant="flat">Baca selengkapnya</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <br/>
            
            <br/>


            <Navbar bg="success" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>© Copyright 2022 | RR</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
      </>
  

}

const mapStateToProps = state => ({
  newsListReducer : state.newsListReducer,
  newsDetailsReducer : state.newsDetailsReducer,
});

export default connect(mapStateToProps)(NewsList);

// 

/* 
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
      <>
        <div>
        <style type="text/css">
            {`
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
            <h3> BABABABA DAFTAR BERITA PER KATEGORI</h3>
            <br/>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>JUDUL BERITA</Card.Title>
                      <Card.Text>
                        Ini isi berita
                      </Card.Text>
                       <Button variant="flat">Baca selengkapnya</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <br/>
            
            <br/>


            <Navbar bg="success" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>© Copyright 2022 | RR</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
      </>
    );
  }
}

*/




/*
const NewsList = (props) => {
  return       <>
        <div>
        <style type="text/css">
            {`
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
            <h3> BABABABA DAFTAR BERITA PER KATEGORI</h3>
            <br/>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>JUDUL BERITA</Card.Title>
                      <Card.Text>
                        Ini isi berita
                      </Card.Text>
                       <Button variant="flat">Baca selengkapnya</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <br/>
            
            <br/>


            <Navbar bg="success" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>© Copyright 2022 | RR</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
      </>
}


const mapStateToProps = state => ({
  newsListReducer : state.newsListReducer,
  newsSearchReducer : state.newsSearchReducer,
  newsDetailsReducer : state.newsDetailsReducer,
  mostViewedReducer : state.mostViewedReducer
});

export default connect(mapStateToProps)(NewsList);


//export default CountryDetail

*/