// Ch 1
//Q1
// alert("Welcome!");
// //Q2
// alert("Error! please enter a valid password ");
// //Q3
// alert("welcome to js land \n Happy Coding..");
// Q5
// alert("Welcome to JS land ");
// alert("prevent this page from creating additional dialog ");
//Q6
// alert("Hello World");
//Q7 in html

// Ch2

// 1.	var Username;

// 2.	var Myname="Muhammad Usman Hussain";

// 3.	var message="Hello World";
// alert(message);


// 4.	var name="USMAN";
//    var age="21 year old";
//    var study="undergraduate";
//    alert(name);
//    alert(age);
//    alert(study);


// 5.	var pizza="          PIZZA\n          PIZZ\n          PIZ\n          PI\n          P";
//  	alert(pizza);
// 6.	var email="Usman23499@gmail.com";
// alert("My Email Address is "+email);
// 7.	var book="A Smarter way to learn java script";
// alert("I am trying to learn from book  "+book);
// 8.	document.write("yeh..I can write HTML content Throw java script");
// 9.	alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// CH3
// 1.	var age=15;
// alert("i am "+age+" year old");

// 2.	alert("You visitd website 15 times");

// 3.	var Birthdate=1999;
// document.write("My Birthdate is "+Birthdate);

// 4.	var visitorname="Usman";
// var producttittle="T-shirts";
// var quantity=5;
// document.write(visitorname+" orderd "+quantity+" "+producttittle+" on XYZ clothing store");

// CH 4
// 1.	var firstname="Muhammad";
// var middlename="Usman";
// var lastname="Hussian";
// console.log(firstname+" "+middlename+" "+lastname);

// 2.	var firtsname,lastname,middl_ename,quantity,name; //legal vaiable name
// var if,for,else,do,#_middle; //illegal varibale name
// 3.	document.write("Rule for nameing js variable<br>");
// document.write("A variable name can contain only letters, numbers, dollar signs, and underscores");
// document.write("<br>Variable must begain with a letter,number,dollar and signs");
// document.write("<br>varlable name are case sensetive");

// document.write("<br>Variable should not be js keyword");

// CH 5
// 1. 
// var num1=prompt("value1 =");
//  var num2=prompt("Value2= ");
//  document.write("The sum of "+num1+" and "+num2+" is "+((+num1)+(+num2)));

// 2.
// var num1=prompt("value1 =");
//  var num2=prompt("Value2= ");
//  document.write("The sub of "+num1+" and "+num2+" is "+((+num1)-(+num2)));
//  document.write("<br>The mul of "+num1+" and "+num2+" is "+((+num1)*(+num2)));
//  document.write("<br>The div of "+num1+" and "+num2+" is "+((+num1)/(+num2)));
//  document.write("<br>The mod of "+num1+" and "+num2+" is "+((+num1)%(+num2)));

// 3.
// var num;
// document.write("<br>The Value After Decleration is "+num);
// num=5;
// document.write("<br>Initial value is is "+num);
// document.write("<br>The Value After Increment is "+((+num)+1));
// num=num+1;
// document.write("<br>The Value After Addition is  "+((+num)+7));
// num=num+7;
// document.write("<br>The Value After Decrement is  "+((+num)-1));
// num=num-1;
// document.write("<br>The Reminder is  "+((+num)%3));

// 4.
// var cost=600;
// var ticket=5;
// document.write("The cost to buy "+ticket+"is "+cost*ticket+" PKR")

// 5.
// var num=prompt("Enter Any Number ");
// for(var i=1;i<=10;i++)
// {
//     document.write("<br> "+num+" x "+i+" = "+num*i);
// }

// 6.
// var C=prompt("Enter a Celcus Temprature");
// var farenheight=(C*(9/5))+32;
// document.write(C+" C is "+farenheight+" F");
// var F=prompt("Enter a Fahrenheight Temprature");
// var Caelcus=(F-31)*(5/9);
// document.write("<br>"+F+" F is "+Caelcus+" C");

// 7.

// document.write("<h1>SHOPPING CART</h1>");
// document.write("price of item1 is 650");
// var item1=650;
// var quantity=prompt("Quantity of item1");
//  document.write("<br>Quantity of item1 is "+quantity);
//  item1=item1*quantity;
//  document.write("<br>price of item2 is 100");
//  var item2=100;
//  var quantity2=prompt("Quantity of item2");
 
