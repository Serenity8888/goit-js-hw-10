function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_uvDtLE1BjyRmLLM7MacKIVjcREwYwBl7w3WUYkDMG9cMAqDCmpVYZ9a5YUdRvrHF&breed_ids=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),i=document.querySelector(".loader"),n=document.querySelector(".error");function r(){n.classList.remove("is-hidden"),t.classList.add("is-hidden")}fetch("https://api.thecatapi.com/v1/breeds?api_key=live_uvDtLE1BjyRmLLM7MacKIVjcREwYwBl7w3WUYkDMG9cMAqDCmpVYZ9a5YUdRvrHF").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{i.classList.replace("loader","is-hidden");let s=e.map((({name:e,id:t})=>`<option value ='${t}'>${e}</option>`));t.insertAdjacentHTML("beforeend",s),t.classList.remove("is-hidden")})).catch(r),t.addEventListener("change",(function(n){i.classList.replace("is-hidden","loader"),t.classList.add("is-hidden"),s.classList.add("is-hidden"),e(n.target.value).then((e=>{i.classList.replace("loader","is-hidden"),t.classList.remove("is-hidden");const{url:n,breeds:r}=e[0],{name:a,description:c,temperament:d}=r[0];s.innerHTML=`\n      <img src="${n}" alt="${a}" width="400"/>\n      <div class="box">\n        <h2>${a}</h2>\n        <p>${c}</p>\n        <p><strong>Temperament:</strong> ${d}</p>\n      </div>\n      `,s.classList.remove("is-hidden")})).catch(r)}));
//# sourceMappingURL=index.28d8875b.js.map
