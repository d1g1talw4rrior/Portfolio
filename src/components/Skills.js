import React from "react";
import { NavLink } from "react-router-dom";

function Skills() {

    return (

        <nav id="skills" className="section">

            <table
                border="1"
                cellPadding="20"
                cellSpacing="5"
                style={{ width: "100%" }}
            >
                <tbody>
                    <tr>

                        <td>
                            <NavLink to="/nodejs">Node.js</NavLink>
                        </td>

                        <td>
                            <NavLink to="/html">HTML</NavLink>
                        </td>

                        <td>
                            <NavLink to="/css">CSS</NavLink>
                        </td>

                        <td>
                            <NavLink to="/javascript">JavaScript</NavLink>
                        </td>

                        <td>
                            <NavLink to="/react">React</NavLink>
                        </td>

                        <td>
                            <NavLink to="/python">Python</NavLink>
                        </td>

                        <td>
                            <NavLink to="/github">Github</NavLink>
                        </td>

                    </tr>
                </tbody>
            </table>

        </nav>
    );
}

export default Skills;