// CH 21 - 25

// Q1

// var fname=prompt("Enter first name :");
// var lname=prompt("Enter last name :");
// fname=fname+ " "+ lname;
// document.write(fname);


// Q2

// var fname=prompt("My fav phone is :");
// var len=fname.length;
// document.write("The length of string is : "+len);

// Q3
// var name="Pakistan";
// var ind=name.indexOf('n');
// document.write("index of 'n' is "+ind);

// Q4
// var name="Hello world";
// var ind=name.lastIndexOf('l');
// document.write("Lastindex of 'l' is "+ind);

//Q5
// var name="Pakistani";
// var ind=name.charAt(3);
// document.write("char at  3 is "+ind);

// Q6
// var fname=prompt("Enter first name :");
// var lname=prompt("Enter last name :");
// fname=fname.concat(lname);
// document.write(fname);


// Q7

// var name="Hyderabad";
// document.write(name);
// var ind="Islam"+name.slice(5);
// document.write("<br>char at  3 is "+ind);

//Q8

// var str="Ali and Sami are best friends. They play cricket and football together.";
// for (i=0;i<str.length;i++){
//     if(str.slice(i,i+3) === "and"){
//         str=str.slice(0,i)+"&"+str.slice(i+3);
        
//     }

// }
// document.write(str);


// // Q9
// var a="10"
// var num=Number(a);
// document.write(num);

//Q10
// var name="peanuts";
// var ind=name.toUpperCase();
// document.write(ind);

// Q11
// var lan=prompt("Enter a languange");
// var firstChar=lan.slice(0,1); 
// var otherchar=lan.slice(1);
// lan=firstChar.toUpperCase()+otherchar.toLowerCase() ;
// document.write(lan);


// Q12
// var num = 35.36 ;
// num=num.toString();
// num=num.replace(".","");
// document.write(num);


// // Q 13
// var name =prompt("Enter a username");
// if (name.indexOf("@")!=-1 || name.indexOf(".")!=-1 || name.indexOf("!")!=-1 || name.indexOf(",")!=-1){
//     alert("Invlid User name");
// }

// Q 14

// var name =prompt("Enter a beakeryitem");
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// if (A.indexOf(name) !=-1){
//     alert("Avaliable in stock ");
    
// }
// else{
//        alert("Not Avaliable in stock");
// }



// Q15
// var name =prompt("Enter a username");
// if (name.charCodeAt(0)>=65 && name.length>=6 ){
//     alert("valid Username");
// }
// else{
//     alert("Invalid usernae");
// }


//Q16
// var name="University of Karachi";
// for(var i=0;i<name.length;i++){
//     document.write("<br> "+name[i])
// }

//Q17
// var lan=prompt("Enter a country");
// var len=lan.length;
// document.write(lan[len-1]);

// Q18

// var str="the quick brown fox jumps over the lazy dog";
// var num=0;
// for (i=0;i<str.length;i++){
//     if(str.slice(i,i+3) === "the"){
//         num=num+1;
        
//     }

// }
// document.write(num);




// CH 26 -30

// Q1
// var num= 3.45214 ;
// document.write(Math.round(num)); 
// document.write("<br>"+Math.floor(num))
// document.write("<br>"+Math.ceil(num))


// // Q2
// var num= prompt("Enter a number") ;
// document.write(Math.round(num)); 
// document.write("<br>"+Math.floor(num))
// document.write("<br>"+Math.ceil(num))


// Q3
// var num= -4;
// document.write("The value is "+num+" of "+(num*-1)); 

// Q4
// var mathrandom=Math.random()*6;  
// document.write("The Rnadom value of dice is "+Math.round(mathrandom));

// Q5
// var Toss=Math.random()*2;

// Toss=Math.floor(Toss);
// if(Toss===1){
//     document.write("<h1>HEAD WIN : "+Toss+"</h1>  ");
// }
// else{
//     document.write("<h1>TAIL WIN  : "+Toss+"</h1> ");
// }


// Q6

// var mathrandom=Math.random()*99+1;  
// document.write("The Rnadom value of b/w 1-100 is "+Math.round(mathrandom));

// Q7

// var weight=prompt("Enter your weight ");
// var mathrandom=Math.random()*10 +50;  
// document.write("The Weight of user is "+(mathrandom)+ "Kgs");


// Q8

// var num=prompt("Enter a user number :");
// var Toss=Math.random()*9+1;

// Toss=Math.floor(Toss);

// if(Toss==num){
//    alert("You won");
// }
// else{

//     alert("You Lost "+Toss);
// }



// Ch 30-34
// Q1
// var rightNow = new Date();
// document.write(rightNow);

// // Q2
// var rightNow = new Date();
// var b=rightNow.toString();
// b=b.slice(4,7);
// document.write("Current Month is "+b); 

// // Q3
// var rightNow = new Date();
// var b=rightNow.toString();
// b=b.slice(0,3);
// document.write("Current Day is "+b); 

// Q4

// var rightNow = new Date();
// var b=rightNow.toString();
// b=b.slice(0,3);
// if (b==="Sat" || b==="Sun"){

//     document.write("Its a fun day"); 
    
// }


// Q5

// var rightNow = new Date();
// var b=rightNow.toString();
// b=b.slice(8,10);
// b=Number(b);
// if (b>15 ){

//     document.write("Last Fifteen days of the months"); 
    
