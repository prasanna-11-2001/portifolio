import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Cantact.css'
const Cantact = () => {
    const form = useRef();
    const [fdata, setFdata] = useState({
        name: "",
        email: "",
        phno: "",
        message: ""
    })

    const [usernameErr, setUsernameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [phoneErr, setphoneErr] = useState('')


    const { name, email, phno, message } = fdata;
    const changeHandler = (e) => {
        setFdata({ ...fdata, [e.target.name]: e.target.value })
    }
    function nameChecker(name) {
        if (name === '') {
            return false
        }
        else {
            return true
        }
    }
    function emailChecker(email) {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    function phnoChecker(phno) {
        if (phno.length === 10) {
            return true
        }
        else {
            return false
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let validName = nameChecker(name);
        let validEmail = emailChecker(email);
        let validPh = phnoChecker(phno)
        if (validName) {
            setUsernameErr('')
        }
        else {
            setUsernameErr('name can not be empty')
        }
        if (validEmail) {
            setEmailErr('')
        }
        else {
            setEmailErr('enter valid email')
        }
        if (validPh) {
            setphoneErr('')
        }
        else {
            setphoneErr('enter valid number')
        }

        if (validName && validEmail && validPh) {

            emailjs.sendForm('service_smyp586', 'template_z2z5aun', form.current, {
                publicKey: 'aVkjsjXDreK6YbC0h',
            })
                .then(
                    () => {
                        alert("Submitted Successfully")
                        setFdata({
                            name: "",
                            email: "",
                            phno: "",
                            message: ""
                        })
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }


    };

    return (
        <section id='cantact'>
            <div className='cantact-container'>
                <div className='form-container'>
                    <form ref={form} onSubmit={submitHandler}>
                        <div className='mb-3'>
                            <input type='text' name='name' className='form-control tep'
                                value={name} placeholder='Your Name' onChange={changeHandler} />
                            <div className='text-danger ml-5'>
                                {usernameErr}
                            </div>
                        </div>

                        <div className='mb-3'>
                            <input type='email' name='email' className='form-control tep'
                                value={email} placeholder='Your e-mail' onChange={changeHandler} />
                            <div className='text-danger'>
                                {emailErr}
                            </div>
                        </div>

                        <div className='mb-3'>
                            <input type='tel' name='phno' className='form-control tep'
                                value={phno} placeholder='Phone-Number' onChange={changeHandler} />
                            <div className='text-danger'>
                                {phoneErr}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <textarea name='message' className='form-control txtmsg'
                                value={message} rows='5' cols='45' placeholder='Enter SomeThing...' onChange={changeHandler}  ></textarea>
                        </div>
                        <input type='submit' className='s-btn' value='Submit' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Cantact
