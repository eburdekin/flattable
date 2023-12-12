import Table from './Table.js'

export default function Tables({ tables, handleDelete }) {

    return (
      <>
        <h3>Seated Tables</h3>
        <div className="table-container">
          {tables.map((table) => (
            <Table 
              key={table.id} 
              table={table} 
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </>
    );
  }