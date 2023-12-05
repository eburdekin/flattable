import Header from '../Components/Header'
import NavBar from "../Components/NavBar"

export default function Menu() {
    return <>
        <main>
            <div className="header">
                <Header />
            </div>
            <br/>
            <div className='sidebar'>
                 <NavBar />
            </div>
        </main>
       
       
        This is a menu!
    </>
}