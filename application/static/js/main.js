/*
    STATE VARS
*/

// Sort type for further calculation
var sort_type;
var vector_field;

/*
    SOCKET
*/
const socket = io();

/*
    MAIN FUNCTION (SORT)
*/
const results_box = document.getElementById('results');

// Permanent listener
socket.on("vector", function(msg) {
    results_box.value = msg;
})

// Send data
function sort() {
    if (vector_field.value == '') {
        return;
    }

    if (document.querySelector('.quicksort-select').classList.contains('active')) {
        sort_type = document.getElementById('quicksort-mode').value;
    }

    // Send data
    socket.emit("vector",
        {
            "vector": vector_field.value,
            "request": sort_type
        }
    )
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
    // Send data
    socket.emit("random",
        {
            "min_number": min_num.value,
            "max_number": max_num.value,
            "size": size.value
        }
    )
}