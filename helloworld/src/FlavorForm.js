import React, { Component } from 'react'

class FlavorForm extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '酸橙' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    alert('你喜欢的风味是: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味：
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="葡萄柚">葡萄柚</option>
            <option value="酸橙">酸橙</option>
            <option value="椰子">椰子</option>
            <option value="芒果">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

export default FlavorForm
