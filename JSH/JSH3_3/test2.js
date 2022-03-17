
function test(){

    var person1 = {
        toString : function(){
            return "tostring1";
        },
        toLocaleString : function(){
            return "tolocalestring1";
        }
    };
    
    var person2 = {
        toString : function(){
            return "tostring2";
        },
        toLocaleString : function(){
            return "tolacalestring2"
        }
    };

    var people=[person1,person2]
    alert(people);
    alert(people.toString());
    alert(people.toLocaleString());
}

window.onload=test;

