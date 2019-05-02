import {createStore} from 'redux';

export const store = createStore((state={type:'close'},action)=>{
    return action;
});

export const openNav=()=>store.dispatch({type:"open"});
export const closeNav=()=>store.dispatch({type:"close"});