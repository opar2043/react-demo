
import { useState } from 'react'
import './App.css'
import './Componants/Team/Team'
import Team from './Componants/Team/Team';
import PublicPost from './Componants/PublicPost/PublicPost';

function App() {

  const [count , setCount] = useState(0);

  function clickMe(){

    let newCount = count;
    newCount = newCount + 1 ;

    setCount(newCount)
  }


  function dontClick(){
    let newCount = count;
    newCount = newCount - 1 ;

    setCount(newCount)
  }

  return (
    <div className=''>
       <h2>{count}</h2>

       <Team></Team>

       <PublicPost></PublicPost>

       <button onClick={clickMe}>click</button>
       <button onClick={dontClick}>dontClick</button>
    </div>
  )
}

export default App
