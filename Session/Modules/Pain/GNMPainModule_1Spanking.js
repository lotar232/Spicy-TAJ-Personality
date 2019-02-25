main();
function main()
{
    CMessage(random("I want to spank you %SlaveName% ", "%SlaveName% I\'m going to spank you! ") + "%DT%");
    CMessage("%GNMGrin% %DT%");
    Again();
}
function Again()
{
    CMessage(random("I feel like you deserve it! ", "Nothing would make me happier! ", "Simple because I want too.. ", "I think it would make me feel good! ") + "%DT%");
    setTempVar("Busy", true);
    setVar("Strikes", 0);
    --UNINTERPRETED LINE:@Flag(PainUpdate1) @Variable[SubPain]>=[10] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(300,800)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Flag(PainUpdate1) @Variable[SubPain]>=[9] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(250,650)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Flag(PainUpdate1) @Variable[SubPain]>=[8] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(225,500)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[7] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(200,400)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[6] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(175,350)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[5] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(150,300)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[4] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(125,250)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[3] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(100,200)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[2] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(75,150)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    --UNINTERPRETED LINE:@Variable[SubPain]>=[1] @NullResponse @ChangeVar[Strikes]=[Strikes]+[#Random(50,100)] @SetVar[SpankingCount]=[0] @Goto(Continue)
    Continue();
}
function Continue()
{
    if(getVar("PainUpdate1", false))
    {
        if (randomInteger(1, 100) <= 80)
        {
            a();
            return;
        }
        b();
        return;
    }
    if (randomInteger(1, 100) <= 80)
    {
        a();
        return;
    }
    a();
}
function a()
{
    CMessage("%Fetch% %ChooseSpankingImplement% %DT%");
    wait(10);
    if (randomInteger(1, 100) <= 10)
    {
        c();
        return;
    }
    Count();
    return;
    b();
}
function b()
{
    setVar("Strikes", getVar("Strikes", 0) / 3);
    CMessage("Go and find 2 large rubber bands %DT%");
    CMessage("Place 1 around each thigh %DT%");
    --UNINTERPRETED LINE:@Variable[SubPain]>=[7] Proceed to move it up around each buttock.. #DT @Wait(10) @Chance10(c) @Goto(Count2)
    CMessage("Proceed to move it up around each buttock.. %DT%");
    wait(10);
    Count2();
    return;
    c();
}
function c()
{
    CMessage("Now I\'m gonna show you a spanking video %DT%");
    CMessage("Whenever you see the sub getting struck %DT%");
    CMessage("So will you, alternating cheek to cheek %DT%");
    CMessage("Enjoy! %DT%");
    --UNINTERPRETED LINE:@NullResponse @PlayVideo[\GNM_Videos\BackgroundMode\Punishment\Spanking\*.mp4]
    End();
    return;
    Count();
}
function Count()
{
    if (getVar("Strikes", 0) <= 0)
    {
        Test();
        return;
    }
    --UNINTERPRETED LINE:@Variable[Strikes]>[40] @NullResponse @Goto(l1,l2,l3,l4,l5,h1,h2,h3,h4,h5)
    --UNINTERPRETED LINE:@Variable[Strikes]>[30] @NullResponse @Goto(l1,l2,l3,l4,h1,h2,h3,h4)
    --UNINTERPRETED LINE:@Variable[Strikes]>[20] @NullResponse @Goto(l1,l2,l3,h1,h2,h3)
    --UNINTERPRETED LINE:@Variable[Strikes]>[10] @NullResponse @Goto(l1,l2,h1,h2)
    l1();
}
function l1()
{
    CMessage("%SpankPlacingLeft10% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 10);
    Count();
    return;
    l2();
}
function l2()
{
    CMessage("%SpankPlacingLeft20% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 20);
    Count();
    return;
    l3();
}
function l3()
{
    CMessage("%SpankPlacingLeft30% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 30);
    Count();
    return;
    l4();
}
function l4()
{
    CMessage("%SpankPlacingLeft40% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 40);
    Count();
    return;
    l5();
}
function l5()
{
    CMessage("%SpankPlacingLeft50% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 50);
    Count();
    return;
    h1();
}
function h1()
{
    CMessage("%SpankPlacingRight10% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 10);
    Count();
    return;
    h2();
}
function h2()
{
    CMessage("%SpankPlacingRight20% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 20);
    Count();
    return;
    h3();
}
function h3()
{
    CMessage("%SpankPlacingRight30% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 30);
    Count();
    return;
    h4();
}
function h4()
{
    CMessage("%SpankPlacingRight40% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 40);
    Count();
    return;
    h5();
}
function h5()
{
    CMessage("%SpankPlacingRight50% %DT%");
    setVar("Strikes", getVar("Strikes", 0) - 50);
    Count();
    return;
    Count2();
}
function Count2()
{
    if (getVar("Strikes", 0) <= 0)
    {
        Test();
        return;
    }
    --UNINTERPRETED LINE:@Variable[Strikes]>[20] @NullResponse @Goto(C1,C2)
    --UNINTERPRETED LINE:@Variable[Strikes]>[10] @NullResponse @Goto(C1)
    C1();
}
function C1()
{
    --UNINTERPRETED LINE:@RT(Right!,Left!) #DT @PlayAudio[\GNMSounds\Punishment\SpankingTask\10Strikes\Spank10.mp3] @Wait(18) 
    setVar("Strikes", getVar("Strikes", 0) - 18);
    setVar("SpankingCount", getVar("SpankingCount", 0) + 18);
    Count2();
    return;
    C2();
}
function C2()
{
    --UNINTERPRETED LINE:@RT(Right!,Left!) #DT @PlayAudio[\GNMSounds\Punishment\SpankingTask\20Strikes\Spank20.mp3] @Wait(18)
    setVar("Strikes", getVar("Strikes", 0) - 20);
    setVar("SpankingCount", getVar("SpankingCount", 0) + 20);
    Count2();
    return;
    Test();
}
function Test()
{
    CMessage("Now %SlaveName% %DT%");
    CMessage("How many times were you just spanked? %DT%");
    setVar("Guess", createInput().getAnswer());
    --UNINTERPRETED LINE:@Variable[Guess]<=[0] Your answer doesn't make any sense.. #DT @Goto(Test)
    setVar("Guess", getVar("SpankingCount", 0));
    CMessage("Correct! %DT% %MeritChangePMedium%");
    End();
    return;
    --UNINTERPRETED LINE:@Variable[Guess]<>[SpankingCount] Wrong! #DT #MeritChangeNMedium
    --UNINTERPRETED LINE:@Variable[Angry]>[23] I guess we have to repeat it! #GNMLol #DT @Goto(Again)
    CMessage("I feel like you deserve some extra spanking %DT%");
    CMessage("But maybe another day.. %DT%");
    End();
}
function End()
{
    CMessage(random("This felt good!", "God I love spanking you!", "%GNMGrin% I had fun!"));
    delVar("Busy");
    CMessage("%DT%");
    return;
}