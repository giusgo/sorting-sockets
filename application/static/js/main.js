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
socket.on("message", function(msg) {
    results_box.textContent = msg;
})

// Send data
function sort() {
    if (vector_field.value == '') {
        return;
    }

    if (sort_type == 'quicksort') {
        sort_type = document.getElementById('quicksort-mode').value;
    }

    // Send data
    socket.emit("message",
        {
            "vector": vector_field.value,
            "request": sort_type
        }
    )
}