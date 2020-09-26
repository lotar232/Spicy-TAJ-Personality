setVar("GroundingCounter",0);

switch(getVar("Punisher")) {

	case 1 :
	// @Goto(Hello)
	break;
	case 2 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend1Name% ..",1);
	setSender(2);
	break;
	case 3 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend2Name% ..",1);
	setSender(3);
	break;
	case 4 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend3Name% ..",1);
	setSender(4);

	break;
}


sendMessage("Well "+ random("hello","hi") +" %SlaveName%");// #DT4 @Goto(Start)


switch(getVar("Punisher")){
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	pm2=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 3) 
		pm2=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 5) 
		pm2=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 6) 
		pm2=3;
		break;
	}

	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	if(getVar("SubEndurance")>=8) {
	pm2=3;}
	else if (getVar("SubEndurance")>4){
	pm2=2;}
	else  
	pm2=1;
	break;
	case 3 :
	//(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline I just love that","You're not gonna like this %GNMGrin%","I don't think your %GNMCock% will enjoy this","This is fun!"));// #DT4

	if (getVar("SubEndurance")>=7) {
	pm2=3;}
	else if (getVar("SubEndurance")>3){
	pm2=2;}
	else  
	pm2=1;
	

	break;
	case 4 :
	//(Contact3)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4

	if (getVar("SubEndurance")>=6) {
	pm2=3;}
	else if (getVar("SubEndurance")>2){
	pm2=2;}
	else  
	pm2=1;
	
	break;

	
}


switch(pm2) {
	
	
case 1 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(440, 680));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
break;
case 2 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(600, 840));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4

break;
case 3 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(800, 1100));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
break;
}

   sendMessage("Fetch your shock collar %SlaveName%" );
	setVar("shocks_recieved", 0);
	showImage("Images/Spicy/Toys/ShockCollar.jpg");
	sleep(10);
    answer0 = sendInput("Got it? ");
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else
    {
        sendMessage("%Good% ");
    }
     answer1 = sendInput("Turn it on...is it charged up slave??? ");
    if (answer1.isLike("yes"))
    {
        sendMessage("%Good% ");
		 pishock(0,50,2,1);  //sends a buzz 
	
    }
    else
    {
        sendMessage("well go charge it quickly and tell me when its done ");
		waitForDone();
    }
    sendMessage("Go ahead and wrap the collar around your %balls%");
    sleep(10);
sendMessage("%Grin% "); //#DT4
sendMessage("You will not enjoy this! "); //#DT4


//(Intro)
	sendMessage("So %SlaveName% .."); //#DT4
	sendMessage("I'm grounding you to your computer with a rather simple task.. "); //#DT4
	sendMessage("I'm turning the screen black"); //#DT4
	sendMessage("Every once in a while a few numbers will appear and you will have exactly 4 seconds to write back the number colored red ");//#DT4
	sendMessage("If not I promise you your %DomHonorific% won't be happy.. ");//#DT4
	sendMessage("And ohh.. ");//#DT4
	pishock(0,35,2,0); 
	sendMessage("I'm going to use this little toy to help you stay focused %lol%"); //#DT4
	setVar("shocks_recieved", 0);
	sendMessage("Enjoy!"); //#DT4 
//	 @SetVar[Timer]=[0]
	// @CountVar[Timer]
	donetime=setDate();
	donetime.addSecond(getVar("GroundingSet"));
	shocklevel=20
	while(!(donetime.hasPassed())){
//(Task)
		 showImage("Images/Spicy/Punishment/Grounding/BlackBase.*"); 
		 wait(randomInteger(3,30));
		 answerval= randomInteger(1,9);
		 
		  showImage("Images/Spicy/Punishment/Grounding/Numbers/Black"+answerval+".*",1); 
	 
		//here to prompt an answer or does that hint too much?
		//this trips something in TTS??? I wonder if that still hapens with non empty string?
		answer=sendInput("  ",4);
		 while (true){
			if( answer.isTimeout()) {
			sendMessage(random("Time out..","you have to be faster %slave%", "Faster Bitch!") );
			showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
			changeMeritLow(true);
				pishock(0,shocklevel,2,0); 
				shocklevel=shocklevel+10;
			//@TempFlag(PunishmentComplete)
			donetime=donetime.addSecond(randomInteger(60,120));
			break;
			} else{
				if(answer.isInteger()) {
					if ( answer.getInteger() == answerval){   
						 sendMessage(random("Correct","right","yep"));
						 showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						 break;
					}
					else{ pishock(0,shocklevel,2,0); 
						if (shocklevel<100)
							{shocklevel=shocklevel+10;}
						sendMessage("Wrong.. You were supposed to write "+answerval+".. ");
						showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						changeMeritLow(true);
						//@TempFlag(PunishmentComplete)
						donetime=donetime.addSecond(randomInteger(60,120));
						break;
					}
				}else {pishock(0,shocklevel,2,0); 
						if (shocklevel<100)
							{shocklevel=shocklevel+10;}
						sendMessage("Wrong.. You were supposed to write "+answerval+"..");
						sendMessage("that wasn't even a number %SlaveName% ");
						pishock(0,shocklevel,2,0);
						showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						changeMeritLow(true);
						//@TempFlag(PunishmentComplete)
						donetime=donetime.addSecond(randomInteger(60,120));
						break;
				}
		 }
	}
 
	}
    setTempVar("E12Complete", true);
 setVar("PunishmentComplete", true);
 setVar("PunishmentCompleted", 412);
 run("Dungeon/PunishmentBaseEnd.js");