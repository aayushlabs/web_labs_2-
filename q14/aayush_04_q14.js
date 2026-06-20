function addRow() {
    let table = document.getElementById("productTable");
    let lastRow = table.rows[table.rows.length - 1];
    let newRow = lastRow.cloneNode(true);

    // Update row number
    let rowCount = table.rows.length;
    newRow.cells[0].textContent = rowCount;
    newRow.cells[2].querySelector("input").value = "";

    table.appendChild(newRow);
}

function removeRow(button) {
    let row = button.closest("tr");
    row.remove();
}