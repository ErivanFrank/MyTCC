var secs = 01;
var mins = 00;
var timer = 0;
var flagStart = true;



function tempoJogo(){
	
	if(flagStart){
		document.getElementById("cronometro").value="PAUSAR";		
		flagStart = false;
		iniTempo();
	}else{
		document.getElementById("cronometro").value="INICIAR";
		clearTimeout(timer);	
		flagStart = true;		
	}
}


function iniTempo() {

    var min = document.getElementById('tempo');
    var seg = document.getElementById('seg');
	
	seg.value = secs;
    min.value = mins;
    if(secs > 59) {
		secs = 01;
		mins++;
        seg.value = secs;
    }
    secs++;
    timer = setTimeout('iniTempo('+secs+')',200);		
}

function resetTempo(){

	secs = 01;
	mins = 00;
	document.getElementById('tempo').value = 0;
	document.getElementById('seg').value = 0;
	document.getElementById("cronometro").value="INICIAR";
	flagStart = true;	
	clearTimeout(timer);
}