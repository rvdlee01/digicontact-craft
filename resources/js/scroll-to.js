/* Scroll to ID */
var myLinks = document.getElementsByTagName("a");
for (var i = 0; i < myLinks.length; i++) {
    myLinks[i].onclick = function (event) {
        if (this.href.indexOf('#') > -1) {
            event.preventDefault();
            const element = document.getElementById((this.getAttribute("href").replaceAll("#", "")));
            SmoothVerticalScrolling(element, 500, 'top')
        }
    };
}

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top - 150;
    var eAmt = eTop / 100;
    var curTime = 0;

    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if (where === "center" || where === "")
        window.scrollBy(0, eAmt / 2);
    if (where === "top")
        window.scrollBy(0, eAmt);
}