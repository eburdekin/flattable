import React, { useState, useEffect } from 'react'

export default function MenuForm({menu}) {

    const [newMenu, setNewMenu] = useState({menu})

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     let value = e.target.value
    //     setNewReservation({ ...newReservation, [name]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleAddSubmit(newReservation)
    // }

    // useEffect(() => {
    //     //Update the form fields when the editedReservation prop changes
    //     setNewReservation(editedReservation ?? {
    //         name: '',
    //         party: '',
    //         time: '',
    //         occasion: '',
    //         restrictions: '',
    //     });
    // }, [editedReservation])

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
        <form className="menuForm">
            <input
                type="text"
                placeholder="Breakfast"
                name="name"
                value={newMenu.breakfast}
                // onChange={handleChange}
                style={style}
                 ></input>
            <input
                type="text"
                placeholder="Lunch"
                name="party" 
                // value={newReservation.party} 
                // onChange={handleChange} 
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Dinner" 
                name="time" 
                // value={newReservation.time} 
                // onChange={handleChange} 
                style={style}
                ></input>
            <input 
                type="text"
                placeholder="Dessert"
                name="occasion"
                // value={newReservation.occasion}
                // onChange={handleChange}
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Special" 
                name="restrictions" 
                // value={newReservation.restrictions} 
                // onChange={handleChange} 
                style={style} ></input>
            <br></br>
            <input 
                type="submit" 
                value="Update Menu"
                style={buttonStyle} />
        </form>
    </>
}