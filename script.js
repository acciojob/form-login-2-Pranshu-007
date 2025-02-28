//your JS code here. If required.
// alert(` First Name: John Last Name: Doe Phone Number: 1234567890 Email ID: john.doe@example.com`)
function handleSubmit(event) {
	event.preventDefault(); // Prevents form from reloading the page

	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let number = document.getElementById("number").value.trim();
	let email = document.getElementById("email").value.trim();

	alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${number} Email ID: ${email}`);
}
