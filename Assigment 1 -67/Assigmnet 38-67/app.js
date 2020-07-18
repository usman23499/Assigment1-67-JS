// Ch 38-42
// Q1

// function add(a,b){
//  alert(a+b);
// }

// add(40,89)


// Q2
// function add(a){
//     if(a%4==0){
//         alert("It is leep yaer");
//     }   
//     else{
//         alert("it is not a leep year");
//     }
// }

// var a = prompt("Enetr a year");
// add(a)
   
// Q3

// function sfun(a,b,c){

//     a=(+a)
//     b=(+b)
//     c=(+c)
    
//     return ((a+b+c)/2)
// }
// function area(a,b,c){

//     var S=sfun(a,b,c);
//     var areacal=(S*(S-a)*(S-b)*(S-c))
//     document.write("<h1>The area of circle is  "+areacal+"</h1>");
// }
// area(10,90,90)


// Q4


// function avg(a,b,c){
//     document.write("<h1>The Average of student is "+(a+b+c)/3+"</h1>");

// }

// function per(a,b,c){
//     document.write("<h1>The Percentage of student is "+(((a+b+c)*100)/300)+"</h1>");
    
    
// }
// function main(a,b,c){


//     document.write("<h1>The Total Number of student is "+(a+b+c)+"</h1>");
//     per(a,b,c)
//     avg(a,b,c)
// }
// main(80,90,90)


// Q5


// function alphaindex(sentence,a){
    
//     for (var i=0; i<sentence.length;i++){
        
//         if (a==sentence[i]){
//             document.write("<h1>It is at the index no "+i+"</h1>")
//             break
//         }
//     }
// }

// var a=prompt("Enter any alphabet (my name is usman) to secrch ");
// document.write("<h1>my name is usman</h1>");
// alphaindex("my name is usman",a)







// // Q6
// function alphaindex(sentence){
    
//     var sen="";
//     for (var i=0; i<sentence.length;i++){
        
//         if (sentence[i]==="a"||sentence[i]==="e"||sentence[i]==="i"||sentence[i]==="o"|| sentence[i]==="u"){
           
//            continue
//         }
//         else{

//         }
     
//         sen=sen+sentence[i];
//     }
//     document.write("<h1>"+sen+"</h1>")
// }

// var str="The New Yorker magazine doesn't allow the phrase World War II.  They say it shouldbe the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
// document.write("<h1>"+str+"</h1>");
// alphaindex(str)


// Q7
// function occu(sen){

//     count=0;
//     for (var i=0;i<sen.length;i++){
//     switch(sen[i]){
//         case ('a'):
//             if (sen[i+1]==="a"||sen[i+1]==="e"||sen[i+1]==="i"||sen[i+1]==="o"|| sen[i+1]==="u"){
//             count++;
//             }
//             break
        
//         case ('e'):
//             if (sen[i+1]==="a"||sen[i+1]==="e"||sen[i+1]==="i"||sen[i+1]==="o"|| sen[i+1]==="u"){
//             count++;
//             }
//             break
        
//         case ('i'):
//             if (sen[i+1]==="a"||sen[i+1]==="e"||sen[i+1]==="i"||sen[i+1]==="o"|| sen[i+1]==="u"){
//             count++;
//             }
//             break
    
//         case ('o'):
//             if (sen[i+1]==="a"||sen[i+1]==="e"||sen[i+1]==="i"||sen[i+1]==="o"|| sen[i+1]==="u"){
//             count++;
//             }
//             break
        
//         case ('u'):
//             if (sen[i+1]==="a"||sen[i+1]==="e"||sen[i+1]==="i"||sen[i+1]==="o"|| sen[i+1]==="u"){
//             count++;
//             }
//             break
        
//         }
//     }
//     document.write("<h1>The total number of occurence is "+count+"</h1>");

// }
// var str="The New Yorker magazine doesn't allow the phrase World War II.  They say it shouldbe the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
// document.write("<h1>"+str+"</h1>");
// occu(str)



// Q8

// function m(km){

//     document.write("<h1> Meter "+(km*1000)+" m </h1>")
// }
// function feet(km){
//     document.write("<h1> Feet "+(km*3280.84)+" feet </h1>")
// }
// function inches(km){
//     document.write("<h1> Inches "+(km*39370.1)+" inches </h1>")
// }
// function cm(km){
//     document.write("<h1> CentiMeter "+(km*100000)+" cm </h1>")    
// }

// m(1000)
// feet(1000)
// inches(1000)
// cm(1000)


// Q9

// var time=prompt("Enter your total Hours");
// if(time>40){

//     var cal=(+time)-40;
//     cal=cal*12.00;
//     document.write("<h1>Your extra work salary is "+cal+" rupees</h1>");

// }
// else{
//     document.write("<h1>You work for extra time<h1>");
// }

//Q10

// var rupee=prompt("Enter your total Rupees");
// var hun=0;
// var fif=0;
// var ten=0;
// rupee=+rupee
// for (;rupee>=100;){

//     hun++;
//     rupee=rupee-100;
// }
// for (;rupee>=50;){

//     fif++;
//     rupee=rupee-50;
// }
// for (;rupee>=10;){

//     ten++;
//     rupee=rupee-10;
// }

// document.write("<h1>100 : "+hun+"<h1>");
// document.write("<h1>50 : "+fif+"<h1>");
// document.write("<h1>10 : "+ten+"<h1>");



// Ch 43-48

