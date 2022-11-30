import { useState, useEffect } from 'react'
import UnitCard from './UnitCard'

const AllUnits = ({units, addToParty}) => {
  // maybe some code here 🤔

  return(
    <div className="all-units">
       List of all units here ...
       {
        units.map((unit) => {
          return(
            <div onClick={() => { addToParty(unit) }}>
              <UnitCard unit={unit} />
            </div>
          )
        })
       }
    </div>
  )
}

export default AllUnits;