import YourParty from "./YourParty";
import AllUnits from "./AllUnits";

//start here with your code for step one

const UnitsPage = ({setParty, releaseUnit, units, party, addToParty}) => {
  return(
    <div>
      <YourParty setParty={setParty} party={party} releaseUnit={releaseUnit} />
      <AllUnits units={units} addToParty={addToParty} />
    </div>
  )
}

export default UnitsPage;