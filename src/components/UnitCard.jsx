import UnitPortrait from "./UnitPortrait";
import UnitBio from "./UnitBio";

const UnitCard = () => {
  return(
    <div className="unit-card">
      <UnitPortrait />
      <UnitBio />
    </div>
  )
}

export default UnitCard;