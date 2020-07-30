$(document).ready(function() {
	setInterval(function() {
		slide = $('.slider img.active');

		if(slide.attr('src') == $('.slider img:last-child').attr('src'))
		{
			slide.removeClass('active');
			$('.slider img:first-child').addClass('active');

			$('.slider .container').animate({'margin-left':0},800);
		}
		else
		{
			slide.removeClass('active');
			slide.next().addClass('active');

			var imageWidth = $('.slider img:first-child').outerWidth() + 4;
			var position = parseInt($('.slider .container').css('margin-left').replace('px',''));
			var displacement = position - imageWidth;

			$('.slider .container').animate({'margin-left':displacement},800);
		}
	}, 5000);

	$('.biography a').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();

		if($(this).hasClass('about'))
		{
			$('.biography h2').text('About Us');
			$('.biography .content').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugiat minima, neque suscipit animi eveniet accusantium. Facilis dicta sapiente dolore quod, neque tenetur natus sit odio quos explicabo, doloribus ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugiat minima, neque suscipit animi eveniet accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugiat minima, neque suscipit animi eveniet accusantium. Facilis dicta sapiente dolore quod, neque tenetur natus sit odio quos explicabo, doloribus ea.');
		}
		else if($(this).hasClass('mision'))
		{
			$('.biography h2').text('The Enermex Mision Statements');
			$('.biography .content').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates, nemo rem quibusdam temporibus dolorum maiores, veniam eos ullam, iusto ex amet, cumque. Natus, totam ab repellendus voluptate. Magni, placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni, eum, minus odio commodi deserunt iste animi! Voluptatem obcaecati molestiae quae ipsa sapiente deserunt quas, commodi, perspiciatis accusamus eum, assumenda.');
		}
		else if($(this).hasClass('we'))
		{
			$('.biography h2').text('We');
			$('.biography .content').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint id aperiam debitis, quasi atque, sequi obcaecati repudiandae optio ut dignissimos laboriosam nisi. Mollitia nemo laudantium adipisci eos atque hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus perferendis quod nemo dolorem eaque accusantium pariatur nulla ex, quisquam dolores libero dolore, iure natus tempora, consequatur praesentium architecto fugiat aut.');
		}
		else if($(this).hasClass('focus'))
		{
			$('.biography h2').text('Key Business Sectors and Focus');
			$('.biography .content').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consectetur a sed animi accusantium minus id quibusdam exercitationem placeat optio, aliquid reiciendis sapiente aut quisquam fuga, expedita veniam sint. Ipsum.');
		}
	});

    $('.video-play').on('click',function(e){
    	$(this).hide();
    	var video = document.getElementById("video");

		video.play();
		video.setAttribute('controls','controls');
    });

	$('.tabs div').on('click',function(e){
		if($(this).hasClass('company'))
		{
			$('.tabs div.active').removeClass('active');
			$('.containers article.active').removeClass('active');

			$('.tabs div.company').addClass('active');
			$('.containers article.company').addClass('active');
		}
		else if($(this).hasClass('events'))
		{
			$('.tabs div.active').removeClass('active');
			$('.containers article.active').removeClass('active');

			$('.tabs div.events').addClass('active');
			$('.containers article.events').addClass('active');
		}
		else if($(this).hasClass('products'))
		{
			$('.tabs div.active').removeClass('active');
			$('.containers article.active').removeClass('active');

			$('.tabs div.products').addClass('active');
			$('.containers article.products').addClass('active');
		}
		else if($(this).hasClass('videos'))
		{
			$('.tabs div.active').removeClass('active');
			$('.containers article.active').removeClass('active');

			$('.tabs div.videos').addClass('active');
			$('.containers article.videos').addClass('active');
		}
	});

	if($('#map').length){
		var geocoder = new google.maps.Geocoder();
		var address  = $('#address').text();
		var title = $('#company-name').text();
		var latitud, longitud;

		geocoder.geocode({'address':address},function(results,status){
			latitud = results[0].geometry.location.k;
			longitud  = results[0].geometry.location.D;

			var map = new GMaps({
		        el: '#map',
		        lat: latitud,
		        lng: longitud,
		        zoomControl : true,
		        zoomControlOpt: {
		            style : 'SMALL',
		            position: 'TOP_LEFT'
		        },
		        panControl : false,
		        streetViewControl : false,
		        mapTypeControl: false,
		        overviewMapControl: false
		    });

		    map.addMarker({
		    	lat: latitud,
		        lng: longitud,
		        title: title,
		        click: function(e){

		        }
		    });
		});
	}

	if($('.essence').length){
		var url = document.URL;
		var fb = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url);
		var tw = 'https://twitter.com/home?status=' + encodeURIComponent('Leyendo ' + url);
		var gp = 'https://plus.google.com/share?url=' + encodeURIComponent(url);

		$('#facebook').attr('href',fb); 
		$('#twitter').attr('href',tw); 
		$('#googleplus').attr('href',gp); 
	}
});