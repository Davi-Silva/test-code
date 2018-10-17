// TABLE 1
let changeBorderBtn = document.querySelector('#changeBorderBtn');
let deleteTableRowBtn = document.querySelector("#deleteRowBtn");
let table = document.querySelector("table");
let inputs = document.querySelectorAll(".inputs input");
let rowNumberInput = document.querySelector(".delete-input input");
let nRow = 3;


changeBorderBtn.addEventListener('click', () => {
    let rowArray = [];
    nRow++;
    rowArray.push(nRow);
    inputs.forEach((inputValue) => {
        rowArray.push(inputValue.value);
    });

    let row = table.insertRow();
    rowArray.forEach((rowCell) => {
        row.innerHTML += "<td>" + rowCell + "</td>";
    });
    inputs.forEach((inputValue) => {
        inputValue.value = "";
    });
});

deleteTableRowBtn.addEventListener('click', () => {
    deleteRow(rowNumberInput.value);
});

function deleteRow(n) {
    table.deleteRow(parseInt(n));
}

// TABLE 2

let table2 = document.querySelector("#table2");
let colorCell = document.querySelector("#colorCell");
let addRow = document.querySelector("#addRow");
let inputsTable2 = document.querySelectorAll(".inputs-table2 input");
let nRow2 = 1;

addRow.addEventListener('click', () => {
    let rowArray = [];
    nRow2++;
    rowArray.push(nRow2);
    inputsTable2.forEach((inputValue) => {
        rowArray.push(inputValue.value);
    });

    let row2 = table2.insertRow();
    let count = 0;
    rowArray.forEach((rowCell) => {
        if (count === 3) {
            row2.innerHTML += "<td>" + rowCell + "</td>";
            row2.style.backgroundColor = colorCell.textContent;
        } else {
            row2.innerHTML += "<td>" + rowCell + "</td>";
        }
        count++;
    });
    inputsTable2.forEach((inputValue) => {
        // inputValue.value = "";
    });
});

colorCell.style.backgroundColor = colorCell.textContent;


// Table 4