//  document.write("<br>Quantity of item2 is "+quantity2);
// item2=item2*quantity2;
//  document.write("<br>Shipping Charges is 100");

//  document.write("<br>Total Cost : "+((+item1)+(+item2)+(100)))



// 8.
// document.write("<h1>MARKS SHEET</h1>");
// var totalmarks=prompt("Total Marks");
// document.write("<br>Total Marks "+totalmarks);
// var marksobtain=prompt("Obtain Marks");
// document.write("<br>Obtain Marks "+marksobtain);
// document.write("<br>Percentage = "+((marksobtain*100)/(totalmarks))+"%");

// 9.
// document.write("<h1>Currency in PKR </h1>");
// var US=104.80*10;
// var saudi=(+25)+(+28);
// saudi=(+US)+(+saudi);
// document.write("Total Pakistani Currency is "+saudi+" PKR");

// 10.
// var num=prompt("Enter a Number");
// num=(+num)+5;
// num=num*10;
// num=num/2;
// document.write("<h1>The Result is "+num+"</h1>");


// 11.
// document.write("<h1>AGE CALCULATOR</h1>");
// var current=prompt("Current Year ");
// document.write("<br> Current year "+current);
// var Birth=prompt("Birth Year ");
// document.write("<br> Birth year "+Birth);
// document.write("<br>Your age is "+(current-Birth));

// 12.
// document.write("<h1>The Geometrization</h1>");
// var num=prompt("Enter a radius");
// document.write("<br>Radius is "+num);
// document.write("<br>The circumfaracne is "+(2*num*3.14));
// document.write("<br>The area is "+(num*num*3.14));

// 13.
// document.write("<h1>The LifeTime Supply Calculator</h1>");
// var fav=prompt("Enter a Fav Cokie");
// document.write("<br>Cokie is "+fav);
// var current=prompt("Current Year ");
// document.write("<br> Current year "+current);
// var Estamate=prompt("Estamate  Year ");
// document.write("<br> Estamate year "+Estamate);
// var cokie=prompt("No of cokie per day ");
// document.write("<br> No of cokie per day "+cokie);
// Estamate=Estamate-current;
// Estamate=Estamate*365;
// Estamate=Estamate*cokie;
// document.write("<br>The no of cokie requied is "+Estamate);

// CH : 6-9
// 1
// var num=10;
// document.write("The value is "+num);
// document.write("<br>The value ++a "+(++num));
// document.write("<br>The now value is "+num);
// document.write("<br>The value a++ "+(num++));
// document.write("<br>The now value is "+num);
// document.write("<br>The value --a "+(--num));
// document.write("<br>The now value is "+num);
// document.write("<br>The value a-- "+(num--));
// document.write("<br>The now value is "+num);

// 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br> Value a is "+a);
// document.write("<br> Value b is "+b);
// document.write("<br> Result  is "+result);

// 3
// var name=prompt("Enetr Your Name");
// document.write("<h1>Welcome "+name+"</h1>");

// 4
// var num=prompt("Enter Any Number ");
// for(var i=1;i<=10;i++)
// {
//     document.write("<br> "+num+" x "+i+" = "+num*i);
// }

// 5
// var name=prompt("Subject 1");
// var name1=prompt("Subject 2");
// var name2=prompt("Subject 3");
// var marks=prompt("Marks 1");
// var marks1=prompt("Marks 2");
// var marks2=prompt("Marks 3");
// document.write("<b>Subject TMarks OMarks Percentage</b>");
// document.write("<br>"+name+" 100   "+marks+" "+marks+"%");
// document.write("<br>"+name1+" 100   "+marks1+" "+marks1+"%");
// document.write("<br>"+name2+" 100   "+marks2+" "+marks2+"%");
// var tm=((+marks)+(+marks1)+(+marks2));
// document.write("<br>           300   "+tm+" "+(tm*100)/300+"%");

// CH : 9-11
// 1
// var name=prompt("City Name");
// if (name=="Karachi"){
//     document.write("<h1>The City of light</h1>");
// }
// else if(name==="Lahore"){
//     document.write("<h1>The Heart of Pakistan</h1>");
// }

