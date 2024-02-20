// CALCULATOR PROGRAM
window.alert("Please be advised that the sign '/' is used as a division sign to perform divisive operations");
const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value = display.value + input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        // I am aware of the security risks and processing implications that eval causes however due to the fact that this internship is purely for learning purposes I have used it.
        display.value = eval(display.value); 
    }
    catch(error)
    {
        display.value = "Error";
    }
}