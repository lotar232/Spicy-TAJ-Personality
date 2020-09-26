{
    sendVirtualAssistantMessage('Exercise Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. adjust exercise level', 0);
    sendVirtualAssistantMessage('2. enable kinky exercising', 0);
    sendVirtualAssistantMessage('3. expected exercise frequency', 0);
    sendVirtualAssistantMessage('4. return', 0);
	

    let lobbyAnswer = createInput("Exercise level", 'kinky exercising', 'expected exercise frequency');
    while (true) {
        if (lobbyAnswer.isLike("level", "adjust exercise", "1")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Your current exercise level is ' + getVar("ExerciseLevel"));
            sendVirtualAssistantMessage('Would you like to bump your level up or down?');
			 let levelAnswer = createInput("Up","Down");
			    while (true) {
					if (levelAnswer.isLike("up")) {
						  setVar("ExerciseLevel", getVar ("ExerciseLevel")+1);
						  sendVirtualAssistantMessage('ooh.. lets step things up a bit!', 0);
						  //fixme  handle exercise level too high
						  levelAnswer.clearOptions();
						
					break;}
					else if (levelAnswer.isLike("down")) {
						  setVar("ExerciseLevel", getVar ("ExerciseLevel")-1);
						  sendVirtualAssistantMessage('oh %SlaveName%, I know you couldnt keep up!', 0);
						  //fixme  handle exercise level too low/underflow

						levelAnswer.clearOptions();
					break;}
					else {
						  sendVirtualAssistantMessage("Up or Down %slave%?");
						  lobbyAnswer.loop();
					}
			
				}
            break;
        } else if (lobbyAnswer.isLike("kinky", "kink", "2")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new buttplug? How exciting! %Grin%');
         
            break;
        } else if (lobbyAnswer.isLike("expected", "frequency", "3")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new chastity cage? How exciting! %Grin%');
            setupNewCage();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Adjust exercise level");
            sendVirtualAssistantMessage("- Enable/disable kinky workouts");
            sendVirtualAssistantMessage("- change the expected workout frequency");
            sendVirtualAssistantMessage("- return");
            lobbyAnswer.loop();
        }
    }
}