var spacer;

function openWindow() {
  chrome.windows.create({
    url: 'win.html',
    width: 200,
    height: 200,
    type: 'panel'
  }, function() {
    spacer.style.height = '20px';
  });
}

function onBoomClick() {
  openWindow();
  spacer.style.height = '300px';
}

function init() {
  document.querySelector('button').addEventListener('click', onBoomClick);
  spacer = document.getElementById('spacer');
}

window.onload = init;
