(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["redage-clientside"] = factory();
	else
		root["redage-clientside"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dirtt = null;
var lastdirt;

mp.game.vehicle.defaultEngineBehaviour = false;

/*
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freight"))) mp.game.streaming.requestModel(mp.game.joaat("freight"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freight"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcar"))) mp.game.streaming.requestModel(mp.game.joaat("freightcar"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcar")))mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightgrain"))) mp.game.streaming.requestModel(mp.game.joaat("freightgrain"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightgrain"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcont1"))) mp.game.streaming.requestModel(mp.game.joaat("freightcont1"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcont1"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcont2"))) mp.game.streaming.requestModel(mp.game.joaat("freightcont2"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freightcont2"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freighttrailer"))) mp.game.streaming.requestModel(mp.game.joaat("freighttrailer"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("freighttrailer"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("tankercar"))) mp.game.streaming.requestModel(mp.game.joaat("tankercar"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("tankercar"))) mp.game.wait(0);
if(!mp.game.streaming.hasModelLoaded(mp.game.joaat("metrotrain"))) mp.game.streaming.requestModel(mp.game.joaat("metrotrain"));
while(!mp.game.streaming.hasModelLoaded(mp.game.joaat("metrotrain"))) mp.game.wait(0);

var train = mp.game.vehicle.createMissionTrain(15, 1907.842, -758.90493, 96.14539, true);
var train2 = mp.game.vehicle.createMissionTrain(15, 1904.756, -758.90493, 96.14539, true);
var train3 = mp.game.vehicle.createMissionTrain(24, 40.2,-1201.3,31.0, true);
var train4 = mp.game.vehicle.createMissionTrain(24, -618.0,-1476.8,16.2, true);

mp.game.invoke('0xAA0BC91BE0B796E3', train, 0.0);
mp.game.invoke('0x16469284DB8C62B5', train, 0.0);
mp.game.invoke('0xAA0BC91BE0B796E3', train2, 0.0);
mp.game.invoke('0x16469284DB8C62B5', train2, 0.0);
mp.game.invoke('0xAA0BC91BE0B796E3', train3, 0.0);
mp.game.invoke('0x16469284DB8C62B5', train3, 0.0);
mp.game.invoke('0xAA0BC91BE0B796E3', train4, 0.0);
mp.game.invoke('0x16469284DB8C62B5', train4, 0.0);

mp.events.add("Train_SetPosition", (type, x, y, z) => {
    try {
        switch(type) {
			case 0:
			mp.game.invoke('0x591CA673AA6AB736', train, x, y, z);
			break;
			case 1:
			mp.game.invoke('0x591CA673AA6AB736', train2, x, y, z);
			break;
			case 2:
			mp.game.invoke('0x591CA673AA6AB736', train3, x, y, z);
			break;
			case 3:
			mp.game.invoke('0x591CA673AA6AB736', train4, x, y, z);
			break;
		}
    } catch (e) { }
});
*/

mp.events.add("VehStream_SetEngineStatus", function (veh, status, lights, left, right) {
    try {
        if (veh !== undefined) {
            veh.setEngineOn(status, status, !status);
            veh.setUndriveable(!status);
            if (lights) {
                if (left) veh.setIndicatorLights(1, true);else veh.setIndicatorLights(1, false);
                if (right) veh.setIndicatorLights(0, true);else veh.setIndicatorLights(0, false);
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetSirenSound", function (veh, status) {
    try {
        if (veh && mp.vehicles.exists(veh)) {
            if (veh !== undefined && veh.getClass() == 18) veh.setSirenSound(status);
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetLockStatus", function (veh, status) {
    try {
        if (veh && mp.vehicles.exists(veh)) {
            if (veh !== undefined) {
                if (status) {
                    veh.setDoorsLocked(2);
                    mp.game.audio.playSoundFromEntity(1, "Remote_Control_Close", veh.handle, "PI_Menu_Sounds", true, 0);
                } else {
                    veh.setDoorsLocked(1);
                    mp.game.audio.playSoundFromEntity(1, "Remote_Control_Open", veh.handle, "PI_Menu_Sounds", true, 0);
                }
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_PlayerExitVehicleAttempt", function (entity, enginestate) {
    mp.events.call("VehStream_SetEngineStatus", entity, enginestate, false, false, false);
});

mp.events.add("VehStream_PlayerEnterVehicle", function (entity, seat, enginestate) {
    mp.events.call("VehStream_SetEngineStatus", entity, enginestate, false, false, false);
});

mp.events.add("playerEnterVehicle", function (entity, seat) {
    try {
        if (seat == 0) {
            lastdirt = entity.getDirtLevel();
            if (dirtt != null) clearInterval(dirtt);
            dirtt = setInterval(function () {
                dirtlevel(entity);
            }, 20000);

            if (entity.getVariable('BOOST') != undefined) {
                var boost = entity.getVariable('BOOST');
                entity.setEnginePowerMultiplier(boost);
                entity.setEngineTorqueMultiplier(boost);
            }
        }
    } catch (e) {}
});

mp.events.add("playerLeaveVehicle", function (entity) {
    try {
        if (dirtt != null) {
            clearInterval(dirtt);
            dirtt = null;
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetVehicleDoorStatus_Single", function (veh, door, state) {
    try {
        if (veh && mp.vehicles.exists(veh)) {
            if (veh !== undefined) {
                if (state === 0) {
                    veh.setDoorShut(door, false);
                } else if (state === 1) {
                    veh.setDoorOpen(door, false, false);
                } else {
                    veh.setDoorBroken(door, true);
                }
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetVehicleDoorStatus", function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    try {
        if (args[0] && mp.vehicles.exists(args[0])) {
            if (args[0] !== undefined) {
                var y = 0;
                for (y = 1; y < args.length; y++) {
                    if (args[y] === 0) {
                        args[0].setDoorShut(y - 1, false);
                    } else if (args[y] === 1) {
                        args[0].setDoorOpen(y - 1, false, false);
                    } else {
                        args[0].setDoorBroken(y - 1, true);
                    }
                }
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_FixStreamIn", function (entity, data) {
    if (entity.type !== "vehicle") return;
    if (entity && mp.vehicles.exists(entity)) {
        var typeor = _typeof(entity.getVariable('VehicleSyncData'));
        var actualData = entity.getVariable('VehicleSyncData');

        //Do it anyway
        entity.setUndriveable(true);

        if (entity.getClass() == 18) entity.setSirenSound(entity.getVariable('SIRENSOUND'));

        if (typeor !== 'undefined') {
            actualData = JSON.parse(actualData);
            entity.setEngineOn(actualData.Engine, actualData.Engine, !actualData.Engine);
            entity.setUndriveable(true);
            entity.setDirtLevel(actualData.Dirt);

            if (actualData.Locked) entity.setDoorsLocked(2);else entity.setDoorsLocked(1);

            if (actualData.RightIL) entity.setIndicatorLights(0, true);else entity.setIndicatorLights(0, false);
            if (actualData.LeftIL) entity.setIndicatorLights(1, true);else entity.setIndicatorLights(1, false);

            for (var x = 0; x < 8; x++) {
                if (actualData.Door[x] === 1) entity.setDoorOpen(x, false, false);else if (actualData.Door[x] === 0) entity.setDoorShut(x, true);else entity.setDoorBroken(x, true);
            }
        }

        data = JSON.parse(data);
        entity.setNumberPlateText(data[0]);
        entity.setColours(data[1], data[2]);
        if (data[3] != null) {
            //mp.gui.chat.push('VehStream_FixStreamIn check');
            data = data[3];

            entity.setMod(4, data.Muffler);
            entity.setMod(3, data.SideSkirt);
            entity.setMod(7, data.Hood);
            entity.setMod(0, data.Spoiler);
            entity.setMod(6, data.Lattice);
            entity.setMod(8, data.Wings);
            entity.setMod(10, data.Roof);
            entity.setMod(48, data.Vinyls);
            entity.setMod(1, data.FrontBumper);
            entity.setMod(2, data.RearBumper);

            entity.setMod(11, data.Engine);
            entity.setMod(18, data.Turbo);
            entity.setMod(13, data.Transmission);
            entity.setMod(15, data.Suspension);
            entity.setMod(12, data.Brakes);
            if (data.Headlights >= 0) {
                entity.setMod(22, 0);
                SetHLColor(entity, entity.getVariable('hlcolor'));
            } else entity.setMod(22, data.Headlights);
            entity.setMod(14, data.Horn);

            entity.setWindowTint(data.WindowTint);

            entity.setCustomPrimaryColour(data.PrimColor.Red, data.PrimColor.Green, data.PrimColor.Blue);
            entity.setCustomSecondaryColour(data.SecColor.Red, data.SecColor.Green, data.SecColor.Blue);

            entity.setWheelType(data.WheelsType);
            entity.setMod(23, data.Wheels);
        }
    }
});

function dirtlevel(entity) {
    try {
        if (entity && mp.vehicles.exists(entity)) {
            if (global.localplayer.vehicle == entity && entity.getPedInSeat(-1) == global.localplayer.handle) mp.events.call("VehStream_GetVehicleDirtLevel", entity);
        } else {
            if (dirtt != null) {
                clearInterval(dirtt);
                dirtt = null;
            }
        }
    } catch (e) {}
};

mp.events.add("VehStream_SetVehicleDirtLevel", function (entity, dirt) {
    try {
        if (entity && mp.vehicles.exists(entity)) {
            if (entity !== undefined) {
                entity.setDirtLevel(dirt);
                if (entity.getPedInSeat(-1) == mp.players.local.handle) {
                    lastdirt = dirt;
                }
            }
        }
    } catch (e) {}
});
mp.events.add("VehStream_GetVehicleDirtLevel", function (entity) {
    try {
        if (entity && mp.vehicles.exists(entity)) {
            if (entity !== undefined) {
                if (entity.getPedInSeat(-1) == mp.players.local.handle) {
                    var curdirt = parseFloat(entity.getDirtLevel());
                    var raznica = parseFloat(curdirt - lastdirt);
                    if (raznica >= 0.01) {
                        raznica = raznica / 3;
                        var newdirt = parseFloat(lastdirt + raznica);
                        if (newdirt > 15) newdirt = 15;
                        lastdirt = newdirt;
                        mp.events.callRemote("VehStream_SetVehicleDirt", entity, newdirt);
                    }
                }
            }
        }
    } catch (e) {}
});

//Sync data on stream in
mp.events.add("entityStreamIn", function (entity) {
    try {
        if (entity.type !== "vehicle") return;
        if (entity && mp.vehicles.exists(entity)) {
            var typeor = _typeof(entity.getVariable('VehicleSyncData'));
            var actualData = entity.getVariable('VehicleSyncData');

            //Needed to stop vehicles from freaking out
            mp.game.streaming.requestCollisionAtCoord(entity.position.x, entity.position.y, entity.position.z);
            //mp.game.invoke(getNative("REQUEST_ADDITIONAL_COLLISION_AT_COORD"), entity.position.x, entity.position.y, entity.position.z);
            entity.setLoadCollisionFlag(true);
            entity.trackVisibility();
            entity.setTyresCanBurst(false);
            //Set doors unbreakable for a moment
            var x = 0;
            for (x = 0; x < 8; x++) {
                entity.setDoorBreakable(x, false);
            }

            //Do it anyway
            entity.setUndriveable(true);
            if (entity.getClass() == 18) entity.setSirenSound(entity.getVariable('SIRENSOUND'));

            if (typeor !== 'undefined') {
                actualData = JSON.parse(actualData);
                SetHLColor(entity, entity.getVariable('hlcolor'));
                entity.setEngineOn(actualData.Engine, actualData.Engine, !actualData.Engine);
                entity.setUndriveable(true);
                entity.setDirtLevel(actualData.Dirt);

                if (actualData.Locked) entity.setDoorsLocked(2);else entity.setDoorsLocked(1);

                if (actualData.RightIL) entity.setIndicatorLights(0, true);else entity.setIndicatorLights(0, false);
                if (actualData.LeftIL) entity.setIndicatorLights(1, true);else entity.setIndicatorLights(1, false);

                for (x = 0; x < 8; x++) {
                    if (actualData.Door[x] === 1) entity.setDoorOpen(x, false, false);else if (actualData.Door[x] === 0) entity.setDoorShut(x, true);else entity.setDoorBroken(x, true);
                }
            } else mp.events.callRemote("VehStream_RequestFixStreamIn", entity);

            //Make doors breakable again
            setTimeout(function () {
                for (x = 0; x < 8; x++) {
                    if (entity && mp.vehicles.exists(entity)) entity.setDoorBreakable(x, true);
                }
            }, 1500);
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetVehicleIndicatorLights_Single", function (veh, light, state) {
    try {
        if (veh && mp.vehicles.exists(veh)) {
            if (veh !== undefined) {
                if (light == 0) {
                    if (state) veh.setIndicatorLights(0, true);else veh.setIndicatorLights(0, false);
                } else if (light == 1) {
                    if (state) veh.setIndicatorLights(1, true);else veh.setIndicatorLights(1, false);
                }
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetVehicleIndicatorLights", function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    try {
        if (args[0] && mp.vehicles.exists(args[0])) {
            if (args[0] !== undefined) {
                var y = 0;
                if (args[1]) args[0].setIndicatorLights(1, true);else args[0].setIndicatorLights(1, false);
                if (args[2]) args[0].setIndicatorLights(0, true);else args[0].setIndicatorLights(0, false);
            }
        }
    } catch (e) {}
});

mp.events.add("VehStream_SetVehicleHeadLightColor", function (entity, color) {
    try {
        if (entity && mp.vehicles.exists(entity)) {
            if (entity !== undefined) SetHLColor(entity, color);
        }
    } catch (e) {}
});

function SetHLColor(vehicle, color) {
    try {
        if (vehicle && mp.vehicles.exists(vehicle)) mp.game.invoke('0xE41033B25D003A07', vehicle.handle, color);
    } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.chatActive = false;
global.loggedin = false;
global.localplayer = mp.players.local;

if (mp.storage.data.chatcfg == undefined) {
  mp.storage.data.chatcfg = {
    timestamp: 0,
    chatsize: 0,
    fontstep: 0,
    alpha: 1
  };
  mp.storage.flush();
}

setTimeout(function () {
  mp.gui.execute('newcfg(0,' + mp.storage.data.chatcfg.timestamp + '); newcfg(1,' + mp.storage.data.chatcfg.chatsize + '); newcfg(2,' + mp.storage.data.chatcfg.fontstep + '); newcfg(3,' + mp.storage.data.chatcfg.alpha + ');');
  mp.events.call('showHUD', false);
}, 1000);

setInterval(function () {
  var name = localplayer.getVariable('REMOTE_ID') == undefined ? '\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D' : '\u0418\u0433\u0440\u043E\u043A \u2116' + localplayer.getVariable("REMOTE_ID");
  mp.discord.update('redage.net RolePlay', name);
}, 10000);

var pedsaying = null;
var pedtext = "";
var pedtext2 = null;
var pedtimer = false;

var friends = {};

var pressedraw = false;
var pentloaded = false;
var emsloaded = false;

var walkstyles = [null, "move_m@brave", "move_m@confident", "move_m@drunk@verydrunk", "move_m@shadyped@a", "move_m@sad@a", "move_f@sexy@a", "move_ped_crouched"];
var moods = [null, "mood_aiming_1", "mood_angry_1", "mood_drunk_1", "mood_happy_1", "mood_injured_1", "mood_stressed_1"];
mp.game.streaming.requestClipSet("move_m@brave");
mp.game.streaming.requestClipSet("move_m@confident");
mp.game.streaming.requestClipSet("move_m@drunk@verydrunk");
mp.game.streaming.requestClipSet("move_m@shadyped@a");
mp.game.streaming.requestClipSet("move_m@sad@a");
mp.game.streaming.requestClipSet("move_f@sexy@a");
mp.game.streaming.requestClipSet("move_ped_crouched");
var admingm = false;

mp.game.object.doorControl(mp.game.joaat("prop_ld_bankdoors_02"), 232.6054, 214.1584, 106.4049, false, 0.0, 0.0, 0.0);
mp.game.object.doorControl(mp.game.joaat("prop_ld_bankdoors_02"), 231.5075, 216.5148, 106.4049, false, 0.0, 0.0, 0.0);
mp.game.audio.setAudioFlag("DisableFlightMusic", true);

__webpack_require__(3);

function SetWalkStyle(entity, walkstyle) {
  try {
    if (walkstyle == null) entity.resetMovementClipset(0.0);else entity.setMovementClipset(walkstyle, 0.0);
  } catch (e) {}
}

function SetMood(entity, mood) {
  try {
    if (mood == null) entity.clearFacialIdleAnimOverride();else mp.game.invoke('0xFFC24B988B938B38', entity.handle, mood, 0);
  } catch (e) {}
}

mp.events.add('chatconfig', function (a, b) {
  if (a == 0) mp.storage.data.chatcfg.timestamp = b;else if (a == 1) mp.storage.data.chatcfg.chatsize = b;else if (a == 2) mp.storage.data.chatcfg.fontstep = b;else mp.storage.data.chatcfg.alpha = b;
  mp.storage.flush();
});

mp.events.add('setFriendList', function (friendlist) {
  friends = {};
  friendlist.forEach(function (friend) {
    friends[friend] = true;
  });
});

mp.events.add('setClientRotation', function (player, rots) {
  if (player !== undefined && player != null && localplayer != player) player.setRotation(0, 0, rots, 2, true);
});

mp.events.add('setWorldLights', function (toggle) {
  try {
    mp.game.graphics.resetLightsState();
    for (var i = 0; i <= 16; i++) {
      if (i != 6 && i != 7) mp.game.graphics.setLightsState(i, toggle);
    }
  } catch (e) {}
});

mp.events.add('setDoorLocked', function (model, x, y, z, locked, angle) {
  mp.game.object.doorControl(model, x, y, z, locked, 0, 0, angle);
});
mp.events.add('changeChatState', function (state) {
  chatActive = state;
});

mp.events.add('PressE', function (toggle) {
  pressedraw = toggle;
});

// // // // // // //
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(1);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);

__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);

__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);

//require('./constants/controls.js');
__webpack_require__(45);

__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);

__webpack_require__(50);
__webpack_require__(51);

__webpack_require__(52);
__webpack_require__(1);

__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
// // // // // // //

if (mp.storage.data.friends == undefined) {
  mp.storage.data.friends = {};
  mp.storage.flush();
}

// LOAD ALL DEFAULT IPL'S
//mp.game.streaming.requestIpl("Coroner_Int_On");
mp.game.streaming.requestIpl("hei_dlc_windows_casino");
mp.game.streaming.requestIpl("vw_casino_main");
mp.game.streaming.requestIpl("vw_casino_garage");
mp.game.streaming.requestIpl("vw_casino_carpark");
mp.game.streaming.requestIpl("vw_casino_penthouse");
mp.game.streaming.requestIpl("bh1_47_joshhse_unburnt");
mp.game.streaming.requestIpl("bh1_47_joshhse_unburnt_lod");
mp.game.streaming.requestIpl("CanyonRvrShallow");
mp.game.streaming.requestIpl("ch1_02_open");
mp.game.streaming.requestIpl("Carwash_with_spinners");
mp.game.streaming.requestIpl("sp1_10_real_interior");
mp.game.streaming.requestIpl("sp1_10_real_interior_lod");
mp.game.streaming.requestIpl("ferris_finale_Anim");
mp.game.streaming.removeIpl("hei_bi_hw1_13_door");
mp.game.streaming.requestIpl("fiblobby");
mp.game.streaming.requestIpl("fiblobby_lod");
mp.game.streaming.requestIpl("apa_ss1_11_interior_v_rockclub_milo_");
mp.game.streaming.requestIpl("hei_sm_16_interior_v_bahama_milo_");
mp.game.streaming.requestIpl("hei_hw1_blimp_interior_v_comedy_milo_");
mp.game.streaming.requestIpl("gr_case6_bunkerclosed");
//

/*mp.events.add('emsload', () => {
	if(emsloaded == false) {
		emsloaded = true;
		mp.game.streaming.requestIpl("Coroner_Int_On");
	}
});*/

mp.events.add('pentload', function () {
  if (pentloaded == false) {
    pentloaded = true;
    // Enable Penthouse interior // Thanks & Credits to root <3
    var phIntID = mp.game.interior.getInteriorAtCoords(976.636, 70.295, 115.164);
    var phPropList = ["Set_Pent_Tint_Shell", "Set_Pent_Pattern_01", "Set_Pent_Spa_Bar_Open", "Set_Pent_Media_Bar_Open", "Set_Pent_Dealer", "Set_Pent_Arcade_Modern", "Set_Pent_Bar_Clutter", "Set_Pent_Clutter_01", "set_pent_bar_light_01", "set_pent_bar_party_0"];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = phPropList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var propName = _step.value;

        mp.game.interior.enableInteriorProp(phIntID, propName);
        mp.game.invoke("0x8D8338B92AD18ED6", phIntID, propName, 1);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    mp.game.interior.refreshInterior(phIntID);
  }
});

// // // // // // //
var mSP = 30;
var prevP = mp.players.local.position;
var localWeapons = {};

function distAnalyze() {
  if (new Date().getTime() - global.lastCheck < 100) return;
  global.lastCheck = new Date().getTime();
  var temp = mp.players.local.position;
  var dist = mp.game.gameplay.getDistanceBetweenCoords(prevP.x, prevP.y, prevP.z, temp.x, temp.y, temp.z, true);
  prevP = mp.players.local.position;
  if (mp.players.local.isInAnyVehicle(true)) return;
  if (dist > mSP) {
    mp.events.callRemote("acd", "fly");
  }
}

global.serverid = 1;

mp.events.add('ServerNum', function (server, slots) {
  global.serverid = parseInt(server);
  var servernames = ["", "Black", "White", "Red"];
  mp.gui.emmit('window.hud.updateServerInfo("serverid", ' + global.serverid + ')');
  mp.gui.emmit('window.hud.updateServerInfo("name", \'' + servernames[global.serverid] + '\')');
  mp.gui.emmit('window.hud.updateServerInfo("slots", ' + parseInt(slots) + ')');
  mp.gui.emmit('window.pages.showBrowser(true);');
  global.menuOpen();
});

global.acheat = {
  pos: function pos() {
    return prevP = mp.players.local.position;
  },
  guns: function guns() {
    return localWeapons = playerLocal.getAllWeapons();
  },
  start: function start() {
    setInterval(distAnalyze, 2000);
  }
};

mp.events.add('acpos', function () {
  global.acheat.pos();
});
// // // // // // //
var spectating = false;
var sptarget = null;

//mp.game.invoke(getNative("REMOVE_ALL_PED_WEAPONS"), localplayer.handle, false);

mp.keys.bind(Keys.VK_R, false, function () {
  // R key
  try {
    if (!loggedin || chatActive || new Date().getTime() - global.lastCheck < 1000 || mp.gui.cursor.visible) return;
    var current = currentWeapon();
    if (current == -1569615261 || current == 911657153) return;
    var ammo = mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, current);
    if (mp.game.weapon.getWeaponClipSize(current) == ammo) return;
    mp.events.callRemote("playerReload", current, ammo);
    global.lastCheck = new Date().getTime();
  } catch (e) {}
});

mp.keys.bind(Keys.VK_1, false, function () {
  // 1 key
  if (!loggedin || chatActive || new Date().getTime() - global.lastCheck < 1000 || global.menuOpened || mp.gui.cursor.visible) return;
  mp.events.callRemote('changeweap', 1);
  global.lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_2, false, function () {
  // 2 key
  if (!loggedin || chatActive || new Date().getTime() - global.lastCheck < 1000 || global.menuOpened || mp.gui.cursor.visible) return;
  mp.events.callRemote('changeweap', 2);
  global.lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_3, false, function () {
  // 3 key
  if (!loggedin || chatActive || new Date().getTime() - global.lastCheck < 1000 || global.menuOpened || mp.gui.cursor.visible) return;
  mp.events.callRemote('changeweap', 3);
  global.lastCheck = new Date().getTime();
});

var ammosweap = 0;
var givenWeapon = -1569615261;
var currentWeapon = function currentWeapon() {
  return mp.game.invoke(getNative("GET_SELECTED_PED_WEAPON"), localplayer.handle);
};
mp.events.add('wgive', function (weaponHash, ammo, isReload, equipNow) {
  weaponHash = parseInt(weaponHash);
  ammo = parseInt(ammo);
  ammo = ammo >= 9999 ? 9999 : ammo;
  givenWeapon = weaponHash;
  ammo += mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, weaponHash);
  mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, weaponHash, 0);
  ammosweap = ammo;
  mp.gui.execute('HUD.ammo=' + ammo + ';');
  // GIVE_WEAPON_TO_PED //
  mp.game.invoke(getNative("GIVE_WEAPON_TO_PED"), localplayer.handle, weaponHash, ammo, false, equipNow);

  if (isReload) {
    mp.game.invoke(getNative("MAKE_PED_RELOAD"), localplayer.handle);
  }
});
mp.events.add('takeOffWeapon', function (weaponHash) {
  try {
    weaponHash = parseInt(weaponHash);
    var ammo = mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, weaponHash);
    if (ammo == ammosweap) mp.events.callRemote('playerTakeoffWeapon', weaponHash, ammo, 0);else mp.events.callRemote('playerTakeoffWeapon', weaponHash, ammosweap, 1);
    ammosweap = 0;
    mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, weaponHash, 0);
    mp.game.invoke(getNative("REMOVE_WEAPON_FROM_PED"), localplayer.handle, weaponHash);
    givenWeapon = -1569615261;
    mp.gui.execute('HUD.ammo=0;');
  } catch (e) {}
});
mp.events.add('serverTakeOffWeapon', function (weaponHash) {
  try {
    weaponHash = parseInt(weaponHash);
    var ammo = mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, weaponHash);
    if (ammo == ammosweap) mp.events.callRemote('takeoffWeapon', weaponHash, ammo, 0);else mp.events.callRemote('takeoffWeapon', weaponHash, ammosweap, 1);
    ammosweap = 0;
    mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, weaponHash, 0);
    mp.game.invoke(getNative("REMOVE_WEAPON_FROM_PED"), localplayer.handle, weaponHash);
    givenWeapon = -1569615261;
    mp.gui.execute('HUD.ammo=0;');
  } catch (e) {}
});

var petathouse = null;
mp.events.add('petinhouse', function (petName, petX, petY, petZ, petC, Dimension) {
  if (petathouse != null) {
    petathouse.destroy();
    petathouse = null;
  }
  switch (petName) {
    case "Husky":
      petName = 1318032802;
      break;
    case "Poodle":
      petName = 1125994524;
      break;
    case "Pug":
      petName = 1832265812;
      break;
    case "Retriever":
      petName = 882848737;
      break;
    case "Rottweiler":
      petName = 2506301981;
      break;
    case "Shepherd":
      petName = 1126154828;
      break;
    case "Westy":
      petName = 2910340283;
      break;
    case "Cat":
      petName = 1462895032;
      break;
    case "Rabbit":
      petName = 3753204865;
      break;
  }
  petathouse = mp.peds.new(petName, new mp.Vector3(petX, petY, petZ), petC, Dimension);
});
var checkTimer = setInterval(function () {
  var current = currentWeapon();
  if (localplayer.isInAnyVehicle(true)) {
    var vehicle = localplayer.vehicle;
    if (vehicle == null) return;

    if (vehicle.getClass() == 15) {
      if (vehicle.getPedInSeat(-1) == localplayer.handle || vehicle.getPedInSeat(0) == localplayer.handle) return;
    } else {
      if (canUseInCar.indexOf(current) == -1) return;
    }
  }

  if (currentWeapon() != givenWeapon) {
    ammosweap = 0;
    mp.game.invoke(getNative("GIVE_WEAPON_TO_PED"), localplayer.handle, givenWeapon, 1, false, true);
    mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, givenWeapon, 0);
    localplayer.taskReloadWeapon(false);
    localplayer.taskSwapWeapon(false);
    mp.gui.execute('HUD.ammo=0;');
  }
}, 100);
var canUseInCar = [453432689, 1593441988, -1716589765, -1076751822, -771403250, 137902532, -598887786, -1045183535, 584646201, 911657153, 1198879012, 324215364, -619010992, -1121678507];
mp.events.add('playerWeaponShot', function (targetPosition, targetEntity) {
  var current = currentWeapon();
  var ammo = mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, current);
  mp.gui.execute('HUD.ammo=' + ammo + ';');

  if (current != -1569615261 && current != 911657153) {
    if (ammosweap > 0) ammosweap--;
    if (ammosweap == 0 && ammo != 0) {
      mp.events.callRemote('takeoffWeapon', current, 0, 1);
      ammosweap = 0;
      mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, current, 0);
      mp.game.invoke(getNative("REMOVE_WEAPON_FROM_PED"), localplayer.handle, current);
      givenWeapon = -1569615261;
      mp.gui.execute('HUD.ammo=0;');
    }
  }

  if (ammo <= 0) {
    ammosweap = 0;
    localplayer.taskSwapWeapon(false);
    mp.gui.execute('HUD.ammo=0;');
  }
});
mp.events.add('render', function () {
  try {
    mp.game.controls.disableControlAction(2, 45, true); // reload control
    //localplayer.setCanSwitchWeapon(false);

    //     weapon switch controls       //
    mp.game.controls.disableControlAction(1, 243, true); // CCPanelDisable

    mp.game.controls.disableControlAction(2, 12, true);
    mp.game.controls.disableControlAction(2, 13, true);
    mp.game.controls.disableControlAction(2, 14, true);
    mp.game.controls.disableControlAction(2, 15, true);
    mp.game.controls.disableControlAction(2, 16, true);
    mp.game.controls.disableControlAction(2, 17, true);

    mp.game.controls.disableControlAction(2, 37, true);
    mp.game.controls.disableControlAction(2, 99, true);
    mp.game.controls.disableControlAction(2, 100, true);

    mp.game.controls.disableControlAction(2, 157, true);
    mp.game.controls.disableControlAction(2, 158, true);
    mp.game.controls.disableControlAction(2, 159, true);
    mp.game.controls.disableControlAction(2, 160, true);
    mp.game.controls.disableControlAction(2, 161, true);
    mp.game.controls.disableControlAction(2, 162, true);
    mp.game.controls.disableControlAction(2, 163, true);
    mp.game.controls.disableControlAction(2, 164, true);
    mp.game.controls.disableControlAction(2, 165, true);

    mp.game.controls.disableControlAction(2, 261, true);
    mp.game.controls.disableControlAction(2, 262, true);
    //      weapon switch controls       //

    if (currentWeapon() != -1569615261) {
      // heavy attack controls
      mp.game.controls.disableControlAction(2, 140, true);
      mp.game.controls.disableControlAction(2, 141, true);
      mp.game.controls.disableControlAction(2, 143, true);
      mp.game.controls.disableControlAction(2, 263, true);
    }
  } catch (e) {}
});

mp.events.add("Player_SetMood", function (player, index) {
  try {
    if (player !== undefined) {
      if (index == 0) player.clearFacialIdleAnimOverride();else mp.game.invoke('0xFFC24B988B938B38', player.handle, moods[index], 0);
    }
  } catch (e) {
    mp.gui.chat.push("SetMood Debug: " + e.toString());
  }
});

mp.events.add("Player_SetWalkStyle", function (player, index) {
  try {
    if (player !== undefined) {
      if (index == 0) player.resetMovementClipset(0.0);else player.setMovementClipset(walkstyles[index], 0.0);
    }
  } catch (e) {
    mp.gui.chat.push("SetWalkStyle Debug: " + e.toString());
  }
});

mp.events.add("playerDeath", function (player, reason, killer) {
  givenWeapon = -1569615261;
});

mp.events.add("removeAllWeapons", function () {
  givenWeapon = -1569615261;
});

mp.events.add('svem', function (pm, tm) {
  var vehc = localplayer.vehicle;
  vehc.setEnginePowerMultiplier(pm);
  vehc.setEngineTorqueMultiplier(tm);
});

var f10rep = new Date().getTime();

mp.events.add('f10report', function (report) {
  if (!loggedin || new Date().getTime() - f10rep < 3000) return;
  f10rep = new Date().getTime();
  mp.events.callRemote('f10helpreport', report);
});

mp.events.add('dmgmodif', function (multi) {
  mp.game.ped.setAiWeaponDamageModifier(multi);
});

mp.game.ped.setAiWeaponDamageModifier(0.5);
mp.game.ped.setAiMeleeWeaponDamageModifier(0.4);

mp.game.player.setMeleeWeaponDefenseModifier(0.25);
mp.game.player.setWeaponDefenseModifier(1.3);

var resistStages = {
  0: 0.0,
  1: 0.05,
  2: 0.07,
  3: 0.1
};
mp.events.add("setResistStage", function (stage) {
  mp.game.player.setMeleeWeaponDefenseModifier(0.25 + resistStages[stage]);
  mp.game.player.setWeaponDefenseModifier(1.3 + resistStages[stage]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        } /******/return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./enums/BadgeStyle.ts
    var BadgeStyle;
    (function (BadgeStyle) {
        BadgeStyle[BadgeStyle["None"] = 0] = "None";
        BadgeStyle[BadgeStyle["BronzeMedal"] = 1] = "BronzeMedal";
        BadgeStyle[BadgeStyle["GoldMedal"] = 2] = "GoldMedal";
        BadgeStyle[BadgeStyle["SilverMedal"] = 3] = "SilverMedal";
        BadgeStyle[BadgeStyle["Alert"] = 4] = "Alert";
        BadgeStyle[BadgeStyle["Crown"] = 5] = "Crown";
        BadgeStyle[BadgeStyle["Ammo"] = 6] = "Ammo";
        BadgeStyle[BadgeStyle["Armour"] = 7] = "Armour";
        BadgeStyle[BadgeStyle["Barber"] = 8] = "Barber";
        BadgeStyle[BadgeStyle["Clothes"] = 9] = "Clothes";
        BadgeStyle[BadgeStyle["Franklin"] = 10] = "Franklin";
        BadgeStyle[BadgeStyle["Bike"] = 11] = "Bike";
        BadgeStyle[BadgeStyle["Car"] = 12] = "Car";
        BadgeStyle[BadgeStyle["Gun"] = 13] = "Gun";
        BadgeStyle[BadgeStyle["Heart"] = 14] = "Heart";
        BadgeStyle[BadgeStyle["Makeup"] = 15] = "Makeup";
        BadgeStyle[BadgeStyle["Mask"] = 16] = "Mask";
        BadgeStyle[BadgeStyle["Michael"] = 17] = "Michael";
        BadgeStyle[BadgeStyle["Star"] = 18] = "Star";
        BadgeStyle[BadgeStyle["Tatoo"] = 19] = "Tatoo";
        BadgeStyle[BadgeStyle["Trevor"] = 20] = "Trevor";
        BadgeStyle[BadgeStyle["Lock"] = 21] = "Lock";
        BadgeStyle[BadgeStyle["Tick"] = 22] = "Tick";
    })(BadgeStyle || (BadgeStyle = {}));
    /* harmony default export */var enums_BadgeStyle = BadgeStyle;

    // CONCATENATED MODULE: ./enums/Font.ts
    var Font;
    (function (Font) {
        Font[Font["ChaletLondon"] = 0] = "ChaletLondon";
        Font[Font["HouseScript"] = 1] = "HouseScript";
        Font[Font["Monospace"] = 2] = "Monospace";
        Font[Font["CharletComprimeColonge"] = 4] = "CharletComprimeColonge";
        Font[Font["Pricedown"] = 7] = "Pricedown";
    })(Font || (Font = {}));
    /* harmony default export */var enums_Font = Font;

    // CONCATENATED MODULE: ./utils/Color.ts

    var Color = function Color(r, g, b) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 255;

        _classCallCheck(this, Color);

        this.R = r;
        this.G = g;
        this.B = b;
        this.A = a;
    };

    Color.Empty = new Color(0, 0, 0, 0);
    Color.Transparent = new Color(0, 0, 0, 0);
    Color.Black = new Color(0, 0, 0, 255);
    Color.White = new Color(255, 255, 255, 255);
    Color.WhiteSmoke = new Color(245, 245, 245, 255);

    // CONCATENATED MODULE: ./utils/Screen.ts
    var gameScreen = mp.game.graphics.getScreenActiveResolution(0, 0);
    var Screen = {
        width: gameScreen.x,
        height: gameScreen.y
    };

    // CONCATENATED MODULE: ./modules/Sprite.ts


    var Sprite_Sprite = function () {
        function Sprite_Sprite(textureDict, textureName, pos, size) {
            var heading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new Color(255, 255, 255);

            _classCallCheck(this, Sprite_Sprite);

            this.TextureDict = textureDict;
            this.TextureName = textureName;
            this.pos = pos;
            this.size = size;
            this.heading = heading;
            this.color = color;
            this.visible = true;
        }

        _createClass(Sprite_Sprite, [{
            key: 'LoadTextureDictionary',
            value: function LoadTextureDictionary() {
                mp.game.graphics.requestStreamedTextureDict(this._textureDict, true);
                while (!this.IsTextureDictionaryLoaded) {
                    mp.game.wait(0);
                }
            }
        }, {
            key: 'Draw',
            value: function Draw(textureDictionary, textureName, pos, size, heading, color, loadTexture) {
                textureDictionary = textureDictionary || this.TextureDict;
                textureName = textureName || this.TextureName;
                pos = pos || this.pos;
                size = size || this.size;
                heading = heading || this.heading;
                color = color || this.color;
                loadTexture = loadTexture || true;
                if (loadTexture) {
                    if (!mp.game.graphics.hasStreamedTextureDictLoaded(textureDictionary)) mp.game.graphics.requestStreamedTextureDict(textureDictionary, true);
                }
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                var w = this.size.Width / width;
                var h = this.size.Height / height;
                var x = this.pos.X / width + w * 0.5;
                var y = this.pos.Y / height + h * 0.5;
                mp.game.graphics.drawSprite(textureDictionary, textureName, x, y, w, h, heading, color.R, color.G, color.B, color.A);
            }
        }, {
            key: 'TextureDict',
            set: function set(v) {
                this._textureDict = v;
                if (!this.IsTextureDictionaryLoaded) this.LoadTextureDictionary();
            },
            get: function get() {
                return this._textureDict;
            }
        }, {
            key: 'IsTextureDictionaryLoaded',
            get: function get() {
                return mp.game.graphics.hasStreamedTextureDictLoaded(this._textureDict);
            }
        }]);

        return Sprite_Sprite;
    }();

    // CONCATENATED MODULE: ./utils/LiteEvent.ts


    var LiteEvent = function () {
        function LiteEvent() {
            _classCallCheck(this, LiteEvent);

            this.handlers = [];
        }

        _createClass(LiteEvent, [{
            key: 'on',
            value: function on(handler) {
                this.handlers.push(handler);
            }
        }, {
            key: 'off',
            value: function off(handler) {
                this.handlers = this.handlers.filter(function (h) {
                    return h !== handler;
                });
            }
        }, {
            key: 'emit',
            value: function emit() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                this.handlers.slice(0).forEach(function (h) {
                    return h.apply(undefined, args);
                });
            }
        }, {
            key: 'expose',
            value: function expose() {
                return this;
            }
        }]);

        return LiteEvent;
    }();

    // CONCATENATED MODULE: ./utils/Point.ts


    var Point = function () {
        function Point(x, y) {
            _classCallCheck(this, Point);

            this.X = 0;
            this.Y = 0;
            this.X = x;
            this.Y = y;
        }

        _createClass(Point, null, [{
            key: 'Parse',
            value: function Parse(arg) {
                if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === "object") {
                    if (arg.length) {
                        return new Point(arg[0], arg[1]);
                    } else if (arg.X && arg.Y) {
                        return new Point(arg.X, arg.Y);
                    }
                } else if (typeof arg === "string") {
                    if (arg.indexOf(",") !== -1) {
                        var arr = arg.split(",");
                        return new Point(parseFloat(arr[0]), parseFloat(arr[1]));
                    }
                }
                return new Point(0, 0);
            }
        }]);

        return Point;
    }();

    // CONCATENATED MODULE: ./utils/Size.ts


    var Size = function Size() {
        var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Size);

        this.Width = w;
        this.Height = h;
    };

    // CONCATENATED MODULE: ./modules/IElement.ts


    var IElement = function IElement() {
        _classCallCheck(this, IElement);

        this.enabled = true;
    };

    // CONCATENATED MODULE: ./modules/Rectangle.ts


    var Rectangle_Rectangle = function (_IElement) {
        _inherits(Rectangle_Rectangle, _IElement);

        function Rectangle_Rectangle(pos, size, color) {
            _classCallCheck(this, Rectangle_Rectangle);

            var _this = _possibleConstructorReturn(this, (Rectangle_Rectangle.__proto__ || Object.getPrototypeOf(Rectangle_Rectangle)).call(this));

            _this.enabled = true;
            _this.pos = pos;
            _this.size = size;
            _this.color = color;
            return _this;
        }

        _createClass(Rectangle_Rectangle, [{
            key: 'Draw',
            value: function Draw(pos, size, color) {
                if (!pos) pos = new Size(0, 0);
                if (!size && !color) {
                    pos = new Point(this.pos.X + pos.Width, this.pos.Y + pos.Height);
                    size = this.size;
                    color = this.color;
                }
                var w = size.Width / 1280.0;
                var h = size.Height / 720.0;
                var x = pos.X / 1280.0 + w * 0.5;
                var y = pos.Y / 720.0 + h * 0.5;
                mp.game.graphics.drawRect(x, y, w, h, color.R, color.G, color.B, color.A);
            }
        }]);

        return Rectangle_Rectangle;
    }(IElement);

    // CONCATENATED MODULE: ./modules/ResRectangle.ts


    var ResRectangle_ResRectangle = function (_Rectangle_Rectangle) {
        _inherits(ResRectangle_ResRectangle, _Rectangle_Rectangle);

        function ResRectangle_ResRectangle(pos, size, color) {
            _classCallCheck(this, ResRectangle_ResRectangle);

            return _possibleConstructorReturn(this, (ResRectangle_ResRectangle.__proto__ || Object.getPrototypeOf(ResRectangle_ResRectangle)).call(this, pos, size, color));
        }

        _createClass(ResRectangle_ResRectangle, [{
            key: 'Draw',
            value: function Draw(pos, size, color) {
                if (!pos) pos = new Size();
                if (pos && !size && !color) {
                    pos = new Point(this.pos.X + pos.Width, this.pos.Y + pos.Height);
                    size = this.size;
                    color = this.color;
                }
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                var w = size.Width / width;
                var h = size.Height / height;
                var x = pos.X / width + w * 0.5;
                var y = pos.Y / height + h * 0.5;
                mp.game.graphics.drawRect(x, y, w, h, color.R, color.G, color.B, color.A);
            }
        }]);

        return ResRectangle_ResRectangle;
    }(Rectangle_Rectangle);

    // CONCATENATED MODULE: ./modules/Text.ts


    var Text_Text = function (_IElement2) {
        _inherits(Text_Text, _IElement2);

        function Text_Text(caption, pos, scale, color, font, centered) {
            _classCallCheck(this, Text_Text);

            var _this3 = _possibleConstructorReturn(this, (Text_Text.__proto__ || Object.getPrototypeOf(Text_Text)).call(this));

            _this3.caption = caption;
            _this3.pos = pos;
            _this3.scale = scale;
            _this3.color = color || new Color(255, 255, 255, 255);
            _this3.font = font || 0;
            _this3.centered = centered || false;
            return _this3;
        }

        _createClass(Text_Text, [{
            key: 'Draw',
            value: function Draw(caption, pos, scale, color, font, centered) {
                if (caption && !pos && !scale && !color && !font && !centered) {
                    pos = new Point(this.pos.X + caption.Width, this.pos.Y + caption.Height);
                    scale = this.scale;
                    color = this.color;
                    font = this.font;
                    centered = this.centered;
                }
                var x = pos.X / 1280.0;
                var y = pos.Y / 720.0;
                mp.game.ui.setTextFont(parseInt(font));
                mp.game.ui.setTextScale(scale, scale);
                mp.game.ui.setTextColour(color.R, color.G, color.B, color.A);
                mp.game.ui.setTextCentre(centered);
                mp.game.ui.setTextEntry("STRING");
                ResText_ResText.AddLongString(caption);
                mp.game.ui.drawText(x, y);
            }
        }]);

        return Text_Text;
    }(IElement);

    exports = Text_Text;

    // CONCATENATED MODULE: ./modules/ResText.ts


    var Alignment;
    (function (Alignment) {
        Alignment[Alignment["Left"] = 0] = "Left";
        Alignment[Alignment["Centered"] = 1] = "Centered";
        Alignment[Alignment["Right"] = 2] = "Right";
    })(Alignment || (Alignment = {}));

    var ResText_ResText = function (_Text_Text) {
        _inherits(ResText_ResText, _Text_Text);

        function ResText_ResText(caption, pos, scale, color, font, justify) {
            _classCallCheck(this, ResText_ResText);

            var _this4 = _possibleConstructorReturn(this, (ResText_ResText.__proto__ || Object.getPrototypeOf(ResText_ResText)).call(this, caption, pos, scale, color || new Color(255, 255, 255), font || 0, false));

            _this4.TextAlignment = Alignment.Left;
            if (justify) _this4.TextAlignment = justify;
            return _this4;
        }

        _createClass(ResText_ResText, [{
            key: 'Draw',
            value: function Draw(arg1, pos, scale, color, font, arg2, dropShadow, outline, wordWrap) {
                var caption = arg1;
                var centered = arg2;
                var textAlignment = arg2;
                if (!arg1) arg1 = new Size(0, 0);
                if (arg1 && !pos) {
                    textAlignment = this.TextAlignment;
                    caption = this.caption;
                    pos = new Point(this.pos.X + arg1.Width, this.pos.Y + arg1.Height);
                    scale = this.scale;
                    color = this.color;
                    font = this.font;
                    if (centered == true || centered == false) {
                        centered = this.centered;
                    } else {
                        centered = undefined;
                        dropShadow = this.DropShadow;
                        outline = this.Outline;
                        wordWrap = this.WordWrap;
                    }
                }
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                var x = this.pos.X / width;
                var y = this.pos.Y / height;
                mp.game.ui.setTextFont(parseInt(font));
                mp.game.ui.setTextScale(1.0, scale);
                mp.game.ui.setTextColour(color.R, color.G, color.B, color.A);
                if (centered !== undefined) {
                    mp.game.ui.setTextCentre(centered);
                } else {
                    if (dropShadow) mp.game.ui.setTextDropshadow(2, 0, 0, 0, 0);
                    if (outline) console.warn("not working!");
                    switch (textAlignment) {
                        case Alignment.Centered:
                            mp.game.ui.setTextCentre(true);
                            break;
                        case Alignment.Right:
                            mp.game.ui.setTextRightJustify(true);
                            mp.game.ui.setTextWrap(0.0, x);
                            break;
                    }
                    if (wordWrap) {
                        var xsize = (this.pos.X + wordWrap.Width) / width;
                        mp.game.ui.setTextWrap(x, xsize);
                    }
                }
                mp.game.ui.setTextEntry("STRING");
                ResText_ResText.AddLongString(caption);
                mp.game.ui.drawText(x, y);
            }
        }], [{
            key: 'AddLongString',
            value: function AddLongString(str) {
                var strLen = 99;
                for (var i = 0; i < str.length; i += strLen) {
                    var substr = str.substr(i, Math.min(strLen, str.length - i));
                    mp.game.ui.addTextComponentSubstringPlayerName(substr);
                }
            }
        }]);

        return ResText_ResText;
    }(Text_Text);

    // CONCATENATED MODULE: ./utils/UUIDV4.ts


    function UUIDV4() {
        var uuid = "",
            ii;
        for (ii = 0; ii < 32; ii += 1) {
            switch (ii) {
                case 8:
                case 20:
                    uuid += "-";
                    uuid += (Math.random() * 16 | 0).toString(16);
                    break;
                case 12:
                    uuid += "-";
                    uuid += "4";
                    break;
                case 16:
                    uuid += "-";
                    uuid += (Math.random() * 4 | 8).toString(16);
                    break;
                default:
                    uuid += (Math.random() * 16 | 0).toString(16);
            }
        }
        return uuid;
    }

    // CONCATENATED MODULE: ./items/UIMenuItem.ts


    var UIMenuItem_UIMenuItem = function () {
        function UIMenuItem_UIMenuItem(text) {
            var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            _classCallCheck(this, UIMenuItem_UIMenuItem);

            this.Id = UUIDV4();
            this.BackColor = UIMenuItem_UIMenuItem.DefaultBackColor;
            this.HighlightedBackColor = UIMenuItem_UIMenuItem.DefaultHighlightedBackColor;
            this.ForeColor = UIMenuItem_UIMenuItem.DefaultForeColor;
            this.HighlightedForeColor = UIMenuItem_UIMenuItem.DefaultHighlightedForeColor;
            this.RightLabel = "";
            this.LeftBadge = enums_BadgeStyle.None;
            this.RightBadge = enums_BadgeStyle.None;
            this.Enabled = true;
            this._rectangle = new ResRectangle_ResRectangle(new Point(0, 0), new Size(431, 38), new Color(150, 0, 0, 0));
            this._text = new ResText_ResText(text, new Point(8, 0), 0.33, Color.WhiteSmoke, enums_Font.ChaletLondon, Alignment.Left);
            this.Description = description;
            this._selectedSprite = new Sprite_Sprite("commonmenu", "gradient_nav", new Point(0, 0), new Size(431, 38));
            this._badgeLeft = new Sprite_Sprite("commonmenu", "", new Point(0, 0), new Size(40, 40));
            this._badgeRight = new Sprite_Sprite("commonmenu", "", new Point(0, 0), new Size(40, 40));
            this._labelText = new ResText_ResText("", new Point(0, 0), 0.35, Color.White, 0, Alignment.Right);
        }

        _createClass(UIMenuItem_UIMenuItem, [{
            key: 'SetVerticalPosition',
            value: function SetVerticalPosition(y) {
                this._rectangle.pos = new Point(this.Offset.X, y + 144 + this.Offset.Y);
                this._selectedSprite.pos = new Point(0 + this.Offset.X, y + 144 + this.Offset.Y);
                this._text.pos = new Point(8 + this.Offset.X, y + 147 + this.Offset.Y);
                this._badgeLeft.pos = new Point(0 + this.Offset.X, y + 142 + this.Offset.Y);
                this._badgeRight.pos = new Point(385 + this.Offset.X, y + 142 + this.Offset.Y);
                this._labelText.pos = new Point(420 + this.Offset.X, y + 148 + this.Offset.Y);
            }
        }, {
            key: 'addEvent',
            value: function addEvent(event) {
                for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                }

                this._event = { event: event, args: args };
            }
        }, {
            key: 'fireEvent',
            value: function fireEvent() {
                if (this._event) {
                    var _mp$events;

                    (_mp$events = mp.events).call.apply(_mp$events, [this._event.event, this].concat(_toConsumableArray(this._event.args)));
                }
            }
        }, {
            key: 'Draw',
            value: function Draw() {
                this._rectangle.size = new Size(431 + this.Parent.WidthOffset, 38);
                this._selectedSprite.size = new Size(431 + this.Parent.WidthOffset, 38);
                if (this.Hovered && !this.Selected) {
                    this._rectangle.color = new Color(255, 255, 255, 20);
                    this._rectangle.Draw();
                }
                this._selectedSprite.color = this.Selected ? this.HighlightedBackColor : this.BackColor;
                this._selectedSprite.Draw();
                this._text.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                if (this.LeftBadge != enums_BadgeStyle.None) {
                    this._text.pos = new Point(35 + this.Offset.X, this._text.pos.Y);
                    this._badgeLeft.TextureDict = this.BadgeToSpriteLib(this.LeftBadge);
                    this._badgeLeft.TextureName = this.BadgeToSpriteName(this.LeftBadge, this.Selected);
                    this._badgeLeft.color = this.IsBagdeWhiteSprite(this.LeftBadge) ? this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148) : Color.White;
                    this._badgeLeft.Draw();
                } else {
                    this._text.pos = new Point(8 + this.Offset.X, this._text.pos.Y);
                }
                if (this.RightBadge != enums_BadgeStyle.None) {
                    this._badgeRight.pos = new Point(385 + this.Offset.X + this.Parent.WidthOffset, this._badgeRight.pos.Y);
                    this._badgeRight.TextureDict = this.BadgeToSpriteLib(this.RightBadge);
                    this._badgeRight.TextureName = this.BadgeToSpriteName(this.RightBadge, this.Selected);
                    this._badgeRight.color = this.IsBagdeWhiteSprite(this.RightBadge) ? this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148) : Color.White;
                    this._badgeRight.Draw();
                }
                if (this.RightLabel && this.RightLabel !== "") {
                    this._labelText.pos = new Point(420 + this.Offset.X + this.Parent.WidthOffset, this._labelText.pos.Y);
                    this._labelText.caption = this.RightLabel;
                    this._labelText.color = this._text.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                    this._labelText.Draw();
                }
                this._text.Draw();
            }
        }, {
            key: 'SetLeftBadge',
            value: function SetLeftBadge(badge) {
                this.LeftBadge = badge;
            }
        }, {
            key: 'SetRightBadge',
            value: function SetRightBadge(badge) {
                this.RightBadge = badge;
            }
        }, {
            key: 'SetRightLabel',
            value: function SetRightLabel(text) {
                this.RightLabel = text;
            }
        }, {
            key: 'BadgeToSpriteLib',
            value: function BadgeToSpriteLib(badge) {
                return "commonmenu";
            }
        }, {
            key: 'BadgeToSpriteName',
            value: function BadgeToSpriteName(badge, selected) {
                switch (badge) {
                    case enums_BadgeStyle.None:
                        return "";
                    case enums_BadgeStyle.BronzeMedal:
                        return "mp_medal_bronze";
                    case enums_BadgeStyle.GoldMedal:
                        return "mp_medal_gold";
                    case enums_BadgeStyle.SilverMedal:
                        return "medal_silver";
                    case enums_BadgeStyle.Alert:
                        return "mp_alerttriangle";
                    case enums_BadgeStyle.Crown:
                        return "mp_hostcrown";
                    case enums_BadgeStyle.Ammo:
                        return selected ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
                    case enums_BadgeStyle.Armour:
                        return selected ? "shop_armour_icon_b" : "shop_armour_icon_a";
                    case enums_BadgeStyle.Barber:
                        return selected ? "shop_barber_icon_b" : "shop_barber_icon_a";
                    case enums_BadgeStyle.Clothes:
                        return selected ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
                    case enums_BadgeStyle.Franklin:
                        return selected ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
                    case enums_BadgeStyle.Bike:
                        return selected ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
                    case enums_BadgeStyle.Car:
                        return selected ? "shop_garage_icon_b" : "shop_garage_icon_a";
                    case enums_BadgeStyle.Gun:
                        return selected ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
                    case enums_BadgeStyle.Heart:
                        return selected ? "shop_health_icon_b" : "shop_health_icon_a";
                    case enums_BadgeStyle.Lock:
                        return "shop_lock";
                    case enums_BadgeStyle.Makeup:
                        return selected ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
                    case enums_BadgeStyle.Mask:
                        return selected ? "shop_mask_icon_b" : "shop_mask_icon_a";
                    case enums_BadgeStyle.Michael:
                        return selected ? "shop_michael_icon_b" : "shop_michael_icon_a";
                    case enums_BadgeStyle.Star:
                        return "shop_new_star";
                    case enums_BadgeStyle.Tatoo:
                        return selected ? "shop_tattoos_icon_b" : "shop_tattoos_icon_";
                    case enums_BadgeStyle.Tick:
                        return "shop_tick_icon";
                    case enums_BadgeStyle.Trevor:
                        return selected ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
                    default:
                        return "";
                }
            }
        }, {
            key: 'IsBagdeWhiteSprite',
            value: function IsBagdeWhiteSprite(badge) {
                switch (badge) {
                    case enums_BadgeStyle.Lock:
                    case enums_BadgeStyle.Tick:
                    case enums_BadgeStyle.Crown:
                        return true;
                    default:
                        return false;
                }
            }
        }, {
            key: 'BadgeToColor',
            value: function BadgeToColor(badge, selected) {
                switch (badge) {
                    case enums_BadgeStyle.Lock:
                    case enums_BadgeStyle.Tick:
                    case enums_BadgeStyle.Crown:
                        return selected ? new Color(255, 0, 0, 0) : new Color(255, 255, 255, 255);
                    default:
                        return new Color(255, 255, 255, 255);
                }
            }
        }, {
            key: 'Text',
            get: function get() {
                return this._text.caption;
            },
            set: function set(v) {
                this._text.caption = v;
            }
        }]);

        return UIMenuItem_UIMenuItem;
    }();

    UIMenuItem_UIMenuItem.DefaultBackColor = Color.Empty;
    UIMenuItem_UIMenuItem.DefaultHighlightedBackColor = Color.White;
    UIMenuItem_UIMenuItem.DefaultForeColor = Color.WhiteSmoke;
    UIMenuItem_UIMenuItem.DefaultHighlightedForeColor = Color.Black;

    // CONCATENATED MODULE: ./items/UIMenuCheckboxItem.ts


    var UIMenuCheckboxItem_UIMenuCheckboxItem = function (_UIMenuItem_UIMenuIte) {
        _inherits(UIMenuCheckboxItem_UIMenuCheckboxItem, _UIMenuItem_UIMenuIte);

        function UIMenuCheckboxItem_UIMenuCheckboxItem(text) {
            var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            _classCallCheck(this, UIMenuCheckboxItem_UIMenuCheckboxItem);

            var _this5 = _possibleConstructorReturn(this, (UIMenuCheckboxItem_UIMenuCheckboxItem.__proto__ || Object.getPrototypeOf(UIMenuCheckboxItem_UIMenuCheckboxItem)).call(this, text, description));

            _this5.OnCheckedChanged = new LiteEvent();
            _this5.Checked = false;
            var y = 0;
            _this5._checkedSprite = new Sprite_Sprite("commonmenu", "shop_box_blank", new Point(410, y + 95), new Size(50, 50));
            _this5.Checked = check;
            return _this5;
        }

        _createClass(UIMenuCheckboxItem_UIMenuCheckboxItem, [{
            key: 'SetVerticalPosition',
            value: function SetVerticalPosition(y) {
                _get(UIMenuCheckboxItem_UIMenuCheckboxItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuCheckboxItem_UIMenuCheckboxItem.prototype), 'SetVerticalPosition', this).call(this, y);
                this._checkedSprite.pos = new Point(380 + this.Offset.X + this.Parent.WidthOffset, y + 138 + this.Offset.Y);
            }
        }, {
            key: 'Draw',
            value: function Draw() {
                _get(UIMenuCheckboxItem_UIMenuCheckboxItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuCheckboxItem_UIMenuCheckboxItem.prototype), 'Draw', this).call(this);
                this._checkedSprite.pos = this._checkedSprite.pos = new Point(380 + this.Offset.X + this.Parent.WidthOffset, this._checkedSprite.pos.Y);
                var isDefaultHightlitedForeColor = this.HighlightedForeColor == UIMenuItem_UIMenuItem.DefaultHighlightedForeColor;
                if (this.Selected && isDefaultHightlitedForeColor) {
                    this._checkedSprite.TextureName = this.Checked ? "shop_box_tickb" : "shop_box_blankb";
                } else {
                    this._checkedSprite.TextureName = this.Checked ? "shop_box_tick" : "shop_box_blank";
                }
                this._checkedSprite.color = this.Enabled ? this.Selected && !isDefaultHightlitedForeColor ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                this._checkedSprite.Draw();
            }
        }, {
            key: 'SetRightBadge',
            value: function SetRightBadge(badge) {
                return this;
            }
        }, {
            key: 'SetRightLabel',
            value: function SetRightLabel(text) {
                return this;
            }
        }, {
            key: 'CheckedChanged',
            get: function get() {
                return this.OnCheckedChanged.expose();
            }
        }]);

        return UIMenuCheckboxItem_UIMenuCheckboxItem;
    }(UIMenuItem_UIMenuItem);

    // CONCATENATED MODULE: ./modules/ListItem.ts

    var ListItem_ListItem = function ListItem_ListItem() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, ListItem_ListItem);

        this.Id = UUIDV4();
        this.DisplayText = text;
        this.Data = data;
    };

    // CONCATENATED MODULE: ./modules/ItemsCollection.ts

    var ItemsCollection_ItemsCollection = function () {
        function ItemsCollection_ItemsCollection(items) {
            _classCallCheck(this, ItemsCollection_ItemsCollection);

            if (items.length === 0) throw new Error("ItemsCollection cannot be empty");
            this.items = items;
        }

        _createClass(ItemsCollection_ItemsCollection, [{
            key: 'length',
            value: function length() {
                return this.items.length;
            }
        }, {
            key: 'getListItems',
            value: function getListItems() {
                var items = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item instanceof ListItem_ListItem) {
                            items.push(item);
                        } else if (typeof item == "string") {
                            items.push(new ListItem_ListItem(item.toString()));
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return items;
            }
        }]);

        return ItemsCollection_ItemsCollection;
    }();

    // CONCATENATED MODULE: ./modules/StringMeasurer.ts


    var StringMeasurer_StringMeasurer = function () {
        function StringMeasurer_StringMeasurer() {
            _classCallCheck(this, StringMeasurer_StringMeasurer);
        }

        _createClass(StringMeasurer_StringMeasurer, null, [{
            key: 'MeasureStringWidthNoConvert',
            value: function MeasureStringWidthNoConvert(input) {
                mp.game.ui.setTextEntryForWidth("STRING");
                ResText_ResText.AddLongString(input);
                mp.game.ui.setTextFont(0);
                mp.game.ui.setTextScale(0.35, 0.35);
                return mp.game.ui.getTextScreenWidth(false);
            }
        }, {
            key: 'MeasureString',
            value: function MeasureString(str) {
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                return this.MeasureStringWidthNoConvert(str) * width;
            }
        }]);

        return StringMeasurer_StringMeasurer;
    }();

    // CONCATENATED MODULE: ./items/UIMenuListItem.ts


    var UIMenuListItem_UIMenuListItem = function (_UIMenuItem_UIMenuIte2) {
        _inherits(UIMenuListItem_UIMenuListItem, _UIMenuItem_UIMenuIte2);

        function UIMenuListItem_UIMenuListItem(text) {
            var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var collection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new ItemsCollection_ItemsCollection([]);
            var startIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            _classCallCheck(this, UIMenuListItem_UIMenuListItem);

            var _this6 = _possibleConstructorReturn(this, (UIMenuListItem_UIMenuListItem.__proto__ || Object.getPrototypeOf(UIMenuListItem_UIMenuListItem)).call(this, text, description));

            _this6.currOffset = 0;
            _this6.collection = [];
            _this6.ScrollingEnabled = true;
            _this6.HoldTimeBeforeScroll = 200;
            _this6.OnListChanged = new LiteEvent();
            _this6._index = 0;
            var y = 0;
            _this6.Collection = collection.getListItems();
            _this6.Index = startIndex;
            _this6._arrowLeft = new Sprite_Sprite("commonmenu", "arrowleft", new Point(110, 105 + y), new Size(30, 30));
            _this6._arrowRight = new Sprite_Sprite("commonmenu", "arrowright", new Point(280, 105 + y), new Size(30, 30));
            _this6._itemText = new ResText_ResText("", new Point(290, y + 104), 0.35, Color.White, enums_Font.ChaletLondon, Alignment.Right);
            return _this6;
        }

        _createClass(UIMenuListItem_UIMenuListItem, [{
            key: 'setCollection',
            value: function setCollection(collection) {
                this.Collection = collection.getListItems();
            }
        }, {
            key: 'setCollectionItem',
            value: function setCollectionItem(index, item) {
                var resetSelection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                if (index > this.Collection.length) throw new Error("Index out of bounds");
                if (typeof item === "string") item = new ListItem_ListItem(item);
                this.Collection.splice(index, 1, item);
                if (resetSelection) this.Index = 0;
            }
        }, {
            key: 'SetVerticalPosition',
            value: function SetVerticalPosition(y) {
                this._arrowLeft.pos = new Point(300 + this.Offset.X + this.Parent.WidthOffset, 147 + y + this.Offset.Y);
                this._arrowRight.pos = new Point(400 + this.Offset.X + this.Parent.WidthOffset, 147 + y + this.Offset.Y);
                this._itemText.pos = new Point(300 + this.Offset.X + this.Parent.WidthOffset, y + 147 + this.Offset.Y);
                _get(UIMenuListItem_UIMenuListItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuListItem_UIMenuListItem.prototype), 'SetVerticalPosition', this).call(this, y);
            }
        }, {
            key: 'SetRightLabel',
            value: function SetRightLabel(text) {
                return this;
            }
        }, {
            key: 'SetRightBadge',
            value: function SetRightBadge(badge) {
                return this;
            }
        }, {
            key: 'Draw',
            value: function Draw() {
                _get(UIMenuListItem_UIMenuListItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuListItem_UIMenuListItem.prototype), 'Draw', this).call(this);
                var caption = this.Collection.length >= this.Index ? this.Collection[this.Index].DisplayText : " ";
                var offset = this.currOffset;
                this._itemText.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                this._itemText.caption = caption;
                this._arrowLeft.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                this._arrowRight.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
                this._arrowLeft.pos = new Point(375 - offset + this.Offset.X + this.Parent.WidthOffset, this._arrowLeft.pos.Y);
                if (this.Selected) {
                    this._arrowLeft.Draw();
                    this._arrowRight.Draw();
                    this._itemText.pos = new Point(405 + this.Offset.X + this.Parent.WidthOffset, this._itemText.pos.Y);
                } else {
                    this._itemText.pos = new Point(420 + this.Offset.X + this.Parent.WidthOffset, this._itemText.pos.Y);
                }
                this._itemText.Draw();
            }
        }, {
            key: 'Collection',
            get: function get() {
                return this.collection;
            },
            set: function set(v) {
                if (!v) throw new Error("The collection can't be null");
                this.collection = v;
            }
        }, {
            key: 'SelectedItem',
            set: function set(v) {
                var idx = this.Collection.findIndex(function (li) {
                    return li.Id === v.Id;
                });
                if (idx > 0) this.Index = idx;else this.Index = 0;
            },
            get: function get() {
                return this.Collection.length > 0 ? this.Collection[this.Index] : null;
            }
        }, {
            key: 'SelectedValue',
            get: function get() {
                return this.SelectedItem == null ? null : this.SelectedItem.Data == null ? this.SelectedItem.DisplayText : this.SelectedItem.Data;
            }
        }, {
            key: 'ListChanged',
            get: function get() {
                return this.OnListChanged.expose();
            }
        }, {
            key: 'Index',
            get: function get() {
                if (this.Collection == null) return -1;
                if (this.Collection != null && this.Collection.length == 0) return -1;
                return this._index % this.Collection.length;
            },
            set: function set(value) {
                if (this.Collection == null) return;
                if (this.Collection != null && this.Collection.length == 0) return;
                this._index = 100000 - 100000 % this.Collection.length + value;
                var caption = this.Collection.length >= this.Index ? this.Collection[this.Index].DisplayText : " ";
                this.currOffset = StringMeasurer_StringMeasurer.MeasureString(caption);
            }
        }]);

        return UIMenuListItem_UIMenuListItem;
    }(UIMenuItem_UIMenuItem);

    // CONCATENATED MODULE: ./items/UIMenuSliderItem.ts


    var UIMenuSliderItem_UIMenuSliderItem = function (_UIMenuItem_UIMenuIte3) {
        _inherits(UIMenuSliderItem_UIMenuSliderItem, _UIMenuItem_UIMenuIte3);

        _createClass(UIMenuSliderItem_UIMenuSliderItem, [{
            key: 'Index',
            get: function get() {
                return this._index % this._items.length;
            },
            set: function set(value) {
                this._index = 100000000 - 100000000 % this._items.length + value;
            }
        }]);

        function UIMenuSliderItem_UIMenuSliderItem(text, items, index) {
            var description = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var divider = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            _classCallCheck(this, UIMenuSliderItem_UIMenuSliderItem);

            var _this7 = _possibleConstructorReturn(this, (UIMenuSliderItem_UIMenuSliderItem.__proto__ || Object.getPrototypeOf(UIMenuSliderItem_UIMenuSliderItem)).call(this, text, description));

            var y = 0;
            _this7._items = items;
            _this7._arrowLeft = new Sprite_Sprite("commonmenutu", "arrowleft", new Point(0, 105 + y), new Size(15, 15));
            _this7._arrowRight = new Sprite_Sprite("commonmenutu", "arrowright", new Point(0, 105 + y), new Size(15, 15));
            _this7._rectangleBackground = new ResRectangle_ResRectangle(new Point(0, 0), new Size(150, 9), new Color(4, 32, 57, 255));
            _this7._rectangleSlider = new ResRectangle_ResRectangle(new Point(0, 0), new Size(75, 9), new Color(57, 116, 200, 255));
            if (divider) {
                _this7._rectangleDivider = new ResRectangle_ResRectangle(new Point(0, 0), new Size(2.5, 20), Color.WhiteSmoke);
            } else {
                _this7._rectangleDivider = new ResRectangle_ResRectangle(new Point(0, 0), new Size(2.5, 20), Color.Transparent);
            }
            _this7.Index = index;
            return _this7;
        }

        _createClass(UIMenuSliderItem_UIMenuSliderItem, [{
            key: 'SetVerticalPosition',
            value: function SetVerticalPosition(y) {
                this._rectangleBackground.pos = new Point(250 + this.Offset.X + this.Parent.WidthOffset, y + 158.5 + this.Offset.Y);
                this._rectangleSlider.pos = new Point(250 + this.Offset.X + this.Parent.WidthOffset, y + 158.5 + this.Offset.Y);
                this._rectangleDivider.pos = new Point(323.5 + this.Offset.X + this.Parent.WidthOffset, y + 153 + this.Offset.Y);
                this._arrowLeft.pos = new Point(235 + this.Offset.X + this.Parent.WidthOffset, 155.5 + y + this.Offset.Y);
                this._arrowRight.pos = new Point(400 + this.Offset.X + this.Parent.WidthOffset, 155.5 + y + this.Offset.Y);
                _get(UIMenuSliderItem_UIMenuSliderItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuSliderItem_UIMenuSliderItem.prototype), 'SetVerticalPosition', this).call(this, y);
            }
        }, {
            key: 'IndexToItem',
            value: function IndexToItem(index) {
                return this._items[index];
            }
        }, {
            key: 'Draw',
            value: function Draw() {
                _get(UIMenuSliderItem_UIMenuSliderItem.prototype.__proto__ || Object.getPrototypeOf(UIMenuSliderItem_UIMenuSliderItem.prototype), 'Draw', this).call(this);
                this._arrowLeft.color = this.Enabled ? this.Selected ? Color.Black : Color.WhiteSmoke : new Color(163, 159, 148);
                this._arrowRight.color = this.Enabled ? this.Selected ? Color.Black : Color.WhiteSmoke : new Color(163, 159, 148);
                var offset = (this._rectangleBackground.size.Width - this._rectangleSlider.size.Width) / (this._items.length - 1) * this.Index;
                this._rectangleSlider.pos = new Point(250 + this.Offset.X + offset + +this.Parent.WidthOffset, this._rectangleSlider.pos.Y);
                if (this.Selected) {
                    this._arrowLeft.Draw();
                    this._arrowRight.Draw();
                } else {}
                this._rectangleBackground.Draw();
                this._rectangleSlider.Draw();
                this._rectangleDivider.Draw();
            }
        }, {
            key: 'SetRightBadge',
            value: function SetRightBadge(badge) {}
        }, {
            key: 'SetRightLabel',
            value: function SetRightLabel(text) {}
        }]);

        return UIMenuSliderItem_UIMenuSliderItem;
    }(UIMenuItem_UIMenuItem);

    // CONCATENATED MODULE: ./modules/Container.ts


    var Container_Container = function (_Rectangle_Rectangle2) {
        _inherits(Container_Container, _Rectangle_Rectangle2);

        function Container_Container(pos, size, color) {
            _classCallCheck(this, Container_Container);

            var _this8 = _possibleConstructorReturn(this, (Container_Container.__proto__ || Object.getPrototypeOf(Container_Container)).call(this, pos, size, color));

            _this8.Items = [];
            return _this8;
        }

        _createClass(Container_Container, [{
            key: 'addItem',
            value: function addItem(item) {
                this.Items.push(item);
            }
        }, {
            key: 'Draw',
            value: function Draw(offset) {
                if (!this.enabled) return;
                offset = offset || new Size();
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                var w = this.size.Width / width;
                var h = this.size.Height / height;
                var x = (this.pos.X + offset.Width) / width + w * 0.5;
                var y = (this.pos.Y + offset.Height) / height + h * 0.5;
                mp.game.graphics.drawRect(x, y, w, h, this.color.R, this.color.G, this.color.B, this.color.A);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.Items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        item.Draw(new Size(this.pos.X + offset.Width, this.pos.Y + offset.Height));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }]);

        return Container_Container;
    }(Rectangle_Rectangle);

    // CONCATENATED MODULE: ./utils/Common.ts


    var Common = function () {
        function Common() {
            _classCallCheck(this, Common);
        }

        _createClass(Common, null, [{
            key: 'PlaySound',
            value: function PlaySound(audioName, audioRef) {
                mp.game.audio.playSound(-1, audioName, audioRef, false, 0, true);
            }
        }]);

        return Common;
    }();

    // CONCATENATED MODULE: ./index.ts
    /* harmony export (binding) */

    __webpack_require__.d(__webpack_exports__, "default", function () {
        return index_NativeUI;
    });

    var index_NativeUI = function () {
        function index_NativeUI(title, subtitle, offset, spriteLibrary, spriteName) {
            _classCallCheck(this, index_NativeUI);

            this.Id = UUIDV4();
            this.counterPretext = "";
            this.counterOverride = undefined;
            this.lastUpDownNavigation = 0;
            this.lastLeftRightNavigation = 0;
            this._activeItem = 1000;
            this.extraOffset = 0;
            this.WidthOffset = 0;
            this.Visible = true;
            this.MouseControlsEnabled = false;
            this._justOpened = true;
            this.safezoneOffset = new Point(0, 0);
            this.MaxItemsOnScreen = 9;
            this._maxItem = this.MaxItemsOnScreen;
            this.AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET";
            this.AUDIO_UPDOWN = "NAV_UP_DOWN";
            this.AUDIO_LEFTRIGHT = "NAV_LEFT_RIGHT";
            this.AUDIO_SELECT = "SELECT";
            this.AUDIO_BACK = "BACK";
            this.AUDIO_ERROR = "ERROR";
            this.MenuItems = [];
            this.IndexChange = new LiteEvent();
            this.ListChange = new LiteEvent();
            this.SliderChange = new LiteEvent();
            this.SliderSelect = new LiteEvent();
            this.CheckboxChange = new LiteEvent();
            this.ItemSelect = new LiteEvent();
            this.MenuOpen = new LiteEvent();
            this.MenuClose = new LiteEvent();
            this.MenuChange = new LiteEvent();
            this.MouseEdgeEnabled = true;
            if (!(offset instanceof Point)) offset = Point.Parse(offset);
            this.title = title;
            this.subtitle = subtitle;
            this.spriteLibrary = spriteLibrary || "commonmenu";
            this.spriteName = spriteName || "interaction_bgd";
            this.offset = new Point(offset.X, offset.Y);
            this.Children = new Map();
            this._mainMenu = new Container_Container(new Point(0, 0), new Size(700, 500), new Color(0, 0, 0, 0));
            this._logo = new Sprite_Sprite(this.spriteLibrary, this.spriteName, new Point(0 + this.offset.X, 0 + this.offset.Y), new Size(431, 107));
            this._mainMenu.addItem(this._title = new ResText_ResText(this.title, new Point(215 + this.offset.X, 20 + this.offset.Y), 1.15, new Color(255, 255, 255), 1, Alignment.Centered));
            if (this.subtitle !== "") {
                this._mainMenu.addItem(new ResRectangle_ResRectangle(new Point(0 + this.offset.X, 107 + this.offset.Y), new Size(431, 37), new Color(0, 0, 0, 255)));
                this._mainMenu.addItem(this._subtitle = new ResText_ResText(this.subtitle, new Point(8 + this.offset.X, 110 + this.offset.Y), 0.35, new Color(255, 255, 255), 0, Alignment.Left));
                if (this.subtitle.startsWith("~")) {
                    this.counterPretext = this.subtitle.substr(0, 3);
                }
                this._counterText = new ResText_ResText("", new Point(425 + this.offset.X, 110 + this.offset.Y), 0.35, new Color(255, 255, 255), 0, Alignment.Right);
                this.extraOffset += 37;
            }
            this._upAndDownSprite = new Sprite_Sprite("commonmenu", "shop_arrows_upanddown", new Point(190 + this.offset.X, 147 + 37 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new Size(50, 50));
            this._extraRectangleUp = new ResRectangle_ResRectangle(new Point(0 + this.offset.X, 144 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new Size(431, 18), new Color(0, 0, 0, 200));
            this._extraRectangleDown = new ResRectangle_ResRectangle(new Point(0 + this.offset.X, 144 + 18 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new Size(431, 18), new Color(0, 0, 0, 200));
            this._descriptionBar = new ResRectangle_ResRectangle(new Point(this.offset.X, 123), new Size(431, 4), Color.Black);
            this._descriptionRectangle = new Sprite_Sprite("commonmenu", "gradient_bgd", new Point(this.offset.X, 127), new Size(431, 30));
            this._descriptionText = new ResText_ResText("Description", new Point(this.offset.X + 5, 125), 0.35, new Color(255, 255, 255, 255), enums_Font.ChaletLondon, Alignment.Left);
            this._background = new Sprite_Sprite("commonmenu", "gradient_bgd", new Point(this.offset.X, 144 + this.offset.Y - 37 + this.extraOffset), new Size(290, 25));
            mp.events.add("render", this.render.bind(this));
            console.log('Created Native UI! ' + this.title);
        }

        _createClass(index_NativeUI, [{
            key: 'RecalculateDescriptionPosition',
            value: function RecalculateDescriptionPosition() {
                this._descriptionBar.pos = new Point(this.offset.X, 149 - 37 + this.extraOffset + this.offset.Y);
                this._descriptionRectangle.pos = new Point(this.offset.X, 149 - 37 + this.extraOffset + this.offset.Y);
                this._descriptionText.pos = new Point(this.offset.X + 8, 155 - 37 + this.extraOffset + this.offset.Y);
                this._descriptionBar.size = new Size(431 + this.WidthOffset, 4);
                this._descriptionRectangle.size = new Size(431 + this.WidthOffset, 30);
                var count = this.MenuItems.length;
                if (count > this.MaxItemsOnScreen + 1) count = this.MaxItemsOnScreen + 2;
                this._descriptionBar.pos = new Point(this.offset.X, 38 * count + this._descriptionBar.pos.Y);
                this._descriptionRectangle.pos = new Point(this.offset.X, 38 * count + this._descriptionRectangle.pos.Y);
                this._descriptionText.pos = new Point(this.offset.X + 8, 38 * count + this._descriptionText.pos.Y);
            }
        }, {
            key: 'SetMenuWidthOffset',
            value: function SetMenuWidthOffset(widthOffset) {
                this.WidthOffset = widthOffset;
                if (this._logo != null) {
                    this._logo.size = new Size(431 + this.WidthOffset, 107);
                }
                this._mainMenu.Items[0].pos = new Point((this.WidthOffset + this.offset.X + 431) / 2, 20 + this.offset.Y);
                if (this._counterText) {
                    this._counterText.pos = new Point(425 + this.offset.X + widthOffset, 110 + this.offset.Y);
                }
                if (this._mainMenu.Items.length >= 2) {
                    var tmp = this._mainMenu.Items[1];
                    tmp.size = new Size(431 + this.WidthOffset, 37);
                }
            }
        }, {
            key: 'AddItem',
            value: function AddItem(item) {
                if (this._justOpened) this._justOpened = false;
                item.Offset = this.offset;
                item.Parent = this;
                item.SetVerticalPosition(this.MenuItems.length * 25 - 37 + this.extraOffset);
                this.MenuItems.push(item);
                item.Description = this.FormatDescription(item.Description);
                this.RefreshIndex();
                this.RecalculateDescriptionPosition();
            }
        }, {
            key: 'RefreshIndex',
            value: function RefreshIndex() {
                if (this.MenuItems.length == 0) {
                    this._activeItem = 1000;
                    this._maxItem = this.MaxItemsOnScreen;
                    this._minItem = 0;
                    return;
                }
                for (var i = 0; i < this.MenuItems.length; i++) {
                    this.MenuItems[i].Selected = false;
                }this._activeItem = 1000 - 1000 % this.MenuItems.length;
                this._maxItem = this.MaxItemsOnScreen;
                this._minItem = 0;
            }
        }, {
            key: 'Clear',
            value: function Clear() {
                this.MenuItems = [];
                this.RecalculateDescriptionPosition();
            }
        }, {
            key: 'Open',
            value: function Open() {
                Common.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY);
                this.Visible = true;
                this._justOpened = true;
                this.MenuOpen.emit();
            }
        }, {
            key: 'Close',
            value: function Close() {
                Common.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY);
                this.Visible = false;
                this.RefreshIndex();
                this.MenuClose.emit();
            }
        }, {
            key: 'GoLeft',
            value: function GoLeft() {
                if (!(this.MenuItems[this.CurrentSelection] instanceof UIMenuListItem_UIMenuListItem) && !(this.MenuItems[this.CurrentSelection] instanceof UIMenuSliderItem_UIMenuSliderItem)) return;
                if (this.MenuItems[this.CurrentSelection] instanceof UIMenuListItem_UIMenuListItem) {
                    var it = this.MenuItems[this.CurrentSelection];
                    if (it.Collection.length == 0) return;
                    it.Index--;
                    Common.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY);
                    this.ListChange.emit(it, it.Index);
                } else if (this.MenuItems[this.CurrentSelection] instanceof UIMenuSliderItem_UIMenuSliderItem) {
                    var _it = this.MenuItems[this.CurrentSelection];
                    _it.Index = _it.Index - 1;
                    Common.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY);
                    this.SliderChange.emit(_it, _it.Index, _it.IndexToItem(_it.Index));
                }
            }
        }, {
            key: 'GoRight',
            value: function GoRight() {
                if (!(this.MenuItems[this.CurrentSelection] instanceof UIMenuListItem_UIMenuListItem) && !(this.MenuItems[this.CurrentSelection] instanceof UIMenuSliderItem_UIMenuSliderItem)) return;
                if (this.MenuItems[this.CurrentSelection] instanceof UIMenuListItem_UIMenuListItem) {
                    var it = this.MenuItems[this.CurrentSelection];
                    if (it.Collection.length == 0) return;
                    it.Index++;
                    Common.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY);
                    this.ListChange.emit(it, it.Index);
                } else if (this.MenuItems[this.CurrentSelection] instanceof UIMenuSliderItem_UIMenuSliderItem) {
                    var _it2 = this.MenuItems[this.CurrentSelection];
                    _it2.Index++;
                    Common.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY);
                    this.SliderChange.emit(_it2, _it2.Index, _it2.IndexToItem(_it2.Index));
                }
            }
        }, {
            key: 'SelectItem',
            value: function SelectItem() {
                if (!this.MenuItems[this.CurrentSelection].Enabled) {
                    Common.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY);
                    return;
                }
                var it = this.MenuItems[this.CurrentSelection];
                if (this.MenuItems[this.CurrentSelection] instanceof UIMenuCheckboxItem_UIMenuCheckboxItem) {
                    it.Checked = !it.Checked;
                    Common.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY);
                    this.CheckboxChange.emit(it, it.Checked);
                } else {
                    Common.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY);
                    this.ItemSelect.emit(it, this.CurrentSelection);
                    if (this.Children.has(it.Id)) {
                        var subMenu = this.Children.get(it.Id);
                        this.Visible = false;
                        subMenu.Visible = true;
                        subMenu._justOpened = true;
                        subMenu.MenuOpen.emit();
                        this.MenuChange.emit(subMenu, true);
                    }
                }
                it.fireEvent();
            }
        }, {
            key: 'getMousePosition',
            value: function getMousePosition() {
                var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var screenw = Screen.width;
                var screenh = Screen.height;
                var cursor = mp.gui.cursor.position;
                var _ref = [cursor[0], cursor[1]],
                    mouseX = _ref[0],
                    mouseY = _ref[1];

                if (relative) {
                    ;
                    mouseX = cursor[0] / screenw;
                    mouseY = cursor[1] / screenh;
                }return [mouseX, mouseY];
            }
        }, {
            key: 'GetScreenResolutionMantainRatio',
            value: function GetScreenResolutionMantainRatio() {
                var screenw = Screen.width;
                var screenh = Screen.height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                return new Size(width, height);
            }
        }, {
            key: 'IsMouseInBounds',
            value: function IsMouseInBounds(topLeft, boxSize) {
                var res = this.GetScreenResolutionMantainRatio();

                var _getMousePosition = this.getMousePosition(),
                    _getMousePosition2 = _slicedToArray(_getMousePosition, 2),
                    mouseX = _getMousePosition2[0],
                    mouseY = _getMousePosition2[1];

                return mouseX >= topLeft.X && mouseX <= topLeft.X + boxSize.Width && mouseY > topLeft.Y && mouseY < topLeft.Y + boxSize.Height;
            }
        }, {
            key: 'IsMouseInListItemArrows',
            value: function IsMouseInListItemArrows(item, topLeft, safezone) {
                mp.game.invoke("0x54ce8ac98e120cab".toUpperCase(), "jamyfafi");
                mp.game.ui.addTextComponentSubstringPlayerName(item.Text);
                var res = this.GetScreenResolutionMantainRatio();
                var screenw = res.Width;
                var screenh = res.Height;
                var height = 1080.0;
                var ratio = screenw / screenh;
                var width = height * ratio;
                var labelSize = mp.game.invoke("0x85f061da64ed2f67".toUpperCase(), 0) * width * 0.35;
                var labelSizeX = 5 + labelSize + 10;
                var arrowSizeX = 431 - labelSizeX;
                return this.IsMouseInBounds(topLeft, new Size(labelSizeX, 38)) ? 1 : this.IsMouseInBounds(new Point(topLeft.X + labelSizeX, topLeft.Y), new Size(arrowSizeX, 38)) ? 2 : 0;
            }
        }, {
            key: 'ProcessMouse',
            value: function ProcessMouse() {
                if (!this.Visible || this._justOpened || this.MenuItems.length == 0 || !this.MouseControlsEnabled) {
                    this.MenuItems.filter(function (i) {
                        return i.Hovered;
                    }).forEach(function (i) {
                        return i.Hovered = false;
                    });
                    return;
                }
                if (!mp.gui.cursor.visible) mp.gui.cursor.visible = true;
                var limit = this.MenuItems.length - 1;
                var counter = 0;
                if (this.MenuItems.length > this.MaxItemsOnScreen + 1) limit = this._maxItem;
                if (this.IsMouseInBounds(new Point(0, 0), new Size(30, 1080)) && this.MouseEdgeEnabled) {
                    mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading() + 5.0);
                    mp.game.ui.setCursorSprite(6);
                } else if (this.IsMouseInBounds(new Point(this.GetScreenResolutionMantainRatio().Width - 30.0, 0), new Size(30, 1080)) && this.MouseEdgeEnabled) {
                    mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading() - 5.0);
                    mp.game.ui.setCursorSprite(7);
                } else if (this.MouseEdgeEnabled) {
                    mp.game.ui.setCursorSprite(1);
                }
                for (var i = this._minItem; i <= limit; i++) {
                    var xpos = this.offset.X;
                    var ypos = this.offset.Y + 144 - 37 + this.extraOffset + counter * 38;
                    var xsize = 431 + this.WidthOffset;
                    var ysize = 38;
                    var uiMenuItem = this.MenuItems[i];
                    if (this.IsMouseInBounds(new Point(xpos, ypos), new Size(xsize, ysize))) {
                        uiMenuItem.Hovered = true;
                        if (mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) if (uiMenuItem.Selected && uiMenuItem.Enabled) {
                            if (this.MenuItems[i] instanceof UIMenuListItem_UIMenuListItem && this.IsMouseInListItemArrows(this.MenuItems[i], new Point(xpos, ypos), 0) > 0) {
                                var res = this.IsMouseInListItemArrows(this.MenuItems[i], new Point(xpos, ypos), 0);
                                switch (res) {
                                    case 1:
                                        Common.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY);
                                        this.MenuItems[i].fireEvent();
                                        this.ItemSelect.emit(this.MenuItems[i], i);
                                        break;
                                    case 2:
                                        var it = this.MenuItems[i];
                                        if ((it.Collection == null ? it.Items.Count : it.Collection.Count) > 0) {
                                            it.Index++;
                                            Common.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY);
                                            this.ListChange.emit(it, it.Index);
                                        }
                                        break;
                                }
                            } else this.SelectItem();
                        } else if (!uiMenuItem.Selected) {
                            this.CurrentSelection = i;
                            Common.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY);
                            this.IndexChange.emit(this.CurrentSelection);
                            this.SelectItem();
                        } else if (!uiMenuItem.Enabled && uiMenuItem.Selected) {
                            Common.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY);
                        }
                    } else uiMenuItem.Hovered = false;
                    counter++;
                }
                var extraY = 144 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset + this.safezoneOffset.Y;
                var extraX = this.safezoneOffset.X + this.offset.X;
                if (this.MenuItems.length <= this.MaxItemsOnScreen + 1) return;
                if (this.IsMouseInBounds(new Point(extraX, extraY), new Size(431 + this.WidthOffset, 18))) {
                    this._extraRectangleUp.color = new Color(30, 30, 30, 255);
                    if (mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) {
                        if (this.MenuItems.length > this.MaxItemsOnScreen + 1) this.GoUpOverflow();else this.GoUp();
                    }
                } else this._extraRectangleUp.color = new Color(0, 0, 0, 200);
                if (this.IsMouseInBounds(new Point(extraX, extraY + 18), new Size(431 + this.WidthOffset, 18))) {
                    this._extraRectangleDown.color = new Color(30, 30, 30, 255);
                    if (mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) {
                        if (this.MenuItems.length > this.MaxItemsOnScreen + 1) this.GoDownOverflow();else this.GoDown();
                    }
                } else this._extraRectangleDown.color = new Color(0, 0, 0, 200);
            }
        }, {
            key: 'ProcessControl',
            value: function ProcessControl() {
                if (!this.Visible) return;
                if (this._justOpened) {
                    this._justOpened = false;
                    return;
                }
                if (mp.game.controls.isControlJustReleased(0, 177)) {
                    this.GoBack();
                }
                if (this.MenuItems.length == 0) return;
                if (mp.game.controls.isControlPressed(0, 172) && this.lastUpDownNavigation + 120 < Date.now()) {
                    this.lastUpDownNavigation = Date.now();
                    if (this.MenuItems.length > this.MaxItemsOnScreen + 1) this.GoUpOverflow();else this.GoUp();
                } else if (mp.game.controls.isControlJustReleased(0, 172)) {
                    this.lastUpDownNavigation = 0;
                } else if (mp.game.controls.isControlPressed(0, 173) && this.lastUpDownNavigation + 120 < Date.now()) {
                    this.lastUpDownNavigation = Date.now();
                    if (this.MenuItems.length > this.MaxItemsOnScreen + 1) this.GoDownOverflow();else this.GoDown();
                } else if (mp.game.controls.isControlJustReleased(0, 173)) {
                    this.lastUpDownNavigation = 0;
                } else if (mp.game.controls.isControlPressed(0, 174) && this.lastLeftRightNavigation + 100 < Date.now()) {
                    this.lastLeftRightNavigation = Date.now();
                    this.GoLeft();
                } else if (mp.game.controls.isControlJustReleased(0, 174)) {
                    this.lastLeftRightNavigation = 0;
                } else if (mp.game.controls.isControlPressed(0, 175) && this.lastLeftRightNavigation + 100 < Date.now()) {
                    this.lastLeftRightNavigation = Date.now();
                    this.GoRight();
                } else if (mp.game.controls.isControlJustReleased(0, 175)) {
                    this.lastLeftRightNavigation = 0;
                } else if (mp.game.controls.isControlJustPressed(0, 201)) {
                    this.SelectItem();
                }
            }
        }, {
            key: 'FormatDescription',
            value: function FormatDescription(input) {
                if (input.length > 99) input = input.slice(0, 99);
                var maxPixelsPerLine = 425 + this.WidthOffset;
                var aggregatePixels = 0;
                var output = "";
                var words = input.split(" ");
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = words[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var word = _step3.value;

                        var offset = StringMeasurer_StringMeasurer.MeasureString(word);
                        aggregatePixels += offset;
                        if (aggregatePixels > maxPixelsPerLine) {
                            output += "\n" + word + " ";
                            aggregatePixels = offset + StringMeasurer_StringMeasurer.MeasureString(" ");
                        } else {
                            output += word + " ";
                            aggregatePixels += StringMeasurer_StringMeasurer.MeasureString(" ");
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return output;
            }
        }, {
            key: 'GoUpOverflow',
            value: function GoUpOverflow() {
                if (this.MenuItems.length <= this.MaxItemsOnScreen + 1) return;
                if (this._activeItem % this.MenuItems.length <= this._minItem) {
                    if (this._activeItem % this.MenuItems.length == 0) {
                        this._minItem = this.MenuItems.length - this.MaxItemsOnScreen - 1;
                        this._maxItem = this.MenuItems.length - 1;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                        this._activeItem = 1000 - 1000 % this.MenuItems.length;
                        this._activeItem += this.MenuItems.length - 1;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                    } else {
                        this._minItem--;
                        this._maxItem--;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                        this._activeItem--;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                    }
                } else {
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                    this._activeItem--;
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                }
                Common.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY);
                this.IndexChange.emit(this.CurrentSelection);
            }
        }, {
            key: 'GoUp',
            value: function GoUp() {
                if (this.MenuItems.length > this.MaxItemsOnScreen + 1) return;
                this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                this._activeItem--;
                this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                Common.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY);
                this.IndexChange.emit(this.CurrentSelection);
            }
        }, {
            key: 'GoDownOverflow',
            value: function GoDownOverflow() {
                if (this.MenuItems.length <= this.MaxItemsOnScreen + 1) return;
                if (this._activeItem % this.MenuItems.length >= this._maxItem) {
                    if (this._activeItem % this.MenuItems.length == this.MenuItems.length - 1) {
                        this._minItem = 0;
                        this._maxItem = this.MaxItemsOnScreen;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                        this._activeItem = 1000 - 1000 % this.MenuItems.length;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                    } else {
                        this._minItem++;
                        this._maxItem++;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                        this._activeItem++;
                        this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                    }
                } else {
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                    this._activeItem++;
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                }
                Common.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY);
                this.IndexChange.emit(this.CurrentSelection);
            }
        }, {
            key: 'GoDown',
            value: function GoDown() {
                if (this.MenuItems.length > this.MaxItemsOnScreen + 1) return;
                this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                this._activeItem++;
                this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                Common.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY);
                this.IndexChange.emit(this.CurrentSelection);
            }
        }, {
            key: 'GoBack',
            value: function GoBack() {
                Common.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY);
                this.Visible = false;
                if (this.ParentMenu != null) {
                    this.ParentMenu.Visible = true;
                    this.ParentMenu._justOpened = true;
                    this.ParentMenu.MenuOpen.emit();
                    this.MenuChange.emit(this.ParentMenu, false);
                }
                this.MenuClose.emit();
            }
        }, {
            key: 'BindMenuToItem',
            value: function BindMenuToItem(menuToBind, itemToBindTo) {
                menuToBind.ParentMenu = this;
                menuToBind.ParentItem = itemToBindTo;
                this.Children.set(itemToBindTo.Id, menuToBind);
            }
        }, {
            key: 'ReleaseMenuFromItem',
            value: function ReleaseMenuFromItem(releaseFrom) {
                if (!this.Children.has(releaseFrom.Id)) return false;
                var menu = this.Children.get(releaseFrom.Id);
                menu.ParentItem = null;
                menu.ParentMenu = null;
                this.Children.delete(releaseFrom.Id);
                return true;
            }
        }, {
            key: 'render',
            value: function render() {
                if (!this.Visible) return;
                if (this._justOpened) {
                    if (this._logo != null && !this._logo.IsTextureDictionaryLoaded) this._logo.LoadTextureDictionary();
                    if (!this._background.IsTextureDictionaryLoaded) this._background.LoadTextureDictionary();
                    if (!this._descriptionRectangle.IsTextureDictionaryLoaded) this._descriptionRectangle.LoadTextureDictionary();
                    if (!this._upAndDownSprite.IsTextureDictionaryLoaded) this._upAndDownSprite.LoadTextureDictionary();
                }
                this._mainMenu.Draw();
                this.ProcessMouse();
                this.ProcessControl();
                this._background.size = this.MenuItems.length > this.MaxItemsOnScreen + 1 ? new Size(431 + this.WidthOffset, 38 * (this.MaxItemsOnScreen + 1)) : new Size(431 + this.WidthOffset, 38 * this.MenuItems.length);
                this._background.Draw();
                if (this.MenuItems.length > 0) {
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true;
                    if (this.MenuItems[this._activeItem % this.MenuItems.length].Description.trim() !== "") {
                        this.RecalculateDescriptionPosition();
                        var descCaption = this.MenuItems[this._activeItem % this.MenuItems.length].Description;
                        this._descriptionText.caption = descCaption;
                        var numLines = this._descriptionText.caption.split("\n").length;
                        this._descriptionRectangle.size = new Size(431 + this.WidthOffset, numLines * 25 + 15);
                        this._descriptionBar.Draw();
                        this._descriptionRectangle.Draw();
                        this._descriptionText.Draw();
                    }
                }
                if (this.MenuItems.length <= this.MaxItemsOnScreen + 1) {
                    var count = 0;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = this.MenuItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _item = _step4.value;

                            _item.SetVerticalPosition(count * 38 - 37 + this.extraOffset);
                            _item.Draw();
                            count++;
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    if (this._counterText && this.counterOverride) {
                        this._counterText.caption = this.counterPretext + this.counterOverride;
                        this._counterText.Draw();
                    }
                } else {
                    var _count = 0;
                    for (var index = this._minItem; index <= this._maxItem; index++) {
                        var item = this.MenuItems[index];
                        item.SetVerticalPosition(_count * 38 - 37 + this.extraOffset);
                        item.Draw();
                        _count++;
                    }
                    this._extraRectangleUp.size = new Size(431 + this.WidthOffset, 18);
                    this._extraRectangleDown.size = new Size(431 + this.WidthOffset, 18);
                    this._upAndDownSprite.pos = new Point(190 + this.offset.X + this.WidthOffset / 2, 147 + 37 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset);
                    this._extraRectangleUp.Draw();
                    this._extraRectangleDown.Draw();
                    this._upAndDownSprite.Draw();
                    if (this._counterText) {
                        if (!this.counterOverride) {
                            var cap = this.CurrentSelection + 1 + " / " + this.MenuItems.length;
                            this._counterText.caption = this.counterPretext + cap;
                        } else {
                            this._counterText.caption = this.counterPretext + this.counterOverride;
                        }
                        this._counterText.Draw();
                    }
                }
                this._logo.Draw();
            }
        }, {
            key: 'CurrentSelection',
            get: function get() {
                return this._activeItem % this.MenuItems.length;
            },
            set: function set(v) {
                this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false;
                this._activeItem = 1000 - 1000 % this.MenuItems.length + v;
                if (this.CurrentSelection > this._maxItem) {
                    this._maxItem = this.CurrentSelection;
                    this._minItem = this.CurrentSelection - this.MaxItemsOnScreen;
                } else if (this.CurrentSelection < this._minItem) {
                    this._maxItem = this.MaxItemsOnScreen + this.CurrentSelection;
                    this._minItem = this.CurrentSelection;
                }
            }
        }, {
            key: 'Subtitle',
            set: function set(text) {
                this.subtitle = text;
                this._subtitle.caption = text;
            }
        }]);

        return index_NativeUI;
    }();

    global.NativeMenu = index_NativeUI;
    global.UIMenuItem = UIMenuItem_UIMenuItem;
    global.UIMenuListItem = UIMenuListItem_UIMenuListItem;
    global.UIMenuCheckboxItem = UIMenuCheckboxItem_UIMenuCheckboxItem;
    global.UIMenuSliderItem = UIMenuSliderItem_UIMenuSliderItem;
    global.BadgeStyle = enums_BadgeStyle;
    global.Point = Point;
    global.Size = Size;
    global.Color = Color;
    global.Font = enums_Font;
    global.ItemsCollection = ItemsCollection_ItemsCollection;
    global.ListItem = ListItem_ListItem;

    /***/
}]
/******/);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.Keys = {
    VK_LBUTTON: 0x01,
    VK_RBUTTON: 0x02,
    VK_CANCEL: 0x03,
    VK_MBUTTON: 0x04,
    VK_XBUTTON1: 0x05,
    VK_XBUTTON2: 0x06,
    VK_BACK: 0x08,
    VK_TAB: 0x09,
    VK_CLEAR: 0x0C,
    VK_RETURN: 0x0D,
    VK_SHIFT: 0x10,
    VK_CONTROL: 0x11,
    VK_MENU: 0x12,
    VK_ALT: 0x12,
    VK_PAUSE: 0x13,
    VK_CAPITAL: 0x14,
    VK_KANA: 0x15,
    VK_JUNJA: 0x17,
    VK_FINAL: 0x18,
    VK_HANJA: 0x19,
    VK_ESCAPE: 0x1B,
    VK_CONVERT: 0x1C,
    VK_NONCONVERT: 0x1D,
    VK_ACCEPT: 0x1E,
    VK_MODECHANGE: 0x1F,
    VK_SPACE: 0x20,
    VK_PRIOR: 0x21,
    VK_NEXT: 0x22,
    VK_END: 0x23,
    VK_HOME: 0x24,
    VK_LEFT: 0x25,
    VK_UP: 0x26,
    VK_RIGHT: 0x27,
    VK_DOWN: 0x28,
    VK_SELECT: 0x29,
    VK_PRINT: 0x2A,
    VK_EXECUTE: 0x2B,
    VK_SNAPSHOT: 0x2C,
    VK_INSERT: 0x2D,
    VK_DELETE: 0x2E,
    VK_HELP: 0x2F,
    VK_0: 0x30,
    VK_1: 0x31,
    VK_2: 0x32,
    VK_3: 0x33,
    VK_4: 0x34,
    VK_5: 0x35,
    VK_6: 0x36,
    VK_7: 0x37,
    VK_8: 0x38,
    VK_9: 0x39,
    VK_A: 0x41,
    VK_B: 0x42,
    VK_C: 0x43,
    VK_D: 0x44,
    VK_E: 0x45,
    VK_F: 0x46,
    VK_G: 0x47,
    VK_H: 0x48,
    VK_I: 0x49,
    VK_J: 0x4A,
    VK_K: 0x4B,
    VK_L: 0x4C,
    VK_M: 0x4D,
    VK_N: 0x4E,
    VK_O: 0x4F,
    VK_P: 0x50,
    VK_Q: 0x51,
    VK_R: 0x52,
    VK_S: 0x53,
    VK_T: 0x54,
    VK_U: 0x55,
    VK_V: 0x56,
    VK_W: 0x57,
    VK_X: 0x58,
    VK_Y: 0x59,
    VK_Z: 0x5A,
    VK_LWIN: 0x5B,
    VK_RWIN: 0x5C,
    VK_APPS: 0x5D,
    VK_SLEEP: 0x5F,
    VK_NUMPAD0: 0x60,
    VK_NUMPAD1: 0x61,
    VK_NUMPAD2: 0x62,
    VK_NUMPAD3: 0x63,
    VK_NUMPAD4: 0x64,
    VK_NUMPAD5: 0x65,
    VK_NUMPAD6: 0x66,
    VK_NUMPAD7: 0x67,
    VK_NUMPAD8: 0x68,
    VK_NUMPAD9: 0x69,
    VK_MULTIPLY: 0x6A,
    VK_ADD: 0x6B,
    VK_SEPARATOR: 0x6C,
    VK_SUBTRACT: 0x6D,
    VK_DECIMAL: 0x6E,
    VK_DIVIDE: 0x6F,
    VK_F1: 0x70,
    VK_F2: 0x71,
    VK_F3: 0x72,
    VK_F4: 0x73,
    VK_F5: 0x74,
    VK_F6: 0x75,
    VK_F7: 0x76,
    VK_F8: 0x77,
    VK_F9: 0x78,
    VK_F10: 0x79,
    VK_F11: 0x7A,
    VK_F12: 0x7B,
    VK_F13: 0x7C,
    VK_F14: 0x7D,
    VK_F15: 0x7E,
    VK_F16: 0x7F,
    VK_F17: 0x80,
    VK_F18: 0x81,
    VK_F19: 0x82,
    VK_F20: 0x83,
    VK_F21: 0x84,
    VK_F22: 0x85,
    VK_F23: 0x86,
    VK_F24: 0x87,
    VK_NUMLOCK: 0x90,
    VK_SCROLL: 0x91,
    VK_LSHIFT: 0xA0,
    VK_RSHIFT: 0xA1,
    VK_LCONTROL: 0xA2,
    VK_RCONTROL: 0xA3,
    VK_LMENU: 0xA4,
    VK_RMENU: 0xA5,
    VK_BROWSER_BACK: 0xA6,
    VK_BROWSER_FORWARD: 0xA7,
    VK_BROWSER_REFRESH: 0xA8,
    VK_BROWSER_STOP: 0xA9,
    VK_BROWSER_SEARCH: 0xAA,
    VK_BROWSER_FAVORITES: 0xAB,
    VK_BROWSER_HOME: 0xAC,
    VK_VOLUME_MUTE: 0xAD,
    VK_VOLUME_DOWN: 0xAE,
    VK_VOLUME_UP: 0xAF,
    VK_MEDIA_NEXT_TRACK: 0xB0,
    VK_MEDIA_PREV_TRACK: 0xB1,
    VK_MEDIA_STOP: 0xB2,
    VK_MEDIA_PLAY_PAUSE: 0xB3,
    VK_LAUNCH_MAIL: 0xB4,
    VK_LAUNCH_MEDIA_SELECT: 0xB5,
    VK_LAUNCH_APP1: 0xB6,
    VK_LAUNCH_APP2: 0xB7,
    VK_OEM_1: 0xBA,
    VK_OEM_PLUS: 0xBB,
    VK_OEM_COMMA: 0xBC,
    VK_OEM_MINUS: 0xBD,
    VK_OEM_PERIOD: 0xBE,
    VK_OEM_2: 0xBF,
    VK_OEM_3: 0xC0,
    VK_OEM_4: 0xDB,
    VK_OEM_5: 0xDC,
    VK_OEM_6: 0xDD,
    VK_OEM_7: 0xDE,
    VK_OEM_8: 0xDF,
    VK_OEM_102: 0xE2,
    VK_PROCESSKEY: 0xE5,
    VK_PACKET: 0xE7,
    VK_ATTN: 0xF6,
    VK_CRSEL: 0xF7,
    VK_EXSEL: 0xF8,
    VK_EREOF: 0xF9,
    VK_PLAY: 0xFA,
    VK_ZOOM: 0xFB,
    VK_NONAME: 0xFC,
    VK_PA1: 0xFD,
    VK_OEM_CLEAR: 0xFE
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.menuOpened = true;

var hudWasOpened = true;

global.menuCheck = function () {

    if (global.menuOpened) {
        //mp.gui.chat.push('menuOpen:yes');
        return true;
    }
    //mp.gui.chat.push('menuOpen:no');
    return false;
};

global.menuOpen = function () {
    var hidehud = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    mp.gui.cursor.visible = true;
    global.menuOpened = true;
    hudWasOpened = global.showhud;

    if (hidehud) mp.events.call('showHUD', false);
};

global.menuClose = function () {
    var hidehud = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


    if (hidehud) mp.events.call('showHUD', hudWasOpened);
    if (mp.gui.cursor.visible) mp.game.ui.setPauseMenuActive(false);

    mp.gui.cursor.visible = false;
    global.menuOpened = false;
};

mp.events.add("playerQuit", function (player, exitType, reason) {
    if (global.menu !== null) {
        if (player.name === global.localplayer.name) {
            global.menuClose();
            global.menu.destroy();
        }
    }
});

var alcoUI = null;
var ClubNames = {
    10: "Bahama Mamas West",
    11: "Vanila Unicorn",
    12: "Tequi-la-la",
    13: "Split Sides West Comedy Club"
};
var ClubAlcos = {
    10: ["«Martini Asti»", "«Sambuca»", "«Campari»"],
    11: ["«На корке лимона»", "«На бруснике»", "«Русский стандарт»"],
    12: ["«Asahi»", "«Midori»", "«Yamazaki»"],
    13: ["«Дживан»", "«Арарат»", "«Noyan Tapan»"]
};
var ClubDrinks = [75, 115, 150];
var selectedAlco = 0;
mp.events.add("openAlco", function (club, modief, isOwner, stock) {
    selectedAlco = 0;
    global.menuOpen();
    mp.gui.cursor.visible = false;
    var res = mp.game.graphics.getScreenActiveResolution(0, 0);
    var UIPositions = {
        RightMiddle: new global.Point(res.x - 180, res.y / 2),
        LeftMiddle: new global.Point(0, res.y / 2 - 200)
    };
    alcoUI = new global.NativeMenu("Клуб", ClubNames[club], UIPositions.LeftMiddle);

    var drinks = [' ' + ClubAlcos[club][0] + ' ' + (ClubDrinks[0] * modief).toFixed() + '$', ' ' + ClubAlcos[club][1] + ' ' + (ClubDrinks[1] * modief).toFixed() + '$', ' ' + ClubAlcos[club][2] + ' ' + (ClubDrinks[2] * modief).toFixed() + '$'];

    alcoUI.AddItem(new UIMenuListItem("Напитки", "Вы можете выбрать любой напиток", new ItemsCollection(drinks)));

    if (isOwner) {
        alcoUI.AddItem(new UIMenuItem("Инфо", '\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B: ' + stock[0] + '\n' + ClubAlcos[club][0] + ' - ' + stock[1] + '\n' + ClubAlcos[club][1] + ' - ' + stock[2] + '\n' + ClubAlcos[club][2] + ' - ' + stock[3]));
        alcoUI.AddItem(new UIMenuItem("Взять", "Взять выбранный напиток со склада"));
        alcoUI.AddItem(new UIMenuItem("Скрафтить", "Скрафтить выбранный напиток"));
        alcoUI.AddItem(new UIMenuItem("Установить цену", "Установить модификатор цены для всех продуктов (от 50% до 150%)"));
    }

    alcoUI.AddItem(new UIMenuItem("Купить", "Купить выбранный напиток"));

    var uiItem = new UIMenuItem("Закрыть", "Закрыть меню");
    uiItem.BackColor = new Color(255, 0, 0);
    alcoUI.AddItem(uiItem);

    alcoUI.ItemSelect.on(function (item) {
        if (new Date().getTime() - global.lastCheck < 100) return;
        global.lastCheck = new Date().getTime();
        if (item.Text == "Купить") {
            mp.events.callRemote('menu_alco', 0, selectedAlco);
        } else if (item.Text == "Взять") {
            mp.events.callRemote('menu_alco', 1, selectedAlco);
        } else if (item.Text == "Скрафтить") {
            mp.events.callRemote('menu_alco', 2, selectedAlco);
        } else if (item.Text == "Установить цену") {
            global.menuClose();
            alcoUI.Close();
            mp.events.callRemote('menu_alco', 3, 0);
        } else if (item.Text == "Закрыть") {
            global.menuClose();
            alcoUI.Close();
        }
    });

    alcoUI.ListChange.on(function (item, index) {
        selectedAlco = index;
    });

    alcoUI.Open();
});

// // // // //
global.input = {
    head: "",
    desc: "",
    len: "",
    cBack: "",
    set: function set(h, d, l, c) {
        this.head = h, this.desc = d;
        this.len = l, this.cBack = c;
        if (global.menuCheck()) return;
        global.menu.execute('input.set("' + this.head + '","' + this.desc + '","' + this.len + '");');
    },
    open: function open() {
        if (global.menuCheck()) return;
        global.menu.execute('input.active=1');
        global.menuOpen();
        mp.events.call('startScreenEffect', "MenuMGHeistIn", 1, true);
    },
    close: function close() {
        global.menuClose();
        global.menu.execute('input.active=0');
        mp.events.call('stopScreenEffect', "MenuMGHeistIn");
    }
};
mp.events.add('input', function (text) {
    if (input.cBack == "") return;
    if (input.cBack == "setCruise") mp.events.call('setCruiseSpeed', text);else mp.events.callRemote('inputCallback', input.cBack, text);
    input.cBack = "";
    input.close();
});
mp.events.add('openInput', function (h, d, l, c) {
    if (global.menuCheck()) return;
    input.set(h, d, l, c);
    input.open();
});
mp.events.add('closeInput', function () {
    input.close();
});

// STOCK //
mp.events.add('openStock', function (data) {
    if (global.menuCheck()) return;
    global.menu.execute('stock.count=JSON.parse(\'' + data + '\');stock.show();');
    global.menuOpen();
});
mp.events.add('closeStock', function () {
    global.menuClose();
});
mp.events.add('stockTake', function (index) {
    global.menuClose();
    switch (index) {
        case 3:
            //mats
            mp.events.callRemote('setStock', "mats");
            global.input.set("Взять маты", "Введите кол-во матов", 10, "take_stock");
            global.input.open();
            break;
        case 0:
            //cash
            mp.events.callRemote('setStock', "money");
            global.input.set("Взять деньги", "Введите кол-во денег", 10, "take_stock");
            global.input.open();
            break;
        case 1:
            //healkit
            mp.events.callRemote('setStock', "medkits");
            global.input.set("Взять аптечки", "Введите кол-во аптечек", 10, "take_stock");
            global.input.open();
            break;
        case 2:
            //weed
            mp.events.callRemote('setStock', "drugs");
            global.input.set("Взять наркотики", "Введите кол-во наркоты", 10, "take_stock");
            global.input.open();
            break;
        case 4:
            //weapons stock
            mp.events.callRemote('openWeaponStock');
            break;
    }
});
mp.events.add('stockPut', function (index) {
    global.menuClose();
    switch (index) {
        case 3:
            //mats
            mp.events.callRemote('setStock', "mats");
            global.input.set("Положить маты", "Введите кол-во матов", 10, "put_stock");
            global.input.open();
            break;
        case 0:
            //cash
            mp.events.callRemote('setStock', "money");
            global.input.set("Положить деньги", "Введите кол-во денег", 10, "put_stock");
            global.input.open();
            break;
        case 1:
            //healkit
            mp.events.callRemote('setStock', "medkits");
            global.input.set("Положить аптечки", "Введите кол-во аптечек", 10, "put_stock");
            global.input.open();
            break;
        case 2:
            //weed
            mp.events.callRemote('setStock', "drugs");
            global.input.set("Положить наркотики", "Введите кол-во наркоты", 10, "put_stock");
            global.input.open();
            break;
        case 4:
            //weapons stock
            mp.events.callRemote('openWeaponStock');
            break;
    }
});
mp.events.add('stockExit', function () {
    global.menuClose();
});
// POLICE PC //
var pcSubmenu;
mp.events.add('pcMenu', function (index) {
    switch (index) {
        case 1:
            global.menu.execute('pc.clearWanted()');
            pcSubmenu = "clearWantedLvl";
            return;
        case 2:
            global.menu.execute('pc.openCar()');
            pcSubmenu = "checkNumber";
            return;
        case 3:
            global.menu.execute('pc.openPerson()');
            pcSubmenu = "checkPerson";
            return;
        case 4:
            mp.events.callRemote('checkWantedList');
            pcSubmenu = "wantedList";
            return;
        case 5:
            global.menu.execute('pc.hide()');
            global.menuClose();
            return;
    }
});
mp.events.add('pcMenuInput', function (data) {
    mp.events.callRemote(pcSubmenu, data);
});
mp.events.add("executeWantedList", function (data) {
    global.menu.execute('pc.openWanted(\'' + data + '\')');
});
mp.events.add("executeCarInfo", function (model, holder) {
    global.menu.execute('pc.openCar("' + model + '","' + holder + '")');
});
mp.events.add("executePersonInfo", function (name, lastname, uuid, gender, wantedlvl, lic) {
    global.menu.execute('pc.openPerson("' + name + '","' + lastname + '","' + uuid + '","' + gender + '","' + wantedlvl + '","' + lic + '")');
});

mp.events.add("openPc", function () {
    if (global.menuCheck()) return;
    global.menu.execute('pc.show()');
    global.menuOpen();
});
mp.events.add("closePc", function () {
    if (global.menu !== null) {
        global.menu.execute('pc.hide()');
        global.menuClose();
    }
});
// DOCS //
mp.events.add('passport', function (data) {
    if (global.menu !== null) {
        global.menu.execute('passport.set(\'' + data + '\');');
        if (global.menuCheck()) return;
        global.menu.execute('passport.show()');
        global.menuOpen();
    }
});
mp.events.add('licenses', function (data) {
    global.menu.execute('license.set(\'' + data + '\');');
    if (global.menuCheck()) return;
    global.menu.execute('license.show()');
    global.menuOpen();
});
mp.events.add('dochide', function () {
    global.menuClose();
});

// SM DATA //
mp.events.add('policeg', function () {
    var data = ["Дубинка", "Пистолет", "SMG", "Дробовик", "Tazer", "Бронежилет", "Аптечка", "Пистолетный калибр x12", "Малый калибр x30", "Дробь x6"];
    global.openSM(4, JSON.stringify(data));
});
mp.events.add('fbiguns', function () {
    var data = ["Tazer", "Пистолет", "ПОС", "Карабин", "Снайперская винтовка", "Бронежилет", "Аптечка", "Пистолетный калибр x12", "Малый калибр x30", "Автоматный калибр x30", "Снайперский калибр x5", "Бейдж"];
    global.openSM(3, JSON.stringify(data));
});
mp.events.add('govguns', function () {
    var data = ["Tazer", "Пистолет", "Advanced Rifle", "Gusenberg Sweeper", "Бронежилет", "Аптечка", "Пистолетный калибр x12", "Малый калибр x30", "Автоматный калибр x30"];
    global.openSM(6, JSON.stringify(data));
});
mp.events.add('armyguns', function () {
    var data = ["Пистолет", "Карабин", "Боевой пулемет", "Бронежилет", "Аптечка", "Пистолетный калибр x12", "Автоматный калибр x30", "Малый калибр x100"];
    global.openSM(7, JSON.stringify(data));
});
mp.events.add('mavrshop', function (json) {
    var data = JSON.parse(json);
    global.openSM(2, JSON.stringify(data));
});
mp.events.add('gangmis', function () {
    var data = ["Угон автотранспорта", "Перевозка автотранспорта"];
    global.openSM(8, JSON.stringify(data));
});
mp.events.add('mafiamis', function () {
    var data = ["Перевозка оружия", "Перевозка денег", "Перевозка трупов"];
    global.openSM(9, JSON.stringify(data));
});
mp.events.add('shop', function (json) {
    var data = JSON.parse(json);
    global.openSM(1, JSON.stringify(data));
});

// PLAYERLIST //
var pliststate = false;
mp.keys.bind(0x77, false, function () {
    // F8
    if (global.localplayer.getVariable('IS_ADMIN') == true) {
        if (pliststate) closePlayerList();else openPlayerList();
    }
});
function openPlayerList() {
    if (global.menuCheck()) return;
    global.menuOpen();
    global.menu.execute('plist.show()');
    mp.players.forEach(function (player) {
        global.menu.execute('plist.add(' + player.getVariable('REMOTE_ID') + ',\'' + player.name + '\',0,' + player.ping + ')');
    });
    pliststate = true;
}
function closePlayerList() {
    global.menuClose();
    global.menu.execute('plist.hide()');
    pliststate = false;
}
// MATS //
/*mp.keys.bind(0x78, false, function () { // F9
    mp.events.call('matsOpen', true);
});*/
mp.events.add('matsOpen', function (isArmy, isMed) {
    if (global.menuCheck()) return;
    global.menuOpen();
    global.menu.execute('mats.show(' + isArmy + ',' + isMed + ')');
});
mp.events.add('matsL', function (act) {
    //load
    global.menuClose();
    switch (act) {
        case 1:
            global.input.set("Загрузить маты", "Введите кол-во матов", 4, "loadmats");
            global.input.open();
            break;
        case 2:
            global.input.set("Загрузить маты", "Введите кол-во матов", 4, "loadmats");
            global.input.open();
            break;
        case 3:
            global.input.set("Загрузить наркоту", "Введите кол-во наркоты", 4, "loaddrugs");
            global.input.open();
            break;
        case 4:
            global.input.set("Загрузить аптечки", "Введите кол-во аптечек", 4, "loadmedkits");
            global.input.open();
            break;
    }
});
mp.events.add('matsU', function (act) {
    //unload
    global.menuClose();
    switch (act) {
        case 1:
            global.input.set("Выгрузить маты", "Введите кол-во матов", 4, "unloadmats");
            global.input.open();
            break;
        case 2:
            global.input.set("Выгрузить маты", "Введите кол-во матов", 4, "unloadmats");
            global.input.open();
            break;
        case 3:
            global.input.set("Выгрузить наркоту", "Введите кол-во наркоты", 4, "unloaddrugs");
            global.input.open();
            break;
        case 4:
            global.input.set("Выгрузить аптечки", "Введите кол-во аптечек", 4, "unloadmedkits");
            global.input.open();
            break;
    }
});
// BODY SEARCH //
/*mp.keys.bind(0x78, false, function () { // F9
    mp.events.call('bsearchOpen', '["FirstName LastName",["Deser Eaagle"],["Water","Keys for Car"]]');
});*/
mp.events.add('bsearch', function (act) {
    global.menuClose();
    switch (act) {
        case 1:
            mp.events.callRemote('pSelected', circleEntity, "Посмотреть лицензии");
            break;
        case 2:
            mp.events.callRemote('pSelected', circleEntity, "Посмотреть паспорт");
            break;
    }
});
mp.events.add('bsearchOpen', function (data) {
    if (global.menuCheck()) return;
    global.menuOpen();
    global.menu.execute('bsearch.active=true');
    global.menu.execute('bsearch.set(\'' + data + '\')');
});
// BODY CUSTOM //
global.getCameraOffset = function (pos, angle, dist) {
    //mp.gui.chat.push(`Sin: ${Math.sin(angle)} | Cos: ${Math.cos(angle)}`);

    angle = angle * 0.0174533;

    pos.y = pos.y + dist * Math.sin(angle);
    pos.x = pos.x + dist * Math.cos(angle);

    //mp.gui.chat.push(`X: ${pos.x} | Y: ${pos.y}`);

    return pos;
};
var bodyCamValues = {
    "hair": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "beard": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "eyebrows": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "chesthair": { Angle: 0, Dist: 1, Height: 0.2 },
    "lenses": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "lipstick": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "blush": { Angle: 0, Dist: 0.5, Height: 0.7 },
    "makeup": { Angle: 0, Dist: 0.5, Height: 0.7 },

    "torso": [{ Angle: 0, Dist: 1, Height: 0.2 }, { Angle: 0, Dist: 1, Height: 0.2 }, { Angle: 0, Dist: 1, Height: 0.2 }, { Angle: 180, Dist: 1, Height: 0.2 }, { Angle: 180, Dist: 1, Height: 0.2 }, { Angle: 180, Dist: 1, Height: 0.2 }, { Angle: 180, Dist: 1, Height: 0.2 }, { Angle: 305, Dist: 1, Height: 0.2 }, { Angle: 55, Dist: 1, Height: 0.2 }],
    "head": [{ Angle: 0, Dist: 1, Height: 0.5 }, { Angle: 305, Dist: 1, Height: 0.5 }, { Angle: 55, Dist: 1, Height: 0.5 }, { Angle: 180, Dist: 1, Height: 0.5 }, { Angle: 0, Dist: 0.5, Height: 0.5 }, { Angle: 0, Dist: 0.5, Height: 0.5 }],
    "leftarm": [{ Angle: 55, Dist: 1, Height: 0.0 }, { Angle: 55, Dist: 1, Height: 0.1 }, { Angle: 55, Dist: 1, Height: 0.1 }],
    "rightarm": [{ Angle: 305, Dist: 1, Height: 0.0 }, { Angle: 305, Dist: 1, Height: 0.1 }, { Angle: 305, Dist: 1, Height: 0.1 }],
    "leftleg": [{ Angle: 55, Dist: 1, Height: -0.6 }, { Angle: 55, Dist: 1, Height: -0.6 }],
    "rightleg": [{ Angle: 305, Dist: 1, Height: -0.6 }, { Angle: 305, Dist: 1, Height: -0.6 }]
};
global.bodyCam = null;
global.bodyCamStart = new mp.Vector3(0, 0, 0);

var tattooValues = [0, 0, 0, 0, 0, 0];
var tattooIds = ["torso", "head", "leftarm", "rightarm", "leftleg", "rightleg"];

var barberValues = {};
barberValues["hair"] = { Style: 0, Color: 0 };
barberValues["beard"] = { Style: 255, Color: 0 };
barberValues["eyebrows"] = { Style: 255, Color: 0 };
barberValues["chesthair"] = { Style: 255, Color: 0 };
barberValues["lenses"] = { Style: 0, Color: 0 };
barberValues["lipstick"] = { Style: 255, Color: 0 };
barberValues["blush"] = { Style: 255, Color: 0 };
barberValues["makeup"] = { Style: 255, Color: 0 };
var barberIds = ["hair", "beard", "eyebrows", "chesthair", "lenses", "lipstick", "blush", "makeup"];

mp.events.add('barber', function (act, id, val) {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    switch (act) {
        case "buy":
            mp.events.callRemote("buyBarber", id, barberValues[id].Style, barberValues[id].Color);
            break;
        case "style":
            switch (id) {
                case "hair":
                    var gender = global.localplayer.getVariable("GENDER") ? 0 : 1;
                    barberValues["hair"].Style = hairIDList[gender][val];
                    global.localplayer.setComponentVariation(2, barberValues["hair"].Style, 0, 0);
                    global.localplayer.setHairColor(barberValues["hair"].Color, 0);
                    break;
                case "beard":
                    barberValues["beard"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(1, barberValues["beard"].Style, 100, barberValues["beard"].Color, barberValues["beard"].Color);
                    break;
                case "eyebrows":
                    barberValues["eyebrows"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(2, barberValues["eyebrows"].Style, 100, barberValues["eyebrows"].Color, barberValues["eyebrows"].Color);
                    break;
                case "chesthair":
                    barberValues["chesthair"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(10, barberValues["chesthair"].Style, 100, barberValues["chesthair"].Color, barberValues["chesthair"].Color);
                    break;
                case "lenses":
                    barberValues["lenses"].Style = val;
                    global.localplayer.setEyeColor(val);
                    break;
                case "lipstick":
                    barberValues["lipstick"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(8, barberValues["lipstick"].Style, 100, barberValues["lipstick"].Color, barberValues["lipstick"].Color);
                    break;
                case "blush":
                    barberValues["blush"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(5, barberValues["blush"].Style, 100, barberValues["blush"].Color, barberValues["blush"].Color);
                    break;
                case "makeup":
                    barberValues["makeup"].Style = val == 0 ? 255 : val - 1;
                    global.localplayer.setHeadOverlay(4, barberValues["makeup"].Style, 100, barberValues["makeup"].Color, barberValues["makeup"].Color);
                    break;

            }

            var camValues = bodyCamValues[id];
            var camPos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), global.localplayer.getRotation(2).z + 90 + camValues.Angle, camValues.Dist);

            bodyCam.setCoord(camPos.x, camPos.y, camPos.z);
            bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
            break;
        case "color":
            switch (id) {
                case "hair":
                    barberValues["hair"].Color = val;
                    global.localplayer.setComponentVariation(2, barberValues["hair"].Style, 0, 0);
                    global.localplayer.setHairColor(barberValues["hair"].Color, 0);
                    break;
                case "beard":
                    barberValues["beard"].Color = val;
                    global.localplayer.setHeadOverlay(1, barberValues["beard"].Style, 100, barberValues["beard"].Color, barberValues["beard"].Color);
                    break;
                case "eyebrows":
                    barberValues["eyebrows"].Color = val;
                    global.localplayer.setHeadOverlay(2, barberValues["eyebrows"].Style, 100, barberValues["eyebrows"].Color, barberValues["eyebrows"].Color);
                    break;
                case "chesthair":
                    barberValues["chesthair"].Color = val;
                    global.localplayer.setHeadOverlay(10, barberValues["chesthair"].Style, 100, barberValues["chesthair"].Color, barberValues["chesthair"].Color);
                    break;
                case "lipstick":
                    barberValues["lipstick"].Color = val;
                    global.localplayer.setHeadOverlay(8, barberValues["lipstick"].Style, 100, barberValues["lipstick"].Color, barberValues["lipstick"].Color);
                    break;
                case "blush":
                    barberValues["blush"].Color = val;
                    global.localplayer.setHeadOverlay(5, barberValues["blush"].Style, 100, barberValues["blush"].Color, barberValues["blush"].Color);
                    break;
            }
            break;
    }
});
mp.events.add('tattoo', function (act, id, val) {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    switch (act) {
        case "buy":
            mp.events.callRemote("buyTattoo", tattooIds.indexOf(id), tattooValues[tattooIds.indexOf(id)]);
            break;
        case "style":
            var tId = tattooIds.indexOf(id);
            tattooValues[tId] = val;

            var tattoo = tattoos[id][val];
            var hash = global.localplayer.getVariable("GENDER") ? tattoo.MaleHash : tattoo.FemaleHash;
            global.localplayer.clearDecorations();

            var playerTattoos = JSON.parse(global.localplayer.getVariable("TATTOOS"));
            for (var x = 0; x < playerTattoos[tId].length; x++) {
                // Очищаем ненужные татушки

                for (var i = 0; i < tattoo.Slots.length; i++) {

                    if (playerTattoos[tId][x].Slots.indexOf(tattoo.Slots[i]) != -1) {
                        playerTattoos[tId][x] = null;
                        break;
                    }
                }
            }

            for (var _x3 = 0; _x3 < 6; _x3++) {
                // Восстанавливаем старые татуировки игрока, кроме тех, которые занимают очищенные слоты
                if (playerTattoos[_x3] != null) for (var _i = 0; _i < playerTattoos[_x3].length; _i++) {
                    if (playerTattoos[_x3][_i] != null) global.localplayer.setDecoration(mp.game.joaat(playerTattoos[_x3][_i].Dictionary), mp.game.joaat(playerTattoos[_x3][_i].Hash));
                }
            }global.localplayer.setDecoration(mp.game.joaat(tattoo.Dictionary), mp.game.joaat(hash)); // Ну и применяем выбранную татуировку

            var camValues = bodyCamValues[id][tattoo.Slots[0]];
            var camPos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), global.localplayer.getRotation(2).z + 90 + camValues.Angle, camValues.Dist);

            bodyCam.setCoord(camPos.x, camPos.y, camPos.z);
            bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
            break;
    }
});
mp.events.add('openBody', function (isBarber, price) {
    if (global.menuCheck()) return;

    if (isBarber) {
        barberValues["hair"] = { Style: 0, Color: 0 };
        barberValues["beard"] = { Style: 255, Color: 0 };
        barberValues["eyebrows"] = { Style: 255, Color: 0 };
        barberValues["chesthair"] = { Style: 255, Color: 0 };
        barberValues["lenses"] = { Style: 0, Color: 0 };
        barberValues["lipstick"] = { Style: 255, Color: 0 };
        barberValues["blush"] = { Style: 255, Color: 0 };
        barberValues["makeup"] = { Style: 255, Color: 0 };

        for (var i = 0; i < 8; i++) {
            var id = barberIds[i];
            var bizBarberPrices = [];
            var barberSkip = [];

            for (var x = 0; x < barberPrices[id].length; x++) {
                var tempPrice = barberPrices[id][x] / 100 * price;
                bizBarberPrices[x] = tempPrice.toFixed();
            }

            mp.events.call('setBody', id, JSON.stringify(bizBarberPrices), JSON.stringify(barberSkip));
        }

        bodyCamStart = global.localplayer.position;
    } else {
        tattooValues = [0, 0, 0, 0, 0, 0];

        var gender = global.localplayer.getVariable("GENDER");

        for (var _i2 = 0; _i2 < 6; _i2++) {
            var _id = tattooIds[_i2];

            var tattooPrices = [];
            var tattooSkips = [];

            for (var _x4 = 0; _x4 < tattoos[_id].length; _x4++) {
                var _tempPrice = tattoos[_id][_x4].Price / 100 * price;
                tattooPrices[_x4] = _tempPrice.toFixed();

                var hash = gender ? tattoos[_id][_x4].MaleHash : tattoos[_id][_x4].FemaleHash;
                if (hash == "") tattooSkips.push(_x4);
            }

            bodyCamStart = new mp.Vector3(324.9798, 180.6418, 103.6665);

            mp.events.call('setBody', _id, JSON.stringify(tattooPrices), JSON.stringify(tattooSkips));
        }
    }

    var camValues = isBarber ? bodyCamValues['hair'] : bodyCamValues['torso'][0];
    var pos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), global.localplayer.getRotation(2).z + 90 + camValues.Angle, camValues.Dist);
    bodyCam = mp.cameras.new('default', pos, new mp.Vector3(0, 0, 0), 50);
    bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
    bodyCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 500, true, false);

    global.menuOpen();
    global.menu.execute('body.isBarber=' + isBarber);
    global.menu.execute('body.active=true');

    mp.events.call('client:OnShowCameraSettings', true);
});
mp.events.add('closeBody', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    global.menuClose();

    bodyCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 500, true, false);

    global.localplayer.clearDecorations();
    mp.events.callRemote("cancelBody");

    mp.events.call('client:OnShowCameraSettings', false);
});
mp.events.add('setBody', function (id, data1, data2) {
    global.menu.execute('body.set(\'' + id + '\',\'' + data1 + '\',\'' + data2 + '\')');
});
// AUTO SHOP //
/*mp.keys.bind(0x78, false, function () { // F9
    setAuto('models', JSON.stringify(autoData.testModels));
    setAuto('colors', JSON.stringify(autoData.testColors));
    setAuto('prices', JSON.stringify(autoData.testPrices));
    mp.events.call('openAuto');
});*/

var autoColors = ["Черный", "Белый", "Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый"];
var autoModels = null;

var colors = {};
colors["Черный"] = [0, 0, 0];
colors["Белый"] = [225, 225, 225];
colors["Красный"] = [230, 0, 0];
colors["Оранжевый"] = [255, 115, 0];
colors["Желтый"] = [240, 240, 0];
colors["Зеленый"] = [0, 230, 0];
colors["Голубой"] = [0, 205, 255];
colors["Синий"] = [0, 0, 230];
colors["Фиолетовый"] = [190, 60, 165];

var auto = {
    model: null,
    color: null,
    entity: null
};

mp.events.add('auto', function (act, value) {
    switch (act) {
        case "model":
            auto.model = autoModels[value];
            auto.entity.model = mp.game.joaat(autoModels[value]);

            auto.entity.setCustomPrimaryColour(colors[auto.color][0], colors[auto.color][1], colors[auto.color][2]);
            auto.entity.setCustomSecondaryColour(colors[auto.color][0], colors[auto.color][1], colors[auto.color][2]);
            auto.entity.setRotation(0, 0, -136.246, 2, true);
            break;
        case "color":
            auto.color = autoColors[value];

            auto.entity.setCustomPrimaryColour(colors[autoColors[value]][0], colors[autoColors[value]][1], colors[autoColors[value]][2]);
            auto.entity.setCustomSecondaryColour(colors[autoColors[value]][0], colors[autoColors[value]][1], colors[autoColors[value]][2]);
            break;
    }
});
mp.events.add('buyAuto', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    //mp.gui.chat.push('auto buy');

    global.menuClose();
    global.menu.execute('auto.active=0');

    mp.events.callRemote('carroomBuy', auto.model, auto.color);

    if (auto.entity == null) return;
    auto.entity.destroy();
    auto.entity = null;
});
mp.events.add('closeAuto', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    global.menuClose();
    global.menu.execute('auto.active=0');

    mp.events.callRemote('carroomCancel');

    if (auto.entity == null) return;
    auto.entity.destroy();
    auto.entity = null;
});
mp.events.add('openAuto', function (models, prices) {
    if (global.menuCheck()) return;
    autoModels = JSON.parse(models);

    setAuto('models', models);
    setAuto('colors', JSON.stringify(autoColors));
    setAuto('prices', prices);

    auto.entity = mp.vehicles.new(mp.game.joaat(autoModels[0]), new mp.Vector3(-42.79771, -1095.676, 26.0117), {
        heading: 0,
        numberPlate: 'CARROOM',
        alpha: 255,
        color: [[0, 0, 0], [0, 0, 0]],
        locked: false,
        engine: false,
        dimension: 0
    });
    auto.entity.setRotation(0, 0, -136.246, 2, true);
    auto.color = "Черный";
    auto.model = autoModels[0];

    global.menuOpen();
    global.menu.execute('auto.active=true');
});

// PETSHOP

var petModels = null;
var petHashes = null;

var pet = {
    model: null,
    entity: null,
    dimension: 0
};

function setPet(type, jsonstr) {
    global.menu.execute('petshop.' + type + '=' + jsonstr);
}
mp.events.add('petshop', function (act, value) {
    switch (act) {
        case "model":
            pet.model = petModels[value];
            if (pet.entity != null) {
                pet.entity.destroy();
                pet.entity = mp.peds.new(petHashes[value], new mp.Vector3(-758.2859, 320.9569, 175.2784), 218.8, pet.dimension);
            }
            break;
    }
});
mp.events.add('buyPet', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();

    global.menuClose();
    global.menu.execute('petshop.active=0');

    mp.events.callRemote('petshopBuy', pet.model);

    if (pet.entity == null) return;
    pet.entity.destroy();
    pet.entity = null;
});
mp.events.add('closePetshop', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    global.menuClose();
    global.menu.execute('petshop.active=0');

    mp.events.callRemote('petshopCancel');

    if (pet.entity == null) return;
    pet.entity.destroy();
    pet.entity = null;
});
mp.events.add('openPetshop', function (models, hashes, prices, dim) {
    if (global.menuCheck()) return;

    petModels = JSON.parse(models);
    petHashes = JSON.parse(hashes);

    setPet('models', models);
    setPet('hashes', hashes);
    setPet('prices', prices);

    pet.entity = mp.peds.new(petHashes[0], new mp.Vector3(-758.2859, 320.9569, 175.2784), 218.8, dim);
    pet.dimension = dim;
    global.localplayer.setRotation(0, 0, 0, 2, true);
    pet.model = petModels[0];

    global.menuOpen();
    global.menu.execute('petshop.active=true');

    cam = mp.cameras.new('default', new mp.Vector3(-755.5227, 320.0132, 177.302), new mp.Vector3(0, 0, 0), 50);
    cam.pointAtCoord(-758.2859, 320.9569, 175.7484);
    cam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
});
//
//types: models, colors, prices
function setAuto(type, jsonstr) {
    global.menu.execute('auto.' + type + '=' + jsonstr);
}

// WEAPON CRAFT //
/*mp.keys.bind(0x78, false, function () { // F9
    mp.events.call('openWCraft', 0, '[[0,1,0,1,0,1,0]]');
});*/
var wcraft = {
    tab: 0,
    frac: 0,
    data: []
};
mp.events.add('wcraft', function (act, value, sub) {
    switch (act) {
        case "cat":
            wcraft.tab = value;
            global.menu.execute('wcraft.set(' + wcraft.frac + ',' + value + ',\'' + JSON.stringify(wcraft.data[value]) + '\')');
            break;
        case "buy":
            mp.events.callRemote('wcraft', wcraft.frac, wcraft.tab, value);
            break;
        case "rangebuy":
            mp.events.callRemote('wcraftammo', wcraft.frac, value, sub);
            break;
    }
});
mp.events.add('closeWCraft', function () {
    global.menuClose();
    wcraft.top = 0;
});
mp.events.add('openWCraft', function (frac, json) {
    //mp.gui.chat.push(`${frac}:${json}`);
    wcraft.data = JSON.parse(json);
    wcraft.data[4] = [];
    wcraft.frac = frac;
    global.menu.execute('wcraft.set(' + frac + ', 0,\'' + JSON.stringify(wcraft.data[0]) + '\')');
    global.menu.execute('wcraft.active=1');
    global.menuOpen();
});
// CAM //
global.camMenu = false;

var camMenuValues = { Angle: 0, Dist: 1, Height: 0 };

mp.events.add('client:OnShowCameraSettings', function (status) {
    global.camMenu = status;
    if (global.camMenu) {
        mp.gui.emmit('window.hud.updateComponent("camerasettings", true)');
    } else {
        mp.gui.emmit('window.hud.updateComponent("camerasettings", false)');
    }
});

/*var head_rotate;

mp.events.add('render', () => {
    mp.players.local.taskLookAt(head_rotate, 20, 0, 0);
});*/

mp.events.add('client:OnCameraChanged', function (act, val) {
    switch (act) {
        case "head_rotate":
            head_rotate = mp.players.local.getOffsetFromInWorldCoords(val, 2.0, 0.6);
            break;
        case "rotate":
            camMenuValues.Angle = val;
            break;
        case "height":
            camMenuValues.Height = val;
            break;
        case "depth":
            camMenuValues.Dist = val;
            break;
    }
    var camPos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camMenuValues.Height), global.localplayer.getRotation(2).z + 90 + camMenuValues.Angle, camMenuValues.Dist);

    bodyCam.setCoord(camPos.x, camPos.y, camPos.z);
    bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camMenuValues.Height);
});
// Clothes Shop //
/*mp.keys.bind(0x78, false, function () { // F9
    setClothes('styles', JSON.stringify(["Style1","Style2","Style3"]));
    setClothes('colors', JSON.stringify(["Color1", "Color2", "Color3"]));
    setClothes('prices', JSON.stringify([9, 99, 999]));
    mp.events.call('openClothes');
});*/

var clothesCamValues = [{ Angle: 0, Dist: 0.7, Height: 0.6 }, { Angle: 0, Dist: 1.4, Height: 0.2 }, { Angle: 0, Dist: 1.4, Height: 0.2 }, { Angle: 0, Dist: 1.4, Height: -0.4 }, { Angle: 0, Dist: 1.2, Height: -0.7 }, { Angle: 0, Dist: 1, Height: -0.2 }, { Angle: 74, Dist: 1, Height: 0 }, { Angle: 0, Dist: 0.7, Height: 0.6 }, { Angle: 0, Dist: 1, Height: 0.3 }];
var clothes = {
    type: 0,
    style: 0,
    color: 0,
    colors: [0, 0, 0],
    price: 0
};
mp.events.add('clothes', function (act, value) {
    var gender = global.localplayer.getVariable("GENDER") ? 1 : 0;

    switch (act) {
        case "style":
            //mp.gui.chat.push('clothes style' + value);

            switch (clothes.type) {
                case 0:
                    var colors = clothesHats[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesHats[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setPropIndex(0, clothes.style, clothes.color, true);
                    return;
                case 1:
                    var colors = clothesTops[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesTops[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(11, clothes.style, clothes.color, 0);
                    global.localplayer.setComponentVariation(3, validTorsos[gender][clothes.style], 0, 0);
                    return;
                case 2:
                    var colors = clothesUnderwears[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesUnderwears[gender][value].Top;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(11, clothes.style, clothes.color, 0);
                    global.localplayer.setComponentVariation(3, validTorsos[gender][clothes.style], 0, 0);
                    return;
                case 3:
                    var colors = clothesLegs[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesLegs[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(4, clothes.style, clothes.color, 0);
                    return;
                case 4:
                    var colors = clothesFeets[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesFeets[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(6, clothes.style, clothes.color, 0);
                    return;
                case 5:
                    var colors = clothesGloves[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesGloves[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(3, correctGloves[gender][clothes.style][15], clothes.color, 0);
                    return;
                case 6:
                    var colors = clothesWatches[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesWatches[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setPropIndex(6, clothes.style, clothes.color, true);
                    return;
                case 7:
                    var colors = clothesGlasses[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesGlasses[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setPropIndex(1, clothes.style, clothes.color, true);
                    return;
                case 8:
                    var colors = clothesJewerly[gender][value].Colors;
                    setClothes("colors", JSON.stringify(colors));

                    clothes.style = clothesJewerly[gender][value].Variation;
                    clothes.color = colors[0];
                    clothes.colors = colors;

                    global.localplayer.setComponentVariation(7, clothes.style, clothes.color, 0);
                    return;
            }
            break;
        case "color":
            //mp.gui.chat.push('clothes color' + value);

            switch (clothes.type) {
                case 0:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setPropIndex(0, clothes.style, clothes.color, true);
                    return;
                case 1:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(11, clothes.style, clothes.color, 0);
                    return;
                case 2:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(11, clothes.style, clothes.color, 0);
                    return;
                case 3:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(4, clothes.style, clothes.color, 0);
                    return;
                case 4:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(6, clothes.style, clothes.color, 0);
                    return;
                case 5:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(3, correctGloves[gender][clothes.style][15], clothes.color, 0);
                    return;
                case 6:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setPropIndex(6, clothes.style, clothes.color, true);
                    return;
                case 7:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setPropIndex(1, clothes.style, clothes.color, true);
                    return;
                case 8:
                    clothes.color = clothes.colors[value];
                    global.localplayer.setComponentVariation(7, clothes.style, clothes.color, 0);
                    return;
            }
            break;
        case "cat":
            //category
            //some shit with 0-4 ids
            //clearClothes();

            var clothesArr = {};
            if (value == 0) clothesArr = clothesHats[gender];else if (value == 1) clothesArr = clothesTops[gender];else if (value == 2) clothesArr = clothesUnderwears[gender];else if (value == 3) clothesArr = clothesLegs[gender];else if (value == 4) clothesArr = clothesFeets[gender];else if (value == 5) clothesArr = clothesGloves[gender];else if (value == 6) clothesArr = clothesWatches[gender];else if (value == 7) clothesArr = clothesGlasses[gender];else if (value == 8) clothesArr = clothesJewerly[gender];

            var styles = [];
            var prices = [];
            var colors = clothesArr[0].Colors;

            clothesArr.forEach(function (item) {
                var tempPrice = item.Price / 100 * clothes.price;
                prices.push(tempPrice.toFixed());

                if (value == 2) styles.push(item.Top);else styles.push(item.Variation);
            });

            setClothes("styles", JSON.stringify(styles));
            setClothes("colors", JSON.stringify(colors));
            setClothes("prices", JSON.stringify(prices));

            clothes.type = value;
            clothes.style = styles[0];
            clothes.color = colors[0];
            clothes.colors = colors;

            if (value == 0) {
                global.localplayer.setPropIndex(0, clothes.style, clothes.color, true);
            } else if (value == 1 || value == 2) {
                global.localplayer.setComponentVariation(11, clothes.style, clothes.color, 0);
                global.localplayer.setComponentVariation(3, validTorsos[gender][clothes.style], 0, 0);
            } else if (value == 3) {
                global.localplayer.setComponentVariation(4, clothes.style, clothes.color, 0);
            } else if (value == 4) {
                global.localplayer.setComponentVariation(6, clothes.style, clothes.color, 0);
            } else if (value == 5) {
                global.localplayer.setComponentVariation(3, correctGloves[gender][clothes.style][15], clothes.color, 0);
            } else if (value == 6) {
                global.localplayer.setPropIndex(6, clothes.style, clothes.color, true);
            } else if (value == 7) {
                global.localplayer.setPropIndex(1, clothes.style, clothes.color, true);
            } else if (value == 8) {
                global.localplayer.setComponentVariation(7, clothes.style, clothes.color, 0);
            }

            var camValues = clothesCamValues[value];
            var camPos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), global.localplayer.getRotation(2).z + 90 + camValues.Angle, camValues.Dist);

            bodyCam.setCoord(camPos.x, camPos.y, camPos.z);
            bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
            break;
    }
});
mp.events.add('buyClothes', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote('buyClothes', clothes.type, clothes.style, clothes.color);
});
mp.events.add('closeClothes', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    global.menuClose();
    global.menu.execute('clothes.active=0');

    mp.events.call('client:OnShowCameraSettings', false);

    bodyCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 500, true, false);

    mp.events.callRemote('cancelClothes');
});
mp.events.add('openClothes', function (price) {
    if (global.menuCheck()) return;

    bodyCamStart = global.localplayer.position;
    var camValues = { Angle: global.localplayer.getRotation(2).z + 90, Dist: 1.3, Height: 0.3 };
    var pos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), camValues.Angle, camValues.Dist);
    bodyCam = mp.cameras.new('default', pos, new mp.Vector3(0, 0, 0), 50);
    bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
    bodyCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 500, true, false);

    var gender = global.localplayer.getVariable("GENDER") ? 1 : 0;

    var styles = [];
    var prices = [];
    var colors = clothesHats[gender][0].Colors;

    clothesHats[gender].forEach(function (hat) {
        var tempPrice = hat.Price / 100 * price;
        prices.push(tempPrice.toFixed());

        styles.push(hat.Variation);
    });

    setClothes("styles", JSON.stringify(styles));
    setClothes("colors", JSON.stringify(colors));
    setClothes("prices", JSON.stringify(prices));

    clothes = {
        type: 0,
        style: styles[0],
        color: colors[0],
        colors: colors,
        price: price
    };

    clearClothes();

    global.menuOpen();
    global.menu.execute('clothes.active=true');

    mp.events.call('client:OnShowCameraSettings', true);
});

function clearClothes() {
    var gender = global.localplayer.getVariable("GENDER") ? 1 : 0;

    global.localplayer.clearProp(0);
    global.localplayer.clearProp(1);
    global.localplayer.clearProp(2);
    global.localplayer.clearProp(6);
    global.localplayer.clearProp(7);

    global.localplayer.setComponentVariation(1, clothesEmpty[gender][1], 0, 0);
    global.localplayer.setComponentVariation(3, clothesEmpty[gender][3], 0, 0);
    global.localplayer.setComponentVariation(4, clothesEmpty[gender][4], 0, 0);
    global.localplayer.setComponentVariation(5, clothesEmpty[gender][5], 0, 0);
    global.localplayer.setComponentVariation(6, clothesEmpty[gender][6], 0, 0);
    global.localplayer.setComponentVariation(7, clothesEmpty[gender][7], 0, 0);
    global.localplayer.setComponentVariation(8, clothesEmpty[gender][8], 0, 0);
    global.localplayer.setComponentVariation(9, clothesEmpty[gender][9], 0, 0);
    global.localplayer.setComponentVariation(10, clothesEmpty[gender][10], 0, 0);
    global.localplayer.setComponentVariation(11, clothesEmpty[gender][11], 0, 0);
}
//types: styles, colors, prices
function setClothes(type, jsonstr) {
    global.menu.execute('clothes.' + type + '=' + jsonstr);
    if (type == 'colors') global.menu.execute('clothes.indexC=0');else if (type == 'styles') global.menu.execute('clothes.indexS=0');
}

mp.events.add('closeMasks', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    global.menuClose();
    global.menu.execute('masks.active=0');

    mp.events.call('client:OnShowCameraSettings', false);

    bodyCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 500, true, false);

    mp.events.callRemote('cancelMasks');
});
mp.events.add('masks', function (act, value) {
    switch (act) {
        case "style":
            var colors = clothesMasks[value].Colors;
            setMaskCEF("colors", JSON.stringify(colors));

            clothes.style = clothesMasks[value].Variation;
            clothes.color = colors[0];
            clothes.colors = colors;

            global.localplayer.setComponentVariation(1, clothes.style, clothes.color, 0);
            return;
        case "color":
            clothes.color = clothes.colors[value];
            global.localplayer.setComponentVariation(1, clothes.style, clothes.color, 0);
            return;
    }
});
mp.events.add('buyMasks', function () {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote('buyMasks', clothes.style, clothes.color);
});
mp.events.add('openMasks', function (price) {
    if (global.menuCheck()) return;

    bodyCamStart = global.localplayer.position;
    var camValues = { Angle: global.localplayer.getRotation(2).z + 90, Dist: 0.7, Height: 0.6 };
    var pos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), camValues.Angle, camValues.Dist);
    bodyCam = mp.cameras.new('default', pos, new mp.Vector3(0, 0, 0), 50);
    bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
    bodyCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 500, true, false);

    var styles = [];
    var prices = [];
    var colors = clothesMasks[0].Colors;

    clothesMasks.forEach(function (mask) {
        var tempPrice = mask.Price / 100 * price;
        prices.push(tempPrice.toFixed());

        styles.push(mask.Variation);
    });

    setMaskCEF("styles", JSON.stringify(styles));
    setMaskCEF("colors", JSON.stringify(colors));
    setMaskCEF("prices", JSON.stringify(prices));

    clothes = {
        type: 0,
        style: styles[0],
        color: colors[0],
        colors: colors,
        price: price
    };

    global.localplayer.setComponentVariation(1, styles[0], colors[0], 0);

    global.menuOpen();
    global.menu.execute('masks.active=true');

    mp.events.call('client:OnShowCameraSettings', true);

    global.localplayer.clearProp(0);
    global.localplayer.clearProp(1);
});

function setMaskCEF(type, jsonstr) {
    global.menu.execute('masks.' + type + '=' + jsonstr);
    if (type == 'colors') global.menu.execute('masks.indexC=0');else if (type == 'styles') global.menu.execute('masks.indexS=0');
}
// INFOBOX //
/*mp.keys.bind(0x79, false, function () { // F10
    mp.events.call('ib-open', "Помощь", 0);
});*/
mp.events.add('ib-exit', function () {
    global.menuClose();
});
mp.events.add('ib-open', function (head, id) {
    if (global.menuCheck()) return;
    global.menuOpen();

    menu.execute('infobox.set(\'' + head + '\',' + id + ')');
});

// Advert menu
var advertsactive = false;

mp.events.add('addadvert', function (id_, author_, quest_) {
    try {
        mp.gui.emmit('window.advert.addAdvert(' + id_ + ',\'' + author_ + '\',\'' + quest_ + '\', false, \'\');');
        mp.events.call('notify', 0, 2, "Пришло новое объявление!", 3000);
    } catch (e) {}
});

mp.events.add('setadvert', function (id, name) {
    try {
        mp.gui.emmit('window.advert.setStatus(' + id + ',\'' + name + '\')');
    } catch (e) {}
});

mp.events.add('deladvert', function (id) {
    try {
        mp.gui.emmit('window.advert.deleteAdvert(' + id + ')');
    } catch (e) {}
});

mp.events.add('takeadvert', function (id, r) {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote('takeadvert', id, r);
});

mp.events.add('sendadvert', function (id, a) {
    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote('sendadvert', id, a);
});

mp.events.add('exitadvert', function () {
    mp.gui.emmit('window.pages.updatePage("none");');
    global.menuClose();
    advertsactive = false;
    mp.gui.cursor.visible = false;
});

mp.keys.bind(global.Keys.VK_F7, false, function () {
    // F7 key advert menu

    if (!global.loggedin || global.chatActive || global.editing || new Date().getTime() - global.lastCheck < 1000) return;
    if (global.pFraction !== 15) return;

    global.lastCheck = new Date().getTime();
    if (!global.menuCheck()) {
        global.menuOpen(false);
        mp.gui.cursor.visible = true;
        advertsactive = true;
        mp.gui.emmit('window.pages.updatePage("adverts"),' + ('window.advert.setName(\'' + global.localplayer.name + '\');'));
    } else if (advertsactive) {
        mp.gui.emmit('window.pages.updatePage("none");');
        global.menuClose(false);
        advertsactive = false;
        mp.gui.cursor.visible = false;
    }
});
// Roulete //
mp.events.add('rouletecfg', function (a, b, c) {

    if (a == 0) mp.gui.emmit('window.roulete.startrotate(' + b + ');');else if (a == 1) {
        if (b == 0) mp.gui.emmit('window.roulete.buttonstate(0,2);');
    } else if (a == 2) mp.gui.emmit('window.roulete.timercfg(' + b + ',' + c + ');');else if (a == 3) mp.gui.emmit('window.roulete.updatebank(' + b + ');');else if (a == 4) mp.gui.emmit('window.roulete.wonmoney(' + b + ',' + c + ');');else if (a == 5) {
        mp.gui.emmit('window.pages.updateDynamicPage("none")');
        mp.events.callRemote("End", 0);
        global.menuClose();
        mp.gui.cursor.visible = false;
    }
});

mp.events.add('startroulete', function (a, b, c) {
    global.menuOpen();
    mp.gui.cursor.visible = true;
    mp.gui.emmit('window.pages.updateDynamicPage("roulete"),' + ('window.roulete.timercfg(' + a + ',' + b + '),') + ('window.roulete.updatebank(' + c + ');'));
});

mp.events.add('placedbet', function (a, b, c) {
    if (new Date().getTime() - global.lastCheck < 100) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote("PlacedBet", a, b, c);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var reportactive = false;

mp.events.add('addreport', function (id_, author_, quest_) {
    mp.gui.emmit('addReport(' + id_ + ',\'' + author_ + '\',\'' + quest_ + '\', false, \'\')');
    mp.events.call('notify', 0, 2, "Пришел новый репорт!", 3000);
});

mp.events.add('setreport', function (id, name) {
    mp.gui.emmit('setStatus(' + id + ', \'' + name + '\')');
});

mp.events.add('delreport', function (id) {
    mp.gui.emmit('deleteReport(' + id + ')');
});

mp.events.add('takereport', function (id, r) {
    mp.events.callRemote('takereport', id, r);
});

mp.events.add('sendreport', function (id, a) {
    mp.events.callRemote('sendreport', id, a);
});

mp.events.add('exitreport', function () {
    global.menuClose();
    reportactive = false;
    mp.gui.cursor.visible = false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var lscSpeed = 0;
var lscBrakes = 0;
var lscBoost = 0;
var lscСlutch = 0;
var lscPage = 'home';
var lscSettedMod = -1;
var lscSettedWheelType = 0;
var lscSelected = -1;
var lscRGB = { r: 0, g: 0, b: 0 };
var lscPrimary = { r: 0, g: 0, b: 0 };
var lscSecondary = { r: 0, g: 0, b: 0 };
var lscNeon = { r: 0, g: 0, b: 0 };
var opened = false;
var priceMod = 1;
var isBike = false;
var modelPriceMod = 1;
var carName = "";

var categoryIds = {
    "PAGE_MUFFLER": 0,
    "PAGE_SIDESKIRT": 1,
    "PAGE_HOOD": 2,
    "PAGE_SPOILER": 3,
    "PAGE_LATTICE": 4,
    "PAGE_WINGS": 5,
    "PAGE_ROOF": 6,
    "PAGE_FLAME": 7,
    "bamper_menu_front": 8,
    "bamper_menu_back": 9,
    "engine_menu": 10,
    "turbo_menu": 11,
    "horn_menu": 12,
    "transmission_menu": 13,
    "glasses_menu": 14,
    "suspention_menu": 15,
    "brakes_menu": 16,
    "lights_menu": 17,
    "numbers_menu": 18,
    "wheels_menu": 19,
    "paint_menu": 20
};

// Switch global page //
mp.events.add('tpage', function (id) {
    global.afkSecondsCount = 0;

    if (id == "PAGE_HOME") {
        setTimeout(function () {
            mp.gui.emmit("disable(" + JSON.stringify(toDisable) + ");");
        }, 150);
        global.localplayer.vehicle.setHeading(148.9986);

        var camFrom = tunCam;
        tunCam = mp.cameras.new('default', new mp.Vector3(-333.7966, -137.409, 40.58963), new mp.Vector3(0, 0, 0), 60);
        tunCam.pointAtCoord(-338.7966, -137.409, 37.88963);
        tunCam.setActiveWithInterp(camFrom.handle, 500, 1, 1);

        if (lscPage == "numbers_menu") {
            global.localplayer.vehicle.setNumberPlateTextIndex(lscSettedMod);
        } else if (lscPage == "glasses_menu") {
            global.localplayer.vehicle.setWindowTint(lscSettedMod);
        } else if (lscPage != "paint_menu") {
            if (lscPage == "turbo_menu") global.localplayer.vehicle.toggleMod(18, false);else if (lscPage == "lights_menu") {
                mp.game.invoke('0xE41033B25D003A07', global.localplayer.vehicle.handle, 0);
                global.localplayer.vehicle.setLights(false);
            } else if (lscPage == "wheels_menu") global.localplayer.vehicle.setWheelType(lscSettedWheelType);

            if (categoryModsIds[lscPage] == undefined) return;
            global.localplayer.vehicle.setMod(categoryModsIds[lscPage], lscSettedMod);
        }
    } else if (categoryIds[id] != undefined) {
        var camFrom = tunCam;
        tunCam = mp.cameras.new('default', categoryPositions[categoryIds[id]].CamPosition, new mp.Vector3(0, 0, 0), 60);
        tunCam.pointAtCoord(-338.7966, -137.409, 37.88963);
        tunCam.setActiveWithInterp(camFrom.handle, 500, 1, 1);

        global.localplayer.vehicle.setHeading(categoryPositions[categoryIds[id]].CarHeading);

        if (id == "numbers_menu") {
            lscSettedMod = global.localplayer.vehicle.getNumberPlateTextIndex();
        } else if (id == "glasses_menu") {
            lscSettedMod = global.localplayer.vehicle.getWindowTint();
        } else if (id == "paint_menu") {
            if (lscPage != "home") {
                mp.events.call("hideColorp");
                global.localplayer.vehicle.setCustomPrimaryColour(lscPrimary.r, lscPrimary.g, lscPrimary.b);
                global.localplayer.vehicle.setCustomSecondaryColour(lscSecondary.r, lscSecondary.g, lscSecondary.b);
                global.localplayer.vehicle.setNeonLightsColour(lscNeon.r, lscNeon.g, lscNeon.b);
            } else {
                lscPrimary = global.localplayer.vehicle.getCustomPrimaryColour(1, 1, 1);
                lscSecondary = global.localplayer.vehicle.getCustomSecondaryColour(1, 1, 1);
                lscNeon = global.localplayer.vehicle.getNeonLightsColour(1, 1, 1);
            }
        } else {
            if (lscPage == "home") {
                if (id == "lights_menu") {
                    global.localplayer.vehicle.setLights(true);
                    if (id >= 0) mp.game.invoke('0xE41033B25D003A07', global.localplayer.vehicle.handle, lscSettedMod);
                } else if (id == "wheels_menu") lscSettedWheelType = global.localplayer.vehicle.getWheelType();
                lscSettedMod = global.localplayer.vehicle.getMod(categoryModsIds[id]);
            }
        }

        if (categoryIds[id] <= 9) {
            var elements = [];
            if (tuningConf[carName][categoryIds[id]] != undefined) {
                global.tuningConf[carName][categoryIds[id]].forEach(function (element) {
                    var price = element.Item3 * priceMod;
                    elements.push(["" + element.Item1, element.Item2, price.toFixed()]);
                });
                setTimeout(function () {
                    mp.gui.emmit("add(" + JSON.stringify(elements) + ")");
                }, 150);
            } else mp.events.call('notify', 1, 4, "Этот раздел недоступен для данного авто.", 3000);
        } else if (categoryIds[id] <= 18) {
            var prices = [];
            for (var key in global.tuningStandart[categoryIds[id]]) {
                var price = global.tuningStandart[categoryIds[id]][key] * modelPriceMod * priceMod;
                prices.push(["" + key, price.toFixed()]);
            }
            setTimeout(function () {
                mp.gui.emmit("price(" + JSON.stringify(prices) + ")");
            }, 150);
        }
    } else if (wheelsTypes[id] != undefined) {
        global.localplayer.vehicle.setWheelType(wheelsTypes[id]);
        var prices = [];
        for (var key in global.tuningWheels[wheelsTypes[id]]) {
            var price = global.tuningWheels[wheelsTypes[id]][key] * priceMod;
            prices.push(["" + key, price.toFixed()]);
        }
        setTimeout(function () {
            mp.gui.emmit("price(" + JSON.stringify(prices) + ")");
        }, 150);
    } else if (id == "paint_menu_one" || id == "paint_menu_two") {
        var price = 5000 * priceMod;
        var prices = ["buy", price.toFixed()];
        setTimeout(function () {
            mp.gui.emmit("price(" + JSON.stringify(prices) + ")");
        }, 150);
        mp.events.call("showColorp");
    } else if (id == "paint_menu_three") {
        var price = 250000 * priceMod;
        var prices = ["buy", price.toFixed()];
        setTimeout(function () {
            mp.gui.emmit("price(" + JSON.stringify(prices) + ")");
        }, 150);
        if (!isBike) mp.events.call("showColorp");
    }
    if (toDisable.includes(id)) {
        mp.events.call('tpage', "home");
        mp.events.call('notify', 1, 4, "Этот раздел недоступен для Вашего транспорта.", 3000);
    }

    setTimeout(function () {
        mp.events.call('tupd');
    }, 150);
    lscPage = id;
});

mp.events.add('hideTun', function () {
    mp.gui.emmit('window.pages.updateDynamicPage("")');
});

mp.events.add('exitTun', function () {
    mp.gui.emmit('window.pages.updateDynamicPage("")');
    global.menuClose();
    tunCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 500, true, false);
    mp.events.callRemote('exitTuning');
    opened = false;
});

// Forced update //
mp.events.add('tupd', function () {
    lscSpeed = (mp.game.vehicle.getVehicleModelMaxSpeed(global.localplayer.vehicle.model) / 1.2).toFixed();
    lscBrakes = global.localplayer.vehicle.getMaxBraking() * 100;
    lscBoost = global.localplayer.vehicle.getAcceleration() * 100;
    lscСlutch = global.localplayer.vehicle.getMaxTraction() * 10;
    mp.gui.emmit("window.tuning_lsc.setVehicleStats(" + lscSpeed + "," + lscBrakes + "," + lscBoost + "," + lscСlutch + ")");
});
// Click on element //
mp.events.add('tclk', function (id) {
    global.afkSecondsCount = 0;
    if (id == undefined) return;

    id = parseInt(id);
    var setted = false;
    switch (lscPage) {
        case "muffler_menu":
            if (vehicleComponents.Muffler == id) setted = true;
            break;
        case "sideskirt_menu":
            if (vehicleComponents.SideSkirt == id) setted = true;
            break;
        case "hood_menu":
            if (vehicleComponents.Hood == id) setted = true;
            break;
        case "spoiler_menu":
            if (vehicleComponents.Spoiler == id) setted = true;
            break;
        case "lattice_menu":
            if (vehicleComponents.Lattice == id) setted = true;
            break;
        case "wings_menu":
            if (vehicleComponents.Wings == id) setted = true;
            break;
        case "roof_menu":
            if (vehicleComponents.Roof == id) setted = true;
            break;
        case "flame_menu":
            if (vehicleComponents.Vinyls == id) setted = true;
            break;
        case "bamper_menu_front":
            if (vehicleComponents.FrontBumper == id) setted = true;
            break;
        case "bamper_menu_back":
            if (vehicleComponents.RearBumper == id) setted = true;
            break;
        case "engine_menu":
            if (vehicleComponents.Engine == id) setted = true;
            break;
        case "turbo_menu":
            if (vehicleComponents.Turbo == id) setted = true;
            break;
        case "horn_menu":
            if (vehicleComponents.Horn == id) setted = true;
            break;
        case "transmission_menu":
            if (vehicleComponents.Transmission == id) setted = true;
            break;
        case "glasses_menu":
            if (vehicleComponents.WindowTint == id) setted = true;
            break;
        case "suspention_menu":
            if (vehicleComponents.Suspension == id) setted = true;
            break;
        case "brakes_menu":
            if (vehicleComponents.Brakes == id) setted = true;
            break;
        case "lights_menu":
            if (vehicleComponents.Headlights == id) setted = true;
            break;
        case "numbers_menu":
            if (vehicleComponents.NumberPlate == id) setted = true;
            break;
        case "wheels_exclusive":
        case "wheels_lowrider":
        case "wheels_musclecar":
        case "wheels_4x4":
        case "wheels_sport":
        case "wheels_4x4_2":
        case "wheels_tuner":
            if (vehicleComponents.WheelsType == wheelsTypes[lscPage] && vehicleComponents.Wheels == id) setted = true;
            break;
    }

    if (setted) mp.events.call('notify', 1, 9, "У Вас уже установлена данная модификация", 3000);else {
        mp.gui.emmit('window.pages.updateDynamicPage("")');
        opened = false;
        lscSelected = id;

        if (lscPage === "paint_menu_one" || lscPage === "paint_menu_two" || lscPage === "paint_menu_three") mp.events.call("hideColorp");

        var title = lscPage === "paint_menu_one" || lscPage === "paint_menu_two" || lscPage === "paint_menu_three" ? "Вы действительно хотите покрасить машину в данный цвет?" : "Вы действительно хотите установить данную модификацию?";
        mp.events.call('openDialog', 'tuningbuy', title);
    }
});
// Hover on element //
mp.events.add('thov', function (id) {
    global.afkSecondsCount = 0;
    if (lscPage === "wheels_menu") return;

    if (lscPage == "numbers_menu") {
        global.localplayer.vehicle.setNumberPlateTextIndex(parseInt(id));
    } else if (lscPage == "glasses_menu") {
        global.localplayer.vehicle.setWindowTint(parseInt(id));
    } else if (lscPage == "horn_menu") {
        global.localplayer.vehicle.startHorn(1000, hornNames[id], false);
    } else if (lscPage == "lights_menu") {
        global.localplayer.vehicle.setLights(true);
        if (id >= 0) {
            global.localplayer.vehicle.setMod(22, 0);
            mp.game.invoke('0xE41033B25D003A07', global.localplayer.vehicle.handle, parseInt(id));
        } else global.localplayer.vehicle.setMod(22, -1);
    } else {
        if (categoryModsIds[lscPage] != undefined) {
            if (lscPage == "turbo_menu") global.localplayer.vehicle.toggleMod(18, true);
            global.localplayer.vehicle.setMod(categoryModsIds[lscPage], parseInt(id));
            mp.events.call('tupd');
        } else if (wheelsTypes[lscPage] != undefined) {
            global.localplayer.vehicle.setMod(23, parseInt(id));
        }
    }
});
// Buy element //
mp.events.add('tunbuy', function (state) {
    global.afkSecondsCount = 0;
    if (state) {
        if (wheelsTypes[lscPage] != undefined) mp.events.callRemote('buyTuning', 19, lscSelected, wheelsTypes[lscPage]);else if (lscPage === "paint_menu_one" || lscPage === "paint_menu_two" || lscPage === "paint_menu_three") {
            var paintType;
            if (lscPage === "paint_menu_one") paintType = 0;else if (lscPage === "paint_menu_two") paintType = 1;else if (lscPage === "paint_menu_three") paintType = 2;
            if (paintType == 2 && isBike) {
                mp.events.call('notify', 1, 4, "Этот раздел недоступен для мотоциклов.", 3000);
                mp.gui.emmit('window.pages.updateDynamicPage("tuning_lsc")');
                opened = true;
            } else mp.events.callRemote('buyTuning', 20, paintType, lscRGB.r, lscRGB.g, lscRGB.b);
        } else mp.events.callRemote('buyTuning', categoryIds[lscPage], lscSelected, -1);
    } else {
        mp.gui.emmit('window.pages.updateDynamicPage("tuning_lsc")');
        opened = true;
        if (lscPage == "numbers_menu") {
            global.localplayer.vehicle.setNumberPlateTextIndex(lscSettedMod);
        } else if (lscPage == "glasses_menu") {
            global.localplayer.vehicle.setWindowTint(lscSettedMod);
        } else if (lscPage == "paint_menu_one") {
            global.localplayer.vehicle.setCustomPrimaryColour(lscPrimary.r, lscPrimary.g, lscPrimary.b);
        } else if (lscPage == "paint_menu_two") {
            global.localplayer.vehicle.setCustomSecondaryColour(lscSecondary.r, lscSecondary.g, lscSecondary.b);
        } else if (lscPage == "paint_menu_three") {
            global.localplayer.vehicle.setNeonLightsColour(lscNeon.r, lscNeon.g, lscNeon.b);
        } else {
            if (lscPage == "turbo_menu") global.localplayer.vehicle.toggleMod(18, false);

            if (categoryModsIds[lscPage] == undefined) return;
            global.localplayer.vehicle.setMod(categoryModsIds[lscPage], lscSettedMod);
        }
    }
});
mp.events.add('tunBuySuccess', function (id) {
    global.afkSecondsCount = 0;
    mp.gui.emmit('window.pages.updateDynamicPage("tuning_lsc")');
    opened = true;
    if (id != -2) {

        lscSettedMod = id;
        if (wheelsTypes[lscPage] != undefined) lscSettedWheelType = global.localplayer.vehicle.getWheelType();else if (lscPage == "paint_menu_one") {
            mp.events.call("showColorp");
            lscPrimary = global.localplayer.vehicle.getCustomPrimaryColour(1, 1, 1);
        } else if (lscPage == "paint_menu_two") {
            mp.events.call("showColorp");
            lscSecondary = global.localplayer.vehicle.getCustomSecondaryColour(1, 1, 1);
        } else if (lscPage == "paint_menu_three") {
            mp.events.call("showColorp");
            lscNeon = global.localplayer.vehicle.getNeonLightsColour(1, 1, 1);
        }
    }
});
mp.events.add('tunColor', function (c) {
    if (!opened) return;
    global.afkSecondsCount = 0;
    if (lscPage == "paint_menu_one") {
        global.localplayer.vehicle.setCustomPrimaryColour(c.r, c.g, c.b);
        lscRGB = { r: c.r, g: c.g, b: c.b };
    } else if (lscPage == "paint_menu_two") {
        global.localplayer.vehicle.setCustomSecondaryColour(c.r, c.g, c.b);
        lscRGB = { r: c.r, g: c.g, b: c.b };
    } else if (lscPage == "paint_menu_three") {
        global.localplayer.vehicle.setNeonLightsColour(c.r, c.g, c.b);
        lscRGB = { r: c.r, g: c.g, b: c.b };
    }
});
var tunCam = null;
var categoryPositions = [{ 'CarHeading': 85.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 85.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.08963) }, { 'CarHeading': 160.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 42.08963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 85.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.58963) }, { 'CarHeading': 265.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 85.0, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 38.88963) }, { 'CarHeading': 148.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 39.28963) }, { 'CarHeading': 160.9986, 'CamPosition': new mp.Vector3(-333.7966, -137.409, 40.08963) }];

var categoryModsIds = {
    "muffler_menu": 4,
    "sideskirt_menu": 3,
    "hood_menu": 7,
    "spoiler_menu": 0,
    "lattice_menu": 6,
    "wings_menu": 8,
    "roof_menu": 10,
    "flame_menu": 48,
    "bamper_menu_front": 1,
    "bamper_menu_back": 2,
    "engine_menu": 11,
    "turbo_menu": 18,
    "transmission_menu": 13,
    "suspention_menu": 15,
    "brakes_menu": 12,
    "lights_menu": 22,
    "horn_menu": 14,
    "wheels_menu": 23
};
var categoryMods = [{ Name: "muffler_menu", Index: 4 }, { Name: "sideskirt_menu", Index: 3 }, { Name: "hood_menu", Index: 7 }, { Name: "spoiler_menu", Index: 0 }, { Name: "lattice_menu", Index: 6 }, { Name: "wings_menu", Index: 8 }, { Name: "roof_menu", Index: 10 }, { Name: "flame_menu", Index: 48 }, { Name: "bamper_menu", Index: 1 }];
var hornNames = {
    "-1": "HORN_STOCK",
    "0": "HORN_TRUCK",
    "1": "HORN_POLICE",
    "2": "HORN_CLOWN"
};
var wheelsTypes = {
    "wheels_exclusive": 7,
    "wheels_lowrider": 2,
    "wheels_musclecar": 1,
    "wheels_4x4": 3,
    "wheels_sport": 0,
    "wheels_4x4_2": 4,
    "wheels_tuner": 5
};
var toDisable = ["armor_menu"];
var vehicleComponents = {};
mp.events.add('tuningUpd', function (components) {
    vehicleComponents = JSON.parse(components);
});
mp.events.add('openTun', function (priceModief, carModel, modelPriceModief, components, vehclass) {
    global.afkSecondsCount = 0;
    opened = true;
    global.menuOpen();
    toDisable = ["armor_menu", "protection_menu"];
    categoryMods.forEach(function (element) {
        if (global.localplayer.vehicle.getNumMods(element.Index) <= 0) toDisable.push(element.Name);
    });
    isBike = false;

    if (vehclass == 8) {
        isBike = true;
        toDisable = ["armor_menu", "protection_menu", "muffler_menu", "sideskirt_menu", "hood_menu", "spoiler_menu", "lattice_menu", "wings_menu", "roof_menu", "flame_menu", "bamper_menu", "turbo_menu", "transmission_menu", "suspention_menu", "horn_menu", "wheels_menu", "glasses_menu", "paint_menu_three"];
    }

    mp.gui.emmit("disable(" + JSON.stringify(toDisable) + ");");
    mp.events.call('tupd');
    mp.gui.emmit('window.pages.updateDynamicPage("tuning_lsc")');

    priceMod = priceModief / 100;
    modelPriceMod = modelPriceModief;
    carName = carModel;

    tunCam = mp.cameras.new('default', new mp.Vector3(-333.7966, -137.409, 40.58963), new mp.Vector3(0, 0, 0), 60);
    tunCam.pointAtCoord(-338.7966, -137.409, 37.88963);
    tunCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 500, true, false);

    vehicleComponents = JSON.parse(components);
});

mp.events.add('tuningSeatsCheck', function () {
    var veh = global.localplayer.vehicle;
    for (var i = 0; i < 7; i++) {
        if (veh.getPedInSeat(i) !== 0) {
            mp.events.call('notify', 4, 9, 'Попросите выйти всех пассажиров', 3000);
            return;
        }
    }mp.events.callRemote('tuningSeatsCheck');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.afkSecondsCount = 0;

setInterval(function () {
    if (!global.menuOpened) {

        global.afkSecondsCount++;
        if (global.afkSecondsCount >= 900) {
            if (localplayer.getVariable('IS_ADMIN') == true) global.afkSecondsCount = 0;else {
                mp.gui.chat.push('Вы были исключены из игры за AFK более 15 минут.');
                mp.events.callRemote('kickclient');
            }
        }
    }
}, 1000);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var validTorsoIDs = [
// male
[0, 0, 2, 14, 14, 5, 14, 14, 8, 0, 14, 15, 12],
// female
[0, 5, 2, 3, 4, 4, 5, 5, 5, 0]];

var outClothes = 1;
var pants = 0;
var shoes = 1;

var gender = true;
var father = 0;
var mother = 21;
var similarity = 0.5;
var skin = 0.5;

var features = [];
for (var i = 0; i < 20; i++) {
    features[i] = 0.0;
}var hair = 0;
var hairColor = 0;
var eyeColor = 0;

var appearance = [];
for (var i = 0; i < 11; i++) {
    appearance[i] = 255;
}function updateCharacterParents() {
    global.localplayer.setHeadBlendData(mother, father, 0, mother, father, 0, similarity, skin, 0.0, true);
}

function updateCharacterHairAndColors() {
    var currentGender = gender ? 0 : 1;
    // hair
    global.localplayer.setComponentVariation(2, hair, 0, 0);
    global.localplayer.setHairColor(hairColor, 0);

    // appearance colors
    global.localplayer.setHeadOverlayColor(2, 1, hairColor, 100); // eyebrow
    global.localplayer.setHeadOverlayColor(1, 1, hairColor, 100); // beard
    global.localplayer.setHeadOverlayColor(10, 1, hairColor, 100); // chesthair

    // eye color
    global.localplayer.setEyeColor(eyeColor);
}

function updateAppearance() {
    for (var i = 0; i < 11; i++) {
        global.localplayer.setHeadOverlay(i, appearance[i], 100, 0, 0);
    }
}

function updateClothes() {
    global.localplayer.setComponentVariation(11, outClothes, 1, 0);
    global.localplayer.setComponentVariation(4, pants, 1, 0);
    global.localplayer.setComponentVariation(6, shoes, 1, 0);
    global.localplayer.setComponentVariation(8, 15, 0, 0);
    var currentGender = gender ? 0 : 1;
    global.localplayer.setComponentVariation(3, validTorsoIDs[currentGender][outClothes], 0, 0);
}

mp.events.add('client:OnCustomizationChangeGender', function (param) {
    gender = param == "men" ? true : false;
    if (gender) {
        global.localplayer.model = mp.game.joaat('mp_m_freemode_01');

        outClothes = 1;
        pants = 0;
        shoes = 1;
    } else {
        global.localplayer.model = mp.game.joaat('mp_f_freemode_01');

        outClothes = 5;
        pants = 0;
        shoes = 3;
    }

    appearance[1] = 255;

    updateCharacterParents();
    updateAppearance();
    updateCharacterHairAndColors();
    updateClothes();
    for (var i = 0; i < 20; i++) {
        global.localplayer.setFaceFeature(i, features[i]);
    }
});

mp.events.add('client:OnCustomizationChanged', function (param, value) {

    var lvl = parseFloat(value);
    switch (param) {
        case "similar":
            similarity = lvl;
            updateCharacterParents();
            return;
        case "skin":
            skin = lvl;
            updateCharacterParents();
            return;
        case "noseWidth":
            global.localplayer.setFaceFeature(0, lvl);features[0] = lvl;return;
        case "noseHeight":
            global.localplayer.setFaceFeature(1, lvl);features[1] = lvl;return;
        case "noseTipLength":
            global.localplayer.setFaceFeature(2, lvl);features[2] = lvl;return;
        case "noseDepth":
            global.localplayer.setFaceFeature(3, lvl);features[3] = lvl;return;
        case "noseTipHeight":
            global.localplayer.setFaceFeature(4, lvl);features[4] = lvl;return;
        case "noseBroke":
            global.localplayer.setFaceFeature(5, lvl);features[5] = lvl;return;
        case "eyebrowHeight":
            global.localplayer.setFaceFeature(6, lvl);features[6] = lvl;return;
        case "eyebrowDepth":
            global.localplayer.setFaceFeature(7, lvl);features[7] = lvl;return;
        case "cheekboneHeight":
            global.localplayer.setFaceFeature(8, lvl);features[8] = lvl;return;
        case "cheekboneWidth":
            global.localplayer.setFaceFeature(9, lvl);features[9] = lvl;return;
        case "cheekDepth":
            global.localplayer.setFaceFeature(10, lvl);features[10] = lvl;return;
        case "eyeScale":
            global.localplayer.setFaceFeature(11, lvl);features[11] = lvl;return;
        case "lipThickness":
            global.localplayer.setFaceFeature(12, lvl);features[12] = lvl;return;
        case "jawWidth":
            global.localplayer.setFaceFeature(13, lvl);features[13] = lvl;return;
        case "jawShape":
            global.localplayer.setFaceFeature(14, lvl);features[14] = lvl;return;
        case "chinHeight":
            global.localplayer.setFaceFeature(15, lvl);features[15] = lvl;return;
        case "chinDepth":
            global.localplayer.setFaceFeature(16, lvl);features[16] = lvl;return;
        case "chinWidth":
            global.localplayer.setFaceFeature(17, lvl);features[17] = lvl;return;
        case "chinIndent":
            global.localplayer.setFaceFeature(18, lvl);features[18] = lvl;return;
        case "neck":
            global.localplayer.setFaceFeature(19, lvl);features[19] = lvl;return;
        case "father":
            father = value;
            updateCharacterParents();
            return;
        case "mother":
            mother = value;
            updateCharacterParents();
            return;
        case "hair":
            hair = value;
            updateCharacterHairAndColors();
            return;
        case "eyebrows":
            appearance[2] = value;
            updateAppearance();
            return;
        case "beard":
            appearance[1] = value;
            updateAppearance();
            return;
        case "hairColor":
            hairColor = value;
            updateCharacterHairAndColors();
            return;
        case "eyeColor":
            eyeColor = value;
            updateCharacterHairAndColors();
            return;
    }
});

mp.events.add('client:OnFinishCreateCharacter', function () {
    if (new Date().getTime() - global.lastCheck < 1000) return;

    global.lastCheck = new Date().getTime();

    mp.game.graphics.startScreenEffect("MinigameTransitionIn", 0, false);
    var currentGender = gender ? 0 : 1;

    var appearance_values = [];
    for (var i = 0; i < 11; i++) {
        appearance_values.push({ Value: appearance[i], Opacity: 100 });
    }var hair_or_colors = [];
    hair_or_colors.push(hair);
    hair_or_colors.push(hairColor);
    hair_or_colors.push(0);
    hair_or_colors.push(hairColor);
    hair_or_colors.push(hairColor);
    hair_or_colors.push(eyeColor);
    hair_or_colors.push(0);
    hair_or_colors.push(0);
    hair_or_colors.push(hairColor);

    setTimeout(function () {
        mp.events.callRemote("SaveCharacter", currentGender, father, mother, similarity, skin, JSON.stringify(features), JSON.stringify(appearance_values), JSON.stringify(hair_or_colors));
    }, 5000);
});

mp.events.add('CreatorCamera', function () {
    global.localplayer.freezePosition(true);
    global.localplayer.setRotation(0.0, 0.0, -185.0, 2, true);

    bodyCamStart = global.localplayer.position;
    var camValues = { Angle: global.localplayer.getRotation(2).z + 90, Dist: 0.6, Height: 0.6 };
    var pos = global.getCameraOffset(new mp.Vector3(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height), camValues.Angle, camValues.Dist);
    bodyCam = mp.cameras.new('default', pos, new mp.Vector3(0, 0, 0), 50);
    bodyCam.pointAtCoord(bodyCamStart.x, bodyCamStart.y, bodyCamStart.z + camValues.Height);
    bodyCam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 500, true, false);

    updateCharacterParents();
    for (var i = 0; i < 20; i++) {
        global.localplayer.setFaceFeature(i, 0.0);
    }updateCharacterHairAndColors();
    updateAppearance();
    updateClothes();

    global.localplayer.taskPlayAnim("amb@world_human_guard_patrol@male@base", "base", 8.0, 1, -1, 1, 0.0, false, false, false);

    mp.gui.emmit('window.authentication.switchToCustomization()');

    global.menuOpen();
    mp.events.call('client:OnShowCameraSettings', true);
});

mp.events.add('DestroyCamera', function () {
    if (bodyCam == null) return;
    bodyCam.setActive(false);
    bodyCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 3000, true, true);

    global.menuClose();
    bodyCam = null;

    mp.events.call('client:OnShowCameraSettings', false);
    mp.gui.emmit('window.customization.switchToGame()');

    global.localplayer.stopAnim("amb@world_human_guard_patrol@male@base", "base", 0.0);
    global.localplayer.freezePosition(false);

    mp.events.call('showHUD', true);
    mp.events.call('showAltTabHint');

    global.loggedin = true;
});

mp.events.add('entityStreamIn', function (entity) {
    if (entity.type !== 'player') return;

    if (entity.getVariable('HAT_DATA') != undefined) {
        var data = JSON.parse(entity.getVariable('HAT_DATA'));
        if (data[0] != -1) entity.setPropIndex(0, data[0], data[1], true);
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.entity = null;
global.nearestObject = null;

var lastEntCheck = 0;
var checkInterval = 200;

var backlightColor = [196, 17, 21];

var blockcontrols = false;
global.cuffed = false;
var hasmoney = false;
var isInSafeZone = false;

var lastCuffUpdate = new Date().getTime();

function getLookingAtEntity() {
    var startPosition = global.localplayer.getBoneCoords(12844, 0.5, 0, 0);
    var resolution = mp.game.graphics.getScreenActiveResolution(1, 1);
    var secondPoint = mp.game.graphics.screen2dToWorld3d([resolution.x / 2, resolution.y / 2, 2 | 4 | 8]);
    if (secondPoint == undefined) return null;

    startPosition.z -= 0.3;
    var result = mp.raycasting.testPointToPoint(startPosition, secondPoint, localplayer, 2 | 4 | 8 | 16);

    if (typeof result !== 'undefined') {
        if (typeof result.entity.type === 'undefined') return null;
        if (result.entity.type == 'object' && result.entity.getVariable('TYPE') == undefined) return null;

        var entPos = result.entity.position;
        var lPos = global.localplayer.position;
        if (mp.game.gameplay.getDistanceBetweenCoords(entPos.x, entPos.y, entPos.z, lPos.x, lPos.y, lPos.z, true) > 8) return null;
        return result.entity;
    }
    return null;
}

function getNearestObjects() {

    var tempO = null;
    if (global.localplayer.isInAnyVehicle(false)) {
        var players = mp.players.toArray();
        players.forEach(function (player) {
            var posL = global.localplayer.position;
            var posO = player.position;
            var distance = mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, posO.x, posO.y, posO.z, true);
            if (localplayer != player && global.localplayer.dimension === player.dimension && distance < 2) {
                if (tempO === null) tempO = player;else if (mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, posO.x, posO.y, posO.z, true) < mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, tempO.position.x, tempO.position.y, tempO.position.z, true)) tempO = player;
            }
        });
    } else {
        var objects = mp.objects.toArray();
        objects.forEach(function (object) {
            var posL = global.localplayer.position;
            var posO = object.position;
            var distance = mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, posO.x, posO.y, posO.z, true);
            if (object.getVariable('TYPE') != undefined && global.localplayer.dimension === object.dimension && distance < 3) {
                if (tempO === null) tempO = object;else if (mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, posO.x, posO.y, posO.z, true) < mp.game.gameplay.getDistanceBetweenCoords(posL.x, posL.y, posL.z, tempO.position.x, tempO.position.y, tempO.position.z, true)) tempO = object;
            }
        });
    }
    nearestObject = tempO;
}

mp.events.add('blockMove', function (argument) {
    blockcontrols = argument;
});

mp.events.add('CUFFED', function (argument) {
    cuffed = argument;
});

mp.events.add('hasMoney', function (argument) {
    hasmoney = argument;
    if (!argument) global.localplayer.setEnableHandcuffs(false);
});

mp.events.add('safeZone', function (argument) {
    isInSafeZone = argument;
});

mp.keys.bind(global.Keys.VK_G, false, function () {
    // G key
    if (global.menuCheck() || global.localplayer.getVariable('InDeath') == true && !global.localplayer.isInAnyVehicle(false)) return;
    if (global.circleOpen) {
        global.CloseCircle();
        return;
    }
    if (!global.loggedin || global.chatActive || entity == null || new Date().getTime() - lastCheck < 1000) return;
    switch (entity.type) {
        case "object":
            if (entity && mp.objects.exists(entity)) {
                mp.events.callRemote('oSelected', entity);
            }
            entity = null;
            return;
        case "player":
            mp.gui.cursor.visible = true;
            global.OpenCircle('Игрок', 0);
            return;
        case "vehicle":
            mp.gui.cursor.visible = true;
            global.OpenCircle('Машина', 0);
            return;
    }
    lastCheck = new Date().getTime();
});

mp.keys.bind(global.Keys.VK_F2, false, function () {
    // F2 key
    if (global.menuCheck() || global.localplayer.getVariable('InDeath') == true) return;
    // player
    if (global.circleOpen) {
        global.CloseCircle();
        return;
    }
    if (!global.loggedin || global.chatActive || nearestObject == null || new Date().getTime() - lastCheck < 1000) return;

    if (nearestObject && nearestObject.type == 'object' && mp.objects.exists(nearestObject)) {
        mp.events.callRemote('oSelected', nearestObject);
    } else if (nearestObject && mp.players.exists(nearestObject)) {
        entity = nearestObject;
        mp.gui.cursor.visible = true;
        global.OpenCircle('Игрок', 0);
    }

    lastCheck = new Date().getTime();
});

var truckorderveh = null;

mp.events.add('SetOrderTruck', function (vehicle) {
    try {
        if (truckorderveh == null) truckorderveh = vehicle;else truckorderveh = null;
    } catch (e) {}
});

mp.events.add('render', function () {
    try {
        if (!global.loggedin) return;
        if (global.pressedraw) {
            mp.game.graphics.drawText('\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \'E\' \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F', [0.10, 0.75], {
                font: 0,
                color: [255, 255, 255, 185],
                scale: [0.35, 0.35],
                outline: true
            });
        }
        if (global.pedsaying != null) {
            var pos = global.pedsaying.getBoneCoords(12844, 0.5, 0, 0);
            mp.game.graphics.drawText(global.pedtext, [pos.x, pos.y, pos.z + 0.1], {
                font: 0,
                color: [255, 255, 255, 185],
                scale: [0.35, 0.35],
                outline: true
            });
            if (global.pedtext2 != null) {
                var _pos = global.pedsaying.getBoneCoords(12844, 0.5, 0, 0);
                mp.game.graphics.drawText(global.pedtext2, [_pos.x, _pos.y, _pos.z + 0.017], {
                    font: 0,
                    color: [255, 255, 255, 185],
                    scale: [0.35, 0.35],
                    outline: true
                });
            }
        }
        if (!global.admingm) global.localplayer.setInvincible(false);
        if (global.localplayer.isSprinting() || global.localplayer.isOnAnyBike()) mp.game.player.restoreStamina(100);
        mp.game.player.setLockonRangeOverride(1.5);
        mp.game.controls.disableControlAction(1, global.Inputs.CINEMATIC_SLOWMO, true); // Фикс slow-mo режима
        mp.game.controls.disableControlAction(1, global.Inputs.ENTER_CHEAT_CODE, true);
        // thanks to kemperrr
        if (mp.game.invoke(getNative('IS_CUTSCENE_ACTIVE'))) {
            mp.game.invoke(getNative('STOP_CUTSCENE_IMMEDIATELY'));
        }

        if (mp.game.invoke(getNative('GET_RANDOM_EVENT_FLAG'))) {
            mp.game.invoke(getNative('SET_RANDOM_EVENT_FLAG'), false);
        }

        if (mp.game.invoke(getNative('GET_MISSION_FLAG'))) {
            mp.game.invoke(getNative('SET_MISSION_FLAG'), false);
        }

        if (pocketEnabled) {
            mp.game.controls.disableControlAction(2, global.Inputs.NEXT_CAMERA, true);
        }

        if (blockcontrols) {
            mp.game.controls.disableAllControlActions(2);
            mp.game.controls.enableControlAction(2, global.Inputs.LOOK_LR, true);
            mp.game.controls.enableControlAction(2, global.Inputs.LOOK_UD, true);
            mp.game.controls.enableControlAction(2, global.Inputs.MOVE_LR, true);
            mp.game.controls.enableControlAction(2, global.Inputs.MOVE_UD, true);
            mp.game.controls.enableControlAction(2, global.Inputs.MOVE_UP_ONLY, true);
        }
        if (hasmoney) {
            global.localplayer.setEnableHandcuffs(true);
        }
        if (isInSafeZone) {
            mp.game.controls.disableControlAction(2, 24, true);
            mp.game.controls.disableControlAction(2, 69, true);
            mp.game.controls.disableControlAction(2, 70, true);
            mp.game.controls.disableControlAction(2, 92, true);
            mp.game.controls.disableControlAction(2, 114, true);
            mp.game.controls.disableControlAction(2, 121, true);
            mp.game.controls.disableControlAction(2, 140, true);
            mp.game.controls.disableControlAction(2, 141, true);
            mp.game.controls.disableControlAction(2, 142, true);
            mp.game.controls.disableControlAction(2, 257, true);
            mp.game.controls.disableControlAction(2, 263, true);
            mp.game.controls.disableControlAction(2, 264, true);
            mp.game.controls.disableControlAction(2, 331, true);
        }
        if (mp.keys.isDown(32) && cuffed && new Date().getTime() - lastCuffUpdate >= 3000) {
            mp.events.callRemote("cuffUpdate");
            lastCuffUpdate = new Date().getTime();
        }

        if (!global.localplayer.isInAnyVehicle(false) && !global.localplayer.isDead()) {
            if (!global.circleOpen) entity = getLookingAtEntity();
            getNearestObjects();
            if (entity != null && entity.getVariable('INVISIBLE') == true) entity = null;
        } else {
            getNearestObjects();
            if (entity != nearestObject) entity = null;
        }

        if (nearestObject != null && (entity == null || entity.type != "object")) {
            mp.game.graphics.drawText("F2", [nearestObject.position.x, nearestObject.position.y, nearestObject.position.z], {
                font: 0,
                color: [255, 255, 255, 185],
                scale: [0.4, 0.4],
                outline: true
            });
        }
        if (entity != null && !global.localplayer.isInAnyVehicle(false)) {
            if (truckorderveh == null || entity != truckorderveh) {
                mp.game.graphics.drawText("G", [entity.position.x, entity.position.y, entity.position.z], {
                    font: 0,
                    color: [255, 255, 255, 185],
                    scale: [0.4, 0.4],
                    outline: true
                });
            } else if (entity == truckorderveh) {
                mp.game.graphics.drawText("Ваш Заказ", [entity.position.x, entity.position.y, entity.position.z], {
                    font: 1,
                    color: [255, 255, 255, 255],
                    scale: [1.2, 1.2],
                    outline: true
                });
            }
        }
    } catch (e) {
        mp.game.graphics.notify('RE:' + e.toString());
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var cam = mp.cameras.new('default', new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), false);
var effect = '';
global.loggedin = false;
global.lastCheck = 0;
global.chatLastCheck = 0;
global.pocketEnabled = false;

//var emscol = mp.colshapes.newSphere(264.5199, -1352.684, 23.446, 50, 0);

var Peds = [{ Hash: -39239064, Pos: new mp.Vector3(1395.184, 3613.144, 34.9892), Angle: 270.0 }, // Caleb Baker
{ Hash: -1176698112, Pos: new mp.Vector3(166.6278, 2229.249, 90.73845), Angle: 47.0 }, // Matthew Allen
{ Hash: 1161072059, Pos: new mp.Vector3(2887.687, 4387.17, 50.65578), Angle: 174.0 }, // Owen Nelson
{ Hash: -1398552374, Pos: new mp.Vector3(2192.614, 5596.246, 53.75177), Angle: 318.0 }, // Daniel Roberts
{ Hash: -459818001, Pos: new mp.Vector3(-215.4299, 6445.921, 31.30351), Angle: 262.0 }, // Michael Turner
{ Hash: 0x9D0087A8, Pos: new mp.Vector3(480.9385, -1302.576, 29.24353), Angle: 224.0 }, // jimmylishman
{ Hash: 1706635382, Pos: new mp.Vector3(-222.5464, -1617.449, 34.86932), Angle: 309.2058 }, // Lamar_Davis
{ Hash: 588969535, Pos: new mp.Vector3(85.79006, -1957.156, 20.74745), Angle: 320.4474 }, // Carl_Ballard
{ Hash: -812470807, Pos: new mp.Vector3(485.6168, -1529.195, 29.28829), Angle: 56.19691 }, // Chiraq_Bloody
{ Hash: 653210662, Pos: new mp.Vector3(1408.224, -1486.415, 60.65733), Angle: 192.2974 }, // Riki_Veronas
{ Hash: 663522487, Pos: new mp.Vector3(892.2745, -2172.252, 32.28627), Angle: 172.3141 }, // Santano_Amorales
{ Hash: 645279998, Pos: new mp.Vector3(-113.9224, 985.793, 235.754), Angle: 110.9234 }, // Vladimir_Medvedev
{ Hash: -236444766, Pos: new mp.Vector3(-1811.368, 438.4105, 128.7074), Angle: 348.107 }, // Kaha_Panosyan
{ Hash: -1427838341, Pos: new mp.Vector3(-1549.287, -89.35114, 54.92917), Angle: 7.874235 }, // Jotaro_Josuke
{ Hash: -2034368986, Pos: new mp.Vector3(1392.098, 1155.892, 114.4433), Angle: 82.24557 }, // Solomon_Gambino
{ Hash: -1920001264, Pos: new mp.Vector3(452.2527, -993.119, 30.68958), Angle: 357.7483 }, // Alonzo_Harris
{ Hash: 368603149, Pos: new mp.Vector3(441.169, -978.3074, 30.6896), Angle: 160.1411 }, // Nancy_Spungen
{ Hash: 1581098148, Pos: new mp.Vector3(454.121, -980.0575, 30.68959), Angle: 86.12 }, // Bones_Bulldog
{ Hash: 941695432, Pos: new mp.Vector3(149.1317, -758.3485, 242.152), Angle: 66.82055 }, //  Steve_Hain
{ Hash: 1558115333, Pos: new mp.Vector3(120.0836, -726.7773, 242.152), Angle: 248.3546 }, // Michael Bisping
{ Hash: 1925237458, Pos: new mp.Vector3(-2347.958, 3268.936, 32.81076), Angle: 240.8822 }, // Ronny_Pain
{ Hash: 988062523, Pos: new mp.Vector3(253.9357, 228.9332, 101.6832), Angle: 250.3564 }, // Anthony_Young
{ Hash: 2120901815, Pos: new mp.Vector3(262.7953, 220.5285, 101.6832), Angle: 337.26 }, // Lorens_Hope
{ Hash: 826475330, Pos: new mp.Vector3(247.6933, 219.5379, 106.2869), Angle: 65.78249 }, // Heady_Hunter
{ Hash: -1420211530, Pos: new mp.Vector3(251.4247, -1346.499, 24.5378), Angle: 223.6044 }, // Bdesma_Katsuni
{ Hash: 1092080539, Pos: new mp.Vector3(262.3232, -1359.772, 24.53779), Angle: 49.42155 }, // Steve_Hobs
{ Hash: -1306051250, Pos: new mp.Vector3(257.5671, -1344.612, 24.54937), Angle: 229.3922 }, // Billy_Bob
{ Hash: -907676309, Pos: new mp.Vector3(724.8585, 134.1029, 80.95643), Angle: 245.0083 }, // Ronny_Bolls
{ Hash: 940330470, Pos: new mp.Vector3(458.7059, -995.118, 25.35196), Angle: 176.8092 }, // Rashkovsky
{ Hash: 1596003233, Pos: new mp.Vector3(459.7471, -1000.333, 24.91329), Angle: 177.2829 }];

/*mp.colshapes.forEach( 
	(colshape) => {
		if(colshape == emscol) mp.gui.chat.push("You are near EMS");
	}
);*/

setTimeout(function () {
    Peds.forEach(function (ped) {
        mp.peds.new(ped.Hash, ped.Pos, ped.Angle, 0);
    });
}, 10000);

mp.game.gameplay.disableAutomaticRespawn(true);
mp.game.gameplay.ignoreNextRestart(true);
mp.game.gameplay.setFadeInAfterDeathArrest(false);
mp.game.gameplay.setFadeOutAfterDeath(false);
mp.game.gameplay.setFadeInAfterLoad(false);

mp.events.add('freeze', function (toggle) {
    localplayer.freezePosition(toggle);
});

mp.events.add('destroyCamera', function () {
    cam.destroy();
    mp.game.cam.renderScriptCams(false, false, 3000, true, true);
});

mp.events.add('carRoom', function () {
    cam = mp.cameras.new('default', new mp.Vector3(-42.3758, -1101.672, 27.52235), new mp.Vector3(0, 0, 0), 50);
    cam.pointAtCoord(-42.79771, -1095.676, 26.0117);
    cam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
});

mp.events.add('screenFadeOut', function (duration) {
    mp.game.cam.doScreenFadeOut(duration);
});

mp.events.add('screenFadeIn', function (duration) {
    mp.game.cam.doScreenFadeIn(duration);
});

var lastScreenEffect = "";
mp.events.add('startScreenEffect', function (effectName, duration, looped) {
    try {
        lastScreenEffect = effectName;
        mp.game.graphics.startScreenEffect(effectName, duration, looped);
    } catch (e) {}
});

mp.events.add('stopScreenEffect', function (effectName) {
    try {
        var effect = effectName == undefined ? lastScreenEffect : effectName;
        mp.game.graphics.stopScreenEffect(effect);
    } catch (e) {}
});

mp.events.add('stopAndStartScreenEffect', function (stopEffect, startEffect, duration, looped) {
    try {
        mp.game.graphics.stopScreenEffect(stopEffect);
        mp.game.graphics.startScreenEffect(startEffect, duration, looped);
    } catch (e) {}
});

mp.events.add('setHUDVisible', function (arg) {
    mp.game.ui.displayHud(arg);
    mp.gui.chat.show(arg);
    mp.game.ui.displayRadar(arg);
});

mp.events.add('setPocketEnabled', function (state) {
    pocketEnabled = state;
    if (state) {
        mp.gui.execute("fx.set('inpocket')");
        mp.game.invoke(getNative("SET_FOLLOW_PED_CAM_VIEW_MODE"), 4);
    } else {
        mp.gui.execute("fx.reset()");
    }
});

mp.keys.bind(Keys.VK_Y, false, function () {
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    mp.events.callRemote('acceptPressed');
    lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_N, false, function () {
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    mp.events.callRemote('cancelPressed');
    lastCheck = new Date().getTime();
});

mp.events.add('connected', function () {
    mp.game.ui.displayHud(false);
    cam = mp.cameras.new('default', startCamPos, startCamRot, 90.0);
    cam.setActive(true);
    mp.game.graphics.startScreenEffect('SwitchSceneMichael', 5000, false);
    var effect = 'SwitchSceneMichael';
});

mp.events.add('ready', function () {
    mp.game.ui.displayHud(true);
    //cam.setActive(false);
    //mp.game.graphics.stopScreenEffect(effect);
});

mp.events.add('kick', function (notify) {
    mp.events.call('notify', 4, 9, notify, 10000);
    mp.events.callRemote('kickclient');
});

mp.events.add('loggedIn', function () {
    loggedin = true;
});

mp.events.add('setFollow', function (toggle, entity) {
    if (toggle) {
        if (entity && mp.players.exists(entity)) localplayer.taskFollowToOffsetOf(entity.handle, 0, 0, 0, 1, -1, 1, true);
    } else localplayer.clearTasks();
});

setInterval(function () {
    if (localplayer.getArmour() <= 0 && localplayer.getVariable('HASARMOR') === true) {
        mp.events.callRemote('deletearmor');
    }
}, 600);

mp.keys.bind(Keys.VK_U, false, function () {
    // Animations selector
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    if (localplayer.isInAnyVehicle(true)) return;
    OpenCircle("Категории", 0);
});

mp.keys.bind(Keys.VK_E, false, function () {
    // E key
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    mp.events.callRemote('interactionPressed');
    lastCheck = new Date().getTime();
    global.acheat.pos();
});

mp.keys.bind(Keys.VK_L, false, function () {
    // L key
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    mp.events.callRemote('lockCarPressed');
    lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_LEFT, true, function () {
    if (mp.gui.cursor.visible || !loggedin) return;
    if (localplayer.vehicle) {
        if (localplayer.vehicle.getPedInSeat(-1) != localplayer.handle) return;
        if (new Date().getTime() - lastCheck > 500) {
            lastCheck = new Date().getTime();
            if (localplayer.vehicle.getVariable('leftlight') == true) mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 0, 0);else mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 1, 0);
        }
    }
});

mp.keys.bind(Keys.VK_RIGHT, true, function () {
    if (mp.gui.cursor.visible || !loggedin) return;
    if (localplayer.vehicle) {
        if (localplayer.vehicle.getPedInSeat(-1) != localplayer.handle) return;
        if (new Date().getTime() - lastCheck > 500) {
            lastCheck = new Date().getTime();
            if (localplayer.vehicle.getVariable('rightlight') == true) mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 0, 0);else mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 0, 1);
        }
    }
});

mp.keys.bind(Keys.VK_DOWN, true, function () {
    if (mp.gui.cursor.visible || !loggedin) return;
    if (localplayer.vehicle) {
        if (localplayer.vehicle.getPedInSeat(-1) != localplayer.handle) return;
        if (new Date().getTime() - lastCheck > 500) {
            lastCheck = new Date().getTime();
            if (localplayer.vehicle.getVariable('leftlight') == true && localplayer.vehicle.getVariable('rightlight') == true) mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 0, 0);else mp.events.callRemote("VehStream_SetIndicatorLightsData", localplayer.vehicle, 1, 1);
        }
    }
});

mp.keys.bind(Keys.VK_B, false, function () {
    // B key
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 400 || global.menuOpened) return;
    if (localplayer.isInAnyVehicle(false) && localplayer.vehicle.getSpeed() <= 3) {
        lastCheck = new Date().getTime();
        mp.events.callRemote('engineCarPressed');
    }
});

mp.keys.bind(Keys.VK_M, false, function () {
    // M key
    if (!loggedin || chatActive || editing || global.menuCheck() || cuffed || localplayer.getVariable('InDeath') == true) return;
    mp.events.callRemote('openPlayerMenu');
    lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_X, false, function () {
    // X key
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    mp.events.callRemote('playerPressCuffBut');
    lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_Z, false, function () {
    // Z key
    if (!loggedin || chatActive || editing || new Date().getTime() - lastCheck < 1000 || global.menuOpened) return;
    if (localplayer.vehicle) {
        if (localplayer.vehicle.getPedInSeat(-1) != localplayer.handle) CheckMyWaypoint();else {
            if (localplayer.vehicle.getClass() == 18) mp.events.callRemote('syncSirenSound', localplayer.vehicle);
        }
    } else mp.events.callRemote('playerPressFollowBut');
    lastCheck = new Date().getTime();
});

function CheckMyWaypoint() {
    try {
        if (mp.game.invoke('0x1DD1F58F493F1DA5')) {
            var foundblip = false;
            var blipIterator = mp.game.invoke('0x186E5D252FA50E7D');
            var totalBlipsFound = mp.game.invoke('0x9A3FF3DE163034E8');
            var FirstInfoId = mp.game.invoke('0x1BEDE233E6CD2A1F', blipIterator);
            var NextInfoId = mp.game.invoke('0x14F96AA50D6FBEA7', blipIterator);
            for (var i = FirstInfoId, blipCount = 0; blipCount != totalBlipsFound; blipCount++, i = NextInfoId) {
                if (mp.game.invoke('0x1FC877464A04FC4F', i) == 8) {
                    var coord = mp.game.ui.getBlipInfoIdCoord(i);
                    foundblip = true;
                    break;
                }
            }
            if (foundblip) mp.events.callRemote('syncWaypoint', coord.x, coord.y);
        }
    } catch (e) {}
}

mp.events.add('syncWP', function (bX, bY, type) {
    if (!mp.game.invoke('0x1DD1F58F493F1DA5')) {
        mp.game.ui.setNewWaypoint(bX, bY);
        if (type == 0) mp.events.call('notify', 2, 9, "Пассажир передал Вам информацию о своём маршруте!", 3000);else if (type == 1) mp.events.call('notify', 2, 9, "Человек из списка контактов Вашего телефона передал Вам метку его местоположения!", 3000);
    } else {
        if (type == 0) mp.events.call('notify', 4, 9, "Пассажир попытался передать Вам информацию о маршруте, но у Вас уже установлен другой маршрут.", 5000);else if (type == 1) mp.events.call('notify', 4, 9, "Человек из списка контактов Вашего телефона попытался передать Вам метку его местоположения, но у Вас уже установлена другая метка.", 5000);
    }
});

mp.keys.bind(Keys.VK_U, false, function () {
    // U key
    if (!loggedin || chatActive || editing || global.menuOpened || new Date().getTime() - lastCheck < 1000) return;
    mp.events.callRemote('openCopCarMenu');
    lastCheck = new Date().getTime();
});

mp.keys.bind(Keys.VK_OEM_3, false, function () {
    // ` key
    if (chatActive || global.menuOpened && mp.gui.cursor.visible) return;
    mp.gui.cursor.visible = !mp.gui.cursor.visible;
});

mp.keys.bind(Keys.VK_F6, false, function () {// F6 key
    /*if (global.menuCheck()) return;
    if (!mp.game.recorder.isRecording()) {
        mp.game.recorder.start(1);
    } else {
        mp.game.recorder.stop();
    }*/
});

var lastPos = new mp.Vector3(0, 0, 0);

mp.game.gameplay.setFadeInAfterDeathArrest(false);
mp.game.gameplay.setFadeInAfterLoad(false);

mp.events.add("playerRuleTriggered", function (rule, counter) {
    if (rule === 'ping' && counter > 5) {
        mp.events.call('notify', 4, 2, "Ваш ping слишком большой. Зайдите позже", 5000);
        mp.events.callRemote("kickclient");
    }
    /*if (rule === 'packetLoss' && counter => 10) {
        mp.events.call('notify', 4, 2, "У Вас большая потеря пакетов. Зайдите позже", 5000);
        mp.events.callRemote("kickclient");
    }*/
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Use3d = true;
var UseAutoVolume = false;
var MaxRange = 10.0;

var enableMicrophone = function enableMicrophone() {
    if (global.chatActive || global.localplayer.getVariable('vmuted') || !global.loggedin || !mp.voiceChat.muted) return;

    mp.voiceChat.muted = false;
    mp.gui.emmit("window.hud.updateComponent(\"microphone\", 1)");
    global.localplayer.playFacialAnim("mic_chatter", "mp_facial");
};

var disableMicrophone = function disableMicrophone() {
    if (!global.loggedin || mp.voiceChat.muted) return;

    mp.voiceChat.muted = true;
    mp.gui.emmit("window.hud.updateComponent(\"microphone\", 0)");
    global.localplayer.playFacialAnim("mood_normal_1", "facials@gen_male@variations@normal");
};

mp.keys.bind(global.Keys.VK_N, true, enableMicrophone);
mp.keys.bind(global.Keys.VK_N, false, disableMicrophone);

var g_voiceMgr = {
    listeners: [],

    add: function add(player, notify) {
        if (this.listeners.indexOf(player) === -1) {
            if (notify) mp.events.callRemote("add_voice_listener", player);
            this.listeners.push(player);
            player.voice3d = true;
            player.voiceVolume = 0.0;
            player.isListening = true;
        }
    },

    remove: function remove(player, notify) {
        var idx = this.listeners.indexOf(player);
        if (idx !== -1) {
            if (notify) mp.events.callRemote("remove_voice_listener", player);
            this.listeners.splice(idx, 1);
            player.isListening = false;
        }
    }
};

mp.events.add("playerQuit", function (player) {
    if (player.isListening) g_voiceMgr.remove(player, false);
});

var PHONE = {
    target: null,
    status: false
};

mp.events.add('voice.mute', function () {
    disableMicrophone();
});
mp.events.add('voice.phoneCall', function (target) {
    if (!PHONE.target) {
        PHONE.target = target;
        PHONE.status = true;
        mp.events.callRemote("add_voice_listener", target);
        target.voiceVolume = 1.0;
        target.voice3d = false;
        g_voiceMgr.remove(target, false);
    }
});
mp.events.add("voice.phoneStop", function () {
    if (PHONE.target) {
        if (mp.players.exists(PHONE.target)) {
            var _localPos = global.localplayer.position;
            var _playerPos = PHONE.target.position;
            var dist = mp.game.system.vdist(_playerPos.x, _playerPos.y, _playerPos.z, _localPos.x, _localPos.y, _localPos.z);
            if (dist > MaxRange) mp.events.callRemote("remove_voice_listener", PHONE.target);else g_voiceMgr.add(PHONE.target, false);
        } else mp.events.callRemote("remove_voice_listener", PHONE.target);
        PHONE.target = null;
        PHONE.status = false;
    }
});

mp.events.add('v_reload', function () {
    try {
        mp.voiceChat.cleanupAndReload(true, true, true);
    } catch (e) {}
});

mp.events.add('v_reload2', function () {
    try {
        mp.voiceChat.cleanupAndReload(false, false, true);
    } catch (e) {}
});

mp.events.add('v_reload3', function () {
    try {
        mp.voiceChat.cleanupAndReload(true, false, false);
    } catch (e) {}
});

mp.events.add('playerStartTalking', function (player) {
    if (PHONE.target != player) player.voice3d = true;
    player.playFacialAnim("mic_chatter", "mp_facial");
});

mp.events.add('playerStopTalking', function (player) {
    player.playFacialAnim("mood_normal_1", "facials@gen_male@variations@normal");
});
var localPos = global.localplayer.position;
var playerPos = global.localplayer.position;

var voiceUpdate = function voiceUpdate() {

    localPos = global.localplayer.position;

    mp.players.forEachInStreamRange(function (player) {
        if (player != global.localplayer) {
            if (!player.isListening && (!PHONE.target || PHONE.target != player)) {
                playerPos = player.position;
                if (mp.game.system.vdist(playerPos.x, playerPos.y, playerPos.z, localPos.x, localPos.y, localPos.z) <= MaxRange) g_voiceMgr.add(player, true);
            }
        }
    });
};

var voiceVolumeUpdate = function voiceVolumeUpdate() {

    g_voiceMgr.listeners.forEach(function (player) {

        if (player.handle !== 0) {

            playerPos = player.position;
            var dist = mp.game.system.vdist(playerPos.x, playerPos.y, playerPos.z, localPos.x, localPos.y, localPos.z);

            if (dist > MaxRange) g_voiceMgr.remove(player, true);else if (!UseAutoVolume) player.voiceVolume = 1 - dist / MaxRange;
        } else g_voiceMgr.remove(player, true);
    });
};

setInterval(voiceUpdate, 350);
setInterval(voiceVolumeUpdate, 50);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var phoneWindow = null;
var phoneOppened = false;

mp.keys.bind(global.Keys.VK_M, false, function () {
    // M key
    if (!global.loggedin || global.chatActive || editing || global.menuCheck() || cuffed || global.localplayer.getVariable('InDeath') == true) return;
    mp.events.callRemote('openPlayerMenu');
    lastCheck = new Date().getTime();
});

mp.events.add('phoneShow', function () {
    mp.gui.emmit('window.phone.show();');
    mp.gui.cursor.visible = true;
});

mp.events.add('phoneHide', function () {
    mp.gui.emmit('window.phone.hide();');
    mp.gui.cursor.visible = false;
});

mp.events.add('phoneOpen', function (data) {
    var json = JSON.parse(data);
    // // //
    var id = json[0];
    var canHome = json[3];
    var canBack = json[2];
    var items = JSON.stringify(json[1]);
    // // //
    var exec = "window.phone.open('" + id + "'," + canHome + "," + canBack + ",'" + items + "');";
    //mp.gui.chat.push(exec);
    mp.gui.emmit(exec);
});

mp.events.add('phoneChange', function (ind, data) {
    var exec = "window.phone.change(" + ind + ",'" + data + "');";
    //mp.gui.chat.push(exec);
    mp.gui.emmit(exec);
});

mp.events.add('phoneClose', function () {
    mp.gui.emmit('window.phone.reset();');
});

mp.events.add('client:OnPhoneCallback', function (itemid, event, data) {
    mp.events.callRemote('Phone', 'callback', itemid, event, data);
    //mp.gui.chat.push(itemid+":"+event+":"+data);
});

mp.events.add('client:OnPhoneNavigation', function (btn) {
    mp.events.callRemote('Phone', 'navigation', btn);
});

/*mp.events.add("playerQuit", (player, exitType, reason) => {
    if (phone !== null) {
        if (player.name === global.localplayer.name) {
            phone.destroy();
            phone = null;
            phoneOppened = false;
            phoneWindow = null;
        }
    }
});*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markers = [];

mp.events.add('createCheckpoint', function (uid, type, position, scale, dimension, r, g, b, dir) {
    if (typeof markers[uid] != "undefined") {
        markers[uid].destroy();
        markers[uid] = undefined;
    }
    if (dir != undefined) {
        markers[uid] = mp.checkpoints.new(type, position, scale, {
            direction: dir,
            color: [r, g, b, 200],
            visible: true,
            dimension: dimension
        });
    } else {
        markers[uid] = mp.markers.new(type, position, scale, {
            visible: true,
            dimension: dimension,
            color: [r, g, b, 255]
        });
    }
});

mp.events.add('deleteCheckpoint', function (uid) {
    if (typeof markers[uid] == "undefined") return;
    markers[uid].destroy();
    markers[uid] = undefined;
});

mp.events.add('createWaypoint', function (x, y) {
    mp.game.ui.setNewWaypoint(x, y);
});

var workBlip = null;
mp.events.add('createWorkBlip', function (position) {
    if (workBlip != null) workBlip.destroy();
    workBlip = mp.blips.new(0, position, {
        name: "Чекпоинт",
        scale: 1,
        color: 49,
        alpha: 255,
        drawDistance: 100,
        shortRange: false,
        rotation: 0,
        dimension: 0
    });
});
mp.events.add('deleteWorkBlip', function () {
    if (workBlip != null) workBlip.destroy();
    workBlip = null;
});

var garageBlip = null;
mp.events.add('createGarageBlip', function (position) {
    if (garageBlip != null) garageBlip.destroy();
    garageBlip = mp.blips.new(473, position, {
        name: "Гараж",
        scale: 1,
        color: 45,
        alpha: 255,
        drawDistance: 100,
        shortRange: true,
        rotation: 0,
        dimension: 0
    });
});

mp.events.add('deleteGarageBlip', function () {
    if (garageBlip != null) garageBlip.destroy();
    garageBlip = null;
});

mp.events.add('changeBlipColor', function (blip, color) {
    try {
        if (blip == null) return;
        blip.setColour(color);
    } catch (e) {}
});

mp.events.add('changeBlipAlpha', function (blip, alpha) {
    try {
        if (blip == null) return;
        blip.setAlpha(alpha);
    } catch (e) {}
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.openOutType = -1;
var boardOpen = false;

mp.keys.bind(global.Keys.VK_I, false, function () {

	if (!global.loggedin || global.chatActive || editing || cuffed || global.localplayer.getVariable('InDeath') == true) return;

	if (boardOpen) mp.events.call('board', 1);else mp.events.call('board', 0);
});

mp.keys.bind(global.Keys.VK_ESCAPE, false, function () {

	if (boardOpen) {
		mp.game.ui.setPauseMenuActive(false);
		mp.events.call('board', 1);
	}
});

function openBoard() {

	if (global.menuCheck()) return;
	menuOpen(false);
	mp.gui.emmit('window.pages.updatePage(\'inventory\'),' + 'window.inventory.clearOutData()');
	boardOpen = true;
}

function closeBoard() {

	menuClose(false);
	mp.gui.emmit('window.context.hide(),' + 'window.pages.updatePage(\'none\')');
	boardOpen = false;

	if (global.openOutType != -1) {
		mp.events.callRemote('closeInventory');
		global.openOutType = -1;
	}
}
// // //
// 0 - Open
// 1 - Close
// 2 - Statistics data
// 3 - Inventory data
// 4 - Outside data
// 5 - Outside on/off
// // //

mp.events.add('board', function (act, data, index) {
	//mp.gui.chat.push(`act: ${act} | data: ${data}`);

	switch (act) {
		case 0:
			openBoard();
			break;
		case 1:
			closeBoard();
			break;
		case 2:
			mp.gui.emmit('window.inventory.setStats(' + data + ')');
			break;
		case 3:
			mp.gui.emmit('window.inventory.setItems(' + data + ')');
			break;
		case 4:
			mp.gui.emmit('window.inventory.setOutItems(' + data + ')');
			break;
		case 5:
			mp.gui.emmit('window.inventory.setOutSide(' + data + ')');
			global.openOutType = 0;
			break;
		case 6:
			mp.gui.emmit('window.inventory.itemUpd(' + index + ',' + data + ')');
			break;
		case 11:
			global.openOutType = -1;
			closeBoard();
			break;
	}
});

mp.events.add('boardCB', function (act, type, index) {
	if (new Date().getTime() - global.lastCheck < 100) return;
	global.lastCheck = new Date().getTime();
	// bullshit, required refactor 
	switch (act) {
		case 1:
			mp.events.callRemote('Inventory', type, index, 'use');
			break;
		case 2:
			mp.events.callRemote('Inventory', type, index, 'transfer');
			break;
		case 3:
			mp.events.callRemote('Inventory', type, index, 'take');
			break;
		case 4:
			mp.events.callRemote('Inventory', type, index, 'drop');
			break;
	}
});
// // //
mp.events.add("playerQuit", function (player, exitType, reason) {
	if (board !== null) {
		if (player.name === global.localplayer.name) {
			board.destroy();
			board = null;
		}
	}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.showhud = true;
global.passports = {};
var cruiseSpeed = -1;
var cruiseLastPressed = 0;
var showHint = true;

var hudstatus = {
    online: 0, // Last online int

    street: "",
    area: "",

    invehicle: false,
    engine: false,
    doors: true,
    fuel: 0,
    health: 0

    // HUD events
};mp.events.add('notify', function (type, layout, msg, time) {
    mp.gui.emmit("window.notification.show(" + type + "," + layout + ",'" + msg + "'," + time + ")");
});

mp.events.add('showHUD', function (show) {
    global.showhud = show;
    if (!show) mp.gui.emmit("window.hud.updateComponent(\"help\", " + global.showhud + ")");else if (show && showHint) mp.gui.emmit("window.hud.updateComponent(\"help\", " + global.showhud + ")");

    mp.gui.emmit("window.hud.updateComponent(\"toggle\", " + global.showhud + ")");

    mp.game.ui.displayAreaName(global.showhud);
    mp.game.ui.displayRadar(global.showhud);
    mp.game.ui.displayHud(global.showhud);
    mp.gui.chat.show(global.showhud);
});

mp.events.add('UpdateMoney', function (temp, amount) {
    mp.gui.emmit("window.hud.updateComponent(\"money\", " + temp + ")");
});

mp.events.add('UpdateBank', function (temp, amount) {
    mp.gui.emmit("window.hud.updateComponent(\"bankmoney\", " + temp + ")");
});

mp.events.add('setWanted', function (lvl) {
    mp.game.gameplay.setFakeWantedLevel(lvl);
});

mp.keys.bind(global.Keys.VK_F5, false, function () {
    // F5 key
    if (global.menuOpened) return;

    if (global.showhud && showHint) {
        showHint = false;
        mp.gui.emmit("window.hud.updateComponent(\"help\", false)");
    } else if (global.showhud) {
        global.showhud = !global.showhud;
        mp.events.call('showHUD', global.showhud);
    } else {
        showHint = true;
        mp.gui.emmit("window.hud.updateComponent(\"help\", true)");
        global.showhud = !global.showhud;
        mp.events.call('showHUD', global.showhud);
    }
});

// CRUISE CONTROL //
mp.keys.bind(global.Keys.VK_6, false, function () {
    // 5 key - cruise mode on/off
    if (!global.loggedin || global.chatActive || editing || global.menuOpened) return;
    if (!global.localplayer.isInAnyVehicle(true) || global.localplayer.vehicle.getPedInSeat(-1) != global.localplayer.handle) return;
    var vclass = global.localplayer.vehicle.getClass();
    if (vclass == 14 || vclass == 15 || vclass == 16) return;
    if (global.localplayer.vehicle.isOnAllWheels() == false) return;
    if (new Date().getTime() - cruiseLastPressed < 300) {
        mp.events.call('openInput', 'Круиз-контроль', 'Укажите скорость в км/ч', 3, 'setCruise');
    } else {
        var veh = global.localplayer.vehicle;
        if (cruiseSpeed == -1) {
            var vspeed = veh.getSpeed();
            if (vspeed > 1) {
                veh.setMaxSpeed(vspeed);
                cruiseSpeed = vspeed;
            }
        } else {
            cruiseSpeed = -1;
            veh.setMaxSpeed(mp.game.vehicle.getVehicleModelMaxSpeed(veh.model));
        }
    }
    cruiseLastPressed = new Date().getTime();
});

mp.events.add('setCruiseSpeed', function (speed) {
    speed = parseInt(speed);
    if (speed === NaN || speed < 1) return;
    if (!global.localplayer.isInAnyVehicle(true) || global.localplayer.vehicle.getPedInSeat(-1) != global.localplayer.handle) return;
    var vclass = global.localplayer.vehicle.getClass();
    if (vclass == 14 || vclass == 15 || vclass == 16) return;
    if (global.localplayer.vehicle.isOnAllWheels() == false) return;
    var veh = global.localplayer.vehicle;
    var curSpeed = veh.getSpeed();
    if (speed < curSpeed) {
        mp.events.call('notify', 4, 9, "Нельзя установить скорость меньше, чем она есть на данный момент, снизьте скорость и попробуйте еще раз.", 6000);
        return;
    }
    speed = speed / 3.6; // convert from kph to mps
    var maxSpeed = mp.game.vehicle.getVehicleModelMaxSpeed(veh.model);
    if (speed > maxSpeed) speed = maxSpeed;
    veh.setMaxSpeed(speed);
    cruiseSpeed = speed;
});

mp.events.add('newPassport', function (player, pass) {
    if (player && mp.players.exists(player)) global.passports[player.name] = pass;
});

var showAltTabHint = false;
mp.events.add('showAltTabHint', function () {
    showAltTabHint = true;
    setTimeout(function () {
        showAltTabHint = false;
    }, 10000);
});

mp.events.add('sendRPMessage', function (type, msg, players) {

    var chatcolor = "";

    players.forEach(function (id) {
        var player = mp.players.atRemoteId(id);
        if (mp.players.exists(player)) {

            if (type === "chat" || type === "s") {
                var localPos = global.localplayer.position;
                var playerPos = player.position;
                var dist = mp.game.system.vdist(playerPos.x, playerPos.y, playerPos.z, localPos.x, localPos.y, localPos.z);
                var color = dist < 2 ? "FFFFFF" : dist < 4 ? "F7F9F9" : dist < 6 ? "DEE0E0" : dist < 8 ? "C5C7C7" : "ACAEAE";

                chatcolor = color;
            }

            var name = "";
            if (player.getVariable('IS_MASK') == true) {
                name = player === localplayer || global.localplayer.getVariable('IS_ADMIN') == true ? player.name.replace("_", " ") + " (" + player.getVariable('REMOTE_ID') + ")" : "\u041D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446 (" + id + ")";
            } else {
                name = player === localplayer || global.localplayer.getVariable('IS_ADMIN') == true || global.passports[player.name] != undefined || global.friends[player.name] != undefined ? player.name.replace("_", " ") + " (" + player.getVariable('REMOTE_ID') + ")" : "\u041D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446 (" + id + ")";
            }
            msg = msg.replace("{name}", name);
        }
    });

    if (type === "chat" || type === "s") msg = "!{" + chatcolor + "}" + msg;

    mp.gui.chat.push(msg);
});

var optimizationupdate = 0;

mp.events.add('render', function () {

    if (!global.loggedin) return;

    // Устанавливаем GTA интерфейсам цвет проекта
    mp.game.ui.setHudColour(143, 228, 66, 66, 255);
    mp.game.ui.setHudColour(144, 228, 66, 66, 255);
    mp.game.ui.setHudColour(145, 228, 66, 66, 255);

    // Отключаем не нужные HUD компоненты 
    mp.game.ui.hideHudComponentThisFrame(2); // HUD_WEAPON_ICON
    mp.game.ui.hideHudComponentThisFrame(3); // HUD_CASH
    mp.game.ui.hideHudComponentThisFrame(6); // HUD_VEHICLE_NAME
    mp.game.ui.hideHudComponentThisFrame(7); // HUD_AREA_NAME
    mp.game.ui.hideHudComponentThisFrame(8); // HUD_VEHICLE_CLASS
    mp.game.ui.hideHudComponentThisFrame(9); // HUD_STREET_NAME

    mp.game.ui.hideHudComponentThisFrame(19); // HUD_WEAPON_WHEEL
    mp.game.ui.hideHudComponentThisFrame(20); // HUD_WEAPON_WHEEL_STATS
    mp.game.ui.hideHudComponentThisFrame(22); // MAX_HUD_WEAPONS

    var vehiclestatus = global.localplayer.isInAnyVehicle(false);
    var veh = vehiclestatus ? global.localplayer.vehicle : null;

    if (new Date().getTime() - optimizationupdate > 50) {

        optimizationupdate = new Date().getTime();

        // Обновляем онлайн в логотипе
        if (hudstatus.online != mp.players.length) {

            hudstatus.online = mp.players.length;
            mp.gui.emmit("window.hud.updateServerInfo(\"online\", " + hudstatus.online + ")");
        }

        // Обновляем улицу и район
        var street = mp.game.pathfind.getStreetNameAtCoord(global.localplayer.position.x, global.localplayer.position.y, global.localplayer.position.z, 0, 0);
        var area = mp.game.zone.getNameOfZone(global.localplayer.position.x, global.localplayer.position.y, global.localplayer.position.z);

        street = mp.game.ui.getStreetNameFromHashKey(street.streetName);
        area = mp.game.ui.getLabelText(area);

        if (hudstatus.street != street || hudstatus.area != area) {
            hudstatus.street = street;
            hudstatus.area = area;

            mp.gui.emmit("window.hud.updateComponent(\"street\", '" + street + "')");
            mp.gui.emmit("window.hud.updateComponent(\"crossingroad\", '" + area + "')");
        }

        // Обновление худа транспорта
        if (vehiclestatus) {
            // Обновляем топливо
            if (veh.getVariable('PETROL') !== undefined && veh.getVariable('MAXPETROL') !== undefined) {
                var petrol = veh.getVariable('PETROL');
                //let maxpetrol = veh.getVariable('MAXPETROL');

                if (hudstatus.fuel != petrol && petrol >= 0) {
                    mp.gui.emmit("window.hud.updateComponent(\"petrol\", " + petrol + ")");
                    hudstatus.fuel = petrol;
                }
            }

            // Обновляем статус двигателя
            var engine = veh.getIsEngineRunning();
            if (engine != null && engine !== hudstatus.engine) {
                if (engine == true) mp.gui.emmit("window.hud.updateComponent(\"engine\", true)");else mp.gui.emmit("window.hud.updateComponent(\"engine\", false)");
                hudstatus.engine = engine;
            }

            // Обновляем статус дверей
            if (veh.getVariable('LOCKED') !== undefined) {
                var locked = veh.getVariable('LOCKED');
                if (hudstatus.doors !== locked) {
                    if (locked == true) mp.gui.emmit("window.hud.updateComponent(\"doors\", false)");else mp.gui.emmit("window.hud.updateComponent(\"doors\", true)");
                    hudstatus.doors = locked;
                }
            }

            // Обновляем скорость
            var speed = (veh.getSpeed() * 3.6).toFixed();
            mp.gui.emmit("window.hud.updateComponent(\"speed\", " + speed + ")", false);
            hudstatus.updatespeedTimeout = new Date().getTime();

            // Фиксим скорость круиз контроля
            if (cruiseSpeed != -1) {
                veh.setMaxSpeed(cruiseSpeed);
            }
        }

        // Отключаем IDLE камеру когда курсор активен или игрок мёртв
        if (mp.gui.cursor.visible || global.deathTimerOn) {
            mp.game.invoke("0xF4F2C0D4EE209E20");
        }
    }

    if (vehiclestatus) {
        if (veh.getPedInSeat(-1) == global.localplayer.handle) {
            if (!hudstatus.invehicle) mp.gui.emmit("window.hud.updateComponent(\"vehicle\", true)");
            hudstatus.invehicle = true;

            if (veh.getVariable('FUELTANK') !== undefined) {
                var fueltank = veh.getVariable('FUELTANK');
                mp.game.graphics.drawText("\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E: " + fueltank + "/1000\u043B", [0.93, 0.80], {
                    font: 0,
                    color: [255, 255, 255, 185],
                    scale: [0.4, 0.4],
                    outline: true
                });
            }
        }
    } else {
        if (hudstatus.invehicle) mp.gui.emmit("window.hud.updateComponent(\"vehicle\", false)");
        hudstatus.invehicle = false;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

mp.nametags.enabled = false;

var showGamertags = false;

var gameplayCamPos;
var playerTarget;
var playerAimAt;
var width = 0.025;
var height = 0.004;
var border = 0.001;

mp.keys.bind(global.Keys.VK_5, false, function () {
    // Включить / Выключить.

    if (!global.loggedin || global.chatActive || editing || global.menuOpened) return;
    showGamertags = !showGamertags;
});

mp.events.add('render', function (nametags) {

    if (!global.loggedin) return;

    // Pre draw
    gameplayCamPos = mp.players.local.position;
    playerAimAt = mp.game.player.getEntityIsFreeAimingAt();
    playerTarget = mp.game.player.getTargetEntity();

    // Get variables
    var isAdmin = global.localplayer.getVariable('IS_ADMIN');

    // Admin get target info
    if (isAdmin == true && playerTarget != undefined && playerTarget.handle || playerAimAt != undefined && playerAimAt.handle) {
        var player = playerTarget;
        if (player == undefined && !player.handle) player = playerAimAt;
        if (player == undefined && !player.handle) return;

        mp.game.graphics.drawText(player.name + ' (' + player.remoteId + ')', [0.5, 0.8], { font: 4, color: [255, 255, 255, 235], scale: [0.5, 0.5], outline: true });
    }

    // Player gamertags
    if (showGamertags) {

        nametags.forEach(function (nametag) {
            var _nametag = _slicedToArray(nametag, 4),
                player = _nametag[0],
                x = _nametag[1],
                y = _nametag[2],
                distance = _nametag[3];

            if (distance < 50.0) {
                if (player.getVariable('INVISIBLE') != true && player.getVariable('HideNick') != true) {
                    var passportText = '';
                    if (global.passports[player.name] != undefined) passportText = ' | ' + global.passports[player.name];
                    var text;
                    if (player.getVariable('IS_MASK') == true) {
                        text = isAdmin === true ? player.name + ' (' + player.remoteId + passportText + ')' : 'ID: ' + player.remoteId;
                    } else {
                        text = isAdmin === true || global.friends[player.name] != undefined || global.passports[player.name] != undefined ? player.name + ' (' + player.remoteId + passportText + ')' : 'ID: ' + player.remoteId;
                    }

                    var localFraction = global.localplayer.getVariable('fraction');
                    var playerFraction = player.getVariable('fraction');
                    if (localFraction != null && playerFraction != null && localFraction === playerFraction) text = player.name + ' (' + player.remoteId + passportText + ')';

                    var color = player.getVariable('REDNAME') === true ? [255, 0, 0, 255] : [255, 255, 255, 255];

                    var isInVehicle = player.vehicle;
                    if (isInVehicle) y += 0.065;

                    drawPlayerTag(player, x, y, text, color);
                    drawPlayerVoiceIcon(player, x, y);
                }
            }
        });
    }
});

function drawPlayerTag(player, x, y, displayname, color) {
    //var position = player.getBoneCoords(12844, 0.6, 0, 0); //player.position;
    //position.z += 1.5;
    //var frameTime = lastFrameTime;
    //const frameRate = 1.0 / (mp.game.invoke("0x15C40837039FFAF7") / );

    // draw user name
    mp.game.graphics.drawText(displayname, [x, y], { font: 4, color: color, scale: [0.35, 0.35], outline: true });

    // draw health & ammo bar
    if (playerTarget != undefined && player.handle == playerTarget.handle || playerAimAt != undefined && player.handle == playerAimAt.handle || global.spectating) {
        y += 0.04;
        var health = player.getHealth();
        health = health <= 100 ? health / 100 : (health - 100) / 100;

        var armour = player.getArmour() / 100;
        if (armour > 0) {

            mp.game.graphics.drawRect(x, y, width + border * 2, height + border * 2, 0, 0, 0, 200);
            mp.game.graphics.drawRect(x, y, width, height, 150, 150, 150, 255);
            mp.game.graphics.drawRect(x - width / 2 * (1 - health), y, width * health, height, 255, 255, 255, 200);

            y -= 0.007;

            mp.game.graphics.drawRect(x, y, width + border * 2, height + border * 2, 0, 0, 0, 200);
            mp.game.graphics.drawRect(x, y, width, height, 41, 66, 78, 255);
            mp.game.graphics.drawRect(x - width / 2 * (1 - armour), y, width * armour, height, 48, 108, 135, 200);
        } else {

            mp.game.graphics.drawRect(x, y, width + border * 2, height + border * 2, 0, 0, 0, 200);
            mp.game.graphics.drawRect(x, y, width, height, 150, 150, 150, 255);
            mp.game.graphics.drawRect(x - width / 2 * (1 - health), y, width * health, height, 255, 255, 255, 200);
        }
    }
}

function drawPlayerVoiceIcon(player, x, y) {
    var isMuted = false;
    var sprite = !isMuted ? 'leaderboard_audio_3' : 'leaderboard_audio_mute';

    if (player.isVoiceActive) drawVoiceSprite("mpleaderboard", sprite, [0.7, 0.7], 0, [255, 255, 255, 255], x, y - 0.02 * 0.7);
}

function drawVoiceSprite(dist, name, scale, heading, colour, x, y, layer) {
    var resolution = mp.game.graphics.getScreenActiveResolution(0, 0),
        textureResolution = mp.game.graphics.getTextureResolution(dist, name),
        textureScale = [scale[0] * textureResolution.x / resolution.x, scale[1] * textureResolution.y / resolution.y];

    if (mp.game.graphics.hasStreamedTextureDictLoaded(dist) === 1) {
        if (typeof layer === 'number') mp.game.graphics.set2dLayer(layer);
        mp.game.graphics.drawSprite(dist, name, x, y, textureScale[0], textureScale[1], heading, colour[0], colour[1], colour[2], colour[3]);
    } else mp.game.graphics.requestStreamedTextureDict(dist, true);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var moving_speeds = [0.01, 0.1, 1.0, 5.0, 10.0];
var moving_speed_idx = 0;

var editing_types = ["Позиция по X", "Позиция по Y", "Высота", "Наклон по X", "Наклон по Y", "Поворот"];
var editing_type_idx = 0;

global.editing = false;
var object = null;

mp.events.add('startEditing', function (model) {
    object = mp.objects.new(mp.game.joaat(model), new mp.Vector3(global.localplayer.position.x + 1, global.localplayer.position.y + 1, global.localplayer.position.z - 0.5), //global.localplayer.getCoords(true),
    {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: global.localplayer.dimension
    });
    editing = true;
});

function updateObject() {
    if (object == null) return;
    var model = object.model;
    var position = object.position;
    var rot = object.getRotation(2);
    var pitch = object.getPitch();
    object.destroy();
    object = mp.objects.new(model, position, {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: global.localplayer.dimension
    });
    object.setRotation(pitch, rot.y, rot.z, 2, true);
}

var sc = mp.game.graphics.requestScaleformMovie("instructional_buttons");
var scInst = 0;

function AddInstructionalStart() {
    scInst = 0;
    mp.game.graphics.drawScaleformMovieFullscreen(sc, 255, 255, 255, 0, false);
    mp.game.graphics.pushScaleformMovieFunction(sc, "CLEAR_ALL");
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(sc, "SET_CLEAR_SPACE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(200);
    mp.game.graphics.popScaleformMovieFunctionVoid();
}

function AddInstructionalButton(text, button) //this shit brazy
{
    mp.game.graphics.pushScaleformMovieFunction(sc, "SET_DATA_SLOT");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(scInst);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(button);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(text);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    scInst++;
}

function AddInstructionalButtonCustom(text, button) {
    mp.game.graphics.pushScaleformMovieFunction(sc, "SET_DATA_SLOT");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(scInst);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(button);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(text);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    scInst++;
}

function AddInstructionalEnd(type) {
    mp.game.graphics.pushScaleformMovieFunction(sc, "DRAW_INSTRUCTIONAL_BUTTONS");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(type);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(sc, "SET_BACKGROUND_COLOUR");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(192);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(57);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(43);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(65);
    mp.game.graphics.popScaleformMovieFunctionVoid();
}

mp.events.add('endEditing', function () {
    object.destroy();
    object = null;
    editing = false;
});

mp.keys.bind(0x26, false, function () {
    // UP Arrow
    //mp.gui.chat.push("Old rot: " + new mp.Vector3(object.getRotation(2).x, object.getRotation(2).y, object.getRotation(2).z));
    if (global.chatActive || !editing) return;
    switch (editing_type_idx) {
        // pos x
        case 0:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x + moving_speeds[moving_speed_idx], pos.y, pos.z);
            break;
        // pos y
        case 1:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x, pos.y + moving_speeds[moving_speed_idx], pos.z);
            break;
        // pos z
        case 2:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x, pos.y, pos.z + moving_speeds[moving_speed_idx]);
            break;
        // rot x
        case 3:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch + moving_speeds[moving_speed_idx], rot.y, rot.z, 2, true);
            break;
        // rot y
        case 4:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch, rot.y + moving_speeds[moving_speed_idx], rot.z, 2, true);
            break;
        // rot z
        case 5:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch, rot.y, rot.z + moving_speeds[moving_speed_idx], 2, true);
            break;
    }
    //mp.gui.chat.push("New rot Fixes: " + new mp.Vector3(object.getRotation(2).x.toFixed(2), object.getRotation(2).y.toFixed(2), object.getRotation(2).z.toFixed(2)));
    updateObject();
});

mp.keys.bind(0x28, false, function () {
    // DOWN Arrow
    if (global.chatActive || !editing) return;
    switch (editing_type_idx) {
        // pos x
        case 0:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x - moving_speeds[moving_speed_idx], pos.y, pos.z);
            break;
        // pos y
        case 1:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x, pos.y - moving_speeds[moving_speed_idx], pos.z);
            break;
        // pos z
        case 2:
            var pos = object.position;
            object.position = new mp.Vector3(pos.x, pos.y, pos.z - moving_speeds[moving_speed_idx]);
            break;
        // rot x
        case 3:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch - moving_speeds[moving_speed_idx], rot.y, rot.z, 2, true);
            break;
        // rot y
        case 4:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch, rot.y - moving_speeds[moving_speed_idx], rot.z, 2, true);
            break;
        // rot z
        case 5:
            var rot = object.getRotation(2);
            var pitch = object.getPitch();
            object.setRotation(pitch, rot.y, rot.z - moving_speeds[moving_speed_idx], 2, true);
            break;
    }
    updateObject();
});

mp.keys.bind(0x25, false, function () {
    // LEFT Arrow
    if (global.chatActive || !editing) return;
    editing_type_idx--;
    if (editing_type_idx < 0) editing_type_idx = editing_types.length - 1;
});

mp.keys.bind(0x27, false, function () {
    // RIGHT Arrow
    if (global.chatActive || !editing) return;
    editing_type_idx++;
    if (editing_type_idx >= editing_types.length) editing_type_idx = 0;
});

mp.keys.bind(0x59, false, function () {
    // Y key
    if (global.chatActive || !editing) return;
    var rot = object.getRotation(2);
    var pitch = object.getPitch();
    var position = new mp.Vector3(object.position.x.toFixed(3), object.position.y.toFixed(3), object.position.z.toFixed(3));
    var rotation = new mp.Vector3(rot.x.toFixed(2), rot.y.toFixed(2), rot.z.toFixed(2));
    mp.events.callRemote('acceptEdit', position.x, position.y, position.z, rotation.x, rotation.y, rotation.z);
    object.destroy();
    object = null;
    editing = false;
});

mp.keys.bind(0x4E, false, function () {
    // N key
    if (global.chatActive || !editing) return;
    object.destroy();
    object = null;
    editing = false;
    mp.events.callRemote('cancelEdit');
});

mp.keys.bind(0x6B, false, function () {
    // Add key
    if (global.chatActive || !editing) return;
    moving_speed_idx++;
    if (moving_speed_idx >= moving_speeds.length) moving_speed_idx = 0;
});

mp.keys.bind(0x6D, false, function () {
    // Subtract key
    if (global.chatActive || !editing) return;
    moving_speed_idx--;
    if (moving_speed_idx < 0) moving_speed_idx = moving_speeds.length - 1;
});

mp.events.add('render', function () {
    if (object !== null) {

        AddInstructionalStart();
        AddInstructionalButton("Следующий режим", 197);
        AddInstructionalButton("Предыдущий режим", 196);
        AddInstructionalButton("Управление объектом", 194);
        AddInstructionalButton("Управление объектом", 195);
        AddInstructionalButtonCustom("Увеличить скорость", "t_+");
        AddInstructionalButtonCustom("Уменьшить скорость", "t_-");
        AddInstructionalButtonCustom("Установить", "t_Y");
        AddInstructionalButtonCustom("Отмена", "t_N");
        AddInstructionalEnd(1);

        mp.game.graphics.drawText("\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F: " + editing_types[editing_type_idx] + "\n\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C: " + moving_speeds[moving_speed_idx], [0.5, 0.9], {
            font: 0,
            color: [255, 255, 255, 255],
            scale: [0.5, 0.5],
            outline: false
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var esptoggle = 0;
var myalvl = 0;

mp.keys.bind(global.Keys.VK_F12, false, function () {
	if (!global.loggedin || global.localplayer.getVariable('IS_ADMIN') !== true) return;
	myalvl = global.localplayer.getVariable('ALVL');
	if (esptoggle == 3) esptoggle = 0;else esptoggle++;
	if (esptoggle == 0) mp.game.graphics.notify('ESP: ~r~Disabled');else if (esptoggle == 1) mp.game.graphics.notify('ESP: ~g~Only Players');else if (esptoggle == 2) mp.game.graphics.notify('ESP: ~g~Only Vehicles');else if (esptoggle == 3) mp.game.graphics.notify('ESP: ~g~Players & Vehicles');
});

mp.events.add('render', function () {
	if (!global.loggedin || global.localplayer.getVariable('IS_ADMIN') !== true) return;
	if (esptoggle >= 1) {
		try {
			var position = void 0;
			if (esptoggle == 1 || esptoggle == 3) {
				mp.players.forEachInStreamRange(function (player) {
					if (player.handle !== 0 && player !== mp.players.local) {
						if (myalvl >= player.getVariable('ALVL')) {
							position = player.position;
							if (player.getVariable('IS_ADMIN')) {
								mp.game.graphics.drawText(player.name + (' (' + player.remoteId + ')'), [position.x, position.y, position.z + 1.5], {
									scale: [0.3, 0.3],
									outline: true,
									color: [255, 0, 0, 255],
									font: 4
								});
							} else {
								mp.game.graphics.drawText(player.name + (' (' + player.remoteId + ')'), [position.x, position.y, position.z + 1.5], {
									scale: [0.3, 0.3],
									outline: true,
									color: [255, 255, 255, 255],
									font: 4
								});
							}
						}
					}
				});
			}
			if (esptoggle == 2 || esptoggle == 3) {
				mp.vehicles.forEachInStreamRange(function (vehicle) {
					if (vehicle.handle !== 0 && vehicle !== mp.players.local) {
						position = vehicle.position;
						mp.game.graphics.drawText(mp.game.vehicle.getDisplayNameFromVehicleModel(vehicle.model) + (' (' + vehicle.getNumberPlateText() + ' | ' + vehicle.remoteId + ')'), [position.x, position.y, position.z - 0.5], {
							scale: [0.3, 0.3],
							outline: true,
							color: [255, 255, 255, 255],
							font: 4
						});
					}
				});
			}
		} catch (e) {}
	}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.circleEntity = null;
global.circleOpen = false;
var circleTitle = "";

global.OpenCircle = function (title, data) {
    if (global.menuCheck() || global.circleOpen) return;

    mp.gui.emmit("window.circle.show(\"" + title + "\"," + data + ")");
    circleTitle = title;
    global.circleOpen = true;
    global.menuOpen(false);
};

global.CloseCircle = function (hide) {
    if (hide) mp.gui.emmit("window.circle.hide()");
    global.circleOpen = false;
    global.menuClose(false);
};

mp.events.add('client:OnCircleCallback', function (index) {
    if (index == -1) {
        global.CloseCircle(false);
    } else {
        global.CloseCircle(false);
        switch (circleTitle) {
            case "Машина":
                switch (index) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        if (entity == null) return;
                        mp.events.callRemote('vehicleSelected', entity, index);
                        return;
                }
                return;
            case "Игрок":
                if (entity == null) return;
                switch (index) {
                    case 0:
                        mp.events.callRemote('pSelected', entity, "Передать деньги");
                        return;
                    case 1:
                        mp.events.callRemote('pSelected', entity, "Предложить обмен");
                        return;
                    case 2:
                        if (global.pFraction === 0 || global.pFraction === 15) return;
                        global.OpenCircle("Фракция", global.pFraction);
                        return;
                    case 3:
                        //mp.gui.chat.push(">>" + entity);
                        mp.events.callRemote('passport', entity);
                        return;
                    case 4:
                        //mp.gui.chat.push(">>" + entity);
                        mp.events.callRemote('licenses', entity);
                        return;
                    case 5:
                        mp.events.callRemote('pSelected', entity, "Вылечить");
                        return;
                    case 6:
                        global.OpenCircle("Дом", 0);
                        return;
                    case 7:
                        mp.events.callRemote('pSelected', entity, "Пожать руку");
                        return;
                }
                return;
            case "Дом":
                switch (index) {
                    case 0:
                        mp.events.callRemote('pSelected', entity, "Продать машину");
                        return;
                    case 1:
                        mp.events.callRemote('pSelected', entity, "Продать дом");
                        return;
                    case 2:
                        mp.events.callRemote('pSelected', entity, "Заселить в дом");
                        return;
                    case 3:
                        mp.events.callRemote('pSelected', entity, "Пригласить в дом");
                        return;
                }
                return;
            case "Фракция":
                if (entity == null) return;
                circleEntity = entity;
                if (fractionActions[global.pFraction] == undefined) return;
                mp.events.callRemote('pSelected', entity, fractionActions[global.pFraction][index]);
                return;
            case "Категории":
                if (index == 7) {
                    if (!global.localplayer.isFalling()) mp.events.callRemote('aSelected', -1, -1);
                    return;
                }
                switch (index) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        aCategory = index;
                        global.OpenCircle("Анимации", index);
                        return;
                }
                return;
            case "Анимации":
                if (aCategory == 1 && index == 7) {
                    aCategory = 10;
                    global.OpenCircle("Анимации", 10);
                } else if (aCategory == 4 && index == 7) {
                    aCategory = 13;
                    global.OpenCircle("Анимации", 13);
                } else if (aCategory == 5 && index == 7) {
                    aCategory = 7;
                    global.OpenCircle("Анимации", 7);
                } else if (aCategory == 6 && index == 7) {
                    aCategory = 12;
                    global.OpenCircle("Анимации", 12);
                } else if (aCategory == 7 && index == 7) {
                    aCategory = 8;
                    global.OpenCircle("Анимации", 8);
                } else if (aCategory == 8 && index == 7) {
                    aCategory = 9;
                    global.OpenCircle("Анимации", 9);
                } else if (aCategory == 10 && index == 7) {
                    aCategory = 11;
                    global.OpenCircle("Анимации", 11);
                } else mp.events.callRemote('aSelected', aCategory, index);
                return;
        }
    }
});

var aCategory = -1;

var fractionActions = [];
fractionActions[1] = ["Ограбить", "Украсть оружие", "Мешок"];
fractionActions[2] = ["Ограбить", "Украсть оружие", "Мешок"];
fractionActions[3] = ["Ограбить", "Украсть оружие", "Мешок"];
fractionActions[4] = ["Ограбить", "Украсть оружие", "Мешок"];
fractionActions[5] = ["Ограбить", "Украсть оружие", "Мешок"];
fractionActions[6] = ["Вести за собой"];
fractionActions[7] = ["Вести за собой", "Обыскать", "Изъять оружие", "Изъять нелегал", "Сорвать маску", "Выписать штраф"];
fractionActions[8] = ["Продать аптечку", "Предложить лечение"];
fractionActions[9] = ["Вести за собой", "Обыскать", "Изъять оружие", "Изъять нелегал", "Сорвать маску"];
fractionActions[10] = ["Вести за собой", "Мешок", "Ограбить", "Украсть оружие"];
fractionActions[11] = ["Вести за собой", "Мешок", "Ограбить", "Украсть оружие"];
fractionActions[12] = ["Вести за собой", "Мешок", "Ограбить", "Украсть оружие"];
fractionActions[13] = ["Вести за собой", "Мешок", "Ограбить", "Украсть оружие"];
fractionActions[14] = ["Вести за собой"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var spmenu = new global.NativeMenu("Spectate", "Spectate Menu", new global.Point(30, 500)); // Мы не выключаем чат, чтобы видеть переписку тех, за кем следим, поэтому двигаем саму табличку вниз
spmenu.Close();
spmenu.AddItem(new UIMenuListItem("Spectate", "Переключение игрока по ID", new ItemsCollection(["Previous", "Next"])));
spmenu.AddItem(new UIMenuItem("Refresh", "Обновить слежение за текущим игроком"));
spmenu.AddItem(new UIMenuItem("Unspectate", "Выключить режим наблюдателя"));

mp.events.add("spmode", function (target, toggle) {
	global.localplayer.freezePosition(toggle);
	if (toggle) {
		if (target && mp.players.exists(target)) {
			global.sptarget = target;
			global.spectating = true;
			global.localplayer.attachTo(target.handle, -1, -1.5, -1.5, 2, 0, 0, 0, true, false, false, false, 0, false);
			spmenu.Open();
		} else mp.events.callRemote("UnSpectate");
	} else {
		global.sptarget = null;
		global.localplayer.detach(true, true);
		global.spectating = false;
		spmenu.Close();
	}
});

spmenu.ItemSelect.on(function (item) {
	if (item instanceof UIMenuListItem) {
		if (item.Text == "Spectate") {
			if (item.Index == 0) mp.events.callRemote("SpectateSelect", false);else mp.events.callRemote("SpectateSelect", true);
		}
	} else if (item instanceof UIMenuItem) {
		if (item.Text == "Refresh") mp.events.call("spmode", global.sptarget, true);else if (item.Text == "Unspectate") mp.events.callRemote("UnSpectate");
	}
});

spmenu.MenuClose.on(function () {
	if (global.spectating) spmenu.Open();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var attachedObjects = [];

mp.events.add('attachObject', attachObject);
mp.events.add('detachObject', function (player) {
    try {
        if (player && mp.players.exists(player)) {
            if (attachedObjects[player.id] != undefined) attachedObjects[player.id].destroy();
            attachedObjects[player.id] = undefined;
        }
    } catch (e) {}
});

function attachObject(player) {
    try {
        if (player && mp.players.exists(player)) {
            if (attachedObjects[player.id] != undefined) attachedObjects[player.id].destroy();

            if (player.getVariable('attachedObject') == null) return;
            var data = JSON.parse(player.getVariable('attachedObject'));
            var boneID = player.getBoneIndex(data.Bone);
            var object = mp.objects.new(data.Model, player.position, {
                rotation: new mp.Vector3(0, 0, 0),
                alpha: 255,
                dimension: player.dimension
            });
            object.attachTo(player.handle, boneID, data.PosOffset.x, data.PosOffset.y, data.PosOffset.z, data.RotOffset.x, data.RotOffset.y, data.RotOffset.z, true, true, false, false, 0, true);
            attachedObjects[player.id] = object;
        }
    } catch (e) {}
}

mp.events.add('toggleInvisible', function (player, toggle) {
    try {
        if (mp.players.exists(player)) {
            if (toggle) player.setAlpha(0);else player.setAlpha(255);
        }
    } catch (e) {}
});

mp._events.add("playerQuit", function (player) {
    try {
        if (attachedObjects[player.id] != undefined) {
            attachedObjects[player.id].destroy();
            attachedObjects[player.id] = undefined;
        }
    } catch (e) {}
});
mp.events.add('entityStreamOut', function (entity) {
    try {
        if (entity.type != 'player') return;
        if (attachedObjects[entity.id] != undefined) {
            attachedObjects[entity.id].destroy();
            attachedObjects[entity.id] = undefined;
        }
    } catch (e) {}
});
var PlayerHash = mp.game.joaat("PLAYER");
var NonFriendlyHash = mp.game.joaat("FRIENDLY_PLAYER");
var FriendlyHash = mp.game.joaat("NON_FRIENDLY_PLAYER");

global.localplayer.setRelationshipGroupHash(PlayerHash);

mp.game.ped.addRelationshipGroup("FRIENDLY_PLAYER", 0);
mp.game.ped.addRelationshipGroup("NON_FRIENDLY_PLAYER", 0);

mp.game.ped.setRelationshipBetweenGroups(0, PlayerHash, FriendlyHash);

mp.game.ped.setRelationshipBetweenGroups(5, PlayerHash, NonFriendlyHash);
mp.game.ped.setRelationshipBetweenGroups(5, NonFriendlyHash, PlayerHash);

var dmgdisabled = false;
mp.events.add('disabledmg', function (toggle) {
    if (toggle) {
        dmgdisabled = true;
        mp.players.forEachInStreamRange(function (entity) {
            if (entity != localplayer) entity.setRelationshipGroupHash(FriendlyHash);
        });
    } else {
        dmgdisabled = false;
        mp.players.forEachInStreamRange(function (entity) {
            if (entity != localplayer) entity.setRelationshipGroupHash(NonFriendlyHash);
        });
    }
});

mp._events.add('playerWeaponShot', function (targetPosition, targetEntity) {
    if (dmgdisabled == true) return true;
});

mp.game.streaming.requestAnimDict("creatures@cat@amb@world_cat_sleeping_ground@base");
mp.game.streaming.requestAnimDict("creatures@rottweiler@amb@sleep_in_kennel@");
mp.game.streaming.requestAnimDict("creatures@pug@amb@world_dog_sitting@base");
mp.game.streaming.requestAnimDict("amb@world_human_sunbathe@male@back@base");
mp.game.streaming.requestAnimDict("anim@amb@nightclub@peds@");
mp.game.streaming.requestAnimDict("missheistdocks2aleadinoutlsdh_2a_int");
mp.game.streaming.requestAnimDict("missstrip_club_lean");
mp.game.streaming.requestAnimDict("misstrevor2");
mp.game.streaming.requestAnimDict("creatures@retriever@amb@world_dog_sitting@base");
mp.game.streaming.requestAnimDict("creatures@deer@amb@world_deer_grazing@idle_a");

mp.events.add('entityStreamIn', function (entity) {
    try {
        if (entity.type === 'player') {
            SetWalkStyle(entity, walkstyles[entity.getVariable('playerws')]);
            SetMood(entity, moods[entity.getVariable('playermood')]);
            attachObject(entity);
            if (dmgdisabled == true) entity.setRelationshipGroupHash(FriendlyHash);else entity.setRelationshipGroupHash(NonFriendlyHash);
            if (entity.getVariable('INVISIBLE') == true) entity.setAlpha(0);else entity.setAlpha(255);
        } else if (entity.type === 'ped') {
            entity.taskLookAt(global.localplayer.handle, -1, 2048, 3);
            if (entity.getModel() == 1462895032) entity.taskPlayAnim("creatures@cat@amb@world_cat_sleeping_ground@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Cat
            else if (entity.getModel() == 1318032802) entity.taskPlayAnim("creatures@rottweiler@amb@sleep_in_kennel@", "sleep_in_kennel", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Husky
                else if (entity.getModel() == 1832265812) entity.taskPlayAnim("creatures@pug@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Pug
                    else if (entity.getModel() == 2910340283) entity.taskPlayAnim("creatures@pug@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Westy
                        else if (entity.getModel() == 1125994524) entity.taskPlayAnim("creatures@pug@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Poodle
                            else if (entity.getModel() == 940330470) entity.taskPlayAnim("amb@world_human_sunbathe@male@back@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Rashkovsky		
                                else if (entity.getModel() == 3613420592) entity.taskPlayAnim("anim@amb@nightclub@peds@", "rcmme_amanda1_stand_loop_cop", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Bony
                                    else if (entity.getModel() == 3439295882) entity.taskPlayAnim("missheistdocks2aleadinoutlsdh_2a_int", "sitting_loop_wade", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Emma
                                        else if (entity.getModel() == 1906124788) entity.taskPlayAnim("missstrip_club_lean", "player_lean_rail_loop", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Frank

                                            else if (entity.getModel() == 1596003233) entity.taskPlayAnim("misstrevor2", "gang_chatting_idle02_a", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Muscle Prisoner
                                                else if (entity.getModel() == 2506301981) entity.taskPlayAnim("creatures@retriever@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Gang Rottweiler
                                                    else if (entity.getModel() == 882848737) entity.taskPlayAnim("creatures@retriever@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Retriever Police
                                                        else if (entity.getModel() == 1126154828) entity.taskPlayAnim("creatures@retriever@amb@world_dog_sitting@base", "base", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Shephard
                                                            else if (entity.getModel() == 3630914197) entity.taskPlayAnim("creatures@deer@amb@world_deer_grazing@idle_a", "idle_b", 8.0, 1.0, -1, 1, 0.0, false, false, false); // Retriever Police
        }
    } catch (e) {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var positions = [{ 'position': { 'x': -200.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -100.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -0.8397, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1431.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -200.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -100.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -0.8397, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -1531.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -200.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -100.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -0.8397, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 599.1603, 'y': -1631.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -100.8397, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -0.8397, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 599.1603, 'y': -1731.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': -0.8397, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 599.1603, 'y': -1831.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 99.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 599.1603, 'y': -1931.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 199.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 499.1603, 'y': -2031.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 299.1603, 'y': -2131.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 399.1603, 'y': -2131.556, 'z': 30.18104 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -2401.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -2301.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -2201.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -2101.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -2001.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1068.898, 'y': -1901.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1168.898, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1268.898, 'y': -1801.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 968.8984, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1168.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1268.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1368.898, 'y': -1701.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 768.8984, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 868.8984, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1168.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1268.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1368.898, 'y': -1601.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1268.898, 'y': -1501.556, 'z': 28.17772 }, 'color': 10 }, { 'position': { 'x': 1368.898, 'y': -1501.556, 'z': 28.17772 }, 'color': 10 }];

var blips = [];
mp.events.add('loadCaptureBlips', function (json) {
				var colors = JSON.parse(json);
				for (var i = 0; i < colors.length; i++) {
								positions[i].color = colors[i];
				}
				positions.forEach(function (element) {
								var blip = mp.game.ui.addBlipForRadius(element.position.x, element.position.y, element.position.z, 50);
								mp.game.invoke(getNative("SET_BLIP_SPRITE"), blip, 5);
								mp.game.invoke(getNative("SET_BLIP_ALPHA"), blip, 175);
								mp.game.invoke(getNative("SET_BLIP_COLOUR"), blip, element.color);
								blips.push(blip);
				});
});

var isCapture = false;
var captureAtt = 0;
var captureDef = 0;
var captureMin = 0;
var captureSec = 0;

mp.events.add('sendCaptureInformation', function (att, def, min, sec) {
				captureAtt = att;
				captureDef = def;
				captureMin = min;
				captureSec = sec;
});

mp.events.add('captureHud', function (argument) {
				isCapture = argument;
});

mp.events.add('setZoneColor', function (id, color) {
				if (blips.length == 0) return;
				mp.game.invoke(getNative("SET_BLIP_COLOUR"), blips[id], color);
});
mp.events.add('setZoneFlash', function (id, state, color) {
				if (blips.length == 1 || blips.length == 0) {
								if (state) {
												var blip = mp.game.ui.addBlipForRadius(positions[id].position.x, positions[id].position.y, positions[id].position.z, 50);
												mp.game.invoke(getNative("SET_BLIP_SPRITE"), blip, 5);
												mp.game.invoke(getNative("SET_BLIP_ALPHA"), blip, 175);
												mp.game.invoke(getNative("SET_BLIP_COLOUR"), blip, color);
												blips[id] = blip;
								} else {
												if (blips.length == 0) return;
												mp.game.invoke(getNative("SET_BLIP_ALPHA"), blips[id], 0);
								}
				}

				mp.game.invoke(getNative("SET_BLIP_FLASH_TIMER"), blips[id], 1000);
				mp.game.invoke(getNative("SET_BLIP_FLASHES"), blips[id], state);
});

mp.events.add('render', function () {
				if (isCapture) {
								mp.game.graphics.drawText('~b~' + captureDef + ' v~r~s ' + captureAtt, [0.5, 0.005], {
												font: 0,
												color: [255, 255, 255, 185],
												scale: [0.5, 0.5],
												outline: true
								});
								mp.game.graphics.drawText(captureMin + ':' + captureSec, [0.5, 0.05], {
												font: 0,
												color: [255, 255, 255, 185],
												scale: [0.5, 0.5],
												outline: true
								});
				}

				if (blips.length !== 0) {
								blips.forEach(function (blip) {
												mp.game.invoke(getNative("SET_BLIP_ROTATION"), blip, 0);
								});
				}
});

mp.events.add('quitcmd', function () {
				mp.events.callRemote('kickclient');
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// credits to ragempdev

var controlsIds = {
    F11: 0x7A,
    W: 32,
    S: 33,
    A: 34,
    D: 35,
    Space: 321,
    LCtrl: 326,
    LMB: 24,
    RMB: 25
};

global.fly = {
    flying: false, f: 2.0, w: 2.0, h: 2.0, point_distance: 1000
};
global.gameplayCam = mp.cameras.new('gameplay');

var direction = null;
var coords = null;

function pointingAt(distance) {
    var farAway = new mp.Vector3(direction.x * distance + coords.x, direction.y * distance + coords.y, direction.z * distance + coords.z);

    var result = mp.raycasting.testPointToPoint(coords, farAway, [1, 16]);
    if (result === undefined) {
        return 'undefined';
    }
    return result;
}

mp.events.add("AGM", function (toggle) {
    global.admingm = toggle;
    global.localplayer.setInvincible(toggle);
    mp.game.graphics.notify(toggle ? 'GM: ~g~Enabled' : 'GM: ~r~Disabled');
});

mp.keys.bind(global.Keys.VK_F11, false, function () {
    if (!global.loggedin || global.localplayer.getVariable('IS_ADMIN') !== true) return;

    var controls = mp.game.controls;
    var fly = global.fly;
    direction = global.gameplayCam.getDirection();
    coords = global.gameplayCam.getCoord();

    fly.flying = !fly.flying;

    var player = mp.players.local;

    if (!global.admingm) player.setInvincible(fly.flying);
    player.freezePosition(fly.flying);
    player.setAlpha(fly.flying ? 0 : 255);

    if (!fly.flying && !controls.isControlPressed(0, controlsIds.Space)) {
        var position = mp.players.local.position;
        position.z = mp.game.gameplay.getGroundZFor3dCoord(position.x, position.y, position.z, 0.0, false);
        mp.players.local.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
    }

    mp.events.callRemote('invisible', fly.flying);
    mp.game.graphics.notify(fly.flying ? 'Fly: ~g~Enabled' : 'Fly: ~r~Disabled');
});

mp.events.add('render', function () {
    if (fly.flying) {
        var controls = mp.game.controls;
        var _fly = global.fly;
        direction = global.gameplayCam.getDirection();
        coords = global.gameplayCam.getCoord();

        var updated = false;
        var position = mp.players.local.position;
        var speed;
        if (controls.isControlPressed(0, controlsIds.LMB)) speed = 1.0;else if (controls.isControlPressed(0, controlsIds.RMB)) speed = 0.02;else speed = 0.2;
        if (controls.isControlPressed(0, controlsIds.W)) {
            if (_fly.f < 8.0) _fly.f *= 1.025;
            position.x += direction.x * _fly.f * speed;
            position.y += direction.y * _fly.f * speed;
            position.z += direction.z * _fly.f * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.S)) {
            if (_fly.f < 8.0) _fly.f *= 1.025;
            position.x -= direction.x * _fly.f * speed;
            position.y -= direction.y * _fly.f * speed;
            position.z -= direction.z * _fly.f * speed;
            updated = true;
        } else _fly.f = 2.0;
        if (controls.isControlPressed(0, controlsIds.A)) {
            if (_fly.l < 8.0) _fly.l *= 1.025;
            position.x += -direction.y * _fly.l * speed;
            position.y += direction.x * _fly.l * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.D)) {
            if (_fly.l < 8.0) _fly.l *= 1.05;
            position.x -= -direction.y * _fly.l * speed;
            position.y -= direction.x * _fly.l * speed;
            updated = true;
        } else _fly.l = 2.0;
        if (controls.isControlPressed(0, controlsIds.Space)) {
            if (_fly.h < 8.0) _fly.h *= 1.025;
            position.z += _fly.h * speed;
            updated = true;
        } else if (controls.isControlPressed(0, controlsIds.LCtrl)) {
            if (_fly.h < 8.0) _fly.h *= 1.05;
            position.z -= _fly.h * speed;
            updated = true;
        } else _fly.h = 2.0;
        if (updated) mp.players.local.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
    }
});

mp.events.add('getCamCoords', function (name) {
    mp.events.callRemote('saveCamCoords', JSON.stringify(coords), JSON.stringify(pointingAt(fly.point_distance)), name);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var updateGameTime = true;
var setTimeCMDused = false;

var nowTime = { Hour: 0, Minute: 0 };
var nowDate = { Day: 7, Month: 4, Year: 2018 };
var nowWeather = "EXTRASUNNY";

mp.events.add('Enviroment_Time', function (data) {
    if (data == undefined) return;
    if (updateGameTime) mp.game.time.setClockTime(data[0], data[1], 0);

    nowTime.Hour = data[0];
    nowTime.Minute = data[1];

    mp.gui.emmit('window.hud.updateServerInfo("servertime", \'' + global.formatIntZero(data[0], 2) + ':' + global.formatIntZero(data[1], 2) + '\')', false);
});

mp.events.add('Enviroment_Date', function (data) {
    if (data == undefined) return;

    nowDate.Day = data[0];
    nowDate.Month = data[1];
    nowDate.Year = data[2];

    mp.gui.emmit('window.hud.updateServerInfo("serverdate", \'' + global.formatIntZero(data[0], 2) + '.' + global.formatIntZero(data[1], 2) + '.' + data[2] + '\')', false);
});

mp.events.add('Enviroment_Weather', function (weather) {
    if (updateGameTime) mp.game.gameplay.setWeatherTypeTransition(nowWeather, weather, 0.5);else if (setTimeCMDused) mp.game.gameplay.setWeatherTypeNow(weather);
    nowWeather = weather;
});

mp.events.add('Enviroment_Start', function (timeData, dateData, weather) {
    mp.game.time.setClockTime(timeData[0], timeData[1], 0);

    nowTime.Hour = timeData[0];
    nowTime.Minute = timeData[1];

    mp.gui.emmit('window.hud.updateServerInfo("servertime", \'' + global.formatIntZero(nowTime.Hour, 2) + ':' + global.formatIntZero(nowTime.Minute, 2) + '\')');

    nowDate.Day = dateData[0];
    nowDate.Month = dateData[1];
    nowDate.Year = dateData[2];

    mp.gui.emmit('window.hud.updateServerInfo("serverdate", \'' + global.formatIntZero(nowDate.Day, 2) + '.' + global.formatIntZero(nowDate.Month, 2) + '.' + nowDate.Year + '\')', false);

    mp.game.gameplay.setWeatherTypeTransition(nowWeather, weather, 0.5);
    nowWeather = weather;
});

setInterval(function () {
    if (updateGameTime) {
        mp.game.gameplay.setWeatherTypeNow(nowWeather);
    }
}, 1000);
mp.events.add('setTimeCmd', function (hour, minute, second) {
    if (hour == -1 && minute == -1 && second == -1) {
        setTimeCMDused = false;
        updateGameTime = true;
        mp.game.gameplay.setWeatherTypeNow(nowWeather);
        mp.game.time.setClockTime(nowTime.Hour, nowTime.Minute, 0);
    } else {
        setTimeCMDused = true;
        updateGameTime = false;
        mp.game.time.setClockTime(hour, minute, second);
    }
});
mp.events.add('stopTime', function () {
    updateGameTime = false;

    mp.game.gameplay.setWeatherTypeNow('EXTRASUNNY');
    mp.game.time.setClockTime(0, 0, 0);
});
mp.events.add('resumeTime', function () {
    updateGameTime = true;

    mp.game.gameplay.setWeatherTypeNow(nowWeather);
    mp.game.time.setClockTime(nowTime.Hour, nowTime.Minute, 0);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var elec = null;
var elecopened = false;

mp.events.add('addcandidate', function (Name) {
	try {
		elec.AddItem(new UIMenuItem(Name, "Кандидат"));
		elecopened = true;
		elec.Open();
		mp.gui.cursor.visible = false;
		mp.gui.chat.show(false);
	} catch (e) {}
});

mp.events.add('openelem', function (firstname) {
	try {
		elec = new global.NativeMenu("ВЫБОРЫ", "Номер кандидата: ", new global.Point(50, 50));
		elec.AddItem(new UIMenuItem(firstname, "Кандидат"));
		elec.Close();
		elec.ItemSelect.on(function (item) {
			if (new Date().getTime() - global.lastCheck < 100) return;
			global.lastCheck = new Date().getTime();
			if (item instanceof UIMenuItem) {
				mp.events.callRemote("choosedelec", item.Text);
				mp.gui.cursor.visible = false;
				mp.gui.chat.show(true);
				elecopened = false;
				elec.Close();
			}
		});
		elec.MenuClose.on(function () {
			if (elecopened) elec.Open();
		});
	} catch (e) {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var rtimer = null;
var nowplaying;

function vehradio(entity) {
    if (entity && mp.vehicles.exists(entity)) {
        if (global.localplayer.vehicle == entity) {
            var vehrad = entity.getVariable('vehradio');
            nowplaying = mp.game.invoke(global.getNative("GET_PLAYER_RADIO_STATION_INDEX"));
            if (entity.getPedInSeat(-1) == global.localplayer.handle) {
                if (vehrad != nowplaying) mp.events.callRemote('VehStream_RadioChange', entity, nowplaying);
            } else {
                if (vehrad == 255) mp.game.audio.setRadioToStationName("OFF");else {
                    if (vehrad != nowplaying) {
                        mp.game.invoke(global.getNative("SET_FRONTEND_RADIO_ACTIVE"), true);
                        mp.game.invoke(global.getNative("SET_RADIO_TO_STATION_INDEX"), vehrad);
                    }
                }
            }
        }
    } else {
        if (rtimer != null) {
            clearInterval(rtimer);
            rtimer = null;
        }
    }
};

mp.events.add("playerEnterVehicle", function (entity, seat) {
    if (entity != null) {
        if (rtimer != null) clearInterval(rtimer);
        rtimer = setInterval(function () {
            vehradio(entity);
        }, 1000);
    }
});

mp.events.add("playerLeaveVehicle", function (entity) {
    if (rtimer != null) {
        clearInterval(rtimer);
        rtimer = null;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// ANIMALS
mp.peds.new(1462895032, new mp.Vector3(-550.4594, -235.0781, 37.36579), 218.8, 0);
mp.peds.new(1318032802, new mp.Vector3(-555.18, -267.6916, 35.04048), 303.2, 0);
mp.peds.new(402729631, new mp.Vector3(-555.5945, -268.7845, 37.69592), 316.7, 0);
mp.peds.new(1832265812, new mp.Vector3(564.3991, 2740.475, 41.50517), 182.1, 0);
mp.peds.new(3549666813, new mp.Vector3(-193.6039, 793.1151, 197.6122), 144.9679, 0);
mp.peds.new(2506301981, new mp.Vector3(-199.1794, -1609.419, 34.01067), 261.4599, 0);
mp.peds.new(2506301981, new mp.Vector3(85.70742, -1955.27, 20.15471), 314.5776, 0);
mp.peds.new(2506301981, new mp.Vector3(483.7948, -1519.017, 28.67134), 87.19617, 0);
mp.peds.new(2506301981, new mp.Vector3(882.3968, -2169.903, 31.65136), 189.0253, 0);
mp.peds.new(2506301981, new mp.Vector3(1416.409, -1496.435, 59.40118), 161.6646, 0);
mp.peds.new(882848737, new mp.Vector3(442.9502, -981.1665, 30.06959), 88.87737, 0);
mp.peds.new(3630914197, new mp.Vector3(-1528.098, 1753.292, 86.17753), 323.6743, 0);
mp.peds.new(1462895032, new mp.Vector3(2015.733, 4967.312, 41.87567), 258.3119, 0);

// Peds
var needped = [null, null, null];
needped[0] = mp.peds.new(-681546704, new mp.Vector3(3367.203, 5185.236, 1.4752408), 223.7976, 0);
needped[1] = mp.peds.new(-855671414, new mp.Vector3(3313.838, 5180.052, 19.66486), 229.4973, 0);
needped[2] = mp.peds.new(1906124788, new mp.Vector3(1924.431, 4922.007, 47.70858), 275.0723, 0);

mp.events.add('ChatPyBed', function (id, variation) {
	try {
		if (!global.loggedin || global.pedtimer) return;
		global.pedtimer = true;
		switch (id) {
			case 0:
				global.pedtext = "Слушай, если не влом - помоги моей тётке у дома.";
				mp.gui.chat.push("!{Red}[Bony] !{White}Слушай, если не влом - помоги моей тётке у дома.");
				global.pedsaying = needped[0];
				break;
			case 1:
				global.pedtext = "К сожалению, я занят и не смогу помочь ей сам...";
				mp.gui.chat.push("!{Red}[Bony] !{White}К сожалению, я занят и не смогу помочь ей сам...");
				global.pedsaying = needped[0];
				break;
			case 2:
				global.pedtext = "Спасибо, что нашел на меня время, мне нужна твоя помощь.";
				global.pedtext2 = "Собери и принеси мне парочку тыкв, они сзади дома.";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}Спасибо, что нашел на меня время, мне нужна твоя помощь. Собери и принеси мне парочку тыкв, они сзади дома.");
				global.pedsaying = needped[1];
				break;
			case 3:
				global.pedtext = "Спасибо, что нашла на меня время, дорогая моя!";
				global.pedtext2 = "Собери и принеси мне парочку капуст, они сзади дома.";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}Спасибо, что нашла на меня время, дорогая моя! Собери и принеси мне парочку капуст, они сзади дома.");
				global.pedsaying = needped[1];
				break;
			case 4:
				global.pedtext = "С таким количеством тыкв и делать нечего!";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}С таким количеством тыкв и делать нечего!");
				global.pedsaying = needped[1];
				break;
			case 5:
				global.pedtext = "Твоей капусты даже на салат не хватит!";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}Твоей капусты даже на салат не хватит!");
				global.pedsaying = needped[1];
				break;
			case 6:
				mp.gui.chat.push("!{Gray}[Подсказка] Наверное, этого ей хватит.");
				global.pedtimer = false;
				break;
			case 7:
				global.pedtext = "Ой, как ты быстро, а я и не ожидала, спасибо!";
				global.pedtext2 = "Держи пару монет в знак благодарности. Слушай...";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}Ой, как ты быстро, а я и не ожидала, спасибо! Держи пару монет в знак благодарности. Слушай...");
				global.pedsaying = needped[1];
				setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 8);
				}, 6100);
				break;
			case 8:
				global.pedtext = "У знакомого есть работка, живёт в Грейпсид, тут близко.";
				global.pedtext2 = "Я передала тебе бумажку с его местонахождением, глянь.";
				mp.gui.chat.push("!{Yellow}[Emma] !{White}У знакомого есть работка, живёт в Грейпсид, тут близко. Я передала тебе бумажку с его местонахождением, глянь.");
				global.pedsaying = needped[1];
				mp.events.call("createWaypoint", 1924.431, 4922.007);
				break;
			case 9:
				global.pedtext = "Огроменное тебе спасибо!";
				global.pedtext2 = "Держи, это от меня, так сказать - благодарность!";
				mp.gui.chat.push("!{Red}[Bony] !{White}Огроменное тебе спасибо! Держи, это от меня, так сказать - благодарность!");
				global.pedsaying = needped[0];
				break;
			case 10:
				global.pedtext = "О, привет! А Эмма говорила о тебе!";
				global.pedtext2 = "Я так понимаю, тебе нужна работка, да?";
				mp.gui.chat.push("!{Orange}[Frank] !{White}О, привет! А Эмма говорила о тебе! Я так понимаю, тебе нужна работка, да?");
				global.pedsaying = needped[2];
				if (variation == 0) setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 11);
				}, 6100);else if (variation == 1) setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 12);
				}, 6100);
				break;
			case 11:
				global.pedtext = "Хотел попросить включить водяной насос, но";
				global.pedtext2 = "пошел дождь, тебе повезло, держи монетку.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Хотел попросить включить водяной насос, но пошел дождь, тебе повезло, держи монетку.");
				global.pedsaying = needped[2];
				break;
			case 12:
				global.pedtext = "Мне как раз нужно включить водяной насос!";
				global.pedtext2 = "Сбегай, пожалуйста, включи его.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Мне как раз нужно включить водяной насос! Сбегай, пожалуйста, включи его.");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 2043.343, 4853.748);
				break;
			case 13:
				global.pedtext = "Отлично, теперь растениям не страшна жара!";
				global.pedtext2 = "Если ты захочешь еще подзаработать - обращайся.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Отлично, теперь растениям не страшна жара! Если ты захочешь еще работки - обращайся.");
				global.pedsaying = needped[2];
				break;
			case 14:
				global.pedtext = "Вижу, тебе нетерпится получить еще денег? Ха-ха.";
				global.pedtext2 = "Лааадно, у меня там трактор в гараже, привези его сюда.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Вижу, тебе нетерпится получить еще денег? Ха-ха. Лааадно, у меня там трактор в гараже, привези его сюда.");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 1981.87, 5174.382);
				break;
			case 15:
				global.pedtext = "Эх, вот бы трактор сюда, а то поля-то ждут...";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Эх, вот бы трактор сюда, а то поля-то ждут...");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 1981.87, 5174.382);
				break;
			case 16:
				global.pedtext = "О, наконец-то! Надеюсь, трактор не поцарапал?";
				global.pedtext2 = "Да ладно, я шучу! Ха-ха-ха. Денюжка твоя.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}О, наконец-то! Надеюсь, трактор не поцарапал? Да ладно, я шучу! Ха-ха-ха. Денюжка твоя.");
				global.pedsaying = needped[2];
				break;
			case 17:
				global.pedtext = "Прости, пока пусто. Поищи работку в городе.";
				global.pedtext2 = "В будущем, у меня будет много дел для тебя.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Прости, мне пока нечего тебе дать...");
				global.pedsaying = needped[2];
				break;
			case 18:
				global.pedtext = "Слушай, мне очень неловко тебя об этом просить,";
				global.pedtext2 = "но, пожалуйста, сделай для меня одолжение...";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Слушай, мне очень неловко тебя об этом просить, но, пожалуйста, сделай для меня одолжение...");
				global.pedsaying = needped[2];
				setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 19);
				}, 6100);
				break;
			case 19:
				global.pedtext = "Сбегай в ближайший 24/7 и купи мне SIM-карту,";
				global.pedtext2 = "буду очень тебе благодарен!";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Сбегай в ближайший 24/7 и купи мне SIM-карту, буду очень тебе благодарен!");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 1699.871, 4928.831);
				break;
			case 20:
				global.pedtext = "Я понимаю, что это странная просьба, но,";
				global.pedtext2 = "пожалуйста, купи мне SIM-карту.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Я понимаю, что это странная просьба, но, пожалуйста, купи мне SIM-карту.");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 1699.871, 4928.831);
				break;
			case 21:
				global.pedtext = "Блин, супер, спасибо! Сколько я тебе должен за неё?";
				global.pedtext2 = "Хотя, чего мелочится, держи 500$. А еще...";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Блин, супер, спасибо! Сколько я тебе должен за неё? Хотя, чего мелочится, держи 500$. А еще...");
				global.pedsaying = needped[2];
				setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 22);
				}, 6100);
				break;
			case 22:
				global.pedtext = "Я понимаю, что уже надоел тебе, но найди мою";
				global.pedtext2 = "кошку, она должна быть у дома напротив меня и";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Я понимаю, что уже надоел тебе, но найди мою кошку, она должна быть у дома напротив меня и");
				global.pedsaying = needped[2];
				setTimeout(function () {
					global.pedtimer = false;mp.events.call("ChatPyBed", 23);
				}, 6100);
				break;
			case 23:
				global.pedtext = "не беспокойся, что там здание UNION G.S.,";
				global.pedtext2 = "компания пару лет как не работает, охраны нет.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}не беспокойся, что там здание UNION G.S., компания пару лет как не работает, охраны нет.");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 2015.733, 4967.312);
				break;
			case 24:
				global.pedtext = "Пожалуйста, найди кошку, я переживаю за неё!";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Пожалуйста, найди кошку, я переживаю за неё!");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 2015.733, 4967.312);
				break;
			case 25:
				global.pedtext = "Спасибо тебе! Еще раз извини и держи 100$.";
				global.pedtext2 = "Чтобы добраться в город - беги к таксопарку.";
				mp.gui.chat.push("!{Orange}[Frank] !{White}Спасибо тебе! Еще раз извини и держи 100$. Чтобы добраться в город - беги к таксопарку.");
				global.pedsaying = needped[2];
				mp.events.call("createWaypoint", 1802.69, 4588.494);
				break;
		}
		if (global.pedtimer == true) {
			if (global.pedtext2 == null) setTimeout(function () {
				global.pedsaying = null;global.pedtext = "";global.pedtimer = false;
			}, 3000);else setTimeout(function () {
				global.pedsaying = null;global.pedtext = "";global.pedtext2 = null;global.pedtimer = false;
			}, 6000);
		}
	} catch (e) {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// ATM //
var atmIndex = 0;
var atmTcheck = 0;
var ATMTemp = "";

mp.events.add('openatm', function () {
    if (global.menuCheck()) return;
    mp.gui.emmit('window.pages.updateDynamicPage("atm")');
    global.menuOpen(false);
});

mp.events.add('closeatm', function () {
    global.menuClose(false);
    mp.gui.emmit('window.atm.reset()');
    mp.gui.emmit('window.pages.updateDynamicPage("")');
});

mp.events.add('setatm', function (num, name, bal, sub) {
    mp.gui.emmit('window.atm.set(\'' + num + '\',\'' + name + '\',\'' + bal + '\',\'' + sub + '\')');
});

mp.events.add('setbank', function (bal) {
    mp.gui.emmit('window.atm.setBalance(' + bal + ')');
});

mp.events.add('atmCB', function (type, data) {
    mp.events.callRemote('atmCB', type, data);
});

mp.events.add('atmVal', function (data) {
    if (new Date().getTime() - atmTcheck < 1000) {
        mp.events.callRemote('atmDP');
    } else {
        mp.events.callRemote('atmVal', data);
        atmTcheck = new Date().getTime();
    }
});

mp.events.add('atmOpen', function (data) {
    mp.gui.emmit('window.atm.open(' + data + ')');
});

mp.events.add('atmOpenBiz', function (data1, data2) {
    mp.gui.emmit('window.atm.open([3, ' + data1 + ', ' + data2 + '])');
});

mp.events.add('atm', function (index, data) {
    if (index == 4) {
        ATMTemp = data;
        mp.gui.emmit('window.atm.change(44)');
    } else if (index == 44) {
        mp.events.callRemote('atm', 4, data, ATMTemp);
        mp.gui.emmit('atm.reset()');
        return;
    } else if (index == 33) {
        mp.events.callRemote('atm', 3, data, ATMTemp);
    } else {
        mp.events.callRemote('atm', index, data);
        mp.gui.emmit('atm.reset()');
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

mp.gui.cursor.visible = true;
mp.game.ui.setPauseMenuActive(false);

setTimeout(function () {
    var cam = mp.cameras.new('default', new mp.Vector3(-95, 19, 1182), new mp.Vector3(0, 0, 0), 70);
    cam.pointAtCoord(-95, 19, 0);
    cam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
}, 500);

var lastButAuth = 0;
var lastButSlots = 0;

// events from cef
mp.events.add('client:OnSignIn', function (username, password) {
    if (new Date().getTime() - lastButAuth < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButAuth = new Date().getTime();
    mp.events.callRemote('signin', username, password);
});

mp.events.add('restorepass', function (state, authData) {
    if (new Date().getTime() - lastButAuth < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButAuth = new Date().getTime();

    authData = JSON.parse(authData);

    var nameorcode = authData['entry-login'];

    mp.events.callRemote('restorepass', state, nameorcode);
});

mp.events.add('client:OnSignUp', function (username, email, promo, pass1, pass2) {
    if (new Date().getTime() - lastButAuth < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButAuth = new Date().getTime();

    if (checkLogin(username) || username.length > 50) {
        mp.events.call('notify', 1, 9, 'Логин не соответствует формату или слишком длинный!', 3000);
        return;
    }

    if (pass1 != pass2) {
        mp.events.call('notify', 1, 9, 'Пароли не совпадают!', 3000);
        return;
    }

    if (pass1.length < 3) {
        mp.events.call('notify', 1, 9, 'Ошибка при вводе пароля!', 3000);
        return;
    }

    mp.events.callRemote('signup', username, pass1, email, promo);
});

mp.events.add('client:OnSelectCharacter', function (slot) {

    if (new Date().getTime() - lastButSlots < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }

    lastButSlots = new Date().getTime();
    mp.events.callRemote('selectchar', slot);
});

mp.events.add('client:OnCreateCharacter', function (slot, name, lastname) {
    if (checkName(name) || !checkName2(name) || name.length > 25 || name.length <= 2) {
        mp.events.call('notify', 1, 9, 'Правильный формат имени: 3-25 символов и первая буква имени заглавная', 3000);
        return;
    }

    if (checkName(lastname) || !checkName2(lastname) || lastname.length > 25 || lastname.length <= 2) {
        mp.events.call('notify', 1, 9, 'Правильный формат фамилии: 3-25 символов и первая буква фамилии заглавная', 3000);
        return;
    }

    if (new Date().getTime() - lastButSlots < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButSlots = new Date().getTime();

    mp.events.callRemote('newchar', slot, name, lastname);
});

mp.events.add('delChar', function (slot, name, lastname, pass) {
    if (checkName(name) || name.length > 25 || name.length <= 2) {
        mp.events.call('notify', 1, 9, 'Правильный формат имени: 3-25 символов и первая буква имени заглавная', 3000);
        return;
    }

    if (checkName(lastname) || lastname.length > 25 || lastname.length <= 2) {
        mp.events.call('notify', 1, 9, 'Правильный формат фамилии: 3-25 символов и первая буква фамилии заглавная', 3000);
        return;
    }

    if (new Date().getTime() - lastButSlots < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButSlots = new Date().getTime();

    mp.events.callRemote('delchar', slot, name, lastname, pass);
});

mp.events.add('transferChar', function (slot, name, lastname, pass) {
    if (checkName(name)) {
        mp.events.call('notify', 1, 9, 'Имя не соответствует формату или слишком длинное!', 3000);
        return;
    }

    if (checkName(lastname)) {
        mp.events.call('notify', 1, 9, 'Фамилия не соответствует формату или слишком длинное!', 3000);
        return;
    }

    if (new Date().getTime() - lastButSlots < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButSlots = new Date().getTime();

    mp.events.callRemote('transferchar', slot, name, lastname, pass);
});

mp.events.add('client:OnSelectSpawn', function (selectedspawn) {
    mp.events.callRemote('spawn', selectedspawn);
});

mp.events.add('buyNewSlot', function (data) {
    if (new Date().getTime() - lastButSlots < 3000) {
        mp.events.call('notify', 4, 9, "Слишком быстро", 3000);
        return;
    }
    lastButSlots = new Date().getTime();
    mp.events.callRemote('donate', 8, data);
});

// events from server
mp.events.add('delCharSuccess', function (data) {
    auth.execute('delchar(' + data + ')');
});

mp.events.add('unlockSlot', function (data) {
    auth.execute('unlockSlot(' + data + ')');
});

mp.events.add('toslots', function (data) {
    mp.gui.emmit('window.authentication.switchToCharacterSelector(\'' + data + '\')');
});

mp.events.add('spawnShow', function (data) {
    if (data !== false) {
        mp.gui.emmit('window.authentication.switchToRespawnSelector(\'' + data + '\')');
    }
});

mp.events.add('ready', function () {
    global.loggedin = true;
    global.menuClose();
    mp.game.cam.renderScriptCams(false, true, 3000, true, true);

    mp.events.call('showHUD', true);
    mp.events.call('hideTun');
    mp.game.player.setHealthRechargeMultiplier(0);
    mp.gui.emmit('window.authentication.switchToGame()');
});

function checkLogin(str) {
    return !/^[a-zA-Z1-9]*$/g.test(str);
}

function checkName(str) {
    return !/^[a-zA-Z]*$/g.test(str);
}

function checkName2(str) {
    var ascii = str.charCodeAt(0);
    if (ascii < 65 || ascii > 90) return false; // Если первый символ не заглавный, сразу отказ
    var bsymbs = 0; // Кол-во заглавных символов
    for (var i = 0; i != str.length; i++) {
        ascii = str.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) bsymbs++;
    }
    if (bsymbs > 2) return false; // Если больше 2х заглавных символов, то отказ. (На сервере по правилам разрешено иметь Фамилию, например McCry, то есть с приставками).
    return true; // string (имя или фамилия) соответствует
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

mp.keys.bind(global.Keys.VK_T, true, function () {
    if (global.loggedin === true && global.chatActive === false) {
        mp.gui.emmit('window.chat.toggleInput(true)');
        mp.gui.cursor.visible = true;
        global.chatActive = true;
    }
});

mp.keys.bind(global.Keys.VK_ESCAPE, false, function () {
    if (global.loggedin === true && global.chatActive === true) {
        mp.gui.emmit('window.chat.toggleInput(false)');
        mp.gui.cursor.visible = false;
        mp.game.ui.setPauseMenuActive(false);
        global.chatActive = false;
    }
});

mp.events.add('client:OnChatInputChanged', function (toggled) {
    mp.gui.cursor.visible = toggled;
    global.chatActive = toggled;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Color picker //
mp.events.add('showColorp', function () {
    mp.gui.emmit('window.modal.updateModalMenu("color");');
});

mp.events.add('hideColorp', function () {
    mp.gui.emmit('window.modal.updateModalMenu("");');
});

// Selected color event
mp.events.add('scolor', function (c) {
    // JSON String
    // c = {r: 255, g: 255, b: 255}
    c = JSON.parse(c);
    mp.events.call("tunColor", c);
});

// Button events
mp.events.add('colors', function (btn) {
    switch (btn) {
        case "apply":
            //onapply
            break;
        case "cancel":
            //onbreak
            break;
    }
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var text = "";
var canback = "";
var menuWasopened = false;
var lastTime = false;

global.openDialog = function () {
    lastTime = 0;
    mp.gui.emmit("window.modal.updateModalMenu(\"confirm\")," + ("window.confirm.setText(\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\",\"" + text + "\");"));

    global.menuWasopened = global.menuOpened;
    mp.gui.cursor.visible = true;
    if (!global.menuOpened) global.menuOpen(false);
    mp.events.call('startScreenEffect', "MenuMGHeistIn", 1, true);
};

global.closeDialog = function () {
    mp.gui.emmit('window.modal.updateModalMenu("")');
    if (!global.menuWasopened) global.menuClose(false);
    mp.events.call('stopScreenEffect', "MenuMGHeistIn");
};

mp.events.add('openDialog', function (cback, ctext) {
    // Добавить title!!!
    canback = cback;
    text = ctext;
    global.openDialog();
    mp.gui.cursor.visible = true;
});

mp.events.add('closeDialog', function () {
    global.closeDialog();
});

mp.events.add('client:OnDialogCallback', function (state) {
    if (canback == 'tuningbuy') mp.events.call('tunbuy', state);else mp.events.callRemote('dialogCallback', canback, state);
    global.closeDialog();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.deathTimerOn = false;
var deathTimer = 0;

// Disable auto screen fade
mp.game.gameplay.disableAutomaticRespawn(true);
mp.game.gameplay.ignoreNextRestart(true);
mp.game.gameplay.setFadeOutAfterDeath(false);
mp.game.gameplay.setFadeInAfterDeathArrest(false);
mp.game.gameplay.setFadeInAfterLoad(false);

mp.events.add('DeathTimer', function (time) {

    if (time === false) {
        global.deathTimerOn = false;
    } else {
        global.deathTimerOn = true;
        deathTimer = new Date().getTime() + time;
    }
});

mp.events.add('render', function () {

    var isDeath = global.localplayer.getVariable('InDeath');

    if (isDeath) {
        mp.game.controls.disableAllControlActions(2);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_LR, true);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_UD, true);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_UP_ONLY, true);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_DOWN_ONLY, true);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_LEFT_ONLY, true);
        mp.game.controls.enableControlAction(2, global.Inputs.LOOK_RIGHT_ONLY, true);
    }

    if (global.deathTimerOn) {
        var secondsLeft = Math.trunc((deathTimer - new Date().getTime()) / 1000);
        var minutes = Math.trunc(secondsLeft / 60);
        var seconds = secondsLeft % 60;

        mp.gui.execute('console.log("tick")');
        mp.game.graphics.drawText('\u0414\u043E \u0441\u043C\u0435\u0440\u0442\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ' + global.formatIntZero(minutes, 2) + ':' + global.formatIntZero(seconds, 2), [0.5, 0.8], {
            font: 0,
            color: [255, 255, 255, 200],
            scale: [0.35, 0.35],
            outline: true
        });
    }

    if (mp.game.controls.isControlPressed(0, 32) || mp.game.controls.isControlPressed(0, 33) || mp.game.controls.isControlPressed(0, 321) || mp.game.controls.isControlPressed(0, 34) || mp.game.controls.isControlPressed(0, 35) || mp.game.controls.isControlPressed(0, 24) || isDeath == true) {
        global.afkSecondsCount = 0;
    } else if (global.localplayer.isInAnyVehicle(false) && global.localplayer.vehicle.getSpeed() != 0) {
        global.afkSecondsCount = 0;
    } else if (global.spectating) {
        // Чтобы не кикало администратора в режиме слежки
        global.afkSecondsCount = 0;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// DIAL //
var vall, off;

mp.events.add('dial', function (act, val, reset) {
    switch (act) {
        case "open":
            if (reset == true) {
                mp.gui.emmit.execute('window.hud.updateComponent("breakinglock", false)');
                global.menuClose();
            }
            var off = Math.random(2, 5);

            mp.gui.emmit.execute('window.hud.updateComponent("breakinglock", true)');
            val = val, off = off;
            mp.gui.emmit.execute('window.breakinglock.setData(' + val + ',' + off + ')');

            global.menuOpen();
            break;
        case "close":
            mp.gui.emmit.execute('window.hud.updateComponent("breakinglock", false)');
            global.menuClose();
            break;
        case "call":
            mp.events.callRemote('dialPress', val);
            global.menuClose();
            break;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

setInterval(function () {
    var name = global.localplayer.getVariable('REMOTE_ID') == undefined ? '\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D' : '\u0418\u0433\u0440\u043E\u043A \u2116' + global.localplayer.getVariable("REMOTE_ID");
    mp.discord.update('redage.net RolePlay', name);
}, 10000);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var donateOpened = false;
var redbucks = 0;

mp.keys.bind(global.Keys.VK_F9, false, function () {
    // F9
    if (!global.loggedin) return;

    if (global.menuCheck()) {
        if (donateOpened) {
            global.menuClose(false);
            mp.gui.emmit('window.pages.updateDynamicPage(\'\')');
            donateOpened = false;
        }
    } else {
        global.menuOpen(false);
        donateOpened = true;
        mp.gui.emmit('window.pages.updateDynamicPage(\'donate\')');
    }
});

mp.keys.bind(global.Keys.VK_ESCAPE, false, function () {
    if (donateOpened) {
        global.menuClose(false);
        mp.gui.emmit('window.pages.updateDynamicPage(\'\')');
        donateOpened = false;
    }
});

mp.events.add('donbuy', function (id, data) {
    global.menuClose(false);
    mp.gui.emmit('window.pages.updateDynamicPage(\'\')');
    mp.events.callRemote("donate", id, data);
});

mp.events.add('redset', function (reds) {
    redbucks = reds;
    mp.gui.emmit('window.hud.updateServerInfo("redbucks", ' + redbucks + ')');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.openFractionMenu = function () {
    if (global.menuCheck()) return;
    global.menuOpen(false);
    mp.gui.emmit('window.pages.updateDynamicPage(\'fraction\')');
};

global.closeFractionMenu = function () {
    mp.gui.emmit('window.pages.updateDynamicPage(\'\')');
    global.menuClose(false);
};

mp.events.add('openfm', function () {
    global.openFractionMenu();
});

mp.events.add('setmem', function (json, count, on, off) {
    mp.gui.emmit('window.fraction.updateMembers(\'' + json + '\',' + count + ',' + on + ',' + off + ');');
});

mp.events.add('closefm', function () {
    global.closeFractionMenu();
});

mp.events.add('fmenu', function (act, data1, data2) {
    global.closeFractionMenu();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var helpMenuState = false;

var closeHelpMenu = function closeHelpMenu() {

    if (helpMenuState) {
        mp.gui.emmit('window.pages.updateDynamicPage(\'\')');
        helpMenuState = false;
        global.menuClose(false);
        mp.gui.cursor.visible = false;
    }
};

mp.events.add('client:OnCloseHelpMenu', function () {
    closeHelpMenu();
});

mp.keys.bind(global.Keys.VK_F10, false, function () {

    if (!helpMenuState) {
        global.menuOpen(false);
        mp.gui.emmit('window.pages.updateDynamicPage(\'help\')');
        helpMenuState = true;
        mp.gui.cursor.visible = true;
    } else closeHelpMenu();
});

mp.keys.bind(global.Keys.VK_ESC, false, closeHelpMenu());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var jobselectorOpened = false;

mp.events.add("showJobMenu", function (level, currentjob) {
    mp.gui.cursor.visible = true;
    jobselectorOpened = true;

    mp.gui.emmit("window.modal.updateModalMenu(\"jobselector\")," + ("window.jobselector.setData(" + level + "," + currentjob + ");"));
});

mp.events.add("closeJobMenu", function () {
    mp.gui.cursor.visible = false;
    jobselectorOpened = false;
    mp.gui.emmit("window.modal.updateModalMenu(\"\")");
});

mp.keys.bind(global.Keys.VK_ESCAPE, false, function () {
    if (jobselectorOpened) {
        mp.gui.cursor.visible = false;
        jobselectorOpened = false;
        mp.gui.emmit("window.modal.updateModalMenu(\"\")");
    }
});

mp.events.add("selectJob", function (jobid) {
    if (new Date().getTime() - global.lastCheck < 1000) return;
    global.lastCheck = new Date().getTime();
    mp.events.callRemote("jobjoin", jobid);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// ELEVATOR //
var liftcBack = "";

function openLift(type, cBack) {
    if (global.menuCheck()) return;
    var floors = [["Гараж", "1 этаж", "49 этаж", "Крыша"]];
    var json = JSON.stringify(floors[type]);
    mp.gui.emmit("window.hud.updateComponent(\"lift\", true)");
    mp.gui.emmit("window.lift.set('" + json + "');");
    global.menuOpen(false);
    liftcBack = cBack;
}
function closeLift() {
    global.menuClose(false);
    mp.gui.emmit('window.lift.reset()');
    mp.gui.emmit("window.hud.updateComponent(\"lift\", false)");
    liftcBack = "";
}

mp.events.add('openlift', function (type, cBack) {
    openLift(type, cBack);
});

mp.events.add('lift', function (act, data) {
    switch (act) {
        case "stop":
            closeLift();
            break;
        case "start":
            mp.events.callRemote(liftcBack, data);
            closeLift();
            break;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

mp.events.add('adminChange', function (adminlevel) {
    global.pAdmin = adminlevel;
});

mp.events.add('fractionChange', function (fraction) {
    global.pFraction = fraction;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// SIMPLE MENU //
global.openSM = function (type, data) {
    if (global.menuCheck()) return;

    var execute = 'window.modal.updateModalMenu("menu"),';
    switch (type) {
        case 1:
            execute += 'window.menu.openShop(\'' + data + '\');';break;
        case 2:
            execute += 'window.menu.openBlack(\'' + data + '\');';break;
        case 3:
            execute += 'window.menu.openFib(\'' + data + '\');';break;
        case 4:
            execute += 'window.menu.openLspd(\'' + data + '\');';break;
        case 5:
            execute += 'window.menu.openArmy(\'' + data + '\');';break;
        case 6:
            execute += 'window.menu.openGov(\'' + data + '\');';break;
        case 7:
            execute += 'window.menu.openArmygun(\'' + data + '\');';break;
        case 8:
            execute += 'window.menu.openGang(\'' + data + '\');';break;
        case 9:
            execute += 'window.menu.openMafia(\'' + data + '\');';break;
    }
    mp.gui.emmit(execute);
    global.menuOpen(false);
};

global.closeSM = function () {
    global.mp.gui.emmit('window.modal.updateModalMenu("");');
    global.menuClose(false);
};

mp.events.add('smExit', function () {
    global.closeSM();
});

mp.events.add('smOpen', function (type, data) {
    global.openSM(type, data);
});

mp.events.add('menu', function (action, data) {
    switch (action) {
        case "resign":
            mp.events.callRemote('jobjoin', -1);
            break;
        case "work":
            mp.events.callRemote('jobjoin', data);
            break;
        case "shop":
            mp.events.callRemote('shop', data);
            break;
        case "black":
            mp.events.callRemote('mavrbuy', data);
            break;
        case "fib":
            mp.events.callRemote('fbigun', data);
            break;
        case "lspd":
            mp.events.callRemote('lspdgun', data);
            break;
        case "army":
            mp.events.callRemote('armygun', data);
            break;
        case "gov":
            mp.events.callRemote('govgun', data);
            break;
        case "gang":
            mp.events.callRemote('gangmis', data);
            break;
        case "mafia":
            mp.events.callRemote('mafiamis', data);
            break;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// WEAPON SHOP //
var weaponShopOpened = false;

var wshop = {
    lid: -1,
    tab: 0,
    data: []
};

mp.events.add('wshop', function (act, value, sub) {

    if (new Date().getTime() - global.lastCheck < 50) return;
    global.lastCheck = new Date().getTime();

    switch (act) {
        case "cat":
            if (value == 4) return;
            wshop.tab = value;
            weaponShopOpened = true;
            mp.gui.emmit("window.modal.updateModalMenu(\"weaponshop\")," + ("window.weaponshop.setData(" + value + ",'" + JSON.stringify(wshop.data[value]) + "')"));
            break;
        case "buy":
            mp.events.callRemote('wshop', wshop.tab, value);
            break;
        case "rangebuy":
            mp.events.callRemote('wshopammo', value, sub);
            break;
    }
});

mp.events.add('openWShop', function (id, json) {
    if (global.menuCheck()) return;
    global.menuOpen(false);
    if (id !== wshop.lid) wshop.data = JSON.parse(json);

    weaponShopOpened = true;
    mp.gui.emmit("window.modal.updateModalMenu(\"weaponshop\")," + ("window.weaponshop.setData(0,'" + JSON.stringify(wshop.data[0]) + "')"));
    wshop.lid = id;
});

mp.events.add('closeWShop', function () {
    global.menuClose(false);
    weaponShopOpened = false;
    mp.gui.emmit("window.modal.updateModalMenu(\"\")");
    wshop.tab = 0;
});

mp.keys.bind(global.Keys.VK_ESCAPE, false, function () {
    if (weaponShopOpened) {
        global.menuClose(false);
        weaponShopOpened = false;
        mp.gui.emmit("window.modal.updateModalMenu(\"\")");
        wshop.tab = 0;
    }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function formatIntZero(num, length) {

    return ("0" + num).slice(length);
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.gtainterface = {
    safezone: 0.0,
    aspect_ratio: 0.0,
    res: { x: 0, y: 0 }
};

var last_pausemenustatus = false;
var last_cursorstate = false;

mp.gui.emmit = function (execute) {
    var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (log) {
        var text = "[cef debug] " + execute;
        mp.gui.execute("console.log(" + JSON.stringify(text) + ")");
        //mp.gui.chat.push(text);
    }
    mp.gui.execute(execute);
};

mp.gui.emmit("window.location = 'package://interface/index.html'");

setInterval(function () {

    // Исправляем баг с курсором в меню паузы
    if (last_pausemenustatus == false && mp.game.ui.isPauseMenuActive()) {
        last_pausemenustatus = true;
        last_cursorstate = mp.gui.cursor.visible;
        mp.gui.cursor.visible = false;
    } else if (last_pausemenustatus == true && !mp.game.ui.isPauseMenuActive()) {
        last_pausemenustatus = false;
        mp.gui.cursor.visible = last_cursorstate;
    }

    // Обновляем безопасную зону
    var updateanchor = false;

    var temp_safezone = mp.game.graphics.getSafeZoneSize();
    if (temp_safezone != global.gtainterface.safezone) {
        global.gtainterface.safezone = temp_safezone;

        updateanchor = true;
    }

    var temp_aspect_ratio = mp.game.graphics.getScreenAspectRatio(false);
    if (temp_aspect_ratio != global.gtainterface.aspect_ratio) {
        global.gtainterface.aspect_ratio = temp_aspect_ratio;

        updateanchor = true;
    }

    var temp_res = mp.game.graphics.getScreenActiveResolution(0, 0);
    if (temp_res.x != global.gtainterface.res.x || temp_res.y != global.gtainterface.res.y) {
        global.gtainterface.res = temp_res;

        updateanchor = true;
    }

    if (updateanchor) UpdateAnchor();
}, 50);

function UpdateAnchor() {
    var new_safezone_info = {};

    var xscale = 1.0 / global.gtainterface.res.x;
    var yscale = 1.0 / global.gtainterface.res.y;

    new_safezone_info.minimap_width = xscale * (global.gtainterface.res.x / (4 * global.gtainterface.aspect_ratio));
    new_safezone_info.minimap_height = yscale * (global.gtainterface.res.y / 5.674);

    new_safezone_info.minimap_padding_left = xscale * (global.gtainterface.res.x * (1.0 / 20.0 * (Math.abs(global.gtainterface.safezone - 1.0) * 10)));
    new_safezone_info.minimap_padding_right = new_safezone_info.minimap_padding_left + new_safezone_info.minimap_width;

    /*if(global.gtainterface.res.x >= 3440)
    {
        new_safezone_info.minimap_padding_left *= 9.5;
        new_safezone_info.minimap_padding_right *= 9.5;
    }
    else if(global.gtainterface.res.x >= 2560)
    {
        new_safezone_info.minimap_padding_left *= 9.0;
        new_safezone_info.minimap_padding_right *= 9.0;
    }*/

    new_safezone_info.minimap_padding_bottom = 1.0 - yscale * (global.gtainterface.res.y * (1.0 / 20.0 * (Math.abs(global.gtainterface.safezone - 1.0) * 10)));
    new_safezone_info.minimap_padding_top = new_safezone_info.minimap_padding_bottom - new_safezone_info.minimap_height;

    new_safezone_info.xunit = xscale;
    new_safezone_info.yunit = yscale;

    new_safezone_info.safezone_padding_leftright = new_safezone_info.minimap_padding_left;
    new_safezone_info.safezone_padding_topbottom = 1.0 - new_safezone_info.minimap_padding_bottom;

    global.gtainterface.safezone_info = new_safezone_info;

    mp.gui.emmit("window.hud.updateSafeZone(" + JSON.stringify(new_safezone_info) + ")");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


mp.game.audio.setAudioFlag("DisableFlightMusic", true); // Отключаем звук при полёте.

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lastScreenEffect = "";
mp.events.add('startScreenEffect', function (effectName, duration, looped) {
	try {
		lastScreenEffect = effectName;
		mp.game.graphics.startScreenEffect(effectName, duration, looped);
	} catch (e) {}
});

mp.events.add('stopScreenEffect', function (effectName) {
	try {
		var effect = effectName == undefined ? lastScreenEffect : effectName;
		mp.game.graphics.stopScreenEffect(effect);
	} catch (e) {}
});

mp.events.add('stopAndStartScreenEffect', function (stopEffect, startEffect, duration, looped) {
	try {
		mp.game.graphics.stopScreenEffect(stopEffect);
		mp.game.graphics.startScreenEffect(startEffect, duration, looped);
	} catch (e) {}
});

mp.events.add('screenFadeOut', function (duration) {
	mp.game.cam.doScreenFadeOut(duration);
});

mp.events.add('screenFadeIn', function (duration) {
	mp.game.cam.doScreenFadeIn(duration);
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.formatIntZero = function (num, length) {
    return ("0" + num).slice(0 - length);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


mp.game.object.doorControl(mp.game.joaat("prop_ld_bankdoors_02"), 232.6054, 214.1584, 106.4049, false, 0.0, 0.0, 0.0);
mp.game.object.doorControl(mp.game.joaat("prop_ld_bankdoors_02"), 231.5075, 216.5148, 106.4049, false, 0.0, 0.0, 0.0);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Нужно добавить описание под все IPL, чтобы понимать что подгружается

mp.game.streaming.requestIpl("bh1_47_joshhse_unburnt");
mp.game.streaming.requestIpl("bh1_47_joshhse_unburnt_lod");

mp.game.streaming.requestIpl("CanyonRvrShallow");
mp.game.streaming.requestIpl("ch1_02_open");
mp.game.streaming.requestIpl("Carwash_with_spinners");
mp.game.streaming.requestIpl("sp1_10_real_interior");
mp.game.streaming.requestIpl("sp1_10_real_interior_lod");
mp.game.streaming.requestIpl("ferris_finale_Anim");
mp.game.streaming.requestIpl("fiblobby");
mp.game.streaming.requestIpl("fiblobby_lod");
mp.game.streaming.requestIpl("apa_ss1_11_interior_v_rockclub_milo_");
mp.game.streaming.requestIpl("hei_sm_16_interior_v_bahama_milo_");
mp.game.streaming.requestIpl("hei_hw1_blimp_interior_v_comedy_milo_");
mp.game.streaming.requestIpl("coronertrash");
mp.game.streaming.requestIpl("Coroner_Int_On");
mp.game.streaming.requestIpl("gr_case6_bunkerclosed");

mp.game.streaming.removeIpl("hei_bi_hw1_13_door");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// PETROL //

mp.events.add('openPetrol', function () {
    if (global.menuCheck()) return;
    global.menuOpen(false);
    mp.gui.emmit('window.modal.updateModalMenu("petrol");');
});

mp.events.add('petrol', function (data) {
    mp.events.callRemote('petrol', data);
    global.menuClose(false);
    mp.gui.emmit('window.petrol.reset()');
    mp.gui.emmit('window.modal.updateModalMenu("");');
});

mp.events.add('petrol.full', function () {
    mp.events.callRemote('petrol', 9999);
    global.menuClose(false);
    mp.gui.emmit('window.petrol.reset()');
    mp.gui.emmit('window.modal.updateModalMenu("");');
});

mp.events.add('petrol.gov', function () {
    mp.events.callRemote('petrol', 99999);
    global.menuClose(false);
    mp.gui.emmit('window.petrol.reset()');
    mp.gui.emmit('window.modal.updateModalMenu("");');
});

mp.events.add('closePetrol', function () {
    global.menuClose(false);
    mp.gui.emmit('window.petrol.reset()');
    mp.gui.emmit('window.modal.updateModalMenu("");');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.barberPrices = JSON.parse("{\"hair\":[400,350,350,450,450,600,450,1100,450,600,600,400,350,2000,750,1500,450,600,600,400,350,2000,750,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],\"beard\":[120,120,120,120,120,160,160,160,120,120,240,240,120,120,240,200,120,160,380,360,360,180,180,260,120,120,240,200,120,160,380,360,360,180,180,260,120,180,180],\"eyebrows\":[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],\"chesthair\":[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],\"lenses\":[200,400,400,200,200,400,200,400,1000,1000],\"lipstick\":[200,400,400,200,200,400,200,400,1000,300],\"blush\":[200,400,400,200,200,400,200],\"makeup\":[120,120,120,120,120,160,160,160,120,120,240,240,120,120,240,200,120,160,380,360,360,180,180,260,120,120,240,200,120,160,380,360,360,180,180,260,120,180,180]}");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.clothesHats = JSON.parse("{\"1\":[{\"Variation\":2,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":100,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1],\"Price\":100,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1],\"Price\":200,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":630,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,4,6,7],\"Price\":630,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":750,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":250,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3,4,5],\"Price\":350,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":25,\"Colors\":[0,1,2],\"Price\":200,\"Type\":-1},{\"Variation\":26,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":1000,\"Type\":-1},{\"Variation\":27,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":2000,\"Type\":-1},{\"Variation\":28,\"Colors\":[0,1,2,3,4,5],\"Price\":500,\"Type\":-1},{\"Variation\":29,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":30,\"Colors\":[0,1],\"Price\":300,\"Type\":-1},{\"Variation\":31,\"Colors\":[0],\"Price\":300,\"Type\":-1},{\"Variation\":34,\"Colors\":[0],\"Price\":300,\"Type\":-1},{\"Variation\":36,\"Colors\":[0],\"Price\":300,\"Type\":-1},{\"Variation\":37,\"Colors\":[0,1,2,3,4,5],\"Price\":750,\"Type\":-1},{\"Variation\":40,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":42,\"Colors\":[0,1,2,3,4],\"Price\":600,\"Type\":-1},{\"Variation\":44,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":45,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":109,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1200,\"Type\":-1},{\"Variation\":132,\"Colors\":[0,1,2,3],\"Price\":600,\"Type\":-1}],\"0\":[{\"Variation\":4,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":300,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":750,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":700,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":700,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1000,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":800,\"Type\":-1},{\"Variation\":25,\"Colors\":[0],\"Price\":400,\"Type\":-1},{\"Variation\":34,\"Colors\":[0],\"Price\":250,\"Type\":-1},{\"Variation\":35,\"Colors\":[0],\"Price\":300,\"Type\":-1},{\"Variation\":43,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":900,\"Type\":-1},{\"Variation\":44,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":900,\"Type\":-1}]}");
global.clothesTops = JSON.parse("{\"1\":[{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":0},{\"Variation\":4,\"Colors\":[0,2,3,11,14],\"Price\":2000,\"Type\":0},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":700,\"Type\":0},{\"Variation\":10,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":0},{\"Variation\":20,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":29,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":9000,\"Type\":0},{\"Variation\":23,\"Colors\":[0,1,2,3],\"Price\":750,\"Type\":0},{\"Variation\":24,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":750,\"Type\":0},{\"Variation\":27,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":0},{\"Variation\":28,\"Colors\":[0,1,2],\"Price\":900,\"Type\":0},{\"Variation\":35,\"Colors\":[0,1,2,3,4,5,6],\"Price\":2000,\"Type\":0},{\"Variation\":46,\"Colors\":[0,1,2],\"Price\":15200,\"Type\":0},{\"Variation\":58,\"Colors\":[0],\"Price\":750,\"Type\":0},{\"Variation\":59,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":62,\"Colors\":[0],\"Price\":8000,\"Type\":0},{\"Variation\":70,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":3000,\"Type\":0},{\"Variation\":72,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":74,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":4000,\"Type\":0},{\"Variation\":77,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":88,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1000,\"Type\":0},{\"Variation\":99,\"Colors\":[0,1,2,3,4],\"Price\":4400,\"Type\":0},{\"Variation\":106,\"Colors\":[0],\"Price\":4000,\"Type\":0},{\"Variation\":115,\"Colors\":[0],\"Price\":4000,\"Type\":0},{\"Variation\":118,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":750,\"Type\":0},{\"Variation\":119,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1000,\"Type\":0},{\"Variation\":122,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":1000,\"Type\":0},{\"Variation\":124,\"Colors\":[0],\"Price\":1000,\"Type\":0},{\"Variation\":127,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":1000,\"Type\":0},{\"Variation\":130,\"Colors\":[0],\"Price\":1000,\"Type\":0},{\"Variation\":157,\"Colors\":[0,1,2,3],\"Price\":2800,\"Type\":0},{\"Variation\":160,\"Colors\":[0,1],\"Price\":2900,\"Type\":0},{\"Variation\":136,\"Colors\":[0,1,2,3,4,5,6],\"Price\":750,\"Type\":0},{\"Variation\":140,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":5600,\"Type\":1},{\"Variation\":142,\"Colors\":[0,1,2],\"Price\":2000,\"Type\":0},{\"Variation\":145,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":16000,\"Type\":1},{\"Variation\":151,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":156,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":163,\"Colors\":[0],\"Price\":500,\"Type\":0},{\"Variation\":166,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":167,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2000,\"Type\":0},{\"Variation\":169,\"Colors\":[0,1,2,3],\"Price\":700,\"Type\":0},{\"Variation\":170,\"Colors\":[0,1,2,3],\"Price\":2800,\"Type\":0},{\"Variation\":172,\"Colors\":[0,1,2,3],\"Price\":1400,\"Type\":0},{\"Variation\":173,\"Colors\":[0,1,2,3],\"Price\":2800,\"Type\":0},{\"Variation\":181,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":185,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":189,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1000,\"Type\":0},{\"Variation\":191,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":0},{\"Variation\":192,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1000,\"Type\":0},{\"Variation\":6,\"Colors\":[0,1,3,4,5,6,8,9,11],\"Price\":1000,\"Type\":1},{\"Variation\":19,\"Colors\":[0,1],\"Price\":20000,\"Type\":1},{\"Variation\":30,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":9200,\"Type\":1},{\"Variation\":37,\"Colors\":[0,1,2],\"Price\":1500,\"Type\":1},{\"Variation\":64,\"Colors\":[0],\"Price\":1000,\"Type\":1},{\"Variation\":68,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":1},{\"Variation\":69,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":1},{\"Variation\":76,\"Colors\":[0,1,2,3,4],\"Price\":1000,\"Type\":1},{\"Variation\":99,\"Colors\":[0,1,2,3,4],\"Price\":4600,\"Type\":1},{\"Variation\":108,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":19000,\"Type\":1},{\"Variation\":112,\"Colors\":[0],\"Price\":11000,\"Type\":1},{\"Variation\":161,\"Colors\":[0,1,2,3],\"Price\":500,\"Type\":1},{\"Variation\":162,\"Colors\":[0,1,2,3],\"Price\":3000,\"Type\":0},{\"Variation\":168,\"Colors\":[0,1,2],\"Price\":500,\"Type\":1},{\"Variation\":174,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":1},{\"Variation\":48,\"Colors\":[0],\"Price\":7000,\"Type\":2},{\"Variation\":49,\"Colors\":[0,1,2,3,4],\"Price\":6400,\"Type\":2},{\"Variation\":50,\"Colors\":[0,1,2,3,4],\"Price\":6400,\"Type\":2},{\"Variation\":53,\"Colors\":[0,1,2,3],\"Price\":6000,\"Type\":2},{\"Variation\":54,\"Colors\":[0],\"Price\":6400,\"Type\":2},{\"Variation\":57,\"Colors\":[0],\"Price\":2000,\"Type\":2},{\"Variation\":61,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":2},{\"Variation\":65,\"Colors\":[0,1,2,3],\"Price\":2600,\"Type\":2},{\"Variation\":75,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2000,\"Type\":2},{\"Variation\":78,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":2},{\"Variation\":79,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":84,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":2},{\"Variation\":86,\"Colors\":[0,1,2,3,4],\"Price\":1000,\"Type\":2},{\"Variation\":90,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":96,\"Colors\":[0],\"Price\":750,\"Type\":2},{\"Variation\":98,\"Colors\":[0,1],\"Price\":6800,\"Type\":2},{\"Variation\":105,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":107,\"Colors\":[0,1,2,3,4],\"Price\":1000,\"Type\":2},{\"Variation\":110,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":111,\"Colors\":[0,1,2,3,4,5],\"Price\":6000,\"Type\":2},{\"Variation\":113,\"Colors\":[0,1,2,3],\"Price\":500,\"Type\":2},{\"Variation\":121,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5600,\"Type\":2},{\"Variation\":125,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":129,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":134,\"Colors\":[0,1,2],\"Price\":7000,\"Type\":2},{\"Variation\":138,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":2},{\"Variation\":141,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":500,\"Type\":2},{\"Variation\":143,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1000,\"Type\":2},{\"Variation\":147,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1000,\"Type\":2},{\"Variation\":148,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":630,\"Type\":2},{\"Variation\":150,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":630,\"Type\":2},{\"Variation\":152,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":2},{\"Variation\":153,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":1000,\"Type\":2},{\"Variation\":154,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1000,\"Type\":2},{\"Variation\":165,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4400,\"Type\":2},{\"Variation\":171,\"Colors\":[0,1],\"Price\":1000,\"Type\":2},{\"Variation\":182,\"Colors\":[0,1],\"Price\":1000,\"Type\":2},{\"Variation\":184,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":2},{\"Variation\":187,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":2000,\"Type\":2},{\"Variation\":188,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2000,\"Type\":2},{\"Variation\":200,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":2},{\"Variation\":203,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":2},{\"Variation\":204,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1500,\"Type\":2},{\"Variation\":85,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":87,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5000,\"Type\":2},{\"Variation\":89,\"Colors\":[0,1,2,3],\"Price\":750,\"Type\":2},{\"Variation\":190,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":750,\"Type\":2},{\"Variation\":175,\"Colors\":[0,1,2,3],\"Price\":4400,\"Type\":1},{\"Variation\":177,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4200,\"Type\":2},{\"Variation\":179,\"Colors\":[0,1,2,3],\"Price\":2800,\"Type\":0},{\"Variation\":183,\"Colors\":[0,1,2,3,4,5],\"Price\":10000,\"Type\":1},{\"Variation\":194,\"Colors\":[0,1,2],\"Price\":2400,\"Type\":2},{\"Variation\":196,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":6800,\"Type\":2},{\"Variation\":11,\"Colors\":[0,1],\"Price\":12800,\"Type\":2},{\"Variation\":21,\"Colors\":[0,1,2,3],\"Price\":12800,\"Type\":2},{\"Variation\":25,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":12900,\"Type\":2},{\"Variation\":40,\"Colors\":[0,1],\"Price\":13000,\"Type\":2},{\"Variation\":51,\"Colors\":[0,1,2],\"Price\":2800,\"Type\":2},{\"Variation\":52,\"Colors\":[0,1,2,3],\"Price\":3000,\"Type\":2},{\"Variation\":109,\"Colors\":[0],\"Price\":12000,\"Type\":2},{\"Variation\":164,\"Colors\":[0,1,2],\"Price\":2600,\"Type\":2},{\"Variation\":193,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7000,\"Type\":2},{\"Variation\":197,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":6800,\"Type\":2},{\"Variation\":198,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":4200,\"Type\":2},{\"Variation\":199,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":4200,\"Type\":2},{\"Variation\":205,\"Colors\":[0,1,2,3,4],\"Price\":2800,\"Type\":2},{\"Variation\":206,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3600,\"Type\":2},{\"Variation\":207,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":5700,\"Type\":2},{\"Variation\":209,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6000,\"Type\":2},{\"Variation\":210,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6000,\"Type\":2},{\"Variation\":211,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6100,\"Type\":2},{\"Variation\":212,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":5800,\"Type\":0},{\"Variation\":214,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":5700,\"Type\":2},{\"Variation\":215,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":5800,\"Type\":0},{\"Variation\":216,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":5800,\"Type\":0},{\"Variation\":217,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":4800,\"Type\":2},{\"Variation\":218,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":4800,\"Type\":2},{\"Variation\":219,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":5600,\"Type\":2},{\"Variation\":223,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2400,\"Type\":2},{\"Variation\":224,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2400,\"Type\":2},{\"Variation\":227,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":6000,\"Type\":2},{\"Variation\":229,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":6000,\"Type\":2},{\"Variation\":230,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":9000,\"Type\":0},{\"Variation\":232,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":3600,\"Type\":1},{\"Variation\":233,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":3600,\"Type\":0},{\"Variation\":243,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":6800,\"Type\":2},{\"Variation\":244,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":6900,\"Type\":2},{\"Variation\":245,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":6000,\"Type\":2},{\"Variation\":248,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7100,\"Type\":2},{\"Variation\":249,\"Colors\":[0,1],\"Price\":2800,\"Type\":2},{\"Variation\":251,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7200,\"Type\":2},{\"Variation\":253,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7000,\"Type\":2},{\"Variation\":254,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4700,\"Type\":2},{\"Variation\":26,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":5000,\"Type\":2},{\"Variation\":81,\"Colors\":[0,1,2],\"Price\":3000,\"Type\":2},{\"Variation\":82,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2000,\"Type\":2},{\"Variation\":83,\"Colors\":[0,1,2,3,4],\"Price\":3000,\"Type\":2},{\"Variation\":92,\"Colors\":[0,1,2,3,4,5,6],\"Price\":5000,\"Type\":2},{\"Variation\":117,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2500,\"Type\":2},{\"Variation\":126,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":3000,\"Type\":2},{\"Variation\":128,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":2500,\"Type\":2},{\"Variation\":135,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4000,\"Type\":2},{\"Variation\":144,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":7000,\"Type\":2},{\"Variation\":63,\"Colors\":[0],\"Price\":4800,\"Type\":2},{\"Variation\":80,\"Colors\":[0,1,2],\"Price\":6000,\"Type\":2},{\"Variation\":93,\"Colors\":[0,1,2],\"Price\":3600,\"Type\":2},{\"Variation\":94,\"Colors\":[0,1,2],\"Price\":3600,\"Type\":2},{\"Variation\":95,\"Colors\":[0,1,2],\"Price\":3800,\"Type\":2},{\"Variation\":123,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":131,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":132,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":133,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":225,\"Colors\":[0,1],\"Price\":6800,\"Type\":2},{\"Variation\":234,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":4800,\"Type\":2},{\"Variation\":250,\"Colors\":[0,1],\"Price\":3980,\"Type\":2},{\"Variation\":255,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7200,\"Type\":2}],\"0\":[{\"Variation\":1,\"Colors\":[0,1,2,4,5,6,9,11,14],\"Price\":700,\"Type\":0},{\"Variation\":6,\"Colors\":[0,1,2,4],\"Price\":1000,\"Type\":0},{\"Variation\":7,\"Colors\":[0,1,2,8],\"Price\":1000,\"Type\":0},{\"Variation\":8,\"Colors\":[0,1,2,12],\"Price\":700,\"Type\":0},{\"Variation\":24,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":2000,\"Type\":0},{\"Variation\":25,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":750,\"Type\":0},{\"Variation\":27,\"Colors\":[0,1,2,3,4,5],\"Price\":5000,\"Type\":2},{\"Variation\":31,\"Colors\":[0,1,2,3,4,5,6],\"Price\":700,\"Type\":0},{\"Variation\":34,\"Colors\":[0],\"Price\":4000,\"Type\":0},{\"Variation\":35,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":700,\"Type\":0},{\"Variation\":53,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":58,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":1000,\"Type\":0},{\"Variation\":64,\"Colors\":[0,1,2,3,4],\"Price\":2000,\"Type\":0},{\"Variation\":65,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7000,\"Type\":0},{\"Variation\":90,\"Colors\":[0,1,2,3,4],\"Price\":2000,\"Type\":0},{\"Variation\":91,\"Colors\":[0,1,2,3,4],\"Price\":2000,\"Type\":0},{\"Variation\":92,\"Colors\":[0,1,2,3],\"Price\":750,\"Type\":0},{\"Variation\":94,\"Colors\":[0],\"Price\":4000,\"Type\":0},{\"Variation\":97,\"Colors\":[0],\"Price\":750,\"Type\":0},{\"Variation\":107,\"Colors\":[0],\"Price\":750,\"Type\":0},{\"Variation\":120,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"Price\":1000,\"Type\":0},{\"Variation\":148,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":153,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":160,\"Colors\":[0],\"Price\":1000,\"Type\":0},{\"Variation\":163,\"Colors\":[0,1,2,3,4,5],\"Price\":2000,\"Type\":0},{\"Variation\":164,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":10000,\"Type\":0},{\"Variation\":166,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":174,\"Colors\":[0,1,2,3],\"Price\":2000,\"Type\":0},{\"Variation\":183,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":0},{\"Variation\":185,\"Colors\":[0,1,2,3,4,5],\"Price\":750,\"Type\":0},{\"Variation\":187,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":0},{\"Variation\":191,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1000,\"Type\":0},{\"Variation\":193,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3000,\"Type\":0},{\"Variation\":194,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5000,\"Type\":0},{\"Variation\":133,\"Colors\":[0,1,2,3,4,5,6],\"Price\":750,\"Type\":0},{\"Variation\":139,\"Colors\":[0,1,2],\"Price\":750,\"Type\":0},{\"Variation\":10,\"Colors\":[0,1,2,7,10,11,13,15],\"Price\":500,\"Type\":1},{\"Variation\":99,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":3000,\"Type\":1},{\"Variation\":143,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":15000,\"Type\":1},{\"Variation\":158,\"Colors\":[0,1,2,3],\"Price\":700,\"Type\":1},{\"Variation\":176,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,10,11,12,13,14],\"Price\":500,\"Type\":2},{\"Variation\":21,\"Colors\":[0,1,2,3,4,5],\"Price\":1500,\"Type\":2},{\"Variation\":37,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":2},{\"Variation\":50,\"Colors\":[0],\"Price\":500,\"Type\":2},{\"Variation\":54,\"Colors\":[0,1,2,3],\"Price\":500,\"Type\":2},{\"Variation\":55,\"Colors\":[0],\"Price\":500,\"Type\":2},{\"Variation\":62,\"Colors\":[0,1,2,3,4,5],\"Price\":500,\"Type\":2},{\"Variation\":63,\"Colors\":[0,1,2,3,4,5],\"Price\":500,\"Type\":2},{\"Variation\":66,\"Colors\":[0,1,2,3],\"Price\":750,\"Type\":2},{\"Variation\":69,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":70,\"Colors\":[0,1,2,3,4],\"Price\":800,\"Type\":2},{\"Variation\":72,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":78,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1000,\"Type\":2},{\"Variation\":80,\"Colors\":[0],\"Price\":1500,\"Type\":2},{\"Variation\":81,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":2000,\"Type\":2},{\"Variation\":87,\"Colors\":[0],\"Price\":2000,\"Type\":2},{\"Variation\":102,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":103,\"Colors\":[0,1,2,3,4,5],\"Price\":1000,\"Type\":2},{\"Variation\":105,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1000,\"Type\":2},{\"Variation\":110,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1000,\"Type\":2},{\"Variation\":113,\"Colors\":[0,1,2],\"Price\":2000,\"Type\":2},{\"Variation\":114,\"Colors\":[0,1,2],\"Price\":750,\"Type\":2},{\"Variation\":115,\"Colors\":[0,1,2],\"Price\":750,\"Type\":2},{\"Variation\":116,\"Colors\":[0,1,2],\"Price\":750,\"Type\":2},{\"Variation\":121,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"Price\":500,\"Type\":2},{\"Variation\":122,\"Colors\":[0],\"Price\":1000,\"Type\":2},{\"Variation\":127,\"Colors\":[0],\"Price\":500,\"Type\":2},{\"Variation\":131,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":2},{\"Variation\":135,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":2},{\"Variation\":138,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1000,\"Type\":2},{\"Variation\":140,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1000,\"Type\":2},{\"Variation\":144,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1500,\"Type\":2},{\"Variation\":145,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1000,\"Type\":2},{\"Variation\":147,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":8000,\"Type\":2},{\"Variation\":149,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":2},{\"Variation\":150,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":1000,\"Type\":2},{\"Variation\":151,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1500,\"Type\":2},{\"Variation\":165,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":2},{\"Variation\":172,\"Colors\":[0,1],\"Price\":500,\"Type\":2},{\"Variation\":184,\"Colors\":[0,1],\"Price\":500,\"Type\":2},{\"Variation\":186,\"Colors\":[0,1,2,3],\"Price\":500,\"Type\":2},{\"Variation\":189,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":2},{\"Variation\":190,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1000,\"Type\":2},{\"Variation\":202,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":2},{\"Variation\":205,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":2},{\"Variation\":206,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":2},{\"Variation\":71,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":2},{\"Variation\":77,\"Colors\":[0],\"Price\":2000,\"Type\":2},{\"Variation\":106,\"Colors\":[0,1,2,3],\"Price\":2000,\"Type\":2},{\"Variation\":123,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":2000,\"Type\":2},{\"Variation\":162,\"Colors\":[0,1,2,3,4,5,6],\"Price\":2000,\"Type\":2},{\"Variation\":192,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":2000,\"Type\":2},{\"Variation\":20,\"Colors\":[0,1],\"Price\":5000,\"Type\":1},{\"Variation\":39,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":41,\"Colors\":[0],\"Price\":3000,\"Type\":2},{\"Variation\":44,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":45,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":2},{\"Variation\":47,\"Colors\":[0],\"Price\":5000,\"Type\":2},{\"Variation\":56,\"Colors\":[0],\"Price\":2400,\"Type\":2},{\"Variation\":57,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":5000,\"Type\":0},{\"Variation\":79,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":2},{\"Variation\":93,\"Colors\":[0,1,2,3],\"Price\":5000,\"Type\":1},{\"Variation\":95,\"Colors\":[0],\"Price\":5000,\"Type\":1},{\"Variation\":96,\"Colors\":[0],\"Price\":6000,\"Type\":2},{\"Variation\":98,\"Colors\":[0,1,2,3,4],\"Price\":8000,\"Type\":2},{\"Variation\":104,\"Colors\":[0],\"Price\":5000,\"Type\":1},{\"Variation\":108,\"Colors\":[0,1,2],\"Price\":2000,\"Type\":1},{\"Variation\":112,\"Colors\":[0,1,2],\"Price\":5000,\"Type\":2},{\"Variation\":125,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":4000,\"Type\":2},{\"Variation\":126,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":132,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4400,\"Type\":2},{\"Variation\":137,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":5000,\"Type\":1},{\"Variation\":146,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":7000,\"Type\":1},{\"Variation\":152,\"Colors\":[0,1,2,3],\"Price\":7000,\"Type\":1},{\"Variation\":153,\"Colors\":[0,1,2,3,4,5],\"Price\":6000,\"Type\":0},{\"Variation\":154,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":155,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":156,\"Colors\":[0,1],\"Price\":4000,\"Type\":2},{\"Variation\":157,\"Colors\":[0,1],\"Price\":4000,\"Type\":0},{\"Variation\":159,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":2},{\"Variation\":167,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":173,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":175,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":177,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":2},{\"Variation\":178,\"Colors\":[0],\"Price\":4000,\"Type\":2},{\"Variation\":179,\"Colors\":[0,1,2,3,4,5,6],\"Price\":7000,\"Type\":2},{\"Variation\":181,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":0},{\"Variation\":182,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":196,\"Colors\":[0,1,2],\"Price\":3000,\"Type\":2},{\"Variation\":197,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":2},{\"Variation\":198,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":5000,\"Type\":2},{\"Variation\":199,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":5000,\"Type\":2},{\"Variation\":200,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":5000,\"Type\":2},{\"Variation\":201,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":5000,\"Type\":2},{\"Variation\":204,\"Colors\":[0,1,2,3,4],\"Price\":5000,\"Type\":2},{\"Variation\":207,\"Colors\":[0,1,2,3,4],\"Price\":5000,\"Type\":2},{\"Variation\":209,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"Price\":3000,\"Type\":2},{\"Variation\":210,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":2},{\"Variation\":211,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":2},{\"Variation\":213,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":2},{\"Variation\":214,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6000,\"Type\":2},{\"Variation\":215,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6000,\"Type\":2},{\"Variation\":216,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":6000,\"Type\":0},{\"Variation\":217,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":2},{\"Variation\":218,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":2},{\"Variation\":219,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":0},{\"Variation\":220,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":0},{\"Variation\":227,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":6000,\"Type\":2},{\"Variation\":228,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":6000,\"Type\":2},{\"Variation\":229,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":4000,\"Type\":2},{\"Variation\":230,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":4000,\"Type\":2},{\"Variation\":233,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":4000,\"Type\":2},{\"Variation\":234,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":5000,\"Type\":2},{\"Variation\":239,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":4000,\"Type\":2},{\"Variation\":240,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":4000,\"Type\":0},{\"Variation\":242,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":6000,\"Type\":1},{\"Variation\":243,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":6000,\"Type\":0},{\"Variation\":248,\"Colors\":[0,1,2,3,4],\"Price\":10000,\"Type\":2},{\"Variation\":251,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":10000,\"Type\":2},{\"Variation\":252,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":8000,\"Type\":2},{\"Variation\":253,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":5000,\"Type\":2},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":2000,\"Type\":2},{\"Variation\":83,\"Colors\":[0,1,2,3,4,5,6],\"Price\":4000,\"Type\":2},{\"Variation\":142,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":7000,\"Type\":2},{\"Variation\":171,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":2500,\"Type\":2},{\"Variation\":2,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2000,\"Type\":2},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5],\"Price\":2000,\"Type\":2},{\"Variation\":17,\"Colors\":[0],\"Price\":3000,\"Type\":2},{\"Variation\":84,\"Colors\":[0,1,2],\"Price\":5000,\"Type\":2},{\"Variation\":88,\"Colors\":[0,1],\"Price\":5000,\"Type\":2},{\"Variation\":109,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":4000,\"Type\":2},{\"Variation\":119,\"Colors\":[0,1,2],\"Price\":5000,\"Type\":2},{\"Variation\":128,\"Colors\":[0],\"Price\":5000,\"Type\":2},{\"Variation\":168,\"Colors\":[0,1,2,3,4,5],\"Price\":3000,\"Type\":2},{\"Variation\":169,\"Colors\":[0,1,2,3,4,5],\"Price\":3000,\"Type\":2},{\"Variation\":170,\"Colors\":[0,1,2,3,4,5],\"Price\":3000,\"Type\":2},{\"Variation\":195,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3000,\"Type\":2},{\"Variation\":235,\"Colors\":[0,1],\"Price\":4000,\"Type\":2},{\"Variation\":236,\"Colors\":[0],\"Price\":3000,\"Type\":2},{\"Variation\":244,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":5000,\"Type\":2},{\"Variation\":245,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5000,\"Type\":2},{\"Variation\":249,\"Colors\":[0,1,2,3,4,5],\"Price\":5000,\"Type\":2}]}");
global.clothesUnderwears = JSON.parse("{\"1\":[{\"Top\":0,\"Price\":300,\"UndershirtIDs\":{\"0\":0,\"1\":2},\"Colors\":[0,1,2,3,4]},{\"Top\":1,\"Price\":320,\"UndershirtIDs\":{\"0\":1,\"1\":14},\"Colors\":[0,1,3,4,5,6,7,8]},{\"Top\":5,\"Price\":280,\"UndershirtIDs\":{\"0\":5},\"Colors\":[0,1,2]},{\"Top\":8,\"Price\":300,\"UndershirtIDs\":{\"0\":8},\"Colors\":[0]},{\"Top\":9,\"Price\":300,\"UndershirtIDs\":{\"0\":9},\"Colors\":[0,1,2,3,4,5,6,7]},{\"Top\":12,\"Price\":700,\"UndershirtIDs\":{\"0\":12},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11]},{\"Top\":13,\"Price\":700,\"UndershirtIDs\":{},\"Colors\":[0,1,2,3]},{\"Top\":14,\"Price\":700,\"UndershirtIDs\":{\"0\":29,\"1\":30},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},{\"Top\":16,\"Price\":320,\"UndershirtIDs\":{\"0\":16,\"1\":18},\"Colors\":[0,1,2]},{\"Top\":17,\"Price\":320,\"UndershirtIDs\":{\"0\":17},\"Colors\":[0,1,2,3,4,5]},{\"Top\":22,\"Price\":300,\"UndershirtIDs\":{\"0\":23,\"1\":24},\"Colors\":[0,1,2]},{\"Top\":26,\"Price\":1000,\"UndershirtIDs\":{\"0\":27,\"1\":27},\"Colors\":[0,1,2,3,4,5,6,7,8,9]},{\"Top\":33,\"Price\":300,\"UndershirtIDs\":{\"0\":37,\"1\":39},\"Colors\":[0]},{\"Top\":34,\"Price\":300,\"UndershirtIDs\":{\"0\":38,\"1\":44},\"Colors\":[0,1]},{\"Top\":36,\"Price\":300,\"UndershirtIDs\":{\"0\":40},\"Colors\":[0,1,2,3,4,5]},{\"Top\":38,\"Price\":700,\"UndershirtIDs\":{\"0\":41},\"Colors\":[0,1,2,3,4]},{\"Top\":39,\"Price\":500,\"UndershirtIDs\":{\"0\":42},\"Colors\":[0,1]},{\"Top\":41,\"Price\":700,\"UndershirtIDs\":{\"0\":43},\"Colors\":[0,1,2]},{\"Top\":44,\"Price\":300,\"UndershirtIDs\":{\"0\":47,\"1\":48},\"Colors\":[0,1,2,3]},{\"Top\":47,\"Price\":300,\"UndershirtIDs\":{\"0\":53,\"1\":54},\"Colors\":[0,1]},{\"Top\":71,\"Price\":5000,\"UndershirtIDs\":{\"0\":67,\"1\":68},\"Colors\":[0]},{\"Top\":73,\"Price\":20000,\"UndershirtIDs\":{\"0\":65,\"1\":66},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},{\"Top\":208,\"Price\":500,\"UndershirtIDs\":{\"0\":101,\"1\":102},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},{\"Top\":18,\"Price\":3600,\"UndershirtIDs\":{\"0\":19},\"Colors\":[0,1,2,3]},{\"Top\":42,\"Price\":4400,\"UndershirtIDs\":{\"0\":45},\"Colors\":[0]},{\"Top\":43,\"Price\":4400,\"UndershirtIDs\":{\"0\":46},\"Colors\":[0]},{\"Top\":139,\"Price\":4000,\"UndershirtIDs\":{\"0\":75},\"Colors\":[0,1,2,3,4,5,6,7]},{\"Top\":226,\"Price\":2400,\"UndershirtIDs\":{\"0\":106},\"Colors\":[0]},{\"Top\":235,\"Price\":3600,\"UndershirtIDs\":{\"0\":109},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11]},{\"Top\":236,\"Price\":3600,\"UndershirtIDs\":{\"0\":110},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11]},{\"Top\":237,\"Price\":2400,\"UndershirtIDs\":{\"0\":111},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},{\"Top\":238,\"Price\":2400,\"UndershirtIDs\":{\"0\":115},\"Colors\":[0,1,2,3,4,5]},{\"Top\":239,\"Price\":2200,\"UndershirtIDs\":{\"0\":120},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11]}],\"0\":[{\"Top\":0,\"Price\":300,\"UndershirtIDs\":{\"0\":0,\"1\":1},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},{\"Top\":5,\"Price\":300,\"UndershirtIDs\":{\"0\":5,\"1\":5},\"Colors\":[0,1,7,9]},{\"Top\":11,\"Price\":300,\"UndershirtIDs\":{\"0\":11,\"1\":11},\"Colors\":[0,2,10,11,15]},{\"Top\":13,\"Price\":1000,\"UndershirtIDs\":{\"0\":13,\"1\":13},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},{\"Top\":16,\"Price\":350,\"UndershirtIDs\":{\"0\":16,\"1\":16},\"Colors\":[0,1,2,3,4,5,6]},{\"Top\":22,\"Price\":1000,\"UndershirtIDs\":{\"0\":22,\"1\":22},\"Colors\":[0,1,2,3,4]},{\"Top\":23,\"Price\":300,\"UndershirtIDs\":{\"0\":20,\"1\":21},\"Colors\":[0,1,2]},{\"Top\":26,\"Price\":1000,\"UndershirtIDs\":{\"0\":23},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12]},{\"Top\":30,\"Price\":300,\"UndershirtIDs\":{\"0\":26},\"Colors\":[0,1,2]},{\"Top\":32,\"Price\":700,\"UndershirtIDs\":{\"0\":27,\"1\":27},\"Colors\":[0,1,2]},{\"Top\":33,\"Price\":300,\"UndershirtIDs\":{\"0\":28,\"1\":28},\"Colors\":[0,1,2,3,4,5,6,7,8]},{\"Top\":36,\"Price\":1000,\"UndershirtIDs\":{\"0\":29,\"1\":29},\"Colors\":[0,1,2,3,4]},{\"Top\":38,\"Price\":300,\"UndershirtIDs\":{\"0\":30},\"Colors\":[0,1,2,3]},{\"Top\":40,\"Price\":1000,\"UndershirtIDs\":{\"0\":31},\"Colors\":[0]},{\"Top\":49,\"Price\":300,\"UndershirtIDs\":{\"0\":51},\"Colors\":[0,1]},{\"Top\":67,\"Price\":300,\"UndershirtIDs\":{\"0\":49},\"Colors\":[0]},{\"Top\":68,\"Price\":5000,\"UndershirtIDs\":{\"0\":50,\"1\":45},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},{\"Top\":73,\"Price\":300,\"UndershirtIDs\":{\"0\":57,\"1\":59},\"Colors\":[0,1,2]},{\"Top\":74,\"Price\":300,\"UndershirtIDs\":{\"0\":60,\"1\":60},\"Colors\":[0,1,2]},{\"Top\":75,\"Price\":500,\"UndershirtIDs\":{\"0\":61,\"1\":63},\"Colors\":[0,1,2,3]},{\"Top\":103,\"Price\":700,\"UndershirtIDs\":{\"1\":67},\"Colors\":[0,1,2,3,4,5]},{\"Top\":111,\"Price\":5000,\"UndershirtIDs\":{\"0\":68,\"1\":68},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11]},{\"Top\":117,\"Price\":300,\"UndershirtIDs\":{\"0\":71,\"1\":71},\"Colors\":[0,1,2]},{\"Top\":118,\"Price\":300,\"UndershirtIDs\":{\"0\":74,\"1\":74},\"Colors\":[0,1,2]},{\"Top\":141,\"Price\":300,\"UndershirtIDs\":{\"0\":80,\"1\":80},\"Colors\":[0,1,2,3,4,5]},{\"Top\":149,\"Price\":300,\"UndershirtIDs\":{\"0\":82,\"1\":83},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},{\"Top\":208,\"Price\":2000,\"UndershirtIDs\":{\"0\":111,\"1\":108},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},{\"Top\":4,\"Price\":2000,\"UndershirtIDs\":{\"0\":4},\"Colors\":[13,14]},{\"Top\":12,\"Price\":2000,\"UndershirtIDs\":{\"0\":12},\"Colors\":[7,8,9]},{\"Top\":19,\"Price\":3000,\"UndershirtIDs\":{\"0\":18},\"Colors\":[0,1,2,3]},{\"Top\":212,\"Price\":3000,\"UndershirtIDs\":{\"0\":123},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},{\"Top\":247,\"Price\":3000,\"UndershirtIDs\":{\"0\":151},\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}]}");
global.clothesLegs = JSON.parse("{\"1\":[{\"Variation\":0,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":1,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,4],\"Price\":1500,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2],\"Price\":500,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":800,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,3,4],\"Price\":300,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2],\"Price\":4000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0],\"Price\":500,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2],\"Price\":350,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2],\"Price\":300,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":500,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":500,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":750,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1],\"Price\":500,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":-1},{\"Variation\":24,\"Colors\":[0,1,2,3,4,5,6],\"Price\":750,\"Type\":-1},{\"Variation\":25,\"Colors\":[0,1,2,3,4,5,6],\"Price\":1000,\"Type\":-1},{\"Variation\":26,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1000,\"Type\":-1},{\"Variation\":27,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":700,\"Type\":-1},{\"Variation\":28,\"Colors\":[0,2,3,4,5,6,7,8,9,10,11,12,13,14],\"Price\":1200,\"Type\":-1},{\"Variation\":29,\"Colors\":[0,1,2],\"Price\":750,\"Type\":-1},{\"Variation\":32,\"Colors\":[0,1,2,3],\"Price\":900,\"Type\":-1},{\"Variation\":34,\"Colors\":[0],\"Price\":5700,\"Type\":-1},{\"Variation\":35,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":36,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":37,\"Colors\":[0,1,2,3],\"Price\":900,\"Type\":-1},{\"Variation\":41,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":42,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1100,\"Type\":-1},{\"Variation\":43,\"Colors\":[0,1],\"Price\":5000,\"Type\":-1},{\"Variation\":45,\"Colors\":[0,1,2,3,4,5,6],\"Price\":1100,\"Type\":-1},{\"Variation\":46,\"Colors\":[0,1],\"Price\":500,\"Type\":-1},{\"Variation\":47,\"Colors\":[0,1],\"Price\":500,\"Type\":-1},{\"Variation\":48,\"Colors\":[0,1,2,3,4],\"Price\":9000,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1,2,3,4],\"Price\":9800,\"Type\":-1},{\"Variation\":51,\"Colors\":[0],\"Price\":950,\"Type\":-1},{\"Variation\":52,\"Colors\":[0,1,2],\"Price\":10000,\"Type\":-1},{\"Variation\":53,\"Colors\":[0],\"Price\":15000,\"Type\":-1},{\"Variation\":54,\"Colors\":[0,1,2,3,4,5,6],\"Price\":1000,\"Type\":-1},{\"Variation\":55,\"Colors\":[0,1,2],\"Price\":2400,\"Type\":-1},{\"Variation\":58,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":13100,\"Type\":-1},{\"Variation\":60,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":19000,\"Type\":-1},{\"Variation\":61,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":150,\"Type\":-1},{\"Variation\":62,\"Colors\":[0,1,2,3],\"Price\":2400,\"Type\":-1},{\"Variation\":63,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":64,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2400,\"Type\":-1},{\"Variation\":65,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":6800,\"Type\":-1},{\"Variation\":69,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":1750,\"Type\":-1},{\"Variation\":71,\"Colors\":[0,1,2,3,4,5],\"Price\":16000,\"Type\":-1},{\"Variation\":73,\"Colors\":[0,1,2,3,4,5],\"Price\":16000,\"Type\":-1},{\"Variation\":75,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":2200,\"Type\":-1},{\"Variation\":76,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":2300,\"Type\":-1},{\"Variation\":78,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":15000,\"Type\":-1},{\"Variation\":79,\"Colors\":[0,1,2],\"Price\":15000,\"Type\":-1},{\"Variation\":80,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":11000,\"Type\":-1},{\"Variation\":81,\"Colors\":[0,1,2],\"Price\":11100,\"Type\":-1},{\"Variation\":82,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":18800,\"Type\":-1},{\"Variation\":83,\"Colors\":[0,1,2,3],\"Price\":18900,\"Type\":-1},{\"Variation\":94,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":8800,\"Type\":-1},{\"Variation\":96,\"Colors\":[0,1],\"Price\":9100,\"Type\":-1},{\"Variation\":98,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":9100,\"Type\":-1},{\"Variation\":100,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":11200,\"Type\":-1},{\"Variation\":102,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":9200,\"Type\":-1},{\"Variation\":103,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":7200,\"Type\":-1},{\"Variation\":105,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5000,\"Type\":-1}],\"0\":[{\"Variation\":0,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":300,\"Type\":-1},{\"Variation\":1,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":300,\"Type\":-1},{\"Variation\":2,\"Colors\":[0,1,2],\"Price\":300,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2],\"Price\":500,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2],\"Price\":1000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1200,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":630,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2],\"Price\":500,\"Type\":-1},{\"Variation\":11,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":500,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":1000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1],\"Price\":400,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":700,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":700,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1],\"Price\":7000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1,2,3,4],\"Price\":150,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2],\"Price\":600,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1,2],\"Price\":4800,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":630,\"Type\":-1},{\"Variation\":24,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":-1},{\"Variation\":25,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12],\"Price\":1000,\"Type\":-1},{\"Variation\":26,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":27,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":28,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":29,\"Colors\":[0],\"Price\":2400,\"Type\":-1},{\"Variation\":30,\"Colors\":[0,1,2,3,4],\"Price\":4000,\"Type\":-1},{\"Variation\":31,\"Colors\":[0,1,2,3],\"Price\":6000,\"Type\":-1},{\"Variation\":33,\"Colors\":[0],\"Price\":4000,\"Type\":-1},{\"Variation\":36,\"Colors\":[0,1,2,3],\"Price\":7000,\"Type\":-1},{\"Variation\":37,\"Colors\":[0,1,2,3,4,5,6],\"Price\":5000,\"Type\":-1},{\"Variation\":41,\"Colors\":[0,1,2,3],\"Price\":2000,\"Type\":-1},{\"Variation\":43,\"Colors\":[0,1,2,3,4],\"Price\":1200,\"Type\":-1},{\"Variation\":44,\"Colors\":[0,1,2,3,4],\"Price\":1200,\"Type\":-1},{\"Variation\":45,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":-1},{\"Variation\":47,\"Colors\":[0,1,2,3,4,5,6],\"Price\":5000,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":50,\"Colors\":[0,1,2,3,4],\"Price\":7000,\"Type\":-1},{\"Variation\":51,\"Colors\":[0,1,2,3,4],\"Price\":6000,\"Type\":-1},{\"Variation\":52,\"Colors\":[0,1,2,3],\"Price\":5000,\"Type\":-1},{\"Variation\":53,\"Colors\":[0],\"Price\":500,\"Type\":-1},{\"Variation\":54,\"Colors\":[0,1,2,3],\"Price\":5000,\"Type\":-1},{\"Variation\":55,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":56,\"Colors\":[0,1,2,3,4,5],\"Price\":175,\"Type\":-1},{\"Variation\":57,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":450,\"Type\":-1},{\"Variation\":58,\"Colors\":[0,1,2,3],\"Price\":2000,\"Type\":-1},{\"Variation\":60,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":750,\"Type\":-1},{\"Variation\":62,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":250,\"Type\":-1},{\"Variation\":63,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":1350,\"Type\":-1},{\"Variation\":64,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":-1},{\"Variation\":66,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2000,\"Type\":-1},{\"Variation\":67,\"Colors\":[0,1,2,3],\"Price\":3000,\"Type\":-1},{\"Variation\":71,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":4000,\"Type\":-1},{\"Variation\":73,\"Colors\":[0,1,2,3,4,5],\"Price\":4000,\"Type\":-1},{\"Variation\":74,\"Colors\":[0,1,2,3,4,5],\"Price\":4000,\"Type\":-1},{\"Variation\":75,\"Colors\":[0,1,2],\"Price\":4400,\"Type\":-1},{\"Variation\":76,\"Colors\":[0,1,2],\"Price\":4400,\"Type\":-1},{\"Variation\":77,\"Colors\":[0,1,2],\"Price\":4400,\"Type\":-1},{\"Variation\":78,\"Colors\":[0,1,2,3],\"Price\":5000,\"Type\":-1},{\"Variation\":80,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":6000,\"Type\":-1},{\"Variation\":81,\"Colors\":[0,1,2],\"Price\":10000,\"Type\":-1},{\"Variation\":82,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":5000,\"Type\":-1},{\"Variation\":83,\"Colors\":[0,1,2],\"Price\":9000,\"Type\":-1},{\"Variation\":84,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":4000,\"Type\":-1},{\"Variation\":85,\"Colors\":[0,1,2],\"Price\":8000,\"Type\":-1},{\"Variation\":87,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":5000,\"Type\":-1},{\"Variation\":89,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":-1},{\"Variation\":91,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":3000,\"Type\":-1},{\"Variation\":95,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],\"Price\":3000,\"Type\":-1},{\"Variation\":96,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":97,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":5000,\"Type\":-1},{\"Variation\":99,\"Colors\":[0,1],\"Price\":6000,\"Type\":-1},{\"Variation\":101,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":5000,\"Type\":-1},{\"Variation\":102,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],\"Price\":1800,\"Type\":-1},{\"Variation\":104,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":4000,\"Type\":-1},{\"Variation\":106,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":5000,\"Type\":-1},{\"Variation\":107,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":4000,\"Type\":-1},{\"Variation\":108,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":5000,\"Type\":-1},{\"Variation\":109,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":3000,\"Type\":-1},{\"Variation\":110,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":3000,\"Type\":-1},{\"Variation\":111,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":112,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":5000,\"Type\":-1}]}");
global.clothesFeets = JSON.parse("{\"1\":[{\"Variation\":1,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,4],\"Price\":630,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3],\"Price\":500,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1],\"Price\":500,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":500,\"Type\":-1},{\"Variation\":10,\"Colors\":[0],\"Price\":7000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":750,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":300,\"Type\":-1},{\"Variation\":17,\"Colors\":[0],\"Price\":2800,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1],\"Price\":7200,\"Type\":-1},{\"Variation\":19,\"Colors\":[0],\"Price\":7300,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":2000,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":750,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1,2,3,4,5,7,8,9,10,11],\"Price\":1000,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":2000,\"Type\":-1},{\"Variation\":24,\"Colors\":[0],\"Price\":4800,\"Type\":-1},{\"Variation\":25,\"Colors\":[0],\"Price\":4800,\"Type\":-1},{\"Variation\":26,\"Colors\":[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15],\"Price\":750,\"Type\":-1},{\"Variation\":27,\"Colors\":[0],\"Price\":3600,\"Type\":-1},{\"Variation\":28,\"Colors\":[0,1,2,3,4,5],\"Price\":2000,\"Type\":-1},{\"Variation\":29,\"Colors\":[0],\"Price\":5700,\"Type\":-1},{\"Variation\":30,\"Colors\":[0,1],\"Price\":440,\"Type\":-1},{\"Variation\":31,\"Colors\":[0,1,2,3,4],\"Price\":7400,\"Type\":-1},{\"Variation\":32,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":36,\"Colors\":[0,1,2,3],\"Price\":3600,\"Type\":-1},{\"Variation\":40,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7100,\"Type\":-1},{\"Variation\":41,\"Colors\":[0],\"Price\":3800,\"Type\":-1},{\"Variation\":42,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":1000,\"Type\":-1},{\"Variation\":43,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":7600,\"Type\":-1},{\"Variation\":46,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":5700,\"Type\":-1},{\"Variation\":48,\"Colors\":[0,1],\"Price\":3800,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1],\"Price\":3800,\"Type\":-1},{\"Variation\":51,\"Colors\":[0,1,2,3,4,5],\"Price\":3700,\"Type\":-1},{\"Variation\":56,\"Colors\":[0,1],\"Price\":3200,\"Type\":-1},{\"Variation\":57,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7100,\"Type\":-1},{\"Variation\":59,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":7400,\"Type\":-1},{\"Variation\":61,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":3200,\"Type\":-1},{\"Variation\":64,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":7400,\"Type\":-1},{\"Variation\":65,\"Colors\":[0,1,2,3,4,5,6],\"Price\":6800,\"Type\":-1},{\"Variation\":66,\"Colors\":[0,1,2,3,4,5,6],\"Price\":6800,\"Type\":-1},{\"Variation\":69,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3600,\"Type\":-1},{\"Variation\":74,\"Colors\":[0,1],\"Price\":7800,\"Type\":-1},{\"Variation\":75,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":18000,\"Type\":-1},{\"Variation\":76,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":17600,\"Type\":-1},{\"Variation\":77,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":68000,\"Type\":-1},{\"Variation\":80,\"Colors\":[0,1],\"Price\":9800,\"Type\":-1},{\"Variation\":86,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":8400,\"Type\":-1}],\"0\":[{\"Variation\":0,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":-1},{\"Variation\":1,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":2,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5],\"Price\":750,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1],\"Price\":2000,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2,3],\"Price\":750,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":1000,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3],\"Price\":1000,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2,3],\"Price\":4000,\"Type\":-1},{\"Variation\":11,\"Colors\":[0,1,2,3],\"Price\":4600,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":4000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":800,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":750,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":300,\"Type\":-1},{\"Variation\":17,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2],\"Price\":5000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7000,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7000,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":750,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":6000,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1,2],\"Price\":7000,\"Type\":-1},{\"Variation\":24,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":25,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":26,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":27,\"Colors\":[0],\"Price\":5000,\"Type\":-1},{\"Variation\":28,\"Colors\":[0],\"Price\":5000,\"Type\":-1},{\"Variation\":29,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":30,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":31,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":32,\"Colors\":[0,1,2,3,4],\"Price\":1000,\"Type\":-1},{\"Variation\":33,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":1000,\"Type\":-1},{\"Variation\":36,\"Colors\":[0,1],\"Price\":4000,\"Type\":-1},{\"Variation\":37,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":41,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7400,\"Type\":-1},{\"Variation\":42,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":7000,\"Type\":-1},{\"Variation\":43,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":8000,\"Type\":-1},{\"Variation\":44,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":8000,\"Type\":-1},{\"Variation\":45,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":4000,\"Type\":-1},{\"Variation\":47,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":4000,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":50,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":51,\"Colors\":[0,1,2,3,4,5],\"Price\":3000,\"Type\":-1},{\"Variation\":53,\"Colors\":[0,1],\"Price\":4000,\"Type\":-1},{\"Variation\":54,\"Colors\":[0,1,2,3,4,5],\"Price\":4000,\"Type\":-1},{\"Variation\":55,\"Colors\":[0,1,2,3,4,5],\"Price\":3000,\"Type\":-1},{\"Variation\":56,\"Colors\":[0,1,2],\"Price\":5000,\"Type\":-1},{\"Variation\":60,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":6000,\"Type\":-1},{\"Variation\":62,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":4000,\"Type\":-1},{\"Variation\":65,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":3000,\"Type\":-1},{\"Variation\":67,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":5000,\"Type\":-1},{\"Variation\":68,\"Colors\":[0,1,2,3,4,5,6],\"Price\":5000,\"Type\":-1},{\"Variation\":72,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":5000,\"Type\":-1},{\"Variation\":73,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3000,\"Type\":-1},{\"Variation\":75,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3000,\"Type\":-1},{\"Variation\":77,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":8000,\"Type\":-1},{\"Variation\":78,\"Colors\":[0,1],\"Price\":5000,\"Type\":-1},{\"Variation\":79,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":9000,\"Type\":-1},{\"Variation\":80,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":9000,\"Type\":-1},{\"Variation\":81,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":68000,\"Type\":-1},{\"Variation\":83,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":85,\"Colors\":[0,1,2],\"Price\":3000,\"Type\":-1},{\"Variation\":88,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":4000,\"Type\":-1},{\"Variation\":89,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":4000,\"Type\":-1},{\"Variation\":92,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":6000,\"Type\":-1},{\"Variation\":93,\"Colors\":[0],\"Price\":5000,\"Type\":-1}]}");
global.clothesGloves = JSON.parse("{\"1\":[{\"Variation\":4,\"Colors\":[0,1],\"Price\":4000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1],\"Price\":4200,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1],\"Price\":4200,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1],\"Price\":4200,\"Type\":-1},{\"Variation\":9,\"Colors\":[0],\"Price\":4200,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":3000,\"Type\":-1}],\"0\":[{\"Variation\":4,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1],\"Price\":3500,\"Type\":-1},{\"Variation\":6,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0],\"Price\":2550,\"Type\":-1},{\"Variation\":9,\"Colors\":[0],\"Price\":2000,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1],\"Price\":11000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":8000,\"Type\":-1}]}");
global.clothesWatches = JSON.parse("{\"1\":[{\"Variation\":0,\"Colors\":[0],\"Price\":15000,\"Type\":-1},{\"Variation\":1,\"Colors\":[0],\"Price\":10000,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3],\"Price\":8000,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3],\"Price\":6000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3],\"Price\":12000,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2],\"Price\":80000,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2],\"Price\":50000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2],\"Price\":80000,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2],\"Price\":70000,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2],\"Price\":30000,\"Type\":-1},{\"Variation\":11,\"Colors\":[0,1,2],\"Price\":40000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2],\"Price\":6000,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2],\"Price\":6000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2],\"Price\":6000,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2],\"Price\":40000,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2],\"Price\":33000,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1,2],\"Price\":30000,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2],\"Price\":9000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1,2],\"Price\":110000,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2],\"Price\":70000,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1,2],\"Price\":7000,\"Type\":-1},{\"Variation\":22,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":23,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":24,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":25,\"Colors\":[0],\"Price\":9000,\"Type\":-1},{\"Variation\":26,\"Colors\":[0],\"Price\":7000,\"Type\":-1},{\"Variation\":27,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":28,\"Colors\":[0],\"Price\":3000,\"Type\":-1},{\"Variation\":29,\"Colors\":[0,1,2,3],\"Price\":3000,\"Type\":-1}],\"0\":[{\"Variation\":2,\"Colors\":[0,1,2,3],\"Price\":80000,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2],\"Price\":120000,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2],\"Price\":130000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2],\"Price\":80000,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2],\"Price\":70000,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2],\"Price\":90000,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2],\"Price\":70000,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2],\"Price\":80000,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2],\"Price\":30000,\"Type\":-1},{\"Variation\":11,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0],\"Price\":6000,\"Type\":-1},{\"Variation\":13,\"Colors\":[0],\"Price\":10000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0],\"Price\":8000,\"Type\":-1},{\"Variation\":15,\"Colors\":[0],\"Price\":15000,\"Type\":-1},{\"Variation\":16,\"Colors\":[0],\"Price\":15000,\"Type\":-1},{\"Variation\":17,\"Colors\":[0],\"Price\":13000,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2,3],\"Price\":15000,\"Type\":-1}]}");
global.clothesGlasses = JSON.parse("{\"1\":[{\"Variation\":1,\"Colors\":[1],\"Price\":630,\"Type\":-1},{\"Variation\":2,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2000,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2700,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":3000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9000,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2700,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":6000,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":7500,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9300,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9900,\"Type\":-1},{\"Variation\":13,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":6900,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":7500,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":3000,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":10500,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":12000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9300,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":7500,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":6000,\"Type\":-1}],\"0\":[{\"Variation\":0,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":630,\"Type\":-1},{\"Variation\":1,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2000,\"Type\":-1},{\"Variation\":2,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":2800,\"Type\":-1},{\"Variation\":3,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":3000,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":6000,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":5400,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":6300,\"Type\":-1},{\"Variation\":8,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":7500,\"Type\":-1},{\"Variation\":9,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9000,\"Type\":-1},{\"Variation\":10,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":4500,\"Type\":-1},{\"Variation\":11,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":7500,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":9000,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":6000,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":9600,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":6000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":6000,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":4500,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":7500,\"Type\":-1},{\"Variation\":24,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":7500,\"Type\":-1},{\"Variation\":25,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":7500,\"Type\":-1}]}");
global.clothesJewerly = JSON.parse("{\"1\":[{\"Variation\":17,\"Colors\":[0,1,2],\"Price\":15000,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":50,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":51,\"Colors\":[0],\"Price\":2000,\"Type\":-1},{\"Variation\":52,\"Colors\":[0,1],\"Price\":3000,\"Type\":-1},{\"Variation\":53,\"Colors\":[0,1],\"Price\":3100,\"Type\":-1},{\"Variation\":54,\"Colors\":[0,1],\"Price\":3400,\"Type\":-1},{\"Variation\":55,\"Colors\":[0,1],\"Price\":4800,\"Type\":-1},{\"Variation\":85,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":86,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":87,\"Colors\":[0,1],\"Price\":21600,\"Type\":-1},{\"Variation\":88,\"Colors\":[0,1],\"Price\":18000,\"Type\":-1},{\"Variation\":89,\"Colors\":[0,1],\"Price\":22000,\"Type\":-1},{\"Variation\":90,\"Colors\":[0,1],\"Price\":25000,\"Type\":-1},{\"Variation\":91,\"Colors\":[0,1],\"Price\":26000,\"Type\":-1},{\"Variation\":92,\"Colors\":[0,1],\"Price\":22500,\"Type\":-1},{\"Variation\":93,\"Colors\":[0,1],\"Price\":22500,\"Type\":-1},{\"Variation\":94,\"Colors\":[0,1],\"Price\":23000,\"Type\":-1},{\"Variation\":111,\"Colors\":[0,1],\"Price\":39000,\"Type\":-1},{\"Variation\":123,\"Colors\":[0,1],\"Price\":45000,\"Type\":-1},{\"Variation\":120,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":122,\"Colors\":[0,1],\"Price\":33000,\"Type\":-1}],\"0\":[{\"Variation\":6,\"Colors\":[0,1,2,3,4,5],\"Price\":30000,\"Type\":-1},{\"Variation\":7,\"Colors\":[0,1],\"Price\":28000,\"Type\":-1},{\"Variation\":11,\"Colors\":[0,1,2,3],\"Price\":29000,\"Type\":-1},{\"Variation\":12,\"Colors\":[0,1,2],\"Price\":15000,\"Type\":-1},{\"Variation\":36,\"Colors\":[0,1],\"Price\":33000,\"Type\":-1},{\"Variation\":37,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":38,\"Colors\":[0],\"Price\":36000,\"Type\":-1},{\"Variation\":39,\"Colors\":[0,1],\"Price\":39000,\"Type\":-1},{\"Variation\":40,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":41,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":42,\"Colors\":[0,1],\"Price\":38000,\"Type\":-1},{\"Variation\":64,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":65,\"Colors\":[0,1],\"Price\":22000,\"Type\":-1},{\"Variation\":66,\"Colors\":[0,1],\"Price\":23000,\"Type\":-1},{\"Variation\":67,\"Colors\":[0,1],\"Price\":25000,\"Type\":-1},{\"Variation\":68,\"Colors\":[0,1],\"Price\":22800,\"Type\":-1},{\"Variation\":69,\"Colors\":[0,1],\"Price\":25000,\"Type\":-1},{\"Variation\":70,\"Colors\":[0,1],\"Price\":25000,\"Type\":-1},{\"Variation\":71,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":72,\"Colors\":[0,1],\"Price\":21000,\"Type\":-1},{\"Variation\":73,\"Colors\":[0,1],\"Price\":25000,\"Type\":-1},{\"Variation\":82,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":90,\"Colors\":[0,1],\"Price\":36000,\"Type\":-1},{\"Variation\":92,\"Colors\":[0,1],\"Price\":38000,\"Type\":-1},{\"Variation\":93,\"Colors\":[0,1],\"Price\":38000,\"Type\":-1}]}");

global.clothesMasks = JSON.parse("[{\"Variation\":1,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":2,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":3,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":4,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":5,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":6,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":9,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":14,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":20000,\"Type\":-1},{\"Variation\":15,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":16,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":20000,\"Type\":-1},{\"Variation\":17,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":18,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":19,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":20,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":21,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":22,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":23,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":24,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":26,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":28,\"Colors\":[0,1,2,3,4],\"Price\":20000,\"Type\":-1},{\"Variation\":29,\"Colors\":[0,1,2,3,4],\"Price\":20000,\"Type\":-1},{\"Variation\":30,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":31,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":32,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":34,\"Colors\":[0,1,2],\"Price\":20000,\"Type\":-1},{\"Variation\":35,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":37,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":38,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":46,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":49,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":50,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":20000,\"Type\":-1},{\"Variation\":51,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":3500,\"Type\":-1},{\"Variation\":52,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":4000,\"Type\":-1},{\"Variation\":53,\"Colors\":[0,1,2,3,4,5,6,7,8],\"Price\":4000,\"Type\":-1},{\"Variation\":54,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10],\"Price\":4000,\"Type\":-1},{\"Variation\":57,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\"Price\":3500,\"Type\":-1},{\"Variation\":58,\"Colors\":[0,1,2,3,4,5,6,7,8,9],\"Price\":4000,\"Type\":-1},{\"Variation\":59,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":72,\"Colors\":[0,1,2],\"Price\":20000,\"Type\":-1},{\"Variation\":87,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":88,\"Colors\":[0,1],\"Price\":20000,\"Type\":-1},{\"Variation\":89,\"Colors\":[0,1,2,3,4],\"Price\":20000,\"Type\":-1},{\"Variation\":93,\"Colors\":[0,1,2,3,4,5],\"Price\":20000,\"Type\":-1},{\"Variation\":94,\"Colors\":[0,1,2,3,4,5],\"Price\":20000,\"Type\":-1},{\"Variation\":95,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":20000,\"Type\":-1},{\"Variation\":96,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":97,\"Colors\":[0,1,2,3,4,5],\"Price\":20000,\"Type\":-1},{\"Variation\":98,\"Colors\":[0],\"Price\":20000,\"Type\":-1},{\"Variation\":99,\"Colors\":[0,1,2,3,4,5],\"Price\":20000,\"Type\":-1},{\"Variation\":100,\"Colors\":[0,1,2,3,4,5],\"Price\":20000,\"Type\":-1},{\"Variation\":101,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":20000,\"Type\":-1},{\"Variation\":104,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":105,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":20000,\"Type\":-1},{\"Variation\":106,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":108,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],\"Price\":20000,\"Type\":-1},{\"Variation\":110,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":111,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3500,\"Type\":-1},{\"Variation\":112,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":113,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\"Price\":4500,\"Type\":-1},{\"Variation\":115,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":117,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],\"Price\":3500,\"Type\":-1},{\"Variation\":118,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":3500,\"Type\":-1},{\"Variation\":119,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\"Price\":3700,\"Type\":-1},{\"Variation\":128,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\"Price\":20000,\"Type\":-1},{\"Variation\":129,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"Price\":20000,\"Type\":-1},{\"Variation\":130,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],\"Price\":20000,\"Type\":-1},{\"Variation\":131,\"Colors\":[0,1,2,3],\"Price\":20000,\"Type\":-1},{\"Variation\":132,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],\"Price\":20000,\"Type\":-1},{\"Variation\":133,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"Price\":20000,\"Type\":-1},{\"Variation\":135,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],\"Price\":20000,\"Type\":-1},{\"Variation\":137,\"Colors\":[0,1,2,3,4,5,6,7],\"Price\":20000,\"Type\":-1},{\"Variation\":142,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11],\"Price\":20000,\"Type\":-1},{\"Variation\":146,\"Colors\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"Price\":20000,\"Type\":-1},{\"Variation\":147,\"Colors\":[0],\"Price\":20000,\"Type\":-1}]");

global.correctGloves = JSON.parse("{\"1\":{\"1\":{\"4\":16},\"2\":{\"4\":17},\"3\":{\"4\":18},\"4\":{\"0\":19,\"1\":20,\"2\":21,\"4\":22,\"5\":23,\"6\":24,\"8\":25,\"11\":26,\"12\":27,\"14\":28,\"15\":29,\"112\":115,\"113\":122,\"114\":129},\"5\":{\"0\":30,\"1\":31,\"2\":32,\"4\":33,\"5\":34,\"6\":35,\"8\":36,\"11\":37,\"12\":38,\"14\":39,\"15\":40,\"112\":116,\"113\":123,\"114\":130},\"6\":{\"0\":41,\"1\":42,\"2\":43,\"4\":44,\"5\":45,\"6\":46,\"8\":47,\"11\":48,\"12\":49,\"14\":50,\"15\":51,\"112\":117,\"113\":124,\"114\":131},\"7\":{\"0\":52,\"1\":53,\"2\":54,\"4\":55,\"5\":56,\"6\":57,\"8\":58,\"11\":59,\"12\":60,\"14\":61,\"15\":62,\"112\":118,\"113\":125,\"114\":132},\"8\":{\"0\":63,\"1\":64,\"2\":65,\"4\":66,\"5\":67,\"6\":68,\"8\":69,\"11\":70,\"12\":71,\"14\":72,\"15\":73,\"112\":119,\"113\":126,\"114\":133},\"9\":{\"0\":74,\"1\":75,\"2\":76,\"4\":77,\"5\":78,\"6\":79,\"8\":80,\"11\":81,\"12\":82,\"14\":83,\"15\":84,\"112\":120,\"113\":127,\"114\":134},\"10\":{\"0\":85,\"1\":86,\"2\":87,\"4\":88,\"5\":89,\"6\":90,\"8\":91,\"11\":92,\"12\":93,\"14\":94,\"15\":95,\"112\":121,\"113\":128,\"114\":135},\"11\":{\"4\":96},\"12\":{\"4\":97},\"13\":{\"0\":99,\"1\":100,\"2\":101,\"4\":102,\"5\":103,\"6\":104,\"8\":105,\"11\":106,\"12\":107,\"14\":108,\"15\":109},\"14\":{\"4\":110}},\"0\":{\"1\":{\"3\":17},\"2\":{\"3\":18},\"3\":{\"3\":19},\"4\":{\"0\":20,\"1\":21,\"2\":22,\"3\":23,\"4\":24,\"5\":25,\"6\":26,\"7\":27,\"9\":28,\"11\":29,\"12\":30,\"14\":31,\"15\":32,\"129\":132,\"130\":139,\"131\":146,\"153\":154,\"161\":162},\"5\":{\"0\":33,\"1\":34,\"2\":35,\"3\":36,\"4\":37,\"5\":38,\"6\":39,\"7\":40,\"9\":41,\"11\":42,\"12\":43,\"14\":44,\"15\":45,\"129\":133,\"130\":140,\"131\":147,\"153\":155,\"161\":163},\"6\":{\"0\":46,\"1\":47,\"2\":48,\"3\":49,\"4\":50,\"5\":51,\"6\":52,\"7\":53,\"9\":54,\"11\":55,\"12\":56,\"14\":57,\"15\":58,\"129\":134,\"130\":141,\"131\":148,\"153\":156,\"161\":164},\"7\":{\"0\":59,\"1\":60,\"2\":61,\"3\":62,\"4\":63,\"5\":64,\"6\":65,\"7\":66,\"9\":67,\"11\":68,\"12\":69,\"14\":70,\"15\":71,\"129\":135,\"130\":142,\"131\":149,\"153\":157,\"161\":165},\"8\":{\"0\":72,\"1\":73,\"2\":74,\"3\":75,\"4\":76,\"5\":77,\"6\":78,\"7\":79,\"9\":80,\"11\":81,\"12\":82,\"14\":83,\"15\":84,\"129\":136,\"130\":143,\"131\":150,\"153\":158,\"161\":166},\"9\":{\"0\":85,\"1\":86,\"2\":87,\"3\":88,\"4\":89,\"5\":90,\"6\":91,\"7\":92,\"9\":93,\"11\":94,\"12\":95,\"14\":96,\"15\":97,\"129\":137,\"130\":144,\"131\":151,\"153\":159,\"161\":167},\"10\":{\"0\":98,\"1\":99,\"2\":100,\"3\":101,\"4\":102,\"5\":103,\"6\":104,\"7\":105,\"9\":106,\"11\":107,\"12\":108,\"14\":109,\"15\":110,\"129\":138,\"130\":145,\"131\":152,\"153\":160,\"161\":168},\"11\":{\"3\":111},\"12\":{\"0\":114,\"1\":115,\"2\":116,\"3\":117,\"4\":118,\"5\":119,\"6\":120,\"7\":121,\"9\":122,\"11\":123,\"12\":124,\"14\":125,\"15\":126}}}");
global.validTorsos = JSON.parse("{\"1\":{\"0\":0,\"1\":0,\"2\":2,\"3\":14,\"4\":14,\"5\":5,\"6\":14,\"7\":14,\"8\":8,\"9\":0,\"10\":14,\"11\":15,\"12\":12,\"13\":11,\"14\":12,\"15\":15,\"16\":0,\"17\":5,\"18\":0,\"19\":14,\"20\":14,\"21\":15,\"22\":0,\"23\":14,\"24\":14,\"25\":15,\"26\":11,\"27\":14,\"28\":14,\"29\":14,\"30\":14,\"31\":14,\"32\":14,\"33\":0,\"34\":0,\"35\":14,\"36\":5,\"37\":14,\"38\":8,\"39\":0,\"40\":15,\"41\":12,\"42\":11,\"43\":11,\"44\":0,\"45\":15,\"46\":14,\"47\":0,\"48\":1,\"49\":1,\"50\":1,\"51\":1,\"52\":2,\"53\":0,\"54\":1,\"55\":0,\"56\":0,\"57\":0,\"58\":14,\"59\":14,\"60\":15,\"61\":0,\"62\":14,\"63\":5,\"64\":14,\"65\":14,\"66\":15,\"67\":1,\"68\":14,\"69\":14,\"70\":14,\"71\":0,\"72\":14,\"73\":0,\"74\":14,\"75\":11,\"76\":14,\"77\":14,\"78\":14,\"79\":14,\"80\":0,\"81\":0,\"82\":0,\"83\":0,\"84\":1,\"85\":1,\"86\":1,\"87\":1,\"88\":14,\"89\":14,\"90\":14,\"91\":15,\"92\":6,\"93\":0,\"94\":0,\"95\":11,\"96\":11,\"97\":0,\"98\":0,\"99\":14,\"100\":14,\"101\":14,\"102\":14,\"103\":14,\"104\":14,\"105\":11,\"106\":14,\"107\":14,\"108\":14,\"109\":5,\"110\":1,\"111\":4,\"112\":14,\"113\":6,\"114\":14,\"115\":14,\"116\":14,\"117\":6,\"118\":14,\"119\":14,\"120\":6,\"121\":14,\"122\":14,\"123\":11,\"124\":14,\"125\":14,\"126\":1,\"127\":14,\"128\":0,\"129\":0,\"130\":14,\"131\":0,\"132\":0,\"133\":0,\"134\":0,\"135\":0,\"136\":14,\"137\":6,\"138\":14,\"139\":12,\"140\":14,\"141\":6,\"142\":14,\"143\":14,\"144\":6,\"145\":14,\"146\":0,\"147\":4,\"148\":4,\"149\":14,\"150\":14,\"151\":14,\"152\":14,\"153\":14,\"154\":14,\"155\":14,\"156\":14,\"157\":15,\"158\":15,\"159\":15,\"160\":15,\"161\":14,\"162\":15,\"163\":14,\"164\":0,\"165\":0,\"166\":14,\"167\":14,\"168\":14,\"169\":14,\"170\":15,\"171\":1,\"172\":14,\"173\":15,\"174\":14,\"175\":15,\"176\":15,\"177\":15,\"178\":1,\"179\":15,\"180\":15,\"181\":15,\"182\":1,\"183\":14,\"184\":14,\"185\":14,\"186\":14,\"187\":14,\"188\":14,\"189\":14,\"190\":14,\"191\":14,\"192\":14,\"193\":0,\"194\":1,\"195\":1,\"196\":1,\"197\":1,\"198\":1,\"199\":1,\"200\":1,\"201\":3,\"202\":4,\"203\":1,\"204\":6,\"205\":5,\"206\":5,\"207\":5,\"208\":0,\"209\":0,\"210\":0,\"211\":0,\"212\":14,\"213\":15,\"214\":14,\"215\":14,\"216\":15,\"217\":14,\"218\":14,\"219\":15,\"220\":14,\"221\":14,\"222\":11,\"223\":5,\"224\":1,\"225\":8,\"226\":0,\"227\":4,\"228\":4,\"229\":14,\"230\":14,\"231\":4,\"232\":14,\"233\":14,\"234\":11,\"235\":0,\"236\":0,\"237\":5,\"238\":2,\"239\":2,\"240\":14,\"241\":2,\"242\":2,\"243\":4,\"244\":6,\"245\":4,\"246\":3,\"247\":2,\"248\":6,\"249\":6,\"250\":0,\"251\":12,\"252\":0,\"253\":12,\"254\":12,\"255\":0,\"256\":0,\"257\":0,\"258\":0,\"259\":0,\"260\":0,\"261\":0,\"262\":14},\"0\":{\"0\":0,\"1\":5,\"2\":2,\"3\":3,\"4\":4,\"5\":4,\"6\":5,\"7\":5,\"8\":5,\"9\":0,\"10\":5,\"11\":4,\"12\":12,\"13\":15,\"14\":14,\"15\":15,\"16\":15,\"17\":0,\"18\":15,\"19\":15,\"20\":5,\"21\":4,\"22\":4,\"23\":4,\"24\":5,\"25\":5,\"26\":12,\"27\":0,\"28\":15,\"29\":9,\"30\":2,\"31\":5,\"32\":4,\"33\":4,\"34\":6,\"35\":5,\"36\":4,\"37\":4,\"38\":2,\"39\":1,\"40\":2,\"41\":5,\"42\":5,\"43\":3,\"44\":3,\"45\":3,\"46\":3,\"47\":3,\"48\":14,\"49\":14,\"50\":14,\"51\":6,\"52\":6,\"53\":5,\"54\":5,\"55\":5,\"56\":14,\"57\":5,\"58\":5,\"59\":5,\"60\":14,\"61\":3,\"62\":5,\"63\":5,\"64\":5,\"65\":5,\"66\":6,\"67\":2,\"68\":0,\"69\":0,\"70\":0,\"71\":0,\"72\":0,\"73\":14,\"74\":15,\"75\":9,\"76\":9,\"77\":9,\"78\":9,\"79\":9,\"80\":9,\"81\":9,\"82\":15,\"83\":9,\"84\":14,\"85\":14,\"86\":9,\"87\":9,\"88\":0,\"89\":0,\"90\":6,\"91\":6,\"92\":5,\"93\":5,\"94\":5,\"95\":5,\"96\":4,\"97\":5,\"98\":5,\"99\":5,\"100\":0,\"101\":15,\"102\":3,\"103\":3,\"104\":5,\"105\":4,\"106\":6,\"107\":6,\"108\":6,\"109\":6,\"110\":6,\"111\":4,\"112\":4,\"113\":4,\"114\":4,\"115\":4,\"116\":4,\"117\":11,\"118\":11,\"119\":11,\"120\":6,\"121\":6,\"122\":2,\"123\":2,\"124\":0,\"125\":14,\"126\":14,\"127\":14,\"128\":14,\"129\":14,\"130\":0,\"131\":3,\"132\":2,\"133\":5,\"134\":0,\"135\":3,\"136\":3,\"137\":5,\"138\":6,\"139\":5,\"140\":5,\"141\":14,\"142\":9,\"143\":5,\"144\":3,\"145\":3,\"146\":7,\"147\":1,\"148\":5,\"149\":5,\"150\":0,\"151\":0,\"152\":7,\"153\":5,\"154\":15,\"155\":15,\"156\":15,\"157\":15,\"158\":15,\"159\":15,\"160\":15,\"161\":11,\"162\":0,\"163\":5,\"164\":5,\"165\":5,\"166\":5,\"167\":15,\"168\":15,\"169\":15,\"170\":15,\"171\":15,\"172\":14,\"173\":15,\"174\":15,\"175\":15,\"176\":15,\"177\":15,\"178\":15,\"179\":11,\"180\":3,\"181\":15,\"182\":15,\"183\":15,\"184\":14,\"185\":6,\"186\":6,\"187\":6,\"188\":6,\"189\":6,\"190\":6,\"191\":6,\"192\":5,\"193\":5,\"194\":4,\"195\":4,\"196\":1,\"197\":1,\"198\":1,\"199\":1,\"200\":1,\"201\":1,\"202\":2,\"203\":8,\"204\":4,\"205\":2,\"206\":1,\"207\":4,\"208\":11,\"209\":11,\"210\":11,\"211\":11,\"212\":0,\"213\":1,\"214\":1,\"215\":1,\"216\":5,\"217\":4,\"218\":0,\"219\":5,\"220\":15,\"221\":15,\"222\":15,\"223\":15,\"224\":14,\"225\":15,\"226\":11,\"227\":3,\"228\":3,\"229\":4,\"230\":0,\"231\":0,\"232\":0,\"233\":11,\"234\":6,\"235\":1,\"236\":14,\"237\":3,\"238\":3,\"239\":3,\"240\":5,\"241\":3,\"242\":6,\"243\":6,\"244\":9,\"245\":14,\"246\":14,\"247\":4,\"248\":5,\"249\":14,\"250\":0,\"251\":3,\"252\":1,\"253\":9}}");
global.clothesEmpty = JSON.parse("{\"1\":{\"1\":0,\"3\":15,\"4\":21,\"5\":0,\"6\":34,\"7\":0,\"8\":15,\"9\":0,\"10\":0,\"11\":15},\"0\":{\"1\":0,\"3\":15,\"4\":15,\"5\":0,\"6\":35,\"7\":0,\"8\":6,\"9\":0,\"10\":0,\"11\":15}}");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*
2 - 1.43
1 - 1.42
0 - 1.41
-1 - other
*/
//global.GTA_VER = mp.game.streaming.isModelValid(0x4ABEBF23) ? 10 : 0;
global.GTA_VER = 10;
global.getNative = function (name) {
    return NATIVES[name][GTA_VER];
};
//mp.events.callRemote("checkVersion", GTA_VER);

global.NATIVES = {
    "SET_BLIP_SPRITE": { 10: '0xDF735600A4696DAF', 0: '0x3B815A6E8530D3A5', 1: '0xDC0EBFC7730AA226', 2: '0x4B4040A0EC7DBA81' },
    "SET_BLIP_ALPHA": { 10: '0x45FF974EEE1C8734', 0: '0x18EC814D577B92CE', 1: '0x1DB03C7D3DC49006', 2: '0xF20857E4CB32A2B7' },
    "SET_BLIP_COLOUR": { 10: '0x03D7FB09E75D6B7E', 0: '0xEB934A06DDA5027D', 1: '0x71925FF3194E84CE', 2: '0x0C71C8E276E3EC54' },
    "SET_BLIP_FLASH_TIMER": { 10: '0xD3CD6FD297AE87CC', 0: '0x82F6662608C79359', 1: '0xDAA61FC3AADFAE1D', 2: '0xAA75C45BC4449A40' },
    "SET_BLIP_FLASHES": { 10: '0xB14552383D39CE3E', 0: '0xB989C497205DF6E8', 1: '0xC3BBD8D349129F55', 2: '0x0A8FD2D5529E1737' },
    "SET_BLIP_ROTATION": { 10: '0xF87683CDF73C3F6E', 0: '0x890D3D8F19A923CC', 1: '0xFA3D22639F5AA493', 2: '0xE83839908A240D2E' },
    "REQUEST_ADDITIONAL_COLLISION_AT_COORD": { 10: '0xC9156DC11411A9EA', 0: '0xF48163C4935062E5', 1: '0x199640F55E0F7596', 2: '0x566B32CA90C28D2C' },
    "SET_FOLLOW_PED_CAM_VIEW_MODE": { 10: '0x5A4F9EDF1673F704', 0: '0xBD5C3A8C424D692F', 1: '0xA20353DB1D2AF820', 2: '0x0B51676846D7C57B' },
    "SET_PED_AMMO": { 10: '0x14E56BC5B5DB6A19', 0: '0x02B78A67FD396A42', 1: '0xC8207C41C6D1E3CF', 2: '0xF28A81E331A3F337' },
    "GET_SELECTED_PED_WEAPON": { 10: '0x0A6DB4965674D243', 0: '0x58A62DEC84D1FB6F', 1: '0x6678C142FAC881BA', 2: '0x4D008FF908B623E2' },
    "GIVE_WEAPON_TO_PED": { 10: '0xBF0FD6E56C964FCB', 0: '0xD5D9B48EB10FA2C0', 1: '0x7D154B840BD03D00', 2: '0x9E058151726E58DE' },
    "REMOVE_WEAPON_FROM_PED": { 10: '0x4899CB088EDF59B8', 0: '0x9E47A83BAB72D2C4', 1: '0xA48F593CC7A71FCC', 2: '0xABBEF2EAC74A02EB' },
    "IS_CUTSCENE_ACTIVE": { 10: '0x991251AFC3981F84', 0: '0x9063DC17918D346A', 1: '0x61F9977B378C43BF', 2: '0x6C97EEC6339FB45C' },
    "STOP_CUTSCENE_IMMEDIATELY": { 10: '0xD220BDD222AC4A1E', 0: '0xF51CB58D4AD94B4C', 1: '0xCDA9878BAC5C6D68', 2: '0xCFA828389A0C5B6B' },
    "GET_RANDOM_EVENT_FLAG": { 10: '0xD2D57F1D764117B1', 0: '0x86EEE9A2AEF6EC88', 1: '0xD436A6CEB14BAC66', 2: '0x17E356AF4F930A2C' },
    "SET_RANDOM_EVENT_FLAG": { 10: '0x971927086CFD2158', 0: '0x4FA59397643FB016', 1: '0xD42F50467E7AD46D', 2: '0x980C42B833D07BB4' },
    "GET_MISSION_FLAG": { 10: '0xA33CDCCDA663159E', 0: '0xD532AAF71376B5E8', 1: '0xEFD3E4A202A0D9DA', 2: '0x5A0744D504CC705F' },
    "SET_MISSION_FLAG": { 10: '0xC4301E5121A0ED73', 0: '0xB5533C0C8A2B9BF2', 1: '0x955FF17089AF6072', 2: '0xBC03901A15107317' },
    "REMOVE_ALL_PED_WEAPONS": { 10: '0xF25DF915FA38C5F3', 0: '0xD129A4C59BEB39B8', 1: '0x5FF97B71C576EF53', 2: '0x7346A36E01E18FEC' },
    "GET_AMMO_IN_PED_WEAPON": { 10: '0x015A522136D7F951', 0: '0x63D43044461F40BD', 1: '0x2406A9C8DA99D3F4', 2: '0x5088CF774DF6D935' },
    "SET_PED_ENABLE_WEAPON_BLOCKING": { 10: '0x97A790315D3831FD', 0: '0x24DF497566EDB1F0', 1: '0xBE2214915742A0E8', 2: '0x368E58752384E0B4' },
    "SET_PED_CAN_SWITCH_WEAPON": { 10: '0xED7F7EFE9FABF340', 0: '0x00663E123FCB5041', 1: '0xC6F259731E10AFA1', 2: '0xA65C9B02EE3596FE' },
    "MAKE_PED_RELOAD": { 10: '0x20AE33F3AC9C0033', 0: '0xB984E4455645D862', 1: '0x480C8F4C533B9748', 2: '0x3B920C528B54FB5F' },
    "_SET_VEHICLE_ENGINE_POWER_MULTIPLIER": { 10: '0x93A3996368C94158', 0: '0x5F850CC79999947A', 1: '0xF1E9E4CBA77681D3', 2: '0x28C3B4214877233A' },
    "_SET_VEHICLE_ENGINE_TORQUE_MULTIPLIER": { 10: '0xB59E4BD37AE292DB', 0: '0x3CFE09CFEB536C3D', 1: '0x33C9D0B39210B35E', 2: '0xF4A0FCE96487A10B' },
    "GET_PLAYER_RADIO_STATION_INDEX": { 10: '0xE8AF77C4C06ADC93' },
    "SET_FRONTEND_RADIO_ACTIVE": { 10: '0xF7F26C6E9CC9EBB8' },
    "SET_RADIO_TO_STATION_INDEX": { 10: '0xA619B168B8A8570F' }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.tattoos = JSON.parse("{\"torso\":[{\"Slots\":[0,1],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_000_M\",\"FemaleHash\":\"MP_Vinewood_Tat_000_F\",\"Price\":1500},{\"Slots\":[5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_001_M\",\"FemaleHash\":\"MP_Vinewood_Tat_001_F\",\"Price\":1350},{\"Slots\":[0],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_003_M\",\"FemaleHash\":\"MP_Vinewood_Tat_003_F\",\"Price\":1700},{\"Slots\":[5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_006_M\",\"FemaleHash\":\"MP_Vinewood_Tat_006_F\",\"Price\":2750},{\"Slots\":[5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_007_M\",\"FemaleHash\":\"MP_Vinewood_Tat_007_F\",\"Price\":7777},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_008_M\",\"FemaleHash\":\"MP_Vinewood_Tat_008_F\",\"Price\":3500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_009_M\",\"FemaleHash\":\"MP_Vinewood_Tat_009_F\",\"Price\":2000},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_010_M\",\"FemaleHash\":\"MP_Vinewood_Tat_010_F\",\"Price\":2550},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_011_M\",\"FemaleHash\":\"MP_Vinewood_Tat_011_F\",\"Price\":4500},{\"Slots\":[2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_012_M\",\"FemaleHash\":\"MP_Vinewood_Tat_012_F\",\"Price\":2750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_015_M\",\"FemaleHash\":\"MP_Vinewood_Tat_015_F\",\"Price\":2000},{\"Slots\":[2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_016_M\",\"FemaleHash\":\"MP_Vinewood_Tat_016_F\",\"Price\":3000},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_017_M\",\"FemaleHash\":\"MP_Vinewood_Tat_017_F\",\"Price\":1550},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_021_M\",\"FemaleHash\":\"MP_Vinewood_Tat_021_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_022_M\",\"FemaleHash\":\"MP_Vinewood_Tat_022_F\",\"Price\":2550},{\"Slots\":[0,1],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_023_M\",\"FemaleHash\":\"MP_Vinewood_Tat_023_F\",\"Price\":3550},{\"Slots\":[2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_024_M\",\"FemaleHash\":\"MP_Vinewood_Tat_024_F\",\"Price\":5000},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_029_M\",\"FemaleHash\":\"MP_Vinewood_Tat_029_F\",\"Price\":3550},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_030_M\",\"FemaleHash\":\"MP_Vinewood_Tat_030_F\",\"Price\":2550},{\"Slots\":[2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_031_M\",\"FemaleHash\":\"MP_Vinewood_Tat_031_F\",\"Price\":4750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_032_M\",\"FemaleHash\":\"MP_Vinewood_Tat_032_F\",\"Price\":6000},{\"Slots\":[2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Stomach_000\",\"FemaleHash\":\"\",\"Price\":3000},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Chest_000\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Chest_001\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[3,4],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Back_000\",\"FemaleHash\":\"\",\"Price\":2000},{\"Slots\":[0,1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Chest_000\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Chest_001\",\"Price\":2500},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Chest_002\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Stom_000\",\"Price\":3000},{\"Slots\":[8],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Stom_001\",\"Price\":2000},{\"Slots\":[8],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Stom_002\",\"Price\":2000},{\"Slots\":[3,4],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Back_000\",\"Price\":2000},{\"Slots\":[3,4],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Back_001\",\"Price\":2500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_005\",\"FemaleHash\":\"MP_Xmas2_F_Tat_005\",\"Price\":6250},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_006\",\"FemaleHash\":\"MP_Xmas2_F_Tat_006\",\"Price\":6250},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_009\",\"FemaleHash\":\"MP_Xmas2_F_Tat_009\",\"Price\":1250},{\"Slots\":[5,6],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_011\",\"FemaleHash\":\"MP_Xmas2_F_Tat_011\",\"Price\":2250},{\"Slots\":[7],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_013\",\"FemaleHash\":\"MP_Xmas2_F_Tat_013\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_015\",\"FemaleHash\":\"MP_Xmas2_F_Tat_015\",\"Price\":2100},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_016\",\"FemaleHash\":\"MP_Xmas2_F_Tat_016\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_017\",\"FemaleHash\":\"MP_Xmas2_F_Tat_017\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_018\",\"FemaleHash\":\"MP_Xmas2_F_Tat_018\",\"Price\":2500},{\"Slots\":[0,1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_019\",\"FemaleHash\":\"MP_Xmas2_F_Tat_019\",\"Price\":2500},{\"Slots\":[2,8],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_028\",\"FemaleHash\":\"MP_Xmas2_F_Tat_028\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_000_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_000_F\",\"Price\":2000},{\"Slots\":[3,4],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_001_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_001_F\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_009_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_009_F\",\"Price\":2250},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_010_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_010_F\",\"Price\":3000},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_012_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_012_F\",\"Price\":1750},{\"Slots\":[5,6],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_013_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_013_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_014_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_014_F\",\"Price\":2250},{\"Slots\":[0,1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_017_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_017_F\",\"Price\":2500},{\"Slots\":[3,4],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_018_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_018_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_019_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_019_F\",\"Price\":2250},{\"Slots\":[0,1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_020_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_020_F\",\"Price\":2500},{\"Slots\":[5],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_022_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_022_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_028_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_028_F\",\"Price\":2500},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_029_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_029_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_000\",\"FemaleHash\":\"FM_Hip_F_Tat_000\",\"Price\":2250},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_002\",\"FemaleHash\":\"FM_Hip_F_Tat_002\",\"Price\":1750},{\"Slots\":[7],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_006\",\"FemaleHash\":\"FM_Hip_F_Tat_006\",\"Price\":200},{\"Slots\":[5,6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_011\",\"FemaleHash\":\"FM_Hip_F_Tat_011\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_012\",\"FemaleHash\":\"FM_Hip_F_Tat_012\",\"Price\":2250},{\"Slots\":[0,1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_013\",\"FemaleHash\":\"FM_Hip_F_Tat_013\",\"Price\":2500},{\"Slots\":[6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_024\",\"FemaleHash\":\"FM_Hip_F_Tat_024\",\"Price\":1750},{\"Slots\":[5],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_025\",\"FemaleHash\":\"FM_Hip_F_Tat_025\",\"Price\":1750},{\"Slots\":[2,8],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_029\",\"FemaleHash\":\"FM_Hip_F_Tat_029\",\"Price\":3750},{\"Slots\":[3,4],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_030\",\"FemaleHash\":\"FM_Hip_F_Tat_030\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_031\",\"FemaleHash\":\"FM_Hip_F_Tat_031\",\"Price\":2250},{\"Slots\":[6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_032\",\"FemaleHash\":\"FM_Hip_F_Tat_032\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_033\",\"FemaleHash\":\"FM_Hip_F_Tat_033\",\"Price\":2500},{\"Slots\":[2,8],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_035\",\"FemaleHash\":\"FM_Hip_F_Tat_035\",\"Price\":3750},{\"Slots\":[3],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_041\",\"FemaleHash\":\"FM_Hip_F_Tat_041\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_046\",\"FemaleHash\":\"FM_Hip_F_Tat_046\",\"Price\":2250},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_047\",\"FemaleHash\":\"FM_Hip_F_Tat_047\",\"Price\":1750},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_000_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_000_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_001_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_001_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_002_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_002_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_009_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_009_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_010_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_010_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_011_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_011_F\",\"Price\":2250},{\"Slots\":[0],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_001_M\",\"FemaleHash\":\"MP_LR_Tat_001_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_002_M\",\"FemaleHash\":\"MP_LR_Tat_002_F\",\"Price\":2500},{\"Slots\":[7],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_004_M\",\"FemaleHash\":\"MP_LR_Tat_004_F\",\"Price\":2000},{\"Slots\":[6],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_009_M\",\"FemaleHash\":\"MP_LR_Tat_009_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_010_M\",\"FemaleHash\":\"MP_LR_Tat_010_F\",\"Price\":6000},{\"Slots\":[1],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_013_M\",\"FemaleHash\":\"MP_LR_Tat_013_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_014_M\",\"FemaleHash\":\"MP_LR_Tat_014_F\",\"Price\":1250},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_021_M\",\"FemaleHash\":\"MP_LR_Tat_021_F\",\"Price\":5500},{\"Slots\":[1],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_026_M\",\"FemaleHash\":\"MP_LR_Tat_026_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_000_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_000_F\",\"Price\":1750},{\"Slots\":[5,6],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_001_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_001_F\",\"Price\":2250},{\"Slots\":[5,6],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_002_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_002_F\",\"Price\":2250},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_004_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_004_F\",\"Price\":5000},{\"Slots\":[5,6],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_005_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_005_F\",\"Price\":2250},{\"Slots\":[2],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_006_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_006_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_007_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_007_F\",\"Price\":2250},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_000_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_000_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_001_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_001_F\",\"Price\":2500},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_003_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_003_F\",\"Price\":3000},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_005_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_005_F\",\"Price\":2500},{\"Slots\":[3,4],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_006_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_006_F\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_008_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_008_F\",\"Price\":2250},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_010_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_010_F\",\"Price\":3250},{\"Slots\":[5,6],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_011_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_011_F\",\"Price\":2250},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_013_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_013_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_017_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_017_F\",\"Price\":2250},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_018_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_018_F\",\"Price\":1800},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_019_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_019_F\",\"Price\":2750},{\"Slots\":[5,6],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_021_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_021_F\",\"Price\":2250},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_023_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_023_F\",\"Price\":2750},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_026_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_026_F\",\"Price\":2650},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_029_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_029_F\",\"Price\":1650},{\"Slots\":[5,6],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_030_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_030_F\",\"Price\":2300},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_031_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_031_F\",\"Price\":3000},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_032_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_032_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_034_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_034_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_039_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_039_F\",\"Price\":2850},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_041_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_041_F\",\"Price\":2500},{\"Slots\":[3,4],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_043_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_043_F\",\"Price\":2100},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_050_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_050_F\",\"Price\":3000},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_052_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_052_F\",\"Price\":2500},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_058_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_058_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_059_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_059_F\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_060_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_060_F\",\"Price\":1850},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_000_M\",\"FemaleHash\":\"MP_LR_Tat_000_F\",\"Price\":5500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_008_M\",\"FemaleHash\":\"MP_LR_Tat_008_F\",\"Price\":5250},{\"Slots\":[7],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_011_M\",\"FemaleHash\":\"MP_LR_Tat_011_F\",\"Price\":2100},{\"Slots\":[0],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_012_M\",\"FemaleHash\":\"MP_LR_Tat_012_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_016_M\",\"FemaleHash\":\"MP_LR_Tat_016_F\",\"Price\":3100},{\"Slots\":[1],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_019_M\",\"FemaleHash\":\"MP_LR_Tat_019_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_031_M\",\"FemaleHash\":\"MP_LR_Tat_031_F\",\"Price\":5250},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_032_M\",\"FemaleHash\":\"MP_LR_Tat_032_F\",\"Price\":5600},{\"Slots\":[2],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_003_M\",\"FemaleHash\":\"MP_LUXE_TAT_003_F\",\"Price\":2750},{\"Slots\":[1],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_007_M\",\"FemaleHash\":\"MP_LUXE_TAT_007_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_008_M\",\"FemaleHash\":\"MP_LUXE_TAT_008_F\",\"Price\":1800},{\"Slots\":[0,1],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_014_M\",\"FemaleHash\":\"MP_LUXE_TAT_014_F\",\"Price\":2600},{\"Slots\":[0],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_015_M\",\"FemaleHash\":\"MP_LUXE_TAT_015_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_024_M\",\"FemaleHash\":\"MP_LUXE_TAT_024_F\",\"Price\":6250},{\"Slots\":[0],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_002_M\",\"FemaleHash\":\"MP_LUXE_TAT_002_F\",\"Price\":1750},{\"Slots\":[0,1,2,8],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_012_M\",\"FemaleHash\":\"MP_LUXE_TAT_012_F\",\"Price\":7000},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_022_M\",\"FemaleHash\":\"MP_LUXE_TAT_022_F\",\"Price\":6000},{\"Slots\":[0],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_025_M\",\"FemaleHash\":\"MP_LUXE_TAT_025_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_027_M\",\"FemaleHash\":\"MP_LUXE_TAT_027_F\",\"Price\":1800},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_029_M\",\"FemaleHash\":\"MP_LUXE_TAT_029_F\",\"Price\":5500},{\"Slots\":[1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_000_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_000_F\",\"Price\":1000},{\"Slots\":[2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_002_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_002_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_003_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_003_F\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_006_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_006_F\",\"Price\":2100},{\"Slots\":[0,1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_007_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_007_F\",\"Price\":2500},{\"Slots\":[5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_009_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_009_F\",\"Price\":2000},{\"Slots\":[2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_010_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_010_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_013_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_013_F\",\"Price\":2100},{\"Slots\":[2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_015_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_015_F\",\"Price\":3000},{\"Slots\":[5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_016_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_016_F\",\"Price\":2000},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_017_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_017_F\",\"Price\":5500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_018_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_018_F\",\"Price\":6000},{\"Slots\":[0],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_019_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_019_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_021_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_021_F\",\"Price\":2000},{\"Slots\":[5],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_022_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_022_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_024_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_024_F\",\"Price\":5500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_025_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_025_F\",\"Price\":5500},{\"Slots\":[0,1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_011_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_011_F\",\"Price\":2000},{\"Slots\":[7],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_012_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_012_F\",\"Price\":2000},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_014_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_014_F\",\"Price\":3100},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_018_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_018_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_019_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_019_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_024_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_024_F\",\"Price\":5000},{\"Slots\":[5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_026_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_026_F\",\"Price\":2000},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_027_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_027_F\",\"Price\":1750},{\"Slots\":[3,4],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_029_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_029_F\",\"Price\":2000},{\"Slots\":[6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_030_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_030_F\",\"Price\":2100},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_033_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_033_F\",\"Price\":1750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_034_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_034_F\",\"Price\":1250},{\"Slots\":[5],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_037_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_037_F\",\"Price\":1750},{\"Slots\":[5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_040_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_040_F\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_041_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_041_F\",\"Price\":2000},{\"Slots\":[0,1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_044_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_044_F\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_046_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_046_F\",\"Price\":2100},{\"Slots\":[5,6],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_048_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_048_F\",\"Price\":2100},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_003\",\"FemaleHash\":\"FM_Tat_Award_F_003\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_004\",\"FemaleHash\":\"FM_Tat_Award_F_004\",\"Price\":3250},{\"Slots\":[5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_005\",\"FemaleHash\":\"FM_Tat_Award_F_005\",\"Price\":2100},{\"Slots\":[3,4],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_008\",\"FemaleHash\":\"FM_Tat_Award_F_008\",\"Price\":8400},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_011\",\"FemaleHash\":\"FM_Tat_Award_F_011\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_012\",\"FemaleHash\":\"FM_Tat_Award_F_012\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_013\",\"FemaleHash\":\"FM_Tat_Award_F_013\",\"Price\":1800},{\"Slots\":[3,4],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_014\",\"FemaleHash\":\"FM_Tat_Award_F_014\",\"Price\":2100},{\"Slots\":[5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_016\",\"FemaleHash\":\"FM_Tat_Award_F_016\",\"Price\":2000},{\"Slots\":[5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_017\",\"FemaleHash\":\"FM_Tat_Award_F_017\",\"Price\":2100},{\"Slots\":[5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_018\",\"FemaleHash\":\"FM_Tat_Award_F_018\",\"Price\":2000},{\"Slots\":[6,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_019\",\"FemaleHash\":\"FM_Tat_Award_F_019\",\"Price\":2100},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_004\",\"FemaleHash\":\"FM_Tat_F_004\",\"Price\":3100},{\"Slots\":[3,4,5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_009\",\"FemaleHash\":\"FM_Tat_F_009\",\"Price\":6000},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_010\",\"FemaleHash\":\"FM_Tat_F_010\",\"Price\":1800},{\"Slots\":[5],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_011\",\"FemaleHash\":\"FM_Tat_F_011\",\"Price\":2100},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_012\",\"FemaleHash\":\"FM_Tat_F_012\",\"Price\":3000},{\"Slots\":[6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_013\",\"FemaleHash\":\"FM_Tat_F_013\",\"Price\":2100},{\"Slots\":[3,4,5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_016\",\"FemaleHash\":\"FM_Tat_F_016\",\"Price\":5750},{\"Slots\":[3,4,5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_019\",\"FemaleHash\":\"FM_Tat_F_019\",\"Price\":5500},{\"Slots\":[3,4,5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_020\",\"FemaleHash\":\"FM_Tat_F_020\",\"Price\":5000},{\"Slots\":[0,1,2,8],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_024\",\"FemaleHash\":\"FM_Tat_F_024\",\"Price\":6750},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_025\",\"FemaleHash\":\"FM_Tat_F_025\",\"Price\":1800},{\"Slots\":[2,8],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_029\",\"FemaleHash\":\"FM_Tat_F_029\",\"Price\":4100},{\"Slots\":[5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_030\",\"FemaleHash\":\"FM_Tat_F_030\",\"Price\":2100},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_034\",\"FemaleHash\":\"FM_Tat_F_034\",\"Price\":1700},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_036\",\"FemaleHash\":\"FM_Tat_F_036\",\"Price\":3000},{\"Slots\":[0,1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_044\",\"FemaleHash\":\"FM_Tat_F_044\",\"Price\":2100},{\"Slots\":[3,4,5,6],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_045\",\"FemaleHash\":\"FM_Tat_F_045\",\"Price\":5500}],\"head\":[{\"Slots\":[0],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Neck_000\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Neck_001\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Neck_002\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[3],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_Neck_003\",\"FemaleHash\":\"\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Neck_000\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_Neck_001\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_007\",\"FemaleHash\":\"MP_Xmas2_F_Tat_007\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_024\",\"FemaleHash\":\"MP_Xmas2_F_Tat_024\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_025\",\"FemaleHash\":\"MP_Xmas2_F_Tat_025\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_029\",\"FemaleHash\":\"MP_Xmas2_F_Tat_029\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_003_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_003_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_005\",\"FemaleHash\":\"FM_Hip_F_Tat_005\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_021\",\"FemaleHash\":\"FM_Hip_F_Tat_021\",\"Price\":1750},{\"Slots\":[5],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_009_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_009_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_038_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_038_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_051_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_051_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_011_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_011_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_012_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_012_F\",\"Price\":1750},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_000_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_000_F\",\"Price\":1750},{\"Slots\":[5],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_004_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_004_F\",\"Price\":200},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_006_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_006_F\",\"Price\":200},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_017_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_017_F\",\"Price\":200},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_042_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_042_F\",\"Price\":1750}],\"leftarm\":[{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_002_M\",\"FemaleHash\":\"MP_Vinewood_Tat_002_F\",\"Price\":2500},{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_005_M\",\"FemaleHash\":\"MP_Vinewood_Tat_005_F\",\"Price\":3000},{\"Slots\":[1],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_014_M\",\"FemaleHash\":\"MP_Vinewood_Tat_014_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_019_M\",\"FemaleHash\":\"MP_Vinewood_Tat_019_F\",\"Price\":4000},{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_026_M\",\"FemaleHash\":\"MP_Vinewood_Tat_026_F\",\"Price\":3500},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_LeftArm_000\",\"FemaleHash\":\"\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_LeftArm_001\",\"FemaleHash\":\"\",\"Price\":780},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_LArm_000\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_000\",\"FemaleHash\":\"MP_Xmas2_F_Tat_000\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_010\",\"FemaleHash\":\"MP_Xmas2_F_Tat_010\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_012\",\"FemaleHash\":\"MP_Xmas2_F_Tat_012\",\"Price\":1900},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_020\",\"FemaleHash\":\"MP_Xmas2_F_Tat_020\",\"Price\":1300},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_021\",\"FemaleHash\":\"MP_Xmas2_F_Tat_021\",\"Price\":1300},{\"Slots\":[0],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_004_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_004_F\",\"Price\":1350},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_008_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_008_F\",\"Price\":1780},{\"Slots\":[1,2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_015_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_015_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_016_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_016_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_025_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_025_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_027_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_027_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_003\",\"FemaleHash\":\"FM_Hip_F_Tat_003\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_007\",\"FemaleHash\":\"FM_Hip_F_Tat_007\",\"Price\":1300},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_015\",\"FemaleHash\":\"FM_Hip_F_Tat_015\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_016\",\"FemaleHash\":\"FM_Hip_F_Tat_016\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_026\",\"FemaleHash\":\"FM_Hip_F_Tat_026\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_027\",\"FemaleHash\":\"FM_Hip_F_Tat_027\",\"Price\":2000},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_028\",\"FemaleHash\":\"FM_Hip_F_Tat_028\",\"Price\":2000},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_034\",\"FemaleHash\":\"FM_Hip_F_Tat_034\",\"Price\":1250},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_037\",\"FemaleHash\":\"FM_Hip_F_Tat_037\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_039\",\"FemaleHash\":\"FM_Hip_F_Tat_039\",\"Price\":4500},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_043\",\"FemaleHash\":\"FM_Hip_F_Tat_043\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_048\",\"FemaleHash\":\"FM_Hip_F_Tat_048\",\"Price\":1300},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_004_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_004_F\",\"Price\":3800},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_008_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_008_F\",\"Price\":3750},{\"Slots\":[1],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_005_M\",\"FemaleHash\":\"MP_LR_Tat_005_F\",\"Price\":1780},{\"Slots\":[2],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_027_M\",\"FemaleHash\":\"MP_LR_Tat_027_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_033_M\",\"FemaleHash\":\"MP_LR_Tat_033_F\",\"Price\":3800},{\"Slots\":[1,2],\"Dictionary\":\"mpairraces_overlays\",\"MaleHash\":\"MP_Airraces_Tattoo_003_M\",\"FemaleHash\":\"MP_Airraces_Tattoo_003_F\",\"Price\":15700},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_012_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_012_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_016_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_016_F\",\"Price\":2000},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_020_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_020_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_024_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_024_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_025_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_025_F\",\"Price\":1100},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_035_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_035_F\",\"Price\":1600},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_045_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_045_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_053_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_053_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_055_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_055_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_006_M\",\"FemaleHash\":\"MP_LR_Tat_006_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_018_M\",\"FemaleHash\":\"MP_LR_Tat_018_F\",\"Price\":3700},{\"Slots\":[1],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_022_M\",\"FemaleHash\":\"MP_LR_Tat_022_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_020_M\",\"FemaleHash\":\"MP_LUXE_TAT_020_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_021_M\",\"FemaleHash\":\"MP_LUXE_TAT_021_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_005_M\",\"FemaleHash\":\"MP_LUXE_TAT_005_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_016_M\",\"FemaleHash\":\"MP_LUXE_TAT_016_F\",\"Price\":1780},{\"Slots\":[2],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_018_M\",\"FemaleHash\":\"MP_LUXE_TAT_018_F\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_028_M\",\"FemaleHash\":\"MP_LUXE_TAT_028_F\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_031_M\",\"FemaleHash\":\"MP_LUXE_TAT_031_F\",\"Price\":3800},{\"Slots\":[1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_004_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_004_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_008_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_008_F\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_014_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_014_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_001_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_001_F\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_002_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_002_F\",\"Price\":1250},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_008_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_008_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_022_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_022_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_023_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_023_F\",\"Price\":3750},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_035_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_035_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_039_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_039_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_043_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_043_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_001\",\"FemaleHash\":\"FM_Tat_Award_F_001\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_007\",\"FemaleHash\":\"FM_Tat_Award_F_007\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_015\",\"FemaleHash\":\"FM_Tat_Award_F_015\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_005\",\"FemaleHash\":\"FM_Tat_F_005\",\"Price\":1780},{\"Slots\":[1,2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_006\",\"FemaleHash\":\"FM_Tat_F_006\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_015\",\"FemaleHash\":\"FM_Tat_F_015\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_031\",\"FemaleHash\":\"FM_Tat_F_031\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_041\",\"FemaleHash\":\"FM_Tat_F_041\",\"Price\":1800}],\"rightarm\":[{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_004_M\",\"FemaleHash\":\"MP_Vinewood_Tat_004_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_018_M\",\"FemaleHash\":\"MP_Vinewood_Tat_018_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_025_M\",\"FemaleHash\":\"MP_Vinewood_Tat_025_F\",\"Price\":1000},{\"Slots\":[2],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_028_M\",\"FemaleHash\":\"MP_Vinewood_Tat_028_F\",\"Price\":2000},{\"Slots\":[2],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_RightArm_000\",\"FemaleHash\":\"\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"MP_Buis_M_RightArm_001\",\"FemaleHash\":\"\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_RArm_000\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_003\",\"FemaleHash\":\"MP_Xmas2_F_Tat_003\",\"Price\":1780},{\"Slots\":[2],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_004\",\"FemaleHash\":\"MP_Xmas2_F_Tat_004\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_008\",\"FemaleHash\":\"MP_Xmas2_F_Tat_008\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_022\",\"FemaleHash\":\"MP_Xmas2_F_Tat_022\",\"Price\":850},{\"Slots\":[1],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_023\",\"FemaleHash\":\"MP_Xmas2_F_Tat_023\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_026\",\"FemaleHash\":\"MP_Xmas2_F_Tat_026\",\"Price\":1250},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_027\",\"FemaleHash\":\"MP_Xmas2_F_Tat_027\",\"Price\":1250},{\"Slots\":[0],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_002_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_002_F\",\"Price\":1250},{\"Slots\":[2],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_021_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_021_F\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_024_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_024_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_001\",\"FemaleHash\":\"FM_Hip_F_Tat_001\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_004\",\"FemaleHash\":\"FM_Hip_F_Tat_004\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_008\",\"FemaleHash\":\"FM_Hip_F_Tat_008\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_010\",\"FemaleHash\":\"FM_Hip_F_Tat_010\",\"Price\":1250},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_014\",\"FemaleHash\":\"FM_Hip_F_Tat_014\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_017\",\"FemaleHash\":\"FM_Hip_F_Tat_017\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_018\",\"FemaleHash\":\"FM_Hip_F_Tat_018\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_020\",\"FemaleHash\":\"FM_Hip_F_Tat_020\",\"Price\":3800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_022\",\"FemaleHash\":\"FM_Hip_F_Tat_022\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_023\",\"FemaleHash\":\"FM_Hip_F_Tat_023\",\"Price\":1300},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_036\",\"FemaleHash\":\"FM_Hip_F_Tat_036\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_044\",\"FemaleHash\":\"FM_Hip_F_Tat_044\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_045\",\"FemaleHash\":\"FM_Hip_F_Tat_045\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_003_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_003_F\",\"Price\":3800},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_005_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_005_F\",\"Price\":3850},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_006_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_006_F\",\"Price\":3800},{\"Slots\":[1,2],\"Dictionary\":\"mpimportexport_overlays\",\"MaleHash\":\"MP_MP_ImportExport_Tat_007_M\",\"FemaleHash\":\"MP_MP_ImportExport_Tat_007_F\",\"Price\":3800},{\"Slots\":[1],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_015_M\",\"FemaleHash\":\"MP_LR_Tat_015_F\",\"Price\":1980},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_007_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_007_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_014_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_014_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_033_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_033_F\",\"Price\":1980},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_042_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_042_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_046_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_046_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_047_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_047_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_049_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_049_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_054_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_054_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_003_M\",\"FemaleHash\":\"MP_LR_Tat_003_F\",\"Price\":1780},{\"Slots\":[2],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_028_M\",\"FemaleHash\":\"MP_LR_Tat_028_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_035_M\",\"FemaleHash\":\"MP_LR_Tat_035_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_004_M\",\"FemaleHash\":\"MP_LUXE_TAT_004_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_013_M\",\"FemaleHash\":\"MP_LUXE_TAT_013_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_019_M\",\"FemaleHash\":\"MP_LUXE_TAT_019_F\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_010_M\",\"FemaleHash\":\"MP_LUXE_TAT_010_F\",\"Price\":1780},{\"Slots\":[2],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_017_M\",\"FemaleHash\":\"MP_LUXE_TAT_017_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_026_M\",\"FemaleHash\":\"MP_LUXE_TAT_026_F\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_030_M\",\"FemaleHash\":\"MP_LUXE_TAT_030_F\",\"Price\":3800},{\"Slots\":[1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_001_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_001_F\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_005_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_005_F\",\"Price\":1980},{\"Slots\":[1,2],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_023_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_023_F\",\"Price\":3800},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_003_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_003_F\",\"Price\":1750},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_009_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_009_F\",\"Price\":1850},{\"Slots\":[2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_010_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_010_F\",\"Price\":1780},{\"Slots\":[1,2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_016_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_016_F\",\"Price\":3800},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_036_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_036_F\",\"Price\":1250},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_038_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_038_F\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_049_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_049_F\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_002\",\"FemaleHash\":\"FM_Tat_Award_F_002\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_010\",\"FemaleHash\":\"FM_Tat_Award_F_010\",\"Price\":1800},{\"Slots\":[1,2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_000\",\"FemaleHash\":\"FM_Tat_F_000\",\"Price\":3800},{\"Slots\":[1,2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_001\",\"FemaleHash\":\"FM_Tat_F_001\",\"Price\":3800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_003\",\"FemaleHash\":\"FM_Tat_F_003\",\"Price\":1850},{\"Slots\":[1,2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_014\",\"FemaleHash\":\"FM_Tat_F_014\",\"Price\":3800},{\"Slots\":[1,2,0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_018\",\"FemaleHash\":\"FM_Tat_F_018\",\"Price\":4500},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_027\",\"FemaleHash\":\"FM_Tat_F_027\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_028\",\"FemaleHash\":\"FM_Tat_F_028\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_038\",\"FemaleHash\":\"FM_Tat_F_038\",\"Price\":1800},{\"Slots\":[2],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_047\",\"FemaleHash\":\"FM_Tat_F_047\",\"Price\":1800}],\"leftleg\":[{\"Slots\":[0],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_013_M\",\"FemaleHash\":\"MP_Vinewood_Tat_013_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_027_M\",\"FemaleHash\":\"MP_Vinewood_Tat_027_F\",\"Price\":2500},{\"Slots\":[0],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_LLeg_000\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_001\",\"FemaleHash\":\"MP_Xmas2_F_Tat_001\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_002\",\"FemaleHash\":\"MP_Xmas2_F_Tat_002\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_005_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_005_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_007_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_007_F\",\"Price\":1800},{\"Slots\":[0,1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_011_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_011_F\",\"Price\":3500},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_023_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_023_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_009\",\"FemaleHash\":\"FM_Hip_F_Tat_009\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_019\",\"FemaleHash\":\"FM_Hip_F_Tat_019\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_040\",\"FemaleHash\":\"FM_Hip_F_Tat_040\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_007_M\",\"FemaleHash\":\"MP_LR_Tat_007_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_020_M\",\"FemaleHash\":\"MP_LR_Tat_020_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_002_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_002_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_015_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_015_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_027_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_027_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_036_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_036_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_037_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_037_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_044_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_044_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_056_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_056_F\",\"Price\":1850},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_057_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_057_F\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_029_M\",\"FemaleHash\":\"MP_LR_Tat_029_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_000_M\",\"FemaleHash\":\"MP_LUXE_TAT_000_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_011_M\",\"FemaleHash\":\"MP_LUXE_TAT_011_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_007_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_007_F\",\"Price\":1780},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_013_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_013_F\",\"Price\":1800},{\"Slots\":[0,1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_021_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_021_F\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_028_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_028_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_031_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_031_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_009\",\"FemaleHash\":\"FM_Tat_Award_F_009\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_002\",\"FemaleHash\":\"FM_Tat_F_002\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_008\",\"FemaleHash\":\"FM_Tat_F_008\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_021\",\"FemaleHash\":\"FM_Tat_F_021\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_023\",\"FemaleHash\":\"FM_Tat_F_023\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_026\",\"FemaleHash\":\"FM_Tat_F_026\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_032\",\"FemaleHash\":\"FM_Tat_F_032\",\"Price\":1850},{\"Slots\":[0,1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_033\",\"FemaleHash\":\"FM_Tat_F_033\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_035\",\"FemaleHash\":\"FM_Tat_F_035\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_037\",\"FemaleHash\":\"FM_Tat_F_037\",\"Price\":1850}],\"rightleg\":[{\"Slots\":[0],\"Dictionary\":\"mpvinewood_overlays\",\"MaleHash\":\"MP_Vinewood_Tat_020_M\",\"FemaleHash\":\"MP_Vinewood_Tat_020_F\",\"Price\":2500},{\"Slots\":[0],\"Dictionary\":\"mpbusiness_overlays\",\"MaleHash\":\"\",\"FemaleHash\":\"MP_Buis_F_RLeg_000\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpchristmas2_overlays\",\"MaleHash\":\"MP_Xmas2_M_Tat_014\",\"FemaleHash\":\"MP_Xmas2_F_Tat_014\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_006_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_006_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_026_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_026_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpgunrunning_overlays\",\"MaleHash\":\"MP_Gunrunning_Tattoo_030_M\",\"FemaleHash\":\"MP_Gunrunning_Tattoo_030_F\",\"Price\":16850},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_038\",\"FemaleHash\":\"FM_Hip_F_Tat_038\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mphipster_overlays\",\"MaleHash\":\"FM_Hip_M_Tat_042\",\"FemaleHash\":\"FM_Hip_F_Tat_042\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_017_M\",\"FemaleHash\":\"MP_LR_Tat_017_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mplowrider_overlays\",\"MaleHash\":\"MP_LR_Tat_023_M\",\"FemaleHash\":\"MP_LR_Tat_023_F\",\"Price\":1850},{\"Slots\":[0,1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_004_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_004_F\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_022_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_022_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_028_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_028_F\",\"Price\":1800},{\"Slots\":[1],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_040_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_040_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpbiker_overlays\",\"MaleHash\":\"MP_MP_Biker_Tat_048_M\",\"FemaleHash\":\"MP_MP_Biker_Tat_048_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mplowrider2_overlays\",\"MaleHash\":\"MP_LR_Tat_030_M\",\"FemaleHash\":\"MP_LR_Tat_030_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpluxe_overlays\",\"MaleHash\":\"MP_LUXE_TAT_001_M\",\"FemaleHash\":\"MP_LUXE_TAT_001_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpluxe2_overlays\",\"MaleHash\":\"MP_LUXE_TAT_023_M\",\"FemaleHash\":\"MP_LUXE_TAT_023_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpsmuggler_overlays\",\"MaleHash\":\"MP_Smuggler_Tattoo_020_M\",\"FemaleHash\":\"MP_Smuggler_Tattoo_020_F\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_005_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_005_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_015_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_015_F\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_020_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_020_F\",\"Price\":1850},{\"Slots\":[1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_025_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_025_F\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_032_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_032_F\",\"Price\":1750},{\"Slots\":[0,1],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_045_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_045_F\",\"Price\":3500},{\"Slots\":[0],\"Dictionary\":\"mpstunt_overlays\",\"MaleHash\":\"MP_MP_Stunt_Tat_047_M\",\"FemaleHash\":\"MP_MP_Stunt_Tat_047_F\",\"Price\":1750},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_Award_M_006\",\"FemaleHash\":\"FM_Tat_Award_F_006\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_007\",\"FemaleHash\":\"FM_Tat_F_007\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_017\",\"FemaleHash\":\"FM_Tat_F_017\",\"Price\":1800},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_022\",\"FemaleHash\":\"FM_Tat_F_022\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_039\",\"FemaleHash\":\"FM_Tat_F_039\",\"Price\":1850},{\"Slots\":[0,1],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_040\",\"FemaleHash\":\"FM_Tat_F_040\",\"Price\":3400},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_042\",\"FemaleHash\":\"FM_Tat_F_042\",\"Price\":1850},{\"Slots\":[0],\"Dictionary\":\"multiplayer_overlays\",\"MaleHash\":\"FM_Tat_M_043\",\"FemaleHash\":\"FM_Tat_F_043\",\"Price\":1850}]}");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.tuningStandart = JSON.parse("{\"10\":{\"-1\":14000,\"0\":18000,\"1\":21000,\"2\":24000,\"3\":30000},\"11\":{\"-1\":10000,\"0\":36000},\"12\":{\"-1\":10000,\"0\":6000,\"1\":8000,\"2\":9000},\"13\":{\"-1\":10000,\"0\":12000,\"1\":21000,\"2\":24000},\"14\":{\"0\":10000,\"3\":9000,\"2\":12000,\"1\":18000},\"15\":{\"-1\":10000,\"0\":6000,\"1\":12000,\"2\":18000,\"3\":24000},\"16\":{\"-1\":10000,\"0\":9000,\"1\":14000,\"2\":21000},\"17\":{\"-1\":10000,\"0\":14000,\"1\":75000,\"2\":75000,\"3\":75000,\"4\":75000,\"5\":75000,\"6\":75000,\"7\":75000,\"8\":75000,\"9\":75000,\"10\":75000,\"11\":75000,\"12\":75000},\"18\":{\"0\":5000,\"1\":10000,\"2\":10000,\"3\":10000,\"4\":10000}}");
global.tuningConf = JSON.parse("{\"Visione\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":35000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000}]},\"Vagner\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":20000}]},\"Vacca\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000}]},\"Tempesta\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":25000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":40000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}]},\"T20\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}]},\"Sc1\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":35000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":40000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000}]},\"Pfister811\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":25000}]},\"Fmj\":{\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000}]},\"Cyclone\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 4\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 9\",\"Item3\":25000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":35000}]},\"Cheetah\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000}]},\"Bullet\":{},\"Adder\":{},\"Verlierer2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 5\",\"Item3\":30000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":30000}]},\"Specter2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":45000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":45000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":45000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 5\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 7\",\"Item3\":25000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 8\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 10\",\"Item3\":25000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 11\",\"Item3\":25000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 12\",\"Item3\":30000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":40000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":40000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":25000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":40000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":40000},{\"Item1\":12,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":40000},{\"Item1\":13,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":40000},{\"Item1\":14,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":15000},{\"Item1\":15,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":40000},{\"Item1\":16,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":40000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":35000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 10\",\"Item3\":35000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 11\",\"Item3\":30000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 12\",\"Item3\":30000},{\"Item1\":12,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 13\",\"Item3\":35000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":40000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":35000}]},\"Specter\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000}]},\"Seven70\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":35000}]},\"Khamelion\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":25000}]},\"Comet3\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":25000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 5\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 6\",\"Item3\":20000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 7\",\"Item3\":20000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 8\",\"Item3\":20000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 9\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 6\",\"Item3\":20000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 7\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 8\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 9\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":40000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":40000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":40000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":30000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":35000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":35000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 9\",\"Item3\":35000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 10\",\"Item3\":30000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 11\",\"Item3\":35000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 12\",\"Item3\":30000},{\"Item1\":12,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 13\",\"Item3\":35000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":30000}]},\"Dubsta3\":{\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 4\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":40000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":35000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000}]},\"Tropos\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000}]},\"Tampa2\":{\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000}]},\"Pariah\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":25000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 6\",\"Item3\":20000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 7\",\"Item3\":20000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 9\",\"Item3\":15000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 10\",\"Item3\":20000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 11\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 10\",\"Item3\":45000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 11\",\"Item3\":45000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 12\",\"Item3\":50000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":25000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":40000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":35000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":35000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":40000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000}]},\"Lynx\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":30000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":40000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":35000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":35000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":40000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":40000}]},\"Furoregt\":{},\"Alpha\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":25000}]},\"Cognoscenti\":{},\"Cog55\":{},\"Contender\":{},\"Nightshade\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":25000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":25000}]},\"Dominator2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":20000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":25000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":25000}]},\"Cogcabrio\":{},\"Buffalo2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 5\",\"Item3\":20000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":10000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":20000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":23000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":25000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000}]},\"Warrener\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":18000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":13000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000}]},\"Primo2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":10000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":20000}]},\"Rebel2\":{},\"Rebel\":{\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000}]},\"Bodhi2\":{\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 6\",\"Item3\":20000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0442\u0441\u0435\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 4\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 5\",\"Item3\":22000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000}]},\"Bfinjection\":{},\"Stalion2\":{},\"Sabregt2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":19000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":22000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}]},\"Sabregt\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":25000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":19000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":22000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}]},\"Gauntlet2\":{},\"Chino2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}]},\"Chino\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}]},\"Blade\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000}]},\"Shotaro\":{},\"Faggio2\":{},\"Sanchez2\":{},\"Enduro\":{},\"PCJ\":{},\"Hexer\":{},\"Lectro\":{},\"Nemesis\":{},\"Hakuchou\":{},\"Ruffian\":{},\"Bmx\":{},\"Scorcher\":{},\"BF400\":{},\"CarbonRS\":{},\"Bati\":{},\"Double\":{},\"Diablous\":{},\"Cliffhanger\":{},\"Akuma\":{},\"Thrust\":{},\"Nightblade\":{},\"Vindicator\":{},\"Ratbike\":{},\"Blazer\":{},\"Gargoyle\":{},\"Sanctus\":{},\"Bagger\":{},\"Diablous2\":{},\"Sovereign\":{},\"Avarus\":{},\"Bati2\":{},\"Daemon\":{},\"Daemon2\":{},\"Defiler\":{},\"Vortex\":{},\"Vader\":{},\"Coquette3\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 5\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}]},\"Viseris\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 6\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 7\",\"Item3\":30000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 3\",\"Item3\":10000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 7\",\"Item3\":25000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 8\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 9\",\"Item3\":25000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 10\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}]},\"Torero\":{\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":15000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0442\u0441\u0435\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0442\u0441\u0435\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":25000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 3\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 4\",\"Item3\":35000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}]},\"Swinger\":{\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 10\",\"Item3\":30000}]},\"Rapidgt3\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 6\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 7\",\"Item3\":25000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 8\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 10\",\"Item3\":30000},{\"Item1\":10,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 11\",\"Item3\":35000},{\"Item1\":11,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 12\",\"Item3\":35000},{\"Item1\":12,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 13\",\"Item3\":40000},{\"Item1\":13,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 14\",\"Item3\":40000},{\"Item1\":14,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 15\",\"Item3\":50000},{\"Item1\":15,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 16\",\"Item3\":50000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":10000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":15000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 10\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":15000}]},\"Monroe\":{},\"Mamba\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 10\",\"Item3\":30000}]},\"Feltzer3\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":20000}]},\"Cheetah2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":10000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":15000}]},\"Infernus2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":10000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":200000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":35000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0442\u0441\u0435\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0442\u0441\u0435\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":25000}]},\"Bifta\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u044E\u0431\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":10000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":10000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u043A\u0440\u044B\u0448\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0416\u0435\u0441\u0442\u043A\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":10000}]},\"Casco\":{},\"Massacro\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 3\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 4\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":15000}]},\"Feltzer2\":{\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}]},\"Sandking2\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":10000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 2\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":20000}]},\"Sandking\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u044E\u0431\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u044E\u0431\u043A\u0430 2\",\"Item3\":10000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 2\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":20000}]},\"Brawler\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 3\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000}]},\"Revolter\":{\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 10\",\"Item3\":30000},{\"Item1\":10,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 11\",\"Item3\":30000},{\"Item1\":11,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 12\",\"Item3\":30000},{\"Item1\":12,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 13\",\"Item3\":20000},{\"Item1\":13,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 14\",\"Item3\":30000},{\"Item1\":14,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 15\",\"Item3\":30000},{\"Item1\":15,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 16\",\"Item3\":30000},{\"Item1\":16,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 17\",\"Item3\":30000},{\"Item1\":17,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 18\",\"Item3\":30000},{\"Item1\":18,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 19\",\"Item3\":30000},{\"Item1\":19,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 20\",\"Item3\":30000},{\"Item1\":20,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 21\",\"Item3\":30000},{\"Item1\":21,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 22\",\"Item3\":30000},{\"Item1\":22,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 23\",\"Item3\":20000},{\"Item1\":23,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 24\",\"Item3\":30000},{\"Item1\":24,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 25\",\"Item3\":30000},{\"Item1\":25,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 26\",\"Item3\":30000},{\"Item1\":26,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 27\",\"Item3\":30000},{\"Item1\":27,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 28\",\"Item3\":30000},{\"Item1\":28,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 29\",\"Item3\":30000},{\"Item1\":29,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 30\",\"Item3\":30000},{\"Item1\":30,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 31\",\"Item3\":30000},{\"Item1\":31,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 32\",\"Item3\":30000},{\"Item1\":32,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 33\",\"Item3\":20000},{\"Item1\":33,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 34\",\"Item3\":30000},{\"Item1\":34,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 35\",\"Item3\":30000},{\"Item1\":35,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 36\",\"Item3\":30000},{\"Item1\":36,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 37\",\"Item3\":30000},{\"Item1\":37,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 38\",\"Item3\":30000},{\"Item1\":38,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 39\",\"Item3\":30000},{\"Item1\":39,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 40\",\"Item3\":30000}]},\"Futo\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":10000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 2\",\"Item3\":7000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430 1\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430 2\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\",\"Item3\":35000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":10000}]},\"Moonbeam2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u043A\u043E\u043B\u0435\u0441\u0430 \u043D\u0430 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0435\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421 \u043A\u043E\u043B\u0435\u0441\u043E\u043C \u043D\u0430 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0435\",\"Item3\":6000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430 2\",\"Item3\":7000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 1\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430 2\",\"Item3\":7000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 9\",\"Item3\":30000}]},\"Hermes\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0435 \u043A\u043E\u043B\u0451\u0441\u0430 \u0441\u0437\u0430\u0434\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043A\u043E\u043B\u0451\u0441\u0430 \u0441\u0437\u0430\u0434\u0438\",\"Item3\":10000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430 1\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430 2\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u0420\u0436\u0430\u0432\u0447\u0438\u043D\u0430 3\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":10000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":10000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":10000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":10000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":10000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":10000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":10000}]},\"Faction2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":8000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":7000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 2\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 3\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 4\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 5\",\"Item3\":30000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 6\",\"Item3\":30000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 7\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 8\",\"Item3\":30000}]},\"Faction\":{},\"Dukes\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0411\u043E\u043A\u043E\u0432\u044B\u0435 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u0438\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 2\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 3\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0426\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Drag\",\"Item3\":7000}]},\"Buccaneer2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0412\u044B\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0439 \u0432 \u0431\u043E\u043A \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":7000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0451\u0442\u043A\u0430\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0441 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C Drag\",\"Item3\":10000}]},\"Rhapsody\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u0443\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0451\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0411\u043E\u043A\u043E\u0432\u044B\u0435 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u0438\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0440\u0438\u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000}]},\"Panto\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Shakotan\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u0411\u043E\u043A\u043E\u0432\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":16000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0441 \u0445\u043B\u0430\u043C\u043E\u043C \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A\u0438\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":12000},{\"Item1\":2,\"Item2\":\"\u0423\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A\",\"Item3\":14000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u044B\u0448\u0430 \u0438 \u0437\u0430\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0440\u044B\u0448\u0430 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u041A\u0440\u044B\u0448\u0430 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445 \u0438 \u0434\u0432\u0435\u0440\u044C\",\"Item3\":16000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Extreme Aero\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434.\u0431\u0430\u043C\u043F\u0435\u0440 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":15000}]},\"Issi2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":8000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":7000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":8000}]},\"GP1\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":23000},{\"Item1\":2,\"Item2\":\"\u0421\u0447\u0435\u0442\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C LM\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C LM (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":19000},{\"Item1\":4,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C LM \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":18000},{\"Item1\":5,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":13000},{\"Item1\":6,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0443\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043D\u044B\u0439\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":11000},{\"Item1\":8,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":17000},{\"Item1\":9,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Offset (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":10000},{\"Item1\":10,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Offset \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":19000},{\"Item1\":11,\"Item2\":\"\u041D\u0430\u0431\u043E\u0440 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u0435\u0439 LM\",\"Item3\":30000},{\"Item1\":12,\"Item2\":\"\u041D\u0430\u0431\u043E\u0440 LM (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":25000},{\"Item1\":13,\"Item2\":\"\u041D\u0430\u0431\u043E\u0440 LM \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":15,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043D\u0430\u0431\u043E\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":24000},{\"Item1\":16,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043D\u0430\u0431\u043E\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":20000},{\"Item1\":17,\"Item2\":\"\u041D\u0430\u0431\u043E\u0440 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u0435\u0439 Offset\",\"Item3\":21000},{\"Item1\":17,\"Item2\":\"\u041D\u0430\u0431\u043E\u0440 Offset \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":21000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043B\u0443\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":21000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":23000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":16000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 2\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u043C\u0435\u043B\u043A\u043E\u0439 \u0440\u0435\u0448\u0435\u0442\u043A\u043E\u0439\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441\u043E \u0448\u0442\u043E\u0440\u043A\u0430\u043C\u0438\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 LM\",\"Item3\":18000},{\"Item1\":7,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 LM (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":20000},{\"Item1\":8,\"Item2\":\"\u0422\u0440\u0435\u043A\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":17000},{\"Item1\":9,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000},{\"Item1\":10,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":11,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 GT\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043B\u0435\u0433\u043A\u0430 \u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Branch\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u0414\u0432\u0443\u0445\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 LM\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"GT Wing\",\"Item3\":15000},{\"Item1\":9,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0438 LM \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u044B\",\"Item3\":15000},{\"Item1\":10,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0438 LM (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0441\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Tuner\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 LM\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Contest\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 GT\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0414\u0438\u0444\u0444\u0443\u0437\u043E\u0440 \u0441 \u0446\u0432\u0435\u0442\u043D\u043E\u0439 \u043A\u0430\u0439\u043C\u043E\u0439\",\"Item3\":15000}]},\"Omnis\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":18000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0413\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u0430\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u0430\u044F \u0440\u0435\u0442\u0440\u043E\",\"Item3\":10000}]},\"Reaper\":{\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":25000}]},\"Zentorno\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":22000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":16000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0431\u0435\u0437 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u0432\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430 \u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0435\",\"Item3\":30000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"GT \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":40000}]},\"Italigtb2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":22000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 2\",\"Item3\":15000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0435 1\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0435 2\",\"Item3\":30000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":30000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":30000},{\"Item1\":8,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":30000},{\"Item1\":9,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0434\u0432\u0443\u043C\u044F \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u043C\u0438\",\"Item3\":30000},{\"Item1\":10,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0442\u0440\u0435\u043C\u044F \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u043C\u0438\",\"Item3\":35000},{\"Item1\":11,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u043C\u0438\",\"Item3\":35000},{\"Item1\":12,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u043C\u0438\",\"Item3\":35000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":3,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":30000},{\"Item1\":7,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":30000}]},\"Xa21\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0437\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":5,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":22000},{\"Item1\":11,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":30000},{\"Item1\":13,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":35000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 1\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 1\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 2\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 2\",\"Item3\":25000},{\"Item1\":7,\"Item2\":\"\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 3\",\"Item3\":25000},{\"Item1\":8,\"Item2\":\"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 3\",\"Item3\":30000}]},\"Osiris\":{\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":8000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":20000},{\"Item1\":5,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":25000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000}]},\"Nero\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0427\u0435\u0440\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":3,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":12000},{\"Item1\":4,\"Item2\":\"\u0427\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u0432\u043E\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":12000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":7000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":9000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041B\u0438\u043D\u0438\u044F \u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0435\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F \u043D\u0430 \u043A\u0430\u043F\u043E\u0442\u0435\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}]},\"Primo\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":7000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":8000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0421\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]},\"Emperor\":{},\"Penetrator\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 (\u0445\u0440\u043E\u043C)\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u041F\u0430\u0440\u043D\u044B\u0439 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0439\",\"Item3\":10000},{\"Item1\":3,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":12000},{\"Item1\":4,\"Item2\":\"\u041F\u0430\u0440\u043D\u044B\u0439 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":16000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u043B\u0443\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 (\u0447\u0430\u0442\u044C)\",\"Item3\":12000},{\"Item1\":4,\"Item2\":\"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":19000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 (\u0432\u0441\u0435)\",\"Item3\":16000},{\"Item1\":6,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 GT\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 GT (\u0447\u0430\u0441\u0442\u044C)\",\"Item3\":16000},{\"Item1\":8,\"Item2\":\"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044B\u0435 GT\",\"Item3\":14000},{\"Item1\":9,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 GT (\u0432\u0441\u0435)\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0421 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"GT Wing\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 1\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 3\",\"Item3\":17000},{\"Item1\":3,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 4\",\"Item3\":27000},{\"Item1\":4,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 5\",\"Item3\":17000},{\"Item1\":5,\"Item2\":\"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F 6\",\"Item3\":27000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 \u0441 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u043E\u043C\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Chin (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0421 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u043E\u043C (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0420\u0435\u0448\u0435\u0442\u043A\u0430 \u0441\u043E \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\u043E\u043C\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\u044B\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":17000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":17000},{\"Item1\":4,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Aero (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":17000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 Aero (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":17000}]},\"Bison3\":{},\"Turismor\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"GT Wing\",\"Item3\":26000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":30000}]},\"Jester2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":16000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"GT Wing\",\"Item3\":13000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0434\u0435\u0444\u043B\u0435\u043A\u0442\u043E\u0440\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0430\u043C\u0438\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":15000}]},\"Neon\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":20000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0435 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":16000},{\"Item1\":4,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":16000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0435\",\"Item3\":13000},{\"Item1\":6,\"Item2\":\"Competition \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"Competition \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":19000},{\"Item1\":8,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 Competition\",\"Item3\":20000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u0435 \u043F\u043E\u043B\u043E\u0441\u044B\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041E\u0434\u043D\u0430 \u043F\u043E\u043B\u043E\u0441\u0430\",\"Item3\":14000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u0422\u0443\u0440\u0438\u043D\u0433\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Competition\",\"Item3\":15000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0435\u0440\u043A\u0430\u043B\u043E 1\",\"Item3\":12000},{\"Item1\":1,\"Item2\":\"\u0417\u0435\u0440\u043A\u0430\u043B\u043E 2\",\"Item3\":12000},{\"Item1\":2,\"Item2\":\"\u0417\u0435\u0440\u043A\u0430\u043B\u043E 3\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u0417\u0435\u0440\u043A\u0430\u043B\u043E 4\",\"Item3\":12000},{\"Item1\":4,\"Item2\":\"\u0417\u0435\u0440\u043A\u0430\u043B\u043E 5\",\"Item3\":12000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 Competition\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"Competition \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 Competition\",\"Item3\":17000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434.\u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000}]},\"Massacro2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0435 \u043D\u0430\u0441\u0430\u0434\u043A\u0438\",\"Item3\":7000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u043E\u043A\u043E\u0432\u043E\u0439 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u044C\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u043E\u043A\u043E\u0432\u043E\u0439\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0431\u043E\u043A\u043E\u0432\u043E\u0439\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439\",\"Item3\":16000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E GT\",\"Item3\":13000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u0438\",\"Item3\":22000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":16000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":15000}]},\"Turismo2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 4\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0440\u043E\u0433\u0438 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u043F\u043E\u043B\u043E\u0441\u043E\u0439\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u0412\u0435\u043D\u0442\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0412\u0435\u043D\u0442\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0441 \u043F\u043E\u043B\u043E\u0441\u043E\u0439\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":12000},{\"Item1\":4,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0441 \u043F\u043E\u043B\u043E\u0441\u043E\u0439\",\"Item3\":14000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 GT\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 GT \u0441 \u043F\u043E\u043B\u043E\u0441\u043E\u0439\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E GT\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E GT \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E GT (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":12000},{\"Item1\":6,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":8,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":18000},{\"Item1\":9,\"Item2\":\"\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":20000},{\"Item1\":10,\"Item2\":\"\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u044B\u0439 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":21000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0431\u043B\u0435\u0433\u0447\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 GT\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 GT (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000}]},\"EntityXF\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0422\u0440\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000}]},\"Banshee2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C 2\",\"Item3\":14000},{\"Item1\":4,\"Item2\":\"\u041D\u0430\u0441\u0430\u0434\u043A\u0430 \u043D\u0430 \u0432\u044B\u0445\u043B\u043E\u043F\",\"Item3\":16000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u043B\u0443\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":16000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":16000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u041D\u0430\u043A\u043B\u0430\u0434\u043D\u044B\u0435 \u0430\u0440\u043A\u0438\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0413\u043B\u0430\u0434\u043A\u0438\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440 (\u043D\u0430\u043A\u043B)\",\"Item3\":15000},{\"Item1\":6,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u043C\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u043C (\u0445\u0440\u043E\u043C)\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E GT (\u0432\u044B\u0441\u043E\u043A\u043E\u0435)\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u042D\u043A\u0441\u0442\u0440\u0438\u043C\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041A\u0440\u044B\u043B\u043E \u0410\u0442\u0430\u043A\u0430 \u043D\u0430 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\",\"Item3\":16000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0437\u0430\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0439 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0438 \u043F\u0430\u043D\u0435\u043B\u0438 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":15000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0435 \u043D\u0430\u0434\u043A\u0440\u044B\u043B\u043A\u0438\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0435 \u043D\u0430\u0434\u043A\u0440\u044B\u043B\u043A\u0438 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":22000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0431\u0440\u0438\u043E\",\"Item3\":30000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0432\u0438\u043D\u0438\u043B\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 1\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 2\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 3\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 4\",\"Item3\":18000},{\"Item1\":4,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 5\",\"Item3\":19000},{\"Item1\":5,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 6\",\"Item3\":20000},{\"Item1\":6,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 7\",\"Item3\":35000},{\"Item1\":7,\"Item2\":\"\u0412\u0438\u043D\u0438\u043B\u044B 8\",\"Item3\":45000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041D\u0430\u043A\u043B\u0430\u0434\u043D\u044B\u0435 \u0430\u0440\u043A\u0438\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 RS\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 RS\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 GT\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Street SPL\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"Banshee\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":12000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":12000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000},{\"Item1\":2,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":16000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0431\u0440\u0438\u043E\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]},\"BestiaGTS\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u043B\u0443\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":7000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":8000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u043B\u0430\u0434\u043A\u0438\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0437\u0430\u0431\u043E\u0440 \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0415\u0432\u0440\u043E\u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"BJXL\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u043E\u0436\u043A\u0438\",\"Item3\":6000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0438\u043B\u043E\u0432\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]},\"Comet2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u0434\u0432\u0443\u0441\u0442\u0432\u043E\u043B\u043A\u0430\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"GT Wing\",\"Item3\":26000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0430\u0434\u043A\u0440\u044B\u043B\u043A\u0438\",\"Item3\":22000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":19000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438 2\",\"Item3\":22000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"Coquette\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":3,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":30000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":26000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":2000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":14000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":16000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":26000},{\"Item1\":3,\"Item2\":\"\u0414\u0440\u0438\u0444\u0442-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":4,\"Item2\":\"GT Wing\",\"Item3\":26000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438\",\"Item3\":22000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0431\u0440\u0438\u043E\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":19000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":22000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":22000},{\"Item1\":3,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Extremo Aero\",\"Item3\":22000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":19000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":22000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":22000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0444\u0444. \u0438 \u043A\u0440\u044E\u043A\",\"Item3\":22000}]},\"Windsor\":{\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u0430 Sessanta Nove\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u041C\u043D\u043E\u0433\u043E\u0446\u0432. Sessanta Nove\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0413\u0435\u043E\u043C\u0435\u0442\u0440. Sessanta Nove\",\"Item3\":14000},{\"Item1\":3,\"Item2\":\"\u041C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u0430 Perseus Wings\",\"Item3\":16000},{\"Item1\":4,\"Item2\":\"\u041C\u043E\u043D\u043E\u0433\u0440. Perseus Green Wings\",\"Item3\":16000},{\"Item1\":5,\"Item2\":\"Santo Capra Python\",\"Item3\":16000},{\"Item1\":6,\"Item2\":\"Santo Capra Cheetah\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"Yeti Mall Ninja\",\"Item3\":16000}]},\"Superd\":{},\"Huntley\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":26000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":30000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":26000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":30000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":25000}]},\"Baller3\":{},\"Dubsta2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":26000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A\u0430\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u043F\u0430\u0441\u043A\u043E\u0439\",\"Item3\":26000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043B\u0435\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0428\u043D\u043E\u0440\u043A\u0435\u043B\u044C\",\"Item3\":25000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":25000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0441 \u043F\u0440\u043E\u0436\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0443\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0434\u0443\u0433\u043E\u0439\",\"Item3\":19000},{\"Item1\":1,\"Item2\":\"\u041A\u0443\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0434\u0443\u0433\u043E\u0439 \u0438 \u0444\u0430\u0440\u044B\",\"Item3\":22000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"Carbonizzare\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":25000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000}]},\"Infernus\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437\u043D\u043E\u0439\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"GT Wing\",\"Item3\":26000}]},\"Elegy2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":1,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 1\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 2\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 3\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 4\",\"Item3\":16000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":16000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"GT Wing\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u0427\u0435\u0440\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":26000},{\"Item1\":1,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":11000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0438 \u0434\u0438\u0444\u0444.\",\"Item3\":17000}]},\"Jester\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":22000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":26000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"GT Wing\",\"Item3\":15000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0434\u0435\u0444\u043B\u0435\u043A\u0442\u043E\u0440\",\"Item3\":26000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0430\u043C\u0438\",\"Item3\":17600}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":15000}]},\"Ninef2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":26000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":30000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":14000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":17600}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]},\"Ninef\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":16000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":30000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":11000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":17600}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":17600}]},\"Sultan\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":2000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":8000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":9000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":2000},{\"Item1\":0,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":16000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":1000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":8000},{\"Item1\":2,\"Item2\":\"GT Wing\",\"Item3\":12000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430 \u043B\u043E\u0431\u043E\u0432\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E\",\"Item3\":2000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":14000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0438 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":18000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":18000}]},\"SultanRS\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":2000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":8000},{\"Item1\":1,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0437\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0437\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000},{\"Item1\":4,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u0411\u0440\u044B\u0437\u0433\u043E\u0432\u0438\u043A\u0438 \u0447\u0451\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0411\u0440\u044B\u0437\u0433\u043E\u0432\u0438\u043A\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0411\u0440\u044B\u0437\u0433\u043E\u0432\u0438\u043A\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":12000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":2000},{\"Item1\":0,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 3\",\"Item3\":16000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 4\",\"Item3\":17000},{\"Item1\":5,\"Item2\":\"\u0418\u0437\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":25000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":1000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u041F\u0440\u0438\u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":8000},{\"Item1\":2,\"Item2\":\"GT Wing 1\",\"Item3\":12000},{\"Item1\":3,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":11000},{\"Item1\":4,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":11000},{\"Item1\":5,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":11000},{\"Item1\":6,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":11000},{\"Item1\":7,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 6\",\"Item3\":11000},{\"Item1\":8,\"Item2\":\"\u041F\u0440\u0438\u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":13000},{\"Item1\":9,\"Item2\":\"\u041F\u0440\u0438\u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":15000},{\"Item1\":10,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":20000},{\"Item1\":11,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":12,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":13,\"Item2\":\"\u041C\u0430\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":21000},{\"Item1\":14,\"Item2\":\"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":25000},{\"Item1\":15,\"Item2\":\"\u041A\u043E\u043C\u0431\u043E-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":27000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\",\"Item3\":1000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\",\"Item3\":15000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":1000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\",\"Item3\":20000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u041E\u0441\u0442\u0440\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0441 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u043E\u0439 \u043A\u0440\u044B\u0448\u0435\u0439\",\"Item3\":20000},{\"Item1\":4,\"Item2\":\"\u041E\u0441\u0442\u0440\u0430\u044F \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":13000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u043E \u0431\u043E\u043A\u0430\u043C\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0427\u0435\u0440\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 SULTAN RS\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0411\u0435\u043B\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 SULTAN RS\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043B\u0443\u0431\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430 \u0441\u0431\u043E\u043A\u0443\",\"Item3\":25000},{\"Item1\":4,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 KARIN\",\"Item3\":26000},{\"Item1\":5,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 REDWOOD\",\"Item3\":26000},{\"Item1\":6,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 KARIN 2\",\"Item3\":26000},{\"Item1\":7,\"Item2\":\"\u0418\u0437\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430\",\"Item3\":40000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":14000},{\"Item1\":1,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":18000},{\"Item1\":2,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":18000},{\"Item1\":4,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":15000},{\"Item1\":5,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":17000},{\"Item1\":6,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":16000},{\"Item1\":7,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":15000},{\"Item1\":8,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 9\",\"Item3\":20000},{\"Item1\":9,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 10\",\"Item3\":25000},{\"Item1\":10,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 11\",\"Item3\":23000},{\"Item1\":11,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 12\",\"Item3\":20000},{\"Item1\":12,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 13\",\"Item3\":21000},{\"Item1\":13,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 14\",\"Item3\":18000},{\"Item1\":14,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 15\",\"Item3\":30000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":22000},{\"Item1\":3,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 4\",\"Item3\":19000},{\"Item1\":4,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 5\",\"Item3\":21000},{\"Item1\":5,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 6\",\"Item3\":25000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 7\",\"Item3\":23000},{\"Item1\":7,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 8\",\"Item3\":20000}]},\"Fugitive\":{},\"Tailgater\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":8000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000},{\"Item1\":3,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":16000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u043B\u0443\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":16000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":16000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":14000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 2\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":19000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":9000},{\"Item1\":5,\"Item2\":\"\u0421 \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041B\u0438\u043F-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":8000},{\"Item1\":2,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":3000},{\"Item1\":0,\"Item2\":\"\u0427\u0435\u0440\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0421\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":17000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0430\u0434\u043A\u0440\u044B\u043B\u043A\u0438\",\"Item3\":8000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u043E\u0432\u044B\u0435 \u0430\u0440\u043A\u0438\",\"Item3\":10000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430\u0434 \u043A\u0440\u044B\u0448\u043E\u0439\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0440\u0430\u0448. \u0431\u0430\u043C\u043F\u0435\u0440 \u0438 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":17000},{\"Item1\":3,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0438 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":17600}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":17000},{\"Item1\":3,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0438 \u0434\u0438\u0444\u0444.\",\"Item3\":17600}]},\"Kuruma\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":20000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"GT Wing\",\"Item3\":25000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000}]},\"Sentinel\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":12000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":14000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":17000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041B\u0438\u043F-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0444\u0444. \u0438 \u043A\u0440\u044E\u043A\",\"Item3\":15000}]},\"F620\":{},\"Schwarzer\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":10000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":13000},{\"Item1\":2,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000},{\"Item1\":3,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":17000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 1\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 2\",\"Item3\":13000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0443\u0442\u0438\u043D\u044B\u0439 \u0445\u0432\u043E\u0441\u0442\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":17000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0435\u0448\u0435\u0442\u043A\u0430 \u0441 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C\",\"Item3\":7000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":11000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0415\u0432\u0440\u043E\u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u0438 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":13000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":13000}]},\"Exemplar\":{},\"Felon\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":9000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":11000}]},\"Schafter2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":17000},{\"Item1\":3,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":19000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 1\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0431\u0442\u0435\u043A\u0430\u0442\u0435\u043B\u0438\",\"Item3\":13000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 1\",\"Item3\":17000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 2\",\"Item3\":19000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041B\u0438\u043F-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":19000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":13000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":15000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":17000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":17000}]},\"Patriot\":{},\"Cavalcade\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0420\u0435\u0448\u0435\u0442\u043A\u0430 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u0430 \u0441 \u043F\u0440\u043E\u0440\u0435\u0437\u044F\u043C\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0435\u0442\u0447\u0435\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":11000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 Extreme Aero\",\"Item3\":13000}]},\"Landstalker\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":13000}]},\"Baller\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":13000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":14000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 1\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 2\",\"Item3\":17000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":17000}]},\"Seminole\":{},\"RancherXL\":{},\"Buffalo\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":15000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":16000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":14000}]},\"Gauntlet\":{},\"Phoenix\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":11000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u0440\u0430\u043B\u043E\u043C\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0422\u0440\u043E\u0439\u043D\u043E\u0439 \u0441\u0443\u043F\u0435\u0440\u0447\u0430\u0440\u0434\u0436\u0435\u0440\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0421\u0443\u043F\u0435\u0440\u0447\u0430\u0440\u0434\u0436\u0435\u0440\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0416\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u043C\u0430\u0441\u043A\u0430\",\"Item3\":9000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":13000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":17000}]},\"Radi\":{},\"Glendale\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u0434\u0432\u0443\u0441\u0442\u0432\u043E\u043B\u043A\u0430\",\"Item3\":13000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u043E\u043F. \u0446\u0432\u0435\u0442 \u043A\u0430\u043F\u043E\u0442\u0430\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u0414\u043E\u043F. \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0432 \u043F\u043E\u043B\u043E\u0441\u043A\u0443\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0414\u043E\u043F. \u043A\u0430\u043F\u043E\u0442 \u0432 \u043F\u043E\u043B\u043E\u0441\u043A\u0443\",\"Item3\":17000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0434\u043B\u044F \u043F\u043E\u0435\u0437\u0434\u043A\u0438\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0433\u0430\u0436\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000}]},\"Serrano\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":6000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000},{\"Item1\":2,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":8000},{\"Item1\":3,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":9000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":9000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0435\u0448\u0435\u0442\u043A\u0430 \u0441 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":11000}]},\"Zion\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":11000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":15000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":14000}]},\"Surge\":{\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":7000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":10800}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":9000}]},\"Stanier\":{},\"Stratum\":{},\"Tampa\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":7000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u0422\u0440\u043E\u0439\u043D\u043E\u0439 \u0441\u0443\u043F\u0435\u0440\u0447\u0430\u0440\u0434\u0436\u0435\u0440\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"\u0421\u0443\u043F\u0435\u0440\u0447\u0430\u0440\u0434\u0436\u0435\u0440\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0440\u044D\u0433-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0423\u0442\u0438\u043D\u044B\u0439 \u0445\u0432\u043E\u0441\u0442\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":12000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":10000},{\"Item1\":3,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":11000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":8000},{\"Item1\":2,\"Item2\":\"\u041F\u0435\u0440\u0435\u043A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":9000},{\"Item1\":3,\"Item2\":\"\u041F\u0435\u0440\u0435\u043A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":11000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0435 \u043E\u0442\u0440\u0430\u0436\u0430\u0442\u0435\u043B\u0438\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u0430\u044F \u0437\u0430\u0434\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C\",\"Item3\":11000}]},\"Prairie\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":7000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041E\u0431\u043B\u0435\u0433\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":8000},{\"Item1\":2,\"Item2\":\"\u041E\u0431\u043B\u0435\u0433\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442 (\u043A\u0430\u0440\u0431\u043E\u043D)\",\"Item3\":9000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043B\u0438\u0442\u0435\u0440 \u0441 \u043A\u0430\u043D\u0430\u0440\u0434\u0430\u043C\u0438\",\"Item3\":9000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0434\u0438\u0444\u0444. \u0438 \u043A\u0440\u044E\u043A\",\"Item3\":9000}]},\"XLS\":{},\"Gresley\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":8000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u0440\u0430\u043B\u043E\u043C\",\"Item3\":13000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":15000}]},\"Surano\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":13000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":13000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":12000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u0434. \u0434\u0438\u0444\u0444\u0443\u0437\u043E\u0440\",\"Item3\":17000}]},\"Tornado3\":{},\"Tornado4\":{},\"Emperor2\":{},\"Voodoo2\":{},\"Regina\":{},\"Ingot\":{},\"Picador\":{},\"Manana\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u0414\u0432\u0443\u0441\u0442\u0432\u043E\u043B\u043A\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0443\u0433\u043E\u0432\u044B\u0435 \u043E\u0433\u043D\u0438\",\"Item3\":11000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430 \u043B\u043E\u0431\u043E\u0432\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 \u0438 \u043D\u0438\u0436\u043D\u044F\u044F \u0433\u0443\u0431\u0430\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041E\u0442\u0434\u0435\u043B\u043A\u0430 \u0431\u0430\u043C\u043F\u0435\u0440\u0430\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0436\u043D\u044F\u044F \u0433\u0443\u0431\u0430\",\"Item3\":11000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0443\u0441\u044B\",\"Item3\":11000}]},\"Asea\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":5000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":3000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":5000},{\"Item1\":3,\"Item2\":\"\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0438 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438\",\"Item3\":7000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043B\u0435\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041B\u0435\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043F\u0440\u0430\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":3000},{\"Item1\":2,\"Item2\":\"\u041F\u0440\u0430\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":3000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041A\u0443\u0437\u043E\u0432 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":5000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043A\u0443\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":3,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 \u0432 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430\u0445\",\"Item3\":5000}]},\"Elegy\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":5,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":10000},{\"Item1\":6,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":15000},{\"Item1\":7,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":17000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":10000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":12000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0418\u0437\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 1\",\"Item3\":10000},{\"Item1\":3,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C 2\",\"Item3\":13000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":6000},{\"Item1\":2,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 3\",\"Item3\":7000},{\"Item1\":3,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 4\",\"Item3\":8000},{\"Item1\":4,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 5\",\"Item3\":9000},{\"Item1\":5,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430 1\",\"Item3\":15000},{\"Item1\":9,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u0434\u043E\u043F.\u0446\u0432\u0435\u0442\u0430 2\",\"Item3\":25000},{\"Item1\":19,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":35000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u0430 1\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u0430 2\",\"Item3\":6000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 1\",\"Item3\":5000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 2\",\"Item3\":8000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0411\u0435\u0437 \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u0430\u044F \u0431\u0435\u043B\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430\",\"Item3\":18000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u0430\u044F \u0447\u0435\u0440\u043D\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430\",\"Item3\":20000},{\"Item1\":2,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 \u0420\u0430\u043A\u0435\u0442\u0430\",\"Item3\":20000},{\"Item1\":3,\"Item2\":\"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430 Luxe\",\"Item3\":30000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0418\u0437\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":15000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 1\",\"Item3\":12000},{\"Item1\":2,\"Item2\":\"\u0411\u0430\u043C\u043F\u0435\u0440 \u043E\u0441\u043D.\u0446\u0432\u0435\u0442\u0430\",\"Item3\":13000},{\"Item1\":4,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 2\",\"Item3\":17000},{\"Item1\":5,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 3\",\"Item3\":20000}]},\"Baller2\":{},\"Cavalcade2\":{},\"Rocoto\":{},\"Dubsta\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A\u0430\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u043F\u0430\u0441\u043A\u043E\u0439\",\"Item3\":13000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0427\u0435\u0440\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":10000},{\"Item1\":2,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":11000}],\"5\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043B\u0435\u0432\u043E\u0435 \u043A\u0440\u044B\u043B\u043E\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0428\u043D\u043E\u0440\u043A\u0435\u043B\u044C\",\"Item3\":11000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0441 \u043F\u0440\u043E\u0436\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u0427\u0435\u0440\u043D\u044B\u0439 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043D\u0430 \u043A\u0440\u044B\u0448\u0435\",\"Item3\":11000},{\"Item1\":3,\"Item2\":\"\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u0441 \u043F\u0440\u043E\u0436\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438\",\"Item3\":13000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0434\u0443\u0433\u043E\u0439\",\"Item3\":11000},{\"Item1\":2,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0444\u0430\u0440\u0430\u043C\u0438\",\"Item3\":13000},{\"Item1\":3,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0434\u0443\u0433\u043E\u0439 \u0438 \u0444\u0430\u0440\u044B\",\"Item3\":15000},{\"Item1\":4,\"Item2\":\"\u0427\u0435\u0440\u043D\u044B\u0439 \u043A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A\",\"Item3\":13000},{\"Item1\":5,\"Item2\":\"\u041A\u0435\u043D\u0433\u0443\u0440\u044F\u0442\u043D\u0438\u043A \u0441 \u0434\u0443\u0433\u043E\u0439 \u0438 \u0444\u044B\u0440\u044B\",\"Item3\":15000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u0427\u0435\u0440\u043D\u044B\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]},\"Oracle2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":11000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":13000}]},\"Oracle\":{},\"Ruiner\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":6000},{\"Item1\":3,\"Item2\":\"\u0413\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Shakotan\",\"Item3\":7000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":15000},{\"Item1\":2,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0438 \u043F\u0440\u043E\u0442\u0435\u043A\u0442\u043E\u0440\u044B \u0444\u0430\u0440\",\"Item3\":6000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":6000},{\"Item1\":2,\"Item2\":\"\u0414\u0440\u044D\u0433-\u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":7000},{\"Item1\":3,\"Item2\":\"GT Wing\",\"Item3\":9000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0438 \u043E\u0445\u043B\u0430\u0434\u0438\u0442\u0435\u043B\u044C \u043C\u0430\u0441\u043B\u0430\",\"Item3\":7000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"Minivan\":{},\"Blista2\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C Tuner\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":6000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":6000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":6000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430 \u043B\u043E\u0431\u043E\u0432\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E\",\"Item3\":3000}]},\"Stalion\":{\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0431\u0440\u0438\u043E\",\"Item3\":7000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":9000}]},\"Asterope\":{},\"Washington\":{},\"Premier\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 Tuner\",\"Item3\":7000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":7000}]},\"Intruder\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \",\"Item3\":5000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0411\u043E\u043A\u043E\u0432\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438 Bippu\",\"Item3\":3000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041D\u0438\u0437\u043A\u0438\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":5000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"Dilettante\":{},\"Voodoo\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0441\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":3000},{\"Item1\":1,\"Item2\":\"\u0422\u043E\u043D\u043A\u0430\u044F \u0445\u0440\u043E\u043E\u043C. \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":2,\"Item2\":\"\u0417\u0443\u0431\u0430\u0441\u0442\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u0430\",\"Item3\":6000}],\"7\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0430\u0441\u043A\u0440\u0430\u0441\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0435\u043B\u0435\u043D\u044B\u0435 \u043F\u043E\u043B\u043E\u0441\u044B\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u0421\u0438\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0441\u044B\",\"Item3\":7000},{\"Item1\":2,\"Item2\":\"\u0417\u0435\u043B\u0435\u043D\u044B\u0435 \u043F\u043E\u043B\u043E\u0441\u044B \u0441 \u0444\u0440\u0435\u0441\u043A\u043E\u0439\",\"Item3\":8000},{\"Item1\":3,\"Item2\":\"\u0421\u0438\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0441\u044B \u0441 \u0444\u0440\u0435\u0441\u043A\u043E\u0439\",\"Item3\":8000},{\"Item1\":4,\"Item2\":\"\u0418\u0441\u043A\u0443\u0441\u043D\u043E-\u0441\u0438\u043D\u0438\u0439\",\"Item3\":11000},{\"Item1\":5,\"Item2\":\"\u0418\u0441\u043A\u0443\u0441\u043D\u043E-\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439\",\"Item3\":11000},{\"Item1\":6,\"Item2\":\"\u0417\u0430\u043F\u0443\u0442\u0430\u043D\u043D\u0430\u044F \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F\",\"Item3\":2000},{\"Item1\":7,\"Item2\":\"\u0424\u043E\u0440\u043C\u044B\",\"Item3\":10000},{\"Item1\":8,\"Item2\":\"\u0421\u0430\u043A\u043A\u0443\u0431\u0443\u0441\",\"Item3\":3000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041E\u0431\u0442\u0435\u043A\u0430\u0435\u043C\u044B\u0439 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439\",\"Item3\":5000},{\"Item1\":1,\"Item2\":\"\u041C\u043E\u0449\u043D\u044B\u0439 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439\",\"Item3\":7000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000}]},\"FQ2\":{},\"Dominator\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C \",\"Item3\":9000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":9000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":11000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u043F\u043E\u0439\u043B\u0435\u0440 \u0443\u0442\u0438\u043D\u044B\u0439 \u0445\u0432\u043E\u0441\u0442\",\"Item3\":11000},{\"Item1\":1,\"Item2\":\"\u041F\u043E\u0434\u043D\u044F\u0442\u044B\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440\",\"Item3\":13000}],\"4\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u0430\u044F \u0440\u0435\u0448\u0435\u0442\u043A\u0430 \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u0430\",\"Item3\":11000}],\"6\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u0434\u043D\u0438\u0439 \u0434\u0435\u0444\u043B\u0435\u043A\u0442\u043E\u0440\",\"Item3\":7000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0440\u044B\u0448\u0430\",\"Item3\":9000},{\"Item1\":2,\"Item2\":\"\u0414\u0435\u0444\u043B\u0435\u043A\u0442\u043E\u0440 \u0438 \u043A\u0440\u044B\u0448\u0430 \u043A\u0430\u0440\u0431\u043E\u043D\",\"Item3\":11000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":11000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":11000}]},\"Jackal\":{\"0\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0421\u0434\u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C\",\"Item3\":9000}],\"1\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0440\u043E\u0433\u0438\",\"Item3\":11000}],\"2\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u0437\u0430\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u041A\u0430\u043F\u043E\u0442 \u0441 \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430\",\"Item3\":11000}],\"3\":[{\"Item1\":-1,\"Item2\":\"\u041D\u0435\u0442\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 1\",\"Item3\":9000},{\"Item1\":1,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0441\u043F\u043E\u0439\u043B\u0435\u0440 2\",\"Item3\":13000}],\"8\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0435\u0440. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\",\"Item3\":11000}],\"9\":[{\"Item1\":-1,\"Item2\":\"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0437\u0430\u0434. \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":5000},{\"Item1\":0,\"Item2\":\"\u0417\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440\",\"Item3\":13000}]}}");
global.tuningWheels = JSON.parse("{\"0\":{\"-1\":3000,\"0\":27600,\"1\":39000,\"2\":42000,\"3\":39600,\"4\":110000,\"5\":42000,\"6\":41400,\"7\":36000,\"8\":36300,\"9\":39000,\"10\":45900,\"11\":36900,\"12\":32700,\"13\":39000,\"14\":33600,\"15\":39600,\"16\":28200,\"17\":4500,\"18\":29700,\"19\":4500,\"20\":39600,\"21\":42000,\"22\":49800,\"23\":36000,\"24\":39000},\"1\":{\"-1\":3000,\"0\":3000,\"1\":15000,\"2\":4950,\"3\":18000,\"4\":19500,\"5\":16800,\"6\":17700,\"7\":21000,\"8\":18000,\"9\":21000,\"10\":18000,\"11\":4950,\"12\":15000,\"13\":18000,\"14\":15000,\"15\":18000,\"16\":24000,\"17\":21000},\"2\":{\"-1\":3000,\"0\":18300,\"1\":19500,\"2\":18300,\"3\":20700,\"4\":21000,\"5\":2160,\"6\":22500,\"7\":24000,\"8\":25500,\"9\":25500,\"10\":4500,\"11\":18000,\"12\":18300,\"13\":21000,\"14\":24000},\"3\":{\"-1\":3000,\"0\":18000,\"1\":24000,\"2\":27000,\"3\":30300,\"4\":17100,\"5\":20100,\"6\":26100,\"7\":2160,\"8\":26400,\"9\":30000},\"4\":{\"-1\":3000,\"0\":18000,\"1\":22500,\"2\":18900,\"3\":23700,\"4\":24000,\"5\":27600,\"6\":18900,\"7\":15600,\"8\":26700,\"9\":22200,\"10\":18600,\"11\":19800,\"12\":24000,\"13\":21000,\"14\":24900,\"15\":18600,\"16\":110000},\"5\":{\"-1\":3000,\"0\":2160,\"1\":24000,\"2\":24600,\"3\":30600,\"4\":27300,\"5\":26100,\"6\":27600,\"7\":24300,\"8\":27600,\"9\":22500,\"10\":30900,\"11\":24300,\"12\":27600,\"13\":30000,\"14\":29700,\"15\":24600,\"16\":27300,\"17\":28500,\"18\":24600,\"19\":27900,\"20\":28800,\"21\":29100,\"22\":24600,\"23\":21900},\"7\":{\"-1\":3000,\"0\":36000,\"1\":21000,\"2\":246000,\"3\":2160,\"4\":24000,\"5\":26400,\"6\":36000,\"7\":27000,\"8\":30600,\"9\":30000,\"10\":110000,\"11\":30300,\"12\":36300,\"13\":30300,\"14\":39300,\"15\":36030,\"16\":36300,\"17\":30300,\"18\":110000,\"19\":30300}}");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ })
/******/ ]);
});