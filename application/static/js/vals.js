/*
    Validating the unique inputs (in the vector section)
*/

// By default, the vector mode on page load will be null
document.getElementById('vector-mode').value = 'select'

// All the input field available for the user will have no content in the field
const vector_manual_field = document.getElementById('vector-manual'),
      vector_auto_field = document.getElementById('vector-auto'),
      vector_min_num_field = document.getElementById('vector-min-num'),
      vector_max_num_field = document.getElementById('vector-max-num'),
      vector_size_field = document.getElementById('vector-size'),

      // Fields
      fields = [vector_manual_field,
                vector_auto_field,
                vector_min_num_field,
                vector_max_num_field,
                vector_size_field];

// Reset
for (let field of fields) {
    field.value = ''
}

// Reset result field
document.getElementById('results').textContent = '';

// Prevent paste on input fields
for (let field of fields) {
    field.onpaste = e => e.preventDefault();
}

// Just numbers on number fields and appropiate length
function validateOnlyNumbers(evt, element) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }

    if (element.value.length > 5 && element == vector_size_field) {
        evt.preventDefault();
    } else if (element.value.length > 7) {
        evt.preventDefault();
    }
}

// Validate the vector
function validateVector(evt, element) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9,]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    
    // Dont accept commas at the beginning
    if (element.value == "" && evt.keyCode == 44) {
        evt.preventDefault();
    }

    // Dont accept more than 1 comma together
    if (element.value[element.value.length - 1] == "," && evt.keyCode == 44) {
        evt.preventDefault();
    }
}