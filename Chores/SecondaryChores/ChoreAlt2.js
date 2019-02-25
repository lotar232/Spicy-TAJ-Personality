main();
function main()
{
    if(getVar("ChoreAlt2a", false))
    {
        ChoreAlt2a();
        return;
    }
    if(getVar("ChoreAlt2b", false))
    {
        ChoreAlt2b();
        return;
    }
    if(getVar("ChoreAlt2c", false))
    {
        ChoreAlt2c();
        return;
    }
    if(getVar("ChoreAlt2d", false))
    {
        ChoreAlt2d();
        return;
    }
    if(getVar("ChoreAlt2f", false))
    {
        ChoreAlt2f();
        return;
    }
    if(getVar("ChoreAlt2g", false))
    {
        ChoreAlt2g();
        return;
    }
    if(getVar("ChoreAlt2h", false))
    {
        ChoreAlt2h();
        return;
    }
    if(getVar("ChoreAlt2i", false))
    {
        ChoreAlt2i();
        return;
    }
    Choose();
}
function Choose()
{
    switch(random("a", "b", "c", "d", "e", "f", "g", "h", "i"))
    {
        case "a":
        a();
        return;
        break;
        case "b":
        b();
        return;
        break;
        case "c":
        c();
        return;
        break;
        case "d":
        d();
        return;
        break;
        case "e":
        e();
        return;
        break;
        case "f":
        f();
        return;
        break;
        case "g":
        g();
        return;
        break;
        case "h":
        h();
        return;
        break;
        case "i":
        i();
        return;
        break;
    }
    ChoreAlt2a();
}
function ChoreAlt2a()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    aContinued();
    return;
    ChoreAlt2b();
}
function ChoreAlt2b()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    bContinued();
    return;
    ChoreAlt2c();
}
function ChoreAlt2c()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    cContinued();
    return;
    ChoreAlt2d();
}
function ChoreAlt2d()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    dContinued();
    return;
    ChoreAlt2f();
}
function ChoreAlt2f()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    fContinued();
    return;
    ChoreAlt2g();
}
function ChoreAlt2g()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    gContinued();
    return;
    ChoreAlt2h();
}
function ChoreAlt2h()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    hContinued();
    return;
    ChoreAlt2i();
}
function ChoreAlt2i()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    iContinued();
    return;
    a();
}
function a()
{
    if(!getVar("PrivateHumActive", false))
    {
        Choose();
        return;
    }
    setVar("ChoreAlt2a", true);
   sendVirtualAssistantMessage(" " + random("Time for some laughs!", "Let\'s make me laugh!"));
    setVar("ChoreActive", true);
    aContinued();
}
function aContinued()
{
   sendVirtualAssistantMessage(" " + random("Get naked and on all fours", "Hurry up and be naked then get down on all fours"));
   sendVirtualAssistantMessage(" I want you to walk on all fours to the kitchen, get a bowl and fill it water");
   sendVirtualAssistantMessage(" Drink from the bowl and then crawl back %GNMLol%");
   // --Command:CustomMode(done,Goto,Donea)
   sendVirtualAssistantMessage(" Let me know when you\'re \'done\'");
  waitForDone();
    Donea();
}
function Donea()
{
   sendVirtualAssistantMessage(" %GNMGood%");
    delVar("ChoreAlt2a");
    //--Command:CustomMode(ModeText,Normal)
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldLow% %MeritChangePLow%");
    End();
    return;
    b();
}
function b()
{
   sendVirtualAssistantMessage(" %SlaveName%");
    setVar("ChoreAlt2b", true);
    bContinued();
}
function bContinued()
{
   sendVirtualAssistantMessage(" " + random("Head over to the corner", "Go to the corner"));
    switch(random("b1", "b2", "b3", "b4", "b5", "b6"))
    {
        case "b1":
        b1();
        return;
        break;
        case "b2":
        b2();
        return;
        break;
        case "b3":
        b3();
        return;
        break;
        case "b4":
        b4();
        return;
        break;
        case "b5":
        b5();
        return;
        break;
        case "b6":
        b6();
        return;
        break;
    }
    b1();
}
function b1()
{
    sendVirtualAssistantMessage(" And take the bad bitch position",2,true);showImage("/GNMImages/Positions/BadBitch2.jpg"); sleep(10); Bellb();
    b2();
}
function b2()
{
    sendVirtualAssistantMessage(" And take the bent over position",2,true); showImage("/GNMImages/Positions/BentOver3.jpg"); sleep(10); Bellb();
    b3();
}
function b3()
{
    sendVirtualAssistantMessage(" And take the box position",2,true); showImage("/GNMImages/Positions/Box1.jpg"); sleep(10); Bellb();
    b4();
}
function b4()
{
    sendVirtualAssistantMessage(" And take the Attention position",2,true); showImage("/GNMImages/Positions/Attention1.jpg"); sleep(10); Bellb();
    b5();
}
function b5()
{
    sendVirtualAssistantMessage(" And take the stand position",2,true); showImage("/GNMImages/Positions/Stand2.jpg"); sleep(10); Bellb();
    b6();
}
function b6()
{
    sendVirtualAssistantMessage(" And take the stand open position",2,true); showImage("/GNMImages/Positions/StandOpen1.jpg"); sleep(10); Bellb();
    Bellb();
}
function Bellb()
{
   sendVirtualAssistantMessage(" Wait for the bell");
    wait(randomInt(200, 500));
    sendVirtualAssistantMessage(" Get back here.. ");
	playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
   sendVirtualAssistantMessage(" Position and corner training in one package");
    delVar("ChoreAlt2b");
    CMessage("%MeritChangePLow%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
    End();
    return;
    cContinued();
}
function cContinued()
{
    c();
}
function c()
{
   sendVirtualAssistantMessage(" " + random("Let\'s practice one of your positions", "Let\'s have you do one of the positions"));
    setVar("ChoreAlt2c", true);
   sendVirtualAssistantMessage(" I\'m gonna show you a position and I want you to take and hold it until you hear my bell");
    setVar("ChoreActive", true);
    switch(random("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16"))
    {
        case "c1":
        c1();
        return;
        break;
        case "c2":
        c2();
        return;
        break;
        case "c3":
        c3();
        return;
        break;
        case "c4":
        c4();
        return;
        break;
        case "c5":
        c5();
        return;
        break;
        case "c6":
        c6();
        return;
        break;
        case "c7":
        c7();
        return;
        break;
        case "c8":
        c8();
        return;
        break;
        case "c9":
        c9();
        return;
        break;
        case "c10":
        c10();
        return;
        break;
        case "c11":
        c11();
        return;
        break;
        case "c12":
        c12();
        return;
        break;
        case "c13":
        c13();
        return;
        break;
        case "c14":
        c14();
        return;
        break;
        case "c15":
        c15();
        return;
        break;
        case "c16":
        c16();
        return;
        break;
    }
    c1();
}
function c1()
{
    sendVirtualAssistantMessage(" Remember position 1 is called the Bad Bitch",2,true); showImage("/GNMImages/Positions/BadBitch2.jpg"); cTimer();
    c2();
}
function c2()
{
    sendVirtualAssistantMessage(" Remember position 2 is called the Bent Over",2,true); showImage("/GNMImages/Positions/BentOver1.jpg"); cTimer();
    c3();
}
function c3()
{
    sendVirtualAssistantMessage(" Remember position 3 is called the Bent Over Open",2,true);  showImage("/GNMImages/Positions/BentOverOpen2.jpg"); cTimer();
    c4();
}
function c4()
{
    sendVirtualAssistantMessage(" Remember position 4 is called the Box",2,true);  showImage("/GNMImages/Positions/Box1.jpg"); cTimer();
    c5();
}
function c5()
{
    sendVirtualAssistantMessage(" Remember position 5 is called the Come Fuck Me",2,true);  showImage("/GNMImages/Positions/CFM1.jpg"); cTimer();
    c6();
}
function c6()
{
    sendVirtualAssistantMessage(" Remember position 6 is called the Dog ",2,true); showImage("/GNMImages/Positions/Dog1.jpg"); cTimer();
    c7();
}
function c7()
{
    sendVirtualAssistantMessage(" Remember position 7 is called the Attention",2,true);  showImage("/GNMImages/Positions/Attention1.jpg"); cTimer();
    c8();
}
function c8()
{
     sendVirtualAssistantMessage(" Remember position 8 is called Listen",2,true);  showImage("/GNMImages/Positions/Listen1.jpg"); cTimer();
    c9();
}
function c9()
{
     sendVirtualAssistantMessage(" Remember position 9 is called the Kneel",2,true);  showImage("/GNMImages/Positions/Kneel1.jpg"); cTimer();
    c10();
}
function c10()
{
     sendVirtualAssistantMessage(" Remember position 10 is called the Punishment",2,true);  showImage("/GNMImages/Positions/Punishment1.jpg"); cTimer();
    c11();
}
function c11()
{
     sendVirtualAssistantMessage(" Remember position 11 is called the Slut",2,true);  showImage("/GNMImages/Positions/Slut1.jpg"); cTimer();
    c12();
}
function c12()
{
     sendVirtualAssistantMessage(" Remember position 12 is called the Spanking",2,true);  showImage("/GNMImages/Positions/Spanking1.jpg"); cTimer();
    c13();
}
function c13()
{
     sendVirtualAssistantMessage(" Remember position 13 is called Judgement",2,true);  showImage("/GNMImages/Positions/Judgement1.jpg"); cTimer();
    c14();
}
function c14()
{
     sendVirtualAssistantMessage(" Remember position 14 is called the Stand",2,true);  showImage("/GNMImages/Positions/Stand1.jpg"); cTimer();
    c15();
}
function c15()
{
     sendVirtualAssistantMessage(" Remember position 15 is called the Stand Open",2,true);  showImage("/GNMImages/Positions/StandOpen1.jpg"); cTimer();
    c16();
}
function c16()
{
     sendVirtualAssistantMessage(" Remember position 16 is called the Worship",2,true);  showImage("/GNMImages/Positions/Worship1.jpg"); cTimer();
    cTimer();
}
function cTimer()
{
    wait(randomInt(200, 400));
    delVar("ChoreAlt2c");
    unlockImages();
     sendVirtualAssistantMessage(" Good boy"); 
	 changeMeritLow(false);
	 playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
    End();
    return;
    dContinued();
}
function dContinued()
{
    d();
}
function d()
{
    if(!getVar("PrivateHumActive", false))
    {
        Choose();
        return;
    }
    setVar("ChoreAlt2d", true);
   sendVirtualAssistantMessage(" " + random("This is gonna be a blast", "This should be fun to watch"));
    setVar("ChoreActive", true);
   sendVirtualAssistantMessage(" Find a porn that DOESN\'T turn you on!");
   sendVirtualAssistantMessage(" I want you to watch " + randomInt(2, 5) + "minutes of it!");
   sendVirtualAssistantMessage(" When you\'re done, just tell me");
    --Command:CustomMode(done,Goto,Doned)
    wait(999999);
    Doned();
}
function Doned()
{
   sendVirtualAssistantMessage(" %GNMGood%");
    delVar("ChoreAlt2d");
    --Command:CustomMode(ModeText,Normal)
    CMessage("%MeritChangePMedium%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldLow%");
    End();
    return;
    e();
}
function e()
{
    if(getVar("ChoreAlt2eNoGood", false))
    {
        Choose();
        return;
    }
    if(getVar("GNMToyLingerieAdvanced", false))
    {
        if(getVar("PublicHumActive", false))
        {
            PublicHumActive();
            return;
        }
    }
    Choose();
    return;
    PublicHumActive();
}
function PublicHumActive()
{
    if(getVar("ChoreAlt2eGood", false))
    {
        ChoreAlt2eGood();
        return;
    }
    let answer0 = getInput("%VANC% %VANP% Do you have a window that would put you on a semi public display?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        setVar("ChoreAlt2eGood", true);
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Well then what I had in mind won\'t work..");
        setVar("ChoreAlt2eNoGood", true);
    }
    ChoreAlt2eGood();
}
function ChoreAlt2eGood()
{
   sendVirtualAssistantMessage(" Let\'s see if we can come to terms!");
    switch(random("e1", "e2", "e3", "e4", "e5", "e6"))
    {
        case "e1":
        e1();
        return;
        break;
        case "e2":
        e2();
        return;
        break;
        case "e3":
        e3();
        return;
        break;
        case "e4":
        e4();
        return;
        break;
        case "e5":
        e5();
        return;
        break;
        case "e6":
        e6();
        return;
        break;
    }
    e1();
}
function e1()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 100 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked100();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 75)
        {
            e2();
            return;
        }
        NoDeal();
        return;
    }
    e2();
}
function e2()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 150 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked150();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 75)
        {
            e3();
            return;
        }
        NoDeal();
        return;
    }
    e3();
}
function e3()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 200 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked200();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        NoDeal();
        return;
    }
    e4();
}
function e4()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 100 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie100();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 50)
        {
            e5();
            return;
        }
        NoDeal();
        return;
    }
    e5();
}
function e5()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 150 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie150();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 50)
        {
            e6();
            return;
        }
        NoDeal();
        return;
    }
    e6();
}
function e6()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 200 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie200();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        NoDeal();
        return;
    }
    MirrorNaked100();
}
function MirrorNaked100()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
    MirrorNaked150();
}
function MirrorNaked150()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 150);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
    MirrorNaked200();
}
function MirrorNaked200()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 200);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
    MirrorLingerie100();
}
function MirrorLingerie100()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
    MirrorLingerie150();
}
function MirrorLingerie150()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 150);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
    MirrorLingerie200();
}
function MirrorLingerie200()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 200);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
    End1();
}
function End1()
{
     sendVirtualAssistantMessage(" Get back here ");
	 changeMeritLow(false);
	 playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
	 @Goto(Donee)
    End2();
}
function End2()
{
     sendVirtualAssistantMessage(" Get back here");
	 playAudio("/GNMSounds/SpecialSounds/Bell.mp3"); 
   sendVirtualAssistantMessage(" Remove your lingerie ");
  	 changeMeritMedium(false);
    wait(60);
    Donee();
    return;
    NoDeal();
}
function NoDeal()
{
   sendVirtualAssistantMessage(" Too bad you won\'t make a deal with me..");
    return;
    Donee();
}
function Donee()
{
    End();
    return;
    fContinued();
}
function fContinued()
{
    f();
}
function f()
{
    setVar("ChoreAlt2f", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC In just a moment you'll be in the worship position showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC While in the worship position I want you to repeat the follow sentence over and over.. showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(f1,f2,f3)
    f1();
}
function f1()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I edge in the honor of the Goddess" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timef)
    f2();
}
function f2()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "My cock and pleasure is the property of the Goddess" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timef)
    f3();
}
function f3()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "My pleasure is a reward given to me by the Goddess" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timef)
    Timef();
}
function Timef()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC @RT(Repeat your mantra until you hear the bell,You will repeat the mantra until you hear the bell) showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC Get into the worship position and begin.. showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@NullResponse showImage("/GNMImages/Positions/Worship1.jpg"); @Wait(2#Random(200,400))
    Bellc();
}
function Bellc()
{
     sendVirtualAssistantMessage(" Get back up %SlaveNam% ");
	 playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    Donec();
}
function Donec()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2f");
    CMessage("%MeritChangePLow%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldLow%");
    End();
    return;
    gContinued();
}
function gContinued()
{
    g();
}
function g()
{
    setVar("ChoreAlt2g", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC In just a moment you'll be in the worship position showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC While in the worship position I want you to repeat the follow sentence over and over.. showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(g1,g2,g3)
    g1();
}
function g1()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "My cock exists to be denied any pleasure in honor of the Divinity" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeg)
    g2();
}
function g2()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "My cock is encased in steel to honor the Divinity" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeg)
    g3();
}
function g3()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I exist to suffer denial and to honor the Divinity" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeg)
    Timeg();
}
function Timeg()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC @RT(Repeat your mantra until you hear the bell,You will repeat the mantra until you hear the bell) showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC Get into the worship position and begin.. showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@NullResponse showImage("/GNMImages/Positions/Worship1.jpg"); @Wait(2#Random(200,400))
    Bellg();
}
function Bellg()
{
     sendVirtualAssistantMessage(" Get back up %SlaveName%"); playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    Doneg();
}
function Doneg()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2g");
    CMessage("%MeritChangePLow%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
    End();
    return;
    hContinued();
}
function hContinued()
{
    h();
}
function h()
{
    setVar("ChoreAlt2h", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC In just a moment you'll be in the worship position showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC While in the worship position I want you to repeat the follow sentence over and over.. showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(h1,h2,h3)
    h1();
}
function h1()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I serve the mistress of pain, I worship the Devil" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeh)
    h2();
}
function h2()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "My body is the focus of the Devil, I live to suffer in her name" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeh)
    h3();
}
function h3()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I faithfully worship the Devil and offer her my body" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(Timeh)
    Timeh();
}
function Timeh()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC @RT(Repeat your mantra until you hear the bell,You will repeat the mantra until you hear the bell) showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC Get into the worship position and begin.. showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@NullResponse showImage("/GNMImages/Positions/Worship1.jpg"); @Wait(#Random(200,400))
    Bellh();
}
function Bellh()
{
     sendVirtualAssistantMessage(" Get back up #SlaveName playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    Done6();
}
function Done6()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2h");
    CMessage("%MeritChangePLow%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
    End();
    return;
    iContinued();
}
function iContinued()
{
    i();
}
function i()
{
    setVar("ChoreAlt2i", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC In just a moment you'll be in the worship position showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC While in the worship position I want you to repeat the follow sentence over and over.. showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(i1,i2,i3)
    i1();
}
function i1()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I am but the tool of #DomHonorific #DomName" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(iTime)
    i2();
}
function i2()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I am an unworthy chastity belted slave" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(iTime)
    i3();
}
function i3()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC "I serve to please my #DomHonorific" showImage("/GNMImages/Positions/Worship1.jpg"); @Goto(iTime)
    iTime();
}
function iTime()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC @RT(Repeat your mantra until you hear the bell,You will repeat the mantra until you hear the bell) showImage("/GNMImages/Positions/Worship1.jpg");
    --UNINTERPRETED LINE:@SystemMessage #VANC Get into the worship position and begin.. showImage("/GNMImages/Positions/Worship1.jpg");
    i4();
}
function i4()
{
    --UNINTERPRETED LINE:@NullResponse showImage("/GNMImages/Positions/Worship1.jpg"); @Wait(#Random(240,360))
    Belli();
}
function Belli()
{
     sendVirtualAssistantMessage(" Get back up #SlaveName playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    Donei();
}
function Donei()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2i");
    CMessage("%MeritChangePLow%");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
    End();
    return;
    
    
    
    End();
}
function End()
{
    setVar("ChoresComplete", getVar("ChoresComplete", 0) + 1);
    delVar("ChoreActive");
    return;
}