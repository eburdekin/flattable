import React, {useState} from 'react'

export default function ReservationForm({handleAddSubmit}) {

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
    setNewReservation({...newReservation, [name]: value})
   
}


const handleSubmit = (e) => {
    e.preventDefault()
    handleAddSubmit(newReservation)
}

    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={newReservation.name} onChange={handleChange} ></input>
        <input type="text" placeholder="Party"name="party" value={newReservation.party} onChange={handleChange} ></input>
        <input type="text" placeholder="Time" name="time" value={newReservation.time} onChange={handleChange} ></input>
        <input type="text" placeholder="Occasion" name="occasion" value={newReservation.occasion} onChange={handleChange} ></input>
        <input type="text" placeholder="Restrictions" name="restrictions" value={newReservation.restrictions} onChange={handleChange} ></input>
        <input type="submit" />
        </form>
    </>
}