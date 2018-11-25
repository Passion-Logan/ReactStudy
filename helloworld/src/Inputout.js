import React, { Component } from 'react';

// 定义一个React组件
class Inputout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [
        'learn react',
        'learn englist'
      ]
    }
  }

  handleBenClick() {
    alert('click');
  }
  
  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBenClick}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// 导出
export default Inputout;
