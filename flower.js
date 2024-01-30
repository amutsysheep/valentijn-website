onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
// Function to create the animated button
function createAnimatedButton() {
    // Create button element
    var button = document.createElement("button");
    button.innerHTML = "Click me!";
    button.id = "animatedButton";

    // Append button to the container
    document.getElementById("buttonContainer").appendChild(button);

    // Set timeout to make the button appear after 10 seconds
    setTimeout(function() {
        // Set display property to block to make it visible
        button.style.display = "block";

        // Add a class to trigger the animation
        button.classList.add("fadeIn");
    }, 10000); // 10 seconds
}

// Call the function to create the animated button
createAnimatedButton();