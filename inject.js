'use strict';
// this is the code which will be injected into a given page...

(function() {
    // just place a div at top right
    // var div = document.createElement('div');
    // div.style.position = 'fixed';
    // div.style.top = 0;
    // div.style.right = 0;
    // div.textContent = 'Injected!';
    // document.body.appendChild(div);

    // alert('inserted self... giggity');

    // Create the <style> tag
    var style = document.createElement("style");

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")

    // WebKit hack :(
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);

    var cssRulesAppended = '';

    if (fontStyle === 'default') {
      cssRulesAppended = "@import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,700'); " +
        "body p { font-family: 'Crimson Text', serif; font-size: 24px !important; line-height: 1.5625 !important; } " +
        "p > code { font-size: initial; }";
      console.log('aaa');
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = cssRulesAppended;
    } else {
      style.appendChild(document.createTextNode(cssRulesAppended));
    }

})();
