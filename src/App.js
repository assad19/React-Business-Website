import './App.css';
import Header from './Components/Templates/header';
import Footer from './Components/Templates/footer';
import Index from './Components/index';
import Service from './Components/service';
import About from './Components/about';
import Contact from './Components/contact';
import Todos from './Components/todos';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const onDelete = () =>{
    console.log("item has been deleted")
  }

  const [todos, setTodos] = useState([

  {
      sno:"1",
      title:"First Todo",
      desc:"First Desc"
  },
   
   

  {
      sno:"2",
      title:"First Todo2",
      desc:"First Desc2"
  },
   
   

  {
      sno:"3",
      title:"First Todo3",
      desc:"First Desc3"
  }]);


  return (<>
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={ <Index />} />
        <Route path="/service" element={ <Service />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/todos" element={ <Todos delete={onDelete} todos={todos} />} />
        </Routes>
        <Footer />
        </BrowserRouter>
        </>
  );
}

export default App;
