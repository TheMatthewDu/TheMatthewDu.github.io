const coll = document.getElementsByClassName("collapsible");

function click_listener_func() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }

    const tag = this.children[0];
    if (tag.classList.contains("fa-caret-right")) {
        tag.classList.replace("fa-caret-right", "fa-caret-down");
    } else {
        tag.classList.replace("fa-caret-down", "fa-caret-right");
    }
}

let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", click_listener_func);
}
