$(document).ready(function () {
    $("form").validate({
        debug: true,
        rules: {
            name: {
                required: true
            }
        }
    });
});        