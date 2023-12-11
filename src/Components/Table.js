export default function Table({ table, tableNumber, handleDelete }) {
  const buttonStyle = {
    fontFamily: "Roboto",
    padding: "4px",
    margin: "5px",
    backgroundColor: "#BF41B7",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "15px",
  };

  return (
    <div className="seated-table">
      <p>Table #{tableNumber}</p>
      <span>{table.name}</span>
      <br />
      <span className="smaller">Party of {table.party}</span>
      <br />
      <button
        type="button"
        style={buttonStyle}
        onClick={(e) => handleDelete(table.id)}
      >
        Clear Table
      </button>
    </div>
  );
}
