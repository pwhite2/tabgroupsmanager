# Developers Guide For Debugging #


**Recommended Computer Hardware and Software**
  * Windows or Linux 64 bits.
  * 8GB or 16GB of DDR3 RAM.


**Overview**

  1. Install VMware with Windows or Linux and install Firefox.
  1. Setup TabGroups Manager Source Code.
  1. Configure Firefox parameters in VMware for Developing Extensions.
  1. Install TabGroupsManager Debug version.
  1. Editing TabGroupsManager Source Code.
  1. Debugging TabGroupsManager Source Code.
  1. Other Firefox Javascript Debuggers for Extensions.
  1. Similar Addons.
  1. Usefull Resources Firefox Developing and parameters settings

  * Steps (7.) and up adds extended information for advanced development and are not necessary to read.

<br />
**DETAILED SETUP**

  * This guide will detail all the necessary steps to debug any Firefox extension, mainly written for TabGroupsManager. It could take about one hour so far to set a developer enviroment and begin to debug the code, a lot of steps are really easy to understand and some of them are optional, so dont worry if you see too much reading. Its worth reading but feel free to directly jump to the step 6 if you already know how to modify the source code of the extension.
<br />
**1. Setup a VMware Image, Install Updates and Needed Software**

  * Disable sound and disk A: in your VMware, and set it to 2-3GB of RAM. However its an optional step its but better for perfomance and testing purposes since your main Firefox wont be changed.
  * Update your System with lastest updates and lastest Firefox version. Dont let worms enter your VMware, update it. Install an Antivirus, AntiMalware and Improvements: [Nod32, Kaspersky, Avira, Avast, Bitdefender, Dr Web..](Eset.md) | [Malwarebytes, Spybot SD, Sandboxie] | [XpAntiSpy, use classic Windows theme..]
  * Optional step, install other Internet web explorers: Opera and Chrome, so you can still search or download something if you are debugging in Firefox.
  * I would highly recommend to install lastest updates to Firefox: Flash, Shockwave Flash, Adobe, Java, Memory Fox. Installing the lastest version of software is a good way of testing that everything will be fine in other computers with the lastest software.
  * Install lastest stable version of TabGroups Manager.
  * Install Subversion or Git for managing the source code changes. TabGroups Manager Google Project is managed through Subversion (SVN) and there is a version for Windows which works great: TortoiseSVN.
  * With TortoiseSVN you will never need to write any batch line commands. You will only manage folders, create a folder and Check In or CheckOut any files with mouse right click. TortoiseSVN also comes with a merge and check for differences tools. Instead of the default ones I have found "Beyond Compare" or "WinMerge" to be better and easier, but use the one you like most. In Linux there are probably good alternatives to TortoiseSVN.
<br />
**2. Setup TabGroups Manager Source Code**

  * Two versions of the project can be usually found in the source code repository folder:
    1. One main branch (trunk) with the lastest stable version source code.
    1. A second branch with the debug version of the source code for developers, which usually includes a lot of logs, warning, alerts, exceptions, comments, additional debug windows..
  * In a Team project there could be more branchs of source code, like a branch for new functionalities, but I wont extend much more into it.

  * Lets look how the source code of TabGroups Manager Project is divided in the tree folder:
