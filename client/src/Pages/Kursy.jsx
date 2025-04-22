import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default function Kursy() {
  const [kursyTrwajace, setKursyTrwajace] = useState([])
  const [kursyUkonczone, setKursyUkonczone] = useState([])
  const [kursyZarchiwizowane, setKursyZarchiwizowane] = useState([])

  const [przypieteKursyTrwajace, setPrzypieteKursyTrwajace] = useState([])
  const [przypieteKursyUkonczone, setPrzypieteKursyUkonczone] = useState([])
  const [przypieteKursyZarchiwizowane, setPrzypieteKursyZarchiwizowane] = useState([])

  var obecny_kurs;

  useEffect(() => {
    fetch('http://localhost:7777/KursyTrwajace').then(res => res.json()).then(data => {
      setKursyTrwajace(data)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/PrzypieteKursyTrwajace').then(res => res.json()).then(data => {
      setPrzypieteKursyTrwajace(data)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/KursyUkonczone').then(res => res.json()).then(data => {
      setKursyUkonczone(data)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/PrzypieteKursyUkonczone').then(res => res.json()).then(data => {
      setPrzypieteKursyUkonczone(data)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/KursyZarchiwizowane').then(res => res.json()).then(data => {
      setKursyZarchiwizowane(data)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:7777/PrzypieteKursyZarchiwizowane').then(res => res.json()).then(data => {
      setPrzypieteKursyZarchiwizowane(data)
    })
  }, [])

  function wyswietlWyniki(kurs)
  {
    document.getElementById("mapa").innerHTML = "Numer: " + kurs.number + "<br />" +
                                                "Skąd: " + kurs.fromm + "<br />" +
                                                "Cel: " + kurs.destination;
    document.getElementById("menu").style.display = "block";

    if(kurs.pinned == 1) { document.getElementById("prz").checked = true; }
    else { document.getElementById("prz").checked = false; }

    if(kurs.completed == 1 || kurs.archivised == 1) { document.getElementById("zak").disabled = true; }
    else { document.getElementById("zak").disabled = false; }

    if(kurs.completed == 0 || kurs.archivised == 1) { document.getElementById("arch").disabled = true; }
    else { document.getElementById("arch").disabled = false; }

    console.log(kurs.pinned);
    obecny_kurs = kurs.number;
  }

  function przypnij(e)
  {
    if(e.checked) {
      var num = obecny_kurs;
      //console.log(JSON.stringify(id));
      fetch("http://localhost:7777/Przypnij", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"num":`${num}`}),
    }).then((res) => console.log("przypięto"));
    }
    else {
      var num = obecny_kurs;
      fetch("http://localhost:7777/Odepnij", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"num":`${num}`}),
    }).then((res) => console.log("odepnięto"));
    }
  }

  function zakoncz(e)
  {
    var num = obecny_kurs;
    fetch("http://localhost:7777/Zakoncz", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"num":`${num}`}),
    }).then((res) => console.log("zakonczono"));
  }

  function zakoncz(e)
  {
    var num = obecny_kurs;
    fetch("http://localhost:7777/Zakoncz", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"num":`${num}`}),
    }).then((res) => console.log("zakonczono"));
  }

  function zarchiwizuj(e)
  {
    var num = obecny_kurs;
    fetch("http://localhost:7777/Zarchiwizuj", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"num":`${num}`}),
    }).then((res) => console.log("zakonczono"));
  }

  return (
    <>
        <div style={{height: "30%"}} className='bg-secondary'>
            <h1 style={{textAlign:"center"}}>Kursy</h1>
            <a href="http://localhost:5173/Utworz" className='btn btn-outline-dark m-3 float-right' role='button'>Utwórz nowy kurs</a>
            <a href="http://localhost:5173/" className='btn btn-outline-dark m-3 float-right' role='button'>Powrót</a>
            <div id='menu' style={{display: "none"}}>
              <input type="checkbox" className="btn-check" id="prz" autoComplete="off" onChange={e => przypnij(e.target)}/>
              <label className="btn btn-outline-warning" htmlFor="prz">Przypnij</label>
              <button id='zak' className="btn btn-outline-warning" onClick={e => zakoncz(e.target)}>Zakończ kurs</button>
              <button id='arch' className="btn btn-outline-warning" onClick={e => zarchiwizuj(e.target)}>Zarchiwizuj kurs</button>
            </div>
        </div>
        <div style={{width: "10%", height: "600px", float: "left"}} className='bg-secondary'>
            Trwające:<br />
            {
                przypieteKursyTrwajace.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
            <br /><br />
            {
                kursyTrwajace.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
            <hr />
            Ukończone: <br />
            {
                przypieteKursyUkonczone.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
            <br /><br />
            {
                kursyUkonczone.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
            <hr />
            Zarchiwizowane: <br />
            {
                przypieteKursyZarchiwizowane.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
            <br /><br />
            {
                kursyZarchiwizowane.map(kurs => (
                  <button key={kurs.id} onClick={() => wyswietlWyniki(kurs)}>{kurs.number}</button>
                ))
            }
        </div>
        <div style={{width: "90%", float: "right", textAlign: "center"}} id='mapa'></div>
    </>
  )
}
