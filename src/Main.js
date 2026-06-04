import React, { Component } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import Koti from "./pages/Koti";
import About from "./pages/About";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import Reacti from "./pages/Reacti";
import Python from "./pages/Python";
import Nodejs from "./pages/Nodejs";
import Github from "./pages/Github";
import Yhteystiedot from "./pages/Yhteystiedot";
import Projektit from "./pages/Projektit";

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