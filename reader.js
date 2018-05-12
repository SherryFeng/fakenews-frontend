console.log("in reader");
var pTags = document.getElementsByTagName("P");
var i;
var total = "";
for(i = 0; i < pTags.length; i++){
  total += pTags[i].textContent + '\n';
}
chrome.storage.sync.set({page_content: total}, function() {
  console.log("Page content set to \n" + total);
});
