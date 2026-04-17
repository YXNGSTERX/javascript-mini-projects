    let items = ['foo', 'bar'];

    const itemsDiv = document.getElementById('items');
    const input = document.getElementById('text');
    const storageKey = 'todoItems';

    function loadItems() {
        const stringifiedItems = localStorage.getItem(storageKey);
        if (stringifiedItems) {
            items = JSON.parse(stringifiedItems);
        }
        renderItems();
    }

    function renderItems() {
        itemsDiv.innerHTML = null;

        for (const [index, item] of items.entries()) {

            const container = document.createElement('div');
            container.style.marginBottom = '10px';

            const text = document.createElement('div');
            text.style.marginRight = '10px';
            text.textContent = item;

            const deleteButton = document.createElement('button');
            deleteButton.style.display = 'inline';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteItem(index);

            container.appendChild(text);
            container.appendChild(deleteButton);
            itemsDiv.appendChild(container);

        }
    }

    function saveItems() {
        const stringifiedItems = JSON.stringify(items);
        localStorage.setItem(storageKey, stringifiedItems);
    }

    function addItem() {
        const value = input.value;
        if (!value) {
            alert('cannot be empty');
            return;
        }

        items.push(value);
        renderItems();
        saveItems();
        input.value = null;
    }

    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
        saveItems();
    }

    document.addEventListener("DOMContentLoaded", loadItems)