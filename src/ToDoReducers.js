import uuid from 'uuid/dist/v1';

export const ToDoReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_LIST': 
        return [...state, {
            title: action.data.title,
            author: action.data.author,
            id: uuid()
        }]
        case 'REMOVE_LIST': 
        return state.filter(it => it.id !== action.id)
        default: 
        return state
    }
}