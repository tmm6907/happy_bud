const form = document.getElementById("contact-us-form")
function toggleHiddenAria(id: string) {
    var focusItem = document.getElementById(id);
     if (focusItem?.ariaHidden == "false"){
      // console.log(focusItem?.ariaHidden);
      focusItem?.setAttribute("aria-hidden", "true");
     }else{
      // console.log(focusItem?.ariaHidden);
      focusItem?.setAttribute("aria-hidden", "false");
     }
}

function formSubmit(event) {
    console.log("Arrived!")
    var url = "http://127.0.0.1:8000/api/emails/";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    let data = new FormData(event.target)
    data.append("subject", `${event.target.id}`)
    request.send(data); 
}
form?.addEventListener("submit", formSubmit);
  