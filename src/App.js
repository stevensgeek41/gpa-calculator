import React from 'react';
import './App.css';

function Header()
{
  return (<h1>Please Input your course information.</h1>);
}

function Grade(props){
  return (
      <select value={props.value} onChange={props.onChange}>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
       </select>
  );
}

function Credits(props){
  return (
      <select value={props.value} onChange={props.onChange}>
        <option value={0.00}>0.00</option>
        <option value={3.00}>3.00</option>
        <option value={4.00}>4.00</option>
       </select>
  );
}

function grade2point(grade){
  let val = 0.0;
  switch(grade){
    case "A+": val=4.0; break;
    case "A": val=4.0; break;
      case "A-": val=3.7; break;
    case "B+": val=3.3; break;
      case "B": val=3.0; break;
      case "B-": val=2.7; break;
    case "C+": val=2.3; break;
      case "C": val=2.0; break;
      case "C-": val=1.7; break;
      case "D+": val=1.3; break;
      case "D": val=1.0; break;
      case "F": val=0.0; break;
      default: val=0.0;break;
  }
  return val;
}

function Table()
{
  return(
    <table>
      <thead>
        <tr>
          <td width={175} align="center">Class Title</td>
          <td>Grade</td>
          <td>Credits</td>
        </tr>
      </thead>
    </table>
  );
}

function Calculate(props){
  const l = props.grades.length;
  let gradeSum = 0;
  let creditSum = 0;
  for(let i = 0; i < l; i++){
    gradeSum += grade2point(props.grades[i])*props.credits[i];
    creditSum += 1*props.credits[i];
    console.log(creditSum);
  }
  return(
    <h3>Current GPA: {(gradeSum/creditSum).toFixed(1)}</h3>
  )
  
}

class Courses extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      grades: ["A"],
      credits: [0.00],
      flag: [0],
    };
    this.gradeOnChange = this.handleGradeChange.bind(this);
    this.creditOnChange = this.handleCreditChange.bind(this);
    this.deleteOnClick = this.handleDelete.bind(this);
    this.resetOnClick = this.handleReset.bind(this);
    this.textOnSubmit = this.handleTextSubmit.bind(this);
  }
  
  handleGradeChange(id,e){
    const grades = this.state.grades.slice();
    grades[id] = e.target.value;
    this.setState({grades: grades});
  }
  
  handleTextSubmit(e){
    e.preventDefault();
    
  }
  handleReset(e){
    const grades = ["A"];
    const credits = [0.00];
    const flag = [0];
    this.setState({grades: grades, credits: credits, flag: flag});
  }
  handleCreditChange(id,e){
    const credits = this.state.credits.slice();
    const flag = this.state.flag.slice();
    const grades = this.state.grades.slice();
    credits[id] = e.target.value;
    if(flag[id] === 0){
      flag[id]=1;
      this.setState({grades: grades.concat(["A"]),credits: credits.concat([0.00]),flag: flag.concat([0])});
    }else{
      this.setState({credits: credits});
    }
  }
  
  handleDelete(id){
    const credits = this.state.credits.slice();
    const flag = this.state.flag.slice();
    const grades = this.state.grades.slice();
    credits.splice(id,1);
    flag.splice(id,1);
    if(id === this.state.flag.length-1){
      flag[flag.length-1] = 0;
    }
    grades.splice(id,1);
    this.setState({grades: grades, credits: credits, flag: flag});
  }
  
  render(){
    const grades = this.state.grades.slice();
    const credits = this.state.credits.slice();
    return (
      <div className="body">
        <Table/>
      <form onSubmit={this.textOnSubmit}>
        {grades.map((v,i)=>
                 <div className={"course"+i} key={i}>
                      {i+1}.<input type="text" size={20}/>
                  <Grade value={v} onChange={this.gradeOnChange.bind(this,i)}/>
                  <Credits value={credits[i]} onChange={this.creditOnChange.bind(this,i)}/>
                  {
                i > 0 &&
                 <input type="button" value="delete" onClick={this.deleteOnClick.bind(this,i)}/>
                  }
                 </div>
                  )}
        </form>
        <br/>
        <input type="button" value="reset" onClick={this.resetOnClick}/>
        <Calculate grades={this.state.grades} credits={this.state.credits}/>
        </div>
        );
  }
  
}


function App(){
  return(
    <div className="app">
      <Header/>
      <div className="course">
        <Courses/>
      </div>
    </div>
   
  );
}
export default App;
