import { useState } from "react";
import "./styles.css";

function InputField({ labelName, inputTag = "input", ...props }) {
  const Tag = inputTag;
  return (
    <div className="input-field">
      <label className="input-field__label">{labelName}</label>
      <Tag className="input-field__control" {...props} />
    </div>
  );
}
function InputPlace({ placeName, fields, formData, onChange }) {
  return (
    <div className="input_place">
      <h2 className="input-place__title">{placeName}</h2>
      {fields.map((field) => (
        <InputField
          className="input-field"
          key={field.fieldKey}
          labelName={field.labelName}
          inputTag={field.inputTag}
          type={field.type}
          value={formData[field.fieldKey]}
          onChange={(e) => onChange(field.fieldKey, e.target.value)}
        />
      ))}
    </div>
  );
}
function Editor({
  general,
  onChangeGeneral,
  educational,
  onChangeEducational,
  practical,
  onChangePractical,
}) {
  return (
    <div className="editor">
      <InputPlace
        className="input-place"
        placeName={"General"}
        fields={[
          { labelName: "Name", inputTag: "input", fieldKey: "name" },
          {
            labelName: "Email",
            inputTag: "input",
            type: "email",
            fieldKey: "email",
          },
          { labelName: "Phone Number", inputTag: "input", fieldKey: "phone" },
        ]}
        formData={general}
        onChange={onChangeGeneral}
      ></InputPlace>
      <InputPlace
        className="input-place"
        placeName={"Educational"}
        fields={[
          {
            labelName: "School Name",
            inputTag: "input",
            fieldKey: "schoolName",
          },
          {
            labelName: "Title Of Study",
            inputTag: "input",
            fieldKey: "titleOfStudy",
          },
          {
            labelName: "Date Of Study",
            inputTag: "input",
            fieldKey: "dateOfStudy",
          },
        ]}
        formData={educational}
        onChange={onChangeEducational}
      ></InputPlace>
      <InputPlace
        className="input-place"
        placeName={"Practical"}
        fields={[
          {
            labelName: "Company Name",
            inputTag: "input",
            fieldKey: "companyName",
          },
          {
            labelName: "Position Title",
            inputTag: "input",
            fieldKey: "position",
          },
          {
            labelName: "Main Responsibilities Of Your Jobs",
            inputTag: "input",
            fieldKey: "mainResponsibilities",
          },
          {
            labelName: "Date From And Until When You Worked For That Company",
            inputTag: "input",
            fieldKey: "dateOfWork",
          },
        ]}
        formData={practical}
        onChange={onChangePractical}
      ></InputPlace>
    </div>
  );
}

function Resume({ general, educational, practical }) {
  return (
    <div className="resume">
      <div className="resume__paper">
        <div className="resume__name">
          {general.name || (
            <span className="resume__placeholder">Your Name</span>
          )}
        </div>
        <div className="resume__contact">
          {general.email && <span>{general.email}</span>}
          {general.phone && <span>{general.phone}</span>}
        </div>
        <hr className="resume__divider" />

        <div className="resume__section">
          <h2 className="resume__section-title">Education</h2>
          <div className="resume__entry">
            <div className="resume__entry-header">
              <span className="resume__entry-title">
                {educational.schoolName}
              </span>
              <span className="resume__entry-date">
                {educational.dateOfStudy}
              </span>
            </div>
            <div className="resume__entry-subtitle">
              {educational.titleOfStudy}
            </div>
          </div>
        </div>

        <div className="resume__section">
          <h2 className="resume__section-title">Experience</h2>
          <div className="resume__entry">
            <div className="resume__entry-header">
              <span className="resume__entry-title">
                {practical.companyName}
              </span>
              <span className="resume__entry-date">{practical.dateOfWork}</span>
            </div>
            <div className="resume__entry-subtitle">{practical.position}</div>
            <div className="resume__entry-body">
              {practical.mainResponsibilities}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [general, setGeneral] = useState({
    name: "LiLQD",
    email: "luuquangdung1511@gmail.com",
    phone: "0999999999",
  });
  const [educational, setEducational] = useState({
    schoolName: "Hanoi University of Industry",
    titleOfStudy: "Software Enginneer",
    dateOfStudy: "2023-2027",
  });
  const [practical, setPractical] = useState({
    companyName: "ABC",
    position: "Intern backend developer",
    mainResponsibilities:
      "Implement REST API and using AGENTIC AI to build app",
    dateOfWork: "09/2026 - 02/2027",
  });
  function handleGeneralChange(field, value) {
    setGeneral({ ...general, [field]: value });
  }
  function handleEducationalChange(field, value) {
    setEducational({ ...educational, [field]: value });
  }
  function handlePracticalChange(field, value) {
    setPractical({ ...practical, [field]: value });
  }
  return (
    <div className="app">
      <Editor
        general={general}
        educational={educational}
        practical={practical}
        onChangeGeneral={handleGeneralChange}
        onChangeEducational={handleEducationalChange}
        onChangePractical={handlePracticalChange}
      ></Editor>
      <Resume
        general={general}
        educational={educational}
        practical={practical}
      ></Resume>
    </div>
  );
}
export default App;
