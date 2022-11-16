/*
    STATE VARS
*/

// Sort type for further calculation
var sort_type;
var vector_field;
var progress_stages;

/*
    SOCKET
*/
const socket = io();

/*
    MAIN FUNCTION (SORT)
*/
const results_box = document.getElementById('results');
const time_display = document.getElementById('time-elapsed');

// Permanent listener
socket.on("vector", function(msg) {
    results_box.value = msg["result"];
    time_display.textContent = `Time elapsed: ${msg["time_elapsed"]} seconds`
})

// Send data
function sort() {
    time_display.textContent = '';
    results_box.value = '';

    if (vector_field == null) {
        return;
    }

    if (vector_field.value[vector_field.value.length - 1] == '.' || vector_field.value[vector_field.value.length - 1] == ',') {
        vector_field.value = vector_field.value.substring(0, vector_field.value.length - 1)
    }

    if (vector_field.value[vector_field.value.length - 1] == '-') {
        vector_field.value = vector_field.value.substring(0, vector_field.value.length - 2)
    }


    if (vector_field.value == '') {
        return;
    }

    if (document.querySelector('.quicksort-select').classList.contains('active')) {
        sort_type = document.getElementById('quicksort-mode').value;
    }

    // Limit vector size
    let array_vector = vector_field.value.split(',');
    if (array_vector.length > 100000) {
        vector_field.value = array_vector.splice(0, 100000).join(',')
    };

    // Send data
    socket.emit("vector",
        {
            "vector": vector_field.value,
            "request": sort_type
        }
    )

    const progress_bar = document.getElementById('progress-bar')

    // Show progress bar
    progress_bar.classList.add('active');

    updateProgressBar(progress_bar, 10);
}

/*
    ASIDE FUNCTION (GENERATE VECTOR)
*/
const min_num = document.getElementById('vector-min-num'),
      max_num = document.getElementById('vector-max-num'),
      size = document.getElementById('vector-size'),
      generate_box = document.getElementById('vector-auto');

// Permanent listener
socket.on("random", function(msg) {
    generate_box.value = msg;
})

function generate() {
    // If min > max
    if (parseFloat(min_num.value) > parseFloat(max_num.value)) {
        generate_box.value = '';
        generate_box.placeholder = 'Min. value cannot be greater than max. value.';
        return;
    }

    // Limit vector size
    if (parseInt(size.value) > 100000) {
        size.value = 100000;
    }

    // Send data
    socket.emit("random",
        {
            "min_number": min_num.value,
            "max_number": max_num.value,
            "size": size.value
        }
    )
}

/*
    ASIDE FUNCTION (PROGRESS STATUS)
*/

// Permanent listener
socket.on("progress", function(progress) {
    const progress_bar = document.getElementById('progress-bar')
    
    updateProgressBar(progress_bar, progress);

    if (progress == 100) {
        setTimeout(function() {

            // Show progress bar
            progress_bar.classList.remove('active');
        }, 2000)
    }
})
