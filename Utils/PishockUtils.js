/*
Made an API:
To use the API you need to ask me to enable it first for you.
This is the format:
pss.pishock.com/Client/APIOperate

{
"Username":"YourUsername",
"Code":"ShareCodeOfShocker",
"Intensity":100,
"Duration":1,
"ApiKey":"YourApiKey",
"Op":1,
}

So basically, you need this:
code = Share Code
duration = Duration of command ( max of 15 or the set max of the share )
intensity = intensity wanted, max of 100 or the share settings
op = 0 (shock), 1 (vibration), 2 (beeping)
apikey = Your api key, once I've enabled it you can generate it in your account section on the website, it's hashed so you get to see it once, make sure you record it.
username = Your username, you can see it in your account section too.

It will follow all the share rules, it's using the same logic. If a share isn't used, it will claim it on first use.

It needs to be a POST

Here are the possible errors you might encounter:
You're not sending 0,1 or 2:
"Unknown Op, use 0 for shock, 1 for vibrate and 2 for beep"
Somebody nabbed the code before you used it:
"This share code has already been used by somebody else."
Self explanatory:
"This code doesn't exist."
Your username or apikey isn't right or you haven't been activated yet:
"Not Authorized."
They paused the shocker or the share:
"Shocker is Paused, unable to send command."
Their PiShock isn't currently connected to the server:
"Device currently not connected."
Self explanatory:
"Intensity must be between 0 and {maxint}"
"Duration must be between 1 and {maxdur}"

And the success result:
"Operation Succeeded."

Realize that this will not tell you if the command succeeded past it being sent to the Client. There's no way for the PiShock to know if the shocker has completed the command. It's also using websockets, so very poor connection can yield spotty situations but so far it's been relatively reliable.

*/

