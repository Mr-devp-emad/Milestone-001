// Function to toggle between view and edit mode for personal information
function toggleEdit(sectionId: string): void {
    const content = document.getElementById(`${sectionId}-content`) as HTMLElement;
    const edit = document.getElementById(`${sectionId}-edit`) as HTMLElement;
    if (content && edit) {
        if (content.style.display === "none") {
            content.style.display = "block";
            edit.style.display = "none";
        } else {
            content.style.display = "none";
            edit.style.display = "block";
        }
    }
}

// Function to save the edited personal information
function saveInfo(): void {
    const firstNameInput = document.getElementById("edit-first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("edit-last-name") as HTMLInputElement;
    const emailInput = document.getElementById("edit-email") as HTMLInputElement;
    const phoneInput = document.getElementById("edit-phone") as HTMLInputElement;
    const addressInput = document.getElementById("edit-address") as HTMLInputElement;
    const linkedinInput = document.getElementById("edit-linkedin") as HTMLInputElement;

    if (firstNameInput && lastNameInput && emailInput && phoneInput && addressInput && linkedinInput) {
        const firstNameDisplay = document.getElementById("first-name") as HTMLElement;
        const lastNameDisplay = document.getElementById("last-name") as HTMLElement;
        const emailDisplay = document.getElementById("email") as HTMLElement;
        const phoneDisplay = document.getElementById("phone") as HTMLElement;
        const addressDisplay = document.getElementById("address") as HTMLElement;
        const linkedinDisplay = document.getElementById("linkedin") as HTMLAnchorElement;

        if (firstNameDisplay) firstNameDisplay.innerText = firstNameInput.value;
        if (lastNameDisplay) lastNameDisplay.innerText = lastNameInput.value;
        if (emailDisplay) emailDisplay.innerText = emailInput.value;
        if (phoneDisplay) phoneDisplay.innerText = phoneInput.value;
        if (addressDisplay) addressDisplay.innerText = addressInput.value;
        if (linkedinDisplay) {
            linkedinDisplay.href = linkedinInput.value;
            linkedinDisplay.innerText = linkedinInput.value;
        }

        toggleEdit("personal-info");
    }
}

// Function to toggle the visibility of sections
function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId) as HTMLElement;
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    }
}

// Function to add a new skill to the skills list
function addSkill(): void {
    const skillInput = prompt("Enter a new skill:");
    if (skillInput) {
        const skillList = document.getElementById("skills-list") as HTMLUListElement;
        if (skillList) {
            const newSkill = document.createElement("li");
            newSkill.innerText = skillInput;
            skillList.appendChild(newSkill);
        }
    }
}
