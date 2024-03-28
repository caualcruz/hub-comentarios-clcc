const loadUserData = () => {};

const UserProfileVector = {

}

const displayUserData = () => {
  const userContent = document.getElementById("user-data");
  const newDiv = document.createElement("div");
  userContent.innerHTML = ``;
  const output = `
            <div>
              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                  preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>comentário</title>
                  <rect width="100%" height="100%" fill="${darkColors()}"></rect>
                  <text x="35%" y="50%" fill="${lightColors()}"dy=".3em">${item
    .getAuthor()
    .charAt(0)}</text>
              </svg>
              <p class="pb-3 mb-0 small lh-sm text-gray-dark">
                  <strong class="d-block text-gray-dark">@${item.getAuthor()}    |    ${formatDate(
    item.getCreatedAt()
  )}
              
                  </strong>
                  <span class="comment">
                  ${item.getComment()}
                  </span>
              </p>
            </div>`;
  divFeed.appendChild(divDisplay);
};
