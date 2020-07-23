                    // FUNCTIONS, SWITCH STATEMENTS, WHILE,DOWHILE LOOPS
// Qs No 1
function power(a, b) {
    var power = a ** b;
    return power
}
a = prompt("Enter Power Digit :")
b = prompt("Enter Power :")
alert("power of " + a + " raise to the power of " + b + " is " + power(a,b));
// Qs No 2
function leapYear(year) {
    if (year == 1700 || year == 1800 || year == 1900) {
        alert(year + " is'nt a Leap Year.");
    }
    else if (year % 4 == 0) {
        alert(year + " is Leap Year!");
    }
    else {
        alert(year + " is'nt a Leap Year.");
    }
    return year
}
var year = +prompt("Year :");
leapYear(year);
// Qs No 3
function areaOfTriangle(a,b,c) {
    function s() {
        var s = (a + b + c) / 2;
        return s
    }
    var area = s() * (s() - a) * (s() - b) * (s() - c);
    area = Math.sqrt(area)
    area = Math.ceil(area)
    return area
}
a = +prompt("A : ");
b = +prompt("B : ");
c = +prompt("C : ");
alert("Area Of Triangle = " + areaOfTriangle(a,b,c));
// Qs No 4
function mainFunction(a,b,c) {
    function average() {
        var avg = (a + b + c) / 3;
        return avg
    }
    function percentage() {
        var percentage = ((a + b + c) / 300) * 100;
        return percentage
    }
    alert("Average = " + average() + "\n" + "Percentage = " + percentage());
}
a = +prompt("First Subject : ");
b = +prompt("Second Subject : ");
c = +prompt("Third Subject : ");
mainFunction(a,b,c);
// Qs No 5
function indexOF(string,alphabet) {
    for (var i = 0 ; i < string.length ; i++) {
        if (alphabet == string[i]) {
            alert("IndexOF " + alphabet + " = " + i);
            break
        }
        else {
            alert("No Alphabet found!")
            break
        }
    }
}
indexOF("hello","a")
// Qs No 6
var txt = "hassan mughal";
function vowelEraser(text) {
    for (var i  =  0; i < text.length ; i++) {
        if (text[i] == "a" || text[i] == "A" || text[i] == "e" || text[i] == "E" || text[i] == "i" || text[i] == "I" || text[i] == "o" || text[i] == "O" || text[i] == "u" || text[i] == "U") {
            var range = text.slice(0 , i);
        }
        else {
            document.write(text[i])
        }
    }
}
vowelEraser(txt);
// Qs No 7
var txt1 = "Pleases read this application and give me gratuity";
count = 0
function countVowels(text) {
    for (var i = 0 ; i < text.length ; i++) {
        switch(text.slice(i, i + 2)) {
        case "ae" :
            count += 1;
            break;
        case "ai" :
            count += 1;
            break;
        case "ao" :
            count += 1;
            break;
        case "au" :
            count += 1;
            break; 
        case "aa" :
            count += 1;
            break;
        case "ea" :
            count += 1;
            break;
        case "ee" :
            count += 1;
            break;
        case "ei" :
            count += 1;
            break;
        case "eo" :
            count += 1;
            break;
        case "eu" :
            count += 1;
            break; 
        case "ea" :
            count += 1;
            break;    
        case "ie" :
            count += 1;
            break;
        case "ii" :
            count += 1;
            break;
        case "io" :
            count += 1;
            break;
        case "iu" :
            count += 1;
            break; 
        case "ia" :
            count += 1;
            break;
        case "oe" :
            count += 1;
            break;
        case "oi" :
            count += 1;
            break;
        case "oo" :
            count += 1;
            break;
        case "ou" :
            count += 1;
            break; 
        case "oa" :
            count += 1;
            break;    
        case "ue" :
            count += 1;
            break;
        case "ui" :
            count += 1;
            break;
        case "uo" :
            count += 1;
            break;
        case "uu" :
            count += 1;
            break; 
        case "ua" :
            count += 1;
            break;
        }   
    }
    return count; 
}
alert(countVowels(txt1))
// Qs No 8
function route(distance) {
    function meters() {
        var meter = distance * 1000;
        return meter
    }
    function feet() {
        var  feet = distance * 3281;
        return feet;
    }
    function inches() {
        var  inches = distance * 39370;
        return inches;
    }
    function cm() {
        var  centimeters = distance * 100000;
        return centimeters;
    }
    alert(distance + "Km = " + meters() + "M" + "\n" + distance + "km = " + feet() + "f" + "\n" + distance + "Km = " + inches() + "inches" + "\n" + distance + "Km = " + cm() + "Cm");
}
var kilometers = +prompt("Enter Distance In Kilometers : ");
route(kilometers);
// Qs No 9
function overTime(time) {
    if (time < 40) {
        alert("Sorry! Please Complete Your Daily Shift First.");
    }
    else if (time == 40) {
        alert("Please Work For Some More Hours To Get OverTime Pay.");
    }
    else {
        alert("Please Wait For a while, Your OverTime Pay is In Transaction!");
    }
}
var time = prompt("Working Hours : ");
overTime(time);
// Qs No 10
function notes(amount) {
    if (amount > 991) {
        alert("Please Enter a 3 Digit Number.")
    }
    else {
        var hundred = amount.slice(0,1);
        var mainSlice = amount.slice(1,2);
        if (mainSlice >= 5) {
            var ten = "1 Fifty Notes ";
        }
        else if (mainSlice < 5) {
            var ten = "0 Fifty Notes "; 
        }
        if (mainSlice >= 1 && mainSlice < 5) {
            var unit = mainSlice;
            var unit1 = unit + " Ten Notes.";
        }
        else if (mainSlice >= 6 && mainSlice <= 9) {
            var unit = mainSlice - 5;
            var unit1 = unit + " Ten Notes.";
        }
        else if (mainSlice == 5) {
            var unit1 = "0 Ten Notes.";
        }
        else {
            var unit1 = "0 Ten Notes.";
        }
        alert("Sire! You will have " + hundred + " Hundred Notes " + ten + unit1);
    }
}
var amount = prompt("Enter Amount : ");
notes(amount);
                                        // EVENTS 
