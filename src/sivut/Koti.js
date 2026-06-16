import React, { Component } from "react";

class Koti extends Component {

    render() {

        return (

            <div className="koti-container">

                <div className="koti-text">

                    <h2>Hello.</h2>
                    <h3>I'm Eeli</h3>
                    <p>ICT Student</p>

                    <a
                        href="/resume.pdf"
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume
                    </a>

                </div>

                <div className="koti-image">

                    <img
                        src="question.png"
                        alt="Question"
                    />

                    <a
                        href="mailto:eeli.sivonen4@email.com"
                        className="button image-btn"
                    >
                        Got Project?
                    </a>

                </div>

            </div>

        );
    }
}

export default Koti;