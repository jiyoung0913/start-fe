let $btn = document.getElementById('btn');
let $box = document.getElementById('box');

const term = 30;

function pressBtn() {
  let max = document.getElementById('max').value; //최대
  let min = document.getElementById('min').value; //최소
  let transMax = Number.parseInt(max); //int로 변환
  let transMin = Number.parseInt(min);
  let range = transMax - transMin;

  let stopNum = Math.floor(Math.random() * range) + transMin; //난수
  let sub = Math.floor(Math.random() * 30); //시작값을 임의로 정함
  let startNum = stopNum - sub;

  let increase = setInterval(() => {
    if (stopNum > startNum) {
      //난수가 시작 숫자보다 작을 때.
      startNum++;
      $box.innerHTML = startNum;
      $btn.disabled = true;
    } else {
      $btn.disabled = false;
      clearInterval(increase);
    }
  }, term);
}

$btn.addEventListener('click', pressBtn);