export default function Tables({tables = [], seatTable}) {

    const handleSeatClick = (table) => seatTable(table)

    const buttonStyle = {
        'fontFamily': 'Roboto',
        'padding': '4px',
        'margin': '5px',
        'backgroundColor': '#BF41B7',
        'color': 'white',
        'fontSize': '12px',
        'fontWeight': 'bold',
        'borderRadius': '15px'
    }

    const seatedTables = tables.map(table => (
        <div key={table.id} className="seated-table">
            <p>Table #{table.id}</p>
            <span>{table.name}</span>
            <br />
            <span className="smaller">Party of {table.party}</span>
            <br />
            <button type="button" style={buttonStyle} onClick={(e) => handleSeatClick(table)}>Clear Table</button>
            </div>
      ));

    return <>
    <h3>Seated Tables</h3>
    <div className="table-container">
        {seatedTables}
        </div>
    </>
}