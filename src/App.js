import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset } from './Components/Reducers/index';
function App() {

  const currcount = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
       <h1>{currcount}</h1>
        <button className='btn' onClick={()=>{dispatch(increment(10))}}>Increment Counter</button>
        <button className='btn' onClick={()=>{dispatch(decrement(5))}}>Decrement Counter</button>
        <button className='btn' onClick={()=>{dispatch(reset(1))}}>Reset Counter</button>
    </div>
  );
}

export default App;
