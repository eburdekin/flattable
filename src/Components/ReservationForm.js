import React, { useState } from 'react'

export default function ReservationForm({ handleAddSubmit }) {

    const [modalViz, setModalViz] = useState(false)

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
        e.preventDefault()
        handleAddSubmit(newReservation)
    }

    const handleModal = () => {
        console.log(modalViz)
        setModalViz(!modalViz)
    }

    return <>

        <button id="myBtn" onClick={handleModal}>New Reservation</button>

        {modalViz ? null : (
        <>
                        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" value={newReservation.name} onChange={handleChange} ></input>
            <input type="text" placeholder="Party" name="party" value={newReservation.party} onChange={handleChange} ></input>
            <input type="text" placeholder="Time" name="time" value={newReservation.time} onChange={handleChange} ></input>
            <input type="text" placeholder="Occasion" name="occasion" value={newReservation.occasion} onChange={handleChange} ></input>
            <input type="text" placeholder="Restrictions" name="restrictions" value={newReservation.restrictions} onChange={handleChange} ></input>
            <input type="submit" value="Add Reservation" />
        </form>
            </>)}
    </>
}