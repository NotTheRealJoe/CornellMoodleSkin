// ==UserScript==
// @name         Moodle: Global Tweaks
// @version      0.1
// @description  Show moodle classes in the correct order in the sidebar
// @author       https://github.com/NotTheRealJoe
// @match        https://moodle.cornellcollege.edu/*
// ==/UserScript==

// Sort classes in sidebar
var d = new Date();
var possibleCourseElems = Array.from(document.getElementsByClassName("list-group-item list-group-item-action"));
var goodCourses = [];

possibleCourseElems.forEach(function(e) {
    if (e.href.includes("/course/view.php?") && e.getAttribute("data-key") != "coursehome") {
        e.parentNode.removeChild(e);
        if(e.innerText.includes(d.getFullYear())) {
            goodCourses.push(e);
        }
    }
})

goodCourses.sort(function(a, b) {
    var aO= parseInt(a.innerText.trim().substring(7,8));
    var bO= parseInt(b.innerText.trim().substring(7,8));
    return(aO - bO);
})


var after = document.querySelector('[data-key="mycourses"]');

goodCourses.forEach(function(course) {
    after.parentNode.insertBefore(course, after.nextSibling);
    after = course;
})


// Fix logo
document.getElementsByClassName("site-name hidden-sm-down")[0].innerHTML = '<img id="jt-cc-logo" src="https://secure.cornellcollege.edu/marketing/images/CClogo_Reversed.png" />';
