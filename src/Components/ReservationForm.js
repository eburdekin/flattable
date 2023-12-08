export default function ReservationForm({ handleAddSubmit, reservation, setReservation, editing, cancel }) {

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value
        setReservation({ ...reservation, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddSubmit(reservation)
    }

    const style = {
        'fontFamily': 'Roboto',
        'padding': '2px',
        'margin': '5px',
        'width': '200px',
        'fontWeight': 'bold',
    }

    const buttonStyle = {
        'fontFamily': 'Roboto',
        'padding': '8px',
        'margin': '5px',
        'backgroundColor': '#BF41B7',
        'color': 'white',
        'fontSize': '14px',
        'fontWeight': 'bold',
        'borderRadius': '15px'
    }

    return <>
        <form className="reservationForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={reservation.name}
                onChange={handleChange}
                style={style}
                 ></input>
            <input
                type="text"
                placeholder="Party"
                name="party" 
                value={reservation.party} 
                onChange={handleChange} 
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Time" 
                name="time" 
                value={reservation.time} 
                onChange={handleChange} 
                style={style}
                ></input>
            <input 
                type="text"
                placeholder="Occasion"
                name="occasion"
                value={reservation.occasion}
                onChange={handleChange}
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Restrictions" 
                name="restrictions" 
                value={reservation.restrictions} 
                onChange={handleChange} 
                style={style} ></input>
            <br></br>
            <input 
                type="submit" 
                value={editing ? "Update Reservation" :  "Add Reservation"}
                style={buttonStyle} />
                {editing ? (<button type="button" style={buttonStyle} onClick={cancel}>Cancel Update</button>) : null}
        </form>
    </>
}