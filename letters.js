/*
Author: Austin Bearden
Date Created: 09/28/2018
Purpose: Draw onto the canvas
*/

//Use buttons to display the vowels on the screen!

var theCanvas = document.getElementById("theCanvas");
var context = theCanvas.getContext('2d');
context.fillStyle = "rgb(1000, 1000, 0)";
context.fillRect(0, 0, 600, 450);

//action when you click draw a line, it should draw a line
$("#buttonForA").click(function() {
    //code to create Letter A
    context.beginPath();
    context.moveTo(50, 30);
    context.lineTo(20, 100);
    context.moveTo(50, 30);
    context.lineTo(80, 100);
    context.moveTo(35, 65);
    context.lineTo(65, 65);
    context.strokeStyle="black";
    context.stroke();
    // end of code for Letter A
});

$("#buttonForE").click(function() {
    //code to create Letter E
    context.beginPath();
    context.moveTo(120, 30);
    context.lineTo(160, 30);
    context.moveTo(120, 30);
    context.lineTo(120, 65);
    context.lineTo(155, 65);
    context.moveTo(120, 65);
    context.lineTo(120, 100);
    context.moveTo(120, 99);
    context.lineTo(160, 99);
    context.strokeStyle="black";
    context.stroke();
    // end of code for Letter E
});

$("#buttonForI").click(function() {
    //code to create Letter I
    context.beginPath();
    context.lineWidth=1;
    context.moveTo(180, 30);
    context.lineTo(230, 30);
    context.moveTo(205, 30);
    context.lineTo(205, 100);
    context.moveTo(180, 100);
    context.lineTo(230, 100);
    context.strokeStyle="black";
    context.stroke();
    // end of code for Letter I

});

$("#buttonForO").click(function() {
    //code to create Letter O
    context.beginPath();
    context.arc(300, 65, 37, 0, 2*Math.PI);
    context.fillStyle="white";
    context.fill();
    context.strokeStyle="black";
    context.stroke();
    // end of code for Letter O
});

$("#buttonForU").click(function() {
    //code to create Letter U
    context.beginPath();
    context.arc(400, 75, 25, 0, Math.PI);
    context.moveTo(375, 75);
    context.lineTo(375, 30);
    context.moveTo(425, 75);
    context.lineTo(425, 30);
    context.strokeStyle="black";
    context.stroke();
    // end of code for Letter U

});