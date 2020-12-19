


 setVar("FailedPunishment",0);

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

Hello();



function Hello()
{
    sendMessage(random("Hello ", "Hi ") + "%SlaveName%");
    Info();
}
function Info()
{
    sendMessage("%Grin% ");
    sendMessage("You will not enjoy this! ");
    sendMessage("I\'m about to make you my bitch! ");
    sendMessage("%lol% ");
    sendMessage("Fetch your shock collar %SlaveName%" );
	showImage("Images/Spicy/Toys/ShockCollar.jpg");
	sleep(10);
    let answer0 = sendInput("Got it? ");
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else
    {
        sendMessage("%Good% ");
    }
    let answer1 = sendInput("is it charged up slave??? ");
    if (answer1.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else
    {
        sendMessage("well go charge it quickly and tell me when its done ");
		waitForDone();
    }
    sendMessage("Go ahead and turn it on and wrap the collar around your %balls%");
    sleep(10);
    
    sendMessage("Lucky for you Mistress has an automatic shocker for you and can control your punishment all by herself ");
    //sendMessage("then I\'m going to tell you to push that magical button %EmoteHappy% ");
    sendMessage("Let me just check my papers.. ");
    Start();
    return;
   // Start();
}
function Start()
{
	
	
	
		
	switch(getVar("Punisher")) {

		case 1 :
		Domme();
		break;
		case 2 :
		Contact1();
		break;
		case 3 :
		Contact2();
		break;
		case 4 :
		Contact3();

		break;
	}

  //  Domme();
}
function Domme()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("Lets see what we can do about you %Grin% ", "Its time to make you repent your sins ", "I suppose we need to correct your recent behaviour ", "I have something for you.. ") );
    if(getVar("Personality1", false))
    {
        if (getVar("SubPainTolerance", 0) <= 3)
        {
            PM4Easy();
            return;
        }
    }
    if(getVar("Personality2", false))
    {
        if (getVar("SubPainTolerance", 0) <= 5)
        {
            PM4Easy();
            return;
        }
    }
    if(getVar("Personality3", false))
    {
        if (getVar("SubPainTolerance", 0) >= 6)
        {
            PM4Hard();
            return;
        }
    }
    PM4Medium();
    return;
    //Contact1();
}
function Contact1()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("Oh my I love handling %DomName%'s pet","I'll be happy to punish you %Grin%","This is gonna be fun"));
	
	if(getVar("SubPainTolerance")>=8) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>4){
	 PM4Medium();}
	else  
	 PM4Easy();
	

    return;
    //Contact2();
}
function Contact2()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("You\'re not gonna like this %Grin% ", "I\'m not sure you\'ll enjoy this my bitch! ", "I don\'t think you\'ll enjoy this sparky.. ") );
	
	
		if(getVar("SubPainTolerance")>=7) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>3){
	 PM4Medium();}
	else  
	 PM4Easy();

    return;
   // Contact3();
}
function Contact3()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("This is entirely my pleasure %Lol% ", "I\'m gonna love this! ", "This is gonna be fun! ") );
 	if(getVar("SubPainTolerance")>=6) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>2){
	 PM4Medium();}
	else  
	 PM4Easy();

    return;
  //  PM4Easy();
}
function PM4Easy()
{
    //sendMessage("Remember to say \"yes %DomHonorific%\" right after you\'ve shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs", randomInteger(9,12));
    setTempVar("M4Easy", true);
    RipBase();
    return;
//    PM4Medium();
}
function PM4Medium()
{
   // sendMessage("Remember to say \"yes %DomHonorific%\" right after you\'ve shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs",  randomInteger(12,15)); 
    setTempVar("M4Easy", true);
    RipBase();
    return;
 //   PM4Hard();
}
function PM4Hard()
{
   // sendMessage("Remember to say \"yes %DomHonorific%\" right after you\'ve shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs",  randomInteger(15,18));
    setTempVar("M4Easy", true);
    RipBase();
    return;
 //   RipBase();
}
function RipBase()
{
    setVar("M4Round", getVar("M4Round", 0) + 1);
    if (getVar("RipPegs", 0) <= 0)
    {
        End();
        return;
    }
    setVar("RipPegs", getVar("RipPegs", 0) - 1);
    switch(random("ten", "twentyfive", "fifty", "Holdit","dazzle","ramp", "FF3", "FF2", "FF1"))
    {
        case "ten":
        ten();
        return;
        break;
        case "twentyfive":
        twentyfive();
        return;
        break;
        case "fifty":
        fifty();
        return;
        break;
        case "Holdit":
        Holdit();
        return;
        break;
		case "dazzle":
        dazzle();
        return;
        break;
		case "ramp":
        ramp();
        return;
        break;
        case "FF3":
        FF3();
        return;
        break;
        case "FF2":
        FF2();
        return;
        break;
        case "FF1":
        FF1();
        return;
        break;
    }
 //   ten();
}
function ten()
{
    sendMessage("hmmm I think I'll Set the controller to 20  ");
	setTempVar("pishockintensity", 20);
	setTempVar("pishockduration", 2);
    sleep(5);
    Black();
    return;
 //   twentyfive();
}
function twentyfive()
{
    sendMessage("let's set the controller to 50  ");
	setTempVar("pishockintensity", 50);
	setTempVar("pishockduration", 2);
    sleep(5);
    Black();
    return;
 //   fifty();
}
function fifty()
{
    sendMessage("lets see how hard this thing can hit... ");
	setTempVar("pishockintensity", 100);
	setTempVar("pishockduration", 2);
    sleep(5);
    Black();
    return;
 //   Holdit();
}
function dazzle()
{
    sendMessage("%slavename%, I want do Dazzle you ");
	times=randomInteger(4,8);
	iter=0
	while (iter< times)
		{setTempVar("pishockintensity", randomInteger(10,100));
		setTempVar("pishockduration", 1);
		pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
		sleep(1);
		iter++;
		}
    RipBase();
    return;
 //   Holdit();
}
function ramp()
{
    sendMessage("%slavename%, lets turn this up ");
	times=randomInteger(4,8);
	iter=0
	while (iter< times)
		{setTempVar("pishockintensity", 12*(iter+1));
		setTempVar("pishockduration", 1);
		pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
		sleep(1);
		iter++;
		}
    RipBase();
    return;
 //   Holdit();
}
function Holdit()
{
    sendMessage("Set the controller to 10 ");
    sleep(5);
    sendMessage("This time %SlaveName% I'm going to find out how long I can hold the button down.");
    sendMessage(random("Tap","press","hold")+" the controller!" );
	playAudio("Audio/Spicy/Electricity.mp3");
		setTempVar("pishockintensity", 10);
		setTempVar("pishockduration", 10);
	response=sendInput(" ",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'..even if its hard to hold for so long "); //#DT4
		 //break
		}
	
	 }
	


    return;
