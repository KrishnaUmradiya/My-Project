import React from "react";
import Navbar from "./Navbar";

const QuizForm = () => {
  return (
    <>
      <Navbar title="Quiz Manager" btnAction="Add Question" />
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
              //   value={taskData.title}
              //   onChange={handleInputChange}
            />
            {/* {errors.title && <span className="error-msg">{errors.title}</span>} */}
          </div>
          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="description"
              //   value={taskData.description}
              //   onChange={handleInputChange}
            />
            {/* {errors.description && (
              <span className="error-msg">{errors.description}</span>
            )} */}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="date"
                // value={taskData.date}
                // onChange={handleInputChange}
              />
              {/* {errors.date && <span className="error-msg">{errors.date}</span>} */}
            </div>
            <div style={{ flex: 1 }}>
              <select
                name="level"
                // value={taskData.priority}
                // onChange={handleInputChange}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              {/* {errors.priority && (
                <span className="error-msg">{errors.priority}</span>
              )} */}
            </div>
          </div>
          <div
            className="form-action"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button
              type="button"
              //   onClick={handleSubmit}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              Add Quiz
            </button>
            <button
              type="buttton"
              //  onClick={() =>
              //     setTaskData({
              //       title: "",
              //       description: "",
              //       date: "",
              //       priority: "",
              //     })
              //   }
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
