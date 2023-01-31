
var port = 4200
//Called when application is started.
function OnStart()
{
	//Check wifi is enabled.
	var ip = app.GetIPAddress()
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

lay.SetBackground( "Img/main_bg_matrix.png" )
	//Create a text label and add it to layout.
	var s = "Type the following address into your" + 
			" browser\n\n" + ip +":"+port;
	txt = app.CreateText( s, 0.8, 0.5, "MultiLine" )
	txt.SetTextSize( 22 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	serv = app.CreateWebServer( port,"ListDir,NoWelcome" );
serv.SetFolder( "/sdcard/" );

//if (ip != "0.0.0.0") {



txt.SetText( "Type this on any browser http://" + ip + ":" + port );

	serv.AddServlet( "/message", OnServlet )
	serv.Start()
}

//Handle servlet requests.
function OnServlet( request, info )
{
	serv.SetResponse( "Got it!" )
	app.ShowPopup(  info.remoteAddress + " says: " + request.msg )
}