//    FF1();
}
function FF1()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname1")+" is going to be the one that decides to shock you...");
    sleep(3);

    textName = "["+getVar("blackmailname1")+"] :";
	setTempVar("pishockintensity",random(10,20,30,50,100) );
	setTempVar("pishockduration", random(1,3,5));
    sendArbMessage(textName, "hmmm... lets Set the controller to "+getVar("pishockintensity"),0); 
	showImage("Images/Spicy/FFriends/1/*");
		sleep(3); 
    sendArbMessage(textName,"%SlaveName%, I want you to truely understand that you deserve this.",0);
	showImage("Images/Spicy/FFriends/1/*");
	sleep(3);  	
    sendArbMessage(textName,"Slave, think of all the ways you've failed me over time",0);

	showImage("Images/Spicy/FFriends/1/*");
	//sleep(3);
    //sendArbMessage(textName,random("Tap","press","hold","tap twice")+" the controller bitch ",0);
	//showImage("Images/Spicy/FFriends/1/*");
	pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
	playAudio("Audio/Spicy/Electricity.mp3");
	sleep(3);
	
	/*
	response=sendInput(" ",10);
 while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
		 	showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 break;
		}
	
	RipBase();
	 }
	*/
	


        RipBase();
        return;
    
//    FF2();
}
function FF2()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname2")+" is going to be the one that decides to shock you...");
    sleep(3);
	setTempVar("pishockintensity",random(10,20,30,50,100) );
	setTempVar("pishockduration", random(2,3,4));
		  
    textName = "["+getVar("blackmailname2")+"] :";
   
    sendArbMessage(textName,"hmmm... lets Set the controller to "+getVar("pishockintensity"),0 );

	  showImage("Images/Spicy/FFriends/2/*");
	  sleep(3);
    sendArbMessage(textName,"I want you to think of what you did to earn this punishment ",0);
	 showImage("Images/Spicy/FFriends/2/*");
		// sleep(3);
    //sendArbMessage(textName,random("Tap","press","hold","tap twice")+" the controller ",0);

	  showImage("Images/Spicy/FFriends/2/*");
	  pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
	  playAudio("Audio/Spicy/Electricity.mp3");
	/*
		response=sendInput(" ",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
			showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 //break;
		}
	
	 }
	*/
        RipBase();
        return;
  
 //   FF3();
}
function FF3()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname3")+"  is going to be the one that decides to shock you...");
    sleep(2);
	
    textName = "["+getVar("blackmailname3")+"] :";
	setTempVar("pishockintensity",random(10,20,30,50,100) );
	setTempVar("pishockduration", random(2,4,6,8,10));
   sendArbMessage(textName,"hmmm... lets Set the controller to "+getVar("pishockintensity"),0 );
	showImage("Images/Spicy/FFriends/3/*");
	sleep(3);
	
   sendArbMessage(textName,"are you ready to suffer for me?",0);	
	showImage("Images/Spicy/FFriends/3/*");
	//sleep(3) ;
   //sendArbMessage(textName,random("Tap","press","hold","tap twice")+ " the controller twice cutie ",0);
	showImage("Images/Spicy/FFriends/3/*");
	pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
	playAudio("Audio/Spicy/Electricity.mp3");
	/*
	response=sendInput(" ",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
			showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 	showImage("Images/Spicy/FFriends/3/*");
		 //break;
		}
	
	 }
 */
       RipBase();
        return;

 //   Thigh();
}

