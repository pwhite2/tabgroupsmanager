// TODO:  Ongoing WIP with the agreement text and module interfaces
// Mostly just copying and pasting my documentation, so pending expansion
// Note that it probably gets totally illogical if you read too far;
// this is because I'm just working the stuff out as I write!
// Also, don't be put off by the agreement.  This is to cover our asses and
// to give us time to resarch a new license, which probably won't start until
// the full resolution of compliance with Axel's own license.
// John 201309130805 -4
// ###
/*
This module comprises a collection of hooks
which resolve the compatibility of TabGroups
Manager 2011.11.28.1 and Firefox 19+.  As of
September 13, 2013, the authors distribute
the code with a provisionary end-user agreement:

This agreement is entered into by and between
TGM Compatibility Team (hereinafter "The Team")
and The End-user.

WHEREAS, "The Module" is defined as the
JavaScript code herein contained, and

WHEREAS, "TGM" is defined as the TabGroups
Manager software package containing The Module,

NOW, THEREFORE, BE IT RESOLVED that in
consideration of mutual undertakings herein
contained, The Parties agree that The End-user
hereto accepts The Licensing Terms:

The Module is copyright (c) 2013 The Team. The
right to Read-only Access is hereby granted to
The End-user by The Team.  The right to Limited
Use is hereby granted to The End-user by The
Team, upon acceptance of the subsequent proviso
by The End-user.  Until further notice by The
Team, all other rights are reserved.

BE IT FURTHER RESOLVED that in consideration
of mutual undertakings herein contained, The
Parties agree that The End-user hereto accepts
The Limited Use Disclaimer:

Limited Use of TGM and The Module by The
End-user constitutes provision of The Module
"AS-IS," without warranty of any kind, express
or implied, including but not limited to the
warranties of merchantability, fitness for
particular purposes, and noninfringement.
In no event shall The Team accept liability
for claims, damages, or other incidents,
whether in an action of contract, tort, or
otherwise, arising from, out of or in
connection with The Module or the use or
dealings thereof.

Said Parties enter This Agreement immediately.

https://code.google.com/p/tabgroupsmanager/

Version 102.1
*/
/**
 * Future patches and related procedures
 *
 * @module TabGroupsManagerFuture
 * @requires TabGroupsManagerJsm
 */
var EXPORTED_SYMBOLS =
[
    'TabGroupsManagerFuture.HookProvider',
    'TabGroupsManagerFuture.Test'
];
/**
 * @namespace TabGroupsManagerFuture
 * @namespace TabGroupsManagerFuture.HookProvider
 * @namespace TabGroupsManagerFuture.HookProvider.Case
 * @namespace TabGroupsManagerFuture.Test
 * @namespace TabGroupsManagerFuture.Test.Debug
 * @namespace TabGroupsManagerFuture.Test.Unit
 * @namespace TabGroupsManagerFuture.Test.Fake
 * @namespace TabGroupsManagerFuture.Util
 */
var TabGroupsManagerFuture = {};
var F.HookProvider =
{
    PrefControllerFactory = {};
    PrefController = {};
    BrowserStoreHandler = {};
};
var F.HookProvider.Case =
{
    // Milestone 103.0
    C_0004:{},
    C_0005:{},
    C_0007:{},
    C_0016:{},
    C_0017:{},
    C_0019:{},
    // Milestone 104.0
    C_0006:{},
    C_0008:{},
    C_0009:{},
    C_0011:{},
    C_0013:{},
    C_0014:{}
};
var F.Test = {};
var F.Test.Debug = {};
var F.Test.Unit = {};
var F.Test.Fake = {};
var F.Util =
{
    // ...
};
// For the purpose of readability within this module
var F = TabGroupsManagerFuture;
/**
 * Controller class with an interface for providing hooks
 * <p>USAGE:  new hController = F.HookProvider.Controller();</p>
 * @class Controller
 * @namespace HookProvider
 * @constructor
 */
