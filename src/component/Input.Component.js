import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/user.actions';
import styled from 'styled-components';

const InputContainer=styled.div`
    position: relative;
    left: calc(50% - 200px);
    width:60%;
`
const InputBox=styled.input`
    width: 200px;
    height: 30px;
    padding: 5px;
`

class Input extends Component{

    constructor(props){
        super(props);
        this.state={
            val:""
        }
    }
    changeValue(e){
        let city=e.target.value;
        this.setState({val:city});
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        this.timeout=setTimeout(()=>{
            this.props.getUsers(city);
        },500);
    }
    render(){
         //this.setState({val:"city"});
        return (
            <InputContainer>
                <InputBox type="text" value={this.state.val} placeholder="Enter City" onChange={(e)=>this.changeValue(e)} data-js="cityText"/>
            </InputContainer>
        )
    }
}



const mapDispatchToProps=(dispatch)=>{
    return {
        getUsers:(city)=>dispatch(getUsers(city))
    }
}

export default connect(null,mapDispatchToProps)(Input);