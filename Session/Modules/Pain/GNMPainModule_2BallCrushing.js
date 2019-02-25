main();
function main()
{
    if(!getVar("BallCrusherPlay", false) && !getVar("ChastityIsOn", false))
    {
        run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "Alternative" + java.io.File.separator + "*.js");
    }
    if(!getVar("BallCrusherPlay", false))
    {
        run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "Alternative_Chastity" + java.io.File.separator + "*.js");
    }
    if(!getVar("BallCrusherPlay", false))
    {
        End2();
        return;
    }
    CMessage("%SlaveName% " + random("I want to have a bit of fun with your %GNMBalls% ", "Lets play a bit with those %GNMBalls% ") + "%DT%");
    CMessage("%Fetch% ball crusher %DT%");
    CMessage("And attach it %GNMGrin% %DT%");
    let answer0 = getInput("%GNMReady% %DT%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%GNMYesOrNo% %DT%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GNMGood% %DT%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hurry up! %DT%");
        wait(20);
    }
    CMessage("Now.. %DT%");
    CMessage("I need you to tigthen the screws so that it applies pressure to your %GNMBalls% %DT%");
    CMessage("%stopstroking%", 0);
    wait(20);
    if(getVar("PainModule2First", false))
    {
        PainModule2First();
        return;
    }
    setVar("PainModule2First", true);
    --UNINTERPRETED LINE:Since this is the first we <i>play</i> with your #GNMBalls like this #DT
    CMessage("We need to determine your treshhold %DT%");
    CMessage("That point where you can\'t absolutely stand even another single twist! %DT%");
    CMessage("Now for some terms %DT%");
    CMessage("Half a twist means to tigthen all the screws a half round %DT%");
    CMessage("A full twist means to tigthen all the screws a full round! %DT%");
    CMessage("As simple as that.. %DT%");
    CMessage("Now for this next exercise %DT%");
    CMessage("You\'re going to twist them 1 full round each 15 seconds %DT%");
    CMessage("I want you to make me proud! %DT%");
    CMessage("Endure the pain! %DT%");
    setVar("MaxTwist", 0);
    CMessage("%stopstroking%", 0);
    --Command:CustomMode(stop,Goto,EndIni)
    Twist();
}
function Twist()
{
    CMessage("Twist it.. %DT%");
    --Command:ShowImage
    setVar("MaxTwist", getVar("MaxTwist", 0) + 2);
    wait(15);
    Twist();
    return;
    EndIni();
}
function EndIni()
{
    --Command:CustomMode(ModeText,Normal)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[40] You did extremely well! #DT #MeritChangePHigh @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[35] You did great! #DT #MeritChangePMedium @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[30] You did alright! #DT #MeritChangePLow @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[20] Well I suppose you wasn't terrible.. #DT @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[15] Already done! Bvarh.. #DT #MeritChangeNLow @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[10] Omg you have got to be kidding me.. #DT #MeritChangeNMedium @Goto(Continue1)
    --UNINTERPRETED LINE:@Variable[MaxTwist]<=[10] Wauv.. that was awfull! #DT #MeritChangeNHigh @Goto(Continue1)
    Continue1();
}
function Continue1()
{
    CMessage("Well now that we have that part sorted out %DT%");
    setVar("TwistRecord", 0);
    CMessage("You may relieve the pressure on your %GNMBalls% %DT%");
    setVar("TwistRecord", getVar("TwistRecord", 0) + getVar("MaxTwist", 0));
    CMessage("Make sure that tension is still applied %DT%");
    CMessage("It just shouldn\'t be painful %GNMGrin% %DT%");
    PainModule2First();
}
function PainModule2First()
{
    if(getVar("PainUpdate1", false))
    {
        CMessage("%SlaveName% %DT%");
        switch(random("Rubber", "Slideshow", "Game"))
        {
            case "Rubber":
            Rubber();
            return;
            break;
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Game":
            Game();
            return;
            break;
        }
    }
    CMessage("%SlaveName% %DT%");
    switch(random("Rubber", "Slideshow"))
    {
        case "Rubber":
        Rubber();
        return;
        break;
        case "Slideshow":
        Slideshow();
        return;
        break;
    }
    Rubber();
}
function Rubber()
{
    CMessage("This is going to hurt.. %DT%");
    CMessage("I want you to fetch a large rubberband %DT%");
    CMessage("Put the rubberband around the ball crusher %DT%");
    CMessage("At this point it shouldn\'t add to the pressure %DT%");
    CMessage("At least not too much %DT%");
    CMessage("Now before we play with the rubberband %DT%");
    CMessage("We need to tigthen that ball crusher %DT%");
    CMessage("I\'m gonna give you a slideshow %DT%");
    CMessage("With every new picture you are to twist the screws once %DT%");
    CMessage("I will continue until we reach your highscore.. %DT%");
    setVar("MaxTwist", 0);
    setTempVar("Busy", true);
    Slideshow1();
}
function Slideshow1()
{
    --Command:ShowImage
    setVar("MaxTwist", getVar("MaxTwist", 0) + 2);
    if (getVar("MaxTwist", 0) >= getVar("TwistRecord", 0))
    {
        Continue2();
        return;
    }
    wait(randomInt(9, 15));
    Slideshow1();
    return;
    Continue2();
}
function Continue2()
{
    CMessage("Good! %DT%");
    CMessage("Stand up %SlaveName% %DT%");
    CMessage("In a moment you will pull that rubberband back as far as you can %DT%");
    CMessage("Aim for the center of your %GNMBalls% %DT%");
    CMessage("And release %GNMGrin% %DT%");
    setVar("Strikes", 0);
    --UNINTERPRETED LINE:@Variable[SubPain]>=[10] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(20,30)] @Chance25(ATadMore) @Goto(Rubber2)
    setVar("SubPain", 9);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random18,27", 0));
    if (randomInteger(1, 100) <= 20)
    {
        ATadMore();
        return;
    }
    Rubber2();
    return;
    setVar("SubPain", 8);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random16,24", 0));
    if (randomInteger(1, 100) <= 15)
    {
        ATadMore();
        return;
    }
    Rubber2();
    return;
    setVar("SubPain", 7);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random14,21", 0));
    if (randomInteger(1, 100) <= 10)
    {
        ATadMore();
        return;
    }
    Rubber2();
    return;
    setVar("SubPain", 6);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random12,18", 0));
    if (randomInteger(1, 100) <= 05)
    {
        ATadMore();
        return;
    }
    Rubber2();
    return;
    setVar("SubPain", 5);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random10,16", 0));
    Rubber2();
    return;
    setVar("SubPain", 4);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random8,14", 0));
    Rubber2();
    return;
    setVar("SubPain", 3);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random6,12", 0));
    Rubber2();
    return;
    setVar("SubPain", 2);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random4,10", 0));
    Rubber2();
    return;
    setVar("SubPain", 1);
    setVar("Strikes", getVar("Strikes", 0) + getVar("#Random2,8", 0));
    Rubber2();
    return;
    ATadMore();
}
function ATadMore()
{
    CMessage("Just for me! %DT%");
    CMessage("Give the ball crusher " + random("half a twist ", "a full twist ", "two full twists ") + "%DT%");
    CMessage("%GNMGrin% %DT%");
    Rubber2();
}
function Rubber2()
{
    CMessage("Once again %SlaveName% %DT%");
    CMessage("I\'m gonna put on a slideshow %DT%");
    CMessage("When the picture changes you will pull the rubberband back %DT%");
    CMessage("When it changes again you release it %GNMGrin% %DT%");
    setTempVar("Busy", true);
    Slideshow2();
}
function Slideshow2()
{
    --Command:ShowImage
    wait(randomInt(5, 15));
    --Command:ShowImage
    setVar("Strikes", getVar("Strikes", 0) - 1);
    if (getVar("Strikes", 0) <= 0)
    {
        End();
        return;
    }
    wait(randomInt(5, 15));
    Slideshow2();
    return;
    Slideshow();
}
function Slideshow()
{
    CMessage("I\'m gonna show you a slideshow %DT%");
    CMessage("Each time the picture chages you are to twist half a round %DT%");
    CMessage("Rather simple.. %DT%");
    CMessage("%stopstroking%", 0);
    CMessage("If you break your highscore you earn 100 gold %DT%");
    CMessage("If you reach your highscore nothing happens %DT%");
    CMessage("If you perform well below your highscore I\'m gonna be rather disappointed %DT%");
    CMessage("And you probably don\'t want to do that %GNMGrin% %DT%");
    setTempVar("Busy", true);
    CMessage("Enjoy!");
    setVar("MaxTwist", 0);
    --Command:CustomMode(stop,Goto,Stop2)
    Slideshow3();
}
function Slideshow3()
{
    --Command:ShowImage
    setVar("MaxTwist", getVar("MaxTwist", 0) + 1);
    wait(randomInt(5, 15));
    Slideshow3();
    return;
    Stop2();
}
function Stop2()
{
    --UNINTERPRETED LINE:@RT(You look like someone under pressure,You seem almost pressurized!,Feeling a bit of tension?,) #GNMLol #DT @CustomMode(ModeText,Normal)
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[TwistRecord] We have a new record! #DT @Goto(NewRecord)
    setVar("MaxTwist", getVar("TwistRecord", 0));
    CMessage("You matched your old record! %DT% %GNMGrin%");
    End();
    return;
    --UNINTERPRETED LINE:@Variable[MaxTwist]<[TwistRecord] Well you did less than your record.. #DT @ChangeVar[MaxTwist]=[MaxTwist]-[TwistRecord]
    --UNINTERPRETED LINE:@Variable[MaxTwist]>[-4] @NullResponse @Goto(Close)
    CMessage("In fact you weren\'t even close! %DT% %MeritChangeNHigh%");
    delVar("Busy");
    CMessage("I need you to try much harder! %DT%");
    CMessage("You can relieve the pressure now %DT%");
    return;
    Close();
}
function Close()
{
    CMessage("But at least you came close to it %DT%");
    CMessage("So I\'m still somewhat content about your performance %DT%");
    CMessage("But try harder next time %DT%");
    End();
    return;
    NewRecord();
}
function NewRecord()
{
    CMessage("Meaning you\'ve earned 100 gold! %DT%");
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
    setVar("TwistRecord", 0);
    CMessage("I\'m impressed by your effort! %DT%");
    setVar("TwistRecord", getVar("TwistRecord", 0) + getVar("MaxTwist", 0));
    End();
    return;
    Game();
}
function Game()
{
    CMessage("I have a small game for us! %DT%");
    CMessage("It\'s a guessing game! %DT%");
    CMessage("You have to say either \"boobs, butt or hentai\" %DT%");
    CMessage("I\'ll then show you a picture %DT%");
    CMessage("Guess wrong and you have to tigthen it a full round %DT%");
    CMessage("Guess right and you can loosen it half a round %DT%");
    CMessage("When you\'ve made 10 right guesses the game is over! %DT%");
    CMessage("%stopstroking%", 0);
    --Command:CustomMode(stop,Goto,Stop3)
    CMessage("It\'s a simple game.. %DT%");
    Choose();
}
function Choose()
{
    let answer0 = getInput("Boobs, butt or hentai? %DT%");
    while (!(answer0.isLike("boob") || answer0.isLike("boobs") || answer0.isLike("breasts") || answer0.isLike("breast") || answer0.isLike("butt") || answer0.isLike("ass") || answer0.isLike("hentai")))
    {
        answer0 = getInput("Boobs, butt or hentai? %DT%");
    }
    if (answer0.isLike("boob", "boobs", "breasts", "breast"))
    {
        setTempVar("Boobs", true);
        switch(random("Boobs", "Butt", "Hentai"))
        {
            case "Boobs":
            Boobs();
            return;
            break;
            case "Butt":
            Butt();
            return;
            break;
            case "Hentai":
            Hentai();
            return;
            break;
        }
    }
    else if (answer0.isLike("butt", "ass"))
    {
        setTempVar("Butt", true);
        switch(random("Boobs", "Butt", "Hentai"))
        {
            case "Boobs":
            Boobs();
            return;
            break;
            case "Butt":
            Butt();
            return;
            break;
            case "Hentai":
            Hentai();
            return;
            break;
        }
    }
    else if (answer0.isLike("hentai"))
    {
        setTempVar("hentai", true);
        switch(random("Boobs", "Butt", "Hentai"))
        {
            case "Boobs":
            Boobs();
            return;
            break;
            case "Butt":
            Butt();
            return;
            break;
            case "Hentai":
            Hentai();
            return;
            break;
        }
    }
    Boobs();
}
function Boobs()
{
    if(getVar("Boobs", false))
    {
        delVar("Boobs");
        showTaggedImage(4, ["boobs"]);
        CMessage(random("Correct", "Right on", "Oh my yes!", "You got it!", "You got it right", "Right", "That is correct.."));
        wait(2);
        setVar("Correct", getVar("Correct", 0) + 1);
        if (getVar("Correct", 0) >= 10)
        {
            End3();
            return;
        }
        Choose();
        return;
    }
    if(getVar("Butt", false))
    {
        delVar("Butt");
        showTaggedImage(4, ["boobs"]);
        CMessage(random("Not really boobs", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    if(getVar("Hentai", false))
    {
        delVar("Hentai");
        showTaggedImage(4, ["boobs"]);
        CMessage(random("Not really boobs", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    Butt();
}
function Butt()
{
    if(getVar("Boobs", false))
    {
        delVar("Boobs");
        showTaggedImage(4, ["ass"]);
        CMessage(random("Not really a butt", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    if(getVar("Butt", false))
    {
        delVar("Butt");
        showTaggedImage(4, ["ass"]);
        CMessage(random("Correct", "Right on", "Oh my yes!", "You got it!", "You got it right", "Right", "That is correct.."));
        wait(2);
        setVar("Correct", getVar("Correct", 0) + 1);
        if (getVar("Correct", 0) >= 10)
        {
            End3();
            return;
        }
        Choose();
        return;
    }
    if(getVar("Hentai", false))
    {
        delVar("Hentai");
        showTaggedImage(4, ["ass"]);
        CMessage(random("Not really a butt", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    Hentai();
}
function Hentai()
{
    if(getVar("Boobs", false))
    {
        delVar("Boobs");
        showTaggedImage(4, ["bondage"]);
        CMessage(random("Not really hentai", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    if(getVar("Butt", false))
    {
        delVar("Butt");
        showTaggedImage(4, ["bondage"]);
        CMessage(random("Not really hentai", "Nope", "Not", "Incorrect", "Wrong", "Not right", "Lol Nope", "Lol no", "Grin.. No"));
        wait(2);
        Choose();
        return;
    }
    if(getVar("Hentai", false))
    {
        delVar("Hentai");
        showTaggedImage(4, ["bondage"]);
        CMessage(random("Correct", "Right on", "Oh my yes!", "You got it!", "You got it right", "Right", "That is correct.."));
        wait(2);
        setVar("Correct", getVar("Correct", 0) + 1);
        if (getVar("Correct", 0) >= 10)
        {
            End3();
            return;
        }
        Choose();
        return;
    }
    Stop3();
}
function Stop3()
{
    CMessage("... %DT%");
    --Command:CustomMode(ModeText,Normal)
    delVar("Busy");
    CMessage("Well I\'m not sure what to say right now.. %DT%");
    CMessage("Remove the ball crusher %DT%");
    wait(25);
    return;
    End();
}
function End()
{
    CMessage("You can relieve the pressure now %DT%");
    delVar("Busy");
    CMessage("Remove the ball crusher %DT%");
    wait(25);
    CMessage("This was extremely hot! %DT%");
    return;
    End2();
}
function End2()
{
    delVar("Busy");
    return;
    End3();
}
function End3()
{
    CMessage("You can relieve the pressure now %DT%");
    delVar("Busy");
    CMessage("Remove the ball crusher %DT%");
    wait(25);
    CMessage(random("I hope they aren\'t dead! ", "I really hope those %GNMBalls% aren\'t dead ", "You should probably take a look at those %GNMBalls% %GNMLol% ") + "%DT%");
    return;
}