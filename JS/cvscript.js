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
