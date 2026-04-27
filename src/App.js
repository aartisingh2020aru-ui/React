import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Counter from './Pages/Counter';
import Conditional from './Pages/Conditional';
import Ternary from './Pages/Ternary';
import LogicalAnd from './Pages/LogicalAnd';
import Studentlist from './Pages/Studentlist';
import Hooks from './Pages/Hooks';
import { MyContext } from './Pages/MyContext';
import Child from './Pages/Child';
import Controlled from './Pages/Controlled';
import Login from './Pages/Login';



function App() {
  return (

    <>
    <Login /><br/><hr/>
    <Controlled />
    <MyContext.Provider value= "DSTD">
    <Child />
    </MyContext.Provider>
    <Hooks />
    <Header Name="Deep Singh" Age="23" />
    <Header Name="Anjali Singh" Age="23" />
    <Counter />
    <About />
    <Home />
    <Footer />
    <Conditional />
    <Ternary />
    <LogicalAnd />
    <Studentlist />
    


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