var HookProvider.Controller = function()
{
    this.__init();
}
// Static identifier
HookProvider.Controller.NAME = 'Controller';
// The prototype
F.HookProvider.Controller.prototype =
{
    // Internal cache for performance
    cache:
    {
        // ...
    },
    /**
     * State for the object instance
     * @property state
     * @private
     * @type Object
     */
    state:
    {
        BROWSER_VERSION = '',
        BROWSER_PREFSTORE = ''
        // ...
    },
    /**
     * Constructor for Controller instance
     *
     * @method init
     */
    __init:function()
    {
        /**
         * Register the browser version
         *
         * @method __registerBrowserVersion
         * @private
         */
        var __registerBrowserVersion = function()
        {
            // Call some Util method
            // ...
            this.state.BROWSER_VERSION = //...
        };
        /**
         * Register the pref store
         *
         * @method __registerPrefStore
         * @private
         */
        var __registerPrefStore = function()
        {
            // Call some Util method
            // ...
            this.state.BROWSER_PREFSTORE = //...
        };
        /**
         * Prepare and create the case
         *
         * @method __caseFactory
         * @return {Object} The configured case instance
         */
        var __caseFactory = function(sCaseName)
        {
            return this.sCaseName(this.state.BROWSER_VERSION);
            // ...
        };
        var _getCaseInstance = function(sCaseName)
        {
            __caseFactory(sCaseName);
            // ...
        };
    },
    /**
     * Wrapper for invoking methods
     *
     * @method invoke
     * @param sMethodName {String} The name of the method to invoke
     * @param oMethodArgs {String} The method arguments as an object
     */
    this.invoke:function(sMethodName,oMethodArgs)
    {
        var sM = '_' + sMethodName;
        var sS = this.toString();
        if(typeof(this.sM === 'undefined' || this.sM.indexOf('_') == 0)
        {
            throw sS + ':  Invalid method name';
        }
        try
        {
            return sM.apply(this,oMethodArgs);
        }
        catch(e)
        {
            e.message = sS + ': ' + e.message;
            TabGroupsManagerJsm.displayError.alertErrorIfDebug(e);
        }
    }
    // ...
    // Slowly getting this together, John 201309131815 -4
    // Will look something like F.HookProvider.Controller.invoke('getCaseInstance','C_0016');
    // And then we can inject our hooks
};
/**
 * Base class with an interface for standardized cases
 *
 * @class Case.C
 * @namespace Case
 * @constructor
 */
var F.HookProvider.Class.C = function(sBrowserVersion)
{
}
// Static identifier
F.HookProvider.Class.C.NAME = 'C';
// The prototype
F.HookProvider.Class.C.prototype =
{
    this.init(
}
/**
 * @class Case.C_0016
 * @see https://code.google.com/p/tabgroupsmanager/issues/detail?id=16
 */
F.HookProvider.Case.C_0016 =
{
    // ...
};

/**
 * @class PrefControllerFactory
 */
F.Util.PrefControllerFactory = function()
{
    this.state = {};
    this.state.aT =
    [
        'BROWSER_STORE'
        // And so on with the types of handlers
    ];
};
F.Util.PrefControllerFactory.prototype =
{
    getProviderHandler:function(sHandlerType)
    {
        var oP; // The prefs handler object
        var sT = sHandlerType.toUpperCase(); // The prefs handler type
        if(this.state.aT.indexOf(sT) == -1)
        {
            throw this.toString + ':  Invalid handler type';
        }
        switch(sT)
        {
            case 'BROWSER_STORE':
                oP = F.Util.BrowserStoreHandler
                (
                    F.Util._MozPrefDriver;
                );
            // And so on...
        }
        return F.Util.PrefController(oP);
    }
};
/**
 * @class PrefController
 */
F.Util.PrefController = function(sHandlerType)
{
    this.state = {};
    this.setHandlerType(sHandlerType);

F.Util.PrefController.prototype =
{
};

// This isn't done, but it will be something like a factory to set up the
// the controller with the correct handler, which will be an abstraction for
// the actual driver, e.g. maybe in 50 billion years we'll be ready to take
// this cross browser, or maybe Mozilla just blows up the core!


// ###
// Coherent code stops somewhere around here!  :D


var oP = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService);
var oB = oP.getBranch("extensions.tabgroupsmanager.");
oB.QueryInterface(Ci.nsIPrefBranch2);

this.prefBranch.prefHasUserValue("groupBarBelow")){
this.prefBranch.setIntPref("groupBarPosition",2);
}




    /**
    * @method getCallerAlert
    * @return {Object} The alert object with caller name
    */
    getCallerAlert:function(sCallerName)
    {
        TabGroupsManagerJsm.displayError.alert(sCallerName);
    }
    /**
    * @method _whoCalled
    * @return {String} The caller name
    */
    var _whocalled = function ()
    {
        var s = "Call from " + arguments.callee.caller.name;
        if(s) return s;

    }




// Some POCs we worked out in ##javascript

var obj = {
    someFunc:  function(){
        whoCalled();
    }
}

function whoCalled() {
    try{
        throw new Error;
    } catch(e) {
        console.log(e.stack);
    }
}

obj.someFunc();
###

var obj = {
    someFunc: whoCalled(function(){
        obj.otherFunc(5);
    }),
    otherFunc: whoCalled(function(a) {
        console.log(a);
    })
}

function whoCalled(f) {
    return function() {
        log('called ' + f.toString());
        try {
            var ret = f.apply(this, arguments);
            return ret;
        } catch (e) {
             throw e;
        }
    };
}

function log(msg) {
    document.body.appendChild(document.createTextNode(msg));
    document.body.appendChild(document.createElement('br'))
}

obj.someFunc();
###



var obj = {
    someFunc: whoCalled(";obj.someFunc";, function(){
        return 3 * obj.otherFunc(5);
    }),
    otherFunc: whoCalled(";obj.otherFunc";, function(a) {
        console.log(a);
        return 2 * a;
    })
}

var callStack = [];
function whoCalled(name, f) {
    if (typeof name === ";function";) {
        f = name;
        name = String(f);
    }
    return function() {
        var caller = callStack[callStack.length - 1];
        if (caller) {
            log(caller.name + "; called "; + name);
        } else {
            log(";outside code called "; + name);
        }
        callStack.push({name: name, f: f});
        try {
            var ret = f.apply(this, arguments);
            callStack.pop();
            log(";returned "; + String(ret));
            return ret;
        } catch (e) {
            callStack.pop();
            log(";error: "; + String(e));
            throw e;
        }
    };
}

function log(msg) {
    var div = document.createElement(";div";);
    div.style.left = (callStack.length * 20) + ";px";;
    div.appendChild(document.createTextNode(msg));
    document.body.appendChild(div)
}

obj.someFunc();
###