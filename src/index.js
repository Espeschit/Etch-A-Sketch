let container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let clearButton = document.getElementById('clear');
let colourButton = document.getElementById('colour');
let defaultButton = document.getElementById('black');

let gridValue;
let colour = false


function grid() {

    function createContent() {
        gridValue = 16;
        createGrid();
    };

    createContent();

    function createGrid() {
        createRows(gridValue);
        createColumns(gridValue);
        
        for (let i = 0; i < cells.length; i++) {

            cells[i].addEventListener('click', function() {
                if (cells[i].classList.contains('cellOnHover')) {
                    cells[i].classList.remove('cellOnHover');
                } else {
                    cells[i].classList.add('cellOnHover');
                }
            })

            colourButton.addEventListener('click', function() {
                if (colour = true) {
                    cells[i].onmouseover = function(e) {
                        var r = Math.floor(Math.random() * 256);
                        var g = Math.floor(Math.random() * 256);
                        var b = Math.floor(Math.random() * 256);
                        var bckColor = "rgb(" + r + "," + g + "," + b + ")";
                        this.style.backgroundColor = bckColor
                        colour = false
                    }
                }
            })

            defaultButton.addEventListener('click', function() {
                colour = false
                cells[i].addEventListener('mouseover', e => e.target.classList.add('cellOnHover'));
                cells[i].onmouseover = function(e) {
                var bckColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
                this.style.backgroundColor = bckColor
            }
            })
            
            cells[i].addEventListener('mouseover', e => e.target.classList.add('cellOnHover'));
        }
    }

    function newGrid() {
        let newValue = parseInt(prompt('value'));
        gridValue = newValue;

        createGrid();
    }

    
    clearButton.onclick = function() {
        container.innerHTML = '';
        newGrid();
    };
}

function createRows(newRows) {
    for (let p = 0; p < newRows; p++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    };
};

function createColumns(newCells) {
    for (let i = 0; i < rows.length; i++) {
        for (let p = 0; p < newCells; p++) {
            let newCell = document.createElement('div');
            rows[p].appendChild(newCell).className = 'cell';
        };
    };
};


grid();