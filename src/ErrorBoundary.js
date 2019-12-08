import React,{Component} from 'react';
import PopupHolder  from './component/Popup';

export class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state={
            error:""
        }
    }
    
    componentDidCatch(err){
        this.setState({error:err.message});
    }
    render(){
       return(
           this.state.error!=="" ? <PopupHolder><div>{this.state.error}</div></PopupHolder> : this.props.children
       )
    }
}