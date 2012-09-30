function submitMessage() {
    text = document.getElementById('chatText').value;
    history = document.getElementById("history");
    item = document.createElement("p");
    item.innerHTML = text;
    history.appendChild(item);
    document.getElementById("chatText").value = "";
}
