// Function to display a particular section by its ID and hide other sections
function display(sectionId) {
    var sections = document.querySelectorAll('div[id^="section"]');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Function to initialize the page by displaying the home section and hiding others
function initializePage() {
    var sections = document.querySelectorAll('div[id^="section"]');
    sections.forEach(function(section) {
        if (section.id === 'sectionHome') {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Initialize the page
initializePage();
