import "regenerator-runtime/runtime"; 

const counterElement = document.getElementById("counter");

const sleep = async (time) => new Promise((res) => {
  setTimeout(res, time * 1000);
});

const countToHundred = async (counterElement) => {
  for (let count = 1; count < 101; count++) {
    counterElement.innerText = count;
    await sleep(1);
  }
};

if (counterElement) {
  countToHundred(counterElement);
}
