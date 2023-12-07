import { useState } from 'react'
import './App.css'
let test = false

function postStuff() {
  if (!test) {
    return
  }
  let nameValue = document.getElementById("name").value;
  console.log(nameValue)
  let time = new Date(new Date().setDate(new Date().getDate() + 150)).toISOString()
  console.log(time)
  fetch(`http://localhost:3000/api/meal?dishId=${12}&type=${nameValue}&time=${time}`, {
    method: 'POST',
    headers: {
      'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoiaGphbG1hckBnbWFpbC5jb20iLCJpYXQiOjE3MDA3Mzk2MjZ9.G0pr98txb_7kE4D9mf4vKp2NzjISrroeVNvG_MlbPcM'
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
  test = false
}

function App() {

  function getStuff() {
    fetch('http://localhost:3000/api/dish/', {
      method: 'GET',
      headers: {
        'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoiaGphbG1hckBnbWFpbC5jb20iLCJpYXQiOjE3MDA3Mzk2MjZ9.G0pr98txb_7kE4D9mf4vKp2NzjISrroeVNvG_MlbPcM'
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }



  return (
    <>
      <div className="card">
        <form action="http://localhost:3000/api/dish/" method="post" onSubmit={postStuff()}>
          <input type="text" name="name" id="name" />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
      <button onClick={getStuff}>Get Stuff</button>
      <button onClick={() => { test = true; postStuff() }}>Post Stuff</button >

    </>
  )
}

export default App
