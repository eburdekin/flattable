import '../App.css';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"

export default function Menu() {
    return <>
        <main>
                <Header />
            <br/>
                 <NavBar />
        </main>
       <div className="mainComponent">
        <h2>Menu</h2>
       </div>
    </>
}