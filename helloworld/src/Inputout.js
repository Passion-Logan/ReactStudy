import React, { Component } from 'react';
import InputItem from './InputItem';

// 定义一个React组件
class Inputout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [],
      inputValue : ''
    }

    this.handleBenClick = this.handleBenClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list })
  }

  getItems() {
    return (
      this.state.list.map((item, index) => {
        return ( 
        <InputItem 
        delete = {this.handleDelete}
        key = {index}
        content = {item}
        index = {index}
          />
        )
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
      })
    )
  }
  
  render() {
    return (
      <div>
        <div>
          <input value = {this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBenClick}>add</button>
        </div>
        <ul>{ this.getItems() }</ul>
      </div>
    );
  }
}

// 导出
export default Inputout;
