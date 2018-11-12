$(document).ready(onReady)

function onReady(){
    $("#generateButton").on('click', generateColor)
    $('body').on('click' , '.swapper' , swapColor)
    $('body').on('click' ,'#deleteButton' , deleteColor )
}
//adds to the DOM and counts number of blocks in an array
let totalBlocks = [];
let numberCounter = 0;
function generateColor(){
   $('body').append(`<div class = "container red">
   <p class= "counter"> </p>
   <button class = "swapper" >Swap</button>
   <button id = deleteButton >Delete</button>
   </div>`);
   totalBlocks.push(numberCounter+=1)
   updateNumber();
}
//Attempting to get my numbers counting correctly
function updateNumber(){
for(let i=0; i < totalBlocks.length; i++ ){
    numberCounter = totalBlocks[i]    
}
$(`.counter`).append(totalBlocks.length);
}
//After the counter was gonna use the button to swap the color of the specific number block
function swapColor(){
    console.log('css');
}
//did basic deleting function but doesnt delete properly
function deleteColor(){
    console.log('in deleteButton');
    $('#deleteButton').parent().remove();
   
}
