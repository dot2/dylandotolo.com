!function(){function e(){u=window.innerWidth,v=350,w={x:u/2,y:v/2},h=document.getElementById("large-header"),h.style.height=v+"px",f=document.getElementById("demo-canvas"),f.width=u,f.height=v,m=f.getContext("2d"),g=[];for(var e=0;u>e;e+=u/20)for(var t=0;v>t;t+=v/20){var n=e+Math.random()*u/20,o=t+Math.random()*v/20,i={x:n,originX:n,y:o,originY:o};g.push(i)}for(var a=0;a<g.length;a++){for(var r=[],c=g[a],l=0;l<g.length;l++){var y=g[l];if(c!=y){for(var p=!1,x=0;5>x;x++)p||void 0==r[x]&&(r[x]=y,p=!0);for(var x=0;5>x;x++)p||s(c,y)<s(c,r[x])&&(r[x]=y,p=!0)}}c.closest=r}for(var a in g){var M=new d(g[a],2+2*Math.random(),"rgba(255,255,255,0.3)");g[a].circle=M}}function t(){"ontouchstart"in window||window.addEventListener("mousemove",n),window.addEventListener("scroll",o),window.addEventListener("resize",i)}function n(e){var t=posy=0;e.pageX||e.pageY?(t=e.pageX,posy=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),w.x=t,w.y=posy}function o(){y=document.body.scrollTop>v?!1:!0}function i(){u=window.innerWidth,v=window.innerHeight,h.style.height=v+"px",f.width=u,f.height=v}function a(){r();for(var e in g)c(g[e])}function r(){if(y){m.clearRect(0,0,u,v);for(var e in g)Math.abs(s(w,g[e]))<4e3?(g[e].active=.3,g[e].circle.active=.6):Math.abs(s(w,g[e]))<2e4?(g[e].active=.1,g[e].circle.active=.3):Math.abs(s(w,g[e]))<4e4?(g[e].active=.02,g[e].circle.active=.1):(g[e].active=0,g[e].circle.active=0),l(g[e]),g[e].circle.draw()}requestAnimationFrame(r)}function c(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){c(e)}})}function l(e){if(e.active)for(var t in e.closest)m.beginPath(),m.moveTo(e.x,e.y),m.lineTo(e.closest[t].x,e.closest[t].y),m.strokeStyle="rgba(3,169,244,"+e.active+")",m.stroke()}function d(e,t,n){var o=this;!function(){o.pos=e||null,o.radius=t||null,o.color=n||null}(),this.draw=function(){o.active&&(m.beginPath(),m.arc(o.pos.x,o.pos.y,o.radius,0,2*Math.PI,!1),m.fillStyle="rgba(3,169,244,"+o.active+")",m.fill())}}function s(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}var u,v,h,f,m,g,w,y=!0;e(),a()}();