import { MathJaxContext } from "better-react-mathjax";
import { useEffect, useState } from "react";
import "./App.css";
import DisplayArea from "./components/DisplayArea";

function App() {
  const QuesID = ["AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901"
  ]

  const [QuesNo, setQuesNo] = useState(1);
  const [Ques, setQues] = useState("");

  useEffect(()=>{
    async function getQuestions() {
    const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuesID[QuesNo-1]}`
    const response = await fetch(url);
    const responsejson = await response.json();
    setQues(responsejson[0].Question);
    console.log(responsejson[0].Question);
  }
  getQuestions(QuesNo);
  })
  


  const navHandler = (event) => {
    if (event.target.value === "next" && QuesNo <3) {
      setQuesNo(QuesNo + 1);
    }
    if (event.target.value === "prev" && QuesNo > 1) {
      setQuesNo(QuesNo - 1);
    }
    if(event.target.value === "prev" && QuesNo===1){
      alert("No previous Questions please navigate ahead");
    }
    if(event.target.value === "next" && QuesNo===3){
      alert("No further questions please navigate back");
    }
    console.log(event.target.value);
  }


  return (
    <section className="main">
      <MathJaxContext>
        <h1 className="header">Question Number {QuesNo}</h1>
        <DisplayArea ques={Ques}></DisplayArea>
        <section className='nav'>
          <button onClick={navHandler} value="prev" className="button-22"> prev </button>
          <button onClick={navHandler} value="next" className="button-22"> next </button>
        </section>
      </MathJaxContext>
    </section>
  );
}

export default App;
