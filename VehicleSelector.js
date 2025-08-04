import React, { useState, useEffect } from "react";
import dropdownData from "./vehicle_dropdown_data_v2.json";

function VehicleSelector({ onSelection }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const makes = Object.keys(dropdownData);
  const models = make ? Object.keys(dropdownData[make]) : [];
  const modelNumbers = make && model ? Object.keys(dropdownData[make][model]) : [];
  const fuels = make && model && modelNumber ? Object.keys(dropdownData[make][model][modelNumber]) : [];

  useEffect(() => {
    const crsp =
      make && model && modelNumber && fuel
        ? dropdownData[make][model][modelNumber][fuel]
        : null;
    onSelection({ make, model, modelNumber, fuel, year, month, crsp });
  }, [make, model, modelNumber, fuel, year, month]);

  return (
    <div>
      <select value={make} onChange={(e) => { setMake(e.target.value); setModel(""); }}>
        <option value="">Select Make</option>
        {makes.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <select value={model} onChange={(e) => { setModel(e.target.value); setModelNumber(""); }}>
        <option value="">Select Model</option>
        {models.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <select value={modelNumber} onChange={(e) => setModelNumber(e.target.value)}>
        <option value="">Select Model Number</option>
        {modelNumbers.map((mn) => (
          <option key={mn} value={mn}>{mn}</option>
        ))}
      </select>

      <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
        <option value="">Select Fuel Type</option>
        {fuels.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>

      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        {Array.from({ length: 20 }, (_, i) => 2005 + i).map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Select Month</option>
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}

export default VehicleSelector;