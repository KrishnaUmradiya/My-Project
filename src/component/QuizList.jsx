import React from "react";

const QuizList = () => {
  return (
    <>
      <div className="task-grid">
        <div className="task-card" style={{ position: "relative" }}>
          <h3>My Quiz</h3>
          <p>This is Maths quiz</p>

          <div className="task-meta">
            <span>Due : 07-02-2026</span>
            <span className="priority-badge priority-high">High</span>
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
      </div>
    </>
  );
};

export default QuizList;
