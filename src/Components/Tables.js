export default function Tables({tables = []}) {

    const seatedTables = tables.map(table => (
        <div key={table.id} className="seated-table">{table.name}</div>
      ));

    return <>
    <h3>Seated Tables</h3>
    {seatedTables}

    </>
}