//  Header, Content, and Total.
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.content[props.number].name} exercises={props.content[props.number].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total exercises: {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const content = [
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

  return (
    <>
    <Header course={course} />
    <Content content={content} number="0" />
    <Content content={content} number="1" />
    <Content content={content} number="2" />
    <Total content={content} />
    </>
  )
}

export default App
