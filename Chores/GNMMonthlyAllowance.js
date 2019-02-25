sendVirtualAssistantMessage(" Checking if the month has changed..
@Month(1)  @If[CurrentMonth]=[1]Then(NoChange) @Goto(MonthChange)
@Month(2)  @If[CurrentMonth]=[2]Then(NoChange) @Goto(MonthChange)
@Month(3)  @If[CurrentMonth]=[3]Then(NoChange) @Goto(MonthChange)
@Month(4)  @If[CurrentMonth]=[4]Then(NoChange) @Goto(MonthChange)
@Month(5)  @If[CurrentMonth]=[5]Then(NoChange) @Goto(MonthChange)
@Month(6)  @If[CurrentMonth]=[6]Then(NoChange) @Goto(MonthChange)
@Month(7)  @If[CurrentMonth]=[7]Then(NoChange) @Goto(MonthChange)
@Month(8)  @If[CurrentMonth]=[8]Then(NoChange) @Goto(MonthChange)
@Month(9)  @If[CurrentMonth]=[9]Then(NoChange) @Goto(MonthChange)
@Month(10)  @If[CurrentMonth]=[10]Then(NoChange) @Goto(MonthChange)
@Month(11)  @If[CurrentMonth]=[11]Then(NoChange) @Goto(MonthChange)
@Month(12)  @If[CurrentMonth]=[12]Then(NoChange) @Goto(MonthChange)
(NoChange)
@Month(1) sendVirtualAssistantMessage(" We're still in January.. 
@Month(2) sendVirtualAssistantMessage(" We're still in February.. 
@Month(3) sendVirtualAssistantMessage(" We're still in March.. 
@Month(4) sendVirtualAssistantMessage(" We're still in April.. 
@Month(5) sendVirtualAssistantMessage(" We're still in May.. 
@Month(6) sendVirtualAssistantMessage(" We're still in June.. 
@Month(7) sendVirtualAssistantMessage(" We're still in July.. 
@Month(8) sendVirtualAssistantMessage(" We're still in August.. 
@Month(9) sendVirtualAssistantMessage(" We're still in September.. 
@Month(10) sendVirtualAssistantMessage(" We're still in October.. 
@Month(11) sendVirtualAssistantMessage(" We're still in November.. 
@Month(12) sendVirtualAssistantMessage(" We're still in December.. 
sendVirtualAssistantMessage(" Wait until the month changes...
@End
(MonthChange)
@Month(1) sendVirtualAssistantMessage(" Well it seems we're in January"); @SetVar[CurrentMonth]=[1]
@Month(2) sendVirtualAssistantMessage(" Well it seems we're in February.."); @SetVar[CurrentMonth]=[2]
@Month(3) sendVirtualAssistantMessage(" Well it seems we're in March.."); @SetVar[CurrentMonth]=[3]
@Month(4) sendVirtualAssistantMessage(" Well it seems we're in April.."); @SetVar[CurrentMonth]=[4]
@Month(5) sendVirtualAssistantMessage(" Well it seems we're in May.. ");@SetVar[CurrentMonth]=[5]
@Month(6) sendVirtualAssistantMessage(" Well it seems we're in June.."); @SetVar[CurrentMonth]=[6]
@Month(7) sendVirtualAssistantMessage(" Well it seems we're in July.."); @SetVar[CurrentMonth]=[7]
@Month(8) sendVirtualAssistantMessage(" Well it seems we're in August.. "); @SetVar[CurrentMonth]=[8]
@Month(9) sendVirtualAssistantMessage(" Well it seems we're in September.."); @SetVar[CurrentMonth]=[9]
@Month(10) sendVirtualAssistantMessage(" Well it seems we're in October.."); @SetVar[CurrentMonth]=[10]
@Month(11) sendVirtualAssistantMessage(" Well it seems we're in November.."); @SetVar[CurrentMonth]=[11]
@Month(12) sendVirtualAssistantMessage(" Well it seems we're in December.."); @SetVar[CurrentMonth]=[12]
sendVirtualAssistantMessage(" Lets see what your allowance should be this month.."); @SetVar[TotalAllowance]=[0] @RapidCodeOn
 @SetVar[AddAllowanceGood]=[0]
 @ChangeVar[AddAllowanceGood]=[AddAllowanceGood]+[AllowanceGood]
 @ChangeVar[AddAllowanceGood]=[AddAllowanceGood]*[GoodDays]
 @SetVar[AddAllowanceBad]=[0]
 @ChangeVar[AddAllowanceBad]=[AddAllowanceBad]+[AllowanceBad]
 @ChangeVar[AddAllowanceBad]=[AddAllowanceBad]*[BadDays]
 @ChangeVar[TotalAllowance]=[TotalAllowance]+[AddAllowanceBad]
 @ChangeVar[TotalAllowance]=[TotalAllowance]+[AddAllowanceGood]
@Month(1) sendVirtualAssistantMessage(" So for January your allowance will be @ShowVar[TotalAllowance]
@Month(2) sendVirtualAssistantMessage(" So for February your allowance will be @ShowVar[TotalAllowance]
@Month(3) sendVirtualAssistantMessage(" So for March your allowance will be @ShowVar[TotalAllowance]
@Month(4) sendVirtualAssistantMessage(" So for April your allowance will be @ShowVar[TotalAllowance]
@Month(5) sendVirtualAssistantMessage(" So for May your allowance will be @ShowVar[TotalAllowance]
@Month(6) sendVirtualAssistantMessage(" So for June your allowance will be @ShowVar[TotalAllowance]
@Month(7) sendVirtualAssistantMessage(" So for July your allowance will be @ShowVar[TotalAllowance]
@Month(8) sendVirtualAssistantMessage(" So for August your allowance will be @ShowVar[TotalAllowance]
@Month(9) sendVirtualAssistantMessage(" So for September your allowance will be @ShowVar[TotalAllowance]
@Month(10) sendVirtualAssistantMessage(" So for October your allowance will be @ShowVar[TotalAllowance]
@Month(11) sendVirtualAssistantMessage(" So for November your allowance will be @ShowVar[TotalAllowance]
@Month(12) sendVirtualAssistantMessage(" So for December your allowance will be @ShowVar[TotalAllowance]
sendVirtualAssistantMessage(" Write it down in your budget..
@End