function setupPishock(){
	setVar("shocks_recieved", 0);
	if(isVar("hasPishock") && getVar("hasPishock")==true){
		sendVirtualAssistantMessage("hi Slave..... It sounds like you want to register a new pishock",2);
		sendVirtualAssistantMessage("But it seems like you already have one that you've already registered...");
		sendVirtualAssistantMessage("are you sure you want to register a new one?? (and loose your old information?)");
		  if (createYesOrNoQuestion()) {
			  sendVirtualAssistantMessage("Fucking things up and starting again... sounds about right for a %Slave% like you");
			   sendVirtualAssistantMessage("erasing your old information");
			   sendVirtualAssistantMessage("I can't wait to try out this new shocker!");
			   
			  
		  }
		  else {sendVirtualAssistantMessage("Good, lets keep the old shocker configuration as it is");
			  return;
		  }
		sendVirtualAssistantMessage("th");
		}
	else{
		sendVirtualAssistantMessage("hi Slave..... I hear you got a new toy",3);
	}
	//todo check if a pishock is already registered and confirm overwrite
	setVar("hasPishock", true);g
	sendVirtualAssistantMessage("smile",2);
	sendVirtualAssistantMessage("But we need to do a few things to get it set it up first");	
	sendVirtualAssistantMessage("First you should charge up the shockers you have and plug in the pishock device");	
	sendVirtualAssistantMessage("Second, I want you to go ahead and follow all the set up instructions on the pishock website");
	sendVirtualAssistantMessage("Third you should test to make sure each of the shockers work via the website");	
	sendVirtualAssistantMessage("Next we need to collect some information to connect");
	sendVirtualAssistantMessage("%SlaveName%, What is your Pishock user name");	
	setVar('pishockUserName', createInput().getAnswer());
	sendVirtualAssistantMessage("%SlaveName%, What is your Pishock API key");	
	setVar('pishockAPIKey', createInput().getAnswer());
	//setVar('pishockShockerNumber', createInput().getAnswer());
	//sendVirtualAssistantMessage("%SlaveName%, And how many shockers did you recieve (1-4)?");	
	answer2=sendInput(" And how many shockers did you recieve (1-4)?  ",0);
/*	
				if(answer2.isInteger()) {
					answerval=answer2.getInteger();   
						 sendMessage(random("Correct","right","yep"));
						 showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						 break;
					}
					else{
						sendMessage("that's not a number dummy ");

						break;
					}

	
	*/
	
	goodanswer=false;
		while(goodanswer==false){
			if(answer2.isInteger() && (answer2.getInteger()>0) && (answer2.getInteger()<5))
				{sendVirtualAssistantMessage("BP1");
				setVar('pishockShockerNumber', answer2.getInteger());
				sendVirtualAssistantMessage("BP1");
				goodanswer=true;
				}
			else
				{sendVirtualAssistantMessage("What the fuck does that mean %SlaveName%, Give me a number between 1 and 4");	
				 answer2.loop();
			}
		}
	sendVirtualAssistantMessage("BP2");
	for(register1=1; register1<=getVar('pishockShockerNumber'); register1++){
		sendVirtualAssistantMessage("%SlaveName%, click on the Share/link button on the pishock website for shocker " + register1);	
		sendVirtualAssistantMessage("%SlaveName%, click on the  NEW SHARE CODE button");
		sendVirtualAssistantMessage("%SlaveName%, give me the code for shocker number " + register1);	
	
			answer=createInput().getAnswer();
		while(true){
			if(answer.matches("^[0-9a-fA-F]+$")&& (answer.length()==11))
				{ switch (register1){
							
							 case 1:
								setVar("Pishock_1_Code", answer);
								break;
							 case 2:
								setVar("Pishock_2_Code", answer);
								break;
							 case 3:
								setVar("Pishock_3_Code", answer);
								break;
							 case 4:
								setVar("Pishock_4_Code", answer);
								break;
								
							}
					
				break;
				}
			else
				{sendVirtualAssistantMessage("What the fuck does that mean %SlaveName%, Give me your shocker" + register1+ " share code");	
				 answer.loop();
			}
		}
	}
		sendVirtualAssistantMessage("%SlaveName%, now lets try and test out these shockers %Smile%" );	
		
	
	
}
//todo.... write a confirm shocker is on function to run at beginning of use
function pishock(shocker, intensity, duration, operation) {
temp=getVar("shocks_recieved");
if (operation==0) {
		setVar("shocks_recieved", temp+1);
}
if (intensity>100 || intensity<0)
	{
	sendDebugMessage("Pishock intensity should be between 0 and 100 not:" +intensity);
	}


if (duration>15 || duration<0)
	{
	sendDebugMessage("Pishock duration should be between 0 and 15 not: " +duration);
	}
	
	
if (operation>2 || operation<0)
	{
	sendDebugMessage("Pishock operation  should be between 0 and 2 (0 shock, 1 vibrate, 2 beep) not: " +operation);
	}
	
var json = {
"Username":"lotar232",
"Code":"1701CD3D0FB",
"Intensity":intensity.toString(10),
"Duration":duration.toString(10),
"ApiKey":"8fefff04-abad-4563-bc0b-3fb3ee1508da",
"Op":operation.toString(10),
};
	
	try
	{
	response= httpPost("https://do.pishock.com/Api/APIOperate", JSON.stringify(json));
	sendDebugMessage("Pishock response data: " +response.data);
	sendDebugMessage("Pishock response statuscode: "+response.statusCode);	
	}
	catch(Exception)
	{	sendDebugMessage("Pishock Http post exception" + Exception+ " caught... maybe network issue?.. trying one more time");
	//fixme... do a nested retry to see if the issue is intermitent
	sendDebugMessage("Pishock response data: " +response.data);
	 sendDebugMessage("Pishock response statuscode: "+response.statusCode);	
	 
	 try {response= httpPost("https://do.pishock.com/Api/APIOperate", JSON.stringify(json));
		}
			catch(Exception){
				sendDebugMessage("2nd Pishock Http post exception" + Exception+ " caught... maybe network issue?.. trying one more time");
				sendDebugMessage("2nd Pishock response data: " +response.data);
				sendDebugMessage("2nd Pishock response statuscode: "+response.statusCode);	
			}
	 
	}
	
}

