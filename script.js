//your JS code here. If required.
// alert(` First Name: John Last Name: Doe Phone Number: 1234567890 Email ID: john.doe@example.com`)
function handleSubmit(){
	let fname = document.getElementById("fname");
	let lname = document.getElementById("lname");
	let number = document.getElementById("number");
	let email = document.getElementById("email");

	const firstname = fname.value;
	const lastname = lname.value;
	const phonenumber = number.value;
	const emailid = email.value;

	alert(` First Name: ${firstname} Last Name: ${lastname} Phone Number: ${phonenumber} Email ID: ${emailid}`)

}