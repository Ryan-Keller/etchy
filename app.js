
const container = document.getElementById('container')

let makeRows = (rows, cols) =>{
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for( i=0; i<(rows * cols); i++){
        let cell = document.createElement('div')
        cell.id = 'cellBox'
        //cell.innerText = (i+1)
        container.appendChild(cell).className = 'grid-item'
    }
}

makeRows(20,10)

function makeColorHappen() {
let cellBox = document.querySelectorAll('.container > div')
cellBox.forEach((item) =>{
    item.addEventListener('mouseenter', (e)=>{
        e.target.style.backgroundColor = 'blue'
    })
})
}

makeColorHappen()
