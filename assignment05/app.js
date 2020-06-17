/*

//chapter01

//Question no.1
alert("Welcome To My Website");


//Question no.2
alert("Error! Please enter a valid password");

//Question no.3
alert("welcome to JS\nHappy Coding");

//Question no.4
alert("welcome to JS");
alert("Happy Coding\n\n Prevent this page from additional dialog");


//Question no.5
alert("Hello.. I can run JS from browser console")

//Question no.6
alert("this is a alart for my html page");

*/


/* 
//chapter02

// Question no.01
var username;

// Question no.02
var myname ="muhammad arsalan";

// Question no.03
var messege="Hello world";
alert(messege);


// Question no.04
var name="muhammad arsalan";
var age="21";
var qualification="certified application developer";
alert(name);
alert(age);
alert(qualification);


// Question no.05
var pizza="PIZZA\nPIZZ\nPIZ\n\PI\nP";
alert(pizza);

// Question no.06
var email="arsalanbaba414@yahoo.com";
alert("my email address is "+ email);

// Question no.07
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book)

//Question no.08
document.write("Yeah! I can write HTML content through JavaScript");

//Question no.09
var style="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(style);

*/

/*
//chapter03

//Question no.01
var age="21";
alert("I am "+age+" years old");


//Question no.02
var no=8;
alert("You have visited this site "+no +" times");

//Question no.03
var birthYear=1998;
document.write("my birthyear is "+birthYear+"\nData type of my declaired variable is number");

//Question no.04
var visName=prompt("please enter name","enter your name here");
var proTitle=prompt("please enter product title","enter your product title here");
var proQuantity=prompt("please enter quantity of product you want to buy","enter quantity here");

document.write(visName+" ordered "+proQuantity+" "+proTitle+" from the xyz store");

*/

/*
//chapter03

//Question no.01
var variable01,variable02,variable03;


//Question no.02
//legal variables
var name,age,gender,profession,qualification;

//illegal variable
var -a;
var 1apple;
var Bad boy;
var  +enjoy;
var const;


//Question no.03
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers,alphabets,$ and _. For example:$my_variable01</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS Keywords</p>");

*/

/*
//chapter05

//Question no.01
var num1=15;
var num2=10;
var num3=num1+num2;
document.write(num3);

//Question no.02
var num1=15;
var num2=10;
var num3=num1-num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1*num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1/num2;
document.write(num3);

var num1=15;
var num2=10;
var num3=num1%num2;
document.write(num3);


//Question no.03
var value;
document.write("<p>Value after variable declaration is: "+value);
value=5;
document.write("<p>Initial value: "+value);
value++;
document.write("<p>Value after increament is: "+value);
value+=7;
document.write("<p>value after addition is: "+value);
value--;
document.write("<p>Value after decreament is: "+value);
value%=3;
document.write("<p>The reminder is: "+value);

//Question no.04
var price=600;
var no_Of_Tickets=5;
var totalPrice=price * no_Of_Tickets;
document.write("Total cost to buy "+no_Of_Tickets+" tickets to a movie is "+totalPrice);

//Question no.05
var table=4;
for(i=1;i<11;i++){
    document.write("<p>4 X "+i+" = "+table*i);
}


//Question no.06
var temp=45;
var tempInF=(temp*(9/5))+32;
document.write("<p>"+temp+"oC is "+tempInF+"oF");
var ferenheit=98;
var celsius=(ferenheit-32)*5/9;
document.write("<p>"+ferenheit+"oF is "+celsius+"oC");


//Question no.07
var item1price=650;
var item1Quantity=3;
var item1Total=item1price*item1Quantity;
var item2price=100;
var item2Quantity=7;
var item2Total=item2price*item2Quantity;
var shipingCost=100;
var totalCost=item1Total+item2Total+shipingCost;
document.write("<p>Price of item 1 is "+item1price+"<p>Price of item 2 is "+item2price+
"<p>Ordered quantity of item 1 is "+item1Quantity+"<p>Ordered Quantity of item 2 is"+item2Quantity+
"<p>Shipping charges are "+shipingCost+"<p>Total cost of your order is "+totalCost);




//Question no.08
var tMarks=980;
var oMarks=804;
var percentage=(oMarks/tMarks)*100;
document.write("<p>Total marks: "+tMarks+"<p>Obtained marks: "+oMarks+"<p>Percentage: "+percentage+"%");


//Question no.09
var usDollar=10;
var saudiRiyal=25;
var usToPkr=usDollar*104.80;
var saudiToPkr=saudiRiyal*28;
var total=usToPkr+saudiToPkr;
document.write("<h1>Currency in PKR</h1>");
document.write("<p>Total currency in PKR: "+total);


//Question no.10
var num=10;
var arithematic=num+5*10/2;

document.write("<p>Arithmetic operation perfomed gives: "+arithematic);


//Question no.11
var currentYear=2020;
var birthYear=1998;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("<p>Your age is: "+age);


//Question no.12
var r=20;
var circumference=2*3.142*r;
var areaOfCircle=3.142*r*r;
document.write("<h1>The Geometrizer</h1>");
document.write("<p>Radius of circle: "+r);
document.write("<p>The circumference is: "+circumference);
document.write("<p>The area is: "+areaOfCircle);




//Question no.13
var snack="Chocolato";
var currentAge=21;
var maxAge=60;
var amount=2;
var totalSnacks=(maxAge-currentAge)*12*amount;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p>favourate Snacks: "+snack);
document.write("<p>Current Age: "+currentAge);
document.write("<p>Estimated Maximum Age: "+maxAge);
document.write("<p>Amount of snacks per day: "+amount);
document.write("<p>You will need "+totalSnacks+" "+snack+" to last you until the ripe old age of "+maxAge);

*/



