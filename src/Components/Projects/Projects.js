import React from 'react'
import './Projects.css'
import clockapp from '../FilesDocu/project1-img.png'
import food from '../FilesDocu/food.png'
import login from '../FilesDocu/login-form.jpg'
import todo from '../FilesDocu/todo.png'
import forms from '../FilesDocu/forms.png'
import clock from '../FilesDocu/clock.png'
import fetch from '../FilesDocu/fetch.png'
import search from '../FilesDocu/searchCity.png'

const Projects = () => {
    return (
        <section id='projects'>
            <div>
                <div className='text-center'> <h1>PROJECTS</h1></div>
                <div className='project-container d-flex flex-row flex-wrap'>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={food} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>The Food Munch app helps users discover and explore new recipes, offering a variety of meal ideas and cooking tips to enhance their culinary experiences.</p>
                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/foodapp/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={todo} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>
                                    The ToDo app allows users to efficiently manage tasks and organize their daily activities with intuitive checklists and reminders.</p>
                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/TodoList/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={forms} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>
                                    The sign-in and sign-up forms with authentication provide secure user access by verifying credentials and managing account creation and login processes.</p>

                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/Forms1/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={clock} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>
                                    Clocks display the current time and often include additional features like alarms and timers for time management and scheduling.</p>

                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/Clock-App/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={fetch} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>
                                    Fetching data through an API enables applications to retrieve and integrate external information in real-time for dynamic and up-to-date content.</p>

                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/fetchDataThroughApi/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='project-card project1 d-flex flex-column'>
                        <div className='containers' style={{ width: '300px', height: '350px', position: 'relative' }}>
                            <img src={search} alt='img-notfound' className='img-all' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className='overlay'>
                                <p className='p-4'>
                                    The "Search Cities" feature in the app allows users to quickly find and view information about various cities.</p>

                            </div>
                        </div>
                        <div><div className='buttons view d-flex flex-row justify-content-center'>
                            <button className='cus-btn'>
                                <a href='https://prasanna-11-2001.github.io/SerachCitiesinAp/' className='hireme-btn' target='_blank' rel='noopener noreferrer'>
                                    View
                                </a>
                            </button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Projects
