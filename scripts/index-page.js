const comments = [
    {
      name: "Isaac Tadesse",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date: new Date("10/20/2023"),
    },
    {
      name: "Christina Cabrera",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      date: new Date("10/28/2023"),
    },
    {
      name: "Victor Pinto",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date: new Date("11/02/2023"),
    },
  ];

  // const listEl = document.getElementById('list');

const commentForm = document.getElementById('comment-form');
const commentSect = document.getElementById('comment__section');
const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');

comments.forEach(displayComment);

  // const commentSection = document.getElementById('comments-form');
  // const newForm = document.createElement('form');
  // newForm.id = 'new-form';
  // const input = document.createElement('input');
  // const button = document.createElement('button');


function displayComment(comment) {
  const nameEl = createDiv('name-input__info');
  const commentEl = createDiv('comment-input__info');
  nameEl.append(commentEl); 
}
function displayComment(comment) {
  const commentEl = document.createElement('div');
  commentEl.classList.add('comment');
  commentEl.textContent = comment.comment;
  // comment.append(commentEl);
}


function display(comment) {
  const div = document.createElement("div");
  div.textContent = `${comment.name}`
  commentSection.append(div);
}

function createDiv(className, textContent) {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = textContent;
  return div;
}

commentSect.addEventListener('submit' , (e) => {
  e.preventDefault();
  const name = nameInput.textContent;
  const comment = commentInput.textContent; 
  const newComment = {
    name: '' ,
    comment: '' ,
    date: new Date () ,
  }

  comments.push(newComment);
  displayComment(newComment);
// Not sure if I should push new comment or just comment
  render();
});

function render() {
  commentSect.replaceChildren();
  comments.forEach(displayComment);
}


  
  



//  for Date's
const date = new Date("08/14/2024")
console.log(date.toLocaleDateString()) // output: '8/14/2024'


// Notes

// for (const comment of comments){
//   display (comment);
// }
// ^^ no idea what thats about

// commentsEl.addEventListener("comment" , (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name-input').value;
//   const comment = document.getElementById('comment-input').value;
// }
// )

