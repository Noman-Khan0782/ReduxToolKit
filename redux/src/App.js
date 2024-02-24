// import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from './features/counter/counterSlice';
// import counter from '../src/App/store'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
   <>
<div className=' flex space-x-3 justify-center items-center h-screen'>
      <div className="">
        {/* Read  */}
        <p className=' text-6xl font-bold text-center mb-5 text-white'>{count}</p>
        {/* Increment Button  */}
        <button
          className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold'
          onClick={()=> dispatch(increment())}
        >
        </button>
        {/* Decrement Button  */}
        <button
          className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold'
          onClick={()=> dispatch(decrement())}
        >
        </button>
        {/* Increment By User */}
        <button
          className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold'
        onClick={()=>dispatch(incrementByAmount())}
        >
        </button>
      </div>
    </div>
   </>
  );
}

export default App;
