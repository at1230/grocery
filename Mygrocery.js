function addItem() {
    const itemNameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('quantity');
    const mrpInput = document.getElementById('mrp');

    const itemName = itemNameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const mrp = mrpInput.value.trim();

    if (itemName !== '' && quantity !== '' && mrp !== '') {
        const tbody = document.getElementById('groceryList');

        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = itemName;
        cell2.innerHTML = quantity;
        cell3.innerHTML = mrp;
        cell4.innerHTML = '<button class="btn btn-danger" onclick="removeItem(this)">Delete</button>';


        // Clear the input fields
        itemNameInput.value = '';
        quantityInput.value = '';
        mrpInput.value = '';

       
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        document.body.insertBefore(successMessage, document.body.firstChild);

       
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);

       
       

        // Close the modal
        $('#addItemModal').modal('hide');
    }
}

function removeItem(button) {
    const row = button.closest('tr');
    row.remove();
}
