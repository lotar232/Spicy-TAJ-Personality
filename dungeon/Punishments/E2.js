main();
function main()
{
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
    CMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a small rubberband %DT%");
    wait(10);
    Loop1();
}
function Loop1()
{
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
        CMessage("Hurry then! %DT%");
        wait(10);
        Loop1();
        return;
    }
    CMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficuilt ") + "%DT%");
    --UNINTERPRETED LINE:@RT(I want you to hold the rubberband like,You are to hold the rubberband like this) @ShowImage[\GNMImages\Toys\Rubberband.*]
    CMessage(random("Hold it close to the head of your %GNMCock% ", "It\'s going near the head of your %GNMCock% ") + "%DT%");
    setVar("TempHits", 0);
    CMessage(random("With your other hand ", "Using your other hand ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) + getVar("SubPain", 0));
    CMessage(random("Pull back one of the strings as far as you dare without breaking the rubberband ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) * 2);
    CMessage(random("You are to strike the head of your %GNMCock% ", "I want you to release the rubberband on your cock head ") + "%DT%");
    --Command:ShowVar(TempHits)
    CMessage("times");
    CMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% %DT%");
    --Command:CustomMode(done,Goto,End1)
    wait(999999);
    a2();
}
function a2()
{
    CMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a wooden spoon or similar %DT%");
    setVar("TempHits", 0);
    Loop2();
}
function Loop2()
{
    let answer0 = getInput("%GNMReady%  %DT%");
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
        CMessage("Hurry then! %DT%");
        wait(10);
        Loop2();
        return;
    }
    CMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficuilt ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) + getVar("SubPain", 0));
    CMessage(random("I want you to use that spoon and smack your %GNMBalls% ", "You are to use the spoon and smack your %GNMBalls% ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) * 4);
    CMessage(random("Hit them hard ", "Hit them as hard as possible ", "Make me proud and hit them hard! ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) + 10);
    --UNINTERPRETED LINE:@RT(They should look "blue" afterwards,It's okay if they get a little bruised,, they can handle it!) #GNMMoan  #DT
    CMessage(random("To be precise I want you to hit your precious %GNMBalls% ", "You\'re gonna hit your %GNMBalls% ") + "%DT%");
    --Command:ShowVar(TempHits)
    CMessage("times");
    CMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% %DT%");
    --Command:CustomMode(done,Goto,End1)
    wait(999999);
    a3();
}
function a3()
{
    CMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a heavy book %DT%");
    setVar("TempHits", 0);
    Loop3();
}
function Loop3()
{
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
        CMessage("Hurry then! %DT%");
        wait(10);
        Loop3();
        return;
    }
    CMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficuilt ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) + getVar("SubPain", 0));
    CMessage(random("I want you to place the book on a table ", "You should place the book on a table ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) * 3);
    CMessage(random("It has to stand up ", "It should be standing up ") + "%DT%");
    setVar("TempHits", getVar("TempHits", 0) + 7);
    CMessage(random("Then I want you to tilt the book and aim for your %GNMBalls% ", "Then you\'re going to aim for your %GNMBalls% and tilt the book ") + "%GNMMoan%  %DT%");
    CMessage(random("To be precise I want you to hit your precious %GNMBalls%", "You\'re gonna hit your %GNMBalls%"));
    --Command:ShowVar(TempHits)
    CMessage("times %DT%");
    CMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% %DT%");
    --Command:CustomMode(done,Goto,End1)
    wait(999999);
    End1();
}
function End1()
{
    if(getVar("Personality1", false))
    {
        End();
        return;
    }
    CMessage("Now you\'ll be using your hand. %DT%");
    --Command:CustomMode(done,Goto,End)
    switch(random("a", "b", "c"))
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
    }
    a();
}
function a()
{
    CMessage("Let\'s give those %GNMBalls% another");
    --Command:ShowVar(SubPain)
    wait(999999);
    b();
}
function b()
{
    CMessage("I want your %GNMBalls% to really hurt. Give them another hard slap, Punch your %GNMBalls%");
    --Command:ShowVar(SubPain)
    wait(999999);
    c();
}
function c()
{
    CMessage("Take your %GNMBalls% into your one hand and snap each of them");
    --Command:ShowVar(SubPain)
    wait(999999);
    End();
}
function End()
{
    CMessage("I hope this was as much fun for you as it was for me %GNMLol% %DT%");
    --Command:CustomMode(ModeText,Normal)
    wait(5);
    CMessage("You can put the gear away for now %GNMEmoteHappy% %DT%");
    wait(8);
    setTempVar("E1Complete", true);
    setTempVar("PunishmentComplete", true);
    run("CR" + java.io.File.separator + "BackgroundMode" + java.io.File.separator + "Punishment" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}