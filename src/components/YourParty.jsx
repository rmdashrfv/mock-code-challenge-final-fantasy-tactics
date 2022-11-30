const YourParty = ({party, releaseUnit, setParty }) => {
  const promoteToCustomer = async (unit) => {
    let req = await fetch(`http://localhost:3000/units/${unit.id}`, {
      method: 'DELETE'
    })
    setParty((prevState) => {
      return [...prevState.filter((u) => u.id !== unit.id)]
    }) 
  }

  return(
    <div className="your-party">
      {
        party?.map((unit) => {
          return(
            <div onClick={() => { releaseUnit(unit) }}>
              <img src={unit.image} height={'100'} width={'100'} />
              <button onClick={() => { promoteToCustomer(unit) }}>x</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default YourParty;