$.validator.addMethod("requireOne",
                        function (value, element) {
                            return $('input[type="checkbox"]:checked').size() > 0;
                        },
                        "Missing required status - Must choose one");

$.validator.setDefaults({ ignore: [] });
                        
$(document).ready(function () {
    $("form").validate({
        debug: true,
        rules: {
            name: {
                required: true,
                minlength: 7
            },
            address: {
                required: true
            },
            zipcode: {
                required: true,
                digits: true,
                minlength: 5
            },
            hiddenOptionValidator: {
                requireOne: true
            }            
        },
        messages: {
            name: {
                required: "Required name",
                minlength: "Your name is too short. Must be at least {0} characters."
            },
            address: {
                required: "Required address"
            },
            zipcode: {
                required: "Required zipcode",
                digits: "Only digits accepted",
                minlength: "A minimum of {0} digits are required."
            },            
            hiddenOptionValidator: {
                requireOne: "Please tick one checkbox"
            }            
        }
    });
    
    $("input[type='checkbox']").click(function() {
        $("#hiddenOptionValidator").valid();
    });
});        