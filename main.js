const linksSocialMedia = {
  github: "Leonardo-Cabral67",
  youtube: "channel/UC9NZzoELCk5DHJdIZBFtwdQ",
  instagram: "leo__cabraal",
  facebook: "leonardo.cabral.9655/",
  twitter: "maykbrito",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userImage.src = data.avatar_url
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userBio.textContent = data.bio
    
    
   })
}
getGitHubProfileInfos()