// Q1

// function select(){
//     alert("Thanks cilck on the link");
// }

// Q2

// function select(){
//     alert("Thanks for purchese this phone");
// }

//Q3

// var a=[' aJaaaa ',' Dsdsdsd ',' Msdsds ','Hadi','hamza','Ali','haris','Umair','Asad','Bilal'];
// var b=[10,89,50,23,43,54,67,87,67,54];


// var para=document.getElementById("list");
// var text=[];

//     text[0]=""+0+" "+a[0]+" "+b[0]+" <button onclick='deletefun(0)'> Delete</button><br><br>";
//     text[1]=""+1+" "+a[1]+" "+b[1]+" <button onclick='deletefun(1)'> Delete</button><br><br>";
//     text[2]=""+2+" "+a[2]+" "+b[2]+" <button onclick='deletefun(2)'> Delete</button><br><br>";
//     text[3]=""+3+" "+a[3]+" "+b[3]+" <button onclick='deletefun(3)'> Delete</button><br><br>";
//     text[4]=""+4+" "+a[4]+" "+b[4]+" <button onclick='deletefun(4)'> Delete</button><br><br>";
//     text[5]=""+5+" "+a[5]+" "+b[5]+" <button onclick='deletefun(5)'> Delete</button><br><br>";
//     text[6]=""+6+" "+a[6]+" "+b[6]+" <button onclick='deletefun(6)'> Delete</button><br><br>";
//     text[7]=""+7+" "+a[7]+" "+b[7]+" <button onclick='deletefun(7)'> Delete</button><br><br>";
//     text[8]=""+8+" "+a[8]+" "+b[8]+" <button onclick='deletefun(8)'> Delete</button><br><br>";
//     text[9]=""+9+" "+a[9]+" "+b[9]+" <button onclick='deletefun(9)'> Delete</button><br><br>";



// para.innerHTML=text;



// function deletefun(i){
   
    
//     text.splice(i,1)
   
//     para.innerHTML="";
//     para.innerHTML=text;

// }

// Q4

// function imagehoverinonefunction(id,src){
//     var image=document.getElementById(id);
//     image.src=src;

// }

// var inp=document.getElementById("inp")
// inp.value=0;
// function incress(){
//     inp.value=(+inp.value)+1

// }
// function decress(){
//     inp.value=inp.value-1

// }


// Ch 49-52
// Q1

// var main=document.getElementById("main");
// function submit(){
//     var name=document.getElementById("name");
// var email=document.getElementById("email");
// var pass=document.getElementById("password");
// var pno=document.getElementById("pno");

//     main.innerHTML="<h5>Name:"+name.value+"<br>Email:"+email.value+"<br>Password:"+pass.value+"<br>Phone No:"+pno.value+"</h5>"
    
// }


// Q2

// function readmore(){
//     var text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, adipisci magnam doloribus impedit quidem quia debitis! Nesciunt eaque quia, natus magni eius delectus atque perspiciatis consequatur iure facilis deserunt optio!    ";
//     var para=document.getElementById("readtext");
//     para.innerHTML=text;
// }

// Q3

// var div1=document.getElementById("div1");
// var div2=document.getElementById("div2");
// var div3=document.getElementById("div3");

// function div1edit(){
// div1.innerHTML="<p>Name=Usman Id=usman234 FatherName=Muhammad Hussain Study=SSuet "}
// function div2edit(){
//     div2.innerHTML="<p>Name=Hadi Id=Hadi123 FatherName=Azfar Study=SSuet  "
// }
// function div3edit(){
//     div3.innerHTML="<p>Name=Bilal Id=Bilal12 FatherName=Tanveer Alam Study=SSuet "
//     }
// function divdelete(div){

//     var div=document.getElementById(div);
//     div.innerHTML=""
// }

// CH 52-57
//Q1
// var modal=document.getElementById("modal")
// // for (var i=1;i<14;i++){
// //     document.write("<img src='images/"+i+".jpg'>");

// // }
// var imagsrc=document.getElementById("img");
// function expendimg(src){
//     modal.style.display = "block";
   
//     imagsrc.src=src;
// }

// function removeimage(){
   
//     modal.style.display = "none";
// }


//Q2
// var text=document.getElementById("text");
// var i=16;
// function zoomin(){

//     text.style.fontSize=(i+10)+"px";
//     i=i+10;
// }
// function zoomout(){
//     text.style.fontSize=(i-10)+"px";
//     i=i-10;

// }






// ch 58=67

// Q1
// var maincontenet=document.getElementById("main-content");
// console.log(maincontenet.childNodes);
// var render=document.getElementsByClassName("render");
// console.log(render);
// var fname=document.getElementById("first-name");
// fname.value="Usman";
// var lname=document.getElementById("last-name");
// var email=document.getElementById("email");
// lname.value="Hussain";
// email.value="usman23499@gmail.com"


// Q2

// var formcontent=document.getElementById("form-content");
// console.log(formcontent.nodeType);

// var lastname=document.getElementById("lastName");
// console.log(lastname.nodeType)
// console.log(lastname.childNodes)
// lastname.childNodes[0].nodeValue="usman";
// console.log(lastname.childNodes[0])

// console.log(formcontent.firstChild)
// console.log(formcontent.lastChild)

// console.log(lastname.previousSibling);
// console.log(lastname.nextSibling)

// var email=document.getElementById("email");
// console.log(email.nodeType);
// console.log(email.parentElement)





