
var $ =function(id){
	return document.getElementById(id);
};

function discountCalculator(price, discount){
	var netprice = price;
	{
		netprice = price - (price * discount/100);
	}
	netprice = netprice.toFixed(2);
	return netprice;
}

function calculateDollar(price,discount) {
	var discDollar;
	{
	discDollar = price- (price - (price * discount/100));
	}
	discDollar = discDollar.toFixed(2);
	return discDollar;
}



function backgroundProcess() {
	var price = parseFloat ($ ("iteamPrice").value);
	var discount = parseFloat ($ ("discountPercentage").value);
	var textLine;
	if (isNaN(price) || isNaN(discount)){
		textLine = "Note: You must enter a value"
		alert("Note: You must enter a value");
	}
	else if (0 < price && price > 999){
		textLine = "Note: Price must be greater than 0 or less than 1000";
	}
	else if (0 < discount && discount > 69){
		textLine = "Note: Discount must be greater than 0 or less than 70"
	}
	else{
			textLine = "Check Out"
	$("discountDollar").value = calculateDollar(price,discount);
	$("net_price").value = discountCalculator(price, discount);
	}
	
	$("noteParagraph").innerHTML = textLine;
}


//This function i got from website (reference in the text file in Zip file)
var specialKeys = new Array();
        specialKeys.push(8); 
		
function IsNumeric(e) {
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
            $("error").style.display = ret ? "none" : "inline";
			
            return ret;
}

	
window.onload = function () {
	$("calculate").onclick = backgroundProcess;
};