function speak() {
  chrome.tabs.executeScript({
    file: 'speaking.js'
  });
});

document.getElementByID('hi').addEventListener('click', speak);
