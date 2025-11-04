const display = document.getElementById("display");

function append(value) 
{
  display.value += value;
}

function clearDisplay() 
{
  display.value = "";
}

function backSpace() 
{
  display.value = display.value.slice(0, -1);
}

function calculate() 
{
    display.value = eval(display.value);
}

