import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PopupHolder  from './Popup.js';

const UserInfo=styled.div`
    margin-left: 10px;
    word-break: break-word;
`
const HomeContainer=styled.div`
    width:80%
`
const Row=styled.a`
    display: flex;
    background-color: lightyellow;
    margin: 5px;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    color: black;
`
const Img=styled.img`
    width: 100px;
    height: 100px;
`
const Icon=styled.img`
    width: 20px;
    height: 20px;
`
const Username=styled.span`
    margin: 5px;
    color: blue;
`
const CenteredText=styled.div`
    text-align: center;
    margin-top: 20px;
`
const Home=(props)=>{
    return(
        <HomeContainer>
            {props.error  ? <PopupHolder>{props.error}</PopupHolder>:(
                props.loading ? <CenteredText>Loading ...</CenteredText> :
                (props.users && props.users.length===0) ? <CenteredText>No Users Found</CenteredText> :
                props.users && props.users.map((ele,index)=>{
                    return (<Row key={index} target="_blank" href={ele.html_url}>
                        
                        <Img src={ele.avatar_url}/>
                        <UserInfo>
                            <div>
                                <Username>{ele.login}</Username>
                                <span>{ele.name}</span>
                            </div>
                            <div>{ele.bio}</div>
                            <div>
                            {ele.email && <span><Icon src="mail.png"/>{ele.email}</span>}
                            {ele.location && <span><Icon src="location.png"/>{ele.location}</span>}
                            </div>
                        </UserInfo>
                    </Row>)
                })
            )
        }
        </HomeContainer>
    )
}

const mapStateToProps=(state)=>{
    return {
        users:state.main.users,
        loading:state.main.loading,
        error:state.error.msg
    }
}

export default connect(mapStateToProps)(Home);