// 2

// var name=prompt("Enter Gender");
// if (name=="male"){
//     document.write("<h1>Good Morning Sir</h1>");
// }
// else if(name==="female"){
//     document.write("<h1>Good Morning Madam</h1>");
// }

// 3
// var name=prompt("Enter Light");
// if (name=="Red"){
//     document.write("<h1>Must Stop</h1>");
// }
// else if(name==="Yellow"){
//     document.write("<h1>Ready to move</h1>");
// }
// else if(name==="green"){
//     document.write("<h1>Move now</h1>");
// }
// 4

// var name=prompt("Enter Fule");
// if (name<0.25){
//     document.write("<h1>Please Fill the Fule</h1>");
// }

// 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// True

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// False

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }  //true
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }//true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//true
//  if (true){
// alert("True");
// }//true
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     } //true


// 6
// document.write("<h1>MARKS SHEET</h1>");
// var totalmarks=prompt("Total Marks");
// document.write("<br>Total Marks "+totalmarks);
// var marksobtain=prompt("Obtain Marks");
// document.write("<br>Obtain Marks "+marksobtain);
// var per=((marksobtain*100)/(totalmarks));
// document.write("<br>Percentage = "+per+"%");

// if(per>=80){
//     document.write("<br>Grade= A-one ");
//     document.write("<br>Remarks : Excelent");
// }
// else if (per>=70  && pre < 80){
//     document.write("<br>Grade= A ");
//     document.write("<br>Remarks : Good");
// }
// else if(per>=60 && per<70){
//     document.write("<br>Grade= B ");
//     document.write("<br>Remarks : Need to improve");
// }
// else if(per<60 ){
//     document.write("<br>Grade= Fail ");
//     document.write("<br>Remarks : Sorry");
// }


// 7
// var name=prompt("Any number");
// if (name=="8"){
//     document.write("<h1>You Won</h1>");
// }
// else if(name=="9"){
//     document.write("<h1>You are very close</h1>");
// }
// else{
//     document.write("<h1>You Lose</h1>");
// }


// 8

// var name=prompt("Any number");
// if ((name%3)===0){
//     document.write("<h1>Divided by 3</h1>");
// }
// else{
//     document.write("<h1>Not divid by 3</h1>");
// }





// 9
// var name=prompt("Any number");
// if ((name%2)===0){
//     document.write("<h1>Even Number</h1>");
// }
// else{
//     document.write("<h1>Odd number</h1>");
// }


// 10

// var per=prompt("Enter Temprature");
// if(per>40){
//     document.write("<br>Too Hot Outside");
// }
// else if (per>30  && pre <=40){
//     document.write("<br>Today Weather is normal");
// }
// else if(per>20 && per<=30){
//     document.write("<br>Today Weather is Cool");
// }
// else if(per<=20 ){
//     document.write("<br>Today Weather  so is Cool ");
  
// }


// 11
// var num1=prompt("value1 =");
//  var num2=prompt("Value2= ");
//  document.write("The sum of "+num1+" and "+num2+" is "+((+num1)+(+num2)));
//  document.write("<br>The sub of "+num1+" and "+num2+" is "+((+num1)-(+num2)));
//  document.write("<br>The mul of "+num1+" and "+num2+" is "+((+num1)*(+num2)));
//  document.write("<br>The div of "+num1+" and "+num2+" is "+((+num1)/(+num2)));
//  document.write("<br>The mod of "+num1+" and "+num2+" is "+((+num1)%(+num2)));


// CH : 12-13
// 1
// var per=prompt("Enter Any Alphabet");
// if(per.charCodeAt(0)>=65 && per.charCodeAt(0)<=90){
//     document.write("<br>Upper Case");
// }
// else if (per.charCodeAt(0)>=97  && per.charCodeAt(0)<=122){
//     document.write("<br>Lower Case");
// }


// 2

// var num1=prompt("value1 =");
//  var num2=prompt("Value2= ");
//  var Bigger=num1-num2;
//  if (Bigger>0){
//  document.write(num1+" IS BIG NUMBER");
//  }
//  else if(Bigger<0){
//     document.write(num2+" IS BIG NUMBER");
//  }
//  else{
//     document.write("BOTH ARE EQUAL");
//  }

