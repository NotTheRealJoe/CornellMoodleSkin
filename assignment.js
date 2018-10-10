// ==UserScript==
// @name         Moodle: Assignment Page Tweaks
// @version      0.1
// @author       https://github.com/NotTheRealJoe
// @match        https://moodle.cornellcollege.edu/mod/assign/view.php?id=*
// ==/UserScript==

var now = new Date();
var due = new Date(document.getElementsByClassName('box boxaligncenter submissionsummarytable p-y-1')[0].firstChild.childNodes[1].childNodes[4].childNodes[3].innerHTML);

console.log(due);

var ms = Math.floor(due - now);

function format(milliseconds) {
    var hrs = Math.floor(milliseconds / 3600000);
    var mins = Math.floor((milliseconds - (hrs * 3600000)) / 60000);
    var secs = Math.floor((milliseconds - ((hrs * 3600000) + (mins * 60000))) / 100) / 10;

    return hrs + " hrs " + mins + " mins " + secs.toFixed(1).toString().padStart(4, '0') + " secs";
}

var targetElem = document.getElementsByClassName('box boxaligncenter submissionsummarytable p-y-1')[0].firstChild.childNodes[1].childNodes[6].childNodes[3];

window.setInterval(function() {
    if(ms < 0) {
        ms += 100;
    } else {
        ms-=100;
    }
    targetElem.innerHTML = format(ms);
}, 100);
