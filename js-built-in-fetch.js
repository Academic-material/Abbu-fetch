function testP() {
  postData("https://jsonplaceholder.typicode.com/posts", post)
}

var post = {
  title: "foo",
  body: "bar",
  userId: 1,
};

function postData(url, post) {
  fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post),
  }).then((response) => response.json())
  .then((json) =>  document.getElementById("post").innerHTML = JSON.stringify(json));
}

