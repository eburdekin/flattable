import '../App.css';
import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Course from "../Components/Course"

const API = 'http://localhost:8001/menu'

export default function Menu() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch(API)
        .then(r => r.json())
        .then(setMenu)
    }, [])

    return <>
        <main>
                <Header />
            <br/>
                 <NavBar />
        </main>
       <div className="mainComponent">
        <h2>Menu</h2>
        {menu.map(item => <Course key={item.id} item={item} />)}
       </div>
    </>
}