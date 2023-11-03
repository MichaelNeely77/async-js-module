const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
posData => {
  setTimeout(() => {
    console.log(posData);
    }, 2000)
  },
      error => {
    console.log(error);
      }
  );
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);