export default function Reservation({reservation, handleDelete, handleEdit}) {

    // const handleRowClick = () => {
    //     handleEdit(reservation)
    // }

    return <>
    <tr>
        <td><img src="../images/table.png" width="20px" alt="table" /></td>
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