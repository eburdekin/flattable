import '../App.css';
import Header from '../Components/Header'
import NavBar from "../Components/NavBar"
import Login from "../Components/Login"

function App() {
  return (
    <main>
        <Header />
      <br/>
      <NavBar />
      <div className="loginComponent">
        <Login />
      </div>
      <br />
    </main>
    
  );
}

export default App;
