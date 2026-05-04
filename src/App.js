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
    <Header />

    <hr/>
    <br/><br/><br/>


    <Routes>
      <Route path='/' element={<Home Name="deep" Age="23"/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/user/:id' element={<Child/>} />
      <Route path='/studentlist' element={<Studentlist/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      
    </Routes>

    <br/><br/><br/>
    <hr/>

    <Footer />
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
