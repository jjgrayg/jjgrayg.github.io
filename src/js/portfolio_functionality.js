var accordianItems = [];
var activeItem;
var done = false;

let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

function observerFn(entries, observer) {
    
}

let observer = new IntersectionObserver(observerFn, observerConfig);

window.onload = function() {
    accordianToAnimate = document.getElementById("accordian").querySelectorAll(".accordian-item");
    accordianItems = Array.from(document.getElementById("accordian").querySelectorAll(".accordian-item"));
    activeItem = document.getElementById("1");
    console.log(accordianItems)

    //Animations!
    for (var i = 0; i < accordianItems.length; ++i) {
        observer.observe(accordianItems[i])
    }

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
                console.log(this.classList)
            }
        })
    })

    // if (!done) {
    //     var id = null;
    //     var startOpacity = 0;
    //     clearInterval(id);
    //     var opacity = startOpacity;
    //     id = setInterval(frame, 500);
    //     function frame() {
    //         for(var i = 0; i < accordianToAnimate.length; ++i) {
    //             var elem = accordianToAnimate[i]
    //             elem.style.opacity = startOpacity;
    //             console.log(i);
    //             while (opacity < 1){
    //                 opacity += .01;
    //                 elem.style.opacity = opacity;
    //                 console.log(opacity)
    //             }
    //             if (opacity === 1) {
    //                 clearInterval(id);
    //             }
    //         }
    //         opacity = startOpacity;
    //         startOpacity -= 5;
    //     }
    // }
    // done = true;
}