function Black()
{
    sendMessage(random("Be ready!","Prepare","Prepare yourself","Get ready","Stay ready","Ready yourself") );

	sleep(randomInteger(2,10));
	intensity= 
    pishock(0,getVar("pishockintensity"),getVar("pishockduration"),0);
	showImage("Images/Spicy/Punishment/Grounding/BlackBase.*"); 
	sleep(randomInteger(2,4));
	//Rip();
	RipBase();
	return;
}
function Rip()
{
    sendMessage(random("Tap","press","hold","tap twice","squeeze")+" the controller ");
    playAudio("Audio/Spicy/Electric Shock.mp3");
	response=sendInput(" ",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'.. "); //#DT4
		 break;
		}
	
	 }
	
	
	
        return;
    
  //  Slow();
}
function Slow()
{
    sendMessage("Aww too slow..  ");
	changeMeritMedium(true);
    sendMessage("Remember to say 'yes %DomHonorific% ' <i>after</i> you've shocked yourself ");
	setVar("RipPegs",getVar("RipPegs")+randomInteger(1,3));
    sendMessage("I'm expecting you to follow my commands <i>when</i> I give them");
    sendMessage("I don\'t accept delays just because something hurts a little.. or you\'re a scared pussy");
    sendMessage("Well then I\'m just adding a few extra rounds %Grin% ");
    RipBase();
    return;
    //End();
}
function End()
{
    sendMessage("No more rounds! ");
    setTempVar("E4Complete", true);
    sendMessage("Remember to put the shock collar back on the charger ");
    sendMessage("we never know when I\'ll want to use it again %Grin% ");
		setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 24);
	run("Dungeon/PunishmentBaseEnd.js");
    setTempVar("PunishmentComplete", true);

    return;
}