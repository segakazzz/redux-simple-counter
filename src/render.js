const render = (state) => {
    console.log('render is called!')
    // const counterDOM = document.getElementById('counterValue');
    // counterDOM.innerHTML = state.counters[0].value;
    // counterDOM.style.color = state.counters[0].color;
    const main = document.getElementById('main')

    // console.log(state.counters.length)
    let html = ''
    for (let i=0; i<state.counters.length; i++){
        html += getHtmlApp(i)
    }
    main.innerHTML = html

    // main.querySelectorAll('.app').forEach(function(elem, key){
    //     const counterDOM = elem.querySelector('.counterValue')
    //     counterDOM.innerHTML = state.counters[key].value;
    //     counterDOM.style.color = state.counters[key].color;
    // })

    for (let i=0; i<state.counters.length; i++){
        const app = document.getElementById(i.toString())
        // console.log(app)
        const counterDOM = app.querySelector('.counterValue')
        // console.log(counterDOM)
        counterDOM.innerHTML = state.counters[i].value;
        counterDOM.style.color = state.counters[i].color;
    }
}


const getHtmlApp = (id) => {
    return `
    <div class="app" id="${id}">
    <h1 class="counterValue">0</h1>
    <button class="increment">+1</button>
    <button class="decrement">-1</button>
    <button class="increment5">+5</button>
    <button class="decrement5">-5</button>
    <hr>
    <select class="color-selection">
        <option value="black">Select color to display</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
    <hr>
    Update Number : <input class="new-number">
    <hr>
    <button class="add-counter">+1 counter</button>
</div>
    `
}