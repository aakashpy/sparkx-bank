import React from 'react'
import './About.css'
const About = (props) => {
    return (
        <>
        {props.navbar}
            <div className="text-center">
                <h3>This App was created by Aakash Ghole using MERN and deployed it on HEROKU</h3>
            </div>
        </>
    )
}

export default About