http://code.google.com/p/tabgroupsmanager/source/browse/product
  * In TabGroups Manager we will find two branchs:
    1. The main branch, the trunk with the lastest stable code, located here: http://code.google.com/p/tabgroupsmanager/source/browse/product/trunk
    1. The debug branch for developers: http://code.google.com/p/tabgroupsmanager/source/browse/product/branch/debug

  * Generate password to Commit changes (Check out). If you are part of the developers group of the project, you may submit code changes at a later time, and your information access can be localted here:
    * http://code.google.com/p/tabgroupsmanager/source/checkout
    * https://code.google.com/hosting/settings
    * http://devwatch.wordpress.com/2008/10/25/how-to-access-google-code-svn/

  * You can download those branches individually, but the best way is to download the full svn repository, which contains both branches, wikipedia changes, and other usefull files. Check out the entire "TabGroups Manager svn google project" to one of our folders into our VMware:
    1. Create the folder c:\TabGroupsManager. Right Click into the folder and select "SVN Checkout..."
    1. When asked, input the following address:
      * https://tabgroupsmanager.googlecode.com/svn
    1. If it asks for a name and password, input your gmail address associated with the project and the password generated in the step above.

  * We have already downloaded the source code into our folder, and we will be able to update and submit any changes we made to any files of the project. Right clicking in the folder `c:\TabGroupsManager\tabgroupsmanager\` and clicking in `SVN Commit` or `CheckIn` option, will automatically open the `Tortoise SVN commit` dialog, and we will be able to review and send the changed files to the google project. (Submitting file changes will be only allowed for developers of the project). Clicking in `SVN Update` will update the project folder tree to the lastest version (`HEAD`) from the Google project folder (made by you or made by other project member).
<br />
**3. Configure Firefox parameters in VMware for Developing Extensions**

  * In the address bar of Firefox, type about:config and click enter. Search for the following parameters and set the following values:
`devtools.chrome.enabled` to true
`devtools.debugger.remote-enabled` to true

  * Install the extension for Firefox which automatically sets most parameters for developing and debugging:
    * https://addons.mozilla.org/es/firefox/addon/developer-profile

  * For an extended information about Firefox Developing and setting parameters please refer to the point (9.) below for a list of links with detailed information.

<br />
**4. Install TabGroupsManager Debug version**

  * Now that we have checked out the entire TabGroupsManager source code in a folder and setup Firefox for Developing, we should install/copy the Debug version of TabGroupsManager in the firefox extension folder of TabGroupsManager. Close all Firefox windows and make sure its not opened. Since we are using a VMware, we dont have to worry about loosing any file.

  * First we must go to the Firefox extension folder:
    * _C:\Documents and Settings\AdminName\Datos de programa\Mozilla\Firefox\Profiles\co1toabd.default\extensions\_
    * _/home/YOUR\_USER/.mozilla/firefox/co1toabd.default/extensions_     (LINUX)

  * Next step is to locate our TabGroupsManager extension which will be a .xpi file, in example: _{ca111111-9e0a-4756-9077-19d6f3e64ea8}.xpi_. XPI files are .zip compressed files, open each .xpi file with WinRAR until you guess which is the right one for TabGroupsManager. You will see some tabgroupsmanager names inside those folders, for example in folder: _default\preferences_ you will find the file _tabgroupsmanager.js_

  * Now that you have located the .xpi name of TabGroupsManager, rename that file to an useless file: _.xpi_ to _.xpiBAK_

  * Create a folder with the same name than the original file you have renamed, without the extension. Example, create folder:
    * _{ca111111-9e0a-4756-9077-19d6f3e64ea8}_

  * Go to the svn folder we have downloaded before and copy all the files inside debug: _c:\TabGroupsManager\tabgroupsmanager\branches\debug_ to our last created folder: _`C:\Documents and Settings\AdminName\Datos de programa\Mozilla\Firefox\Profiles\co1toabd.default\extensions\{ca111111-9e0a-4756-9077-19d6f3e64ea8}`_ . Now Firefox will read and start with all the files inside that folder and we can make changes to those files to see if it fixes something.

  * Important information:
    * _AdminName_ is the name of your current user administrator, the installation folder could change if you are using other windows version.
    * _co1toabd.default_ is the name of your firefox profile, which will be different.
    * _{ca111111-9e0a-4756-9077-19d6f3e64ea8}_ is the name of the extension of TabGroupsManager, and it will be probably different in your computer.
    * If you dont have any subfolder inside the _\extension\_ folder, you must uncompress all .xpi files with Winrar, and search for the right TabGroupsManager subfolder.
<br />
**5. Editing TabGroupsManager Source Code**

  * Now that we have overwritten all TabGroupsManager files with the debug version, we can start editing the code having in mind the following information.

  * The following .jar file: `{ca111111-9e0a-4756-9077-19d6f3e64ea8}\chrome\tabgroupsmanager.jar` is another compressed file, and has been uncompressed in the same folder, generating the following folders:
    * `{ca526f8b-9e0a-4756-9077-19d6f3e64ea8}\chrome\content`, `{ca526f8b-9e0a-4756-9077-19d6f3e64ea8}\chrome\local`, `{ca526f8b-9e0a-4756-9077-19d6f3e64ea8}\chrome\skin`

  * **Firefox will not read those subfolders for new changes, it will only read the file tabgroupsmanager.jar, that means each time we change any file inside those folders, we must copy/drag and drop those files again inside \chrome\tabgroupsmanager.jar file with WinRar and reload Firefox or even restart Firefox. Since _chrome\tabgroupsmanager.jar_ can be sometimes locked by Firefox, I would recommend to close Firefox, open _chrome\tabgroupsmanager.jar_ with Winrar, drag and drop the changed files in the right folders and reopen Firefox.**

  * In TabGroupsManager we will have to repeat step 5. a lot of times in order to make changes to javascript core files of TabGroups Manager.
<br />
**6. Debugging TabGroupsManager Source Code**

  * Its recommended to debug the source code of TabGroupsManager using the **Debug branch**. You can perfectly use and debug the non debug branch of TabGroupsManager. Please refer to point (2.), (3.) and (4.) in order to download and install the debug branch of TabGroupsManager.

  * **TabGroupsManager debug version**, has a default value already set to true in order to debug the code and get more warning and error messages. This value will help to debug the code and output a lot more information that is not available in the normal non debug version.
    * `\defaults\preferences\tabgroupsmanager.js -- pref("extensions.tabgroupsmanager.debug",true);`

  * If we have successfully completed the above steps, we can start Firefox and create 2 TabGroupsManager groups for testing.

  * One of the best debuggers is **VenkMan Javascript Debugger**. A bit hard at the beggining but easier at the end. Please download and install the extension and restart Firefox: https://addons.mozilla.org/en-US/firefox/addon/javascript-debugger

  * Configuring VenkMan: Add the Menu Bar to Firefox. Now open VenkMan: _Tools, Javascript Debugger_. In VenkMan, uncheck the option in the toolbar: Debug > Exclude Browser Files." Now close all Firefoxs and Venkman. Reopen them again and begin setting some breakpoints.

  * Remember that you can Import/Export breakpoints in Venkman. We have already set some breakpoints for TabGroups Manager for you, and saved them to a file. Check the debug version folder for those breakpoints files saved for each issue: _\tabgroupsmanager\product\branch\debug\breakpoints\_venkman_
    * https://developer.mozilla.org/en-US/docs/Extension_Frequently_Asked_Questions

  * At the left you will see the list of files and scripts (.xml, .jsm, .js...), variables and breakpoints.  (.xml, .jsm, .js...). Select TabGroupsManager.js file and set a breakpoint in the code by double clicking in the left blank space, near the the line number. For testing, set it in the line 5814:
    * `Breakpoint -- var sfunc = arguments.callee.caller.toString(); //works`
  * Now Firefox will stop in that breakpoint and you will be able to debug the code and variable values with F5(Run), F12(Go Next Line) and F11(Go Inside).

  * While debugging with Venkman you will notice some issues. You will need to press F12 two times to jump from one line to the next line, and it will not stop in the next line, instead it will run till the end of the code. The solution is to set a Breakpoint in all lines of the function you are debugging. If Venkman seems to be hanged, press the keys to continue with debugging: F12 two times or F5, the debugger is not hanged and its still running.

  * Things to know:
    1. Remember to export and save your breakpoints, so you dont loose all your work!!
    1. You need to set all developer parameters in Firefox to debug scripts. Also you need to uncheck: Debug > Exclude Browser Files in VenkMan.
    1. TabGroupsManager will save a log file with the callstack in c:\tabsgm.txt. Delete that file when you need. Change the log if you are under Linux or it will not work.
    1. Adding the following code in a line will stop the execution, like if we set a breakpoint in that line:
      * `debugger;`
    1. Could not test it, but adding console.log(variable); will output the value of the variable in the debugger.
      * `console.log(variable);`
      * `console.log("variable %o", variable);`
      * `Firefox.console.log(); //test` with this option if the above doesnt work.
    1. Dont forget to remove or comment those lines with debugger or console.log when adding the new code to the main /trunk stable version. Its only for debugging purposes and should never be in the final release.
    1. Settings debug parameters in Firefox will break Firebug, but dont worry, we wont need it for debugging our javascript extension.
