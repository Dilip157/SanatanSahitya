document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const totalPages = document.querySelectorAll(".page-content").length;
  
    function showPage(pageNumber) {
      const pages = document.querySelectorAll(".page-content");
      currentPage = pageNumber;
  
      pages.forEach((page, index) => {
        page.style.display = index + 1 === pageNumber ? "block" : "none";
      });
    }
  
    function changePage(offset) {
      const nextPage = currentPage + offset;
  
      if (nextPage >= 1 && nextPage <= totalPages) {
        showPage(nextPage);
      }
    }
  
    // Initial page display
    showPage(currentPage);
  
    // Event listeners for Prev and Next buttons
    document.getElementById("prevBtn").addEventListener("click", () => changePage(-1));
    document.getElementById("nextBtn").addEventListener("click", () => changePage(1));
  });
  