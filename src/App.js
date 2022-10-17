import { useState } from "react";
 
const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  }); 

  const [allClicks, setAllClicks] = useState([])

  let increaseByOne = () => setCounter(counter +1)

  const decreaseByOne = () => setCounter(counter - 1)

  let setToZero = () => setCounter(0)

  let setLeftState = () => {
    setAllClicksState("L"); 
    setClicks({...clicks, left: clicks.left + 1});
  };

  let setRightState = () => { 
    setAllClicksState("R"); 
    setClicks({...clicks, right: clicks.right + 1});
  }

  let setAllClicksState = (event) => {
    setAllClicks(allClicks.concat(event)); 
  }

  return (
    <div>
      <Display counter={counter}/>
      <ClickHistory allClicks={allClicks} />
      <Button onClick={increaseByOne} text="+Plus" />
      <Button onClick={decreaseByOne} text="-Minus" />
      <Button onClick={setToZero} text="Rest" />
      <Button onClick={setLeftState} text="left" />
      <Button onClick={setRightState} text="Right" />
    </div>
  )
}
const Display = ({counter}) => <div>{counter}</div>

const ClickHistory = ({allClicks}) => {
  if(allClicks.length === 0){
    return (
      <div>The app is used by presssing the buttons</div>
    )
  }
  return (
    <div>
      Button Press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

export default App
