function main() {
	// Get the input and div elements
	var inputElement = document.querySelector("#kudo_submit");
	var messageElement = document.querySelector("#kudos_message");

	// Attach a click event to the input element
	inputElement.addEventListener("click", function() {
		// Check the class of the div element after the click
		if (messageElement.classList.length != 1) {
			setTimeout(function() {
				if (messageElement.classList.contains("kudos_error")) {
					console.log("previously kudosed");
					sendComment();
				}
			}, 500);
		} 
	});
	
	console.log("added event listener");
}

// Define the sendComment function
function sendComment() {
	// Get the textarea and submit button elements
	var textareaElement = document.querySelector('textarea[name="comment[comment_content]"]');
	var submitButton = document.querySelector('input[value="Comment"]');
	console.log("found elements");
	
	// Set the value of the textarea
	textareaElement.value = "Another kudos on reread!";

	// Click the submit button
	submitButton.click();
	console.log("sent comment");
}

window.onload = function() {
	main();
};