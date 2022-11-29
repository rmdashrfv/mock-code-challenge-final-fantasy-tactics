## Get setup
1. Run `npm install`
2. Run `npm run dev` to start the React app
3. Run `json-server --watch db.json` to start JSON Server

Look at the endpoints and addresses that these services start on and be sure to fetch from the correct locations.

## Core Deliverables
As a user, I should be able to:

- See profiles of all units rendered in AllUnits.
- Add an individual unit to my party by clicking on it. The selected party should render in the YourParty component. The unit can be enlisted only once. The unit does not disappear from the AllUnits.
- Release a unit from your party by clicking on it. The unit disappears from the YourParty component.
- Discharge a unit from life forever -- effectively killing them (it's the code challenge, I'm sorry), by clicking the red button marked "x", which would delete the unit both from the backend and from the YourParty on the frontend.
