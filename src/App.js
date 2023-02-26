import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import moment from 'moment'

function App() {
  const [numToDos, setNumToDos] = useState(0);
  const [toDos, setTodos] = useState([[]]);
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  const date_format = "MMM-DD-YYYY hh:mm:ss A"
  const [curTime, setCurTime] = useState(moment().format(date_format)) 

  const clickedEnter = () => {
    setNumToDos(numToDos + 1)
    setTodos([...toDos, [document.getElementById("App-Text-Field").value, curTime]]);

    document.getElementById('App-Text-Field').value = "";
    setIsTextEmpty(true);
    // console.log(toDos)
  }

  useEffect(() => {
    const todo_li = toDos.map((todo, index) => <li className={index}>{todo[0]} Added: {todo[1]}</li>)
    // console.log(todo_li)
    document.getElementsByClassName('App-Display-ToDos').value = ""
    // document.getElementsByClassName('App-Display-ToDos').appendChild(todo_li)
  }, [toDos])
  // const listToDos = toDos.map((todo, index) => {
  //     console.log("todo!", todo, index);
  //     return(<li className={index}>{todo[0]} Added: {todo[1]}</li>)
  //   }
  // )

  // useEffect(, [setInterval(() => setCurTime(moment.format(date_format)), 1000)])
  setInterval(() => {
    setCurTime(moment().format(date_format))
  }, 1000)

  return (
    <div className="App">
      <div className='App-Time'>
        Current Time: {curTime}
      </div>
      <div className='App-New'>
        <form>
          <label for="App-Text-Field">Add New ToDo: </label>
          <input name="App-Text-Field" id="App-Text-Field" type="text" onChange={() => {
            document.getElementById("App-Text-Field").value == "" ? setIsTextEmpty(true) : setIsTextEmpty(false)
          }}/>
          <button name="enter" id="enter" type='button' disabled={isTextEmpty} onClick={clickedEnter}>Enter</button>
        </form>
      </div>
      <div className='App-Display'>
        <p> Total todos: {numToDos}</p>
        <ul className='App-Display-ToDos'></ul>
      </div>
    </div>
  );
}

export default App;
