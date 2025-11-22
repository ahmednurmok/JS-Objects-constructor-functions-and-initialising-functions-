//Higher order functions are functions that are able to take inputs. 
//Call back functions are functions that are passed in as an input.
//Code: 
document.addEventListener("keypress", respondToKey(event));
function respondToKey(event) {
console.log("Key pressed.");
}
//If you give your function a parameter, it will receive whatever event object the event listener produces.
//Example:

$0.addEventListener('click', function (s) {
  console.log(s);
}); 
//or
$0.addEventListener('click', function (event) {
  console.log(event);
});
//Calling the function here, LOGS everything about the ‘click’ event – which in this case is clicking from the first step to the last.
//Name of the function is irrelevant 
