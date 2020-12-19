main();
function main()
{
    if(!getVar("ParachutePlay", false))
    {
        run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "Alternative" + java.io.File.separator + "*.js");
    }
    if(!getVar("ParachutePlay", false))
    {
        End2();
        return;
    }
    CMessage("%SlaveName% %DT%");
    CMessage("%Fetch% parachute %DT%");
    CMessage("We\'re going to have some fun with it! %DT%");
    wait(15);
    CMessage("Attach it while you\'re at it %GNMLol% %DT%");
    wait(15);
    if(getVar("PainUpdate2", false))
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
    a();
    return;
    --UNINTERPRETED LINE:(a) \\ attach weight
    --UNINTERPRETED LINE:@Flag(PainUpdate2) @Variable[SubPainTolerance]>=[10] Attach @RT(1.5 kg's,2 kg's,2.5 kg's,3 kg's) to the parachute #DT @Goto(c,d,e)
    --UNINTERPRETED LINE:@Flag(PainUpdate2) @Variable[SubPainTolerance]>[7] Attach @RT(1 kg's,1.5 kg's,2 kg's,2.5 kg's) to the parachute #DT @Goto(c,d,e)
    --UNINTERPRETED LINE:@Flag(PainUpdate2) @Variable[SubPainTolerance]>[4] Attach @RT(0.5 kg's,1 kg's,1.5 kg's,2 kg's) to the parachute #DT @Goto(c,d,e)
    --UNINTERPRETED LINE:@Flag(PainUpdate2) @Variable[SubPainTolerance]>=[1] Attach @RT(0.5 kg's,1 kg's,1.5 kg's) to the parachute #DT @Goto(c,d,e)
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]>=[10] Attach @RT(1.5 kg's,2 kg's,2.5 kg's,3 kg's) to the parachute #DT @Goto(c,d)
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]>[7] Attach @RT(1 kg's,1.5 kg's,2 kg's,2.5 kg's) to the parachute #DT @Goto(c,d)
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]>[4] Attach @RT(0.5 kg's,1 kg's,1.5 kg's,2 kg's) to the parachute #DT @Goto(c,d)
    --UNINTERPRETED LINE:@Variable[SubPainTolerance]>=[1] Attach @RT(0.5 kg's,1 kg's,1.5 kg's) to the parachute #DT @Goto(c,d)
    --UNINTERPRETED LINE:(b) \\ fetch a lock
    CMessage("Also fetch a lock with the keys %GNMGrin% %DT%");
    wait(20);
    switch(random("f", "g"))
    {
        case "f":
        f();
        return;
        break;
        case "g":
        g();
        return;
        break;
    }
    --UNINTERPRETED LINE:(c) \\Corner
    CMessage("You need patience for this one.. %DT%");
    CMessage("Basicly I want you to go to the corner %DT%");
    CMessage("Stand there hands above your head and let the weight do it\'s work %GNMGrin% %DT%");
    CMessage("If you are ever mine, you can expect to stand like that whenever I don\'t have a need for you %DT%");
    CMessage("And your chores are complete.. %DT%");
    CMessage("Go to the corner %DT%");
    CMessage("Hands above your head and wait for my bell.. %DT%");
    if(getVar("Personality1", false))
    {
        wait(randomInt(250, 1100));
    }
    if(getVar("Personality2", false))
    {
        wait(randomInt(450, 1300));
    }
    if(getVar("Personality3", false))
    {
        wait(randomInt(700, 1800));
        --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @Goto(End)
        --UNINTERPRETED LINE:(d) \\Squat
    }
    CMessage("I think it\'s time for some exercise! %GNMLol% %DT%");
    CMessage("You\'re going to squat for me.. %DT%");
    CMessage("You\'ll hear 3 commands %DT%");
    CMessage("Down - get down into a squat and stay down.. %DT%");
    CMessage("Up - you may stand and relax %DT%");
    CMessage("And on your toes - Stand on your toes, keep your balance.. %DT%");
    setVar("Timer", 0);
    CMessage("If you\'re squating and hear \"on your toes\", then stand on your toes but stay down in the squat! %DT%");
    setVar("Timer", getVar("Timer", 0) + getVar("#Random90,150", 0));
    CMessage("Now hands above your head! %DT%");
    CMessage("Get ready! %DT%");
    Base();
}
function Base()
{
    if (randomInteger(1, 100) <= 10)
    {
        Toes();
        return;
    }
    Down();
    return;
    Down();
}
function Down()
{
    --UNINTERPRETED LINE:@NullResponse @PlayAudio[\Spicy\Punishment\Corner\Down\*.mp3] @ChangeVar[Timer]=[Timer]-[1] @If[Timer]<=[0]Then(End3) @Wait(#Random(5,15)) @Goto(Up,Toes)
    Up();
}
function Up()
{
    --UNINTERPRETED LINE:@NullResponse @PlayAudio[\Spicy\Punishment\Corner\Up\*.mp3] @ChangeVar[Timer]=[Timer]-[1] @If[Timer]<=[0]Then(End3) @Wait(#Random(5,15)) @Goto(Toes,Down)
    Toes();
}
function Toes()
{
    --UNINTERPRETED LINE:@NullResponse @PlayAudio[\Spicy\Punishment\Corner\OnYourToes.mp3] @ChangeVar[Timer]=[Timer]-[1] @If[Timer]<=[0]Then(End3) @Wait(#Random(5,15)) @Goto(Down)
    End3();
}
function End3()
{
    --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @Goto(End)
    --UNINTERPRETED LINE:(e) \\Bottle tilting
    CMessage("Get me a water bottle, preferably " + "5 L one %GNMGrin% %DT%");
    CMessage("Fill it up! %DT%");
    wait(30);
    CMessage("We\'re gonna play a game! %GNMLol% %DT%");
    CMessage("You are to use whatever is at the end of your parachute and tilt the water bottle! %DT%");
    CMessage("Hands above at all times except when you are to raise the water bottle %GNMGrin% %DT%");
    CMessage("The objective is to tilt it as many times as possible %DT%");
    CMessage("You also need to count the number of times %DT%");
    CMessage("Just for the fun of it %GNMLol% %DT%");
    wait(15);
    CMessage("%stopstroking%", 0);
    let answer0 = getInput("Are you ready to start? %DT%");
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
        CMessage("Hurry up then! %DT%");
        wait(30);
    }
    CMessage("Okay.. %DT%");
    CMessage("Begin! %DT%");
    wait(randomInt(130, 360));
    --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3]
    CMessage("How many times did you manage to tilt the water bottle? %DT%");
    setVar("WaterBottle", createInput().getAnswer());
    --UNINTERPRETED LINE:@Variable[WaterBottle]<[60]Hmm I expected more #DT #MeritChangeNMedium
    --UNINTERPRETED LINE:@Variable[WaterBottle]>=[60]#GNMGood #DT #MeritChangePLow
    End();
    return;
    --UNINTERPRETED LINE:(f) \\Bent over
    CMessage("I have a fun little play for us %DT%");
    CMessage("It will require your patience! %DT%");
    CMessage("Now read these instructions carefully! %DT%");
    CMessage("I want you to somehow be tied up in manner.. %DT%");
    CMessage("Where the parachute chain goes up behind you %DT%");
    CMessage("Forcing you to bend over and stand on your toes to prevent yourself from pulling it %DT%");
    CMessage("I recommend somehow securing the chain to a door handle or something of similar height %DT%");
    CMessage("I want you to stand in this position until you hear my bell %DT%");
    CMessage("Now in 60 seconds you\'ll hear my bell meaning I\'ve started the timer %DT%");
    CMessage("The second time you hear my bell is when I want you back with me %DT%");
    --UNINTERPRETED LINE:Begin! #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @Wait(60)
    if(getVar("Personality1", false))
    {
        wait(randomInt(130, 360));
    }
    if(getVar("Personality2", false))
    {
        wait(randomInt(200, 450));
    }
    if(getVar("Personality3", false))
    {
        wait(randomInt(300, 600));
        --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @Wait(20)
    }
    CMessage("%GNMGrin% %DT%");
    CMessage("This was fantastic! %DT%");
    End();
    return;
    --UNINTERPRETED LINE:(g) \\Pulled up
    CMessage("I want you to sit on your office chair and pull the lever so it goes down to it\'s lowest %DT%");
    CMessage("Place the key for the lock in the opposite part of your room or perhaps even further away %GNMGrin% %DT%");
    wait(10);
    CMessage("Next I want you down on the floor on your back %DT%");
    CMessage("Lock the parachute to the office chair %DT%");
    CMessage("It should locked high enough so you have to lift your ass a little from the floor %DT%");
    CMessage("Next you are to pull the lever so the chair goes to it\'s highest setting %DT%");
    CMessage("Then stay in this position until you hear my bell %DT%");
    CMessage("When you hear my bell you may begin and make your way towards the key %DT%");
    CMessage("Not a moment before! %DT%");
    CMessage("This is gonna get tough! Make me proud and stay patient! %DT%");
    CMessage("Begin! %DT%");
    if(getVar("Personality1", false))
    {
        wait(randomInt(130, 360));
    }
    if(getVar("Personality2", false))
    {
        wait(randomInt(200, 450));
    }
    if(getVar("Personality3", false))
    {
        wait(randomInt(300, 600));
        --UNINTERPRETED LINE:Get back here.. #DT @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @Wait(20)
    }
    let answer1 = getInput("Are you with me again? %DT%");
    if (answer1.isLike("yes"))
    {
        CMessage("%GNMGood%  %DT%");
    }
    else
    {
        CMessage("%GNMGood% %DT%");
    }
    CMessage("This was hot! %GNMGrin% %DT%");
    End();
}
function End()
{
    CMessage("Remove the parachute %DT%");
    delVar("Busy");
    CMessage("We\'re done with it.. %DT%");
    wait(25);
    return;
    End2();
}
function End2()
{
    delVar("Busy");
    return;
}