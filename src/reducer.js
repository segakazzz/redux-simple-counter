const initialCounter = {
    value: 0,
    color: 'black'
}

const initialState = {
    counters: [
        {...initialCounter}
    ]
}

const reducer = (state = initialState, action) => {
    let { type, color, value, counterIndex } = action;
    let newState = Object.assign({}, state)
    
    console.log('before', newState)
    if (type === "INCREMENT") {
        newState.counters[counterIndex].value = newState.counters[counterIndex].value + 1
    }
    if (type === "DECREMENT") {
        newState.counters[counterIndex].value = newState.counters[counterIndex].value - 1
    }
    if (type === "INCREMENT_5") {
        newState.counters[counterIndex].value = newState.counters[counterIndex].value + 5
    }
    if (type === "DECREMENT_5") {
        newState.counters[counterIndex].value = newState.counters[counterIndex].value - 5
    }
    if (type === "CHANGE_COLOR"){
        newState.counters[counterIndex].color = color
    }
    if (type === "CHANGE_NUMBER"){
        // console.log(action)
        newState.counters[counterIndex].value = value
    }
    if (type === "ADD_COUNTER"){
        const newCounter = {...initialCounter}
        newState.counters.push(newCounter)
    }
    console.log(action)
    console.log('after', newState)
    return newState
}