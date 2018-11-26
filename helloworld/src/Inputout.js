import React, { Component } from 'react';

// 定义一个React组件
class Inputout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [],
      inputValue : ''
    }
  }

  handleBenClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue : ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue : e.target.value
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }
  
  render() {
    return (
      <div>
        <div>
          <input value = {this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBenClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// 导出
export default Inputout;
