import getOneComment from "./get-one-comment";
import createComment from "./create-comment";


function loadAllComments() {
  // 1) Long way
  const webRequestPromise = fetch("/comments");
  const convertToJsonPromise = webRequestPromise.then((response) => {
    console.log("Comment response",response);
    return response.json();
  });
    convertToJsonPromise.then((data) => {
      console.log("Contact data",data);
      document.getElementById("numberOfComments").innerHTML = data.length;
    });

  // 2) Short way
  fetch("/comments").then(function (response) {
    return response.json();
  }).then((data) => {
    document.getElementById("numberOfComments2").innerHTML = data.length;
  });

}
loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {
  document.getElementById("createComment").innerHTML = data.name;
});

window.makeComment = function () {
  createComment({
    body: "ACA is great!",
    postID: 1
  }).then(function (data) {
    loadAllComments();
  });
};
