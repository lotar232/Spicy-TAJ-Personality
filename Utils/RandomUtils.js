/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function randomInteger(min, max) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}

function waitForDone() {
	answer = createInput("done");
		while(true){
		if(answer.containsIgnoreCase("ready","ok","yes","done","go")) {

			break;
			}
		
			else
				answer.loop();
		}
	
	answer.clearOptions();
	return;
	
}


function waitForReady() {
	answer = createInput("Ready");
		while(true){
		if(answer.containsIgnoreCase("ready","ok","yes","done","go")) {

			break;
			}
		
			else
				answer.loop();
		}
	
	answer.clearOptions();
	return;
	
}


function waitForDone2(delay) {
	response = createInput(delay+randomInteger(1,3),"done");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finshed")) {
			sendVirtualAssistantMessage(" %GNMGood% !"); //#EnemaChat
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); //#EnemaChat	
				response.loop();
				 }
			else
					 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); //#EnemaChat
				response.loop();
		}
}
