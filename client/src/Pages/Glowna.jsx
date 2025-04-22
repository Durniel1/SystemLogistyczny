import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default function Glowna() {

  return (
    <>
        <div className='bg-secondary'>
            <h1 style={{textAlign:"center"}}>Strona główna</h1>
            <a href="http://localhost:5173/Utworz" className='btn btn-outline-dark m-3 float-right' role='button'>Utwórz nowy kurs</a>
            <a href="http://localhost:5173/Kursy" className='btn btn-outline-dark m-3 float-right' role='button'>Kursy</a>
        </div>
    </>
  )
}