// 3
// var num1=prompt("value1 =");
//  var Bigger=num1;
//  if (Bigger>0){
//  document.write(num1+" IS POSITIVE");
//  }
//  else if(Bigger<0){
//     document.write(num1+" IS NEGATIVE");
//  }
//  else{
//     document.write("ZERO");
//  }

// 4
// var num1=prompt("Enter an Apphabet =");
//  var Bigger=num1;
//  if (Bigger==="a" || Bigger==="e" || Bigger==="i" || Bigger==="o" || Bigger==="u"){
//  document.write(num1+" Is Vowel");
//  }
//  else{
//     document.write("Not Vowel");
//  }


// 5
// var num1="usman123"
//  var num2=prompt("Enter Password= ");
//  var Bigger=num1;
//  if (Bigger===num2){
//  document.write("You Enter a correct Passowrd");
//  }
//  else if(num2===""){
//     document.write("Please Enter A password");    
// }
//  else{
//     document.write("Incorrect!"); 
// }

// 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


// 7
// var per=prompt("Enter Time");
// if(per>0 && per<60){
//     document.write("<br> 1 AM");
// }
// else if (per>=60 && per<120){
//     document.write("<br> 2 AM");
// }
// else if (per>=120 && per<180){
//     document.write("<br> 3 AM");
// }

// else if (per>=180 && per<240){
//     document.write("<br> 4 AM");
// }

// else if (per>=240 && per<300){
//     document.write("<br> 5 AM");
// }

// else if (per>=300 && per<360){
//     document.write("<br> 6 AM");
// }
// else if (per>=360 && per<420){
//     document.write("<br> 7 AM");
// }

// else if (per>=420&& per<480){
//     document.write("<br> 8 AM");
// }

// else if (per>=480 && per<540){
//     document.write("<br> 9 AM");
// }

// else if (per>=540 && per<600){
//     document.write("<br> 10 AM");
// }

// else if (per>=600 && per<660){
//     document.write("<br> 11 AM");
// }

// else if (per>=660 && per<720){
//     document.write("<br> 12 AM");
// }

// else if (per>=720 && per<780){
//     document.write("<br> 1 PM");
// }

// else if (per>=780 && per<840){
//     document.write("<br> 2 PM");
// }

// else if (per>=840 && per<900){
//     document.write("<br> 3 PM");
// }

// else if (per>=900 && per<960){
//     document.write("<br> 4 PM");
// }

// else if (per>=960 && per<1020){
//     document.write("<br> 5 PM");
// }

// else if (per>=1020 && per<1080){
//     document.write("<br> 6 PM");
// }

// else if (per>=1080 && per<1140){
//     document.write("<br> 7 PM");
// }

// else if (per>=1140 && per<1200){
//     document.write("<br> 8 PM");
// }

// else if (per>=1200 && per<1260){
//     document.write("<br> 9 PM");
// }

// else if (per>=1260 && per<1320){
//     document.write("<br> 10 PM");
// }

// else if (per>=1320 && per<1380){
//     document.write("<br> 12 PM");
// }

// else if (per>=1380 && per<1440){
//     document.write("<br> 12 PM");
// }

// CH : 14-16

// 1
// var Studentname=[];

// 2
// var Studentname=Array();

// 3
// var Studentname=["Usman","Hamza","Ali"];

// 4
// var StudentNumber=[12,34,454,55];
// 5
//  var BooleanArray=[True,false];
// 6
//  var MixArray=["Usman","Hamza","Ali",12,4,5,5];

 
// 7
// var StudentQulification=["SSC","HSC","BSC","BS","BCOM","MS","M.phil","PHD"];
// document.write("<h1>Qulaification</h1>");
// for(var i=0;i<StudentQulification.length;i++){
//     document.write("<br> "+StudentQulification[i]);
// }

// 8
//  var Studentname=["Bilal","Hamza","Ali"];
// var Studentmarks=[430,450,420];
// document.write("<br> "+Studentname[0]+" Marks is  "+(Studentmarks[0]*100/500)+"%");
// document.write("<br> "+Studentname[1]+" Marks is  "+(Studentmarks[1]*100/500)+"%");
// document.write("<br> "+Studentname[2]+" Marks is  "+(Studentmarks[2]*100/500)+"%");

