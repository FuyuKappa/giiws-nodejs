var doc = document;

var names = doc.querySelectorAll(".charName");

//Special thanks to: Ricardo Goncalves
//https://github.com/ricardobrg/fitText/
function fitText(outputSelector){
    // max font size in pixels
    const maxFontSize = 30;
    // get the DOM output element by its selector
    let outputDiv = outputSelector;
    // get element's width
    let width = outputDiv.clientWidth;
    // get content's width
    let contentWidth = outputDiv.scrollWidth;
    // get fontSize
    let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);
    // if content's width is bigger then elements width - overflow
    if (contentWidth > width){
        fontSize = Math.ceil(fontSize * width/contentWidth,10);
        fontSize =  fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize - 1;
        outputDiv.style.fontSize = fontSize+'px';   
    }else{
        // content is smaller then width... let's resize in 1 px until it fits 
        while (contentWidth === width && fontSize < maxFontSize){
            fontSize = Math.ceil(fontSize) + 1;
            fontSize = fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize;
            outputDiv.style.fontSize = fontSize+'px';   
            // update widths
            width = outputDiv.clientWidth;
            contentWidth = outputDiv.scrollWidth;
            if (contentWidth > width){
                outputDiv.style.fontSize = fontSize-1+'px'; 
            }
        }
    }
}

for(let i = 0; i < names.length; i++){
	fitText(names[i]);
}

//Align the grey row to the bottom of grey row
let greyTable = doc.querySelector(".greyTable");
let greyRow = doc.querySelector(".greyRow");
if(greyRow.innerHTML != ''){
	greyRow.style.top = greyTable.getBoundingClientRect().bottom + window.scrollY + "px";
}
else{
	greyTable.style.paddingBottom="8em";
	greyRow.style.paddingBottom="0px";
}
	