// }

// else{
//     document.write("First Fifteen days of the months"); 

// }


// Q6

// var rightNow = new Date();
// document.write(rightNow);

// var dob=new Date ("Jan 01,1970");
// var min=dob.getMinutes();
// var dobmili=dob.getTime();
// document.write("<br> Mili "+dobmili);
// document.write("<br> Minutes "+min);


// Q7
// var rightNow = new Date();
// var b=rightNow.toString();
// b=b.slice(16,18);
// b=Number(b);
// if (b<12 ){

//     document.write("Its PM"); 
    
// }

// else{
//     document.write("Its Am"); 

// }


// Q8

// var rightNow = new Date("Dec 31,2020");
// document.write(rightNow);


// Q9

// var dob=new Date ("Jun 18, 2015");  
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff=todaymili-dobmili;
// var accutareage=Math.floor(diff/(1000*60*60*24));
// document.write("The ramdan past days "+accutareage);


// Q10

// var dob = new Date("Dec 05,2015");
// document.write(dob);
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff=todaymili-dobmili;
// var accutareage=Math.floor(diff/(1000*60));
// document.write("The year past Second "+accutareage);

// Q11
// var dob = new Date();
// document.write(dob);

// var d = new Date();
// d.setHours(d.getHours() + 1);

//  document.write("<br>"+d);


// Q12

// var dob = new Date();
// document.write(dob);

// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);

//  document.write("<br>"+d);



// Q13
// var dob=new Date (prompt("Enter date of bith","Apr 23,1999"));  // 1999 ke jan ke miili second le ga
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff=todaymili-dobmili;
// var accutareage=Math.floor(diff/(1000*60*60*24*30*12));
// document.write(accutareage);


// Q14

// document.write("Coustomer Name : ABC Coustome");
// document.write("<br>Month : Feburary");
// document.write("<br>No of Units : 410");
// document.write("<br>Charges per Unit : 16 ");

// document.write("<br>Net Ammount Pay able withen due date"+(410*16));

// document.write("<br>Late charges 350");
// document.write("<br>Net Ammount Pay able withen due date"+((410*16)+(+350)));


// Ch 35 -38
//Q1

// function    greeting(){
//     var dob = new Date();
//     document.write(dob);
// }

// greeting();


// Q2

// function    greeting(greet1,greet2){
//     alert("Welcome "+greet1+" "+greet2)
// }

// greeting("Usman","Hussain");

// Q3
// function    greeting(a,b){
//     var z=a+b;
//     return z;
// }

// var a=greeting(44,56);
// alert(a);

// Q4
// function    greeting(a,b,c){
//     if(b==='+'){
//         var z=a+c;
//     return z;

//     }
//     if(b==='-'){
//         var z=a-c;
//     return z;

//     }
//     if(b==='/'){
//         var z=a/c;
//     return z;

//     }
//     if(b==='*'){
//         var z=a*c;
//     return z;

//     }
   
    
// }

// var a=greeting(44,"-",56);
// document.write(a)




// //Q5
// function    greeting(a){
//     var z=a*a;
//     return z;
// }

// var a=greeting(44);
// alert(a);





// Q6

// function Squre(a){
//     var z=a*a;
//     return z;
// }
// function hypo(B,P){
//     var h=Squre(B)+Squre(P);
//     return h;
// }

// var a=hypo(1,2);
// alert(a);


//Q9
// function    Area(a,b){
//     var z=a*b;
//     return z;
// }

// var a=Area(44,56);
// document.write(a);
// var b=90,c=56;
// var d=Area(b,c);
// document.write("<br>"+d);



// Q10

//  function    greeting(){
//     var word=prompt("Enter Your Word");
//     var cheak=0;
//     for(var i=word.length-1;i>=0;i--){
    
//         if(word[cheak] !== word[i]){
//         document.write("The Word is Not Paloindrome");
//             break;
//         }
//         cheak++;
    
//         if (i===0){
//             document.write("The Word is Paloindrome")
//         }
    
//     }
    
     
//  }

// greeting();



// Q11

// function    greeting(){
//     var lan="the quick brown box fox";
// var arr=lan.split(" ");
// for (var i=0;i<arr.length;i++){
// var firstChar=arr[i].slice(0,1); 
// var otherchar=arr[i].slice(1);
// lan=firstChar.toUpperCase()+otherchar.toLowerCase() ;
// document.write(lan);
// }
// }

// greeting();

//Q12 
// function    greeting(){
//     var lan="Web Development Totorial";
// var arr=lan.split(" ");
// var leng=0,ind;
// for (var i=0;i<arr.length;i++){
//     if (leng<arr[i].length)
//     {
//         leng=arr[i].length;
//        ind=arr[i];
//     }    
// }
// document.write(ind);
// }

// greeting();


//Q13 
// function    greeting(a,b){
//     var leng=0; 
// for (var i=0;i<a.length;i++){
//     if (a[i]===b)
//     {
//         leng=leng+1;
//     }    
// }
// document.write(leng);
// }

// greeting("JSResourceS.com","o");


//Q 14
// function COC(r){
//     var z=2*3.14+r;
//     document.write("<br>COC Is "+z);
// }
// function AoC(r){
//     var h=3.14+(r*r);
//     document.write("<br>Aoc is "+h)
// }

// AoC();
// COC();
