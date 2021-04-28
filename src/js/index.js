var id = null;
function dropBanner() {
    var elem = document.getElementById('dropdown-name');
    var elem2 = document.getElementById('fadein-dropdown-paragraph');
    var pos = -400;
    var opacity = 0.0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos += 2;
            opacity += 0.005;
            elem.style.top = pos + "px";
            elem.style.color = "rgba(255, 255, 255, " + opacity + ")";
            elem2.style.left = pos + "px";
            elem2.style.color = "rgba(255, 255, 255, " + opacity + ")";
        }
    }
}

window.addEventListener("load", dropBanner);