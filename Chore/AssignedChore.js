 //@CheckFlag(AssignedChoreFirstTime) @SetFlag(AssignedChoreFirstTime)
function pishockChore(choretime){
	  sendVirtualAssistantMessage("Fetch your shock collar %SlaveName%" );
	setVar("shocks_recieved", 0);
	showImage("Images/Spicy/Toys/ShockCollar.jpg");
	sleep(10);
	sendVirtualAssistantMessage("Got it? " );
    answer0 = createInput("Yes", "No");
	
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage("%Good% ");
    }
    else
    {
        sendVirtualAssistantMessage("%bad% ");
		sendVirtualAssistantMessage("are you able to go fetch it now boy and connect it? ");
		
		//fixme... need to handle this case with yes/no and assing punishment if toy isn't available.
    }
     answer1 = sendInput("Turn it on...is it charged up slave??? ");
    if (answer1.isLike("yes"))
    {
        sendVirtualAssistantMessage("%Good% ");

	
    }
    else
    {
        sendVirtualAssistantMessage("well go charge it quickly and tell me when its done ");
		waitForDone();
    }
	pishock(0,50,2,1);  //sends a buzz 
    sendVirtualAssistantMessage("Go ahead and wrap the collar around your %balls%");
    sleep(10);
sendVirtualAssistantMessage("%Grin% "); //#DT4

 sendVirtualAssistantMessage("Slave, go ahead and start your chore... don't worry about time....");
  pishock(0,20,2,0);  //sends a buzz 
  sendVirtualAssistantMessage("I'll give you a little reminder when its time to come back");
  
  
  	setDate("TimerEarly",setDate().addMinute(cleaningTimeTemp-1));
	setDate("TimerLate",setDate().addMinute(cleaningTimeTemp+10));
            CHORE_WATCH.reset();
            CHORE_WATCH.start();


	minutes=0;
	startshock=20;
	duration=2;
		answer = createInput(60, "Done");	
	while (true){
	if(answer.containsIgnoreCase("done","ok","finished","yes")){
		answer.clearOptions();
		sendDebugMessage("done observed");
		sendVirtualAssistantMessage(" I hope you did a job %domHonorific% %domName% will be proud of",4);	
		sendVirtualAssistantMessage("did you completely finish the job you were assigned??",0);	
		    answer0 = createInput("Yes", "No");
	
				if (answer0.isLike("yes"))
				{
					sendVirtualAssistantMessage("%Good% %slave%",2);
					break;
				}
				else
				{ if (65<=randomInteger(0,100)) {
					sendVirtualAssistantMessage("that's pathetic slave!");
					sendVirtualAssistantMessage(random("but I suppose I'll let you slide this time", "but I don't have time to supervise your lazy ass"));
					sendVirtualAssistantMessage(random("but I can't let this go entirely uncorrected", "but you must be punished","however.... you must suffer"));
					sendVirtualAssistantMessage(random("oh I know!", "aha!", "", "I got it!", "take this!"));
					pishock(0,70,2,0);
					break;
					}
					else {pishock(0,70,2,0);
					sendVirtualAssistantMessage("that is not what you were told to do and is disrespectful of myself and  %domHonorific% %domName%",2);	
					sendVirtualAssistantMessage("get back to work %bitch%...");	
					sendVirtualAssistantMessage("I'll give you a few minutes before the shocks start again ");	
					choretime=minutes + randomInteger(3,8);
					answer.clearOptions();
					answer = createInput(60, "Done");
					}
					
				}
	
	}else if (answer.isTimeout()){
		minutes=minutes+1;
		sendDebugMessage("chore shock minutes in= " +minutes);
		if (minutes<choretime)
		{sleep(1);
		}
		else
		{  pishock(0,startshock,duration,0);
		if (startshock<100)
			{startshock=startshock+10;}
		else
			{duration=duration+1;}
		
		}
		answer.clearOptions();
		answer = createInput(60, "Done");
		
	}
}




}

