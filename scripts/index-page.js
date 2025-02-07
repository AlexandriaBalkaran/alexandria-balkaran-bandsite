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
    console.log('works');

  } catch (e) {
    console.log(e);
  }
});

// Delete Button 
async function deleteComment(commentId) {
  const url=`${BASE_URL}/comments/${commentId}?api_key=${API_KEY}`
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (e) {
    console.error('error deleting', error);
    throw error;
  }
};

// Functions
async function commentsRender() {
  try {
    const response = await axios.get(`${BASE_URL}comments?api_key=${API_KEY}`);
    const commentsAll = response.data;
    console.log(commentsAll);

    commentsAll.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));

    commentSect.innerHTML = "";
    console.log(commentSect.innerHTML);

    commentsAll.forEach((comment) => {
      // const timestamp = new Date(timestamp);
      // const commentSect = document.createElement("div");
      // const dateFormat = 


      const commentEl = displayComment(comment);
      
      
      commentSect.appendChild(commentEl);
      
    });
  } catch (e) {
    console.log('function works')
}};

function addNewComment(newComment) {
  commentsOriginal.push(newComment);

  const commentEl = displayComment(newComment);
  commentSect.insertBefore(commentEl, commentSect.firstChild);
};
      

// Containers to display contents
function displayComment(commentOutput) {
  console.log(commentOutput);
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

// Delete button
const deleteButton = document.createElement('button');
deleteButton.classList.add('button__delete');
// deleteButton.innerText = "Delete";

deleteButton.innerHTML = '<img src="../assets/icons/icons-delete.svg">';

// CANNOT MAKE THE IMAGE APPEAR
// const deleteImg = document.createElement('img');
//   deleteImg.src = "../assets/icons/icons-delete.svg";
//   deleteImg.alt = "image of a garbage can for the delete button";
// deleteImg.classList.add('button__delete-image');

deleteButton.addEventListener ('click', async () => {
  try {
    await axios.deleteComment(`${BASE_URL}/${commentsId}/?api_key=${API_KEY}`);
    
     // remove container
    commentEl.remove();

  } catch (e) {
    console.error('can not delete:', e);
  }
});
  commentEl.appendChild(deleteButton);

  return commentEl;
}

commentsRender();