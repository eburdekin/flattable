export default function Reservation({reservation, handleDelete, handleEdit, seatTable}) {

    const handleSeatClick = (reservation) => seatTable(reservation)

    return <>
    <tr className={reservation.seated ? "seated" : "unseated"}>
        <td>{reservation.seated ? "✔️" : <img src="../images/table.png" width="20px" alt="table" onClick={(e) => handleSeatClick(reservation)}/>}</td>
       <td>{reservation.name}</td>
       <td>{reservation.party}</td>
       <td>{reservation.time}</td>
       <td>{reservation.occasion}</td>
       <td>{reservation.restrictions}</td>
       <td>
       <button type="button" onClick={(e) => handleEdit(reservation)} >Edit</button>
        <button type="button" onClick={(e) => handleDelete(reservation.id)} >Cancel</button>
        </td>
    </tr>
    </>
}