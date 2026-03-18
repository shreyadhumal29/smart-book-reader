async function askAI() {
    let q = document.getElementById("question").value.toLowerCase();
    let chatBox = document.getElementById("chatMessages");

    if (q === "") return;

    chatBox.innerHTML += `<div class="user-msg">${q}</div>`;
    document.getElementById("question").value = "";

    let answer = "";

    // smart responses
    if (q.includes("hello") || q.includes("hi")) {
        answer = "Hello! 😊 How can I help you?";
    } 
    else if (q.includes("python")) {
        answer = "Python is a powerful programming language used in AI, web, and automation.";
    } 
    else if (q.includes("html")) {
        answer = "HTML is used to structure web pages.";
    }
    else if (q.includes("css")) {
        answer = "CSS is used to style web pages.";
    }
    else if (q.includes("javascript")) {
        answer = "JavaScript makes websites interactive.";
    }
    else if (q.includes("your name")) {
        answer = "I am your Smart AI Assistant 🤖";
    }
    else {
        answer = "Hmm 🤔 I’m still learning! Try asking about Python, HTML, CSS, or JavaScript.";
    }

    // typing effect
    let botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    chatBox.appendChild(botMsg);

    let i = 0;
    let speed = 20;

    function typeWriter() {
        if (i < answer.length) {
            botMsg.innerHTML += answer.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    chatBox.scrollTop = chatBox.scrollHeight;
}
// load saved image
let savedImg = localStorage.getItem("profilePic");
if (savedImg) {
    document.getElementById("profilePic").src = savedImg;
}

// upload image
function uploadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function() {
        let imgData = reader.result;
        document.getElementById("profilePic").src = imgData;

        // save image
        localStorage.setItem("profilePic", imgData);
    };

    reader.readAsDataURL(file);
}