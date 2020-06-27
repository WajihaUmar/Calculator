function getInput(no) {
  var input = document.getElementById("inputField")
  input.value += no
}

function clearInput() {
  var input = document.getElementById("inputField")
  input.value = ""
}

function backbtn() {
  var input = document.getElementById("inputField")
  var newInput = input.value.slice(0, -1);
  input.value = newInput
}

function showResult() {
  var input = document.getElementById("inputField")
  input.value = eval(input.value)
}