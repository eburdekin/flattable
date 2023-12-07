import React, { useState, useEffect} from 'react'

export default function MenuForm({menu, updateMenu}) {

    const [newMenu, setNewMenu] = useState({})

    useEffect(() => {
        setNewMenu(menu);
      }, [menu]);

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
    }

    return <>
        <form className="menuForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Breakfast"
                name="Breakfast"
                value={newMenu.Breakfast}
                onChange={handleChange}
                style={style}
                 ></input>
            <input
                type="text"
                placeholder="Lunch"
                name="Lunch" 
                value={newMenu.Lunch}
                onChange={handleChange} 
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Dinner" 
                name="Dinner" 
                value={newMenu.Dinner}
                onChange={handleChange} 
                style={style}
                ></input>
            <input 
                type="text"
                placeholder="Dessert"
                name="Dessert"
                value={newMenu.Dessert}
                onChange={handleChange}
                style={style}
                ></input>
            <input
                type="text"
                placeholder="Special" 
                name="Special" 
                value={newMenu.Special}
                onChange={handleChange} 
                style={style} ></input>
            <br></br>
            <input 
                type="submit" 
                value="Update Menu"
                style={buttonStyle}
                 />
        </form>
    </>
}