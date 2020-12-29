const initialState = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];
// first Reducer
// no peticiones asincronas
// no puede tener efectos secundarios
// función pura.
const todoReducer = (state = initialState, action) =>{
    
    const {type ='', payload ={} } = action || {};
    switch (type){
        case 'add':
            return [...state,payload];
        default:
            return state;
    }
}
let todos = todoReducer();
const newTodo = {
    id: 2,
    todo: 'Buy milk',
    done: false 
};
const addTodoAction = {
    type: 'add',
    payload: newTodo
};
todos = todoReducer(todos,addTodoAction)

console.log(todos);