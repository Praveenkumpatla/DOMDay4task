//Task1
var task1 = document.createElement("span");
task1.innerHTML = "Task 1. If you come here I'll change my color";
document.body.append(task1);
task1.addEventListener('mouseover',function(){
    this.style.color = "brown" ;
});
//Task2
var task2 = document.createElement("div");
task2.innerHTML = "Task 2. what you entered in prompt will displayed here :";
document.body.append(task2);
var age = prompt("Enter your Age");
task2.innerHTML += age ;
//Task3
var task3 = document.createElement("h1");
task3.innerHTML = "Task 3. This is Heading";
var para = document.createElement("p");
para.innerHTML = "This is para, Coordinates of mouse, when you click on heading : ";
var x = document.createElement("span");
var y = document.createElement("span");
task3.addEventListener('click',function(){
    x.innerHTML = window.event.clientX+",";
    y.innerHTML = window.event.clientY;
});
para.append(x,y);
task3.append(para);
document.body.append(task3);
//Task4
var line = document.createElement("div")
line.innerHTML ="Task 4. When you type anything inside textarea the length will displayed beside it :";
var task4 = document.createElement("textarea");
var result = document.createElement("span");
result.style.fontSize = "50px";
line.append(task4,result);
document.body.append(line);
task4.addEventListener('keypress',function(){
    result.innerHTML = task4.value.length +1;
});
//Task5
var task5 = document.createElement("div");
task5.innerHTML = "Task 5. Enter a decimal number :"
var decimal = document.createElement("input");
var btn = document.createElement("button");
btn.setAttribute("onclick","convert()")
btn.innerHTML = "convert";
var output = document.createElement("span");
task5.append(decimal,btn,output);
document.body.append(task5);
function convert(){
    output.innerHTML = "The Binary number of "+decimal.value +" is "+ parseInt(decimal.value).toString(2);
}
//Task6
var task6 = document.createElement("div");
var link = document.createElement("a");
link.setAttribute("href","https://praveenformtask.netlify.app/");
link.innerHTML = "Task 6 : Validation of form (click here your redirect to form)";
task6.append(link);
document.body.append(task6);
//Task7
var task7 = document.createElement("div");
task7.innerHTML = "Task 7 :"
var btn1 = document.createElement("button");
btn1.innerHTML = "Full screen mode";
btn1.addEventListener('click',function(){
    document.documentElement.requestFullscreen();
});
var btn2 = document.createElement("button");
btn2.innerHTML = "Exit Full screen mode";
btn2.addEventListener('click',function(){
    document.exitFullscreen();
});
task7.append(btn1,btn2);
document.body.append(task7);
//Task8
var task8 = document.createElement("p");
task8.innerHTML = "Task 8 : If you press an key inside textarea it shows invalid input and if you press space bar it'll shows success and got closed :"
var textinp = document.createElement("textarea");
textinp.onkeypress = function(e){
    console.log(e.keyCode);
    if(e.keyCode==32){
        alert("success");
        window.close();
    }
    else
    alert("Invalid Input");
}
task8.append(textinp);
document.body.append(task8);
//Task9
var task9 = document.createElement("p");
task9.innerHTML = "Task 9. If you come's here you can able to edit this text."
task9.setAttribute("contenteditable","true");
task9.style.outline = "none";
document.body.append(task9);
document.body.style.backgroundColor = "cyan";