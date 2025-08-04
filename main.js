function addNumbers() {
      let num1 = document.getElementById('num1').value;
      let num2 = document.getElementById('num2').value;

      // Convert to numbers
      num1 = Number(num1);
      num2 = Number(num2);

      // Check if the input is valid
      if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('result').textContent = sum;
      } else {
        document.getElementById('result').textContent = "Please enter valid numbers";
      }
} 

function call(){
  addNumbers();
}
window.onload = function () {
  document.getElementById('num1').addEventListener('keyup', addNumbers);
  document.getElementById('num2').addEventListener('keyup', addNumbers);
};