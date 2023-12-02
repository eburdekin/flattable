import {useState, useEffect} from 'react'
import Header from './Header'
import ReservationForm from './ReservationForm'
import Reservations from './Reservations'

const API = 'http://localhost:6001/reservations'

export default function Page() {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch(API)
        .then(r => r.json())
        .then(setReservations)
    }, [])

    return (
        <>
        <Header />
        <ReservationForm />
        <Reservations reservations={reservations} />
        </>
    )
}