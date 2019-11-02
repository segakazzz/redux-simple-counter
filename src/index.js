const { createStore } = Redux

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => {
  console.log('subscribe is called!')
  render(getState())
})

render(getState())

// Dispatch the "INCREMENT" action every time the +1 button is pressed
// const app = document.getElementById('app-' + '0')
// const incrementButton = document.getElementById('increment')
// const decrementButton = document.getElementById('decrement')
// const increment5Button = document.getElementById('increment5')
// const decrement5Button = document.getElementById('decrement5')
// const colorSelection = document.getElementById('color-selection')
// const newNumber = document.getElementById('new-number')
// const addCounter = document.getElementById('add-counter')

// incrementButton.addEventListener('click', e =>
//     dispatch({ type: 'INCREMENT', counterIndex: 0 })
// )
// decrementButton.addEventListener('click', e =>
//     dispatch({ type: 'DECREMENT', counterIndex: 0 })
// )
// increment5Button.addEventListener('click', e =>
//   dispatch({ type: 'INCREMENT_5', counterIndex: 0 })
// )
// decrement5Button.addEventListener('click', e =>
//   dispatch({ type: 'DECREMENT_5', counterIndex: 0 })
// )
// colorSelection.addEventListener('change', e =>
//   dispatch({ type: 'CHANGE_COLOR', color: colorSelection.value, counterIndex: 0 })
// )
// newNumber.addEventListener('change', e => {
//     const inputNumber = parseInt(e.target.value) || 0
//     dispatch({type: 'CHANGE_NUMBER', value: inputNumber, counterIndex: 0})
// })

// addCounter.addEventListener('click', e => {
//     dispatch({type: 'ADD_COUNTER'})
// })

document.body.addEventListener('click', e => {
  const appId = getAppId(e)
  // console.log(appId)
  if (e.target.classList.contains('increment')) {
    dispatch({ type: 'INCREMENT', counterIndex: appId })
  }
  if (e.target.classList.contains('decrement')) {
    dispatch({ type: 'DECREMENT', counterIndex: appId })
  }
  if (e.target.classList.contains('increment5')) {
    dispatch({ type: 'INCREMENT_5', counterIndex: appId })
  }
  if (e.target.classList.contains('decrement5')) {
    dispatch({ type: 'DECREMENT_5', counterIndex: appId })
  }
  if (e.target.classList.contains('add-counter')) {
    dispatch({ type: 'ADD_COUNTER' })
  }
})

document.body.addEventListener('change', e => {
  const appId = getAppId(e)
  if (e.target.classList.contains('color-selection')) {
    dispatch({ type: 'CHANGE_COLOR', color: e.target.value, counterIndex: appId })
  }
  if (e.target.classList.contains('new-number')) {
    const inputNumber = parseInt(e.target.value) || 0
    dispatch({ type: 'CHANGE_NUMBER', value: inputNumber, counterIndex: appId })
  }
})

function getAppId (e) {
  const appId = parseInt(e.target.closest('.app').getAttribute('id'))
  if (appId >= 0) {
    return appId
  } else {
    return null
  }
}
