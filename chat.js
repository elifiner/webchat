function submitMessage() {
    var text = document.getElementById("message").value;
    var history = document.getElementById("history");
    var item = document.createElement("p");
    item.innerHTML = text.replace(/\n/g, "<br>");
    history.appendChild(item);
    history.scrollTop = history.scrollHeight;
    document.getElementById("message").value = "";
}

function onMessageKey() {
    submitTime = 0;
    var key = window.event.keyCode;
    var text = document.getElementById("message").value;
    if (key === 13 && text.match(/\n$/)) {
        submitMessage();
        this.event.preventDefault();
    }
}

var submitInterval = setInterval("autoSubmitMessage()", 1000);
var submitTime = 0;

function autoSubmitMessage() {
    submitTime += 1;
    if (submitTime > 2) {
        submitTime = 0;
        if (document.getElementById("message").value !== "") {
            submitMessage();
        }
    }
}
