import React, {Component} from 'react';
import Row from './row';

class List extends Component{
    state = {
        list : []
    }
    render(){
        return (
        <div>
            <h1>{this.props.name}</h1>
            <ul>
                
                { 
                    
                   this.state.list.length>0 ? this.state.list.map( (value)=>{
                            return <Row>{value}</Row>
                        }) : <Row>No task to do</Row>
                }
            </ul>
        </div>) ;
    }
}

export default List;