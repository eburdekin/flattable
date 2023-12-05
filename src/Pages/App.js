import '../App.css';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Login from "../Components/Login"

function App() {
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <br/>
      <div className="loginComponent">
        <Login />
      </div>
      <br />
    <div className="sidebar"> 
      <NavBar />
    </div>
    </main>
    
  );
}

export default App;
