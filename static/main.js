var form = document.getElementById("contact-us-form");
function toggleHiddenAria(id) {
    var focusItem = document.getElementById(id);
    if ((focusItem === null || focusItem === void 0 ? void 0 : focusItem.ariaHidden) == "false") {
        // console.log(focusItem?.ariaHidden);
        focusItem === null || focusItem === void 0 ? void 0 : focusItem.setAttribute("aria-hidden", "true");
    }
    else {
        // console.log(focusItem?.ariaHidden);
        focusItem === null || focusItem === void 0 ? void 0 : focusItem.setAttribute("aria-hidden", "false");
    }
}
function formSubmit(event) {
    console.log("Arrived!");
    var url = "http://127.0.0.1:8000/api/emails/";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    var data = new FormData(event.target);
    data.append("subject", "".concat(event.target.id));
    request.send(data);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", formSubmit);
