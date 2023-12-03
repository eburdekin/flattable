export default function Reservation({reservation}) {
    return <>
    <tr>
       <td>{reservation.name}</td>
       <td>{reservation.party}</td>
       <td>{reservation.time}</td>
       <td>{reservation.occasion}</td>
    </tr>
    </>
}