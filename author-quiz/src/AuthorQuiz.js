import React from 'react';
import './AuthorQuiz.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hero from "./Components/Hero";
import Turn from "./Components/Turn";
import Continue from "./Components/Continue";
import Footer from "./Components/Footer";
import Link from "react-router-dom/es/Link";

function AuthorQuiz(props) {
    return (
        <div className="container-fluid">
            <Hero/>
            <Turn {...props.turnData} highlight={props.highlight} onAnswerSelected={props.onAnswerSelected}/>
            <Continue show={props.highlight === 'correct'} onContinute={props.onContinue}/>
            <p><Link to="/add">Add an Author</Link></p>
            <Footer/>
        </div>
    );
}

export default AuthorQuiz;