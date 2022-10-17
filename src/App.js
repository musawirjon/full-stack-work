
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  let total = 0;

  course.parts.forEach((item) => {
    total += item.exercises;
  })

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course} />
      <Total totalExercises={total} /> 
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}
const Content = (props) => { 
  let names = [];
  let exercises = [];

  Object.values(props.parts.parts).forEach((item) => { 
    names.push(item.name);
    exercises.push(item.exercises);
  })
  return (
    <Part part={names} exercise={exercises} />
  )
}
const Part = (props) => { 
  return (
    <div>
      <p>
        {props.part[0]} {props.exercise[0]}
      </p>
      <p>
        {props.part[1]} {props.exercise[1]}
      </p>
      <p>
        {props.part[2]} {props.exercise[2]}
      </p>
    </div>
  )
}
const Total = (props) => {
  return ( 
    <p>Number of exercises {props.totalExercises}</p>
  );
}

export default App
