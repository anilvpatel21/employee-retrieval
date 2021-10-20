var tableHtml = '<table id="employeelists">';
tableHtml += '<thead>';
tableHtml += '<tr>';
tableHtml += '<th>Name</th>';
tableHtml += '<th>Employee Code</th>';
tableHtml += '<th>Designation</th>';
tableHtml += '<th>Report To</th>';
tableHtml += '<th>Email Id</th>';
tableHtml += '<th>Mobile</th>';
tableHtml += '<th>Location</th>';
tableHtml += '<th>Department</th>';
tableHtml += '<th>Organization</th>';
tableHtml += '<th>Joining Date</th>';
tableHtml += '<th>Date of Birth</th>';
tableHtml += '<th>Blood Group</th>';
tableHtml += '</tr>';
tableHtml += '</thead>';

var emp = document.getElementsByTagName('employee');
var employees = emp[0]["__ngContext__"][8];
var employeesList = employees["ngForOf"];

for (var i = 0; i < employeesList.length; i++) {
   tableHtml += '<tr>';
   tableHtml += '<td>' + employeesList[i].name + '</td>';
   tableHtml += '<td>' + employeesList[i].employeeno + '</td>';
 
   var t = await fetch("https://algonomy.greythr.com/v3/api/empinfo/empdir/" + employeesList[i].employeeid);
   var data = await t.json();
 
   tableHtml += '<td>' + data.categories[0].value + '</td>';
   tableHtml += '<td>' + data.fields[2].value + '</td>';
   tableHtml += '<td>' + employeesList[i].email + '</td>';
   tableHtml += '<td>' + data.contactFields[1].value + '</td>';
   tableHtml += '<td>' + data.categories[1].value + '</td>';
   tableHtml += '<td>' + data.categories[2].value + '</td>';
   tableHtml += '<td>' + data.categories[3].value + '</td>';
   tableHtml += '<td>' + data.fields[0].value + '</td>';
   tableHtml += '<td>' + data.fields[1].value + '</td>';
   tableHtml += '<td>' + data.fields[3].value + '</td>';
 
   tableHtml += '</tr>';
 
   if (i === (employeesList.length - 1)) {
       tableHtml += '</tbody>';
       tableHtml += '</table>';
   }
}
