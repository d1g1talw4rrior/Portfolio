import React, { Component } from "react";

class Projektit extends Component {

    render() {

        return (

            <div>

                <h1>Projects</h1>

                <div className="projekti-napit">

                    <a
                        href="https://github.com/d1g1talw4rrior/project1"
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project 1
                    </a>

                    <a
                        href="https://github.com/d1g1talw4rrior/project2"
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project 2
                    </a>

                    <a
                        href="https://github.com/d1g1talw4rrior/project3"
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project 3
                    </a>

                </div>

            </div>

        );
    }
}

export default Projektit;