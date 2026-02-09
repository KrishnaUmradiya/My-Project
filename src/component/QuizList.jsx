import React from "react";

const QuizList = ({quizes=[]}) => {
  return (
    <>
      <div className="task-grid">
        {quizes.map((quiz)=>(
        <div className="task-card" style={{ position: "relative" }}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>

          <div className="task-meta">
            <span>Due : {quiz.date}</span>
            <span className="priority-badge priority-high">{quiz.level}</span>
          </div>
          <div className="task-action">
            <button
              className="btn-icon"
              style={{ background: "#00d2ff" }}
              title="Edit Task"
            >
              ✏️
            </button>
            <button
              className="btn-icon"
              style={{ background: "#00b894" }}
              title="Mark Complete"
            >
              ✔️
            </button>
            <button
              className="btn-icon"
              style={{ background: "#ff416c" }}
              title="Delete Task"
            >
              🗑️
            </button>
          </div>
        </div>
         ))} 
      </div>
    </>
  );
};

export default QuizList;
