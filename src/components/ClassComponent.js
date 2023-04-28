import React,{Component} from 'react';

export default class ClassComponent extends Component{
    render(){
        return (
        <div className='box2'>
            <h1 className='txt'>This is created using class Component</h1>
            <p className='ptxt1'>This is done using external CSS</p>
            <p style={{color:"lightblue"}}>This is done using inline CSS</p>
        </div>
        );
    }
}