<br />

**7. Other Firefox Javascript Debuggers for Extensions**
  * Mozilla Firefox Addon Builder:
    * http://www.ibm.com/developerworks/library/os-extendfirefox

  * VenkMan Javascript Debugger:
    * Although at first glance it might seem that Venkman cannot debug extensions, doing so is in fact fully supported; it's just disabled by default. To debug your extension with Venkman (XUL files and their attached JS files), you'll have to load browser and extension files into Venkman by unchecking Debug > Exclude Browser Files.
    * https://addons.mozilla.org/en-US/firefox/addon/javascript-debugger
    * https://developer.mozilla.org/en-US/docs/Venkman_Introduction#Loading_Scripts_into_the_Debugger

  * Another option could be Firefox Debugger: Firefox Tools, Web Developers, open Browser Debugger. A new window will ask to accept incoming remote connection to Firefox, click on Yes. For more information about Debugging with Firefox Browser Debugger, please check the following links:
    * http://paulrouget.com/e/devtoolsnext
    * https://hacks.mozilla.org/2013/07/new-features-in-firefox-developer-tools-episode-24/

  * NetBeans Debugger for Firefox Extensions:
    * https://secure.teesoft.info/hg/FoxbeansSuite/summary

  * Eclipse Debugger for Firefox Extensions:
    * http://fireclipse.svn.sourceforge.net/viewvc/fireclipse/trunk/FireclipseDocumentation/

  * KDevelop Debugger for Firefox Extensions:
    * http://www.firebreath.org/display/documentation/KDevelop4

  * Chromebug:
    * I have not been able to debug javascript with Chromebug. Seems it worked with old versions of Firefox.

  * Other Tools for Debugging:
    * http://fireunit.org
    * http://www.sitepoint.com/debug-php-firebug-firephp
