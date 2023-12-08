import Table from './Table.js'

export default function Tables({ tables, handleDelete }) {

    const generateRandomTableNumber = () => Math.floor(Math.random() * 30) + 1;

    const seatedTables = tables.map(table => table)

    return (
      <>
        <h3>Seated Tables</h3>
        <div className="table-container">
          {seatedTables.map((table) => (
            <Table 
              key={table.id} 
              table={table} 
              tableNumber = {generateRandomTableNumber()}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </>
    );
  }