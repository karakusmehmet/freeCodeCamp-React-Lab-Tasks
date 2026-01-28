import React, { useState } from 'react'
import './CSS/EventRSVPForm.css'


function EventRSVPForm() {

    const [nameState,setNameState] = useState("")
    const [emailState,setEmailState] = useState("")
    const [attendState,setAttendState] = useState("")
    const [ditaryState,setDiateryState] = useState("")
    const [guestState,setGuessState] = useState("");
    const [isVisible, setVisible] = useState(false);

    const inputsData = [
        {
            text: "Name:",
            id: "name",
            type:"text",
            placeHolder: "Your Name",
            required: true,
            value: nameState,
            setChange: (e) => {setNameState(e.target.value)}
        },
        {
            text: "Email:",
            id: "email",
            type:"email",
            placeHolder: "Your Email",
            required: true,
            value: emailState,
            setChange: (e) => {setEmailState(e.target.value)}
        },
        {
            text: "Number of Attendees:",
            id: "attend-number",
            type:"number",
            placeHolder: "Number of Attendees",
            required: true,
            value: attendState,
            setChange: (e) => {setAttendState(e.target.value)}
        },
        {
            text: "Dietary Preferences:",
            id: "preference",
            type:"text",
            placeHolder: " Dietary Preferences (Optional)",
            required: false,
            value: ditaryState,
            setChange: (e) => {setDiateryState(e.target.value)}
        },
        {
            text: "Bringing additional guests?",
            id: "guest",
            type:"checkbox",
            placeHolder: "",
            required: false,
            value: guestState,
            setChange: (e) => {setGuessState(e.target.checked)}
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        setVisible(true);
    }
  return (
    <div className='container'>
        <h2 className='title'>Event RSVP Form</h2>
        <form onSubmit={handleSubmit} action="#">
           {inputsData.map((data) => (
            <div className='input-section' key = {data.id}>
                <label htmlFor={data.id}>{data.text}</label>
                <input required = {data.required} type={data.type} id={data.id} placeholder= {data.placeHolder} value={data.value} onChange={data.setChange} {...(data.type === "number" && { min: 1 })} />
            </div>
           ))}
           <button type='submit'>Submit RSVP</button>
        </form>
        {isVisible && <div className="submitted-message">
            <h3>RSVP Submitted!</h3>
            <p>Name: {nameState}</p>
            <p>Email: {emailState}</p>
            <p>Number of Attendees: {attendState}</p>
            <p>Dietary Preferences: {ditaryState}</p>
            <p>Bringing Others: {guestState ? "Yes" : "No"}</p>
        </div>}
    </div>
  )
}

export default EventRSVPForm