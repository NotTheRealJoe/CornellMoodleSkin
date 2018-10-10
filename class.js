// ==UserScript==
// @name         Moodle: Class Page Visual Tweaks
// @version      0.1
// @author       https://github.com/NotTheRealJoe
// @match        https://moodle.cornellcollege.edu/course/view.php?id=*
// @match        https://moodle.cornellcollege.edu/mod/assign/view.php?id=*
// ==/UserScript==

var elem = document.getElementsByClassName("page-header-headings")[0].firstChild;
var parts = elem.innerHTML.split(":");

var endParts = ""
for (var i = 1; i < parts.length; i++) {
    if(i > 1) {
        endParts = endParts += ": ";
    }
    endParts = endParts + parts[i].trim();
}
elem.innerHTML = endParts + '<br /><span class="jt-courseCode">' + parts[0] + '</span>';
