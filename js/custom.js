let hasWebP = !1;
! function() {
    let A = new Image;
    A.onload = function() { hasWebP = !!(A.height > 0 && A.width > 0) }, A.onerror = function() { hasWebP = !1 }, A.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}();

function lazyImg(o) {
    return function() {
        function r(e) {
            //   e.onload = function() {
            //     e.classList.remove(o),
            //     e.classList.add("lazyloaded")
            //   },
            //e.dataset.lazybackground && (e.style.backgroundImage = "url(".concat(e.dataset.lazybackground, ")")),
            //e.referrerPolicy = "no-referrer",
            e.getAttribute("data-src") && (e.src = !hasWebP ? e.dataset.src.replace(/-rw$/, "") : e.dataset.src,
                "IntersectionObserver" in window && t.unobserve(e))
        }
        var t, e = document.querySelectorAll("." + o);
        if ("IntersectionObserver" in window) t = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    0 < e.intersectionRatio && r(e.target)
                })
            }, {
                rootMargin: "0px",
                threshold: 0
            }),
            e.forEach(function(e) {
                t.observe(e)
            });
        else
            for (var n = 0; n < e.length; n++) r(e[n])
    }
}

//Change active navigation

const navItems = document.querySelectorAll('.nav-item');
if (navItems.length > 0) {
    navItems.forEach(item => {
        item.addEventListener('click', function() {

            navItems.forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

}


function closeImgBot(event) {

    var closeBtn = event.target;
    var parentImgBot = closeBtn.closest('.g-imgbot');

    if (parentImgBot) {
        parentImgBot.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var closeButtons = document.querySelectorAll('.rn-close');
        closeButtons.forEach(function(button) {
            button.style.display = 'block';
            button.addEventListener('click', closeImgBot);
        });
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {

        document.addEventListener("DOMContentLoaded", lazyImg("lzl"), {
            passive: true
        });
  
        function PartnerTopLeft() {
            var link = document.getElementById('partner1');
            link.href = 'https://da88.com/?a=exo_566f64993b8461c988c29c522527afa1&utm_source=ldp90phut&utm_medium=topbanner-700x70-1&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/700x70.gif';
        }
  
        function PartnerTopRight() {
            var link = document.getElementById('partner2');
            link.href = 'https://da88.com/?a=exo_1fc43c5e53a1ab31668f8dd6d00417c7&utm_source=ldp90phut&utm_medium=topbanner-700x70-2&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/700x70.gif';
        }
  
        function PartnerBottomUp() {
            var link = document.getElementById('partner3');
            link.href = 'https://fabet.com/?a=exo_e1b1fb657c010d2d90fd0453a9f356fd&utm_source=ldp90phut&utm_medium=catfish-1095x100-1&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/fabet-1330x90.gif';
        }
  
        function PartnerBottomDown() {
            var link = document.getElementById('partner4');
            link.href = 'https://lucky88.com/?a=exo_a8a6def4e75cfcbc9fb4fd68946a21b6&utm_source=ldp90phut&utm_medium=catfish-1095x100-2&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/lucky88-1330x90.gif';
        }
        
        function PartnerBottomUpM() {
            var link = document.getElementById('partner5');
            link.href = 'https://fabet.com/?a=exo_e1b1fb657c010d2d90fd0453a9f356fd&utm_source=ldp90phut&utm_medium=catfish-1095x100-1&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/fabet-728x90.gif';
        }
  
        function PartnerBottomDownM() {
            var link = document.getElementById('partner6');
            link.href = 'https://lucky88.com/?a=exo_a8a6def4e75cfcbc9fb4fd68946a21b6&utm_source=ldp90phut&utm_medium=catfish-1095x100-2&utm_campaign=cpd&utm_term=live';
  
            var img = link.querySelector('img');
            img.src = 'images/Lucky88-728x90.gif';
        }
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {

    const body = document.querySelector("body");
    const bg_overlay = document.querySelector(".bg-overlay");
    const a = document.querySelector(".modal");
    document.addEventListener("click", function(e) {

        if (e.target.closest(".bg-overlay") || e.target.closest(".modal")) {
            body.classList.remove("overflow-hide");
            bg_overlay.classList.remove("active");
            a.style.display = 'none';
        }

    }, { passive: true });

    setTimeout(function() {
        a.style.display = 'block';
        body.classList.add("overflow-hide");
        bg_overlay.classList.add("active");
    }, 500);
}, { passive: true });