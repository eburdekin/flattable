import {useState, useEffect} from 'react'
import Header from './Header'
import ReservationForm from './ReservationForm'
import Reservations from './Reservations'

const API = 'http://localhost:6001/reservations'

export default function Page() {

    const [reservations, setReservations] = useState([])

    const headers = {"Content-Type" : "application/json"}
    

    useEffect(() => {
        fetch(API)
        .then(r => r.json())
        .then(setReservations)
    }, [])

  const handleAddSubmit = (newReservation) => {
    fetch(API, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(newReservation)
    }).then(res => res.json()).then(data => setReservations([...reservations, data]))
  }

    return (
        <>
        <Header />
        <ReservationForm handleAddSubmit={handleAddSubmit}/>
        <Reservations reservations={reservations} />
        </>
    )
}