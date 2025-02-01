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
  const date = new Date("08/14/2024")
  console.log(date.toLocaleDateString()) // output: '8/14/2024'

  // const listEl = document.getElementById('list');

  // const commentSection = document.getElementById('comments-form');
  // const newForm = document.createElement('form');
  // newForm.id = 'new-form';
  // const input = document.createElement('input');
  // const button = document.createElement('button');

// const commentForm = document.getElementById('comment-form');
const commentSect = document.getElementById('comment__section');
const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');
// const commentsCurrentEl = document.getElementById("comments-current");

comments.forEach(displayComment);

function displayComment(commentOutput) {
  // console.log('Displaying comment:', commentOutput); 
  const commentEl = document.createElement('div');
  commentEl.classList.add('comment__container');

  const nameDateContainer = document.createElement('div');
  nameDateContainer.classList.add('name-date__container');

  const nameEl = document.createElement('p');
  nameEl.classList.add('name__container');
  nameEl.innerText = commentOutput.name;
  nameDateContainer.appendChild(nameEl);

  const dateEl = document.createElement('p');
  dateEl.classList.add('date__container');

  const dateFormat = new Date(commentOutput.date).toLocaleDateString('en-US', {
    year: 'numeric' ,
    month: '2-digit' ,
    day: '2-digit' ,
  });

  dateEl.innerText = dateFormat;
  nameDateContainer.appendChild(dateEl);

  commentEl.appendChild(nameDateContainer);

  // const blankImageEl = document.createElement('div');
  // blankImageEl.classList.add('Image--blank');
  // commentEl.appendChild(blankImageEl);

  const imageEl = document.createElement('div');
  imageEl.classList.add('image__container');

  // imageEl.src = src;
  // imageEl.alt = alt;

  commentEl.appendChild(imageEl);

  const textEl = document.createElement('p');
  textEl.classList.add('text__container');
  textEl.innerText = commentOutput.comment;
  commentEl.appendChild(textEl);

  return commentEl;


// Comments 
}
function showComments () {
  let showComments = () => {
    const commentDisplay = document.querySelector(".comments-section");
    commentDisplay.replaceChildren();

    const sortedComments = [...comments].reverse();
    for (let i = 0; i < sortedComments.length; i++ ){
      const commentAll = displayComment(sortedComments[i]);
      commentDisplay.appendChild(commentAll);
    }
  };
  showComments();
}
showComments();

// Button
comments-form.addEventListener('submit' , (e) => {
  e.preventDefault();
  const date = new Date ();
  const newComment = {
    name: e.target.nameText.value,
    comment: e.target.commentText.value,
    // time: target.time.value,
    date: date.toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit',day: '2-digit',
    }),
  };

  comments.push(newComment);
  showComments();
});

// Date
function formatDate(date) {

}


// render();
// form.reset();

// render();

// function render() {
//   const commentSect = document.querySelector(".comments-section");
//   commentSect.replaceChildren();

//   comments.forEach(comment => {
//     const commentEl = displayComment(comment);
//     commentSect.appendChild(commentEl);
//   });
// }



// function createDiv(className, textContent) {
//   const div = document.createElement('div');
//   div.className = className;
//   div.textContent = textContent;
//   // console.log('Created div:', div);
//   return div;
// }
// function createImg(className, src, alt) {
//   const img = document.createElement("img");
//   img.className = className;
//   img.src = src;
//   img.alt = alt;
//   // console.log('Created Image:', img);
//   return img;
// }
// function displayComment(comment) {
//   // console.log("Displaying comment:", comment);
//   const commentEl = document.createElement('div');
//   commentEl.classList.add('comment');
//   commentEl.textContent = comment.comment;
//   // comment.append(commentEl);
// }

// PART 2

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const commentOutput = {
//     name: e.target.name.value,
//     comment: e.target.comment.value,
//     avatar: e.target.image.value,
//   };
// });

//   comments.push(commentOutput);
//   render();
//   form.reset();
// });

// function render() {
//   commentsCurrentEl.replaceChildren();
//   comments.forEach(displayComment);
// }

// 
// 
// const form = document.getElementById("comments-form");

//   comments.push(newComment);
//   displayComment(newComment);
// // Not sure if I should push new comment or just comment
//   render();
// });

