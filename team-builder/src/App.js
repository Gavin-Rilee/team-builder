import React, {useState, useEffect} from 'react'
import './App.css';
import theSquad from './team';
import NameForm from './Form';



function App() {

const [data, setData] = useState(theSquad)

// useEffect(()=> {
//   setData()
// },[data])

  return (
    <>
  <NameForm setData={setData} data={data}>
  
  </NameForm>

    {
      data.map(cardInfo => {
        return (
          <div>{`${cardInfo.player} is going to be playing ${cardInfo.name} with a class of ${cardInfo.role} and a race of ${cardInfo.race}`}</div>
        )
      })
    }
    </>
  );

}

export default App;
