function onload() {
}

function submitMessage() {
    text = document.getElementById("message").value;
    history = document.getElementById("history");
    item = document.createElement("p");
    item.innerHTML = text;
    history.appendChild(item);
    history.scrollTop = history.scrollHeight;
    document.getElementById("message").value = "";
}

onload();
