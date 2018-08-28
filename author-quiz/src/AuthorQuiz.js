import React, {Component} from 'react';
import './AuthorQuiz.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hero from "./Components/Hero";
import Turn from "./Components/Turn";
import Continue from "./Components/Continue";
import Footer from "./Components/Footer";

function AuthorQuiz(props) {
    return (
        <div className="container-fluid">
            <Hero/>
            <Turn {...props.turnData} highlight={props.highlight} onAnswerSelected={props.onAnswerSelected}/>
            <Continue/>
            <Footer/>
        </div>
    );
}

export default AuthorQuiz;