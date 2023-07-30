import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateNumberAction } from './store/action/MainAction';

// Router
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import EditPage from './pages/edit-page';

// const App = () => {
//   let text = "This is a text";

//   const dispatch = useDispatch();

//   const [value, setValue] = useState('Initial Value')
//   // const [number, setNumber] = useState(0)
//   const number = useSelector(state => state.mainReducer.number)
//   const [message, setMessage] = useState("Initial message")
  
//   useEffect(() => {
//     console.log('useEffect number');
//     if(number == 0) {
//       setMessage('Number has been reset')
//     } else {
//       setMessage(`Current number is ${number}`)
//     }
//   }, [number])

//   useEffect(() => {
//     console.log('useEffect value');
//     setMessage('You just change the value')
//   }, [value])

//   const changeTextValue = () => {
//     text = "This is a new text"
//   }

//   const changeStateValue = () => {
//     setValue('This is a new value')
//   }

//   const updateNumber = (value) => {
//     dispatch(updateNumberAction(value))
//   }

//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <div>
//         <p>text value: </p> 
//         <p>{text}</p>
//         <button onClick={changeTextValue}>Press here to change value</button>
//       </div>
//       <div>
//         <p>useState initial value: </p> 
//         <p>{value}</p>
//         <button onClick={changeStateValue}>Press here to change value</button>
//       </div>
//       <div>
//         <p>current number value: </p> 
//         <p>{number}</p>
//         {/* <button onClick={() => setNumber(prevState => prevState * 2)} className="button">x2</button>
//         <button onClick={() => setNumber(prevState => prevState / 2)} className="button">/2</button> */}
//         <button onClick={() => updateNumber(1)} className="button">+1</button>
//         <button onClick={() => updateNumber(-1)} className="button">-1</button>
//         <button onClick={() => updateNumber(0)} className="button">reset</button>
//       </div>
//       <div>
//         <p>{message}</p>
//       </div>
//       <div>
//         {/* <p>useEffect initial value: </p> 
//         <p>{value}</p> */}
//         {/* <button onClick={changeTextValue}>Press here to change value</button> */}
//       </div>
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/edit/:todoId' element={<EditPage />}/>
    </Routes>
  )
}

export default App;
