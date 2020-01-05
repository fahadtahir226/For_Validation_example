function validateData() {
    // Tracking all inputs
    var fname = document.getElementById("first_name_id"),
        lname = document.getElementById("last_name_id"),
        p_number = document.getElementById("phone_number_id"),
        email = document.getElementById("email_address_id"),
        s_addr = document.getElementById("students_address_id");
    function NoneEmpty() {
        if (fname.value == '' || lname.value == '' || p_number.value == '' || email.value == '' || s_addr.value == '') {
            return false;
        } else {
            return true;
        }
    }

    // handle blur for all
    function handle_blur(span_id) {
        var input = event.target,
            span = document.getElementById(span_id);
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }

        if (span_id == 's5' && !input.value.startsWith('http://') && !input.value.includes('~')) {
            var i = document.createElement('IMG');
            i.setAttribute("src", "wrong.png");
            i.setAttribute("width", "20");
            i.setAttribute("height", "20");
            span.appendChild(i);

        } else if (span_id == 's5' && input.value.startsWith('http://') && input.value.includes('~')) {
            var i = document.createElement('IMG');
            i.setAttribute("src", "tick.png");
            i.setAttribute("width", "20");
            i.setAttribute("height", "20");
            span.appendChild(i);
        } else {
            if (input.value === '') {
                var i = document.createElement('IMG');
                i.setAttribute("src", "wrong.png");
                i.setAttribute("width", "20");
                i.setAttribute("height", "20");
                span.appendChild(i);
            } else {
                if (input.checkValidity()) {
                    span.style.color = 'green';
                    var i = document.createElement('IMG');
                    i.setAttribute("src", "tick.png");
                    i.setAttribute("width", "20");
                    i.setAttribute("height", "20");
                    span.appendChild(i);
                } else {
                    var i = document.createElement('IMG');
                    i.setAttribute("src", "wrong.png");
                    i.setAttribute("width", "20");
                    i.setAttribute("height", "20");
                    span.appendChild(i);
                }
            }
        }

    }
    fname.onblur = () => handle_blur('s1');
    lname.onblur = () => handle_blur('s2');
    p_number.onblur = () => handle_blur('s3');
    email.onblur = () => handle_blur('s4');
    s_addr.onblur = () => handle_blur('s5');

    function handlefocus(span) {
        var span_element = document.getElementById(span);
        if (!span_element.value) {
            span_element.style.color = 'white';
            if (span == 's1') {
                span_element.innerText = "Please enter first name";
            } else if (span == 's2') {
                span_element.innerText = "Please enter last name";

            } else if (span == 's3') {
                span_element.innerText = "Please enter a valid phone number (must containe -) ";

            } else if (span == 's4') {
                span_element.innerText = "Please enter a valid email address (must containe @) ";

            } else if (span == 's5') {
                span_element.innerText = "Please enter a valid Sulley address (must containe ~) ";
            }
        }
    }
    fname.onfocus = () => handlefocus('s1');
    lname.onfocus = () => handlefocus('s2');
    p_number.onfocus = () => handlefocus('s3');
    email.onfocus = () => handlefocus('s4');
    s_addr.onfocus = () => handlefocus('s5');

    document.myform.onsubmit = function () {
        event.preventDefault();
        var radiobtns = document.getElementsByClassName('radio_inputs');
        console.log(radiobtns);
        if (fname.checkValidity() && lname.checkValidity() && p_number.checkValidity() && email.checkValidity() && s_addr.checkValidity() && NoneEmpty()) {
            var result = document.getElementById('result'),
                img = document.createElement('img');
            if (radiobtns[0].checked && radiobtns[3].checked && radiobtns[4].checked) {
                img.setAttribute("src", "./img/oselo.PNG");
            }
            else if (radiobtns[1].checked && radiobtns[2].checked && radiobtns[5].checked) {
                img.setAttribute("src", "./img/explorify.PNG");
            }
            else {
                img.setAttribute("src", "./img/rosemag.PNG");
            }
            result.appendChild(img);
        } else {
            alert('Some data is invalid in form');
        }
    }
}
window.addEventListener('load', validateData);