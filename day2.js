function somefx(param1,monkey = 'default value')
{
    console.log("Some function being called. Values passed: " + param1 + ", " + monkey);
}

var doSomething = (param1) => {
    console.log("Day2 Doing something");
};
// somefx();

function xyz()
{
    return ()=>{

    };
}

var obj = {
    somevar : 10,
    doingStuff : () => {}
};

// doSomething(1);
// obj.doingStuff();
var greet;

window.onload = ()=>{
    console.log("Page loaded");
    greet = document.getElementById("greet");
    greet.title = "Tiki was here";
    greet.style.color = "purple";
    greet.style.textDecoration = "underline";
    
    greet.onclick = function(){
        console.log("Greeting clicked");
    }

    greet.onmouseover = ()=>{
        greet.innerHTML = "Don't touch me!";
    };

    greet.onmouseout = ()=>{
        greet.innerHTML = "Come back here!";
    };

    // document.onmousemove = (event)=>{
    //     greet.innerHTML = "X: " + event.screenX + ", Y: " + event.screenY;
    // };

    var uinput = document.getElementById("uinput");
    uinput.style.border = "solid 3px #ff00ff";
    uinput.style.borderRadius = "10px";

    var buttons = document.getElementsByTagName('button');
    buttons[0].style.borderRadius = "10px";
    
    // console.log(buttons);

    uinput.style.padding = "5px";

    uinput.onkeyup = (tikievent)=>{
        // greet.innerHTML = tikievent.keyCode;
        if(uinput.value === "Tiki")
        {
            uinput.style.border = "solid 2px green";
        }
        else
        {
            uinput.style.border = "solid 2px red";
        }
    };

    uinput.onkeypress = (evt)=>{
        greet.innerHTML = evt.charCode;
    };
}

/*
EVENTS:

Window:
onload,onunload,onresize,onfocus,onblur

Mouse:
onclick, ondblclick, onmouseover, onmouseout, onmouseup, onmousedown, onmousemove

Keyboard:
onkeyup, onkeydown, onkeypress
*/



window.onfocus = ()=>{
    console.log("This window has focus");
};
window.onblur = ()=>{
    console.log("This window lost focus");
};
window.onresize = ()=>{
    console.log("This window has been resized");
};