/*

//chapter 06-09

//Question no.01
var a=10;
document.write("<p>Result: ");
document.write("<p>The value of a is: "+ a);

document.write("<p>The value of ++a is: "+ ++a);
document.write("<p>Now the value of a is: "+a);
document.write("<p>The value of a++ is: "+ a++);
document.write("<p>Now the value of a is: "+a);

document.write("<p>The value of --a is: "+ --a);
document.write("<p>Now the value of a is: "+a);

document.write("<p>The value of a-- is: "+ a--);
document.write("<p>Now the value of a is: "+a); 



//Question no.02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
            // 1 - 0  +  1 +   1; and result will be 3
document.write("<p>a is "+a);
document.write("<p>b is "+b);
document.write("<p>the result is: "+result);

//Question no.03
var name=prompt("please enter your name","input your name here");
alert("welcome to our site "+name)


//Question no.04
var numb=+prompt("please input a number","input a number ");
if (numb===numb){
for(i=1;i<11;i++){
    document.write("<p>"+numb+" X "+i+" = "+numb*i);
}
}
else{
    var table=5;
for(i=1;i<11;i++){
    document.write("<p>5 X "+i+" = "+table*i);
}
}

//Question no.05
var var1=prompt("please enter the subject name","enter subject name");
var var2=prompt("please enter the subject name","enter subject name");
var var3=prompt("please enter the subject name","enter subject name");
var totalMarks=100;
var subject1=+prompt("please enter the obtained marks of first subject","please enter number here");
var percent1=subject1*100/totalMarks;
var subject2=+prompt("please enter the obtained marks of second subject","please enter number here");
var percent2=subject2*100/totalMarks;
var subject3=+prompt("please enter the obtained marks of third subject","please enter number here");
var percent3=subject3*100/totalMarks;
var oMarks=subject1+subject2+subject3;
var percent=oMarks*100/totalMarks;
document.write("<table>");
document.write("<tr>");
document.write("<th>Subjects</th><th>Total marks</th><th>Obtained marks</th><th>Percentage</th>")
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var1+"<td>"+totalMarks+"<td>"+subject1+"<td>"+percent1);
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var2+"<td>"+totalMarks+"<td>"+subject2+"<td>"+percent2);
document.write("</tr>");
document.write("<tr>");
document.write("<th>"+var3+"<td>"+totalMarks+"<td>"+subject3+"<td>"+percent3);
document.write("</tr>");
document.write("</table>");

*/


