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
document.getElementById('results').value = '';

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
    var regex = /^[0-9,.-]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }

    // Dont accept dots at the beginning
    if (element.value == "" && evt.keyCode == 46) {
        evt.preventDefault();
    }
    
    // Dont accept commas at the beginning
    if (element.value == "" && evt.keyCode == 44) {
        evt.preventDefault();
    }

    // Dont accept more than 1 comma together
    if (element.value[element.value.length - 1] == "," && evt.keyCode == 44) {
        evt.preventDefault();
    }

    // Dont accept a comma right after a dot
    if (element.value[element.value.length - 1] == "." && evt.keyCode == 44) {
        evt.preventDefault();
    }

    // Dont accept more than 1 dot together
    if (element.value[element.value.length - 1] == "." && evt.keyCode == 46) {
        evt.preventDefault();
    }

    // Dont accept a dot right after a comma
    if (element.value[element.value.length - 1] == "," && evt.keyCode == 46) {
        evt.preventDefault();
    }

    // Dont accept more than 1 dash together
    if (element.value[element.value.length - 1] == "-" && evt.keyCode == 45) {
        evt.preventDefault();
    }

    // Accept only 1 dash at the beggining or after a comma
    if (evt.keyCode == 45) {
        if (element.value.length != 0 && element.value[element.value.length - 1] != ",") {
            evt.preventDefault();
        }
    }

    // Accept only 1 dot in a number
    if (evt.keyCode == 46) {
        let i = 1, containsDot = false;
        while (i < element.value.length) {
            if (element.value[element.value.length - i] == ',') {
                break;
            } else if (element.value[element.value.length - i] == '.') {
                containsDot = true;
            }
            i++;
        }

        if (containsDot) {
            evt.preventDefault();
        }
    }

    // Fix size of the number
    let i = 1;
    while (i < element.value.length) {
        if (element.value[element.value.length - i] == ',') {
            i--;
            break;
        }
        i++;
    }
    if (i > 7 && evt.keyCode != 44) {
        evt.preventDefault();
    }
    if (i > 8 && evt.keyCode != 46 && evt.keyCode != 44) {
        evt.preventDefault();
    }
    
}