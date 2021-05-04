window.onload = function() {
    var id = null;
    var elem = document.getElementById("banner-text");
    var opacity = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (opacity == 1) {
        clearInterval(id);
        } else {
        opacity += .01;
        elem.style.opacity = opacity;
        }
    }
    
    accordianItems = Array.from(document.getElementById("accordian").querySelectorAll(".accordian-item"));
    activeItem = document.getElementById("1");

    accordianItems.forEach( function(item) {
        item.addEventListener('click', function() {
            
            if (!this.classList.contains('currently-viewed')) {
                //Open accordian entry for clicked item
                this.classList.remove('accordian-item');
                this.classList.add('currently-viewed');
                var text = this.getElementsByClassName('not-viewed')
                text[0].classList.remove('not-viewed');

                //Hide the actively viewed
                if (activeItem != undefined) {
                    activeItem.classList.remove('currently-viewed');
                    activeItem.classList.add('accordian-item');
                    var activeText = activeItem.getElementsByClassName('text');
                    activeText[0].classList.add('not-viewed');
                }

                //Change actively viewed
                activeItem = this;
            } else {
                this.classList.remove('currently-viewed');
                this.classList.add('accordian-item');
                var text = this.getElementsByClassName('text');
                text[0].classList.add('not-viewed');
                activeItem = undefined;
            }
        })
    })
}