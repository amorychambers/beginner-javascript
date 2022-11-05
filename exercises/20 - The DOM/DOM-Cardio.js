// Make a div

const contentWrapper = document.createElement('div');

// add a class of wrapper to it

contentWrapper.classList.add('wrapper');

// put it into the body

document.body.appendChild(contentWrapper);

// make an unordered list

const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them

const listItems = `<li>One</li>
<li>Two</li>
<li>Three</>`;

myList.innerHTML = listItems;

// put that list into the above wrapper

contentWrapper.appendChild(myList);

// create an image

const sickPic = document.createElement('img');

// set the source to an image

sickPic.src =
  'https://i.pinimg.com/originals/6f/d1/9d/6fd19da242934ad85f1c8e5ff9369128.jpg';

// set the width to 250

sickPic.width = 250;

// add a class of cute

sickPic.classList.add('cute');

// add an alt of Cute Puppy

sickPic.alt = 'Cute Cat in Fact';

// Append that image to the wrapper

contentWrapper.appendChild(sickPic);

// with HTML string, make a div, with two paragraphs inside of it

const someText = document.createElement('div');
someText.innerHTML =
  // put this div before the unordered list from above

  contentWrapper.insertAdjacentElement('afterbegin', someText);

// add a class to the second paragraph called warning

someText.innerHTML = `<p>Here's some saucy text</p>
<p class='warning'>And here's a little more</p>`;

// remove the first paragraph

contentWrapper.removeChild(someText);

const myHTML = `<div>
<p>Here's some saucy text</p>
<p>And here's a little more</p>
</div>`;

const fragmentHTML = document.createRange().createContextualFragment(myHTML);
contentWrapper.insertBefore(fragmentHTML, myList);
contentWrapper.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `<div class='playerCard'>
  <h2>${name} - ${age}</h2>
  <p> They are ${height} cm tall and ${age} years old. In dog years this person would be ${
    age * 7
  }. That would be a tall dog!<br>
  <button class='delete'} type='button'>Delete Card</button></p>`;
}

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard

const anne = generatePlayerCard('anne', 25, 180);
const sasha = generatePlayerCard('sasha', 24, 175);
const marcy = generatePlayerCard('marcy', 24, 175);
const sproog = generatePlayerCard('sproog', 23, 100);

// append those cards to the div

cards.innerHTML = anne;
cards.insertAdjacentHTML('beforeend', sasha);
cards.insertAdjacentHTML('beforeend', marcy);
cards.insertAdjacentHTML('beforeend', sproog);

// put the div into the DOM just before the wrapper element

contentWrapper.insertAdjacentElement😅('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function deleteCard(e) {
  const selectedCard = e.currentTarget;
  selectedCard.closest('.playerCard').remove();
}

const buttons = document.querySelectorAll('.delete');
buttons.forEach((button) => button.addEventListener('click', deleteCard));

// select all the buttons!
// make out delete function
// loop over them and attach a listener
