function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
        return true;
    }
}

function getColor(num) {
    if (isPrime(num)) return '#E74C3C'
    if (num % 2 === 0) return '#006B54'
    return '#F39C12'
}

const container = document.getElementById('number-container');

for (let i = 0; i <= 101; i++) {
  const box = document.createElement('div');
  box.classList.add('number-box');
  box.textContent = i;
  box.style.backgroundColor = getColor(i);
  container.appendChild(box);
}
