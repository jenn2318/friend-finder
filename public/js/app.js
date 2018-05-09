//Setup these variables for jQuery to grab for use for the form to setup the friend and to show the modal
//=======================================================================================================
var $surveyForm = $('#survey-form')
var $submitButton = $('#submit');
var $nameInput = $('#name');
var $imageinput = $('#image');
var $modal = $('#modal-match');
var $modalName = $('#modal-name');
var $modalImage = $('#modal-image');



$(".submit").on("click", function(event) {
    event.preventDefault();
    var user_scores = user.score;

    //To do figure out where this function should be so it will not have scope issues

    //Here is what the functiopn will be called that will take 2 parameters......function compatible_friend (user, friend)

    //Here we will calculate the difference between the user's score and all the rest of the friends







    //var min_difference = Math.min.apply(Math, newArray);


    // Here I'm trying to grab the form elements
    var newFriend = {
        name: $nameInput.val().trim(),
        photo: $linkInput.val().trim(),
        scores: answers
    }
    console.log(newFriend);
    $.post("/api/friends", newFriend,

    function(data) {
    if (data) {
        alert("Here is your best friend match!");

        } else {
         alert("Sorry we do not have a match for you yet");
        }
        modalShow();
    });

});

function modalShow () {
var currentURL = window.location.origin;
var apiPath = "/api/survey";

$.post(currentURL + apiPath, newFriend, function(data) {
    $surveyForm.reset();
    $modalName.text(data.name);
    $modalImage.attr("src", data.photo);
    $modal.modal("show");
});

    console.log(newFriend);

}



