var TextRotate = function(element, toRotate, period, end) {
    var loopNum, text, isDeleting;
    loopNum = 0;
    text = '';
    isDeleting = false;
    period = parseInt(period, 10) || 200;
    end = end || '.';

    var tick = function() {
        var i, delta, fullText;
        i = loopNum % toRotate.length;
        fullText = toRotate[i] + end;

        if (isDeleting) {
            text = fullText.substring(0, text.length - 1);
        } else {
            text = fullText.substring(0, text.length + 1);
        }

        element.innerHTML = text;
        delta = 100 - Math.random() * 50;

        if (isDeleting) {
            delta /= 2;
        }

        if (!isDeleting && text === fullText) {
            isDeleting = true;
            delta = period;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            loopNum++;
            delta = 500;
        }

        setTimeout(tick, delta);
    };
    tick();
};

window.onload = function() {
    var elements, windowHeight, line, scrolled;

    elements = document.getElementsByClassName('text-rotate');
    for (var i = 0; i < elements.length; i++) {
        var element, toRotate, period;
        element = elements[i];
        toRotate = element.innerHTML
            .replace(/(\r\n|\n|\r|\t|\  )/gm, '')
            .split(',');
        period = element.getAttribute('data-period');
        end = element.getAttribute('data-end');
        if (toRotate) {
            TextRotate(element, toRotate, period, end);
        }
    }

    line = document.getElementsByClassName('line')[0];

    var checkHeight = function() {
        windowHeight = window.innerHeight;
    };
    checkHeight();

    var checkLine = function(ev) {
        scrolled = document.body.scrollTop;
        if (scrolled < windowHeight) {
            line.setAttribute('hide', true);
        } else {
            line.setAttribute('hide', false);
        }
    };
    checkLine();

    window.addEventListener('scroll', checkLine, false);
    window.addEventListener('resize', checkHeight, false);
};
