// script.js

const totalPages = 365;
let currentPage = 1;

function changePage(pageNumber) {
    // Update the content based on the selected page number
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(`page${pageNumber}`);
    selectedPage.style.display = 'block';

    // Remove the 'active' class from all pagination buttons
    document.querySelectorAll('#pagination a, #pagination button').forEach(button => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked pagination button if it exists
    const anchorButton = document.querySelector(`#pagination a[data-page="${pageNumber}"]`);
    const buttonButton = document.querySelector(`#pagination button[data-page="${pageNumber}"]`);

    if (anchorButton) {
        anchorButton.classList.add('active');
    }

    if (buttonButton) {
        buttonButton.classList.add('active');
    }

    currentPage = pageNumber;
}

function previousPage() {
    const newPage = currentPage - 1;
    if (newPage >= 1) {
        changePage(newPage);
    }
}

function nextPage() {
    const newPage = currentPage + 1;
    if (newPage <= totalPages) {
        changePage(newPage);
    }
}
