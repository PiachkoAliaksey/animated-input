(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const v=()=>document.querySelector("#app").innerHTML=`
    <div class='field-custom-input'>
     <div class='field-bubbles-value-range'>
         <span class='field-show-value-range'></span>
         <span class='field-show-value-range second-span'></span>
         <span class='field-show-value-range third-span'></span>
         <span class='field-show-value-range fourth-span'></span>
     </div>
      <input class='animated-input' type='range' min='0' max='100' value="0" steps="10"  />
    </div>
  `,f=()=>{const a=document.querySelector(".field-show-value-range"),t=document.querySelector(".second-span"),n=document.querySelector(".third-span"),i=document.querySelector(".fourth-span"),e=document.querySelector(".animated-input"),s=document.querySelector(".field-bubbles-value-range");let r=document.createElement("style"),u=document.createElement("style"),h=document.createElement("style");document.head.appendChild(r),document.head.appendChild(u),document.head.appendChild(h);let c="",m=!1;e==null||e.addEventListener("input",()=>{let d=e.value;s.style.left=+d+1+"%";const l=(+d-+e.min)/(+e.max-+e.min)*100;a.classList.add("show-value"),a.style.animationIterationCount="infinite",a.textContent=e.value,setTimeout(()=>{t.textContent=e.value,t.classList.add("show-value"),t.style.animationIterationCount="infinite"},100),setTimeout(()=>{n.textContent=e.value,n.classList.add("show-value"),n.style.animationIterationCount="infinite"},200),e.addEventListener("mousedown",async()=>{m=!0,[a,t,n].forEach(o=>{o.classList.remove("show-value-static"),o.textContent=""}),i.classList.remove("show-range-value"),i.textContent="",a.classList.add("show-value-static"),a.style.animationIterationCount="3",setTimeout(()=>{t.classList.add("show-value-static"),t.style.animationIterationCount="3"},100),setTimeout(()=>{n.classList.add("show-value-static"),n.style.animationIterationCount="3"},200)}),e.addEventListener("mousemove",async()=>{m&&([a,t,n].forEach(o=>{o.classList.remove("show-value-static")}),a.classList.add("show-value"),a.style.animationIterationCount="infinite",a.textContent=e.value,setTimeout(()=>{t.textContent=e.value,t.classList.add("show-value"),t.style.animationIterationCount="infinite"},100),setTimeout(()=>{n.textContent=e.value,n.classList.add("show-value"),n.style.animationIterationCount="infinite"},200))}),e.addEventListener("mouseup",async()=>{m=!1,a.textContent="",a.classList.remove("show-value"),t.classList.remove("show-value"),n.classList.remove("show-value"),a.classList.add("show-value-static"),a.style.animationIterationCount="3",i.classList.add("show-range-value"),i.textContent=e.value===e.max?"max":e.value===e.min?"min":e.value,i.style.animationIterationCount="1",setTimeout(()=>{t.textContent="",t.classList.add("show-value-static"),t.style.animationIterationCount="3"},100),setTimeout(()=>{n.textContent="",n.classList.add("show-value-static"),n.style.animationIterationCount="3"},200),setTimeout(()=>{r.innerHTML=".animated-input::-webkit-slider-thumb {transform: scale(2);}",setTimeout(()=>r.innerHTML=".animated-input::-webkit-slider-thumb {transform: scale(1);}",2e3)},3250)}),d===e.max?(c="white",[a,t,n,i].forEach(o=>{o.style.background="white",o.style.color="black"}),e.style.background=`linear-gradient(90deg, white ${l}%, transparent ${l}%)`,u.innerHTML=".animated-input::-webkit-slider-thumb {background-color: white;}"):d===e.min||d==="1"?(c="blueviolet",[a,t,n,i].forEach(o=>{o.style.background="blueviolet",o.style.color="white"}),e.style.background=`linear-gradient(90deg, #8A2BE2 ${l}%, transparent ${l}%)`,u.innerHTML=".animated-input::-webkit-slider-thumb {background-color: blueviolet;}"):(c==="blueviolet"?e.style.background=`linear-gradient(90deg, #8A2BE2 ${l}%, transparent ${l}%)`:e.style.background=`linear-gradient(90deg, white ${l}%, transparent ${l}%)`,c==="blueviolet"?u.innerHTML=".animated-input::-webkit-slider-thumb {background-color: blueviolet;}":u.innerHTML=".animated-input::-webkit-slider-thumb {background-color: white;}")})};v();f();
