/* Use Javascript and jQuery to add an option 'Search on Wikipedia' to the browser's right click menu. 
When the user clicks this option, your script should 
1) check what word is currently highlighted, 
2) search Wikipedia for it (see below), and 
3) create a new tab in chrome that opens to this page.

To help with step 2, we have set up a proxy for the wikipedia API that takes a keyword/phrase as input and returns the page URL for the first matching result.
To use the proxy, make an AJAX GET request to http://wikiproxy.herokuapp.com/pageinfo?keyword=[mykeyword]

For example: 
GET http://wikiproxy.herokuapp.com/pageinfo?keyword=shiba%20inu
Returns: 
{"title": "Shiba Inu", "url": "http://en.wikipedia.org/wiki/Shiba_Inu"}

Advanced: Instead of opening the URL a new tab, add a popup to the page the user is currently on that contains the Wikipedia page title, url, and summary text. To get summary text, use the following call to the proxy: http://wikiproxy.herokuapp.com/summary?keyword=[mykeyword]

For example: 
GET http://wikiproxy.herokuapp.com/summary?keyword=shiba%20inu
Returns: 
{"title": "Shiba Inu", "url": "http://en.wikipedia.org/wiki/Shiba_Inu"}
{"summary": "The Shiba Inu (\u67f4\u72ac?) is the smallest of the six original and distinct spitz breeds of dog from Japan.\nA small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. It is similar in appearance to the Akita, though much smaller in stature. It is one of the few ancient dog breeds still in existence in the world today.\n"}
*/
