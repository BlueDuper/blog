;$(function(){
	'use stric';//使用严格函数
	var sidebar = $('#sidebar'),
	    mask = $('.mask'),
	    backButton = $('.back-to-top'),
	    sidebar_trigger = $('#sidebar_trigger'),
        slip = $('.anniu');


	function showSideBar() 
	{
		mask.fadeIn();
    	sidebar.css('right',0);
		
	}
   function hideSideBar() 
   {
    	mask.fadeOut();
    	sidebar.css('right',-sidebar.width()); 
    } 
   function a() 
   {
         $('html,body').animate({
         	scrollTop:0
         },800)   	

    } 
 /*   function b()
    {
        $(".anniu").click(function(){
        var h=$(window).scrollTop(); //获取当前滚动条距离顶部的位置
 $("html,body").animate({ scrollTop: h+800 }, 300);//点击按钮向下移动800px，时间为800毫秒
});

    }*/
    
    $(window).on('scroll',function(){
    	if ($(window).scrollTop() > $(window).height())
    		backButton.fadeIn();
    	else
    		backButton.fadeOut();
    })
    $(window).trigger('scroll');

    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    backButton.on('click',a);
/*    slip.on('click',b);*/
})
//自调用函数，自动加载