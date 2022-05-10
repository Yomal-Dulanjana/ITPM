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
import StudentQuiz from "./components/student-quiz.component";
import Answer from "./components/answer-list.component";


import CreateMark from "./components/create-mark.component";
import EditMark from "./components/edit-mark.component";
import MarkList from "./components/mark-list.component";
import markPDF from "./components/marksPDF";

import CreateSubject from "./components/create-subject.component";
import EditSubject from "./components/edit-subject.component";
import SubjectList from "./components/subject-list.component";
import SubjectStudentList from "./components/subjectstudent-list.component";

import CreateTime from "./components/create-time.component";
import EditTime from "./components/edit-time.component";
import TimeList from "./components/time-list.component";
import TimeStudentList from "./components/timestudent-list.component";
import timePDF from "./components/timePDF";

import CreateExam from "./components/create-exam.component";
import EditExam from "./components/edit-exam.component";
import ExamList from "./components/exam-list.component";
import examPDF from "./components/examPDF";

import CreateGrade from "./components/create-grade.component";
import EditGrade from "./components/edit-grade.component";
import GradeList from "./components/grade-list.component";
import gradePDF from "./components/gradePDF";
import GradeStudentList from "./components/gradestudent-list.component";

import CreateTeacher from "./components/create-teacher.component";
import EditTeacher from "./components/edit-teacher.component";
import TeacherList from "./components/teacher-list.component";
import teacherPDF from "./components/teacherPDF";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import studentPDF from "./components/studentPDF";



function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark fixed-top" style={{ backgroundColor: "#FFFFFF" }} >
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

                <Route exact path="/" component={StudentQuiz} />
                <Route path="/student-quiz" component={StudentQuiz} />
                <Route path="/answer-list" component={Answer} />


                <Route exact path="/" component={CreateMark} />
                <Route path="/create-mark" component={CreateMark} />
                <Route path="/edit-mark/:id" component={EditMark} />
                <Route path="/mark-list" component={MarkList} />

                <Route path="/marksPDF" component={markPDF} />


                <Route exact path='/' component={CreateExam} />
                <Route path="/create-exam" component={CreateExam} />
                <Route path="/edit-exam/:id" component={EditExam} />
                <Route path="/Exam-list" component={ExamList} />
                <Route path="/examPDF" component={examPDF} />

                <Route exact path='/' component={CreateGrade} />
                <Route path="/create-grade" component={CreateGrade} />
                <Route path="/edit-grade/:id" component={EditGrade} />
                <Route path="/Grade-list" component={GradeList} />
                <Route path="/gradePDF" component={gradePDF} />
                <Route path="/GradeStudent-list" component={GradeStudentList} />

                <Route exact path="/" component={CreateSubject} />
                <Route path="/create-subject" component={CreateSubject} />
                <Route path="/edit-subject/:id" component={EditSubject} />
                <Route path="/subject-list" component={SubjectList} />
                <Route path="/subjectstudent-list" component={SubjectStudentList} />
                
                <Route exact path="/" component={CreateTime} />
                <Route path="/create-time" component={CreateTime} />
                <Route path="/edit-time/:id" component={EditTime} />
                <Route path="/time-list" component={TimeList} />
                <Route path="/timestudent-list" component={TimeStudentList} />
                <Route path="/timePDF" component={timePDF} />

                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
                <Route path="/studentPDF" component={studentPDF} />

                <Route exact path='/' component={CreateTeacher} />
                <Route path="/create-teacher" component={CreateTeacher} />
                <Route path="/edit-teacher/:id" component={EditTeacher} />
                <Route path="/teacher-list" component={TeacherList} />      
                <Route path="/teacherPDF" component={teacherPDF} /> 
                 



              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
