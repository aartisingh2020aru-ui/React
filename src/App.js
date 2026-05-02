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
import Validation from './Pages/Validation';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <>
    <br/><br/><br/>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header Name="Deep" Age="23"/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
    </BrowserRouter>

    <br/><br/><br/>

    {/* <Validation /><br/><hr/><br/>
    <Login /><br/><hr/><br/><br/><br/><br/>
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
    <Studentlist /> */}
  </>

  );
}

export default App;
