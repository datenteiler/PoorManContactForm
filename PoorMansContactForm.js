function getContactFormValue(){
	// Your e-mail address
	let localpart = "my.email.address";
	let domainpart = "example.com";
	
	let name = document.getElementById("name").value;
	let subject = document.getElementById("subject").value;
	let message = document.getElementById("message").value;
	
  // Save textarea value with line breaks
	message = message.replace(/\n\r?/g, "%0A");
	
	// Send e-mail address if you click on the button "Send"	
	document.location.href = 'mailto:' + localpart + '@' + domainpart + '?subject=' + subject + '&body=From: ' + name + '%0A%0A' + message;
	
	// Clear the forms
	document.getElementById("name").value = '';
	document.getElementById("subject").value = '';
	document.getElementById("message").value = '';
	document.getElementById("sent").innerHTML = 'Message will be sent...';
	document.getElementById("sent").style.color = "green";
}