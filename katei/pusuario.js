const user = {
    name: "Koga",
    email: "koga.exemplo@email.com",
    birthdate: "21/11/2000",
    bio: "Apaixonada por tecnologia e desenvolvimento web.",
    profilePic: "https://via.placeholder.com/150" 
};

function loadUserProfile() {
    document.getElementById('user-name').innerText = user.name;
    document.getElementById('user-email').innerText = user.email;
    document.getElementById('user-birthdate').innerText = user.birthdate;
    document.getElementById('user-bio').innerText = user.bio;
    document.getElementById('profile-pic').src = user.profilePic;
}

document.addEventListener('DOMContentLoaded', loadUserProfile);