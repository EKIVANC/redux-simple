const {createStore} = require('redux');

const initialState = {
    age: 35
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'ADD') {
        //newState.age += 1;
    }

    if(action.type === 'SUBTRACT') {
        // newState.age -= 1;
        newState.age = action.val.age;
    }

    return newState;
};

const store = createStore(myReducer);


//store.dispatch({type: 'ADD'});
store.dispatch({type: 'SUBTRACT', val:{age: 40} });

console.log(store.getState());