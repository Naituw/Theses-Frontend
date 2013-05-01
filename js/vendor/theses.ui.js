$(document).ready(function(){
	// === Sidebar navigation === //
	
	$('.submenu > a').live('click',function(e)
	{
		e.preventDefault();
		var submenu = $(this).siblings('ul');
		var li = $(this).parents('li');
		var submenus = $('#sidebar li.submenu ul');
		var submenus_parents = $('#sidebar li.submenu');
		if(li.hasClass('open'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenu.slideUp();
			} else {
				submenu.fadeOut(250);
			}
			li.removeClass('open');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenus.slideUp();			
				submenu.slideDown();
			} else {
				submenus.fadeOut(250);			
				submenu.fadeIn(250);
			}
			submenus_parents.removeClass('open');		
			li.addClass('open');	
		}
	});
		
	$('#phone-dropdown').live('click',function(e)
	{
		var ul = $('#sidebar > ul');
		
		e.stopPropagation();
		e.preventDefault();
		if(ul.is(':visible')) {
			ul.slideUp(250);
		} else {
			ul.slideDown(250);
		}
	});
	$(document).click(function(event) { 
		if (!$('#phone-dropdown').is(':visible')) return;

		var ul = $('#sidebar > ul');

	    if($(event.target).parents().index($('#phone-dropdown')) == -1) {
	        if(ul.is(':visible')) {
				ul.slideUp(250);
			} 
	    }        
	})

	var waitForFinalEvent = (function () {
  		var timers = {};
  		return function (callback, ms, uniqueId) {
		    if (!uniqueId) {
		      uniqueId = "Don't call this twice without a uniqueId";
		    }
		    if (timers[uniqueId]) {
		      clearTimeout (timers[uniqueId]);
		    }
		    timers[uniqueId] = setTimeout(callback, ms);
		};
	})();
	
	// === Resize window related === //
	$(window).resize(function(){waitForFinalEvent(function(){	
		var ul = $('#sidebar > ul');
		var windowHeight = $(window).height();
		
		var contentHeight = windowHeight - 69;

		if($(window).width() > 479)
		{
			ul.css({'display':'block'});	
			$('#content-header .btn-group').css({width:'auto'});		
		}
		if($(window).width() < 479)
		{
			contentHeight -= 35;
			ul.css({'display':'none'});
		}
		if($(window).width() > 768)
		{
			$('#user-nav > ul').css({width:'auto',margin:'0'});
            $('#content-header .btn-group').css({width:'auto'});
		}

		contentHeight += 25;

		$('#content').css({'min-height':contentHeight});
		$('#content-container').css({'min-height':contentHeight});
	},200,"Theses-Content-Height")});
	
	if($(window).width() < 468)
	{
		var ul = $('#sidebar > ul');
		ul.css({'display':'none'});
	}
	if($(window).width() > 479)
	{
		var ul = $('#sidebar > ul');
	   $('#content-header .btn-group').css({width:'auto'});
		ul.css({'display':'block'});
	}
	
	// === Tooltips === //
	$('.tip').tooltip();	
	$('.tip-left').tooltip({ placement: 'left' });	
	$('.tip-right').tooltip({ placement: 'right' });	
	$('.tip-top').tooltip({ placement: 'top' });	
	$('.tip-bottom').tooltip({ placement: 'bottom' });	
	
	// === Search input typeahead === //
	$('#search input[type=text]').typeahead({
		source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons','Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs','Widgets'],
		items: 4
	});

	FastClick.attach(document.body);
});