(function () {

  const side = window.mourningRibbonSide || "right";
  const text = window.mourningRibbonText || "به یاد درگذشتگان دی ۱۴۰۴";

  if (document.getElementById("mourning-ribbon")) return;

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600&display=swap";
  document.head.appendChild(font);

  const css = `
#mourn-root{
position:fixed;
top:0;
${side}:0;
width:180px;
height:180px;
z-index:999999;
pointer-events:none;
}

#mourn-inner{
position:absolute;
top:42px;
left:-45px;
width:260px;
background:black;
color:white;
text-align:center;
font-family:Vazirmatn,sans-serif;
font-size:14px;
padding:8px 0;
transform:rotate(${side==="left"?"-45":"45"}deg);
box-shadow:0 6px 14px rgba(0,0,0,.4);
animation:enter .8s ease;
}

@keyframes enter{
from{opacity:0;transform:scale(.7) rotate(${side==="left"?"-45":"45"}deg);}
to{opacity:1;transform:scale(1) rotate(${side==="left"?"-45":"45"}deg);}
}
`;

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "mourning-ribbon";

  const box = document.createElement("div");
  box.id = "mourn-root";

  const inner = document.createElement("div");
  inner.id = "mourn-inner";
  inner.innerText = text;

  box.appendChild(inner);
  root.appendChild(box);
  document.body.appendChild(root);

})();
