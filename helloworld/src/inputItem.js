import React, { Component } from 'react';

class inputItem extends Component {

    // 子组件如果想和父组件通信，要调用父组件传递过来的方法
    handleDelete() {
        console.log(this.props.index);
    }

    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递过来的参数
    render() {
        return (
            <div ibClick={this.handleDelete.bind(this)}>{this.props.content}}</div>
        )
    }

}

export default inputItem;