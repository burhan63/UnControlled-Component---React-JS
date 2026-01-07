import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRef } from 'react'
// import './App.css'

function App() {

  const userRef = useRef();
  const passref = useRef();

  const HandleForm =(event)=>{
    event.preventDefault();

    let user = document.querySelector("#userName").value;
    let password = document.querySelector("#userPassword").value;

    console.log(user,password);
  }

  const HandleFormwithUseRef=(event)=>{
    event.preventDefault();

    let user = userRef.current.value;
    let password = passref.current.value;

    console.log(user,password);


  }

  return (
    <>
      <div>
        <h1>
          Uncontrolled Component Example Without useRef
        </h1>
        <form action="" onSubmit={HandleForm}>
          <input type="text" id="userName" placeholder="Enter UserName" />
          <br/><br/>
          <input type="text" id="userPassword" placeholder="Enter Password" />
          <br/><br/>
          <button>Click Me</button>
        </form>
        <br/>
        <hr/>

        <h1>
          Uncontrolled Component Example With useRef
        </h1>
        <form action="" onSubmit={HandleForm}>
          <input ref={userRef} type="text"  placeholder="Enter UserName" />
          <br/><br/>
          <input ref={passref} type="text"  placeholder="Enter Password" />
          <br/><br/>
          <button onClick={HandleFormwithUseRef}>Click Me</button>
        </form>
      </div>
    </>
  )
}

export default App
