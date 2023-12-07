import '../App.css';
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import MenuForm from "../Components/MenuForm"

const API = 'http://localhost:8001/menu'

export default function Menu() {

    const [menu, setMenu] = useState({})

    useEffect(() => {
        fetch(API)
            .then(r => r.json())
            .then(setMenu)
    }, [])

    function updateMenu(newMenu) {
        fetch(API, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMenu)
        })
        setMenu(newMenu)
    }

    return <>
        <main>
            <Header />
            <br />
            <NavBar />
        </main>
        <div className="mainComponent">
            <h2>Menu</h2>
            <h3>Today's Courses</h3>
            <div className="menu">
                {Object.entries(menu).map(([course, mealName]) => <><h4>{course}</h4><p>{mealName}</p></>)}
            </div>
            <br></br>
            <h3>Update Menu</h3>
            <MenuForm menu={menu} updateMenu={updateMenu} />
            <br></br>
        </div>
    </>
}