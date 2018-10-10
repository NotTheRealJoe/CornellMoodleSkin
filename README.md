# CornellMoodleSkin
A cleaner, darker theme for Cornell College moodle

## What?
Before:
![Moodle Before](https://people.cornellcollege.edu/jtortorello19/moodle/before.png)
After:
![Moodle After](https://people.cornellcollege.edu/jtortorello19/moodle/after.png)

## How
You need to be able to modify the CSS and JavaScript on Moodle. The recommended method for doing this is with a browser
plugin.

Consider Stylus ([Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne),
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)) for CSS, and TamperMonkey
([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)) or GreaseMonkey
([Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)) for JavaScript. Your JS plugin should be able
to accept scripts in the UserScript format. Anything that can accept standard CSS is fine for the CSS.

The JavaScript files already have comments that can be read by your plugin to set them to the right pages. You need to
import all of the JS files from this repository for it to work properly. When importing the CSS file, set it to apply to
all pages on the domain moodle.cornellcollege.edu.
