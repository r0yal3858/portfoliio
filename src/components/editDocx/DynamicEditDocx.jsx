import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as gowtham from "./Gowtham";
import { create } from "./DynamicCreateDocx.jsx";
import { run } from "./GetDoc.js";
import { useState } from "react";
import "./EditDocx.css";
// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section

const done = (points) => {
  let newKeys = `${gowtham.summary} ${points["keyPoints"]["points"]}`;
  gowtham.experiences[0]["summary"] =
    gowtham.experiences[0]["summary"] + points["exp1"]["points"];
  gowtham.experiences[1]["summary"] =
    gowtham.experiences[1]["summary"] + points["exp2"]["points"];

  const doc = create(
    gowtham.experiences,
    newKeys
    // skills,
    // summary,
    // newKeys
  );

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Gowtham_365CRM.docx");
    console.log("Document created successfully");
  });
};
export const DynamicEditDocx = ({ person }) => {
  let [list, setList] = useState([]);
  let [points, setPoints] = useState({});
  let [display, setDisplay] = useState("skills");
  let existing = [...person.existingSkills];

  const getKeyExp = async () => {
    let prompt = person.promptKey(person.summary.toString(), list.toString());
    let newPoints = await run(prompt);
    return newPoints;
  };
  const getExpPoints = async (exp) => {
    let prompt = person.promptKey(exp, list.toString());
    let newPoints = await run(prompt);
    return newPoints;
  };
  if (display == "loading") {
    return <h1>Loading</h1>;
  } else if (display == "skills") {
    return (
      <div className="inputContainer">
        <input
          type="text"
          name="skill"
          id="addSkill"
          placeholder="Enter a skill to add the list"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              let skill = e.target.value;
              skill = skill.trim().toLowerCase();
              list = !list.includes(skill) ? [...list, skill] : list;
              setList(list);
              e.target.value = "";
            }
          }}
        />
        <button
          onClick={async () => {
            setDisplay("loading");
            let keyPoints = await getKeyExp();
            let exp1 = await getExpPoints(
              gowtham.experiences[0].summary,
              "first"
            );
            let exp2 = await getExpPoints(
              gowtham.experiences[1].summary,
              "second"
            );
            setPoints({
              keyPoints: { points: keyPoints, num: keyPoints.length },
              exp1: { points: exp1, num: exp1.length },
              exp2: { points: exp2, num: exp2.length },
            });
            setDisplay("points");
          }}
          disabled={list.length < 1}
        >
          run gemini
        </button>
        <div className="skillContainer">
          {list.length > 0 ? (
            <>
              <p className="side_heading">New Skills :</p>
              {list.map((skill, indx) => (
                <span key={`skill_${indx}`} className="skill">
                  {skill}
                  <button
                    onClick={() => {
                      list = list.filter((item) => skill != item);
                      setList(list);
                    }}
                  >
                    X
                  </button>
                </span>
              ))}
            </>
          ) : null}
          <p className="side_heading">Existing :</p>
          {existing.map((skill, indx) => (
            <span key={`skill_${indx}`} className="skill">
              {skill}
              <button
                onClick={() => {
                  list = list.filter((item) => skill != item);
                  setList(list);
                }}
              >
                X
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  } else if (display == "points") {
    return (
      <div className="generatedPoints">
        <p onClick={() => setDisplay("skills")} id="backButton">
          Back
        </p>
        <div>
          {Object.keys(points).map((key, indx) => (
            <div key={`points_${indx}`} className="points_section">
              <p>{key}</p>
              <div>
                {points[key]["points"].map((point, indx) => (
                  <p key={`point_${indx}`}>{point}</p>
                ))}
                <button onClick={() => console.log("regenerating this")}>
                  Regenerate
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => done(points)}>Download</button>
      </div>
    );
  }
};
