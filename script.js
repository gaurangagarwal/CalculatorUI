function InsertfromKeyboard(event)
{
    var code = event.keyCode;

    console.log("Key pressed: " + code);
	
	if(code=="48" || code=="96")
	{
		calculator.display.value += "0";
	}else if(code=="49" || code=="97")
	{
		calculator.display.value += "1";
	}else if(code=="50" || code=="98")
	{
		calculator.display.value += "2";
	}else if(code=="51" || code=="99")
	{
		calculator.display.value += "3";
	}else if(code=="52" || code=="100")
	{
		calculator.display.value += "4";
	}else if(code=="53" || code=="101")
	{
		calculator.display.value += "5";
	}else if(code=="54" || code=="102")
	{
		calculator.display.value += "6";
	}else if(code=="55" || code=="103")
	{
		calculator.display.value += "7";
	}else if(code=="56" || code=="104")
	{
		calculator.display.value += "8";
	}else if(code=="57" || code=="105")
	{
		calculator.display.value += "9";
	}else if(code=="107" || code=="187")
	{
		calculator.display.value += "+";
	}else if(code=="109" || code=="189")
	{
		calculator.display.value += "-";
	}else if(code=="111" || code=="55")
	{
		calculator.display.value += "/";
	}else if(code=="106")
	{
		calculator.display.value += "*";
	}else if(code=="110" || code=="190" || code=="188")
	{
		calculator.display.value += ".";
	}else if(code=="13")
	{
		calculator.display.value = eval(calculator.display.value);
	}else if(code=="67")
	{
		calculator.display.value = '';
	}
}