import React, {Component} from 'react';
import Row from './row';

class List extends Component{
    render(){
        return (
        <div>
            <h1>{this.props.name}</h1>
            <ul>
                <Row>1.</Row>
                <Row>2.</Row>
                <Row>3.</Row>
            </ul>
        </div>) ;
    }
}

export default List;