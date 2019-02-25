main();
function main()
{
    CMessage("%SlaveName% %DT%");
    CMessage("I have a great activity for us %DT%");
    SmallParts();
}
function SmallParts()
{
    setVar("PegModules", 0);
    run("CR" + java.io.File.separator + "ToysOn" + java.io.File.separator + "GNMPegsOn.js");
    SmallPartSelect();
}
function SmallPartSelect()
{
    --UNINTERPRETED LINE:@Variable[PegModules]>=[1] @NullResponse @Goto(EndSmallPart)
    setVar("PegModules", getVar("PegModules", 0) + 1);
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
//Linewriting with pegs
    CMessage("Keep the pegs there while you do a small assignment %DT%");
    a2();
}
function a2()
{
    --Command:WritingTask(%WritingTask1%)
    SmallPartSelect();
    return;
    Failed_Writing_Task();
}
function Failed_Writing_Task()
{
    CMessage("... %DT% %MeritChangeNMedium%");
    CMessage("Let\'s try again shall we.. %DT%");
    a2();
    return;
    b();
}
function b()
{
    run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "LinkModules" + java.io.File.separator + "GoToCorner.js");
    wait(randomInt(240, 300));
    CMessage(" Get back here.. ");
	playAudio("/GNMSounds/SpecialSounds/Bell.mp3");
    SmallPartSelect();
    return;
    c();
}
function c()
{
    //--UNINTERPRETED LINE:(d) \\Peg session2
   // --UNINTERPRETED LINE:(e) \\Peg session3
    return;
    EndSmallPart();
}
function EndSmallPart()
{
    --UNINTERPRETED LINE:@Variable[SubPain]<[7] @NullResponse @Goto(End)
    RipOff();
}
function RipOff()
{
    CMessage("%SlaveName% %DT%");
    CMessage("Rip the pegs off! %DT%");
    CMessage("Do it! %DT%");
    CMessage("Rip them off! %DT%");
    wait(15);
    CMessage("%GNMLol% %DT%");
    run("CR" + java.io.File.separator + "ToysOn" + java.io.File.separator + "GNMPegsOn.js");
    End2();
    return;
    End();
}
function End()
{
    CMessage("You can remove the pegs now %SlaveName% %DT%");
    run("CR" + java.io.File.separator + "ToysOn" + java.io.File.separator + "GNMPegsOn.js");
    return;
    End2();
}
function End2()
{
    CMessage("Well I just wanted a tad of fun %GNMLol% %DT%");
    return;
    if(getVar("PainUpdate3", false))
    {
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
    }
}