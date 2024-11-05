import { useState } from "react";
import { EditDocx } from "./EditDocx";
import { DynamicEditDocx } from "./DynamicEditDocx";
import * as gowtham from "./Gowtham";
import "./EditDocxControl.css";
export const EditDocxControl = () => {
  const [person, setPerson] = useState("bhanu");

  return (
    <>
      <div className="editdocx_control_container">
        <label>Select Whose Resume to Edit</label>
        <select
          name="selectPerson"
          id="selectPersonId"
          onChange={(e) => {
            setPerson(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="bhanu">Bhanu</option>
          <option value="gowtham">Gowtham</option>
        </select>
      </div>
      {person == "bhanu" ? <EditDocx /> : <DynamicEditDocx person={gowtham} />}
    </>
  );
};
