const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buy_cake() {
    return {
        type: BUY_CAKE,
        info: "buying cake"
    }
}

function buy_ice_cream() {
    return {
        type: BUY_ICECREAM,
        info: 'buying ice cream'
    }
}


const initialCakeState = {
    numOfCake: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
            default:
                return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + 1
            }
            default:
                return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer);
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State:", store.getState()));
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());
store.dispatch(buy_ice_cream());
store.dispatch(buy_ice_cream());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
unsubscribe();