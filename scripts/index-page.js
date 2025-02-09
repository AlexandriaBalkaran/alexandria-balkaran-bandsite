const API_KEY = "fedd3493-dc9c-4716-b939-1762172f811d";
const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

const commentForm = document.getElementById("comments__form");
const commentSect = document.getElementById("comments__section");

const commentsOriginal = [];


commentsRender();

// Comment button
commentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const comment = e.target.comment.value;
  
  const postComment = {
    name,
    comment,
  };

  try {
    await axios.post(`${BASE_URL}comments?api_key=${API_KEY}`, postComment);

    addNewComment(postComment);

    commentForm.reset();

  } catch (e) {

  }
});

// Functions
async function commentsRender() {
  try {
    const response = await axios.get(`${BASE_URL}comments?api_key=${API_KEY}`);
    const commentsAll = response.data;

    commentsAll.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));

    commentSect.innerHTML = "";

    commentsAll.forEach((comment) => {

      const commentEl = displayComment(comment);
      
      commentSect.appendChild(commentEl);
      
    });
  } catch (e) {
    
}};

// Add New Comment
function addNewComment(newComment) {
  commentsOriginal.push(newComment);

  const commentEl = displayComment(newComment);
  commentSect.insertBefore(commentEl, commentSect.firstChild);
};

// Containers to display contents
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

  const dateFormat = new Date(commentOutput.timestamp).toLocaleDateString('en-US', {
    year: 'numeric' ,
    month: '2-digit' ,
    day: '2-digit' ,
  });

  dateEl.innerText = dateFormat;
  nameDateContainer.appendChild(dateEl);

  commentEl.appendChild(nameDateContainer);

// Create image container
  const imageEl = document.createElement('div');
  imageEl.classList.add('image__container');

  commentEl.appendChild(imageEl);

// Container for p tag
  const textContainer = document.createElement('div');
  textContainer.classList.add('text__container');

// Create p tag
  const textEl = document.createElement('p');
  textEl.classList.add('text__container');
  textEl.innerText = commentOutput.comment;

// Append p tag to new container
  textContainer.appendChild(textEl);

// Append new text to container
  commentEl.appendChild(textContainer);

  return commentEl;
}

commentsRender();