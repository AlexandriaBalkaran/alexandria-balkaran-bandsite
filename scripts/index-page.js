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

  // const commentSection = document.getElementById('comments-form');
  // const newForm = document.createElement('form');
  // newForm.id = 'new-form';
  // const input = document.createElement('input');
  // const button = document.createElement('button');

// const commentForm = document.getElementById('comment-form');
// const commentSect = document.getElementById('comment__section');
// // const nameInput = document.getElementById('name-input');
// // const commentInput = document.getElementById('comment-input');
// const commentsCurrentEl = document.getElementById("comments-current");

comments.forEach(displayComment);

function displayComment(commentOutput) {
  // console.log('Displaying comment:', commentOutput); 
  const commentEl = document.createElement('div');
  commentEl.classList.add('comment__container');

  const nameEl = document.createElement('p');
  nameEl.classList.add('name__container');
  nameEl.innerText = commentOutput.name;
  commentEl.appendChild(nameEl);

  const imageEl = document.createElement('img');
  imageEl.classList.add('image__container');
  commentEl.appendChild(imageEl);

  const dateEl = document.createElement('p');
  dateEl.classList.add('date__container');
  dateEl.innerText = commentOutput.date;
  commentEl.appendChild(dateEl);

  const textEl = document.createElement('p');
  textEl.classList.add('text__container');
  textEl.innerText = commentOutput.comment;
  commentEl.appendChild(textEl);

  console.log(commentEl);
  return commentEl;

  // const commentEl = createDiv('comment-input__info');
  // nameEl.append(El); 

  // const imageEl = commentOutput.avatar !== "" ? createImg("avatar__image", commentOutput.avatar, commentOutput.name) : createDiv("avatar__no-img");
  // nameEl.append(imageEl);

  // commentsCurrentEl.append(comments);
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

// render();

// function render() {
//   commentSect.replaceChildren();
//   comments.forEach(displayComment);
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

// commentSect.addEventListener('submit' , (e) => {
//   e.preventDefault();
//   const name = nameInput.textContent;
//   const comment = commentInput.textContent; 
//   const newComment = {
//     name: 'name' ,
//     comment: 'comment' ,
//     date: new Date () ,
//   }

//   comments.push(newComment);
//   displayComment(newComment);
// // Not sure if I should push new comment or just comment
//   render();
// });

// function render() {
//   console.log("Rendering comments...");
//   commentSect.replaceChildren();
//   comments.forEach(displayComment);
// }


  
  



//  for Date's
// const date = new Date("08/14/2024")
// console.log(date.toLocaleDateString()) // output: '8/14/2024