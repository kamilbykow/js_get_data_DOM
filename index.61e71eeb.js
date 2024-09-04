var e=document.querySelectorAll(".population"),t=document.querySelector(".total-population"),n=document.querySelector(".average-population"),o=Object.values(e).reduce(function(e,t){return e+parseInt(t.textContent.replaceAll(",",""))},0),l=e.length>0?o/e.length:0;t.textContent=o.toLocaleString("en-US"),n.textContent=l.toLocaleString("en-US");
//# sourceMappingURL=index.61e71eeb.js.map
