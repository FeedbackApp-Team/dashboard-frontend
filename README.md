# Frontend for dashboard v01
## Changes:
- Removed script from single user HEAD! feedback page and icons change
    * ```<script src="https://kit.fontawesome.com/e9f50f9a1c.js" crossorigin="anonymous"></script>```
    * ```<i class="fas fa-star"></i>``` changed to ```<i class="icon-star"></i>```
- Javascript in this version:
    * In public/js/main.js is small javascript code for opening and closing sidenav menu, as well code to automaticly close or open menu depwnding on viewport width.
    * In teams-average-charts & single-user pages there is similar javascript code at bottom in script tag:
        * teams-average-charts - on load event progress bar fill animation, numberOfChartBars is function that calculates number of charts for graph on resize it also should fire oon open/close menu.
        * In single-user same scripts as above but also script for graph slider/carousel on smaller viewports.
- Html comented code removed
- CSS code cleaned. Unececery code removed
    
