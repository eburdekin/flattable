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
            <br/>
            <div className="mainComponent">
                <ReservationForm handleAdd={handleAdd} />
             <table className="reservationTable">
                <thead>
                    <tr>
                        <th>
                            <h2>Name</h2>
                        </th>
                        <th>
                            <h2>Party</h2>
                        </th>
                        <th>
                            <h2>Time</h2>
                        </th>
                        <th>
                            <h2>Occasion</h2>
                        </th>
                        <th>
                            <h2>Edit</h2>
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