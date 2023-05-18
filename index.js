const postList = document.querySelector('.post-list')
const addPostForm = document.querySelector('.add-post-form')
let output = '';
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

const url = 'https://jsonplaceholder.typicode.com/posts';

const renderPosts = (post) => {
  post.forEach(post => {
    output += `
    <div class="card mt-4 col-md-6 bg-light">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">${post.body}</p>
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </div>
    </div>
    `;
  });
  postList.innerHTML = output;
}

//get request - GET
//method: GET
fetch(url)
.then(res => res.json())
.then (data => renderPosts(data));

//create post
//method: POST

addPostForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(titleValue.value);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: titleValue.value,
      body: bodyValue.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const dataArr = [];
    dataArr.push(data);
    console.log(data);
    renderPosts(dataArr)
  })
})
