!function(){function t(t){a=window.innerWidth,window.innerHeight}function i(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)n(t.touches[i].clientX,t.touches[i].clientY,h[Math.floor(Math.random()*h.length)])}function e(t){l.x=t.clientX,l.y=t.clientY,n(l.x,l.y,h[Math.floor(Math.random()*h.length)])}function n(t,i,e){var n=new s;n.init(t,i,e),r.push(n)}function o(){requestAnimationFrame(o),function(){for(var t=0;t<r.length;t++)r[t].update();for(t=r.length-1;t>=0;t--)r[t].lifeSpan<0&&(r[t].die(),r.splice(t,1))}()}function s(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,e){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=e,console.log(e),this.element=document.createElement("span"),this.element.innerHTML=this.character,function(t,i){for(var e in i)t.style[e]=i[e]}(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}var h=["#D61C59","#E7D84B","#1B8798"],a=window.innerWidth,l=(window.innerHeight,{x:a/2,y:a/2}),r=[];document.addEventListener("mousemove",e),document.addEventListener("touchmove",i),document.addEventListener("touchstart",i),window.addEventListener("resize",t),o()}();