/*

//chapter 9-11

//Question no.01
var cityNmae=prompt("enter the name of city","enter the city name");
if (cityNmae==="karachi"){
    document.write("<h1>Welcome to city of lights");
}
else{
    document.write("<h1>Sorry you are not welcome here")
}

//Question no.02
var gender=prompt("what's your gender","enter your gender");
if (gender==="male"){
    document.write("<h1>Good Morning Sir.");
}
else if(gender==="female"){
    document.write("<h1>Good Gorning Ma'am.")
}
else{
    document.write("<h1>please write gender in alphabetically");
}
//Question no.03
document.write("<table style='color:blue; font-weight:bold'>");
document.write("<tr>");
document.write("<th>Signal color</th><th #8bdffb>Messege</th>");
document.write("</tr>");
var signalColor=prompt("write a traffic signal color","enter color");
if (signalColor==="red"){
    document.write("<tr style='background-color:#8bdffb'>");
    document.write("<td>"+signalColor);
    document.write("<td> must stop</td>");
    document.write("</tr>");
}
else if (signalColor==="yellow"){
    document.write("<tr>");
    document.write("<td>"+signalColor);
    document.write("<td> ready to move</td>");
    document.write("</tr>");
}
else if (signalColor==="green"){
    document.write("<tr>");
    document.write("<td>"+signalColor);
    document.write("<td> move now</td>");
    document.write("</tr>");
}
else{
    alert("please enter correct color");
}
document.write("</table>")



//Question no.04
var fuel=+prompt("please enter fuel in litres","enter fuel");
if (fuel<0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("you have a fuel");
}


//Question no.05
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true"); 
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){ 
    alert("condition 1 is true"); 
}
if (c === 13){ 
    alert("condition 2 is true"); 
}
if (++c < 14){ 
    alert("condition 3 is true"); 
}
if(c === 14){ 
    alert("condition 4 is true"); 
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");
}
if (true){ 
    alert("True"); 
}
if (false){ 
    alert("False"); 
}
if("car" < "cat"){
    alert("car is smaller than cat"); 
}



//Question no.06
var sub1=+prompt("please enter obtained marks in english","write obtained marks out of 100");
var sub2=+prompt("please enter obtained marks in urdu","write obtained marks out of 100");
var sub3=+prompt("please enter obtained marks in programming","write obtained marks out of 100");
var obtainedMarks=sub1+sub2+sub3;
var totalMarks=300;
var percentage=obtainedMarks*100/totalMarks;
var grade,remarks;
if (percentage>=80 && percentage<=100){
    grade="A-one";
    remarks="excellent"
}
else if (percentage>=70 && percentage<=79){
    grade="B";
    remarks="You need to improve";
}
else if (percentage>=60 && percentage<=69){
    grade="A";
    remarks="Good";
}
else if (percentage<=60){
    grade="Fail";
    remarks="Sorry";
}
else{
    alert("please enter correct number otherwise it will effect the result")
}
document.write("<h1>Marks Sheet");
document.write("Total marks: "+totalMarks);
document.write("<br>Marks obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percentage+"%");
document.write("<br>Grade: "+grade);
document.write("<br>Remarks:"+ remarks);

//Question no.07
var secretNumber=6;
var guess=+prompt("please guess the secret number 1-10","enter number range 1-10");
if (secretNumber===guess){
    document.write("Bingo! correct answer");
}
else{
    document.write("Close enough to the correct answer");
}

//Question no.08
var number=+prompt("please enter number");
if (number%3==0){
    document.write("yes number is divisible by three");
}
else{
    document.write("sorry number is not divisible by 3");
}

//Question no.09
var number=+prompt("please enter number");
if (number%2==0){
    document.write("number is even");
}
else{
    document.write("number is odd");
}

//Question no.10
var temp=+prompt("please eneter temperature","eneter temperature in celcius");
if (temp>40){
        document.write("Its  too hot outside");
    }
    else if (temp>30){
       document.write("The Wheather today is Normal")
    }
    else if (temp>20){
        document.write("Today's Weather is cool")
    }
    else if (temp>10){
       document.write("OMG! Today's weather is so Cool")
    }
    else{
        alert("please enter correct number otherwise it will effect the result")
    }

//Question no.11
var numb1=+prompt("please enter number");
var numb2=+prompt("please enter number");
var operation=prompt("please eneter operation");
if(operation=="+"){
    document.write(numb1+numb2);
}
else if(operation=="-"){
    document.write(numb1-numb2);
}
else if(operation=="/"){
    document.write(numb1/numb2);
}
else if(operation=="%"){
    document.write(numb1%numb2);
}
else{
    document.write("please correct the inputs");    
}

*/

/*

//chapter 10-12

//Question no.01


//Question no.02
var a=+prompt("please input a number A");
var b=+prompt("please input a number B");
var larger=a;
if(a<b){
    larger=b;
}
else if(a==b){
    larger=larger;
}
document.write("the larger number is: "+larger);


//Question no.03
var number1=+prompt("please eneter a number");
if (number1>0){
    document.write("number is positive");
}
else if(number1<0){
    document.write("number is negative");
}
else if(number10){
    document.write("number is zero");
}
else{
    document.write("please enter number correctly");

}

//Question no.04
var password="password";
var typePassword=prompt("please enter your password");
if (typePassword==null){
    alert("Please enter your password");
}
else if (typePassword==="password"){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
}
//Question no.06
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening"; 
}
*/
