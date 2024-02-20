// Constants for query selector
// These constants reference specific elements in the HTML document, allowing for easy manipulation.
const studentIdParagraph = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const changeCustomColorButton = document.querySelector(".custColor");
const changeRandomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// Array of image sources
// This array holds the file paths for the images that can be selected and displayed on the page.
const imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg" , "img/img5.jpg"]; 

// Function to display student ID and change background color based on input
// This function changes the page's background color according to a numerical input value. It also displays a student ID, which should be replaced with an actual ID.
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    let color = "red"; // Default color
    if (number > 0 && number <= 20) color = "green";
    else if (number > 20 && number <= 40) color = "blue";
    else if (number > 40 && number <= 60) color = "orange";
    else if (number > 60 && number <= 80) color = "purple";
    else if (number > 80 && number <= 100) color = "yellow";
    
    document.body.style.backgroundColor = color;
    studentIdParagraph.textContent = "Your Student ID"; // Reminder to replace placeholder text.
}

// Function to change background color to a random color
// Generates a random number between 1 and 100, then reuses the changeCustomColor function to apply a color based on this random number.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber;
    changeCustomColor();
}

// Function to generate options for the select list
// Populates the dropdown menu with options based on the imageSources array. It prevents duplicate entries if the list already contains options beyond the default.
function addList() {
    if (imageSelect.options.length <= 1) {
        imageSources.forEach(source => {
            const option = document.createElement("option");
            option.value = source;
            option.textContent = source.split('/').pop(); // Extracts and displays the filename as the option text.
            imageSelect.appendChild(option);
        });
    }
}

// Function to change the image based on selected option
// Changes the displayed image to the one selected by the user from the dropdown menu.
function changeImage() {
    const selectedSource = imageSelect.value;
    imageElement.src = selectedSource;
    imageElement.alt = "Selected Image";
}

// Event listeners
// These listeners wait for user actions (clicks or changes) and trigger the corresponding functions to execute the desired actions.
changeCustomColorButton.addEventListener("click", changeCustomColor);
changeRandomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);
imageSelect.addEventListener("change", changeImage);
