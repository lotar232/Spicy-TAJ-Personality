main();
function main()
{
    CMessage("%SlaveName% %DT%");
    if(getVar("ParachutePunishment", false))
    {
        ParachutePunishment();
        return;
    }
    CMessage("%Fetch% a wooden spoon %DT%");
    wait(15);
    CMessage(random("This should be fun! ", "Well this is gonna be fun! ", "%GNMGrin% ") + "%DT%");
    setVar("Time", 1);
    --UNINTERPRETED LINE:@Variable[SubPain]>=[10] @NullResponse @SetVar[Times]=[#Random(30,50)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[9] @NullResponse @SetVar[Times]=[#Random(25,45)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[8] @NullResponse @SetVar[Times]=[#Random(20,40)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[7] @NullResponse @SetVar[Times]=[#Random(15,35)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[6] @NullResponse @SetVar[Times]=[#Random(10,30)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[5] @NullResponse @SetVar[Times]=[#Random(10,25)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[4] @NullResponse @SetVar[Times]=[#Random(10,20)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[3] @NullResponse @SetVar[Times]=[#Random(5,15)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[2] @NullResponse @SetVar[Times]=[#Random(5,10)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[1] @NullResponse @SetVar[Times]=[5]
    CMessage(random("You\'re going to smack those %GNMBalls% ", "You\'ll soon be swatting those %GNMBalls% ", "In a moment you\'re going to hit those %GNMBalls% ") + "%DT%");
    CMessage("I\'ll count them for you %DT%");
    CMessage("Get ready %DT%");
    wait(randomInt(5, 10));
    Count();
}
function Count()
{
    --Command:ShowVar(Time)
    CMessage("%DT%");
    setVar("Time", getVar("Time", 0) + 1);
    if (getVar("Time", 0) >= getVar("Times", 0))
    {
        End();
        return;
    }
    wait(randomInt(2, 8));
    Count();
    return;
    ParachutePunishment();
}
function ParachutePunishment()
{
    CMessage("%Fetch% your parachute %DT%");
    wait(20);
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]>=[6] @RT(Apply,Add) @RT(1.5 kg's,2 kg's) to it #DT @Wait(20)
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]<[6] @RT(Apply,Add) @RT(1 kg,1.5 kg's) to it #DT @Wait(20)
    CMessage(random("Go to the corner hands above you head ", "Go the corner with your hands above your head ") + "%DT%");
    CMessage("Wait for the bell %DT%");
    if(getVar("Personality1", false))
    {
        wait(randomInt(200, 600));
    }
    if(getVar("Personality2", false))
    {
        wait(randomInt(400, 900));
    }
    if(getVar("Personality3", false))
    {
        wait(randomInt(600, 1200));
        --UNINTERPRETED LINE:@RT(Come back here,get back) #DT @PlayAudio[\GNMSounds\SpecialSounds\Bell.mp3] @Wait(15) @Goto(End)
    }
    End();
}
function End()
{
    CMessage(random("That was it ", "We\'re done ") + "%DT%");
    CMessage(random("Good girl ", "Good slut ", "Good slave ") + "%DT%");
    setTempVar("E2Complete", true);
    setTempVar("PunishmentComplete", true);
    run("CR" + java.io.File.separator + "BackgroundMode" + java.io.File.separator + "Punishment" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}