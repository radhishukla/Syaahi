document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').value.split('\\').pop(); // Extract the file name

    // Get selected genres (for multiple selection)
    const selectedGenres = Array.from(document.getElementById('genres').selectedOptions)
        .map(option => option.text)
        .join(', ');

    // Get tags
    const tags = document.getElementById('tags').value;

    // Display the entered values
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookAuthor').textContent = author;
    document.getElementById('bookDesc').textContent = description;
    document.getElementById('bookGenres').textContent = selectedGenres;
    document.getElementById('bookTags').textContent = tags;
    document.getElementById('bookFile').textContent = file;

    // Show the book display section
    document.getElementById('bookDisplay').style.display = 'block';
});
