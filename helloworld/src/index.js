import React from 'react'
import ReactDOM from 'react-dom'

//大写开头的都是组件
import Inputout from './Inputout'

// ReactDOM.render(<Inputout />, document.getElementById('root'))

function Welcome(props) {
  return <h1>hello, {props.name}</h1>
}

// const element = <Welcome name=" world" />
function App() {
  return (
    <div>
      <Welcome name="aaaa" />
      <Welcome name="bbb" />
      <Welcome name="ccc" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
