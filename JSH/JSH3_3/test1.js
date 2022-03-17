
function test(){
    var message = "hello world";
    alert(typeof message);

    var messageChange=Boolean(message);
    alert(messageChange);

    var i=7;
    switch(i){
        case 2:
            alert("i=2");
            break;
        case 3:
            alert("i=4");
            break;
        case 5:
            alert("i=5");
            break;
        default:
            alert("not found");
    }

    var j=25;
    switch(true){
        case j<0:
            alert("j<0");
            break;
        case j>0 && j<10:
            alert("0<j<10");
            break;
        case j>10 && j<20:
            alert("10<j<20");
            break;
        case j>20 && j<30:
            alert("j>25");
            break;
        default:
            alert("j>30");
    }
}

window.onload = test;