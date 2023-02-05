const posts = [
    {
        id:'vvg033053',
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        hasBeenLiked:false
    },
    {
        id:'jdgc061019',
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        hasBeenLiked:false
    },
    {
        id:'jbd062635',
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        hasBeenLiked:false
    }
]
let photosElArr = []
let iconElArr = []
let postsContainerEl = document.getElementById('posts-container')

function renderPosts(arr){
    postsContainerEl.innerHTML = '';
    for(let i = 0; i<arr.length;i++){
        let postEl = document.createElement('div')
        postEl.classList.add('post')
        postEl.innerHTML = `<div class="user-info">
                            <div class="user-avatar-container">
                                <img class="avatar post-avatar" src="${arr[i].avatar}" alt="photo of ${arr[i].name}">
                            </div>
                            <div class="user-text-container">
                                <p class="bold-text author">${arr[i].name}</p>
                                <p>${arr[i].location}</p>
                            </div>
                        </div>
                        <div class="user-photo">
                            <img id="photo-${i}" class="user-photo-img" src="${arr[i].post}" alt="${arr[i].name} selfie">
                        </div>
                        <div class="icons-container">
                            <img id="icon-${i}" class="icon heart" src="images/icon-heart.png" alt="heart icon">
                            <img class="icon comment"  src="images/icon-comment.png" alt="comment icon">
                            <img class="icon share"  src="images/icon-dm.png" alt="share icon">
                        </div>
                        <div class="likes-container">
                            <p class="likes-count bold-text author">${arr[i].likes}</p>
                        </div>
                        <div class="comments-container">
                            <p class="comment-p"><span class="comment-user bold-text author">${arr[i].username}</span><span class="comment-text author">${arr[i].comment}</span></p>
                        </div>`
                        postsContainerEl.append(postEl)
    }  
    setIconListeners()
    setDoubleClickListeners()
}

function setIconListeners(){
    let arrLength = posts.length;
    for(let i = 0;i< arrLength;i++){
        let iconName = ''
        iconName = document.getElementById(`icon-${i}`)
        iconElArr.push(iconName)
    }
    iconElArr.map((item, index, array)=>{
        item.addEventListener('click', (event)=>{
            let match = event.target.id.slice(-1);
            if(posts[match].hasBeenLiked){
                posts[match].likes -= 1;
                posts[match].hasBeenLiked = !posts[match].hasBeenLiked;
            } else {
                posts[match].likes += 1;
                posts[match].hasBeenLiked = !posts[match].hasBeenLiked;
                
            }
            renderPosts(posts)
        })
    })
}

function setDoubleClickListeners(){
    let arrLength = posts.length;
    for(let i = 0;i<arrLength;i++){
      let indexName = ''
      indexName = document.getElementById(`photo-${i}`)
      photosElArr.push(indexName) 
    }
    photosElArr.map((item, index, array) =>{
        item.addEventListener('dblclick', (event)=>{
            let mate = event.target.id.slice(-1);
            if(posts[mate].hasBeenLiked){
                posts[mate].likes -= 1;
                posts[mate].hasBeenLiked = !posts[mate].hasBeenLiked;;
            } else {
                posts[mate].likes += 1;
                posts[mate].hasBeenLiked = !posts[mate].hasBeenLiked;
                
            }
            renderPosts(posts)
        })
    })
}

renderPosts(posts)

