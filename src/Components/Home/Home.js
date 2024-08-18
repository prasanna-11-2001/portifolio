import React from 'react'
import './Home.css'
import resume from '../FilesDocu/LakshmiPrasanna.docx'
const Home = () => {
    return (
        <section id='home'>
            <div className='home-container d-flex flex-column justify-content-center align-items-start'>
                <h1><span>Hello!</span><br />I Am Prasanna Yekula</h1>
                <p>Building Bridges Between Front-End and Back-End.Transforming Ideas into Web Reality</p>
                <div className='buttons '>
                    <button className='cus-btn'><a href='#cantact' className='hireme-btn'>Hire Me</a></button>
                    <a href={resume} download='myresume'> <button className='cus-btn'>Download <i className="fa-solid fa-download"></i></button></a>
                </div>
            </div>
        </section>
    )
}

export default Home
