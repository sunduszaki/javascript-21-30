// chapter 21
// var fisrtName = prompt("Enter fisrt name");
// var secondName = prompt("Enter second name");
// var fullName = fisrtName + " " + secondName
// alert(fullName)


// task no 2

// var text = prompt("Enter your favourite mobile model");
// var length = text.length;
// alert(length)


// task no 3
// var text = "Pakistan";
// var position = text.indexOf("n");
// document.write(position);


// task no 4
// var text = "Hello World";
// var position = text.lastIndexOf("l");
// document.write(position)

// task no 5
// var text = "Pakistan";
// var position = text.charAt(3);
// document.write(position)

// task no 6
// var fisrtName = prompt("Enter your first name?");
// var secondName = prompt("Enter your second name?");
// document.write(fisrtName.concat(secondName))

// task no 7
// var text = "Hyderbad";
// var result = text.replace("Hyder", "Islam");
// document.write(result)

// task no 8
// var message = "Ali and Sami are best friends they played cricket and football together";
// var result = message.replace(/and/g, "&");
// document.write(result)

// task no 9
// var num = 472;
// var a = num.toString()
// document.write(typeof a
//     + "<br/>")
// var num2 = "472";
// var b = Number(num2)
// document.write(typeof b)


// task no 10
// var text = prompt("What is your city name?");
// var result = text.toUpperCase()
// alert(result)

// task no 11
// var city = prompt("Enter your city name?");
// var result = city.charAt(0).toUpperCase() + city.slice(1)
// alert(result)


// //task no 12
// var num = 35.36;
// var result = num.toString().replace(".", "")
// alert(Number(result))

//task no 13
// var name = prompt("Enter your name");
// for (var i = 0; i < name.length; i++) {
//     var check = name.charCodeAt(i);
//     console.log(check)
//     if (check == 33 || check == 44 || check == 46 || check == 64) {
//         name = prompt("Enter valid username")
//     } else {
//         document.write(name);
//     }

// }


//     == Chapter 26 - 30 ==//


//         task no 1
// var num = prompt("Enter a positive integer");
// document.write("Number" + " " + ":" + " " + num + "<br/>")
// var a = Math.round(num);
// document.write("Round value" + " " + ":" + " " +  a + "<br/>");
// var b = Math.floor(num);
// document.write("Floor value" + " " + ":"+ " " + b + "<br/>")
// var c = Math.ceil(num);
// document.write("Ceil value" + " " + ":" + " " + c);

// task no 2

// var num = prompt("Enter a negative floating point");
// document.write("Number" + " " + ":" + " " + num + "<br/>")
// var a = Math.round(num);
// document.write("Round value" + " " + ":" + " " + a + "<br/>");
// var b = Math.floor(num);
// document.write("Floor value" + " " + ":"+ " " + b + "<br/>")
// var c = Math.ceil(num);
// document.write("Ceil value" + " " + ":" + " " +  c);


//task no 3
// var a = prompt("Enter a number");
// var a = Math.abs(a);
// document.write(a)

//  task no 4
// var dice = Math.ceil(Math.random()*6)
// document.write(dice)

//task no 5
// var firstUser = prompt("Enter first user name?");
// var secondUser = prompt("Enter second user name?");
// var random = Math.random() * 2;
// var toss = Math.floor(random);
// if (toss == 0) {
//     document.write("Head" + " " + firstUser + " " + "win the toss")
// } else {
//     document.write("Tail" + " "
//         + secondUser + " " + "win the toss")
// }

//task no 6
// var num = Math.floor(Math.random()*100);
// document.write(num)

//task no 7
// var weight = prompt("Enter your weight");
// document.write(parseInt(weight))


//task no 8
// var num = 5;
// var secret = +prompt("Enter a number between 1- 10")
// if (num === secret) {
//     alert("Congratulation")
// }