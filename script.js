// Function to toggle between view and edit mode for personal information
function toggleEdit(sectionId) {
    var content = document.getElementById("".concat(sectionId, "-content"));
    var edit = document.getElementById("".concat(sectionId, "-edit"));
    if (content && edit) {
        if (content.style.display === "none") {
            content.style.display = "block";
            edit.style.display = "none";
        }
        else {
            content.style.display = "none";
            edit.style.display = "block";
        }
    }
}
// Function to save the edited personal information
function saveInfo() {
    var firstNameInput = document.getElementById("edit-first-name");
    var lastNameInput = document.getElementById("edit-last-name");
    var emailInput = document.getElementById("edit-email");
    var phoneInput = document.getElementById("edit-phone");
    var addressInput = document.getElementById("edit-address");
    var linkedinInput = document.getElementById("edit-linkedin");
    if (firstNameInput && lastNameInput && emailInput && phoneInput && addressInput && linkedinInput) {
        var firstNameDisplay = document.getElementById("first-name");
        var lastNameDisplay = document.getElementById("last-name");
        var emailDisplay = document.getElementById("email");
        var phoneDisplay = document.getElementById("phone");
        var addressDisplay = document.getElementById("address");
        var linkedinDisplay = document.getElementById("linkedin");
        if (firstNameDisplay)
            firstNameDisplay.innerText = firstNameInput.value;
        if (lastNameDisplay)
            lastNameDisplay.innerText = lastNameInput.value;
        if (emailDisplay)
            emailDisplay.innerText = emailInput.value;
        if (phoneDisplay)
            phoneDisplay.innerText = phoneInput.value;
        if (addressDisplay)
            addressDisplay.innerText = addressInput.value;
        if (linkedinDisplay) {
            linkedinDisplay.href = linkedinInput.value;
            linkedinDisplay.innerText = linkedinInput.value;
        }
        toggleEdit("personal-info");
    }
}
// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    }
}
// Function to add a new skill to the skills list
function addSkill() {
    var skillInput = prompt("Enter a new skill:");
    if (skillInput) {
        var skillList = document.getElementById("skills-list");
        if (skillList) {
            var newSkill = document.createElement("li");
            newSkill.innerText = skillInput;
            skillList.appendChild(newSkill);
        }
    }
}
