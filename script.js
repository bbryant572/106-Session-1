
function sayHello(){
    console.log("Hello, I'm Brett!")

    second();
}

function second(){
    console.log("I'm just a test :(")
}

function helloStranger(text) {
    console.log("Hello " + text);
}

function sum(num1, num2){
    let total = num1 + num2;
    return total;
}

function printNamesInCaps(students){
    console.log("There are " + students.length + " students ");

    for(i=0;i<students.length;i++){
        console.log(students[i].toUpperCase());
    }
}

function sumArray(){
    let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234, 123897];
    let total = 0;

    for(i=0;i<numbers.length;i++){
        let num = numbers[i];
        total = total + num;
        
    }
    console.log("The total is: " + total);

    let count = 0;
    let anotherTotal = 0;
    for(i=0;i<numbers.length;i++){
        let num = numbers[i];
        if(num < 1000){
            //count = count + 1;
            count += 1;
            //count++;

            anotherTotal += num;
        }
    }
    console.log("There are: " + count + " nums < 1000");
    console.log("And the sum is: " + anotherTotal);
}

function exc1(){
    
    for(i=0;i<=20;i++){
        if(i !=7 && i !=11){
            console.log(i);
        }
        
    }

    
}

/**
 * Logical operators
 *  !  = not
 *  && = and
 *  || = or
 */

function init(){
    console.log("Welcome Page!");
    sayHello(); //call/exec the fn

    let name = "homer";
    helloStranger(name);

    let res = sum(21, 21);
    console.log(res);

    let students = [];
    students.push("Brett");
    students.push("Kyle");
    students.push("Ray");
    students.push("Miles");
    students.push("Jasmine");

    
    printNamesInCaps(students);

    sumArray();

    exc1();

}


// be notified when the browser finishes 
// rendering all the html
window.onload = init;