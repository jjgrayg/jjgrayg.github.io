function openMenu() {
    var linkMenu = document.getElementById("link-menu");
    if (linkMenu.style.display !== "flex") {
        linkMenu.style.display = "flex";
    } else {
        linkMenu.style.display = "none";
    }
}

function closeMenu() {
    var linkMenu = document.getElementById("link-menu");
    linkMenu.style.display = "none";
}