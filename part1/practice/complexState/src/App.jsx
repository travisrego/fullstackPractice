import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  const {handleClick, text} = props 
  return (
    <button type="button" onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0); 
  const [allClicks, setClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    buttonLog('Left');
    setClicks(allClicks.concat("L"));
    const updatedLeft = left + 1; 
    setLeft(updatedLeft);
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    buttonLog('Right');
    setClicks(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight)
  }

  const handleResetClick = () => {
    buttonLog('Reset');
    setTotal(0);
    setClicks([]);
    setLeft(0);
    setRight(0);
  }

  // Either version 1 (without destructuring):
  const buttonLog = (who) => console.log(who, "Button Pressed!");

  // Or version 2 (if you really want to use destructuring):
  //const buttonLog = ({who}) => {
  //  console.log(who, "Button Pressed!");
  //}
  // But then you need to call it like this in your handlers:
  // buttonLog({who: 'Left'});

  return (
    <>
      {left}&nbsp;
      <Button handleClick={handleLeftClick} text="&lt;-" />&nbsp;
      <Button handleClick={handleResetClick} text={"Reset"}/>&nbsp;
      <Button handleClick={handleRightClick} text="-&gt;" />&nbsp;  
      {right}
      <p>Total clicks: {total}</p>
      <History allClicks={allClicks} />
    </>
  )


  // Complex
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0
  // })

  // // Debug
  // // const printToLog = () => console.log("Button Pressed!");

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1
  //   }
  //   setClicks(newClicks);
  // }

  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks);
  // }

  // const handleResetClick = () => {
  //   const newClicks = {
  //     left: 0, 
  //     right: 0
  //   }
  //   setClicks(newClicks);
  // }

  // return (
  //   <>
  //     {clicks.left} 
  //     <button type="button" onClick={handleLeftClick}>&lt;-</button>&nbsp;
  //     <button type="button" onClick={handleResetClick}>Reset</button>&nbsp;
  //     <button type="button" onClick={handleRightClick}>-&gt;</button>
  //     {clicks.right}
  //   </>
  // )
}

export default App


