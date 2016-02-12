# README #

### What is this repository for? ###

Repository for the [garbagepla.net](http://www.garbagepla.net) frontend. This responsive layout adds a top bar for navigation and a bottom bar for displaying map feature data.

### How to get started? ###

Just open /html/index.html in your browser. If you want to build for distribution install gulp with the dependancies (sorry, no package.json yet) cd to to the root dir and type `gulp`.

### Contributing

When adding a new js function to the code, add a comment about what it does. Build with gulp to test.

If you want to cnotribute to a specific todo below, the first thing you should do is open an issue and you'll be assigned to the issue.

### TODO

### Mobile
- [ ] fix the close layers control button reloads page bug

### Side panel
- [ ] fix differing line height between form elements (`<input>`, `<textarea>`, `.tagsinput`, etc)
- [ ] fix the tagsinput input resizing
- [ ] image upload restriction if user is not logged in

#### Bottom panel
- [ ] vertical scroll inside each column that is independant of other columns scroll

#### Map actions
- [ ] make the map add new markers instead of reloading everything in the current view when map moves

### General coding, coding style, code review
- [ ] templating with [JavaScript Templates](https://github.com/blueimp/JavaScript-Templates);
- [ ] make the code overall less redundant (loading forms elements and building lists for `<select>` )

#### Future prospects
- [ ] move to bootstrap v4 with [cards](http://v4-alpha.getbootstrap.com/components/card/) in the bottom panel
- [ ] localized calendar, tag cloud and gallery in the bottom bar

Current issues for this branch [issues](https://github.com/garbageplanet/web-ui/labels/branch%3Abottom-bar).

#### Licence
This code is available under the MIT licence but some parts have a different copyright information, see [this file](https://github.com/garbageplanet/web-ui/blob/dev/license.md).