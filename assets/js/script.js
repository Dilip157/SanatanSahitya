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

  
  function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
  }
  
  function searchResults(query) {
    var menuItems = document.querySelectorAll('#menuItems li');
    query = query.toLowerCase();
  
    menuItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  function search() {
    var searchInput = document.querySelector('input[type="text"]');
    var searchTerm = searchInput.value.toLowerCase().trim();
  
    // Example: Redirect to a page based on the search term
    switch (searchTerm) {
      case 'sarth shree dnyaneshwari':
        window.location.href = 'index.html';
        break;
      case 'graphic design':
        window.location.href = 'graphic-design.html';
        break;
      case 'seo':
        window.location.href = 'seo.html';
        break;
      default:
        alert('No results found for: ' + searchTerm);
        break;
    }
  }

  function copyUpiId() {
    var upiId = '9552200287@ybl';
    navigator.clipboard.writeText(upiId).then(function() {
        alert('UPI ID copied to clipboard: ' + upiId);
    }).catch(function(err) {
        console.error('Unable to copy UPI ID', err);
    });
}

// You can use a library like 'qrious' to generate QR codes or use an API.
// For simplicity, let's assume the QR code image is already available.
var qrCodeElement = document.getElementById('qr-code');
var upiQRImagePath = '/assets/images/DC_QRCODE.jpg';

var imgElement = document.createElement('img');
imgElement.src = upiQRImagePath;
imgElement.alt = 'UPI QR Code';

imgElement.onload = function() {
    qrCodeElement.appendChild(imgElement);
};

imgElement.onerror = function() {
    console.error('Error loading the UPI QR Code image.');
    qrCodeElement.innerHTML = 'Error loading the UPI QR Code image.';
};

  
  
