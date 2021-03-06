let numRows = 0;
let numCols = 0;

//Add a row
function addR() {
    let tr=document.createElement("tr"); 
    let td=document.createElement("td");

    td.addEventListener('click', () => {td.style.background = colorSelected;} ); //creates each cell with a function activated on click hat changes the color based off the color selected
    
    tr.appendChild(td); // create a minimum of one column
    for(let i =1;i<numCols;i++) // if more then one create more rows accordingly
    {
        let td1=document.createElement("td");
        td1.addEventListener('click', () => {td1.style.background = colorSelected;} );
        tr.appendChild(td1);
    }
    numRows+=1; //increase the number of rows recorded in the system
    if(numCols===0)//if the number of column is 0 then increase it to one
    {
        numCols=1;
    }
    let grid=document.getElementById("grid");
    grid.appendChild(tr); //add the row to the column

    
}
//Add a column
function addC() {
    let grid=document.getElementById("grid");
    let row=grid.querySelectorAll("tr");  // return an array of all row element(tr)
    
    for(let i=0;i<numRows;i++)  // add a column with respect to the rows
    {

        let td=document.createElement("td");        
        td.addEventListener('click', () => {td.style.background = colorSelected;} ); //creates each cell with a function activated on click hat changes the color based off the color selected

        row[i].appendChild(td);  //adding the cell to the current row
    }
    numCols+=1;
    if(numRows===0) // if no rows available create a row
    {
        let tr=document.createElement("tr"); 
        let td=document.createElement("td");

        td.addEventListener('click', () => {td.style.background = colorSelected;} );  //creates each cell with a function activated on click hat changes the color based off the color selected
    
        tr.appendChild(td);
        
        grid.appendChild(tr);
        numRows=1;
    }

}

//Remove a row
function removeR() {
    if(numRows===0)
    {
        alert("There's no rows to be deleted");
    }
    else
    {
        let grid=document.getElementById("grid");
        let lastRow=grid.lastElementChild; //get the last element of the row
        let remove=grid.removeChild(lastRow);
        numRows-=1; //decrease row count by one
        if(numRows===0)
        {
            numCols=0;
        }
    }


}
//Remove a column
function removeC() {
    if(numCols===0)
    {
        alert("There's no more columns to be deleted");
    }
    else
    {
        let grid =document.getElementById("grid"); 
        let row=grid.querySelectorAll("tr");
        for(let i=0;i<numRows;i++) //remove one cell from every row
        {
            let lastCell=row[i].lastElementChild; //select the last element of every row
            console.log(lastCell);
            let remove=row[i].removeChild(lastCell);
        }
        numCols-=1; //decrease column count by one
        if(numCols===0)
        {
            grid.innerHTML='';
            numRows=0;
        }
    }

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}


function fill(){
    // alert("Clicked Fill All")
    let grid =document.getElementById("grid");
    let td = grid.querySelectorAll("td"); 
    td.forEach(function(td){
        td.style.background = colorSelected; 
    })
}

function clearAll(){
    // alert("Clicked Clear All")
    let grid =document.getElementById("grid");
    let td = grid.querySelectorAll("td"); 
    td.forEach(function(td){
        td.style.backgroundColor = "";
    });
}

function fillU(){
    // alert("Clicked Fill All Uncolored")
    let td = grid.querySelectorAll("td");
    td.forEach(function (td) {
        if (td.style.backgroundColor === "") {
            td.style.backgroundColor = colorSelected;
        }
    });
}

