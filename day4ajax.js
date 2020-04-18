//1) Create XMLHttpRequest object
//2) Create handler onreadystatechange event
//3) Make a call to the server

var xmlobj = null;

if(window.XMLHttpRequest)
{
    xmlobj = new XMLHttpRequest();
}
else
{
    xmlobj = new ActiveXObject("Microsoft.XMLHTTP");
}


/*
1) Connection established
2) Transfer initialized
3) Transfer in progress
4) Transfer complete
*/
xmlobj.onreadystatechange = function()
{
    if(xmlobj.readyState === 4)
    {
        //Do work here
        document.getElementById("greet").innerHTML = xmlobj.response;
    }
}

function doSomething(){
    xmlobj.open("GET","http://localhost/JSlessons/sample.tiki");
    xmlobj.send(null);
}

