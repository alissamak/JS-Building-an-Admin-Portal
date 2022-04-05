
// Your Code Here
async function retrieveBooks(){
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    books.forEach(bookList);
}

function bookList(book){
    let root = document.querySelector('#root');
    
    let li = document.createElement('li');
    li.textContent = book.title;

    let bookQuant = document.createElement('input');
    bookQuant.textContent = book.quantity;

    let saveButton = document.createElement('button');
    saveButton.textContent = "Save";

    //bonus
    // let deleteButton = document.createElement('button');
    // deleteButton.textContent = "Delete";

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: book.id,
                quantity: bookQuant.value,
            })
        })

    // deleteButton.addEventListener('click', () => {
    //     fetch('http://localhost:3001/removeBook/{book.id}', {
    //         method: 'DELETE',
    //         })
    //     })
    })

    li.append(bookQuant, saveButton);
    root.append(li);

}

retrieveBooks();