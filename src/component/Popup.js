import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { errorConstants } from '../constants';

const PaddingDiv=styled.div`
    padding: 10px;
`
const BodyDiv=styled.div`
    margin:20px;
`

const PopupContainer=styled.div`
    position: absolute;
    z-index: 100;
    background: darkred;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
`

const Popup=(props)=>{

    const closePopup=()=>{
        let popup=document.getElementById("modal-root");
        popup.remove();
        props.dispatch({ type: errorConstants.CLEAR_ERROR } );
    }
    const ok=props.ok||closePopup;
    //const close=props.close||closePopup;
    return(
        <PopupContainer>
            <PaddingDiv>
                {props.title}
            </PaddingDiv>
            <BodyDiv>
                {props.children}
            </BodyDiv>
            <PaddingDiv>
                <button onClick={ok}>ok</button>
            </PaddingDiv>
        </PopupContainer>
    )
}



class PopupHolder extends Component{
    
    componentDidMount(){

        let popupHolder=document.createElement("div");
        popupHolder.setAttribute("id","modal-root");
        // popupHolder.setAttribute("class","popupContainer");
        document.body.append(popupHolder);
        ReactDOM.render(<Popup {...this.props} />,popupHolder);
    }
    render(){
        return <Fragment></Fragment>
    }
}



export default connect()(PopupHolder);