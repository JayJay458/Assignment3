let numRows = 0;
let numCols = 0;
let colorSelected = "White"; 

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
            let remove=row[i].removeChild(lastCell);
        }
        numCols-=1; //decrease column count by one
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}


function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
