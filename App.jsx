import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Body from './Body'
import Movies from './Movies'

function App() {
  return (
    <main>
      <Navbar />
      <Body />
      <div className="all_movies">
        <Movies genre={28} header={"Action Movies"}/>
        <Movies genre={27} header={"Horror Movies"}/>
        <Movies genre={35} header={"Comedy Movies"}/>
        <Movies genre={36} header={"History Movies"}/>
        <Movies genre={9648} header={"Mystery Movies"}/>
        <Movies genre={878} header={"Science Fiction Movies"}/>
        <Movies genre={10770} header={"TV Movies"}/>
        <Movies genre={35} header={"Comedy TV Shows"}/>
        <Movies genre={80} header={"Crime TV Shows"}/>
        <Movies genre={10751} header={"Family TV Shows"}/>
      </div>
    </main>
  );
}

export default App;