import { userConstants,errorConstants } from '../constants';

export function getUsers(city) {
    
    return async (dispatch)=>{
        let config={
            'method':'GET',
            'headers':{
                'content-type':'application/json'
            }
        }
        dispatch({ type: userConstants.GET_REQUEST });
        let results=await fetch('https://api.github.com/search/users?q=location:'+city+'&sort:followers',config);
        let usersObject=await results.json();
        let topTenUsers=usersObject.items && usersObject.items.slice(0,10);
        let topTenUsersInfo=[];
        let errorMsg;
        for(let i=0;i<topTenUsers.length;i++){
                let eachUserResult=await fetch(topTenUsers[i].url,config);
                let userObject=await eachUserResult.json();
                if(eachUserResult.status===403){
                    errorMsg=userObject.message;
                    topTenUsersInfo.length=0;
                    break;
                } else {
                    topTenUsersInfo.push(userObject);
                }
                
        }
        if(!errorMsg){
            dispatch({ type: userConstants.GET_USERS, users:topTenUsersInfo });
        } else{
            dispatch({ type: errorConstants.ERROR, msg:errorMsg } );
        }
        dispatch({ type: userConstants.FINISH_REQUEST });
    }
}




