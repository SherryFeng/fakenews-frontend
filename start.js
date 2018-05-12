var start = document.getElementById('start');

var readCode = `
var pTags = document.getElementsByTagName("P");
var i;
var total = "";
for(i = 0; i < pTags.length; i++) {
  total += pTags[i].textContent;
}
chrome.storage.sync.set({page_content: total});
`;

start.onclick = function(element) {
      chrome.tabs.executeScript(
          {code: readCode},
          load);
};

function load() {
  var body = document.body;
  chrome.storage.sync.get('page_content', function(contents) {
    body.innerHTML = contents.page_content;
  });
}
