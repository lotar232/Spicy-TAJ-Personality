{
    sendVirtualAssistantMessage('Toy Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Add new dildo', 0);
    sendVirtualAssistantMessage('2. Add new buttplug', 0);
    sendVirtualAssistantMessage('3. Add new Lovense plug', 0);
	sendVirtualAssistantMessage('4. Add new chastity cage', 0);
	sendVirtualAssistantMessage('5. Add new pishock', 0);
	sendVirtualAssistantMessage('6. setup other toys', 0);
	sendVirtualAssistantMessage('7. Add new chastity cage', 0);

    let lobbyAnswer = createInput("Add new dildo", 'Add new buttplug', 'add new lovense buttplug', 'Add new chastity cage', 'Add new pishock', 'Setup Other Toys', 'Return');
    while (true) {
        if (lobbyAnswer.isLike("new dildo", "add dildo", "1")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new dildo? How exciting! %Grin%');
            setupNewDildo();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike("new buttplug", "add buttplug","2")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new buttplug? How exciting! %Grin%');
            setupNewButtplug();
            run('Assistant/Settings/Toys.js');
            break;
	    } else if (lobbyAnswer.isLike("pishock", "add pishock","5")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new shocker? How .. ummm... electrifying! %Grin%');
            setupPishock();
            run('Assistant/Settings/Toys.js');
            break;
	    } else if (lobbyAnswer.isLike("lovense", "add lovense", "hush", "edge", "3")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new bluetooth plug? I cant wait to get control! %Grin%');
            setupLovense();
            run('Assistant/Settings/Toys.js');
            break;
				
			
        } else if (lobbyAnswer.isLike("new cage", "add cage", "add chastity", "new chastity","4")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new chastity cage? How exciting! %Grin%');
            setupNewCage();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if (lobbyAnswer.isLike('other', 'setup toys',"6")) {
            lobbyAnswer.clearOptions();
            setupToys(true);
            run('Assistant/Settings/Toys.js');
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            sendVirtualAssistantMessage("- Add new buttplug");
            sendVirtualAssistantMessage("- Add new chastity cage");
            sendVirtualAssistantMessage("- Setup other toys");
            lobbyAnswer.loop();
        }
    }
}