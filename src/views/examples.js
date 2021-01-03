import React from 'react';

const Examples = props => {
    return (
        <div className="scroll_y fixedheight">
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
        </div>
    )
}

export default Examples;