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


//chapter 26-30

//question no.01
var integer = prompt("Enter positive integer");
document.write("<br><br>Number : ", integer);
document.write("<br><br>Round off Value : ", Math.round(integer));
document.write("<br><br>Floor Value : ", Math.floor(integer));
document.write("<br><br>Ceil Value : ", Math.floor(integer) + 1);


//question no.02
var negative_integer = prompt("Enter positive negative_integer");
document.write("<br><br>Number : ", negative_integer);
document.write("<br><br>Round off Value : ", Math.round(negative_integer));
document.write("<br><br>Floor Value : ", Math.floor(negative_integer));
document.write("<br><br>Ceil Value : ", Math.floor(negative_integer) + 1);

//question no.03
var absolute_value = prompt("Enter absolute number");
document.write("<br><br>The absolute value of ", absolute_value, " is ", Math.abs(absolute_value));


//question no.04
document.write("<br><br>Random Dice Value : ", Math.floor(Math.random() * 6) + 1);


//question no.05
let coin_toss = Math.floor(Math.random() * 2 + 1);
if (coin_toss == 2) { document.write("<br><br>2<br>RAndom coin value : Heads") }
else { document.write("<br><br>1<br>Random coin value : Tails"); }

//question no.06
document.write("<br><br>Random number between 1 and 100 is ", Math.floor(Math.random() * 100 + 1));

//question no.07
var weight = prompt("Enter weight:");
let w = weight.match(/[0-9 .]*/);
document.write('THe weight of user is ', w[0], ' kilograms');


//question no.08
var secret = prompt('Enter secret Number ?');
var random = Math.random() * 10 + 1;

if (secret == random) {
    alert("Congratulations! Matched");
}
else {
    alert("Try Again!");
}

//chapter 31-34

//question no.01
document.write(new Date());


//question no.02
let months = ['January', 'Feruary', 'March',
    'April', "May", 'June', 'July', "August", 'September',
    'October', 'November', 'December'];

document.write("<br><br></br>Current Month : ", months[new Date().getMonth()])

//question no.03
let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
document.write("<br><br></br>Today is ", days[new Date().getDay()]);


//question no.04
if (new Date().getDay() == 5 || new Date().getDay() == 6) {
    document.write("<br><br></br>It's Fun day");
}


//question no.05
if (new Date().getDate() < 16) {
    document.write("<br><br></br>First fifteen days of the month");
}
else {
    document.write("<br><br></br>Last days of the month.");
}

//question no.06
document.write("<br><br></br>Current Date", new Date());
document.write("<br><br></br>Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
document.write("<br><br></br>Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));


//question no.07
if (new Date().getHours < 13) {
    document.write("<br><br></br>It's AM");
}
else {
    document.write("<br><br></br>It's PM");
}

//question no.08
document.write("<br><br></br>Later Date : ", new Date(2020, 4, 30));



//question no.09
let ramadan = new Date(2020, 3, 25).getTime();
let today1 = new Date().getTime();

document.write("<br>", Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");


//question no.10
let diff = new Date("Dec 5, 2015").getTime();
let today = new Date().getTime();
let result = (diff - today);
document.write("<br><br>", result, " seconds has passed since beginning of 2015");

//question no.11
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getHours() - 1);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//question no.12
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getFullYear() - 100);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//question no.13
var age = prompt("Enter your age");
document.write("<br><br></br>Your age is ", age);
document.write("<br><br></br>Your birth Year is  :", new Date().getFullYear() - +age);


//question no.14
document.write("<br><br></br><h1>K-Electric Bill</h1>");
document.write("<br><br></br>Customer Name : <strong>ABC Customer</strong>");
document.write("<br><br></br>Month :  <strong>", months[new Date().getMonth()], "</strong>");
document.write("<br><br></br>Number of units :  <strong>410</strong>");
document.write("<br><br></br>Charges per unit :  <strong>16</strong>");

document.write("<br><br></br>Net Amount Payable (within Due Date) :  <strong>6560</strong>");
document.write("<br><br></br>Late payment surcharge :  <strong>350</strong>");
document.write("<br><br></br>Gross Amount Payable (after Due Date) :  <strong>6910</strong>")
