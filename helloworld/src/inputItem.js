import React, { Component } from 'react';

class InputItem extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    // 子组件如果想和父组件通信，要调用父组件传递过来的方法
    handleDelete() {
        this.props.delete(this.props.index);
        // console.log(this.props.index);
    }

    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递过来的参数
    render() {
        const { content }  = this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    }

}

export default InputItem;