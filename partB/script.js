/* Use Javascript and jQuery to add an option 'Search on Wikipedia' to the browser's right click menu. 
When the user clicks this option, your script should 
1) check what word is currently highlighted, 
2) search Wikipedia for it (see below), and 
3) create a new tab in chrome that opens to this page.

To help with step 2, we have set up a proxy for the wikipedia API that takes a keyword/phrase as input and returns the page URL and title for the first matching result.
To use the proxy, make an AJAX GET request to http://wikiproxy.herokuapp.com/pageinfo?keyword=[mykeyword]

For example: 
GET http://wikiproxy.herokuapp.com/pageinfo?keyword=shiba%20inu
Returns: 
{"title": "Shiba Inu", "url": "http://en.wikipedia.org/wiki/Shiba_Inu"}

*/

chrome.contextMenus.create({"title": "Search on Wikipedia", "contexts":["selection"],
                                      "onclick": linkClicked});
                                      
var url = 'http://wikiproxy.herokuapp.com/pageinfo?keyword=';

function linkClicked(info, tab) {
    var selection = info.selectionText;
    if (selection.length > 1) {
         $.getJSON(url + selection, function(result) {
            chrome.tabs.create({
                url: result["url"]
            });
         });
    }
};