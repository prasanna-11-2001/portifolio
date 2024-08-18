import React from 'react'
import './Projects.css'
import clockapp from '../FilesDocu/project1-img.png'
import foodmunch from '../FilesDocu/foodmunch.png'
import login from '../FilesDocu/login-form.jpg'
const Projects = () => {
    return (
        <section id='projects'>
            <div>
                <div className='text-center'> <h1>PROJECTS</h1></div>
                <div className='project-container d-flex flex-row flex-wrap'>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={clockapp} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={login} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={foodmunch} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={clockapp} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={clockapp} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div> <img src={clockapp} alt='img-notfound' className='img-all' /></div>
                        <div> <div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'><a href='#cantact' className='hireme-btn'>view</a></button>
                        </div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
