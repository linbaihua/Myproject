
window.onload=function(){
    var testdiv=document.getElementById("testdiv");
    alert(testdiv.innerHTML);
    testdiv.innerHTML="<p>this is <em>my</em> content</p>"
}

function insertParagraph(text){
    var str="<p>";
    str += text;
    str +="</p>";
    document.write(str);
}