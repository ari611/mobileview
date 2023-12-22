window.addEventListener('scroll', function() {
    if (window.innerWidth <= 768) {
        var scatterContainers = document.querySelectorAll('.scatterContainer');
        var nailPolishBottle = document.querySelector('.nail-polish-bottle');
        var lid = nailPolishBottle.querySelector('.lid');
        var lidText = lid.querySelector('p');
        var screenPosition = window.innerHeight / 2;

        scatterContainers.forEach(function(container) {
            var containerPosition = container.getBoundingClientRect().top;
            toggleVisibilityOnScroll(container, containerPosition, screenPosition, 'mobile-view');
        });

        var bottlePosition = nailPolishBottle.getBoundingClientRect().top;
        toggleVisibilityOnScroll(nailPolishBottle, bottlePosition, screenPosition, 'mobile-view');
        toggleVisibilityOnScroll(lid, bottlePosition, screenPosition, 'mobile-view');
        toggleVisibilityOnScroll(lidText, bottlePosition, screenPosition, 'mobile-view');
    }
});

function toggleVisibilityOnScroll(element, elementPosition, screenPosition, className) {
    if (elementPosition < screenPosition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}
