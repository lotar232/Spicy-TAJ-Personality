main();
function main()
{
    setVar("CBTLoops", 0);
    switch(random("a1", "a2", "a3"))
    {
        case "a1":
        a1();
        return;
        break;
        case "a2":
        a2();
        return;
        break;
        case "a3":
        a3();
        return;
        break;
    }
    a1();
}
function a1()
{
    CMessage("Grab my %GNMBalls% and squeeze them %DT%");
    wait(10);
    CMessage("Squeeze them " + random("as hard as you can ", "so hard that your eyes start to tear ") + "until I tell you to release your grip " + random("%SlaveName% ", "%Slut% ", "%SubName% ") + "%DT%");
    if(getVar("Personality1", false))
    {
        wait(5);
    }
    if(getVar("Personality2", false))
    {
        wait(10);
    }
    if(getVar("Personality3", false))
    {
        wait(20);
    }
    CMessage("%stopstroking%", 0);
    let answer0 = getInput("Are they " + random("blue ", "sore ", "purple ", "hurting ") + "yet?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%GNMYesOrNo% %DT%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GNMMoan% %DT%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I am sure I can do something about that %SlaveName% %DT%");
        switch(random("a2", "a3"))
        {
            case "a2":
            a2();
            return;
            break;
            case "a3":
            a3();
            return;
            break;
        }
    }
    End();
    return;
    a2();
}
function a2()
{
    CMessage("Be ready to bust my %GNMBalls% %SlaveName% %DT%");
    setVar("TempHits", getVar("SubPain", 0) + 0);
    Loop2();
}
function Loop2()
{
    CMessage("Hit them hard");
    --Command:ShowVar(TempHits)
    CMessage("times %DT%");
    let answer0 = getInput(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% %DT%", 45);
    if (answer0.isTimeout())
    {
        Time();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? %DT%");
    }
    if (answer0.isLike("done"))
    {
        CMessage("%GNMGrin% %DT%");
        Continue2();
        return;
    }
    Time();
}
function Time()
{
    CMessage(random("This is taking too long ", "You are taking way too much time ", "How is this taking so long? ") + "%DT% %MeritChangeNLow%");
    CMessage(random("I guess we have to try this again ", "Let\'s try this again shall we? ") + "%DT%");
    Loop2();
    return;
    Continue2();
}
function Continue2()
{
    let answer0 = getInput("Hit my %GNMBalls% another");
    --Command:ShowVar(TempHits)
    if (answer0.isTimeout())
    {
        Time();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? %DT%");
    }
    if (answer0.isLike("done"))
    {
        CMessage("%GNMGood% %DT%");
    }
    End();
    return;
    a3();
}
function a3()
{
    CMessage("I want you to flick my balls %SlaveName% %DT%");
    setVar("TempHits", getVar("SubPain", 0) * 2);
    Loop3();
}
function Loop3()
{
    CMessage("Flick each side");
    --Command:ShowVar(TempHits)
    CMessage("times %DT%");
    let answer0 = getInput(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% %DT%", 60);
    if (answer0.isTimeout())
    {
        Time2();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? %DT%");
    }
    if (answer0.isLike("done"))
    {
        CMessage("%GNMGrin% %DT%");
        Continue3();
        return;
    }
    Time2();
}
function Time2()
{
    CMessage(random("This is taking too long ", "You are taking way too much time ", "How is this taking so long? ") + "%DT% %MeritChangeNLow%");
    CMessage(random("I guess we have to try this again ", "Let\'s try this again shall we? ") + "%DT%");
    Loop3();
    return;
    Continue3();
}
function Continue3()
{
    let answer0 = getInput("Does it " + random("hurt ", "burn ", "ache ") + "yet?");
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
        CMessage("I am sure I can do something about that %SlaveName% %DT%");
        switch(random("a1", "a3"))
        {
            case "a1":
            a1();
            return;
            break;
            case "a3":
            a3();
            return;
            break;
        }
    }
    return;
    End();
}
function End()
{
    setVar("CBTLoops", getVar("CBTLoops", 0) + 1);
    setVar("TempHits", getVar("SubPain", 0) * 2);
    --Command:CustomMode(done,Goto,End1)
    switch(random("a", "b", "c", "d", "e", "f", "g", "h", "i", "j"))
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
        case "j":
        j();
        return;
        break;
    }
    a();
}
function a()
{
    CMessage("Let\'s give thoes %GNMBalls% another");
    --Command:ShowVar(TempHits)
    wait(400);
    b();
}
function b()
{
    CMessage("I want your %GNMBalls% to really hurt. Give them another hard slap %DT%");
    wait(200);
    c();
}
function c()
{
    CMessage("Punch your %GNMBalls%");
    --Command:ShowVar(TempHits)
    wait(200);
    d();
}
function d()
{
    CMessage("Now smack those %GNMBalls%");
    --Command:ShowVar(SubPain)
    wait(200);
    e();
}
function e()
{
    CMessage("Now flick each testicle");
    --Command:ShowVar(TempHits)
    wait(200);
    f();
}
function f()
{
    CMessage("Now");
    --Command:ShowVar(TempHits)
    wait(200);
    g();
}
function g()
{
    setVar("TempHits", getVar("SubPain", 0) * 2);
    CMessage("Give me");
    --Command:ShowVar(TempHits)
    wait(400);
    h();
}
function h()
{
    --Command:ShowVar(TempHits)
    CMessage("more smacks %DT%");
    wait(400);
    i();
}
function i()
{
    CMessage("I want");
    --Command:ShowVar(TempHits)
    wait(400);
    j();
}
function j()
{
    CMessage("I want you to add");
    --Command:ShowVar(TempHits)
    wait(200);
    End1();
}
function End1()
{
    --Command:CustomMode(ModeText,Normal)
    --UNINTERPRETED LINE:@NullResponse @Variable[CBTLoops]>[4] @Goto(FinalEnd)
    if (randomInteger(1, 100) <= 65)
    {
        End();
        return;
    }
    FinalEnd();
}
function FinalEnd()
{
    setTempVar("E3Complete", true);
    setTempVar("PunishmentComplete", true);
    run("CR" + java.io.File.separator + "BackgroundMode" + java.io.File.separator + "Punishment" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}