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
            email: {
                required: true,
                email: true,
                remote: {
                    type: "GET",
                    url: "/your-service-url/",
                    cache: false,
                    data: {
                        mail: function () {
                            return $("#mail").val();
                        }
                    },
                    dataType: "json",
                    dataFilter: function (data) {
                        if (data) {
                            var json = $.parseJSON(data);

                            if (json) {
                                return JSON.stringify(json.available);
                            }
                        }

                        return false;
                    }
                }                
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
            email: {
                required: "Required e-mail address",
                email: "Not a valid e-mail address",
                remote: "User e-mail already in use"
            },            
            hiddenOptionValidator: {
                requireOne: "Please tick one checkbox"
            }         
        }
    });
});        