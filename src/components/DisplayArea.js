import { MathJax } from "better-react-mathjax";
import "./DisplayArea.css";
const DisplayArea=(props)=>{
    return(
        <section className='question'>
        <MathJax><p>{props.ques}</p></MathJax>
      </section>
    )
}
export default DisplayArea;

