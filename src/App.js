
import './App.css';

import Linechart from './componets/Linechart/Linechart';
import SpecialChart from './componets/SpecialChart/SpecialChart';


function App() {
  return (


    <div className=" mt-8">

      <h1 className='text-center text-6xl'>data processing bar chart</h1>
      <Linechart></Linechart>

      <SpecialChart></SpecialChart>



    </div>
  );
}

export default App;
