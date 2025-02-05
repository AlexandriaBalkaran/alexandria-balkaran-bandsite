const API_KEY = "fedd3493-dc9c-4716-b939-1762172f811d";
const commentApi = new BandsiteApi(API_KEY);

console.log(commentApi);


const commentForm = document.getElementsByClassName("comments__form");
const commentSect = document.getElementsByClassName("comments__section");

const commentsRender =  async (e) => {
    try {
        const comments = await commentApi.getComments(
          {
            "name": e.target.name.value,
            "comment": e.target.comment.value,
            "timestamp": e.target.timestamp.value,
          }
        );
        console.log(comments);
        const getComment = await commentApi.addComment(
          // {"name": e.target.name.value,
          //   "comment": e.target.comment.value,
          //   "timestamp": e.target.timestamp.value
          //   "date": new Date().toLocaleDateString('en-US', {
          //   "year": 'numeric', month: '2-digit',day: '2-digit',
          // }),          

        // }
      )
      console.log(getComment);
      const newComments = await commentApi.getComments()
      console.log(newComments);
      // const deleteComment = await commentApi.deleteComment("")
      // console.log (deleteComment);
    } catch (error) {
        console.log("Error fetching comments:", error);
    }
};

commentsRender();







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
}

// // Axios data
// document.getElementsByClassName('comment__form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   commentsRender(e);
// })
// render();

// commentForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   try {
//     const resp = await axios.post(`${BASE_URL}/comments?api_key=${API_KEY}`, {
//       name: e.target.nameText.value,
//       comment: e.target.commentText.value,
//       date: new Date().toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//       })
//     });
//       console.log(resp);
//     } catch (e) {
//       console.log(e);
//     }
// });





// Comments 
// function showComments () {
//   let showComments = () => {
//     const commentDisplay = document.querySelector(".comments-section");
//     commentDisplay.replaceChildren();

//     const sortedComments = [...comments].reverse();
//     for (let i = 0; i < sortedComments.length; i++ ){
//       const commentAll = displayComment(sortedComments[i]);
//       commentDisplay.appendChild(commentAll);
//     }
//   };
//   showComments();
// }
// showComments();

// Button
// comments__form.addEventListener('submit' , (e) => {
//   e.preventDefault();
//   const date = new Date ();
//   const newComment = {
//     name: e.target.nameText.value,
//     comment: e.target.commentText.value,
//     date: date.toLocaleDateString('en-US', {
//     year: 'numeric', month: '2-digit',day: '2-digit',
//     }),
//   };

//   comments.push(newComment);
//   showComments();
// });





// IDK IF ILL USED THIS LATER
// const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
// const API_KEY = "fedd3493-dc9c-4716-b939-1762172f811d";

// const commentForm = document.getElementById("comments__form");
// const commentSect = document.getElementById("comments__section");


// async function render() {
//   try {
//     const resp = await axios.get(`${BASE_URL}/comments?api_key=${API_KEY}`);
//     const comments = resp.data;
//     console.log(comments);
//     commentSect.textContent = comments.length;
//   } catch (e) {
//     console.log(e);
//   }
// }