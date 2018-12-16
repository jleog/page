function calculate(){
	if ( document.getElementById('q2').value != 0 )
	{
		var weekly = document.getElementById('q1').value*
		document.getElementById('q2').value*
		document.getElementById('q3').value;

		var monthly = weekly*52/12;
		var yearly = monthly*12;
		document.getElementById('weekly').innerHTML = parseInt(weekly);
		document.getElementById('monthly').innerHTML = parseInt(monthly);
		document.getElementById('yearly').innerHTML = parseInt(yearly);
	}
}


 var months = new Array('January','February','March','April','May',
'June','July','August','September','October','November','December');
 var d = new Date();
 var month      =  months[d.getMonth()];
 var day   = d.getDate();
 var year = d.getFullYear();
 var suffix = 'th';
 if (day == 1) suffix = 'st';
 else if (day == 2) suffix = 'nd';
 else if (day == 3) suffix = 'rd';
 else if (day == 4) suffix = 'th';
 else if (day == 5) suffix = 'th';
 else if (day == 6) suffix = 'th';
 else if (day == 7) suffix = 'th';
 else if (day == 8) suffix = 'th';
 else if (day == 9) suffix = 'th';
 else if (day == 10) suffix = 'th';
 else if (day == 11) suffix = 'th';
 else if (day == 12) suffix = 'th';
 else if (day == 13) suffix = 'th';
 else if (day == 14) suffix = 'th';
 else if (day == 15) suffix = 'th';
 else if (day == 16) suffix = 'th';
 else if (day == 17) suffix = 'th';
 else if (day == 18) suffix = 'th';
 else if (day == 19) suffix = 'th';
 else if (day == 20) suffix = 'th';
 else if (day == 21) suffix = 'st';
 else if (day == 22) suffix = 'nd';
 else if (day == 23) suffix = 'rd';
 else if (day == 24) suffix = 'th';
 else if (day == 25) suffix = 'th';
 else if (day == 26) suffix = 'th';
 else if (day == 27) suffix = 'th';
 else if (day == 28) suffix = 'th';
 else if (day == 29) suffix = 'th';
 else if (day == 30) suffix = 'th';
 else if (day == 31) suffix = 'st';
