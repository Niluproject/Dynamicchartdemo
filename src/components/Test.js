import React from 'react'

function Test() {
    const vehicles = ['Nilesh','Nill','Nilu'];
    const numersone = [1, 2, 3];
    const numerstwo = [4, 5, 6];
    const numescombined  = [...numersone, ...numerstwo]

    const [a, b , c] = vehicles
  return (
    <div>
        <h1>Hello {vehicles}</h1>
        <h1>Numbers {numescombined}</h1>
    </div>
  )
}

export default Test