document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const contentDivs = document.querySelectorAll('#content > div');

    menuLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = link.getAttribute("data-content");

            
            contentDivs.forEach((div) => div.classList.remove('active'));
            document.getElementById(contentId).classList.add('active');
        });
    });
});