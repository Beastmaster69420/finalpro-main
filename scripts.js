document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-link");
    const parentContent = document.getElementById("parentContent");
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const pageURL = e.target.getAttribute("href");
  
        fetch(pageURL)
          .then((response) => response.text())
          .then((html) => {
            parentContent.innerHTML = html;
          })
          .catch((error) => {
            console.error("Error fetching the page: ", error);
          });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profileImage");
    const profileMenu = document.getElementById("profileMenu");
  
    profileImage.addEventListener("click", function () {
      profileMenu.style.display =
        profileMenu.style.display === "block" ? "none" : "block";
    });
  
    // Hide the profile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!profileImage.contains(event.target)) {
        profileMenu.style.display = "none";
      }
    });
  
    // Implement actions for view profile and logout
    const viewProfile = document.getElementById("viewProfile");
    const logout = document.getElementById("logout");
  
    viewProfile.addEventListener("click", function (e) {
      e.preventDefault();
      // Add functionality to view profile
      console.log("View Profile clicked");
    });
  
    logout.addEventListener("click", function (e) {
      e.preventDefault();
      // Add functionality for logout
      console.log("Logout clicked");
    });
  });
  let voteCount = 0;

  function upvote() {
      voteCount++;
      updateVoteCount();
  }

  function downvote() {
      voteCount--;
      updateVoteCount();
  }

  function updateVoteCount() {
      document.getElementById('vote-count').innerText = voteCount;
  }
  const posts = [];

  // Function to create a new post
  // // Function to handle upvote/downvote
// function vote(post, type) {
//     if (!post.voted) {
//         if (type === "upvote") {
//             post.upvotes++;
//         } else if (type === "downvote") {
//             post.downvotes++;
//         }
//         post.voted = true;
//         displayPosts();
//     }
// }
// // Function to add a comment
// function addComment(post, comment) {
//     post.comments.push(comment);
//     displayPosts();
// }
// // Initial display of posts
// displayPosts();
function createPost() {
  // Get form values
  const title = document.getElementById('post-title').value;
  const description = document.getElementById('post-description').value;
  const imageUrl = document.getElementById('post-image').value;

  // Create a new post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Fill in post details
  postElement.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
      <img src="${imageUrl}" alt="Posted Image">
      <div class="vote-buttons">
          <button class="upvote-btn" onclick="vote(this, 1)">Upvote</button>
          <button class="downvote-btn" onclick="vote(this, -1)">Downvote</button>
          <span class="vote-count">0</span>
      </div>
  `;

  // Append post to the posts container
  document.getElementById('posts-container').appendChild(postElement);

  // Clear the form
  document.getElementById('post-form').reset();
}

function vote(button, value) {
  const voteCountSpan = button.parentElement.querySelector('.vote-count');
  let currentVotes = parseInt(voteCountSpan.textContent);
  voteCountSpan.textContent = currentVotes + value;
}