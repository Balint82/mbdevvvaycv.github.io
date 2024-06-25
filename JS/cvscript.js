 window.addEventListener('DOMContentLoaded', function() {
            var aside = document.querySelector('aside');
            var img = document.getElementById('profilimg');
        
            function moveImage() {
                if (window.innerWidth < 1281) {
                    aside.insertBefore(img, aside.firstChild);
                } else {
                    document.body.insertBefore(img, document.querySelector('header'));
                }
            }
        
            moveImage();
        
            window.addEventListener('resize', moveImage);
        });


function switchLanguage() {
    var lang = document.getElementById('language-switcher').value;
    var elements = document.querySelectorAll('[data-lang-hu], [data-lang-en]');

    elements.forEach(function(element) {
        if (lang === 'hu') {
            element.innerText = element.getAttribute('data-lang-hu');
        } else {
            element.innerText = element.getAttribute('data-lang-en');
        }
    });
}
