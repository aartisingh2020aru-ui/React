import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (

    <>

    <Header Name="Deep Singh" Age="23" />
    <Header Name="Anjali Singh" Age="23" />
    <About />
    <Home />
    <Footer />

    </>

     // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App;
