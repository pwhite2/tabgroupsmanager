# Making TabGroups Manager work, and "known issues" #

Always use the latest TGM on the project downloads page and check the release notes (link above). There are not many issues, and you won't damage Firefox by using TGM if it doesn't work. The main risk is that tabs can be "lost" in some cases, so read the notes to find out more.

  * Check your version of Firefox at "Help > About Firefox".

  * If you want to go back to Firefox 18 or 19 to make TGM work, it's easy. But you might have to check compatibility of other extensions if they were updated recently. (See below for more on reverting to older Firefox versions)

# Specific version notes #

## With Firefox version 18.0.2 or 19 (or below): ##

  * TGM currently works best with versions of Firefox up to 18.0.2 (or perhaps 19, see below). It is reliable, stable, safe, and useful.<p><p>There is one important issue:<p><p>You <u>MUST</u> go to about:config (which allows you to change hidden settings in Firefox) and change one setting yourself. <b>You need to change the setting browser.sessionstore.restore_hidden_tabs from 'false' to 'true'</b>. This makes sure tabs cannot sometimes be "lost". Details below - it's easy :)</li></ul>

<ul><li>Other minor known issues are that the number of hibernated tab groups doesn't get updated during a session, and tab drag/drop of multiple tabs may not always work, these are annoyances but mostly minor, they won't stop you benefiting from TGM.</li></ul>

<h2>With Firefox version 19:</h2>

<ul><li>It isn't clear if Firefox 19 works nicely, like Firefox 18.0.2, or has a few glitches like Firefox 20. You might want to play around with this.</li></ul>

<h2>With Firefox version 20 to 24:</h2>

<ul><li>The notes for Firefox up to 18 or 19 apply. There are also two new glitches to be aware of, with these versions of Firefox: - suspended groups are LOST on restart/restore, and tabs and groups are reloaded OUT OF ORDER (ie mixed up order) when a session restarts or reloads.</li></ul>

<ul><li>Otherwise TGM works, so if you avoid suspending tab groups and can cope with a bit of re-ordering (on starting/ending/saving/restoring sessions) then you'll be fine.</li></ul>

<h3>With Firefox 25+:</h3>

<ul><li>Firefox 25 will introduce major changes affecting many extensions. It'll require work to make TGM work properly in all ways with Firefox 25.</li></ul>

<h1>Issues and troubleshooting</h1>

<ul><li>The issues page lists all known issues we are aware of. You may want to select <b>All Issues</b> instead of only Open Issues when searching. At this moment there aren't many issues but we will be adding more.</li></ul>

<ul><li>If TabGroups Manager doesnt work, please check that your version of TabGroups Manager is updated in Firefox Extensions first.</li></ul>

<ul><li>Anything else - check existing issues and if it's not in that list, it's possible that it is something about your own setup of Firefox. Ask on the extension review thread, or Mozilla forums, or on the links provided on this project page, try usual troubleshooting steps (such as selectively disabling other extensions, or reinstalling, or a clean profile) and see if anyone can help narrow it down!</li></ul>


<h1>Changing "about:config"</h1>

To change the item in "about:config":<br>
<br>
<ul><li>Type about:config into your address bar (where you would type any website address. if it asks if you're sure, click "ok" ( or"I'll be good!")<br>
</li><li>In the filter box at the top, type "restore" which should shorten the list of advanced settings a lot.<br>
</li><li>Find the setting "browser.sessionstore.restore_hidden_tabs". if it says 'false' next to it, double-click it. It should go bold and turn to 'true'.<br>
</li><li>You're done. Close the page and do whatever you were going to do next, anyway!</li></ul>

<h1>Reverting to an older version of Firefox</h1>
This is easy, and standard. If you need help ask, but it's all over Google.<br>
<br>
<ul><li>Any extension at AMO (Addons.mozilla.org) will have a "Previous Versions" section hidden on their page, where you can find and download the latest version that's compatible with any given version of Firefox. You can also override compatibility if you feel it's needed (extensions exist for this).</li></ul>

<ul><li>Older versions of Firefox for all platforms can be obtained from Mozilla's FTP site (<a href='ftp://ftp.mozilla.org'>ftp://ftp.mozilla.org</a>), and profile directories/folders can usually be copied unchanged.