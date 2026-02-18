const groceryData = ["Milk","Mango","Papaya","Banana","Apple"];
function showSuggestions() {

    let input = document.getElementById("itemInput").value.toLowerCase();
    let suggestionBox = document.getElementById("suggestions");

    suggestionBox.innerHTML = "";

    if (input === "") return;

    let filtered = groceryData.filter(item =>
        item.toLowerCase().includes(input)
    );

    filtered.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;

        li.onclick = function () {
            addItemWithImage(item);
        };

        suggestionBox.appendChild(li);
    });
}


function addItemWithImage(item) {

    let li = document.createElement("li");

    let img = document.createElement("img");

    // This line connects item name with image file
    img.src = "images/" + item.toLowerCase() + ".png";

    img.alt = item;
    img.classList.add("item-img");

    li.appendChild(img);
    li.appendChild(document.createTextNode(" " + item));

    document.getElementById("groceryList").appendChild(li);

    document.getElementById("itemInput").value = "";
    document.getElementById("suggestions").innerHTML = "";
}
function addItem() {

    let input = document.getElementById("itemInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a grocery item!");
        return;
    }

    addItemWithImage(value);
}

function checkPassword() {

    let password = document.getElementById("passwordInput").value;
    let result = document.getElementById("passwordResult");

    let minLength = password.length >= 8;
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);

    if (minLength && hasNumber && hasSpecial) {
        result.style.color = "green";
        result.textContent = "Strong Password (Pass)";
    } else {
        result.style.color = "red";
        result.textContent = "Weak Password (Fail)";
    }
}
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("formResult");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        result.style.color = "red";
        result.textContent = "All fields are required!";
        return;
    }

    if (!emailPattern.test(email)) {
        result.style.color = "red";
        result.textContent = "Please enter a valid email address!";
        return;
    }

    result.style.color = "green";
    result.textContent = "Form submitted successfully!";
});
