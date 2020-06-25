//Assignment07

//chapter 21-25

// //question no.1

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// alert(fullName + " welcome to this webpage");

// //Quetion No.02
// var mobile = prompt("Enter your favourate mobile model");
// document.write("My favourate mobile phone is: "+mobile+"<br>Lent of string: "+mobile.length);



// //Quetion No.03
// var name =  'pakistan';
// for(var i=0; i<name.length; i++){
//     if(name.slice(i)==='n'){
//         document.write(i+1)
//     }
// }

//Quetion No.04
var name =  "Hello worldhadslahah";
var index;
for(var i=0; i<name.length; i++){
    if(name.slice(i,i+1)==="l"){
        index=i;
    }
}
document.write(index)


//Quetion No.05
var string = "Pakistan";
document.write("String : ", string, "<br>Character at index 3 : ", string[3]);

//Quetion No.06
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName.concat(lastName);


//Quetion No.07
var city = "Hyderabad";
document.write("<br><br>After REplacement", city.replace("Hyder", "Islam"));

//Quetion No.08
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br><br>Message : ", message.split("and").join("&"));


//Quetion No.09
var number = "472";
document.write("<br><br>Value : ", number, "<br>Type : ", typeof (number));
document.write("<br><br>Value : ", +number, "<br>Type : ", typeof (+number));

//Quetion No.10
var user_input = prompt("Enter fruit anme");
document.write("<br><br>User INput : ", user_input);
document.write("<br><br>User Case : ", user_input.toUpperCase());


//Quetion No.11
var user_input = prompt("Enter name");
document.write("<br><br>User INput : ", user_input);
document.write("<br><br>User Case : ", user_input[0].toUpperCase(), user_input.slice(1, user_input.length));

//Quetion No.12
var number = 35.36;
document.write("<br><br>Number : ", number);
document.write("<br><br>Result : ", number.toString().replace(".", ""));

//Quetion No.13
var user_name = prompt("Enter username");
for (var i = 0; i < user_name.length; i++) {
    if (user_name[i].charCodeAt() == 33 ||
        user_name[i].charCodeAt() == 44 ||
        user_name[i].charCodeAt() == 46 ||
        user_name[i].charCodeAt() == 64) {
        alert("Please enter a valid name");
        break;
    }
}


//Quetion No.14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakery = prompt("Welcome to ABC Bakery. What do you wnat to order ?");
for (i = 0; i < A.length; i++) {
    if (bakery.toLowerCase() === A[i].toLowerCase()) {
        document.write(A[i], " is available at index ", i, " in our bakery.")
    }
    else {
        document.write("<br><br>We are sorry. ", bakery, " is not available in not bakery.")
    }
}


//Quetion No.15
var password = prompt("Enter password");
if (password.match(/^[A-Za-z][a-zA-Z0-9]{5}$/)) {
    alert("Password can't begin with a number");
    alert("Please enter a valid password");
}

//Quetion No.16
var university = "University of Karachi";
document.write(university.split(""));

//Quetion No.17
var user_input1 = prompt("Enter your country name: ");
document.write(document.write("<br><br><br>", user_input1[user_input1.length - 1]));

//Quetion No.18
var string2 = "The quick brown fox jumps over the lazy dog";
document.write("<br><br>There are ", string2.match(/the/gi).length, " of the world 'the'");