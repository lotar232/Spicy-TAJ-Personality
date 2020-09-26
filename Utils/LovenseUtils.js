

function setuplovense(){
	sendVirtualAssistantMessage("hi Slave..... I hear you got a new toy",3);
	sendVirtualAssistantMessage("smile",2);
	sendVirtualAssistantMessage("But we need to do a few things to get it set it up first");	
	sendVirtualAssistantMessage("First I want you to go ahead and follow all the set up instructions on the pishock website");
	sendVirtualAssistantMessage("Second we need to collect some information to connect");
	sendVirtualAssistantMessage("%SlaveName%, What is your Pishock user name");	
	setVar('pishockUserName', createInput().getAnswer());
	sendVirtualAssistantMessage("%SlaveName%, What is your Pishock API key");	
	setVar('pishockAPIKey', createInput().getAnswer());
	
}

function enumeratelovense(){
		response= httpGet("	https://127-0-0-1.lovense.club:30010/GetToys");
	sendDebugMessage("lovense response data: " +response.data);
	var obj = JSON.parse(response.data);
	sendDebugMessage("lovense response type: " +obj.type);
	sendDebugMessage("lovense response code: " +obj.code);
	sendDebugMessage("lovense response data: " +obj.data);
	keys= Object.keys(obj.data);
	sendDebugMessage("lovense response key: " +keys[0]+"  " +keys[1]);
	setVar("Lovense0",keys[0]);
	setVar("Lovense1",keys[1]);	
	numberOfLovense=keys.length;
	sendDebugMessage("lovense toys: " +numberOfLovense);
	numberOfLovenseConnected=0;
	for (iter=0;iter<=numberOfLovense;iter++)
	{if (obj.data[keys[iter]].status==1)
		{//this device is connected

		sendDebugMessage("found connected Lovense toy: " +obj.data[keys[iter]].name+" with battery charge: " +obj.data[keys[iter]].battery);
		setVar("Lovense"+numberofLovenseConnected+"ID",obj.data[keys[iter]].id);
		setVar("Lovense"+numberofLovenseConnected+"name",obj.data[keys[iter]].name);
		setVar("Lovense"+numberofLovenseConnected+"status",obj.data[keys[iter]].status);
		setVar("Lovense"+numberofLovenseConnected+"battery",obj.data[keys[iter]].battery);
		setVar("Lovense"+numberofLovenseConnected+"control",obj.data[keys[iter]].control);
		setVar("Lovense"+numberofLovenseConnected+"nickname",obj.data[keys[iter]].nickname);
		setVar("Lovense"+numberofLovenseConnected+"version",obj.data[keys[iter]].version);
		
		if ((obj.data[keys[iter]].name== "Edge") || (obj.data[keys[iter]].name== "Hush")){
			setVar("LovenseButtplugIndex",numberOfLovenseConnected);
		}
		//note these toy names need to tested... 
		if ((obj.data[keys[iter]].name== "Nora") || (obj.data[keys[iter]].name== "Domi")|| (obj.data[keys[iter]].name== "Osci")|| (obj.data[keys[iter]].name== "Mission") ){
			setVar("LovensevibratorIndex",numberOfLovenseConnected);
		}
		if ((obj.data[keys[iter]].name== "Max2") ){
			setVar("LovenseFleshlightIndex",numberOfLovenseConnected);
		}
		
		
		numberOfLovenseConnected++;
		}
	else
		{//the device isn't connected
		sendDebugMessage("found disconnected Lovense toy: " +obj.data[keys[iter]].name+" with battery charge: " +obj.data[keys[iter]].battery);
	  
		}
	}
	name1=obj.data[keys[0]].name;
	sendDebugMessage("lovense toys: " +name1);
	
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
function vibratelovense(speed, toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/Vibrate?v="+speed+"&t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
//vibrate 1 0-20
function vibrate1lovense(speed, toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/Vibrate1?v="+speed+"&t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
//vibrate 2 0-20
function vibrate2lovense(speed, toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/Vibrate2?v="+speed+"&t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
// pattern 0-3??
function vibratepatternlovense(pattern, toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/Preset?v="+pattern+"&t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}

//start contractions (0-3)  max
function AirAutolovense(speed, toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/AirAuto?v="+speed+"&t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
// for max
function AirInlovense( toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/AirIn?t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
// for max
function AirOutlovense( toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/AirOut?t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return;
}
function getbatterylovense( toyid){
		response= httpGet("https://127-0-0-1.lovense.club:30010/Battery?t="+toyid);
	sendDebugMessage("lovense response data: " +response.data);
	sendDebugMessage("lovense response statuscode: "+response.statusCode);
	return response.data;
}




function pishock(shocker, intensity, duration, operation) {

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
	
	
	response= httpPost("https://do.pishock.com/Api/APIOperate", JSON.stringify(json));
	sendDebugMessage("Pishock response data: " +response.data);
	sendDebugMessage("Pishock response statuscode: "+response.statusCode);	
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