// Material Select Initialization

    $('.custom-select').materialSelect();

    $("#submitBtn").on("click", function () {
        event.preventDefault();
        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".custom-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }
        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };
            //posting the new var to the server, waiting on a response  (data) which will be my comparison, name, and photo of new friend.
            $.post("/api/friends", userData, function(data){
                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
              $("#match-name").text(data.name);
              $("#match-img").attr("src", data.photo);
    
              // Show the modal with the best match
              $("#results-modal").modal("toggle");
            })
        }
        //if any are empty, throw an alert.
        else {
            alert("Please fill out every question.")
        }
    })
