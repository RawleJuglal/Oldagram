(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const n=[{id:"vvg033053",name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"images/avatar-vangogh.jpg",post:"images/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21,hasBeenLiked:!1},{id:"jdgc061019",name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"images/avatar-courbet.jpg",post:"images/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4,hasBeenLiked:!1},{id:"jbd062635",name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"images/avatar-ducreux.jpg",post:"images/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152,hasBeenLiked:!1}];let l=[],d=[],m=document.getElementById("posts-container");function r(i){m.innerHTML="";for(let e=0;e<i.length;e++){let a=document.createElement("div");a.classList.add("post"),a.innerHTML=`<div class="user-info">
                            <div class="user-avatar-container">
                                <img class="avatar post-avatar" src="${i[e].avatar}" alt="photo of ${i[e].name}">
                            </div>
                            <div class="user-text-container">
                                <p class="bold-text author">${i[e].name}</p>
                                <p>${i[e].location}</p>
                            </div>
                        </div>
                        <div class="user-photo">
                            <img id="photo-${e}" class="user-photo-img" src="${i[e].post}" alt="${i[e].name} selfie">
                        </div>
                        <div class="icons-container">
                            <img id="icon-${e}" class="icon heart" src="images/icon-heart.png" alt="heart icon">
                            <img class="icon comment"  src="images/icon-comment.png" alt="comment icon">
                            <img class="icon share"  src="images/icon-dm.png" alt="share icon">
                        </div>
                        <div class="likes-container">
                            <p class="likes-count bold-text author">${i[e].likes}</p>
                        </div>
                        <div class="comments-container">
                            <p class="comment-p"><span class="comment-user bold-text author">${i[e].username}</span><span class="comment-text author">${i[e].comment}</span></p>
                        </div>`,m.append(a)}u(),p()}function u(){let i=n.length;for(let e=0;e<i;e++){let a="";a=document.getElementById(`icon-${e}`),d.push(a)}d.map((e,a,o)=>{e.addEventListener("click",s=>{let t=s.target.id.slice(-1);n[t].hasBeenLiked?(n[t].likes-=1,n[t].hasBeenLiked=!n[t].hasBeenLiked):(n[t].likes+=1,n[t].hasBeenLiked=!n[t].hasBeenLiked),r(n)})})}function p(){let i=n.length;for(let e=0;e<i;e++){let a="";a=document.getElementById(`photo-${e}`),l.push(a)}l.map((e,a,o)=>{e.addEventListener("dblclick",s=>{let t=s.target.id.slice(-1);n[t].hasBeenLiked?(n[t].likes-=1,n[t].hasBeenLiked=!n[t].hasBeenLiked):(n[t].likes+=1,n[t].hasBeenLiked=!n[t].hasBeenLiked),r(n)})})}r(n);
