import '../App.css';
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import ReservationForm from '../Components/ReservationForm'
import Reservation from '../Components/Reservation'
import Tables from '../Components/Tables'

const API = 'http://localhost:6001/reservations'

export default function Reservations() {

    const initialReservation = { name: "", party: "", time: "", occasion: "", restrictions: "" }

    const [reservations, setReservations] = useState([])
    const [reservation, setReservation] = useState(initialReservation)
    const editing = !!reservation.id
    const headers = { "Content-Type": "application/json" }

    useEffect(() => {
        fetch('http://localhost:6001/reservations')
            .then(r => r.json())
            .then(setReservations)
    }, [])

    const handleAddSubmit = () => {
        if (editing) {
            // If there is an edited reservation, update it
            fetch(`${API}/${reservation.id}`, {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(reservation)
            }).then(res => res.json())
                .then(data => {
                    // Update the reservations array with the edited reservation
                    setReservations(reservations.map(reservation =>
                        reservation.id === data.id ? data : reservation
                    ));
                    // Reset the edited reservation state
                    setReservation(initialReservation);
                });
        } else {
            // If there is no edited reservation, add a new one
            fetch(API, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(reservation)
            }).then(res => res.json())
                .then(data => {
                    setReservations([...reservations, data])
                    setReservation(initialReservation)
                });
        }
    };

    const cancel = () => {
        setReservation(initialReservation)
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

    const handleEdit = (reservation) => {
        setReservation(reservation)
    }

    const seatTable = (res) => {
        // console.log({...res, seated: !res.seated})
        fetch(`${API}/${res.id}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({...res, seated: !res.seated})
        })
        .then(res => res.json())
            .then(newRes => {
                // Update the reservations array with the edited reservation
                setReservations(reservations.map(res =>
                    res.id === newRes.id ? newRes : res
                ));
            }
            )
    }

    return (
        <>
            <main>
                <Header />
                <br />
                <NavBar />
                <div className="mainComponent">
                    <h2>Reservations</h2>
                    <h3>New Reservation</h3>
                    <ReservationForm handleAddSubmit={handleAddSubmit} editing={editing} reservation={reservation} setReservation={setReservation}
                        cancel={cancel} />
                    <h3>Today's Reservations</h3>
                    <table className="reservationTable">
                        <thead>
                            <tr>
                                <th>
                                    <h4>Seat Table</h4>
                                </th>
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
                                    <h4>Restrictions</h4>
                                </th>
                                <th>
                                    <h4>Edit</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map(reservation => <Reservation
                                key={reservation.id}
                                reservation={reservation}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                seatTable={seatTable} />)}
                        </tbody>
                    </table>
                                <br></br>
                    <Tables tables={reservations.filter(res => res.seated)} />

                </div>

            </main>

        </>
    )
}