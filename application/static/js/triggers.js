/*
    Interactivy section trigger
*/

// Interact section
const interact_section = document.querySelector('.interact'),
      // Title for the type of sort
      interact_title = document.getElementById('title-sort');
      // Option buttons
      opt_btns = document.querySelectorAll('.tool');
      // Progress text
      progress_text = document.querySelector('.progress-text');

// Show interact section
function showInteract(type, btn) {
    sort_type = type + 'sort';  // Change sort type

    // Also, change the progress messages
    if (type == 'merge') {
        progress_stages = '0:Splitting vector...,50:Comparing...,75:Merging...,100:Done';
    } else if (type == 'heap') {
        progress_stages = '0:Heapifying...,50:Building max tree...,75:Sorting...,100:Done';
    } else if (type == 'quick') {
        progress_stages = '0:Finding pivot...,50:Partitioning...,75:Sorting...,100:Done';
    }

    progress_text.dataset.stages = progress_stages; // Change the progress messages

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

/*
    Quick sort mode trigger
*/

// Quick sort mode field
const quicksort_field = document.querySelector('.quicksort-select');

for (let btn of opt_btns) {
    btn.addEventListener('click', function() {
        if (btn.id == 'quicksort-opt') {
            quicksort_field.classList.add('active');
        } else {
            quicksort_field.classList.remove('active');
        }
    })
}