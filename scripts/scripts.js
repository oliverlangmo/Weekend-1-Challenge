var allEmps = [];
var allSals = [];

var submitForm = function(){
var empName = document.getElementById('nameIn').value;
var empNum = document.getElementById('EmpNum').value;
var jobTitle = document.getElementById('position').value;
var annSal = document.getElementById('annSal').value;
var newEmp = {
  'Name':empName, 'EmployeeId': empNum, 'Title': jobTitle, 'Salary': annSal};

 if (empName === '' || empNum ==='' || jobTitle === '' || annSal ===''){
   var outputText = '';
   outputText = 'Please fill out empty boxes';
   document.getElementById('blankBox').innerHTML = outputText;
  return;
}
allEmps.push(newEmp);
allSals.push(Number(newEmp.Salary));

console.log(allEmps);
console.log(allSals);

showEmps();
resetForm();
addSalary();
};

var addSalary = function(){
  var totalSal = 0;
  var outputText = '';
  for(var i =0; i < allSals.length; ++i){
   if (allSals[i] > 0){
    totalSal+=allSals[i];
   }
  outputText = '<p>Total salary cost for all employees: $' + Math.fround(totalSal);
  document.getElementById('outputDiv2').innerHTML = outputText;
  }
};


var showEmps = function(){
  var outputText = '';
for( var i = 0; i < allEmps.length; i++){
outputText += '<p id = "new"><strong> Name:</strong> ' + allEmps[i].Name + '<strong> Employee ID:</strong> ' + allEmps[i].EmployeeId + '<strong> Title: </strong> ' + allEmps[i].Title + '<strong> Annual Salary:</strong>$' + allEmps[i].Salary +'</p>';
}
document.getElementById('outputDiv').innerHTML = outputText;
};
var resetForm = function(){
  var outputText = '';
  document.getElementById('nameIn').value = null;
  document.getElementById('EmpNum').value = null;
  document.getElementById('position').value = null;
  document.getElementById('annSal').value = null;
  document.getElementById('blankBox').innerHTML = outputText;

};
var remveEmp = function(){
  var totalSal = 0;
  var elem = document.getElementById('new');
  var empName = document.getElementById('nameIn').value;
  var empNum = document.getElementById('EmpNum').value;
  var jobTitle = document.getElementById('position').value;
  var annSal = document.getElementById('annSal').value;
  var newEmp = {
    'Name':empName, 'EmployeeId': empNum, 'Title': jobTitle, 'Salary': annSal};
     elem.parentNode.removeChild(elem);
     allEmps.pop(newEmp);
     
};
