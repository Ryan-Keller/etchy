
const container = document.getElementById('container')

let makeRows = (rows) =>{
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', rows)
    for( i=0; i<(rows * rows); i++){
        let cell = document.createElement('div')
        cell.id = 'cellBox'
        //cell.innerText = (i+1)
        container.appendChild(cell).className = 'grid-item'
    }
}

function makeColorHappen() {
    let cellBox = document.querySelectorAll('.container > div')
    cellBox.forEach((thing) =>{
        thing.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = 'blue'
        })
    })
}

let resetBoard = ()=>{
    let cellBox = document.querySelectorAll('.container > div')
    cellBox.forEach((thing) =>{
        thing.style.backgroundColor = 'tomato'
    })
}
var clearButton = document.getElementById('btn')
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
makeRows(output.innerText)
makeColorHappen()

let sliderSetter = ()=>{
    //tring to reset and grid and make a new one
    let cellBox = container.querySelectorAll('div')
    cellBox.forEach((thing) =>{
        thing.remove()
    })
    makeRows(slider.value)
    makeColorHappen()
}

slider.addEventListener('mouseup', sliderSetter);
clearButton.addEventListener('click',resetBoard)