function lovenseChore(choretime){
	//fixme needs to be written
		  sendVirtualAssistantMessage("%SlaveName%, I want you to get your Lovense plug" );
	
	showImage("Images/Spicy/Toys/lovense.jpg");
	sleep(10);
	sendVirtualAssistantMessage("Got it? " );
    answer0 = createInput("Yes", "No");
	
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage("%Good% ");
    }
    else
    {
        sendVirtualAssistantMessage("%bad% ");
    }
	sendVirtualAssistantMessage("go ahead and turn it on, and connect it to the lovense connect SW on your computer" );
     answer1 = sendInput("Turn it on...is it charged up and connected slave??? ");
    if (answer1.isLike("yes"))
    {
        sendVirtualAssistantMessage("%Good% ");
		sendVirtualAssistantMessage(" lets give this a little test");
		enumeratelovense();
		buttplugid=getVar("LovenseButtplugIndex");
		toy0=getVar("Lovense"+buttplugid+"ID");
		vibratelovense(4, toy0);
		sleep(1);
		vibratelovense(0, toy0);
		batterylevel= getbatterylovense(toy0);
		sendVirtualAssistantMessage("it looks like your battery level is " + batterylevel);
		if (batterylevel<15){

			sendVirtualAssistantMessage("which is lower than I'd like %slavename%...");
			sendVirtualAssistantMessage("%subname%, plug it in for a few minutes right now!", 20);
			sendVirtualAssistantMessage("%slavename%, you can just wait there, Kneeling on the floor.... ", 15);
			sendVirtualAssistantMessage("Reflecting on why its a sub's duty to keep all of his toys ready ", 15);
			waitForDone(randomInteger(240,500));		
		}
		if (batterylevel>90){

			sendVirtualAssistantMessage("Good job being prepared %subname%");
			
		}


	
    }
    else
    {
        sendVirtualAssistantMessage("well go charge it quickly and tell me when its done ");
		waitForDone();
    }
	
    sendVirtualAssistantMessage("Go ahead and lube up the toy and get it inside you");
    sendVirtualAssistantMessage("let me know when you're done.");
	
	waitForDone();
	sendVirtualAssistantMessage("Slave, go ahead and start your chore... don't worry about time....");
  sendVirtualAssistantMessage("I'll give you a little buzz each minute and put you on notice when your time is up");
	vibratelovense(4, toy0);
	sleep(1);
	vibratelovense(0, toy0);
    sleep(10);
sendVirtualAssistantMessage("%Grin% "); //#DT4
	
  	setDate("TimerEarly",setDate().addMinute(cleaningTimeTemp-1));
	setDate("TimerLate",setDate().addMinute(cleaningTimeTemp+10));
            CHORE_WATCH.reset();
            CHORE_WATCH.start();


	minutes=0;

		answer = createInput(60, "Done");	
	while (true){
	if(answer.containsIgnoreCase("done","ok","finished","yes")){
		answer.clearOptions();
		sendDebugMessage("done observed");
		sendVirtualAssistantMessage(" I hope you did a job %domHonorific% %domName% will be proud of",4);	
		sendVirtualAssistantMessage("%subname%, did you completely finish the job you were assigned??",0);	
		    answer0 = createInput("Yes", "No");
	
				if (answer0.isLike("yes"))
				{	answer0.clearOptions();
					vibratelovense(0, toy0);
					sendVirtualAssistantMessage("%Good% %slave%",2);
					
					
					break;
				}
				else
				{ if (65<=randomInteger(0,100)) {
					vibratelovense(0, toy0);
					sendVirtualAssistantMessage("that's pathetic slave!");
					sendVirtualAssistantMessage(random("but I suppose I'll let you slide this time", "but I don't have time to supervise your lazy ass"));
					sendVirtualAssistantMessage(random("but I can't let this go entirely uncorrected", "but you must be punished","however.... you must suffer"));
					sendVirtualAssistantMessage(random("oh I know!", "aha!", "", "I got it!", "take this!") + " I'm assigning you punishment points");
					vibratelovense(0, toy0);
					addPunishmentPoints(50);
					break;
					}
					else {
					sendVirtualAssistantMessage("that is not what you were told to do and is disrespectful of myself and  %domHonorific% %domName%",2);	
					sendVirtualAssistantMessage("get back to work %slaveName%...");	
					sendVirtualAssistantMessage("I'll give you a few more minutes ");	
					vibratelovense(0, toy0);
					choretime=minutes + randomInteger(3,8);
					answer.clearOptions();
					answer = createInput(60, "Done");
					}
					
				}
	
	}else if (answer.isTimeout()){
		minutes=minutes+1;
		vibratelovense(4, toy0);
		sleep(1);
		vibratelovense(0, toy0);
		sendDebugMessage("chore lovense minutes in= " +minutes);
		if (minutes<choretime)
		{vibratelovense(4, toy0);
		sleep(1);
		vibratelovense(0, toy0);
		}
		else
		{  vibratelovense( randomInteger(14,20),toy0);
		
		
		}
		answer.clearOptions();
		answer = createInput(60, "Done");
		
	}
}



}


