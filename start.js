var start = document.getElementById('start');

start.onclick = function(element) {
      chrome.tabs.executeScript(
          {file: 'reader.js'},
          load);
};

function load() {
  var body = document.body;
  chrome.storage.sync.get('page_content', function(contents) {
    body.innerHTML = contents.page_content;
  });
}
