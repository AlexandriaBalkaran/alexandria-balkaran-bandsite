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


const commentSect = document.getElementById('comment__section');
const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');

comments.forEach(displayComment);

function displayComment(commentOutput) {
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

  const imageEl = document.createElement('div');
  imageEl.classList.add('image__container');

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
    date: date.toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit',day: '2-digit',
    }),
  };

  comments.push(newComment);
  showComments();
});