function waitForChoreFinish(cleaningTimeTemp){
		setDate("TimerEarly",setDate().addMinute(cleaningTimeTemp-1));
	setDate("TimerLate",setDate().addMinute(cleaningTimeTemp+10));
            CHORE_WATCH.reset();
            CHORE_WATCH.start();
   waitForDone(10000);
	   if (getDate("TimerLate").hasPassed()){
	   //slave is late
			sendVirtualAssistantMessage(random("You're late!","You're late %SlaveName%","You're late slut..","Late are we?","You know you're late right?") );
			sendVirtualAssistantMessage(random("I dont tolerate late!","You know I dont tolerate it when you're late","There is zero tolerance for being late and lazy!"));  
			setVar("Preason_BadChores", true);
			sendVirtualAssistantMessage("I have assigned you punishment points");
			 addPunishmentPoints(50);

 
   }else   if (getDate("TimerEarly").hasPassed()){
	   //slave is on time

			sendVirtualAssistantMessage("%GNMgood% %SlaveName%"); 
			changeMeritMedium(false); 
			sendVirtualAssistantMessage("Allow me to reward your "+ random("splendid","good","exelent","lovely")+" "+ random("behaviour","work")+ " %GNMGrin%");
			addGold(randomInteger(40,80));

   }else{
	   //slave is early
	 
			sendVirtualAssistantMessage(random("You're early %SlaveName%","You're too early","Done so soon?","Already done?") ); 
			sendVirtualAssistantMessage(random("We both know thats impossible","We both very well know you cant be..","Do I seem stupid to you?","Impossible..")); // @SetFlag(BadChores)
			sendVirtualAssistantMessage(random("That cant go unpunished","I have to punish you for this","I'm gonna have to punish you.."));
			sleep(5);
			sendVirtualAssistantMessage("you know I'm timing you..");
			sendVirtualAssistantMessage("I have assigned you punishment points ");
			addPunishmentPoints(50);
			setVar("Preason_BadChores", true);

		}
	
}





