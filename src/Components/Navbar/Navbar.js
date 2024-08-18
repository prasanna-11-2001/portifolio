import React from 'react'
import './Navbar.css'
import logo from '../FilesDocu/PrasannaLogo.png'


const Navbar = () => {
    // const refresh = () => {
    //     window.location.reload(false);
    // }
    return (
        <div className='navbar-container container'>
            <nav className="navbar navbar-expand-lg navbar-light col-12">
                <div className="d-flex justify-content-between w-100">
                    <div className='d-flex align-items-center'>
                        <img
                            src={logo}
                            className='logo'
                            alt="Logo"
                            onClick={() => {
                                window.scrollTo(0, 0); // Scroll to the top
                                window.location.reload(); // Refresh the page
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex flex-row">
                            <a className="nav-link" href='#home'>Home</a>
                            <a className="nav-link" href='#about'>About</a>
                            <a className="nav-link" href='#skills'>Skills</a>
                            <a className="nav-link" href='#projects'>Projects</a>
                            <a className="nav-link" href='#services'>Services</a>
                            <a className="nav-link" href='#cantact'>Cantact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar

