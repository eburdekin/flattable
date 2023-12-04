import Reservation from './Reservation'

export default function Reservations({reservations, handleDelete}) {
    return <>
    <table>
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
  
    </>
}