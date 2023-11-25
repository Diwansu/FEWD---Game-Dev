const btn3=document.getElementById("button3")
 


const userDetailsForm = document.querySelector("#playerForm");
const usernameInput = document.querySelector("#name");
const nicknameInput = document.querySelector("#nickname");
const button = document.querySelector("#playbutton");

userDetailsForm.onsubmit = function (event) {
    event.preventDefault();
    handleUserDetailsFormSubmit();
};

button.onclick = () => {
    userDetailsForm.submit();
};

function handleUserDetailsFormSubmit() {
    const Username = usernameInput.value.trim();
    const Nickname = nicknameInput.value.trim();

    if (Username !== "" && Nickname !== "") {
        location.href='./play.html'
        localStorage.setItem("username", Username);
        localStorage.setItem("nickname", Nickname);
        location.href = "play.html";
    } else {
        alert("Oh, Typist..Please Don't feel lazy");
    }
}

