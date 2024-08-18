import React from 'react'
import "./Skills.css"
const Skills = () => {
    return (
        <section id='skills'>
            <div className='skill-container d-flex flex-column justify-content-center align-items-center'>
                <h1 className='m-5'>My<span>Skills</span></h1>
                <div className='d-flex flex-row'>
                    <div className='skill-icon skill-1'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1216/1216733.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-2'>
                        <img src='https://asabeneh.github.io/HTML-CSS-Website-Template/assets/images/css_logo.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-3'>
                        <img src='https://logosdownload.com/logo/javascript-logo-big.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-4'>
                        <img src='https://www.pinclipart.com/picdir/big/35-353932_bootstrap-bootstrap-4-logo-png-clipart.png' alt='' width="130px" height="130px" />
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className='skill-icon skill-5'>
                        <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-6'>
                        <img src='https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-7'>
                        <img src='https://dominickm.com/wp-content/uploads/2016/06/spring-boot-logo_full.png' alt='' width="130px" height="130px" />
                    </div>
                    <div className='skill-icon skill-8'>
                        <img src='https://www.sambindloss.com/images/sql-logo.png' alt='' width="130px" height="130px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
