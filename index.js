const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152 
    }
]

const newsFeed = document.getElementById("news-feed")

for (let i = 0; i < posts.length; i++) {
  const post = posts[i]

  newsFeed.innerHTML += `
<li class="postCard">
    <div id="container">
        <div id="prof-head">
            <img id="profile-img" src="${post.avatar}">
            <div id="prof-info">
                <h2 id="prof-name">${post.name}</h2>
                <h3 id="prof-loc">${post.location}</h3>
            </div>
        </div>
        <img id="post-img" src="${post.post}">
        <div id="btn">
            <button id="post-btns"><img id="imgButtons" src="images/icon-heart.png"></button>
            <button id="post-btns"><img id="imgButtons" src="images/icon-comment.png"></button>
            <button id="post-btns"><img id="imgButtons" src="images/icon-dm.png"></button>
            <h3 id="post-likes">${post.likes} likes</h3>
            <h3 id="comments"><span id="com-name">${post.username}</span> ${post.comment}</h3>
        </div>
    </div>
</li>
`
}


// newsFeed.innerHTML = ""

// posts.forEach(post => {
//   newsFeed.innerHTML += `
// <li class="postCard">
//     <div id="container">
//         <div id="prof-head">
//             <img id="profile-img" src="${post.avatar}">
//             <div id="prof-info">
//                 <h2 id="prof-name">${post.name}</h2>
//                 <h3 id="prof-loc">${post.location}</h3>
//             </div>
//         </div>
//         <img id="post-img" src="${post.post}">
//         <div id="btn">
//             <button id="post-btns"><img id="imgButtons" src="images/icon-heart.png"></button>
//             <button id="post-btns"><img id="imgButtons" src="images/icon-comment.png"></button>
//             <button id="post-btns"><img id="imgButtons" src="images/icon-dm.png"></button>
//             <h3 id="post-likes">${post.likes} likes</h3>
//             <h3 id="comments"><span id="com-name">${post.username}</span> ${post.comment}</h3>
//         </div>
//     </div>
// </li>
// `
// })

