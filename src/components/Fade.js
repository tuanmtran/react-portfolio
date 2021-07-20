const targets = doceument.querySelectorAll(".js-show-on-scroll");

const observer = new IntersectionObserver(callback);

targets.forEach(function(target) {
    target.classlist.add("opacity-0")

    observer.observe(target);
});

const callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classlist.add("motion-safe:animate-fadeIn");    
        }
        else {
            entry.target.classlist.remove("motion-safe:animate-fadeIn");
        }
    });
};