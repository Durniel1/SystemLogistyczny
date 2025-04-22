import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default function Utworz() {
  const [number, setNum] = useState([])
  const [fromm, setFrom] = useState([])
  const [destination, setDest] = useState([])


  function Submit()
  {
    var kurs = {number, fromm, destination};
    console.log(kurs);
    fetch("http://localhost:7777/Dodaj", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kurs),
    }).then((res) => console.log(res.statusText));
  }

  return (
    <>
        <div className='bg-secondary'>
            <h1 style={{textAlign:"center"}}>Utwórz kurs</h1>
            <a href="http://localhost:5173/" className='btn btn-outline-dark m-3 float-right' role='button'>Powrót</a>
            <a href="http://localhost:5173/Kursy" className='btn btn-outline-dark m-3 float-right' role='button'>Kursy</a>
        </div>
        <div>
          <form action="" onSubmit={Submit}>
            <label htmlFor="number">Numer</label><input type="text" name="" id="number" onChange={(e) => setNum(e.target.value)}/>
            <label htmlFor="from">Skąd</label><input type="text" name="" id="from" onChange={(e) => setFrom(e.target.value)}/>
            <label htmlFor="destination">Cel</label><input type="text" name="" id="destination" onChange={(e) => setDest(e.target.value)}/>
            <input type="submit" value="Dodaj" />
          </form>
        </div>
    </>
  )
}
