function updateBio() {
    
    let name = prompt("Enter your name:");
    let phone = prompt("Enter your phone number:");
    let email = prompt("Enter your email:");
    let address = prompt("Enter your address:");
    let hobbies = prompt("Enter your hobbies (comma-separated):");

    if (name.trim() === "") {
        alert("Name cannot be empty. Please enter a valid name.");
        return;
    }

    alert(`Bio Collected:
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Address: ${address}
    Hobbies: ${hobbies}`);

    console.log(`User Bio:
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Address: ${address}
    Hobbies: ${hobbies}`);

    document.getElementById("bio-name").innerText = "1. Name: " + name;
    document.getElementById("bio-phone").innerText = "2. Phone: " + phone;
    document.getElementById("bio-email").innerText = "3. Email: " + email;
    document.getElementById("bio-address").innerText = "4. Address: " + address;
    document.getElementById("bio-hobbies").innerText = "Hobbies: " + hobbies;

    document.getElementById("contact-email").innerText = "Email: " + email;
    document.getElementById("contact-phone").innerText = "Phone: " + phone;
    document.getElementById("contact-address").innerText = "Address: " + address;
}

function changeProfilePicture() {
  
    let imageURL = prompt("Enter the URL of your profile picture:");

    if (imageURL.trim() === "") {
        alert("Please enter a valid URL for the profile picture.");
        return;
    }

    let imgElement = document.getElementById("profile-img");
    imgElement.src = imageURL;
}
