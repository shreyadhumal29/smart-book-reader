function askAI() {
    let q = document.getElementById("question").value.toLowerCase();
    let answer = "";

    if (q.includes("python") || q.includes("py")) {
        answer = "Python is a powerful programming language used in AI, web, and automation.";
    } 
    else if (q.includes("marketing")) {
        answer = "Digital marketing means promoting products using online platforms like social media.";
    } 
    else if (q.includes("engineering")) {
        answer = "Engineering is about designing and building systems using science and math.";
    }
    else if (q.includes("hello") || q.includes("hi")) {
        answer = "Hello! 😊 How can I help you today?";
    }
    else {
        answer = "I’m still learning 🤖 try asking about python, marketing, or engineering!";
    }

    document.getElementById("answer").innerText = answer;
}