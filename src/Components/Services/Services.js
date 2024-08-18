import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <section id='services'>
            <div className='services-container d-flex flex-column justify-content-center align-items-center'>
                <h1>My Services</h1>
                <div className='d-flex flex-row'>
                    <div className='services-card d-flex flex-column align-items-center p-3'>
                        <i className="fa-solid fa-code s-icons "></i>
                        <h3>Web Development</h3>
                        <p className='s-desc'>I specialize in building and managing backend services
                            with a focus on creating robust CRUD operations (Create, Read, Update, Delete).
                            My expertise ensures seamless data handling and integration for scalable and efficient web applications.
                        </p>
                    </div>
                    <div className='services-card d-flex flex-column align-items-center p-3'>
                        <i className="fa-solid fa-code s-icons "></i>
                        <h3>UI Development</h3>
                        <p className='s-desc'>
                            Ui (User Interface) development focuses on creating the visual elements of a website or application.
                            I specialize in tuming design mockups into interactive interfaces using HTML, CSS, and JavaScript.
                            My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product
                        </p>
                    </div>
                    <div className='services-card d-flex flex-column align-items-center p-3'>
                        <i className="fa-solid fa-palette s-icons"></i>
                        <h3>UI Designing</h3>
                        <p className='s-desc'>
                            Ul design is all about aesthetics and usability. As a Ul designer, I craft visually appealing layouts, choose color schemes,
                            and create intuitive navigation. I pay attention to details like typography, spacing, and consistency.
                            My designs aim to enhance the overall look and feel of your digital
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
