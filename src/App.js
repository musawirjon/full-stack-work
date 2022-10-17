const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let parts = {
    'part1': part1, 
    'part2': part2, 
    'part3': part3, 
  }
  let exercises = { 
    'exercises1': exercises1, 
    'exercises2': exercises2, 
    'exercises3': exercises3
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}
const Content = (props) => {
  return (
      <>
        <Part part={props.parts.part1} exercise={props.exercises.exercises1} />
        <Part part={props.parts.part2} exercise={props.exercises.exercises2} />
        <Part part={props.parts.part3} exercise={props.exercises.exercises3} />
      </>
  );
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}
const Total = (props) => {
  return ( 
    <p>Number of exercises {props.exercises.exercises1 + props.exercises.exercises2 + props.exercises.exercises3}</p>
  );
}

export default App
