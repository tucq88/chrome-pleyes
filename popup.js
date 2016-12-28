'use strict';
// var app = chrome.runtime.getBackgroundPage();
function clickHandler(e) {
  var fontStyle = getPresetValue();

  if (fontStyle === '') {
    alert('Please select a preset!');
    return false;
  }

  chrome.tabs.executeScript({
    code: "var fontStyle = '" + fontStyle + "';",
    allFrames: true
  }, function(result) {
    chrome.tabs.executeScript({
      file: "inject.js",
      allFrames: true
    });
  });
}

function getPresetValue() {
  var radios = document.getElementsByName('preset');
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          // do whatever you want with the checked radio
          return radios[i].value;

          // only one radio can be logically checked, don't check the rest
          break;
      }
  }
  return '';
}

document.getElementById('changefont').addEventListener('click', clickHandler);
