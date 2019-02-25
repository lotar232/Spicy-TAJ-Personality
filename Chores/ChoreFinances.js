 @CheckFlag(FirstFinance) @SetFlag(FirstFinance)
sendVirtualAssistantMessage("Well %SlaveName%
sendVirtualAssistantMessage("This is the first time we're doing your finances
sendVirtualAssistantMessage("Since its the first time I need to open Microsoft Excel spreadsheet
sendVirtualAssistantMessage("If you don't have that you can always use Google sheets which is free..
sendVirtualAssistantMessage("Follow these instructions carefully if this is your first time setting up a spreadsheet
sendVirtualAssistantMessage("If you've tried it before then there might be some things you're already familiar with
sendVirtualAssistantMessage("Look at this picture showImage("Images/Spicy/Finance\Budget.*]
sendVirtualAssistantMessage("This is how I want your budget to look like showImage("Images/Spicy/Finance\Budget.*]
sendVirtualAssistantMessage("So the top row is Year: Months: Space: Total: showImage("Images/Spicy/Finance\Budget.*]
sendVirtualAssistantMessage("The first Column is Year: Average Income: Fixed Expenses: Etc. showImage("Images/Spicy/Finance\Budget.*]
sendVirtualAssistantMessage("Giving you a few minutes.. showImage("Images/Spicy/Finance\Budget.*] sleep(120);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done.. showImage("Images/Spicy/Finance\Budget.*]
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("Now pay attention..
sendVirtualAssistantMessage("In the field B18 I want you to write this: showImage("Images/Spicy/Finance\5.*]
sendVirtualAssistantMessage("Copy this for C18, D18, E18 all the way to O18. showImage("Images/Spicy/Finance\5.*] sleep(30);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done..
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("In the field O2 I want you to write this: showImage("Images/Spicy/Finance\1.*]
sendVirtualAssistantMessage("Copy this for O3, O4, O5 all the way to O17. showImage("Images/Spicy/Finance\1.*] sleep(30);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done..
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("In the field B7 I want you to write this: showImage("Images/Spicy/Finance\2.*]
sendVirtualAssistantMessage("Copy this for C7, D7 all the way to O7 showImage("Images/Spicy/Finance\2.*] sleep(30);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done..
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("In the field B11 I want you to write this: showImage("Images/Spicy/Finance\3.*]
sendVirtualAssistantMessage("Copy this for C11, D11 all the way to O11 showImage("Images/Spicy/Finance\3.*] sleep(30);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done..
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("In the field B15 I want you to write this: showImage("Images/Spicy/Finance\4.*]
sendVirtualAssistantMessage("Copy this for C15, D15 all the way to O15 showImage("Images/Spicy/Finance\4.*] sleep(30);
sendVirtualAssistantMessage("Are you done? - only answer yes if you're done..
[yes]sendVirtualAssistantMessage("Good
@DifferentAnswer sendVirtualAssistantMessage(""yes" if you're ready..
sendVirtualAssistantMessage("Notice the field in the bottom left! showImage("Images/Spicy/Finance\Budget.*]
sendVirtualAssistantMessage("Every time you update your budget I want you to update the date as well..
sendVirtualAssistantMessage("You can do that right now.. sleep(15);
sendVirtualAssistantMessage("Now let me explain how this works..
sendVirtualAssistantMessage("So average income:
sendVirtualAssistantMessage("Average income is ALL the money you earn each month, wether it comes from your job / jobs @SetVar[FinanceOffence]=[0]
sendVirtualAssistantMessage("The source doesn't matter. Made some money you enter it into this field..
sendVirtualAssistantMessage("Fixed expenses are ALL your fixed expenses: Phone bill, electric bill, rent any fixed expenses
sendVirtualAssistantMessage("I know some values might be over several months like the electric bill is in some countries paid every third month
sendVirtualAssistantMessage("If this is the case then divide it by the months over which it's paid  
sendVirtualAssistantMessage("So if your electric bill is paid over 3 months, divide it by 3 and place it in the correct months..
sendVirtualAssistantMessage("Food Budget!
sendVirtualAssistantMessage("Now this is an interesting one
sendVirtualAssistantMessage("I want you to think about how much you averagely spent on food each month..
sendVirtualAssistantMessage("This includes food, drink, sweets. Every coin you spend on something going in your mouth
sendVirtualAssistantMessage("But we're not quite done with your food budget
sendVirtualAssistantMessage("One thing is what you're currently spending on food each month
sendVirtualAssistantMessage("Another thing is what you SHOULD be spending
sendVirtualAssistantMessage("So I want you to think about how much you NEED to spend..
sendVirtualAssistantMessage("Next up is household budget
sendVirtualAssistantMessage("This going towards items used for cleaning, repairs and generally maintaining your #Home
sendVirtualAssistantMessage("Allowance we'll talk about later on.
sendVirtualAssistantMessage("And finally we have extra expenses. 
sendVirtualAssistantMessage("Unforseen expenses that fits into neither mentioned categories
sendVirtualAssistantMessage("Now..
sendVirtualAssistantMessage("Right now I need you to figure out your:
sendVirtualAssistantMessage("Average income, fixed expenses, food budget and household Budget
sendVirtualAssistantMessage("Write 'done' when you're done.. @CustomMode(done, Goto, Done) 
 sleep(99999);
(Done)
sendVirtualAssistantMessage("Excellent @CustomMode(Modetext, Normal)
sendVirtualAssistantMessage("I'm gonna ask you for a few numbers
sendVirtualAssistantMessage("They might take a moment to find
sendVirtualAssistantMessage("Take your time
sendVirtualAssistantMessage("DO NOT INPUT ANY TEXT OR SPACES
sendVirtualAssistantMessage("What is your average income? @InputVar[AverageIncome]
sendVirtualAssistantMessage("What is your fixed expenses? @InputVar[FixedExpenses]
sendVirtualAssistantMessage("What should your food budget be? @InputVar[FoodBudget]
sendVirtualAssistantMessage("How much do you need for your household budget? @InputVar[HouseholdBudget]
sendVirtualAssistantMessage("Next we need to figure out a reasonable allowance
sendVirtualAssistantMessage("Money you can spend however you like sleep(5);
sendVirtualAssistantMessage("Just imagine being a slave
sendVirtualAssistantMessage("No such thing as allowance or spending money without asking permission
sendVirtualAssistantMessage("Total
sendVirtualAssistantMessage("Financial control
sendVirtualAssistantMessage("Some might call that freedom
sendVirtualAssistantMessage("But you probably know better %GNMlol%
sendVirtualAssistantMessage("Oh well..
sendVirtualAssistantMessage("Your allowance
sendVirtualAssistantMessage("I'm gonna leave this up to you 
sendVirtualAssistantMessage("Well not 100% though
sendVirtualAssistantMessage("Now tell me again with a number.. @SetVar[AllowanceTotal]=[0]
sendVirtualAssistantMessage("What would you say a reasonable monthly allowance is if your behaviour within the last month has been good? @InputVar[AllowanceGood]
sendVirtualAssistantMessage("What would you say a reasonable monthly allowance is if your behaviour within the last month has been bad? @InputVar[AllowanceBad]
sendVirtualAssistantMessage("ow imagine that your behaviour neither was good or bad but more neutral, what would the number be then? @InputVar[AllowanceNeutral]
 @SetVar[AllowanceTotal]=[AllowanceNeutral]
sendVirtualAssistantMessage("Give me just a moment to write all of this down... @ChangeVar[AllowanceGood]=[AllowanceGood]/[31]
 @ChangeVar[AllowanceBad]=[AllowanceBad]/[30]
 @ChangeVar[AllowanceNeutral]=[AllowanceNeutral]/[30]
sendVirtualAssistantMessage("Hmm
sendVirtualAssistantMessage("Now based on the values you just gave me
sendVirtualAssistantMessage("It will be me telling you your monthly allowance
@Month(1) sendVirtualAssistantMessage("This January your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[1]
@Month(2) sendVirtualAssistantMessage("This February your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[2]
@Month(3) sendVirtualAssistantMessage("This March your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[3]
@Month(4) sendVirtualAssistantMessage("This April your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[4]
@Month(5) sendVirtualAssistantMessage("This May your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[5]
@Month(6) sendVirtualAssistantMessage("This June your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[6]
@Month(7) sendVirtualAssistantMessage("This July your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[7]
@Month(8) sendVirtualAssistantMessage("This August your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[8]
@Month(9) sendVirtualAssistantMessage("This September your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[9]
@Month(10) sendVirtualAssistantMessage("This October your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[10]
@Month(11) sendVirtualAssistantMessage("This November your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[11]
@Month(12) sendVirtualAssistantMessage("This December your allowance is @ShowVar[AllowanceTotal] @SetVar[CurrentMonth]=[12]
sendVirtualAssistantMessage("Whenever the month changes you can check your monthly allowance simply by asking
sendVirtualAssistantMessage("Now once in a while I'll have you make entries into your budget
sendVirtualAssistantMessage("But you should strive towards always keeping it up to date #GNMEmoteHappy setDate("Finances", setDate());
@End
(FirstFinance)
sendVirtualAssistantMessage("Its time to do your finances %subname%
sendVirtualAssistantMessage("Open up the spreadsheet and your backaccount
sendVirtualAssistantMessage("Do your checks and then return here
sendVirtualAssistantMessage("Tell me 'done' when you're done. @CustomMode(done, Goto, Done2)
 sleep(9999999);
(Done2)
sendVirtualAssistantMessage("%GNMgood%
sendVirtualAssistantMessage("random("Are there any new red numbers I should know about?,Were there any new negativt numbers?,So was there some new red numbers?)
[yes]sendVirtualAssistantMessage("Oh.. @Goto(RedNumbers)
[no]sendVirtualAssistantMessage("%GNMgood%, random("(glad to hear you're not overspending,wonderfull you're not wasting my money,Perfect! You're not wasting my money) @Goto(GreenNumbers)
@DifferentAnswer sendVirtualAssistantMessage("Yes or no?
(GreenNumbers)
sendVirtualAssistantMessage("I'm sure this will please %DomHonorific% %Domname% #MeritChangePMedium
sendVirtualAssistantMessage("It sure pleases me #GNMEmoteHappy
@End
(RedNumbers)
sendVirtualAssistantMessage("Where did the red number appear?
sendVirtualAssistantMessage("Food spendings, household spendings, allowance spendings or extra expenses?
[food]sendVirtualAssistantMessage(" @Goto(Food)
[household]sendVirtualAssistantMessage(" @Goto(Household)
[allowance]sendVirtualAssistantMessage(" @Goto(Allowance)
[extra]sendVirtualAssistantMessage(" @Goto(Extra)
@DifferentAnswer sendVirtualAssistantMessage("food, household, allowance or extra?
(Food)
sendVirtualAssistantMessage("I need you to be honest with me..
sendVirtualAssistantMessage("Was it absolutely necessary that you spent more than you had to?
[yes]sendVirtualAssistantMessage("random("Hmm","Well..","...) @Goto(Forgive)
[no]sendVirtualAssistantMessage("You know how this makes me feel.. @Goto(Bad)
@DifferentAnswer sendVirtualAssistantMessage("Yes or no?
(Household)
sendVirtualAssistantMessage("I need you to be honest with me..
sendVirtualAssistantMessage("Was it absolutely necessary that you spent more than you had to?
[yes]sendVirtualAssistantMessage("random("Hmm","Well..","...) @Goto(Forgive)
[no]sendVirtualAssistantMessage("You know how this makes me feel.. @Goto(Bad)
@DifferentAnswer sendVirtualAssistantMessage("Yes or no?
(Allowance)
sendVirtualAssistantMessage("I need you to be honest with me..
sendVirtualAssistantMessage("Was it absolutely necessary that you spent more than you had to?
[yes]sendVirtualAssistantMessage("random("Hmm","Well..","...) @Goto(Forgive)
[no]sendVirtualAssistantMessage("You know how this makes me feel.. @Goto(Bad)
@DifferentAnswer sendVirtualAssistantMessage("Yes or no?
(Extra)
sendVirtualAssistantMessage("I need you to be honest with me..
sendVirtualAssistantMessage("Was it absolutely necessary that you spent money on those extra expenses?
[yes]sendVirtualAssistantMessage("random("Hmm","Well..","...)
[no]sendVirtualAssistantMessage("You know how this makes me feel.. @Goto(Bad)
@DifferentAnswer sendVirtualAssistantMessage("Yes or no?
sendVirtualAssistantMessage("Okay then..
@End
(Forgive)
sendVirtualAssistantMessage("random("I forgive you then","Well I guess I'm gonna forgive you","I suppose I should forgive you..)
sendVirtualAssistantMessage("random("don't do this too often..","Try to stay within the budgets..)
@End
(Bad)
sendVirtualAssistantMessage("%DomHonorific% %Domname% won't be happy when I tell her... #MeritChangeNLow @SetFlag(FinanceBad) @ChangeVar[FinanceOffence]=[FinanceOffence]=[1]
 @If[FinanceOffence]>=[15]Then(Bad15)
 @If[FinanceOffence]>=[10]Then(Bad10)
 @If[FinanceOffence]>=[5]Then(Bad5)
 @If[FinanceOffence]>=[2]Then(Bad2)
 @If[FinanceOffence]=[1]Then(Bad1) @Goto(Bad1)
(Bad1)
sendVirtualAssistantMessage("But since this is your first offence I'm letting you off easy..
@End
(Bad2)
sendVirtualAssistantMessage("%subname%..
sendVirtualAssistantMessage("This has to be punished @ChangeVar[GNMPPoints]=[GNMPPoints]+[30]
sendVirtualAssistantMessage("I assigned you punishment points
@End
(Bad5)
sendVirtualAssistantMessage("%SlaveName%..
sendVirtualAssistantMessage("I expected more from you.. #MeritChangeNLow
sendVirtualAssistantMessage("I'll have to punish you.. @ChangeVar[GNMPPoints]=[GNMPPoints]+[60]
sendVirtualAssistantMessage("I assigned you punishment points
@End
(Bad10)
sendVirtualAssistantMessage("%SlaveName%..
sendVirtualAssistantMessage("You need to take better care of %Domname%'s money.. #MeritChangeNMedium
sendVirtualAssistantMessage("I'll have to punish you.. @ChangeVar[GNMPPoints]=[GNMPPoints]+[100]
sendVirtualAssistantMessage("I assigned you punishment points
@End
(Bad15)
sendVirtualAssistantMessage("%SlaveName%..
sendVirtualAssistantMessage("You need to take better care of %Domname%'s money.. #MeritChangeNHigh
sendVirtualAssistantMessage("I'll have to punish you.. @ChangeVar[GNMPPoints]=[GNMPPoints]+[150]
sendVirtualAssistantMessage("I assigned you punishment points
@End