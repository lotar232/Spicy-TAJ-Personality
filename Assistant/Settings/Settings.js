{
    sendVirtualAssistantMessage('Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Toys', 0);
    sendVirtualAssistantMessage('2. Setup Limits', 0);
    sendVirtualAssistantMessage('3. Session length', 0);
    sendVirtualAssistantMessage('4. Sounds', 0);
    sendVirtualAssistantMessage('5. exercise', 0);
    sendVirtualAssistantMessage('6. return', 0);

    let lobbyAnswer = createInput("Toys", 'Session length', 'Setup Limits', 'sounds','exercise', 'Return');
    while (true) {
        if (lobbyAnswer.isLike("toy","1")) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Toys.js');
            break;
        } else if(lobbyAnswer.isLike('limit', '2')) {
            lobbyAnswer.clearOptions();
            setupLimits();
            break;
        } else if(lobbyAnswer.isLike('session length', '3')) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Devotion.js');
            break;
        } else if(lobbyAnswer.isLike('sound', '4')) {
            lobbyAnswer.clearOptions();
            configBlockSounds();
            break;
		} else if(lobbyAnswer.isLike('exercise','fitness','workout','5')) {
            lobbyAnswer.clearOptions();
              run('Assistant/Settings/Exercise.js');
            break;
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return','6')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Toys");
            sendVirtualAssistantMessage("- Session length");
            sendVirtualAssistantMessage("- Setup Limits");
            sendVirtualAssistantMessage("- Sounds");
			sendVirtualAssistantMessage("- Exercise");
			
            lobbyAnswer.loop();
        }
    }
}


function configBlockSounds(){
	 sendVirtualAssistantMessage('Would you like to disable certain sounds while playing?', 0);

        if (createYesOrNoQuestion()) {
            sendVirtualAssistantMessage(random('Excellent... sometimes a Mistress likes her Sub to suffer in silence!','suffer in silence', '%Slavename%, wearing that gag is giving you ideas'));
            setVar("blocksounds", true);
        } else {
              setVar("blocksounds", false);
			  sendVirtualAssistantMessage(random('Excellent... all the more senses for your Mistress to manipulate!','good, Sound will help drown out your cries', '%Slavename%, it will be like Mistress is in your ear!'));
  
        }
	}