<br />
**8. Similar Addons**

  * http://code.google.com/p/tabgroupsmanager/wiki/Developer_Resources
  * The following addons could help to understand and develop some functionalities.
    * https://addons.mozilla.org/es/firefox/addon/tab-mix-plus
<br />
**9. Usefull Resources Firefox Developing and parameters settings**

  * https://developer.mozilla.org/en-US/docs/Debugging_JavaScript
  * https://developer.mozilla.org/en-US/docs/Setting_up_extension_development_environment
  * https://addons.mozilla.org/en-US/firefox/addon/developer-profile
  * https://developer.mozilla.org/en-US/docs/Building_an_Extension#Debugging_Extensions
  * http://www.brianbondy.com/mozilla/cheatsheet/
  * http://campd.wordpress.com/2012/11/12/firefox-and-addon-developers-should-set-devtools-chrome-enabled/
  * http://davidthomasbernal.com/blog/2011/04/09/debugging-firefox-extensions-the-easy-way/
  * http://www.timrosenblatt.com/blog/2008/07/23/firefox-extension-debugging/
  * http://stackoverflow.com/questions/1077719/fastest-way-to-debug-firefox-addons-during-development
  * http://stackoverflow.com/questions/6855359/how-to-debug-firefox-extension
  * http://stackoverflow.com/questions/4392/best-debugging-tools-for-javascript-xulrunner-development