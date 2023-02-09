// let form = document.getElementById("form");

// let input1 = document.getElementById("name").value;

// let input2 = document.getElementById("lastname").value;

// let input3 = document.getElementById("nameOfPate").value;

// let input4 = document.getElementById("Email").value;

// let input5 = document.getElementById("phoneNumber").value;

// document.getElementById("btn").addEventListener("click", function () {
//   let data = {
//     name: input1.value,
//     "last name": input2.value,
//     "name of pate": input3.value,
//     Email: input4.value,
//     "phone number": input5.value,
//   };
//   localStorage.setItem("blabla", JSON.stringify(data));
// });

/////////////////////////////////////////////////////////////////////////

let form = document.getElementById("form");

let input1 = document.getElementById("name");
input1.setAttribute("id", "input1");

let input2 = document.getElementById("lastName");
input2.setAttribute("id", "input2");

let input3 = document.getElementById("nameOfPate");
input3.setAttribute("id", "input3");

let input4 = document.getElementById("Email");
input4.setAttribute("id", "input4");

let input5 = document.getElementById("phoneNumber");
input5.setAttribute("id", "input5");

let submit = document.getElementById("btn");
submit.setAttribute("id", "submit");

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("input1", document.getElementById("input1").value);
  localStorage.setItem("input2", document.getElementById("input2").value);
  localStorage.setItem("input3", document.getElementById("input3").value);
  localStorage.setItem("input4", document.getElementById("input4").value);
  localStorage.setItem("input5", document.getElementById("input5").value);
});
