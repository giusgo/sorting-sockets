/*
    Interactivy section trigger
*/

// Interact section
const interact_section = document.querySelector('.interact'),
      // Title for the type of sort
      interact_title = document.getElementById('title-sort');
      // Option buttons
      opt_btns = document.querySelectorAll('.tool');

// Show interact section
function showInteract(type, btn) {
    sort_type = type + 'sort';  // Change sort type

    interact_section.style.display = 'block';
    interact_title.innerHTML = type.charAt(0).toUpperCase() + type.slice(1) + ' Sort'

    for (let btn of opt_btns) {
        btn.classList.remove('active');
    }

    btn.classList.add('active');
}

/*
    Vector mode trigger
*/

// Vector modes fields
const vector_manual = document.querySelector('.vector-manual'),
      vector_auto = document.querySelector('.vector-auto');

// Show options for vector params
function showVectorParams(value) {

    if (value == 'select') {
        vector_manual.classList.remove('active');
        vector_auto.classList.remove('active');

        vector_field = null;
    }

    if (value == 'manual') {
        vector_manual.classList.add('active');
        vector_auto.classList.remove('active');

        vector_field = document.getElementById('vector-manual');
    }

    if (value == 'auto') {
        vector_auto.classList.add('active');
        vector_manual.classList.remove('active');

        vector_field = document.getElementById('vector-auto');
    }
}