// 9
// document.write("<h1>Color List</h1>");
// var color=[];
// var name=prompt("Enter A color name add first");
// color.unshift(name);
// document.write("<br>"+color);
// name=prompt("Enter A color name add Last");
// color.push(name);
// document.write("<br>"+color);
// color.unshift("Red","Orange");
// document.write("<br>"+color);
// color.shift();
// document.write("<br>"+color);
// color.pop();
// document.write("<br>"+color);
// var index=prompt("Enter an index");
// name=prompt("Enter A color name add ");
// color.splice(index,0,name);
// document.write("<br>"+color);
// index=prompt("Enter an index");
// var del=prompt("Enter No of color delete ");
// color.splice(index,del);
// document.write("<br>"+color);

// 10
// var score=[320,220,480,120];
// document.write("<h3>"+score+"</h3>");
// score.sort();
// document.write("<h3>"+score+"</h3>")

// 11

// var cities=["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
// document.write("<h3>"+cities+"</h3>");
// document.write("<h3> SLELCTED CITIES ARE </h3>");
// document.write("<h3>"+cities[1]+"  "+cities[4] +"</h3>");


// 12
// var arr = ["This "," is "," my "," cat"];
// document.write(arr);
// document.write("<br>"+arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]);

// 13
// var arr = ["Keybord","Mouse","Printer","Monitor"];
// document.write(arr);
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());

// 14
// var arr = ["Keybord","Mouse","Printer","Monitor"];
// document.write(arr);
// document.write("<br>OUT:"+arr.pop());
// document.write("<br>OUT:"+arr.pop());
// document.write("<br>OUT:"+arr.pop());
// document.write("<br>OUT:"+arr.pop());

// 15
// var arr = ["Apple","Samsung", "Motorola", "Nokia"," Sony" , "Haier"];
// document.write(arr);
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());
// document.write("<br>OUT:"+arr.shift());



// CH : 17-20

// 1
// var arr=[[0,1,2],[0,1,2,3,4]];

// 2
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (var i=0 ;i<3;i++){

//     for(var j=0;j<4;j++)
//     {
//         document.write(""+arr[i][j]);
//     }
//     document.write("<br>");
// }



// 3
// for(var i=0;i<10;i++){
//     document.write("<br>"+i);
// }

// 4
// var num=prompt("Enter Any Number ");
// var num2=prompt("Enter the length ");
// for(var i=1;i<=num2;i++)
// {
//     document.write("<br> "+num+" x "+i+" = "+num*i);
// }

// 5
// var fruit=["Apple","Banana","Orange","Mango"]
// for(var i=0;i<fruit.length;i++)
// {
//     document.write("<br> The Fruit at index "+i+" is  "+fruit[i]);
// }

// 6
// var fruit=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// document.write("<br>Counting:");
// for(var i=0;i<fruit.length;i++)
// {
//     document.write(""+fruit[i]);
// }




// fruit=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// document.write("<br>Reverse Counting:");
// for(var i=0;i<fruit.length;i++)
// {
//     document.write(""+fruit[i]);
// }


//  fruit=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// document.write("<br>EVEN COUNTING:");
// for(var i=0;i<fruit.length;i++)
// {
//     document.write(""+fruit[i]);
// }


// fruit=[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// document.write("<br>ODD COUNTING:");
// for(var i=0;i<fruit.length;i++)
// {
//     document.write(""+fruit[i]);
// }

// fruit=["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]
// document.write("<br>SERIES:");
// for(var i=0;i<fruit.length;i++)
// {
//     document.write(""+fruit[i]);
// }

// 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var select=prompt("Enter a name");
// for(var i=0;i<A.length;i++)
// {
//     if(select===A[i]){
//     document.write("<br> The name at index "+i+" is  "+A[i]);
// }


// else if(i==A.length-1){
//     document.write("Sorry not avaliable");  
// }
// }


// 8
// A = [24, 53, 78, 91, 12];
// A.sort();
// document.write(A[A.length-1]);

// 9
// A = [24, 53, 78, 91, 12];
// A.sort();
// document.write(A[0]);


// 10
// var num2=5;
// var arr=[];
// for(var i=1;i<=20;i++)
// {
//    arr.push(num2*i);
// }

// document.write(arr);


