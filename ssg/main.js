// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';



const insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];

const insertY =[
  'the soup kitchen',
  'Disneyland',
  'the White House'
];

const insertZ = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
];



// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and crawled away

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);
let newStory = storyText;

function result() {
  let newStory = storyText;
  let yItem = randomValueFromArray(insertY);
  let xItem = randomValueFromArray(insertX);
  let zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace('300', weight);
    newStory = newStory.replace('pounds', 'stones');
    const temperature =  Math.round((94-32)*0.5556);
    newStory = newStory.replace('94', temperature);
    newStory = newStory.replace('fahrenheit', 'celsius');
  }

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);
  story.textContent = newStory;
  story.style.visibility = 'visible';

};



