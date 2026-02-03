(function(){

const cfg=window.dey1404||{};
const side=cfg.side||"right";
const text=cfg.text||"به یاد درگذشتگان دی ۱۴۰۴";
const linkEnabled=cfg.link!==false;
const linkUrl="https://m4tinbeigi-official.github.io/dey1404/";

if(document.getElementById("dey1404-root"))return;

const font=document.createElement("link");
font.rel="stylesheet";
font.href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600&display=swap";
document.head.appendChild(font);

const style=document.createElement("style");
style.innerHTML=`
#dey1404-root{
position:fixed;
top:0;
${side}:0;
width:260px;
height:260px;
overflow:hidden;
z-index:9999999;
pointer-events:${linkEnabled?"auto":"none"};
}

#dey1404-ribbon{
position:absolute;
top:95px;
left:-420px;
width:900px;
background:#000;
color:#fff;
font-family:Vazirmatn,sans-serif;
font-size:14px;
text-align:center;
padding:12px 0;
letter-spacing:.4px;
transform:rotate(${side==="left"?"-45":"45"}deg);
box-shadow:0 8px 20px rgba(0,0,0,.45);
animation:enter .7s ease;

mask-image:linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
-webkit-mask-image:linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
}

@keyframes enter{
from{opacity:0;transform:scale(.8) rotate(${side==="left"?"-45":"45"}deg);}
to{opacity:1;transform:scale(1) rotate(${side==="left"?"-45":"45"}deg);}
}
`;
document.head.appendChild(style);

const root=document.createElement(linkEnabled?"a":"div");
root.id="dey1404-root";

if(linkEnabled){
root.href=linkUrl;
root.target="_blank";
root.style.textDecoration="none";
}

const ribbon=document.createElement("div");
ribbon.id="dey1404-ribbon";
ribbon.innerText=text;

root.appendChild(ribbon);
document.body.appendChild(root);

})();
