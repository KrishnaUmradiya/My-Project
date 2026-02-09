import React, { useState } from "react";
import Navbar from "./Navbar";

const QuizForm = ({addQuiz}) => {
  const[quizData,setQuizData] =useState({
    title:"",
    description:"",
    date:"",
    level:"",
  })
  const [errors,setErrors]=useState({});

  const handleInputChange =(e)=>{
    setQuizData({
      ...quizData,
      [e.target.name]:e.target.value,
    })
    setErrors({
      ...errors,
      [e.target.name]:""
    })
  }

  const validate = ()=>{
    const newErrors = {}
    if (!quizData.title.trim()) {
      newErrors.title = "title is required";
    } else if (quizData.title.length < 6) {
      newErrors.title = "minimum 6 character is required";
    }
    if (!quizData.description.trim()) {
      newErrors.description = "description is required";
    }

    if (!quizData.date.trim()) {
      newErrors.date = "date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(validate()){
      addQuiz(quizData);
      //localStorage.setItem("quizData",JSON.stringify(quizData));
    }
  }
  return (
    <>
      
      <div className="add-quiz-card">
        <h2 style={{ marginBottom: "15px" }} className="title">
          Add New Quiz
        </h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="Quiz Title"
              name="title"
                value={quizData.title}
                onChange={handleInputChange}
            />
            {errors.title && <span className="error-msg">{errors.title}</span>}
          </div>
          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="description"
                value={quizData.description}
               onChange={handleInputChange}
            />
            {errors.description && (
              <span className="error-msg">{errors.description}</span>
            )} 
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="date"
                 value={quizData.date}
                 onChange={handleInputChange}
              />
              {errors.date && <span className="error-msg">{errors.date}</span>}
            </div>
            <div style={{ flex: 1 }}>
              <select
                name="level"
                 value={quizData.level}
                 onChange={handleInputChange}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              {errors.level && (
                <span className="error-msg">{errors.level}</span>
              )} 
            </div>
          </div>
          <div
            className="form-action"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              Add Quiz
            </button>
            <button
              type="button"
               onClick={() =>
                  setQuizData({
                    title: "",
                    description: "",
                    date: "",
                    level: "",
                  })
                }
              className="btn-primary"
              style={{ flex: 1 }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuizForm;
