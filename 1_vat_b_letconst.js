function Myname(love){
    if(love){
        var name = "Rohit";
        var sname = "kumar";
    }
    console.log("my name is " +name+" "+ sname);
}
Myname(true);

//  variable declared with "let & const" JavaScriptn are block Scoped
function Mynames(love){
    if(love){
        var name = "Rohit";
        var sname = "kumar";
         console.log("my name is "+name+" "+sname);
    }
}
Mynames(true);