// Qs No 1
// IN HTML ONCLICK FUNCTION
// Qs No 2
// IN HTML
// Qs No 3
function del(id) {
    var tr = document.getElementById(id);
    tr.remove();
}
var arr = ['0','1','2']
function index() {
    var index = document.getElementById('index0');
    index.innerHTML = arr.indexOf('0')
    arr.splice(0,1)
    console.log(arr)
    if (document.getElementById('index1') == null) {
        var index2 = document.getElementById('index2');
        index2.innerHTML = arr.indexOf('2')
    }
    else if (document.getElementById('index1') == null && document.getElementById('index2') == null) {
        del('index0')
    }
    else {
        var index1 = document.getElementById('index1');
        index1.innerHTML = arr.indexOf('1')
        var index2 = document.getElementById('index2');
        index2.innerHTML = arr.indexOf('2')
    }
}
function index1() {
    var index = document.getElementById('index1');
    index.innerHTML = arr.indexOf('1')
    arr.splice(1,1)
    console.log(arr)
    if (document.getElementById('index2') == null) {
        var index1 = document.getElementById('index0');
        index1.innerHTML = arr.indexOf('0')
    }
    else if (document.getElementById('index0') == null) {
        var index1 = document.getElementById('index2');
        index1.innerHTML = arr.indexOf('2')
    }
    else {
        var index1 = document.getElementById('index0');
        index1.innerHTML = arr.indexOf('0')
        var index2 = document.getElementById('index2');
        index2.innerHTML = arr.indexOf('2')
    }
}
function index2() {
    var index = document.getElementById('index2');
    index.innerHTML = arr.indexOf('2')
    arr.splice(2,1)
    console.log(arr)

}
// Qs No 4
function imageSwap(id,src) {
    document.getElementById(id).src = src;
} 
// Qs No 5
count = 0;
function counter() {
    count += 1;
    var numBer = document.getElementById("number");
    numBer.innerHTML = count;
}
function back() {
    count -= 1;
    var numBer = document.getElementById("number");
    numBer.innerHTML = count;
}
function reset() {
    count = 0;
    var number = document.getElementById("number");
    number.innerHTML = 0;
}
                                            //  EVENTS 
// Qs No 1
function form1(id1,id2,id3) {
    var id11 = document.getElementById(id1).value;
    var id22 = document.getElementById(id2).value;
    var id33 = document.getElementById(id3).value;
    document.write("Email : " + id11 + "</br>")
    document.write("Username : " + id22 + "</br>")
    document.write("Password : " + id33 + "</br>")
}
// Qs No 2
function readMore(id) {
    var para1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos rerum officiis voluptatibus ipsa, autem odio impedit velit, eius quas voluptate magni deleniti illum asperiores assumenda repellendus, fugiat praesentium! Tenetur."
    var para = document.getElementById(id);
    para.innerHTML = para1
}
// Qs No 3
function edit(r,n,c) {
    var tab = document.getElementById('hidden');
    tab.style.visibility = "visible";
    var r1 = document.getElementById(r);
    document.getElementById('erno1').value = r1.value;
    var n1 = document.getElementById(n);
    document.getElementById('ename1').value = n1.value;
    var c1 = document.getElementById(c);
    document.getElementById('eclass1').value = c1.value;
}
function change(r,n,c) {
    var r1 = document.getElementById('erno1');
    document.getElementById(r).value = r1.value;
    var n1 = document.getElementById('ename1');
    document.getElementById(n).value = n1.value;
    var c1 = document.getElementById('eclass1');
    document.getElementById(c).value = c1.value;
    var tab = document.getElementById('hidden');
    tab.style.visibility = "hidden";
}
                                            //  MORAL
// Qs No 1
function showImg(e) {
    var modal = document.getElementById("modalImg");
    modal.src = e.src;
}
// Qs No 2
function fontSize(id,size) {
    var para = document.getElementById(id);
    para.style.fontSize = size;
}
                                            //  DOM
// Qs No 1
// Qs No i
var main = document.getElementById("main-content").innerHTML;
// Qs No ii
console.log(main);
// Qs No iii
var render1 = document.getElementsByClassName("render");
for (var i = 0 ; i < render1.length ; i++) {
    var render11 = render1[i].innerHTML;
    document.write(render11);
}
// Qs No iv
var fName1 = document.getElementById('first-name');
fName1.value = "Muhammad Hassan ";
// Qs No v
var lName1 = document.getElementById('last-name');
lName1.value = "Rasheed";
var mail = document.getElementById('email');
mail.value = "abc@gmail.com";
// Qs No 2
// Qs No i
var type  = document.getElementById("form-content").nodeType;
console.log(type);
// Qs No ii
var type1 = lName1.nodeType;
console.log(type1);
var val = lName1.value;
console.log(val);
// Qs No iii
var lName2 = document.getElementById('last-name');
lName2.value = "Rasheed Ahmed";
// Qs No iv
var main1 = document.getElementById("main-content");
var fChild = main1.firstChild;
console.log(fChild);
var lChild = main1.lastChild;
console.log(lChild);
// Qs No v
var lName11 = lName1.previousSibling;
var lName12 =  lName1.nextSibling;
console.log(lName11);
console.log(lName12);
// Qs No vi
var parent = mail.parentNode;
var pType = parent.nodeType;
console.log(parent);
console.log(pType);