import UnitsPage from "./components/UnitsPage";
import { useState, useEffect} from 'react'

function App() {
  const [units, setUnits] = useState([])
  const [party, setParty] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/units")
      let res = await req.json()
      console.log(res)
      setUnits(res) 
    }
    request()
  }, [])
  
  const addToParty = (unit) => {
    if (party.map(p => p.id).includes(unit.id)) return;
    setParty([...party, unit])   
  }

  const releaseUnit = (unit) => {
    setParty((prevState) => {
      return [...prevState.filter((u) => { return u.id !== unit.id })]
    })
  }

  return (
    <div>
      <UnitsPage releaseUnit={releaseUnit} addToParty={addToParty} units={units} party={party} setParty={setParty} />
    </div>
  )
}

export default App;