import React, { Component } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import Koti from "./sivut/Koti";
import About from "./sivut/About";
import Html from "./sivut/Html";
import Css from "./sivut/Css";
import Javascript from "./sivut/Javascript";
import Reacti from "./sivut/Reacti";
import Python from "./sivut/Python";
import Nodejs from "./sivut/Nodejs";
import Github from "./sivut/Github";
import Yhteystiedot from "./sivut/Yhteystiedot";
import Projektit from "./sivut/Projektit";

class Main extends Component {

    render() {

        return (

            <BrowserRouter>

                <div>

                    <h1>My Portfolio</h1>

                    <ul className="header">

                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                    <div className="skills">

                        <NavLink to="/html">HTML</NavLink>

                        <NavLink to="/css">CSS</NavLink>

                        <NavLink to="/javascript">JavaScript</NavLink>

                        <NavLink to="/react">React</NavLink>

                        <NavLink to="/python">Python</NavLink>

                        <NavLink to="/nodejs">Node.js</NavLink>

                        <NavLink to="/github">Github</NavLink>

                    </div>

                    <div className="content">

                        <Routes>

                            <Route
                                path="/"
                                element={<Koti />}
                            />

                            <Route
                                path="/home"
                                element={<Koti />}
                            />

                            <Route
                                path="/about"
                                element={<About />}
                            />

                            <Route
                                path="/projects"
                                element={<Projektit />}
                            />

                            <Route
                                path="/contact"
                                element={<Yhteystiedot />}
                            />

                            <Route
                                path="/html"
                                element={<Html />}
                            />

                            <Route
                                path="/css"
                                element={<Css />}
                            />

                            <Route
                                path="/javascript"
                                element={<Javascript />}
                            />

                            <Route
                                path="/react"
                                element={<Reacti />}
                            />

                            <Route
                                path="/python"
                                element={<Python />}
                            />

                            <Route
                                path="/nodejs"
                                element={<Nodejs />}
                            />

                            <Route
                                path="/github"
                                element={<Github />}
                            />

                        </Routes>

                    </div>

                </div>

            </BrowserRouter>

        );
    }
}

export default Main;