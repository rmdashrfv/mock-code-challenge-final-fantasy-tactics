import UnitPortrait from "./UnitPortrait";
import UnitBio from "./UnitBio";

const UnitCard = ({ unit }) => {
  return(
    <div className="unit-card">
      <UnitPortrait unit={unit} />
      <UnitBio unit={unit} />
    </div>
  )
}

export default UnitCard;