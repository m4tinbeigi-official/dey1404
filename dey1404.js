(function(){

const side = window.mourningRibbonSide || "right";
const text = window.mourningRibbonText || "به یاد درگذشتگان دی ۱۴۰۴";

if(document.getElementById("dey1404-root")) return;

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
width:220px;
height:220px;
overflow:hidden;
pointer-events:none;
z-index:9999999;
}

#dey1404-ribbon{
position:absolute;
top:70px;
left:-220px;
width:600px;
background:#000;
color:#fff;
font-family:Vazirmatn,sans-serif;
font-size:14px;
text-align:center;
padding:10px 0;
letter-spacing:.3px;
transform:rotate(${side==="left"?"-45":"45"}deg);
box-shadow:0 8px 20px rgba(0,0,0,.5);
animation:deyEnter .8s ease;
}

@keyframes deyEnter{
from{opacity:0;transform:scale(.7) rotate(${side==="left"?"-45":"45"}deg);}
to{opacity:1;transform:scale(1) rotate(${side==="left"?"-45":"45"}deg);}
}
`;
document.head.appendChild(style);

const root=document.createElement("div");
root.id="dey1404-root";

const ribbon=document.createElement("div");
ribbon.id="dey1404-ribbon";
ribbon.innerText=text;

root.appendChild(ribbon);
document.body.appendChild(root);

})();
