import React from 'react';
import styles from './resume.module.css';
import github from '../images/github.png'

const Resume = props => {
    return (
        <div className={styles.resume + " content_section"} >
            <h1>Aspiring Web Developer</h1>
            <h3>Technical Skills</h3>
                <ul>
                    <li><b>Full-Stack Web: </b>React, HTML5, CSS, JavaScript, Node.js, Express, MongoDB, MySQL, Postgres</li>
                    <li><b>Systems, Workflow, and Version Control: </b>AWS EC2, Ubuntu Server, Git, GitHub, JIRA</li>
                </ul>

            <h3>Technical Projects</h3>
                <ul>
                    <li>
                        <b>All About Fifth Wheels</b>
                        <a href="https://www.allaboutfifthwheels.com">www.AllAboutFifthWheels.com</a>
                        <a href="https://github.com/mrsontag/allaboutfifthwheels">GitHub</a>
                        <ul>
                            <li>Use React and Material UI to deliver an intuitive recreational vehicle search tool that shows matching models and selected characteristics in real-time as user changes criteria.</li>
                            <li>Use MongoDB, Node.js, and Express to create a RESTful API.</li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li>
                        <b>Photo Comments</b>
                        <a href="https://photocomments.mrsontag.com">PhotoComments.mrsontag.com</a> 
                        <a href="https://github.com/mrsontag/photocomments">GitHub</a>
                        <ul>
                            <li>Use React and Auth0 to authenticate users and allow them to link to and then comment on specific regions of images using a purpose-built click-and-drag interface.</li>
                            <li>Use Auth0, MongoDB, Node.js, and Express to create a RESTful API with authentication for certain paths.</li>
                        </ul>
                    </li>
                </ul>

            <h3>Professional Experience</h3>
                <ul>
                    <li><b>Thomson Reuters Tax & Accounting:</b> Sep. 2020 – Now, Remote</li>
                        <ul>
                            <li>
                                Onvio Tester (Contractor) – Test upcoming release of the Onvio corporate tax compliance web application.
                            </li>
                        </ul>
                    <li><b>Bloomberg Tax & Accounting:</b> Aug. 2019 – Aug. 2020, Arlington, VA (remote from Mar. 2020)
                        <ul>
                            <li>
                                Product Lead, Software – Lead product teams responsible for development of State Tax Analyzer and Corporate Tax Analyzer products; drove new product discovery efforts through client interviews; lead key business relationship with federal agency client.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>RSM US LLP:</b> Mar. 2016 – July 2019, McLean, VA
                        <ul>
                            <li>
                            Sr. Manager – National Lead Developer and National Development Team Leader for Corporate Tax Office (“CTO”) – Lead team developing MS Office / VBA-based tools for use in firm-wide delivery of tax services to large corporate tax departments.
                            </li>
                        </ul>
                    </li>
                    <li><b>AES Corporation:</b> Mar. 2013 – Mar. 2016, Arlington, VA	    
                        <ul>
                            <li>
                            Manager, Corporate Tax – Lead/co-lead substantial process improvement efforts using MS Office / VBA while managing various corporate tax compliance and planning efforts. 
                            </li>
                        </ul>
                    </li>
	

	
                </ul>
            <h3>Training, Education, and Licenses</h3>
                <ul>
                    <li><b>Coding Dojo:</b><i>Sep. 2020-Dec. 2020</i>MERN Black Belt</li>
                    <li><b>University of Houston Law Center</b><i>Aug. 2003-May 2006, Aug. 2007- May 2008</i>Master of Laws, Taxation (May 2008); Juris Doctor (May 2006)</li>
                    <li><b>Coding Dojo:</b><i>Sep. 2020-Dec. 2020</i>MERN Black Belt</li>
                </ul>

                    <ul>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
                <li>
                    <h3>Social Equity / Diversity, Equity, and Inclusion</h3>
                    <p>Write up on why DEI matters.</p>
                    <p>Write up on how I have been involved with DEI.</p>
                </li>
            </ul>

        </div>
    )
}

export default Resume;