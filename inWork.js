function main() {
	// Get the input and div elements
	let inputElement = document.querySelector("#kudo_submit");
	let messageElement = document.querySelector("#kudos_message");
	let subscribeButton = document.querySelector('#new_subscription');

	// Attach a click event to the input element
	inputElement.addEventListener("click", function() {
		if (subscribeButton) {
			subscribeButton.click();
			inputElement.scrollIntoView({behavior: "instant", block: "center"});
		}
		subscribeButton = null;
		// Check the class of the div element after the click
		if (messageElement.classList.length !== 1) {
			setTimeout(function() {
				if (messageElement.classList.contains("kudos_error")) {
					console.log("previously kudosed");
//					sendComment();
				}
			}, 500);
		} 
	});
	
	console.log("added event listener");
}

// Define the sendComment function
function sendComment() {
	// Get the textarea and submit button elements
	let textareaElement = document.querySelector('textarea[name="comment[comment_content]"]');
	let submitButton = document.querySelector('input[value="Comment"]');
	console.log("found elements");
	
	// Set the value of the textarea
	textareaElement.value = "Another kudos on reread!";

	// Click the submit button
	submitButton.click();
	console.log("sent comment");
}

main();