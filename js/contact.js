// Contact Form - Dynamic Dropdown Functionality
// This script shows/hides input boxes based on the selected topic

// Get the select element by its ID
const topicSelect = document.getElementById('topic');

// Get all the dynamic input divs by their IDs
const inputAdoption = document.getElementById('input-adoption');
const inputVolunteer = document.getElementById('input-volunteer');
const inputDonate = document.getElementById('input-donate');
const inputGeneral = document.getElementById('input-general');

// Function to hide all dynamic input boxes
function hideAllInputs() {
  inputAdoption.classList.remove('visible-input');
  inputAdoption.classList.add('hidden-input');
  
  inputVolunteer.classList.remove('visible-input');
  inputVolunteer.classList.add('hidden-input');
  
  inputDonate.classList.remove('visible-input');
  inputDonate.classList.add('hidden-input');
  
  inputGeneral.classList.remove('visible-input');
  inputGeneral.classList.add('hidden-input');
}

// Function to show the appropriate input based on selected topic
function showRelevantInput(selectedValue) {
  // First, hide all inputs
  hideAllInputs();
  
  // Then, show only the relevant input based on selection
  if (selectedValue === 'adoption') {
    inputAdoption.classList.remove('hidden-input');
    inputAdoption.classList.add('visible-input');
  } else if (selectedValue === 'volunteer') {
    inputVolunteer.classList.remove('hidden-input');
    inputVolunteer.classList.add('visible-input');
  } else if (selectedValue === 'donate') {
    inputDonate.classList.remove('hidden-input');
    inputDonate.classList.add('visible-input');
  } else if (selectedValue === 'general') {
    inputGeneral.classList.remove('hidden-input');
    inputGeneral.classList.add('visible-input');
  }
  // If no selection (empty string), all inputs remain hidden
}

// Add event listener to the select dropdown
topicSelect.addEventListener('change', function() {
  // Get the currently selected value
  const selectedValue = this.value;
  
  // Show the relevant input box
  showRelevantInput(selectedValue);
});

// Log to console for debugging
console.log('Contact form dynamic dropdown initialized');
