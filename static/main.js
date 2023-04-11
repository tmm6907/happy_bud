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
// form?.addEventListener("Submit", async(e) => {
//     e.preventDefault();
//     try{
//         let data = new FormData(e.currentTarget);
//         let form_data = Object.fromEntries(data.entries());
//         console.log();
//     }
// })
