import{i,S as l}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.getElementById("search-form").addEventListener("submit",c);document.getElementById("loader").style.display="none";function c(o){o.preventDefault();let a=document.getElementById("search-form-input").value.trim(),t=document.getElementById("loader");if(a===""){i.warning({title:"Caution",message:"The search field cannot be empty!"});return}t.style.display="block",d(a)}function d(o){let t=`https://pixabay.com/api/?key=42176348-9192a588252a9fae2debe28a6&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(t).then(s=>s.json()).then(s=>{document.getElementById("loader").style.display="none",s.hits.length>0?p(s.hits):i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(s=>{document.getElementById("loader").style.display="none",i.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topCenter"}),console.error("Fetch error:",s)})}function p(o){const a=document.querySelector("ul.gallery");a.innerHTML=o.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}" data-lightbox="gallery">
                <img src="${t.webformatURL}" alt="${t.tags}" class="image-card-image">
                <div class="image-card-details">
                    <span class="image-card-likes"><span class="bold">Likes:</span><br>${t.likes}</span>
                    <span class="image-card-views"><span class="bold">Views:</span><br>${t.views}</span>
                    <span class="image-card-comments"><span class="bold">Comments:</span><br>${t.comments}</span>
                    <span class="image-card-downloads"><span class="bold">Downloads:</span><br>${t.downloads}</span>
                </div>
            </a>
        </li>
    `).join(""),m()}function m(){const o={captions:!0,captionType:"attr",captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8};new l(".gallery a",o)}
//# sourceMappingURL=commonHelpers.js.map
