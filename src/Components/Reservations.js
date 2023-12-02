import Reservation from './Reservation'

export default function Reservations({reservations}) {
    return <>
    {reservations.map(reservation => <Reservation key={reservation.id} reservation={reservation} />)}
    </>
}