import { useState } from 'react'
import GameBoard from './components/game-board'

import './App.css'

function App() {
  const [move, setMove] = useState("")


  let movePlayed=()=>{
    
    for(let i=1; i<10; i++){

    }
  }

  const boardList=()=>{
    let arr;
    for(let i=1; i<10; i++){
      arr.push(<button id={i} onClick={movePlayed}>{move}</button>);
    }
  }

  return (
    <>

      <div className='flex flex-col justify-center items-center'>

          <h1 className='text-5xl font-bold my-14'>TIC TAC TOE</h1>
          <GameBoard />
      </div>
     </>
  )
}

export default App
