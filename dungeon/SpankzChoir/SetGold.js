
if(getvar("extrastrokesOK")==true)
	{run(dungeon/SpankzChoir/ExtraStrokes.js);}
setVar("GoldOwedInTime",0);
 setVar("GoldOwedLate",0);
 setVar("AuctionStrokes2",getVar("AuctionStrokes")); 
 setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
 
decider=getVar("AuctionStrokes2")/200;
switch ( decider){
	
	case 0:
	 @ChangeVar[AuctionStrokes2]=[AuctionStrokes2]/[2]
	  setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
	  setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")); 
	 break;
	case 1:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-199); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+50); 
	 break;
	case 2:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-399); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+100); 

	break;
	case 3:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-599); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+250); 

	break;
	case 4:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-799); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*5); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+450); 


	break;
	default:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-999); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+700); 

	break;

}
	
 
@Flag(SpankChoirCaning)  @ChangeVar[GoldOwedLate]=[GoldOwedLate]+[80]
@NotFlag(SpankChoirSafeword)  @ChangeVar[GoldOwedLate]=[GoldOwedLate]+[50]
@Flag(SpankChoirMouthSoap)  @ChangeVar[GoldOwedLate]=[GoldOwedLate]+[140]
@Flag(SpankChoirFaceSlap)  @ChangeVar[GoldOwedLate]=[GoldOwedLate]+[25]
(AddCorner)
 setVar[CornerGold]=[10]
 @ChangeVar[CornerGold]=[CornerGold]*[CornertimeLimit]
 @ChangeVar[CornerGold]=[CornerGold]*[CornertimeTimeLimit]
 @ChangeVar[CornerGold]=[CornerGold]/[3]
 @ChangeVar[GoldOwedLate]=[GoldOwedLate]+[CornerGold]
(Total)
 @ChangeVar[GoldOwedInTime]=[GoldOwedInTime]+[GoldOwedLate]
 @ChangeVar[GoldOwedInTime]=[GoldOwedInTime]/[10]
@Flag(Personality1)  @ChangeVar[GoldOwedInTime]=[GoldOwedInTime]*[4]
@Flag(Personality2)  @ChangeVar[GoldOwedInTime]=[GoldOwedInTime]*[3]
@Flag(Personality3)  @ChangeVar[GoldOwedInTime]=[GoldOwedInTime]*[2]
@End