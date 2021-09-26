import React, { createContext, useEffect, useReducer } from 'react';
import {ToDoReducers} from '../reducers/ToDoReducers';

export const ToDoContext = createContext();

const ToDoContextProviders = (props) => {

    const [list, dispatch] = useReducer(ToDoReducers, [], () => {
        const localData = localStorage.getItem('list-name');
        return localData ? JSON.parse(localData): [];
    });

    useEffect(() => {
        localStorage.setItem('list-name', JSON.stringify(list));
    }, [list])

    return ( 
        <ToDoContext.Provider value={{list, dispatch}}>
            {props.children}
        </ToDoContext.Provider>
     );
}
 
export default ToDoContextProviders;