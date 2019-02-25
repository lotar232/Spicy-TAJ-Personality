main();
function main()
{
    if(!getVar("HotSaucePlay", false))
    {
        run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "Alternative" + java.io.File.separator + "*.js");
    }
    if(!getVar("HotSaucePlay", false))
    {
        End2();
        return;
    }
    CMessage("%Fetch% hot-sauce, icy-hot, tiger balm, toothpaste or similar %GNMGrin% %DT%");
    switch(random("a", "b"))
    {
        case "a":
        a();
        return;
        break;
        case "b":
        b();
        return;
        break;
    }
    --UNINTERPRETED LINE:(a) \\Condom
    let answer0 = getInput("Do you have a condom at hand? %GNMGrin% %DT%");
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
        CMessage("You should always have one around %GNMEmoteSad% %DT%");
        setVar("AskedCondom", getVar("AskedCondom", 0) + 1);
        NoCondom();
        return;
    }
    CMessage("And while you\'re at it a condom %DT%");
    wait(20);
    setTempVar("CondomOn", true);
    CMessage(random("Depending on how brave you are apply some of it to the condom ", "Put some of it into the condom ", "Put a generous amount inside the condom ") + "%DT%");
    CMessage(random("Put the condom on ", "Then put the condom on ", "Then when you are ready put the condom on ") + "%DT%");
    wait(10);
    NextStep();
    return;
    NoCondom();
}
function NoCondom()
{
    --UNINTERPRETED LINE:@Variable[AskedCondom]>[1] @Goto(PunishNoCondom)
    CMessage("It is very unlikely that you will really need them %DT%");
    CMessage("I mean who wants to fuck you %SlaveName% " + "%GNMLol% %DT%");
    if(getVar("HasChastity", false))
    {
        CMessage("Especially because you are locked up all the time %SlaveName% %GNMGrin% %DT%");
    }
    CMessage("However I want you to have condoms around for my pleasure %DT%");
    CMessage("Make sure to have some next time you are talking to me %DT%");
    ApplyPenis();
    return;
    PunishNoCondom();
}
function PunishNoCondom()
{
    if(getVar("gdAskingPersonality", false))
    {
        CMessage("I already asked you to have condoms around several times %GNMEmoteSad% %MeritChangeNMedium% %DT%");
    }
    if(getVar("gdAskingPersonality", false))
    {
        CMessage("And you want to make your Mistress happy, don\'t you? %GNMGrin% %DT%");
        ApplyPenis();
        return;
    }
    CMessage("I already told you to have condoms around");
    --Command:SetVar(AskedCondom)
    CMessage("times %SlaveName% %MeritChangeNMedium% %DT%");
    CMessage(random("Disobedience does not amuse me ", "I don\'t like to repeat myself ", "I don\'t like it when you disobey me ") + "%DT%");
    setVar("Preason_not_degrading", true);
    CMessage("You know this means more punishment points for you %DT%");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    ApplyPenis();
}
function ApplyPenis()
{
    CMessage("Well then.. %DT%");
    CMessage(random("Depending on how brave you are apply some of it to your ", "Put some of it onto your ", "Put a generous amount onto your ") + "%GNMCock% instead %GNMGrin% %DT%");
    NextStep();
}
function NextStep()
{
    if(getVar("PainUpdate3", false))
    {
        switch(random("Corner", "Stroking", "SlideShow", "Video"))
        {
            case "Corner":
            Corner();
            return;
            break;
            case "Stroking":
            Stroking();
            return;
            break;
            case "SlideShow":
            SlideShow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    switch(random("Corner", "SlideShow"))
    {
        case "Corner":
        Corner();
        return;
        break;
        case "SlideShow":
        SlideShow();
        return;
        break;
    }
    --UNINTERPRETED LINE:(b) \\Balls
    wait(15);
    CMessage(random("Apply some to those %GNMBalls% ", "Apply some of it to your %GNMBalls% ") + "%DT%");
    CMessage(random("Massage it into them ", "Give them a nice rubbing ", "Really try to rub - massage it into your %GNMBalls% ") + "%GNMGrin% %DT%");
    wait(10);
    switch(random("Corner", "Stroking", "SlideShow", "Video"))
    {
        case "Corner":
        Corner();
        return;
        break;
        case "Stroking":
        Stroking();
        return;
        break;
        case "SlideShow":
        SlideShow();
        return;
        break;
        case "Video":
        Video();
        return;
        break;
    }
    Corner();
}
function Corner()
{
    run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "LinkModules" + java.io.File.separator + "GoToCorner.js");
    wait(randomInt(240, 300));
    --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\GNMSounds\SpecialSounds\Bell.mp3]
    End();
    return;
    Stroking();
}
function Stroking()
{
    CMessage("I\'m putting on a slideshow %DT%");
    CMessage("You may stroke slowly to it! %DT%");
    setVar("SlideShow", 0);
    Slideshow2();
    return;
    SlideShow();
}
function SlideShow()
{
    CMessage("I\'m putting on a slideshow, just sit there and enjoy it %GNMGrin% %DT%");
    setVar("SlideShow", 0);
    Slideshow2();
}
function Slideshow2()
{
    --Command:ShowImage
    setVar("SlideShow", getVar("SlideShow", 0) + 1);
    if (getVar("SlideShow", 0) >= 240)
    {
        End();
        return;
    }
    wait(3);
    if (randomInteger(1, 100) <= 2)
    {
        Slideshow_Interrupt();
        return;
    }
    Slideshow2();
    return;
    Slideshow_Interrupt();
}
function Slideshow_Interrupt()
{
    CMessage(random("Let\'s hope it doesn\'t burn too hot", "Let\'s hope you can maintain the pain", "Keep going...", "Now those blue %GNMBalls% will ache even worse", "Apply some to your dick too %GNMLol%"));
    --Command:ShowImage
    setVar("SlideShow", getVar("SlideShow", 0) + 1);
    Slideshow2();
    return;
    Video();
}
function Video()
{
    CMessage("I\'m putting on a video for you " + random("and no touching ", "just watch it ", "you may stroke slowly - no edging of course.. ") + "%DT%");
    playVideo("Videos" + java.io.File.separator + "*.*");
    End();
    return;
    End();
}
function End()
{
    CMessage("%GNMLol% %DT%");
    CMessage("Can\'t say I don\'t love this %GNMLol% %DT%");
    if(getVar("CondomOn", false))
    {
        CMessage("You can remove the condom %DT%");
        delVar("CondomOn");
    }
    CMessage("Don\'t clean your %GNMCock% or %GNMBalls% though %DT%");
    CMessage("Even though we are done here it will follow you through the session %GNMGrin% %DT%");
    CMessage("Let\'s get on %DT%");
    End2();
}
function End2()
{
    return;
}