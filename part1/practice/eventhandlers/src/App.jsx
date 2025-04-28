import { useState } from "react";

const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age; 
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.  
            </p>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const Display = ({counter}) => {<div>{counter}</div>}

const Button = ({onClick, text}) => <button type="button" onClick={onClick}>{text}</button>

const App = () => {
    const [counter, setCounter] = useState(0);
    
    console.log('rendering with counter value', counter)

    // setTimeout( 
    //     () => setCounter(counter + 1), 1000
    // )

    const increaseByOne = () => {console.log('increasing, value before', counter);setCounter(counter + 1);}

    const decreaseByOne = () => {console.log('decreasing, value before', counter);setCounter(counter - 1);}

    const reset = () => {console.log('resetting to zero, value before', counter);setCounter(0);}

    const name = "Travis Rego";

  return (
    <div>   
        <h1>Greetings</h1>
        <Hello name={name} age={counter} />
        <Display counter={counter}/>
        <Button onClick={increaseByOne} text='Increase by one'/> &nbsp;
        <Button onClick={decreaseByOne} text='Decrease by one'/> &nbsp;
        <Button onClick={reset} text='Reset'/>
    </div>
  )
}

export default App