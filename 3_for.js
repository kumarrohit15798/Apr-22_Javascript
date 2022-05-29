function getGrades() {
    var args = Array.prototype.slice.call(arguments, 10, 20);
    return args;
}

console.log(getGrades(90, 100, 75, 40, 89, 95,50,70,60,80,101,102,96,98,88,15,07,99,200,300,350,400,450,150));