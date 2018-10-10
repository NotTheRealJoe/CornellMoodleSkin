// ==UserScript==
// @name         Moodle: Dashboard Tweaks
// @version      0.1
// @description  Show only moodle classes from this year on the homepage, and show them in the correct chronological order
// @author       https://github.com/NotTheRealJoe
// @match        https://moodle.cornellcollege.edu/
// @grant        none
// ==/UserScript==


var courseListParent = document.getElementsByClassName("courses frontpage-course-list-enrolled")[0];
var courses = Array.from(courseListParent.childNodes);
var goodCourses = [];

while(courseListParent.childNodes.length > 0) {
    courseListParent.removeChild(courseListParent.childNodes[0]);
}

courses.forEach(function(course) {
    if(course.firstChild.firstChild.innerText != null && course.firstChild.firstChild.innerText.includes("2018")) {
        course.classList.remove("even");
        course.classList.remove("odd");
        if(parseInt(course.firstChild.firstChild.innerText.substring(7,8)) % 2 == 0) {
            course.classList.add("even");
        } else {
            course.classList.add("odd");
        }
        goodCourses.push(course);
    } // else continue
})

goodCourses.sort(function(a, b) {
    var aBlock = parseInt(a.firstChild.firstChild.innerText.substring(7,8));
    var bBlock = parseInt(b.firstChild.firstChild.innerText.substring(7,8));
    return(aBlock - bBlock)
})

goodCourses.forEach(function(course) {
    courseListParent.appendChild(course);
})
