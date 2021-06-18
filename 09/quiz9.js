const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function showup(callback) {
  $log.value = callback;
}
$btn.addEventListener('click', () => {
  let url = $url.value;
  fetch(url)
    .then((res) => {
      res.text().then(showup);
    })
    .catch((error) => {
      showup(error);
    });
});