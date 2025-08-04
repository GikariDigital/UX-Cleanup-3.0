import React, { useState } from "react";
import VehicleSelector from "./VehicleSelector";

function App() {
  const [selection, setSelection] = useState({});

  return (
    <div className="app-container">
      <h1>Kenya Import Duty Tax Calculator</h1>
      <VehicleSelector onSelection={setSelection} />
      {selection.crsp && (
        <div className="summary-box">
          <h2>Tax Summary</h2>
          <p><strong>Make:</strong> {selection.make}</p>
          <p><strong>Model:</strong> {selection.model}</p>
          <p><strong>Model Number:</strong> {selection.modelNumber}</p>
          <p><strong>Fuel:</strong> {selection.fuel}</p>
          <p><strong>Year:</strong> {selection.year}</p>
          <p><strong>Month:</strong> {selection.month}</p>
          <p><strong>CRSP:</strong> KES {Number(selection.crsp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;