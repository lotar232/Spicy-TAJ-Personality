const blowjobTasks = [];

{
    let taskId = 0;

    let blowjobTask = {
        id: taskId++, exp: 27, minLevel: 1,

        sendInstructions: function () {
            sendMessage("I want you to blow the tip of your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 30, minLevel: 1,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 33, minLevel: 5,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");
            sendMessage('However I want you to give it at least ' + randomInteger(getVar(VARIABLE_BLOWJOB_LEVEL), getVar(VARIABLE_BLOWJOB_LEVEL) + 5) + ' deepthroats during the blowjob');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 40, minLevel: 10,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE_BLOWJOB_LEVEL), 50 - getVar(VARIABLE_BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 45, minLevel: 15,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE_BLOWJOB_LEVEL), 50 - getVar(VARIABLE_BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendBlowjobTrainingPosition();

            sendMessage('I want you to put a clothespin on your nose during this task');
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);


    blowjobTask = {
        id: taskId++, exp: 48, minLevel: 18,

        sendInstructions: function () {
            sendMessage("I want you to find a deepthroat video and mimic it blowing your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");

            sendMessage('Mimic all positions etc.');

            if(getSissyLimit() == LIMIT_ASKED_YES) {
                sendMessage('Find a fitting sissy video of course');
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 50, minLevel: 20,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE_BLOWJOB_LEVEL), 50 - getVar(VARIABLE_BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendMessage('During that deepthroat I want you to rotate the dildo in your throat by 360 degrees ' + randomInteger(3, 5) + ' times');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);


    blowjobTask = {
        id: taskId++, exp: 55, minLevel: 25,

        sendInstructions: function () {
            sendMessage("I want you to blow your " + getDildo(true).name + " for " + getBlowjobTaskDurationMinutes() + " minutes today");
            sendMessage('However I want you to give it ' + randomInteger(5, 10) + ' deepthroats every ' + randomInteger(60 - getVar(VARIABLE_BLOWJOB_LEVEL), 50 - getVar(VARIABLE_BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold the last deepthroat of each cycle for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendMessage('During that last deepthroat I want you to rotate the dildo in your throat by 360 degrees ' + randomInteger(3, 5) + ' times');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE_BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);
}

function sendBlowjobTrainingPosition() {
    let position = 0;

    if(getVar(VARIABLE_BLOWJOB_LEVEL) > 10) {
        position = randomInteger(0, 2);
    }

    switch (position) {
        case 0:
            sendMessage('For this I want you to place your toy in front of you');
            break;
        case 1:
            sendMessage('For this I want you to get that dildo and either attach or hold it against the wall');

            //TODO: Rice while kneeling?

            if (feelsEvil()) {
                sendMessage('I want you to place the dildo on a height that requires you to completely sit up while kneeling to reach it %EmoteHappy%');
            } else {
                sendMessage('You can place the dildo on a comfortable height');
            }

            break;
        case 2:
            sendMessage('For this I want you to go to the nearest couch, bed or something similar');
            sendMessage('You will lay down on your back and then you will put your head over the corner of your bed or couch');
            sendMessage('In the end your head should be upside down');
            sendMessage('This definitely will be a different experience %Lol%');
            break;
    }

    return position;
}

function getRandomBlowjobTask(array) {
    const availableTasks = [];

    for(let x = 0; x < array.length; x++) {
        if(array[x].isApplicable()) {
            availableTasks.push(array[x]);
        }
    }

    return availableTasks[randomInteger(0, availableTasks.length - 1)];
}

function getBlowjobTaskDeepthroatHoldDuration() {
    return randomInteger(Math.max(2, getVar(VARIABLE_BLOWJOB_LEVEL)/2), Math.max(2, Math.ceil(getVar(VARIABLE_BLOWJOB_LEVEL)/1.5)));
}

function getBlowjobTaskDurationMinutes() {
    return randomInteger(getVar(VARIABLE_BLOWJOB_LEVEL), getVar(VARIABLE_BLOWJOB_LEVEL) + 5);
}