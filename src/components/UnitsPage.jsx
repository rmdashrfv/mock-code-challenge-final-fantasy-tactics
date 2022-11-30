import YourParty from "./YourParty";
import AllUnits from "./AllUnits";
import { useEffect, useState } from "react";

//start here with your code for step one

const UnitsPage = () => {
  const [allUnits, setAllUnits] = useState([])
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/units")
      let res = await req.json()
      setAllUnits(res)
    }
    request()
  }, [])
  
  return(
    <div>
      <YourParty />
      <AllUnits allUnits={allUnits} />
    </div>
  )
}

export default UnitsPage;