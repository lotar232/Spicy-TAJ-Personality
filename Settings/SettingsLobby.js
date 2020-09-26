{

    if (getVar(VARIABLE_WAITING_FOR_CHASTITY_KEY_RETURN, false)) {
        sendVirtualAssistantMessage('%SlaveName%');
        sendVirtualAssistantMessage('Last time you left I allowed you to unlock yourself and since then I haven\'t locked you back yet');
        sendVirtualAssistantMessage('Are you ready to be locked again?', 0);

        if (createYesOrNoQuestion()) {
            sendVirtualAssistantMessage('Great!');
            onChastityKeyReturn();
        } else {
            sendVirtualAssistantMessage('Don\'t abuse my trust %SlaveName%!');
        }
    }

    sendVirtualAssistantMessage(getWelcomeMessage(), false);

    let exitRequest = false;

    while (!exitRequest) {
        let lobbyAnswer = createInput("Sound", "Toys", "Dungeon", "Exercise",  "humiliation", "Chastity", "Exit", "video","Pishock","lovense");
        while (true) {
            if (lobbyAnswer.isLike("Sound", "noise", "volume")) {
                lobbyAnswer.clearOptions();
                configBlockSounds();
                break;
            } else if (lobbyAnswer.isLike("chore", "clean", "dust", "wipe", "wash")) {
                lobbyAnswer.clearOptions();
                run("Chore/ChoreMenu.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("dungeon", "spanking", "spankzchoir", "selfbondage", "pain", "torture", "chamber", "punish")) {
                lobbyAnswer.clearOptions();
                // sendVirtualAssistantMessage("This is not supported yet!");
                run("Dungeon/PunishmentBase.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("setting", "adjust", "calibrate", "setup")) {
                lobbyAnswer.clearOptions();
                run('Assistant/Settings/Settings.js');
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("shop", "buy", "purchase", "spent", "gold", "store")) {
                sendVirtualAssistantMessage("This is not supported yet!");
                break;
            } else if (lobbyAnswer.isLike("fitness", "health")) {
                lobbyAnswer.clearOptions();
                run("Exercise/ExerciseBase.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("report", "exercise")) {
                lobbyAnswer.clearOptions();
                run("Exercise/reportexercise.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("work", "study")) {
                lobbyAnswer.clearOptions();
                run("WorkMode/GNMWorkMode.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("rule", "house", "commands", "orders")) {
                lobbyAnswer.clearOptions();
                run("Rules/HouseRules.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
			 } else if (lobbyAnswer.isLike("video")) {
                lobbyAnswer.clearOptions();
                run("Video/vidtest.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
			 } else if (lobbyAnswer.isLike("pishock")) {
                lobbyAnswer.clearOptions();
                testpishock(0,100,5,1);
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
			} else if (lobbyAnswer.isLike("lovense")) {
                lobbyAnswer.clearOptions();
                testpishock(0,100,5,1);
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
			} else if (lobbyAnswer.isLike("save", "end", "quit", "stop", "leave", "close", "finish", "exit")) {
                sendVirtualAssistantMessage(random("closing settings", "lets go back to the main lobby", "lets see how well you can handle these settings"));
                lobbyAnswer.clearOptions();
				exitRequest=true;
                break;
            } else if (lobbyAnswer.isLike("pin", "board", "notices", "news")) {
                lobbyAnswer.clearOptions();
                run("Assistant/PinBoard.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("chastity")) {
                lobbyAnswer.clearOptions();
                run('Assistant/ChastityLobby.js');
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else {
                sendVirtualAssistantMessage("You have the following options %SlaveName%");
                sendVirtualAssistantMessage("Configure Sounds");
                sendVirtualAssistantMessage("Request a chore");
                sendVirtualAssistantMessage("Enter the dungeon");
                sendVirtualAssistantMessage("Check settings");
                sendVirtualAssistantMessage("Enter the shop");
                sendVirtualAssistantMessage("Do some fitness");
                sendVirtualAssistantMessage("Report for exercise (you can only complete an exercise every 10 hours)");
                sendVirtualAssistantMessage("Work/Study mode");
                sendVirtualAssistantMessage("Request to view the rules ");
                sendVirtualAssistantMessage("View the pin-board");
                sendVirtualAssistantMessage("Or save and leave the program");
                break;
            }
        }

        lobbyAnswer.clearOptions();
    }
}

function configBlockSounds{
	 endVirtualAssistantMessage('Would you like to disable certain sounds while playing?', 0);

        if (createYesOrNoQuestion()) {
            sendVirtualAssistantMessage(random('Excellent... sometimes a Mistress likes her Sub to suffer in silence!','suffer in silence', '%Slavename%, wearing that gag is giving you ideas'));
            setVar("blocksounds", true);
        } else {
              setVar("blocksounds", false);
			  sendVirtualAssistantMessage(random('Excellent... all the more senses for your Mistress to manipulate!','good, Sound will help drown out your cries', '%Slavename%, it will be like Mistress is in your ear!'));
  
        }
	}


