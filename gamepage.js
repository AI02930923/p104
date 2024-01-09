var y = Math.floor(Math.random() *10 + 1);
var guess = 1;
function submit() {
    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
        + guess + " GUESS ");
        guess=1;

       
    }
    else if(x > y)
    {
        guess++;
        alert("OPSS SORRY!! TRY A SMALLER NUMBER");
    }
    else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
    
}
function playAgain(){
    y = Math.floor(Math.random() *10 + 1);
}