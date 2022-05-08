import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import home from "./home";
import CreateQuiz from "./components/create-quiz.component";
import EditQuiz from "./components/edit-quiz.component";
import QuizList from "./components/quiz-list.component";

import CreateSubject from "./components/create-subject.component";
import EditSubject from "./components/edit-subject.component";
import SubjectList from "./components/subject-list.component";

import CreateTime from "./components/create-time.component";
import EditTime from "./components/edit-time.component";
import TimeList from "./components/time-list.component";
import timePDF from "./components/timePDF";


function App() {
  return (
    <Router>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home"  style={{ color: "#FFFFFF"  }}>
            <h3>  STUDENT MANAGEMENT SYSTEM</h3>
          </a>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-auto mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-auto mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/aboutus"
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/aboutus"
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{ color: "  #000000" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h4
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{ color: "#000000" }}
              >
                DS ACADEMY
              </h4>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </form>
              <br></br>
              <div className="container-fluid">
                <div className="navbar-nav">
                  <a
                    className="nav-link active"
                    href="/customer-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Customer</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/Quiz-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Quiz</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/employee-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Employee</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/delivery-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Delivery</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/feedback-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Feedback</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/stock-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Stock</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/subject-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Subject</h5>
                  </a>
                  <br />
                  <a
                    className="nav-link active"
                    href="/time-list"
                    style={{ color: "#000000" }}
                  >
                    <h5>Time Table</h5>
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      ]
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/home" component={home} />
                <Route exact path="/" component={CreateQuiz} />
                <Route path="/create-quiz" component={CreateQuiz} />
                <Route path="/edit-quiz/:id" component={EditQuiz} />
                <Route path="/quiz-list" component={QuizList} />
                <Route exact path="/" component={CreateSubject} />
                <Route path="/create-subject" component={CreateSubject} />
                <Route path="/edit-subject/:id" component={EditSubject} />
                <Route path="/subject-list" component={SubjectList} />
                <Route exact path="/" component={CreateTime} />
                <Route path="/create-time" component={CreateTime} />
                <Route path="/edit-time/:id" component={EditTime} />
                <Route path="/time-list" component={TimeList} />
                <Route path="/timePDF" component={timePDF} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
