$(function(){
	var header=document.getElementById('header');
	var headroom=new  Headroom(header);
	headroom.init();
	//menu responsive
	//Calculamos el ancho de la pag
	var ancho=$(window).width(),
		enlaces=$('#enlaces'),
		btnMenu=$('#btn-menu'),
		icono=$('#btn-menu .icono')
		if (ancho<800) {
			enlaces.hide();
			icono.addClass('fa-chevron-down');
		}
		btnMenu.on('click',function(e){
			enlaces.slideToggle(); //con esto desaparece si apreto
			icono.toggleClass('fa-chevron-down');
			icono.toggleClass('fa-chevron-up');

		});
		$(window).on('resize',function(){
			if ($(this).width()>800){
				enlaces.show();
				icono.addClass('fa-chevron-down');
				icono.removeClass('fa-chevron-up');
			}else{
				enlaces.hide();
				icono.addClass('fa-chevron-down');
				icono.removeClass('fa-chevron-up');
			}	
		});
});
