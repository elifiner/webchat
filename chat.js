function submitMessage() {
    var text = document.getElementById("message").value;
    var history = document.getElementById("history");
    var item = document.createElement("p");
    item.innerHTML = text;
    history.appendChild(item);
    history.scrollTop = history.scrollHeight;
    document.getElementById("message").value = "";
}
