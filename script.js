function openOverlay(id) {
    document.getElementById(id).style.display = "block";
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
}

function goToHomePage() {
    closeAllOverlays(); // Close all overlays before going to home page
    // Redirect to home page (adjust the URL as needed)
    window.location.href = "index.html"; // Change "index.html" to your home page URL
}

function closeAllOverlays() {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach(function(overlay) {
        overlay.style.display = "none";
    });
}