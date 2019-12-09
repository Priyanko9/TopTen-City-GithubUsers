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
        let errorMsg;
        Promise.all(topTenUsers.map(ele=>fetch(ele.url,config)))
        .then(data=>Promise.all(data.map(ele=>ele.json())))
        .then(finalResult=>{
                for(let i=0;i<finalResult.length;i++){
                    if(finalResult[i].status===403){
                        errorMsg=finalResult[i].message;
                        break;
                    }
                }
                if(errorMsg){
                    dispatch({ type: errorConstants.ERROR, msg:errorMsg } );
                } else {
                    dispatch({ type: userConstants.GET_USERS, users:finalResult });
                }
                dispatch({ type: userConstants.FINISH_REQUEST });
        })
        .catch(err=>{
            dispatch({ type: errorConstants.ERROR, msg:err } );
            dispatch({ type: userConstants.FINISH_REQUEST });
        })
    }
}




