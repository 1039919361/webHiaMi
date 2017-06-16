export default {
	inserted : function(el,binding,vnode) {
		let offsetTop = el.offsetTop;
		window.addEventListener('scroll',function(){
			let scrollTop=document.body.scrollTop;
			if(scrollTop>=offsetTop){
				el.style.position="fixed";
	            el.style.top=0;
	            el.style.left=0;
	            el.style.zIndex=999;
	            el.parentNode.style.paddingTop=offsetTop+'px';
			}else{
				el.style.position="relative";
          		el.parentNode.style.paddingTop=0+'px';
			}
		},false)
	}
}