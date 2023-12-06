import React, { useState, useEffect } from 'react'

export default function ReservationForm({ handleAddSubmit, editedReservation }) {

    const [newReservation, setNewReservation] = useState({
        name: '',
        party: '',
        time: '',
        occasion: '',
        restrictions: '',
    })

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value
        setNewReservation({ ...newReservation, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddSubmit(newReservation)
    }

    useEffect(() => {
        //Update the form fields when the editedReservation prop changes
        setNewReservation(editedReservation ?? {
            name: '',
            party: '',
            time: '',
            occasion: '',
            restrictions: '',
        });
    }, [editedReservation])

    const style = {
        'fontFamily': 'Roboto',
        'padding': '2px',
        'margin': '5px',
        'width': '200px',
        'fontWeight': 'bold',
    }

    const buttonStyle = {
        'fontFamily': 'Roboto',
        'padding': '8px',
        'margin': '5px',
        'backgroundColor': '#BF41B7',
        'color': 'white',
        'fontSize': '14px',
        'fontWeight': 'bold',
    }

    return <>
        <form className="reservationForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={newReservation.name}
                onChange={handleChange}
                style={style}
                 ></input>
            <input
                type="text"
                placeholder="Party"
                name="party" 
                value={newReservation.party} 
                onChange={handleChange} 
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Time" 
                name="time" 
                value={newReservation.time} 
                onChange={handleChange} 
                style={style}
                ></input>
            <input 
                type="text"
                placeholder="Occasion"
                name="occasion"
                value={newReservation.occasion}
                onChange={handleChange}
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Restrictions" 
                name="restrictions" 
                value={newReservation.restrictions} 
                onChange={handleChange} 
                style={style} ></input>
            <br></br>
            <input 
                type="submit" 
                value={editedReservation ? "Update Reservation" :  "Add Reservation"}
                style={buttonStyle} />
        </form>
    </>
}