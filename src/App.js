import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import PhotographyPage from './pages/PhotographyPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Johnny Luong",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Resume', path: '/resume' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Personal Photography', path: '/photography' }
      ],
      home: {
        title: 'Keep moving forward.',
        subTitle: 'Johnny Luong',
        content: 'See my projects below'
      },
      resume: {
        title: 'Resume'
      },
      contact: {
        title: 'Contact Me'
      },
      about: {
        title: 'About'
      },
      photography: {
        title: 'a personal hobby'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Johnny Luong</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="nabar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/photography">Photography</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() =>
            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              content={this.state.home.content} />
            }
          />

          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} />} />

          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />

          <Route path="/photography" render={() => <PhotographyPage title={this.state.photography.title} />} />



          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
