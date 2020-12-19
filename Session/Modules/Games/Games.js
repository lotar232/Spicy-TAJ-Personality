const GAME_STROKING = 0;
const GAME_PARACHUTE = 1;
const GAME_CBT = 2;
const GAME_CHASTITY = 3;
const GAME_BALL_CRUSHER = 4;
const GAME_INFLATABLE_PLUG = 5;
const GAME_GOLD = 6;
const GAME_EDGE = 7;

{	sendDebugMessage("in Games");	
    let pathLength = getPersonalityPath().length;
    let files = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Modules' + PATH_SEPARATOR + 'Games').listFiles();

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('Games')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }
}