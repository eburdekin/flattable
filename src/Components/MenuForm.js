import React, { useState } from 'react'

export default function MenuForm({ menu, updateMenu }) {

    const [newMenu, setNewMenu] = useState(menu)

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value
        setNewMenu({ ...newMenu, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMenu(newMenu)
    }

    const style = {
        'fontFamily': 'Roboto',
        'padding': '2px',
        'margin': '10px',
        'width': '200px',
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
        <form className="menuForm" onSubmit={handleSubmit}>
            <label>Breakfast</label><br></br>
            <input
                type="text"
                placeholder="Breakfast"
                name="Breakfast"
                value={menu.Breakfast || ""}
                onChange={handleChange}
                style={style}
            ></input><br></br>
            <label>Lunch</label><br></br>
            <input
                type="text"
                placeholder="Lunch"
                name="Lunch"
                value={menu.Lunch || ""}
                onChange={handleChange}
                style={style}
            ></input><br></br>
            <label>Dinner</label><br></br>
            <input
                type="text"
                placeholder="Dinner"
                name="Dinner"
                value={menu.Dinner || ""}
                onChange={handleChange}
                style={style}
            ></input><br></br>
            <label>Dessert</label><br></br>
            <input
                type="text"
                placeholder="Dessert"
                name="Dessert"
                value={menu.Dessert || ""}
                onChange={handleChange}
                style={style}
            ></input><br></br>
            <label>Special</label><br></br>
            <input
                type="text"
                placeholder="Special"
                name="Special"
                value={menu.Special || ""}
                onChange={handleChange}
                style={style} ></input>
            <br></br>
            <input
                type="submit"
                value="Update Menu"
                style={buttonStyle}
            />
        </form >
    </>
}