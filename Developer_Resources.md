# TGM, Panorama, and FF25 #

General background: http://www.ghacks.net/2013/05/28/mozilla-outlines-firefox-25-compatibility-changes (TGM is on the list of affected extensions)

**Impact:**

See [bug 874381](https://code.google.com/p/tabgroupsmanager/issues/detail?id=74381) (above) and any updates announced to developers:
> _"Session Restore is getting the asynchronous treatment to improve its performance. If you look at [bug 874381](https://code.google.com/p/tabgroupsmanager/issues/detail?id=74381) and its dependencies, there are several changes to this module that will affect add-ons. Particularly, there are many add-ons that rely on private variables (starting with__SS) that will no longer exist."_

Also toolbars and tab layout is changing, apparently. However, _"the Jetpack team is landing a series of UI integration modules in Firefox 25 that will make it very easy to create toolbar buttons and additional toolbars. While these will be implemented as CommonJS modules, developers not using the SDK’s toolchain will still be able to use them by creating an instance of the SDK’s module loader."_
> source: http://blog.mozilla.org/addons/2013/05/27/major-compatibility-changes-coming-for-firefox-25/comment-page-1/#comment-164502
> link: https://github.com/mozilla/addon-sdk/wiki/JEP-Add-on-UI-Integration

**Important links**

  * https://bugzilla.mozilla.org/show_bug.cgi?id=836758 - the bugzilla item for removing Panorama into an extension, patches, dev notes,  links to replacement code, etc
  * https://github.com/ttaubert/firefox-tabgroups - the replacement Panorama code (which we ought to fit in with, if we can, or liaise with)
  * https://bugzilla.mozilla.org/show_bug.cgi?id=874381 - the tracking bug for the big changes in FF25.

**TGM refresh thread on mailing list (2013): worth reading in full (others' views on TGM and tab groups, following FF25)**
  * https://mail.mozilla.org/pipermail/firefox-dev/2013-April/000251.html
  * https://mail.mozilla.org/pipermail/firefox-dev/2013-April/000252.html
  * https://mail.mozilla.org/pipermail/firefox-dev/2013-April/000256.html
  * https://mail.mozilla.org/pipermail/firefox-dev/2013-April/000258.html
  * https://mail.mozilla.org/pipermail/firefox-dev/2013-April/000270.html

# Other useful info, extensions, and links relevant to tabs and tab grouping #
A few extensions that are of possible prominence in the areas we're looking at, to be aware of (they either work with tabs or their UI, or else give indications of tab features users might value)

  * Tab Mix Plus
  * Tab Utilities - two popular tab customisers
  * Vertical Tabs - power users often report vertical tabs are good use screenwise and this has come up in FF25 discussion
  * Unload Tabs
  * Suspend background tabs - self evident
  * Session manager - session handling should be compatible and save TGM2 session correctly
  * TreeStyle Tabs
  * Colorful tabs - tab tree, tab indenting and tab styling
  * All-in-one sidebar - allows cross-window tab filtering and manipulation in the side panel
  * Pano - extra interface to Panorama/tab groups (floating or in the sidebar)
  * Multiple Tab Handler - essential we're compatible and fit in with this

# General "How To" for extension development and FF25 #

**MDN/Mozilla**
  * https://developer.mozilla.org/en-US/docs/XUL/School_tutorial/Getting_Started_with_Firefox_Extensions MDN: Getting Started with Firefox Extensions/XUL
  * https://developer.mozilla.org/en-US/docs/Extensions/Bootstrapped_extensions MDN: Bootstrapped extensions - Extensions
  * https://developer.mozilla.org/en-US/docs/XUL/School_tutorial/The_Essentials_of_an_Extension MDN: The Essentials of an Extension/XUL
  * https://developer.mozilla.org/en-US/docs/Extensions MDN: Extensions
  * https://addons.mozilla.org/en-US/developers/tools/builder Developer Hub: Extension Builder and SDK
  * http://blog.mozilla.org/addons/tag/firefox-25/ - Mozilla Add-ons Blog: posts tagged "Firefox 25"
  * https://hacks.mozilla.org/ Mozilla Hacks (developer blog/resources)
  * http://blog.mozilla.org/addons/category/builder/ Mozilla Add-ons Blog: builder
  * http://blog.mozilla.org/addons/category/documentation/ Mozilla Add-ons Blog: documentation
  * http://blog.mozilla.org/addons/category/developers/ Mozilla Add-ons Blog: developers
  * http://blog.mozilla.org/addons/category/compatibility/ Mozilla Add-ons Blog: compatibility


**Other**
  * http://firefoxdev.blogspot.co.uk/ Firefox extension development tips & tricks
  * http://www.ibm.com/developerworks/library/os-extendfirefox/ Create your own browser extensions, Part 2: Extend your reach into Firefox
  * http://www.ibm.com/developerworks/library/os-extendagnostic/index.html Create your own browser extensions, Part 4: Move toward browser-agnostic extensions
  * http://stackoverflow.com/questions/16709329/are-there-ways-to-style-or-modify-the-firefox-tab-group-window  - Stack Overflow: styling and modifying the Firefox tab group window
  * http://comments.gmane.org/gmane.comp.mozilla.firefox.devel/366 Development discussion about Firefox

**Misc tools and tricks**
  * http://www.firebreath.org/display/documentation/FireBreath+Home
  * http://stackoverflow.com/questions/4913123/cross-browser-extensions-api