let count = 0;

function inc() {
  count++;
  document.getElementById('count').innerHTML = count;
}

function dec() {
  count--;
  document.getElementById('count').innerHTML = count;
}

function reset() {
  count = 0;
  document.getElementById('count').innerHTML = count;
}
