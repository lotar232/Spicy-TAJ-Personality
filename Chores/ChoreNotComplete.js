@NullResponse @RapidCodeOn @CheckFlag(ChoreAlt1a)
@NullResponse @CheckFlag(ChoreAlt1b)
@NullResponse @CheckFlag(ChoreAlt1c)
@NullResponse @CheckFlag(ChoreAlt1d)
@NullResponse @CheckFlag(ChoreAlt1e)
@NullResponse @CheckFlag(ChoreAlt1f)
@NullResponse @CheckFlag(ChorePrivHuma)
@NullResponse @CheckFlag(ChorePrivHumb)
@NullResponse @CheckFlag(ChorePrivHumc)
@NullResponse @CheckFlag(ChorePrivHumd)
@NullResponse @CheckFlag(ChorePrivHume)
@NullResponse @CheckFlag(ChorePrivHumf)
@NullResponse @CheckFlag(ChoreAlt2a)
@NullResponse @CheckFlag(ChoreAlt2b)
@NullResponse @CheckFlag(ChoreAlt2c)
@NullResponse @CheckFlag(ChoreAlt2d)
@NullResponse @CheckFlag(ChoreAlt2f)
@NullResponse @CheckFlag(ChoreAlt2g)
@NullResponse @CheckFlag(ChoreAlt2h)
@NullResponse @CheckFlag(ChoreAlt2i) 
@NullResponse @CheckFlag(ChoreWritingTaskEasy)
@NullResponse @CheckFlag(ChoreWritingTaskMedium)
@NullResponse @CheckFlag(ChoreWritingTaskHard)
@NullResponse @CheckFlag(ChoreWritingTaskCrazy)
@NullResponse @CheckFlag(ChoreFuna)
@NullResponse @CheckFlag(ChoreFunb)
@NullResponse @CheckFlag(ChoreFunc)
@NullResponse @CheckFlag(ChoreFune)
@NullResponse @CheckFlag(ChoreFunf)
@NullResponse @CheckFlag(ChoreFunh) @Goto(NotFound)
(ChoreAlt1a)
(ChoreAlt1b)
(ChoreAlt1c)
(ChoreAlt1d)
(ChoreAlt1e)
(ChoreAlt1f)
@NullResponse @CallReturn(CR\BackgroundMode\Chores\SecondaryChores\ChoreAlt1.txt)
@End
(ChoreAlt2a)
(ChoreAlt2b)
(ChoreAlt2c)
(ChoreAlt2d)
(ChoreAlt2f)
(ChoreAlt2g)
(ChoreAlt2h)
(ChoreAlt2i) 
@NullResponse @CallReturn(CR\BackgroundMode\Chores\SecondaryChores\ChoreAlt2.txt)
@End
(ChoreFuna)
(ChoreFunb)
(ChoreFunc)
(ChoreFune)
(ChoreFunf)
(ChoreFunh)
@NullResponse @CallReturn(CR\BackgroundMode\Chores\SecondaryChores\ChoreFun.txt)
@End
(ChorePrivHuma)
(ChorePrivHumb)
(ChorePrivHumc)
(ChorePrivHumd)
(ChorePrivHume)
(ChorePrivHumf)
@NullResponse @CallReturn(CR\BackgroundMode\Chores\SecondaryChores\ChorePrivateHum.txt)
@End
(ChoreWritingTaskEasy)
(ChoreWritingTaskMedium)
(ChoreWritingTaskHard)
(ChoreWritingTaskCrazy)
@NullResponse @CallReturn(CR\BackgroundMode\Chores\SecondaryChores\ChoreWritingTasks.txt)
@End
(NotFound)
sendVirtualAssistantMessage("There seem to have occured a bug.
sendVirtualAssistantMessage("Please Report ChoreBug Nr. 133 on Milovana Spicy forum thread.
sendVirtualAssistantMessage("In your bug report please include the chat from your session @DeleteFlag(ChoreActive)
sendVirtualAssistantMessage("Fixing the bug temporarily.. LOADING.. @Wait(5)
sendVirtualAssistantMessage("Returning you to slave hub. 
@NullResponse @Interrupt(GNMBackgroundBase)