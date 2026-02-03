(function () {
  const side = window.mourningRibbonSide || "right";
  const text = window.mourningRibbonText || "به یاد درگذشتگان دی ۱۴۰۴";

  if (document.getElementById("mourningRibbonRoot")) return;

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600&display=swap";
  document.head.appendChild(font);

  const style = document.createElement("style");
  style.innerHTML = `
    #mourningRibbonRoot{
      position:fixed;
      top:0;
      ${side}:0;
      width:160px;
      height:160px;
      pointer-events:none;
      z-index:999999;
      overflow:hidden;
      animation:ribbonFadeIn 0.8s ease;
    }

    #mourningRibbonInner{
      position:absolute;
      width:220px;
      background:#000;
      color:#fff;
      text-align:center;
      font-family:'Vazirmatn',sans-serif;
      font-size:13px;
      padding:6px 0;
      transform-origin:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.4);
    }

    .ribbonRight{
      left:-40px;
      top:35px;
      transform:rotate(45deg);
    }

    .ribbonLeft{
      right:-40px;
      top:35px;
      transform:rotate(-45deg);
    }

    @keyframes ribbonFadeIn{
      from{opacity:0;transform:scale(0.8)}
      to{opacity:1;transform:scale(1)}
    }
  `;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "mourningRibbonRoot";

  const inner = document.createElement("div");
  inner.id = "mourningRibbonInner";
  inner.className = side === "left" ? "ribbonLeft" : "ribbonRight";
  inner.innerText = text;

  root.appendChild(inner);
  document.body.appendChild(root);
})();