function testpishock(shocker, intensity, duration, operation) {
temp=getVar("shocks_recieved");
if (operation==0) {
		setVar("shocks_recieved", temp+1);
}
if (shocker>getVar('pishockShockerNumber') || shocker<1)
	{
	sendDebugMessage("Pishock shocker instance should be between 1 and " +getVar('pishockShockerNumber') +" not " + shocker);
	return;
	}

if (intensity>100 || intensity<0)
	{
	sendDebugMessage("Pishock intensity should be between 0 and 100 not:" +intensity);
	return;
	}


if (duration>15 || duration<0)
	{
	sendDebugMessage("Pishock duration should be between 0 and 15 not: " +duration);
	return;
	}
	
	
if (operation>2 || operation<0)
	{
	sendDebugMessage("Pishock operation  should be between 0 and 2 (0 shock, 1 vibrate, 2 beep) not: " +operation);
	return;
	}   // todo fixme remove the hardcode below
		setVar("Pishock_Username", "lotar232");
		setVar("Pishock_1_Code", "1701CD3D0FB");
		setVar("Pishock_APIkey","8fefff04-abad-4563-bc0b-3fb3ee1508da" );
     switch (shocker){
		
		 case 1:
			shockername= getVar("Pishock_1_Code");
			break;
		 case 2:
			shockername= getVar("Pishock_2_Code");
			break;
		 case 3:
			shockername= getVar("Pishock_3_Code");
			break;
		 case 4:
			shockername= getVar("Pishock_4_Code");
			break;
			
	 }

var json = {
"Username":getVar("Pishock_Username"),
"Code":shockername,
"Intensity":intensity.toString(10),
"Duration":duration.toString(10),
"ApiKey":getVar("Pishock_APIkey"),
"Op":operation.toString(10),
};
	
	try
	{
	response= httpPost("https://do.pishock.com/Api/APIOperate", JSON.stringify(json));
	sendDebugMessage("Pishock response data: " +response.data);
	sendDebugMessage("Pishock response statuscode: "+response.statusCode);	
	}
	catch(Exception)
	{	sendDebugMessage("Pishock Http post exception" + Exception+ " caught... maybe network issue?.. trying one more time");
	//fixme... do a nested retry to see if the issue is intermitent
	sendDebugMessage("Pishock response data: " +response.data);
	 sendDebugMessage("Pishock response statuscode: "+response.statusCode);	
	 
	 try {response= httpPost("https://do.pishock.com/Api/APIOperate", JSON.stringify(json));
		}
			catch(Exception){
				sendDebugMessage("2nd Pishock Http post exception" + Exception+ " caught... maybe network issue?.. trying one more time");
				sendDebugMessage("2nd Pishock response data: " +response.data);
				sendDebugMessage("2nd Pishock response statuscode: "+response.statusCode);	
			}
	 
	}
	
}

/*************
UTILITY FUNCTIONS
*************/

function httpGet(theUrl){
    var con = new java.net.URL(theUrl).openConnection();
    con.requestMethod = "GET";

    return asResponse(con);
}

function httpPost(theUrl, data, contentType){
    contentType = contentType || "application/json";
    var con = new java.net.URL(theUrl).openConnection();

    con.requestMethod = "POST";
    con.setRequestProperty("Content-Type", contentType);

    // Send post request
    con.doOutput=true;
    write(con.outputStream, data);

    return asResponse(con);
}

function asResponse(con){
    var d = read(con.inputStream);

    return {data : d, statusCode : con.responseCode};
}

function write(outputStream, data){
    var wr = new java.io.DataOutputStream(outputStream);
    wr.writeBytes(data);
    wr.flush();
    wr.close();
}

function read(inputStream){
    var inReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
    var inputLine;
    var response = new java.lang.StringBuffer();

    while ((inputLine = inReader.readLine()) != null) {
           response.append(inputLine);
    }
    inReader.close();
    return response.toString();
}


/*import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;


function pishock() {
	
HttpClient httpclient = HttpClients.createDefault();
HttpPost httppost = new HttpPost("https://postman-echo.com/post");

// Request parameters and other properties.
List<NameValuePair> params = new ArrayList<NameValuePair>(2);
params.add(new BasicNameValuePair("param-1", "12345"));
params.add(new BasicNameValuePair("param-2", "Hello!"));
httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

//Execute and get the response.
HttpResponse response = httpclient.execute(httppost);
HttpEntity entity = response.getEntity();

if (entity != null) {
    try (InputStream instream = entity.getContent()) {
        // do something useful
		String line = null;
		while((line = instream.readLine()) != null) {
			System.out.println(line);
		}
    }
}
  
}
*/