    let items = ['foo', 'bar'];

    const itemsDiv = document.getElementById('items');
        itemsDiv.innerHTML = null;

        for (const [index, item] of items.entries()) {

            const container = document.createElement('div');
            container.style.marginBottom = '10px';

            const text = document.createElement('div');
            text.textContent = item;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteItem(index);

            container.appendChild(text);
            container.appendChild(deleteButton);
            itemsDiv.appendChild(container);

        }


    function loadItems() {

    }

    function renderItems() {}

    function saveItems() {}

    function addItem() {}

    function deleteItem(index) {}