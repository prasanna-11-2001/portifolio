import React from 'react'
import './LeftProfile.css'
const LeftProfile = () => {
    return (
        <div className='profile-card-container d-flex flex-column align-items-center'>
            {/* profile image */}
            <div>
                <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1718647720~exp=1718651320~hmac=4a30fca9effea533ab90f6bfa8f1a9c8263b325d4ce9386052ed9dc05b2ebbce&w=740" alt='' className='profile-img ' />
            </div>
            {/* user name and designation */}
            <div className='user-name-container d-flex flex-column'>
                <h2 className='s-user-name m-3'>Prasanna Yekula</h2>
                <p className='desg'>Fullstack Web Developer</p>
            </div>
            <hr />
            <div className='d-flex flex-column'>

                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <a href="mailto:lakshmiprasannayekula@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fa-solid fa-envelope icon"></i></a>
                    <a href="mailto:lakshmiprasannayekula@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}><p>Email:<br />lakshmiprasannayekula@gmail.com</p></a>
                </div>

                <div className='d-flex flex-row align-items-center'>
                    <a href="tel:+918897245266" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fa-solid fa-phone icon"></i>
                    </a>
                    <a href="tel:+918897245266" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Phone No:<br />+91 8897245266</p>
                    </a>
                </div>


                <div className='d-flex flex-row align-items-center'>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kphb,Hyderabad,Telangana"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fa-solid fa-location-dot icon"></i>
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kphb,Hyderabad,Telangana"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Location:<br />Kphb, Hyderabad, Telangana</p>
                    </a>
                </div>


                <div className='text-center'>
                    <a href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fa-brands fa-github h-icons"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/prasanna-yekula"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fa-brands fa-linkedin h-icons"></i>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default LeftProfile