if(!isVar("FirstassignedChoreRun")){
	sendVirtualAssistantMessage("Oh hey its your first time doing a chore %DomHonorific% %DomName% assigned...");
	sendVirtualAssistantMessage("Well let me just ask you a question before we get started..");
	sendVirtualAssistantMessage("%GNMGrin%");
	sendVirtualAssistantMessage("Do like getting kinky while working?");
	sendVirtualAssistantMessage("This might include having you clean on all fours, using some sort of toys while working");
	sendVirtualAssistantMessage("You never really know the limit of my imagination %GNMlol%");
	//(Again)
	sendVirtualAssistantMessage("On a scale from 1-10 where 1 is never and 10 is very often would you like to 'play' while doing your assigned chores?");
     answer=createInput()
    while (true) {
        if (answer.isInteger()) {
            const id = answer.getInteger();
            if (id > 10) {
                sendVirtualAssistantMessage("You can't choose a number higher than 10. 1- 10?");
                answer.loop();
            } else {
                setVar("AssignedChoreKinky", id);
                break;
            }
        } else {
            sendVirtualAssistantMessage("%Slavename%, Give me a number, 1-10?");
            answer.loop();
        }
    }
//	(MoveAlong1)
	sendVirtualAssistantMessage("Well lets not waste anymore time but get you right to work %GNMGrin%");
		setVar("FirstassignedChoreRun",true);
}
//	(AssignedChoreFirstTime)
	
	
	sendVirtualAssistantMessage(" So %SlaveName%, tell me what you're assignment is?",0); 
	ChoreThatWasAssigned= createInput();
	 setVar("ChoreLog", getVar("ChoreLog")+" <> "+ChoreThatWasAssigned);
	looping=true;
	sendVirtualAssistantMessage("and In minutes, how long did %DomHonorific% %DomName% give you to complete this mission? %GNMlol% ",0);
	answer=createInput();
    while (looping==true) {
        if (answer.isInteger()) {
             cleaningTimeTemp = answer.getInteger();
			 looping=false;
			 break;
            
        } else {
            sendVirtualAssistantMessage("you need to give me a number %Slave%");
            answer.loop();
        }
    }

	
	
	sendVirtualAssistantMessage("%GNMReady% Slave? cleaning time ="+cleaningTimeTemp);
	waitForDone(10000);
	
	if(getVar("AssignedChoreKinky") <=randomInteger(0,10) ){
	sendVirtualAssistantMessage("Okay then ");
	sendVirtualAssistantMessage("You can go ahead and start with the Task for %DomHonorific% %DomName%.. ");
	sendVirtualAssistantMessage("When you're done return to me and say 'done' ", 15);
	sendVirtualAssistantMessage("Remember i'm timing you! No cheating..");
		//@Goto(StartTimerStandard)
  waitForChoreFinish(cleaningTimeTemp);

	}else

	{
		//fix the 0<random integer in lovense to unhardcode.
		if(((75<=randomInteger(0,100))&&(isVar("hasPishock") && getVar("hasPishock")==true)) || ((0<=randomInteger(0,100))&&(isVar("hasLovense") && getVar("hasLovense")==true)))
			{if((isVar("hasPishock") && getVar("hasPishock")==true) &&(isVar("hasLovense") && getVar("hasLovense")==true  ))
				{
					// they're both available
					if( 50<=randomInteger(0,50))
						{pishockChore(cleaningTimeTemp);}
					else
						{lovenseChore(cleaningTimeTemp);}
				}
			else
			{//there's only one available so call it
				if (isVar("hasPishock") && getVar("hasPishock")==true)
					{pishockChore(cleaningTimeTemp);
						//call pishock sequence
					}
				else
					{lovenseChore(cleaningTimeTemp);
						//call lovense
					}
					
				
			}
			
			}
		else{
		
		
		
	sendVirtualAssistantMessage(random("Grin..","Okay!","Hmm..","Hehe","%GNMGrin%"));

	 
	kinkychoice= randomInteger(1,21); 
	 switch (kinkychoice){
		case 1:
		sendVirtualAssistantMessage("I want you to tie your hands together and tie your feet together");
		cleaningTimeTemp=cleaningTimeTemp+randomInteger(5,7);
		sendVirtualAssistantMessage("Not completely though..");
		sendVirtualAssistantMessage("Make it so that there is a "+random("10","15")+" cm string length giving you a little mobility %GNMlol%");
		sendVirtualAssistantMessage("I am generous %DomHonorific% .. ",20);
		sendVirtualAssistantMessage("Are you done tying yourself?");
		waitForDone2(20);
		sendVirtualAssistantMessage("I've added a little extra time for you to work due to your predicament %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.."); 
		//@Goto(StartTimerStandard)
		break;
		case 2:
		sendVirtualAssistantMessage(" I want you to put "+ random("1 peg","2 pegs")+" on each nipple"); 
		showImage("Images/Spicy/Toys/Pegs.*");
		cleaningTimeTemp=cleaningTimeTemp-randomInteger(1,3);
		sendVirtualAssistantMessage(" If you feel courageous you can add a little weight to them %GNMGrin%");
		 showImage("Images/Spicy/Toys/Pegs.*"); sleep(20);
		sendVirtualAssistantMessage(" Are you done placing the pegs?");
		showImage("Images/Spicy/Toys/Pegs.*");
		waitForDone2(20);

		sendVirtualAssistantMessage("I've removed a little time from the clock ");
		sendVirtualAssistantMessage("I expect that you might clean a little faster due to your predicament %GNMGrin%");
		sendVirtualAssistantMessage("Just a few minutes");
		sendVirtualAssistantMessage("No more than 5 %GNMlol%");
		sendVirtualAssistantMessage("Remember to remove them after you're done cleaning %GNMGrin%");
		sendVirtualAssistantMessage("You may begin.."); 
		//Goto(StartTimerStandard)
		break;
		case 3:

		sendVirtualAssistantMessage(" I want you to put "+random("1 peg","2 pegs")+" on each of your thighs ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sendVirtualAssistantMessage(" I want them pointing inward ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sendVirtualAssistantMessage(" In a manner that they force you to walk with your legs spread ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sendVirtualAssistantMessage(" And so they might hit each other each time you take a step.. ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sleep(20);
		sendVirtualAssistantMessage("Step carefully %GNMlol%");
		sendVirtualAssistantMessage("Are you done placing the pegs?");
		waitForDone2(20);
		sendVirtualAssistantMessage("Remember to remove them after you're done cleaning %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
		case 4:
		 if(getVar("toyParachute")==true)
		 {
		sendVirtualAssistantMessage(" I want you to attach your parachute on to your %GNMBalls%");
		 showImage("Images/Spicy/Toys/Parachute.*");
		sendVirtualAssistantMessage(" Feel free to impress me by adding weights %GNMGrin% ");
		showImage("Images/Spicy/Toys/Parachute.*"); 
		sleep(randomInteger(30,40));
		sendVirtualAssistantMessage(" Are you done attaching the parachute? ");
		showImage("Images/Spicy/Toys/Parachute.*");
		waitForDone2(20);
		sendVirtualAssistantMessage("Remember to remove it after you're done with your chore %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
		 } else
		 {kinkychoice= randomInteger(5,21); }
		case 5:

			 if(COLLAR_TOY.hasToy())
				 {
				sendVirtualAssistantMessage("If you have it I want you to handcuff yourself, if not be 'creative'..");
				cleaningTimeTemp=cleaningTimeTemp+randomInteger(6,7);
				sendVirtualAssistantMessage(" Then I want you to put on your collar ");
				showImage("Images/Spicy/Toys/Collar.*");
				sendVirtualAssistantMessage(" Tie a rope from the handcuffs to the collar ");
				showImage("Images/Spicy/Toys/Collar.*");
				sendVirtualAssistantMessage(" It shouldn't be more than 30-40 cm's long %GNMGrin% ");
				showImage("Images/Spicy/Toys/Collar.*"); 
				sleep(40);
				sendVirtualAssistantMessage(" Are you done tying yourself up nicely?");
				 showImage("Images/Spicy/Toys/Collar.*");
				waitForDone2(30)
				sendVirtualAssistantMessage("Remember to remove it after you're done with your chore %GNMGrin%");
				sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
				sendVirtualAssistantMessage("You may begin..");
			//	@Goto(StartTimerStandard)
				break;
				 }
				 else
				 {kinkychoice= randomInteger(6,21); }
		case 6:
		sendVirtualAssistantMessage("If you have it I want you to handcuff yourself, if not be 'creative'..");
		cleaningTimeTemp=cleaningTimeTemp+randomInteger(6,7);
		sendVirtualAssistantMessage(" Then I want you to put 2 pegs onto your %GNMBalls% ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sendVirtualAssistantMessage(" Tie a rope from the handcuffs to the pegs ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sendVirtualAssistantMessage(" It shouldn't be more than 30-40 cm's long %GNMGrin% ");
		showImage("Images/Spicy/Toys/Pegs.*"); sleep(40);
		sendVirtualAssistantMessage(" Are you done tying yourself up nicely? ");
		showImage("Images/Spicy/Toys/Pegs.*");
		waitForDone2(20);
		
		sendVirtualAssistantMessage("Remember to remove it after you're done with your chore %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
		case 7:
		 if(getVar("ToyBasicLingerie")==true) {
			sendVirtualAssistantMessage("Lets do a little dress up");
			sendVirtualAssistantMessage(" I want you in these"); 
			showImage("Images/Spicy/Toys/Lingerie/panties/*.*"); 
			sleep(10);
			sendVirtualAssistantMessage(" And wearing this ");
			showImage("Images/Spicy/Toys/Lingerie/Bra/*.*");
			sleep(10);
			sendVirtualAssistantMessage("Dont wear anything else %GNMGrin%");
			sleep(15);
			sendVirtualAssistantMessage("Are you done 'slutting' yourself?");
			waitForDone2(20);
			sendVirtualAssistantMessage("Remember to remove it after you're done with your chore %GNMGrin%");
			sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
			sendVirtualAssistantMessage("You may begin..");
			//	@Goto(StartTimerStandard)
			break;
					 }
				 else
				 {kinkychoice= randomInteger(8,21); }
		case 8:
		 if(getVar("ToyLingerieAdvanced")==true) {
		sendVirtualAssistantMessage("Lets do a little dress up");
		sendVirtualAssistantMessage(" I want you wearing");
		 showImage("Images/Spicy/Toys/Lingerie/GarterBelt/*.*");
		 sleep(15);
		sendVirtualAssistantMessage(" And of course you have to also wear these"); 
		showImage("Images/Spicy/Toys/Lingerie/Stockings/*.*");
		sleep(15);
		sendVirtualAssistantMessage("Dont wear anything else %GNMGrin%"); 
		sleep(15);
		sendVirtualAssistantMessage("Are you done 'slutting' yourself?");
		waitForDone2(20);

		sendVirtualAssistantMessage("Remember to remove it after you're done with your assigned chore %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin..");
	//	@Goto(StartTimerStandard)
		break;
			 }
				 else
				 {kinkychoice= randomInteger(9,21); }
		case 9:
		 if(getVar("ToyGag")==true) {
			
			sendVirtualAssistantMessage("Lets shut you up!");
			sendVirtualAssistantMessage(" Find your gag and put it on tight! ");
			showImage("Images/Spicy/Toys/gag.*");
			sleep(20);
			sendVirtualAssistantMessage(" I cant hear does that mean you're gagged? ");
			showImage("Images/Spicy/Toys/gag.*"); 
				waitForDone2(20);
			sleep(3);

			sendVirtualAssistantMessage("Remember to remove it after you're done with the chore I've assigned you %GNMGrin%");
			sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
			sendVirtualAssistantMessage("You may begin.. ");
			//@Goto(StartTimerStandard)
			break;
			 }
				 else
				 {kinkychoice= randomInteger(10,21); }
		case 10:
		 if(getVar("ToyButtPlug")==true) {
		
		sendVirtualAssistantMessage("Lets fill you a little");
		sendVirtualAssistantMessage(" Find your "+random("small","medium","large")+" buttplug ");
		showImage("Images/Spicy/Toys/ButtPlugs.*");
		sendVirtualAssistantMessage(" Lube it up by sucking on it..");
			sleep(60);
		 showImage("Images/Spicy/Toys/ButtPlugs.*");
		sendVirtualAssistantMessage(" that's good cocksucker, now get it in your %Ass% ");
			sleep(30); 
		showImage("Images/Spicy/Toys/ButtPlugs.*");
		sendVirtualAssistantMessage(" Are you done filling that nasty %GNMAss%??"); 
		showImage("Images/Spicy/Toys/ButtPlugs.*");
		waitForDone2(20);
		sendVirtualAssistantMessage("Remember to remove it after you're done with the chore I've assigned you %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
			}
				 else
				 {kinkychoice= randomInteger(11,21); }
		case 11:

		sendVirtualAssistantMessage(" Place "+ randomInteger(4,8)+ " pegs on your %GNMBalls% ");
		showImage("Images/Spicy/Toys/Pegs.*");
		sleep(30);
		sendVirtualAssistantMessage(" Are you done?");
		showImage("Images/Spicy/Toys/Pegs.*");
			waitForDone2(20);
		sendVirtualAssistantMessage("Remember to remove them after you're done doing my bidding %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
		case 12:
		sendVirtualAssistantMessage("While working today I want you to stay on all fours ");
		cleaningTimeTemp=cleaningTimeTemp+randomInteger(6,9);
		sendVirtualAssistantMessage("You are ONLY allowed to stand up if you need to reach something high..");
		sendVirtualAssistantMessage("I've added extra time since this must slow you down..");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin..");
	//	@Goto(StartTimerStandard)
		break;
		case 13:
		sendVirtualAssistantMessage("While working today I want you to stay on all fours");
		cleaningTimeTemp=cleaningTimeTemp+randomInteger(8,14);
		sendVirtualAssistantMessage("And!..");
		sendVirtualAssistantMessage("To complicated it further I want you to tie your balls to your big toes %GNMGrin%");
		 sleep(40);
		sendVirtualAssistantMessage("Are you done tying those %GNMBalls% up?");
			waitForDone2(20);
		sendVirtualAssistantMessage("I've added extra time");
		sendVirtualAssistantMessage("Remember to the remove the rope after you're done with the task I've assigned %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard);
		break;
		case 14:
		 if(COLLAR_TOY.hasToy()) {
		
			
			sendVirtualAssistantMessage("This is gonna be a little complicated %GNMlol%");
			cleaningTimeTemp=cleaningTimeTemp+randomInteger(8,14);
			sendVirtualAssistantMessage("But it should prove fun to watch!");
			sendVirtualAssistantMessage("I want you wearing your collar with a leash attached ");
			showImage("Images/Spicy/Toys/Collar.*");
			sendVirtualAssistantMessage("The leash shouldn't be any longer than 2m ");
			showImage("Images/Spicy/Toys/Collar.*");
			sendVirtualAssistantMessage("During your work today I want you to tie that leash to different objects ");
			showImage("Images/Spicy/Toys/Collar.*");
			sendVirtualAssistantMessage("Could be a door handle, a table leg or something similar");
			sendVirtualAssistantMessage("I want you to carry a timer with you");
			sendVirtualAssistantMessage("You are only allowed to relocate the leash every 5'th minute! ");
			sleep(20);
			sendVirtualAssistantMessage("Understood?");
			waitForDone2(20);
			sendVirtualAssistantMessage("I've added extra time");
			sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
			sendVirtualAssistantMessage("Remember to the remove the collar after you're done with your task %GNMGrin%");
			sendVirtualAssistantMessage("You may begin.. ");
			//@Goto(StartTimerStandard);
			break;	}
				 else
				 {kinkychoice= randomInteger(11,21); }
			
		case 16:

		
		sendVirtualAssistantMessage("While working today I want you naked if thats practical");
		sendVirtualAssistantMessage("If your %Home% isn't warm this should help you work faster %GNMGrin%"); sleep(10);
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
		case 17:
		
		if(getVar("chastityon")==true) {
				sendVirtualAssistantMessage("While cleaning today I want you naked and wearing your %ChastityCage%");
			sendVirtualAssistantMessage("If your %Home% isn't warm this should help you work faster %GNMGrin% ");
			sleep(10);
			sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
			sendVirtualAssistantMessage("You may begin..");
				
		} else {
		sendVirtualAssistantMessage("While working today I want you naked and wearing your %ChastityCage%");
		sendVirtualAssistantMessage("If your %Home% isn't warm this should help you work faster %GNMGrin%"); sleep(10);
		sendVirtualAssistantMessage("Remember to remove the cage when you're done cleaning");
		sendVirtualAssistantMessage("You may begin.. ");
		}
		 //@Goto(StartTimerStandard)
		break;
		case 19:
		
		sendVirtualAssistantMessage("Before doing your chore today I want you to drink 1L of water");
		sendVirtualAssistantMessage("You aren't allowed to pee starting now before you're done with your task"); sleep(80);
		sendVirtualAssistantMessage("Are you done drinking?");
		waitForDone2(80);

		sendVirtualAssistantMessage("You may begin..");
		//	@Goto(StartTimerStandard)
		break;
		case 20:
		sendVirtualAssistantMessage("This is simple..");
		//cleaningTimeTemp=cleaningTimeTemp+5;
		sendVirtualAssistantMessage("While working today I want you to put a cock ring around your balls.");
		sendVirtualAssistantMessage("%Slave% , you need to keep in mind who owns them.");
		sendVirtualAssistantMessage("Slap them HARD for me slave."); 
		sleep(15);
		sendVirtualAssistantMessage("You may begin..");
	//	@Goto(StartTimerStandard)
		break;
		
		default:
		sendVirtualAssistantMessage("%SlaveName%, I've noticed you've not been very deferential lately....");
		sendVirtualAssistantMessage("I want you to put your humbler on");
		cleaningTimeTemp=cleaningTimeTemp+randomInteger(3,7);
		sleep(12);
		sendVirtualAssistantMessage("I'm not just your %DomHonorific%, I'm also your trainer ..");
		sleep(20);
		showImage("Images/Spicy/Toys/Humbler.*");
		sendVirtualAssistantMessage("Are you done trapping your balls in the wooden device?");
		waitForDone2(20);
		sendVirtualAssistantMessage("I've added a little extra time for you to work due to your predicament %GNMGrin%");
		sendVirtualAssistantMessage("%Slave% I expect this to take at least "+cleaningTimeTemp+" minutes.");
		sendVirtualAssistantMessage("You may begin.. ");
		//@Goto(StartTimerStandard)
		break;
	 }
	
	waitForChoreFinish(cleaningTimeTemp);

		}
   

	}

setVar("ChoreActive",false);
 setVar(VARIABLE_WEEKLY_CHORES_COMPLETED, getVar(VARIABLE_WEEKLY_CHORES_COMPLETED)+1);
             CHORE_WATCH.stop();

             secondsPassed = parseInt(CHORE_WATCH.getTime() / 1000, 10);
             minutesPassed = Math.round(secondsPassed/60);

          //Weekly chores done
            incrementVar(VARIABLE_WEEKLY_CHORES_DONE, 1);

            incrementVar(VARIABLE_TOTAL_CHORES_DONE, 1);

            //Time in minutes spend doing chores
            incrementVar(VARIABLE_WEEKLY_CHORES_TIME, minutesPassed);

            incrementVar(VARIABLE_TOTAL_CHORES_TIME, minutesPassed);
 
 