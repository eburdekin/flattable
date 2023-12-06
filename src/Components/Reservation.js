export default function Reservation({reservation, handleDelete, handleEdit}) {

    const handleRowClick = () => {
        handleEdit(reservation)
    }

    return <>
    <tr onClick={handleRowClick}>
       <td>{reservation.name}</td>
       <td>{reservation.party}</td>
       <td>{reservation.time}</td>
       <td>{reservation.occasion}</td>
       <td>{reservation.restrictions}</td>
       <td><button type="button" onClick={(e) => handleDelete(reservation.id)} >Cancel</button></td>
    </tr>
    </>
}