const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  




// first way:

const animateFinishedPromise1 = alice1.animate(aliceTumbling, aliceTiming).finished

animateFinishedPromise1.then(() => {
  const animateFinishedPromise2 = alice2.animate(aliceTumbling, aliceTiming).finished
  animateFinishedPromise2.then(() => {
    const animateFinishedPromise3 = alice3.animate(aliceTumbling, aliceTiming).finished
  })
});


// second way:

const animateFinishedPromise = alice1.animate(aliceTumbling, aliceTiming).finished

animateFinishedPromise
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));


// third way:

async function animateAllAlices(){
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  alice3.animate(aliceTumbling, aliceTiming).finished;
}

animateAllAlices();


