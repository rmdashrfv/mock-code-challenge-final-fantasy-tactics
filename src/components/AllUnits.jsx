import UnitCard from './UnitCard'

const AllUnits = ({ allUnits }) => {
  // maybe some code here 🤔
  return(
    <div className="all-units">
       List of all units here ...
       {
         allUnits.map((unit) => {
           return(
             <div>
               <UnitCard unit={unit} />
             </div>
           )
         })
       }
    </div>
  )
}

export default AllUnits;