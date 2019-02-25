main();
function main()
{
    if(!getVar("ElectroPlay", false))
    {
        run("CR" + java.io.File.separator + "Modules" + java.io.File.separator + "Alternative" + java.io.File.separator + "*.js");
    }
    if(!getVar("ElectroPlay", false))
    {
        End2();
        return;
    }
    if(getVar("PainModule4First", false))
    {
        PainModule4First();
        return;
    }
    setVar("PainModule4First", true);
    run("CR" + java.io.File.separator + "ElectroIntro.js");
    PainModule4First();
}
function PainModule4First()
{
    CMessage("%SlaveName% %DT%");
    CMessage("Lets have some fun %GNMGrin% %DT%");
    --UNINTERPRETED LINE:@Flag(VPleased) @Variable[Happy]>[Angry] @NullResponse @TempFlag(NSession)
    --UNINTERPRETED LINE:@Flag(VPleased) @Variable[Happy]<=[Angry] @NullResponse @TempFlag(PSession)
    --UNINTERPRETED LINE:@Flag(Pleased) @Variable[Happy]>[Angry] @NullResponse @TempFlag(NSession)
    --UNINTERPRETED LINE:@Flag(Pleased) @Variable[Happy]<=[Angry] @NullResponse @TempFlag(PSession)
    --UNINTERPRETED LINE:@Flag(Neutral) @Variable[Happy]>[Angry] @NullResponse @TempFlag(NSession)
    --UNINTERPRETED LINE:@Flag(Neutral) @Variable[Happy]<=[Angry] @NullResponse @TempFlag(PSession)
    if(getVar("Annoyed", false))
    {
        setTempVar("PSession", true);
    }
    if(getVar("VAnnoyed", false))
    {
        setTempVar("PSession", true);
    }
    if(getVar("ElectroPads", false) && getVar("ElectroPlug", false) && getVar("ElectroPenisStraps", false))
    {
        switch(random("a", "b", "c", "d"))
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
        }
    }
    if(getVar("ElectroPads", false) && getVar("ElectroPenisStraps", false))
    {
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
    }
    if(getVar("ElectroPads", false) && getVar("ElectroPlug", false))
    {
        switch(random("a", "b", "c", "d"))
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
        }
    }
    if(getVar("ElectroPenisStraps", false) && getVar("ElectroPlug", false))
    {
        switch(random("a", "b", "c", "d"))
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
        }
    }
    if(getVar("ElectroPads", false))
    {
        switch(random("a", "b", "d"))
        {
            case "a":
            a();
            return;
            break;
            case "b":
            b();
            return;
            break;
            case "d":
            d();
            return;
            break;
        }
    }
    if(getVar("ElectroPenisStraps", false))
    {
        switch(random("a", "b", "d"))
        {
            case "a":
            a();
            return;
            break;
            case "b":
            b();
            return;
            break;
            case "d":
            d();
            return;
            break;
        }
    }
    if(getVar("ElectroPlug", false))
    {
        d();
        return;
        --UNINTERPRETED LINE:(a) \\Ball
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 1);
        aN1();
        return;
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("aN1", "aN2"))
        {
            case "aN1":
            aN1();
            return;
            break;
            case "aN2":
            aN2();
            return;
            break;
        }
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("aN1", "aN2", "aN3"))
        {
            case "aN1":
            aN1();
            return;
            break;
            case "aN2":
            aN2();
            return;
            break;
            case "aN3":
            aN3();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 1);
        aP1();
        return;
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("aP1", "aP2"))
        {
            case "aP1":
            aP1();
            return;
            break;
            case "aP2":
            aP2();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("aP1", "aP2", "aP3"))
        {
            case "aP1":
            aP1();
            return;
            break;
            case "aP2":
            aP2();
            return;
            break;
            case "aP3":
            aP3();
            return;
            break;
        }
    }
    aN1();
}
function aN1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Pleasure", false))
    {
        setTempVar("ENice", true);
        aMode1();
        return;
    }
    setTempVar("EPain", true);
    aMode1();
    return;
    aN2();
}
function aN2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        aMode2();
        return;
    }
    setTempVar("EPain", true);
    aMode2();
    return;
    aN3();
}
function aN3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        aMode3();
        return;
    }
    setTempVar("EPain", true);
    aMode3();
    return;
    aP1();
}
function aP1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Punishment", false))
    {
        setTempVar("EPain", true);
        aMode1();
        return;
    }
    setTempVar("ENice", true);
    aMode1();
    return;
    aP2();
}
function aP2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        aMode2();
        return;
    }
    setTempVar("ENice", true);
    aMode2();
    return;
    aP3();
}
function aP3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        aMode3();
        return;
    }
    setTempVar("ENice", true);
    aMode3();
    return;
    --UNINTERPRETED LINE:(b) \\Penis
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 1);
        bN1();
        return;
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("bN1", "bN2"))
        {
            case "bN1":
            bN1();
            return;
            break;
            case "bN2":
            bN2();
            return;
            break;
        }
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("bN1", "bN2", "bN3"))
        {
            case "bN1":
            bN1();
            return;
            break;
            case "bN2":
            bN2();
            return;
            break;
            case "bN3":
            bN3();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 1);
        bP1();
        return;
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("bP1", "bP2"))
        {
            case "bP1":
            bP1();
            return;
            break;
            case "bP2":
            bP2();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("bP1", "bP2", "bP3"))
        {
            case "bP1":
            bP1();
            return;
            break;
            case "bP2":
            bP2();
            return;
            break;
            case "bP3":
            bP3();
            return;
            break;
        }
    }
    bN1();
}
function bN1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Pleasure", false))
    {
        setTempVar("ENice", true);
        bMode1();
        return;
    }
    setTempVar("EPain", true);
    bMode1();
    return;
    bN2();
}
function bN2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        bMode2();
        return;
    }
    setTempVar("EPain", true);
    bMode2();
    return;
    bN3();
}
function bN3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        bMode3();
        return;
    }
    setTempVar("EPain", true);
    bMode3();
    return;
    bP1();
}
function bP1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Punishment", false))
    {
        setTempVar("EPain", true);
        bMode1();
        return;
    }
    setTempVar("ENice", true);
    bMode1();
    return;
    bP2();
}
function bP2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        bMode2();
        return;
    }
    setTempVar("ENice", true);
    bMode2();
    return;
    bP3();
}
function bP3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        bMode3();
        return;
    }
    setTempVar("ENice", true);
    bMode3();
    return;
    --UNINTERPRETED LINE:(c) \\Mix
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 1);
        cN1();
        return;
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("cN1", "cN2"))
        {
            case "cN1":
            cN1();
            return;
            break;
            case "cN2":
            cN2();
            return;
            break;
        }
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("cN1", "cN2", "cN3"))
        {
            case "cN1":
            cN1();
            return;
            break;
            case "cN2":
            cN2();
            return;
            break;
            case "cN3":
            cN3();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 1);
        cP1();
        return;
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("cP1", "cP2"))
        {
            case "cP1":
            cP1();
            return;
            break;
            case "cP2":
            cP2();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("cP1", "cP2", "cP3"))
        {
            case "cP1":
            cP1();
            return;
            break;
            case "cP2":
            cP2();
            return;
            break;
            case "cP3":
            cP3();
            return;
            break;
        }
    }
    cN1();
}
function cN1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Pleasure", false))
    {
        setTempVar("ENice", true);
        cMode1();
        return;
    }
    setTempVar("EPain", true);
    cMode1();
    return;
    cN2();
}
function cN2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        cMode2();
        return;
    }
    setTempVar("EPain", true);
    cMode2();
    return;
    cN3();
}
function cN3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        cMode3();
        return;
    }
    setTempVar("EPain", true);
    cMode3();
    return;
    cP1();
}
function cP1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Punishment", false))
    {
        setTempVar("EPain", true);
        cMode1();
        return;
    }
    setTempVar("ENice", true);
    cMode1();
    return;
    cP2();
}
function cP2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        cMode2();
        return;
    }
    setTempVar("ENice", true);
    cMode2();
    return;
    cP3();
}
function cP3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        cMode3();
        return;
    }
    setTempVar("ENice", true);
    cMode3();
    return;
    --UNINTERPRETED LINE:(d) \\plug
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 1);
        dN1();
        return;
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("dN1", "dN2"))
        {
            case "dN1":
            dN1();
            return;
            break;
            case "dN2":
            dN2();
            return;
            break;
        }
    }
    if(getVar("NSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("dN1", "dN2", "dN3"))
        {
            case "dN1":
            dN1();
            return;
            break;
            case "dN2":
            dN2();
            return;
            break;
            case "dN3":
            dN3();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 1);
        dP1();
        return;
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 2);
        switch(random("dP1", "dP2"))
        {
            case "dP1":
            dP1();
            return;
            break;
            case "dP2":
            dP2();
            return;
            break;
        }
    }
    if(getVar("PSession", false))
    {
        setVar("ElectroModes", 3);
        switch(random("dP1", "dP2", "dP3"))
        {
            case "dP1":
            dP1();
            return;
            break;
            case "dP2":
            dP2();
            return;
            break;
            case "dP3":
            dP3();
            return;
            break;
        }
    }
    dN1();
}
function dN1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Pleasure", false))
    {
        setTempVar("ENice", true);
        dMode1();
        return;
    }
    setTempVar("EPain", true);
    dMode1();
    return;
    dN2();
}
function dN2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        dMode2();
        return;
    }
    setTempVar("EPain", true);
    dMode2();
    return;
    dN3();
}
function dN3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Pleasure", false))
    {
        setTempVar("ENice", true);
        dMode3();
        return;
    }
    setTempVar("EPain", true);
    dMode3();
    return;
    dP1();
}
function dP1()
{
    if(getVar("Mode1Both", false) || getVar("Mode1Punishment", false))
    {
        setTempVar("EPain", true);
        dMode1();
        return;
    }
    setTempVar("ENice", true);
    dMode1();
    return;
    dP2();
}
function dP2()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        dMode2();
        return;
    }
    setTempVar("ENice", true);
    dMode2();
    return;
    dP3();
}
function dP3()
{
    if(getVar("Mode2Both", false) || getVar("Mode2Punishment", false))
    {
        setTempVar("EPain", true);
        dMode3();
        return;
    }
    setTempVar("ENice", true);
    dMode3();
    return;
    --UNINTERPRETED LINE:(aMode1) \\Ball
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPads", false))
    {
        CMessage("And two pads %DT%");
        wait(20);
        Continue1();
        return;
    }
    CMessage("And your penis straps %DT%");
    wait(20);
    Continue1();
}
function Continue1()
{
    CMessage(random("Next I need you to apply one to each ball ", "Apply them to your balls ", "Put them on your %GNMBalls% ") + "%DT%");
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 1 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    aMode2();
}
function aMode2()
{
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPads", false))
    {
        CMessage("And two pads %DT%");
        wait(20);
        Continue2();
        return;
    }
    CMessage("And your penis straps %DT%");
    wait(20);
    Continue2();
}
function Continue2()
{
    CMessage(random("Next I need you to apply one to each ball ", "Apply them to your balls ", "Put them on your %GNMBalls% ") + "%DT%");
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 2 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    aMode3();
}
function aMode3()
{
    CMessage("%Fetch% stimulator %DT%");
    CMessage("And two pads %DT%");
    wait(20);
    if(getVar("ElectroPads", false))
    {
        wait(20);
        Continue3();
        return;
    }
    CMessage("And your penis straps %DT%");
    wait(20);
    Continue3();
}
function Continue3()
{
    CMessage(random("Next I need you to apply one to each ball ", "Apply them to your balls ", "Put them on your %GNMBalls% ") + "%DT%");
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 3 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    --UNINTERPRETED LINE:(bMode1) \\penis
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue4();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue4();
}
function Continue4()
{
    CMessage(random("Next I need you to apply them ", "Now you\'re going to apply them to your penis ") + "%DT%");
    CMessage(random("One at the base ", "One at the base of your penis ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 1 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    bMode2();
}
function bMode2()
{
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue5();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue5();
}
function Continue5()
{
    CMessage(random("Next I need you to apply them ", "Now you\'re going to apply them to your penis ") + "%DT%");
    CMessage(random("One at the base ", "One at the base of your penis ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 2 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    bMode3();
}
function bMode3()
{
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue6();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue6();
}
function Continue6()
{
    CMessage(random("Next I need you to apply them ", "Now you\'re going to apply them to your penis ") + "%DT%");
    CMessage(random("One at the base ", "One at the base of your penis ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 3 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    --UNINTERPRETED LINE:(cMode1) \\Mix
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue7();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue7();
}
function Continue7()
{
    CMessage(random("One should be attached to your balls ", "On of them should be applied to your balls ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 1 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    cMode2();
}
function cMode2()
{
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue8();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue8();
}
function Continue8()
{
    CMessage(random("One should be attached to your balls ", "On of them should be applied to your balls ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 2 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    cMode3();
}
function cMode3()
{
    CMessage("%Fetch% stimulator %DT%");
    if(getVar("ElectroPenisStraps", false))
    {
        CMessage("And the penis straps %DT%");
        wait(20);
        Continue9();
        return;
    }
    CMessage("And two pads %DT%");
    wait(20);
    Continue9();
}
function Continue9()
{
    CMessage(random("One should be attached to your balls ", "On of them should be applied to your balls ") + "%DT%");
    --UNINTERPRETED LINE:@RT(The other one should be placed <i>on</i> your cock head,The other one placed right below your cockhead) #DT
    CMessage(random("We\'re going to have some fun with them ", "This should prove to be fun ") + "%DT%");
    wait(15);
    CMessage("Turn your stimulator on and go with mode 3 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    --UNINTERPRETED LINE:(dMode1) \\plug
    CMessage("%Fetch% stimulator %DT%");
    CMessage("And the electro-plug %DT%");
    wait(20);
    CMessage(random("Insert the plug ", "Insert that big plug into your tight ass ") + "take your time.. %DT%");
    wait(25);
    let answer0 = getInput("%GNMReady% %DT%");
    if (answer0.isLike("yes"))
    {
        CMessage("%GNMGood% %DT%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well hurry then! %DT%");
        wait(30);
    }
    else
    {
        CMessage("%GNMGood% %DT%");
    }
    CMessage("Turn your stimulator on and go with mode 1 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    dMode2();
}
function dMode2()
{
    CMessage("%Fetch% stimulator %DT%");
    CMessage("And the electro-plug %DT%");
    wait(20);
    CMessage(random("Insert the plug ", "Insert that big plug into your tight ass ") + "take your time.. %DT%");
    wait(25);
    let answer0 = getInput("%GNMReady% %DT%");
    if (answer0.isLike("yes"))
    {
        CMessage("%GNMGood% %DT%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well hurry then! %DT%");
        wait(30);
    }
    else
    {
        CMessage("%GNMGood% %DT%");
    }
    CMessage("Turn your stimulator on and go with mode 2 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    dMode3();
}
function dMode3()
{
    CMessage("%Fetch% stimulator %DT%");
    CMessage("And the electro-plug %DT%");
    wait(20);
    CMessage(random("Insert the plug ", "Insert that big plug into your tight ass ") + "take your time.. %DT%");
    wait(25);
    let answer0 = getInput("%GNMReady% %DT%");
    if (answer0.isLike("yes"))
    {
        CMessage("%GNMGood% %DT%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well hurry then! %DT%");
        wait(30);
    }
    else
    {
        CMessage("%GNMGood% %DT%");
    }
    CMessage("Turn your stimulator on and go with mode 3 %DT%");
    if(getVar("ENice", false))
    {
        CMessage("Turn the level up but stay below level");
        --Command:ShowVar(ElectroPain)
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    if(getVar("EPain", false))
    {
        CMessage("Turn the level up and set it to a level higher than level");
        --Command:ShowVar(ElectroPain)
        CMessage("%GNMEmoteHappy% %DT%");
    }
    if(getVar("PainUpdate2", false))
    {
        switch(random("Slideshow", "Video"))
        {
            case "Slideshow":
            Slideshow();
            return;
            break;
            case "Video":
            Video();
            return;
            break;
        }
    }
    Slideshow();
    return;
    Slideshow();
}
function Slideshow()
{
    CMessage("Now I\'m putting on a slideshow for you %DT%");
    setVar("Slideshow", 0);
    CMessage("Enjoy! %DT%");
    Image();
}
function Image()
{
    --Command:ShowImage
    setVar("Slideshow", getVar("Slideshow", 0) + 1);
    if (getVar("Slideshow", 0) > 30)
    {
        End();
        return;
    }
    wait(10);
    Image();
    return;
    Video();
}
function Video()
{
    CMessage("I have a video you can enjoy while being electrified %DT%");
    --UNINTERPRETED LINE:@NullResponse @PlayVideo[\GNM_Videos\BackgroundMode\Chores\Choreb8\C.mp4]
    End();
    return;
    End();
}
function End()
{
    CMessage("You can remove the gear now %GNMGrin% %DT%");
    delVar("ENice");
    delVar("EPain");
    delVar("NSession");
    delVar("PSession");
    return;
    End2();
}
function End2()
{
    return;
}