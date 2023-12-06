import '../App.css';
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import ReservationForm from '../Components/ReservationForm'
import Reservation from '../Components/Reservation'

const API = 'http://localhost:6001/reservations'

export default function Reservations() {

    const [reservations, setReservations] = useState([])

    const headers = { "Content-Type": "application/json" }

    useEffect(() => {
        fetch(API)
            .then(r => r.json())
            .then(setReservations)
    }, [])

    const handleAdd = (newReservation) => {
        fetch(API, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newReservation)
        }).then(res => res.json()).then(data => setReservations([...reservations, data]))
    }

    const handleDelete = (id) => {
        fetch(`${API}/${id}`, {
            method: 'DELETE',
            headers: headers
        })
            .then(
                setReservations(reservations.filter(reservation => reservation.id !== id))
            )
    }

    return (
        <>
        <main>
             <Header />
            <br/>
             <NavBar />
            <div className="mainComponent">
            <h2>Reservations</h2>
            <h3>New Reservation</h3>
                <ReservationForm handleAdd={handleAdd} />
            <h3>Existing Reservations</h3>
             <table className="reservationTable">
                <thead>
                    <tr>
                        <th>
                            <h4>Name</h4>
                        </th>
                        <th>
                            <h4>Party</h4>
                        </th>
                        <th>
                            <h4>Time</h4>
                        </th>
                        <th>
                            <h4>Occasion</h4>
                        </th>
                        <th>
                            <h4>Edit</h4>
                        </th>
                    </tr>
                 </thead>
                 <tbody>
                    {reservations.map(reservation => <Reservation key={reservation.id} reservation={reservation} handleDelete={handleDelete} />)}
                 </tbody>
                 </table>
            </div>
  
        </main>
           
        </>
    )
}