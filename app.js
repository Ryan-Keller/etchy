
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
        thing.addEventListener('mouseenter', (e)=>{
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

makeRows(13)
makeColorHappen()
