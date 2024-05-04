import { posts } from "./data/data.js";

// AVOID CROSS SITE SCRIPTING ATTACKS
function escape(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
function postList(post, index) {
  const containerDiv = document.querySelector(".container");

  const postFormat = `
    

<section class="id">
  <img
    class="vangogh-avatar-img"
    src="${escape(post.avatar)}"
    alt="picture of vangogh used for id picture"
  />
  <div class="info">
    <p class="id-name">${escape(post.name)}</p>
    <p class="id-location">${escape(post.location)}</p>
  </div>
</section>
<section class="photo">
  <img
    class="vangogh-img"
    src="${escape(post.post)}"
    alt="picture of
  vangogh(famous artist)"
  />
</section>
<section class="reactions">
  <img
    class="heart-reaction"
    src="${escape("images/icon-heart.png")}"
    alt="heart icon to like photos"
  />
  <img
    class="comment-reaction"
    src="${escape("images/icon-comment.png")}"
    alt="comment icon to comment on photo"
  />
  <img
    class="dm-reaction"
    src="${escape("images/icon-dm.png")}"
    alt="direct-message icon"
  />
</section>
<section class="like-count">
  <p class="likes"><span class="number-of-likes">${escape(
    post.likes
  )}</span> likes</p>
</section>
<section class="caption">
  <p class="caption-para">
    <span class="user-id">vincey1853</span>${escape(post.comment)}
  </p>
</section>
${index !== posts.length - 1 ? "<hr>" : ""}

    `;

  containerDiv.innerHTML += postFormat;
}

posts.forEach((post, index) => {
  postList(post, index, posts);
});
