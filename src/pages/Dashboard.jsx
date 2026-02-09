import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import QuizForm from "../component/QuizForm";
import QuizList from "../component/QuizList";

const Dashboard = () => {
  const [quizes,setQuizes] = useState([])
  const [showForm,setShowForm] = useState(false); 

  const navigate = useNavigate();

  const fetchData = async ()=>{
    try {
      const response = await fetch("http://localhost:3000/quizes")
      const data = await response.json()
      setQuizes(data)

    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchData
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("loginData");
    navigate("/login");
  };

  const handleAddQuiz =async(newQuiz)=>{
    const quiztoAdd = {...newQuiz,completed:false}
    try {
     const response = await fetch("http://localhost:3000/quizes",{
        method:"POST",
        headers:{"Content-Type":"application.json"},
        body:JSON.stringify(quiztoAdd)
     }
    ) 
    console.log(quiztoAdd);    
    const data = await response.json()
    setQuizes([...quizes,data])
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <Navbar
        title="Quiz Manager"
        onLogout={handleLogout}
        isFormOpen={showForm}
        onAddQuizBtnClick={()=>setShowForm(!showForm)}
      />
      {showForm ?(
        <QuizForm addQuiz={handleAddQuiz}/>
      ):(
        <>
      <h1>My Quiz</h1>
      <QuizList quizes={quizes}/>
      </>
      )}
    </>
  );
};

export default Dashboard;
