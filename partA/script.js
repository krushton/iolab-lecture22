/* use Javascript and jQuery to modify the contents of a page or every page. be creative and challenge yourself. here are some options:
-change colors and fonts (green on back = console mode?)
-hide or show page components 
-add new components to the page 
-replace bits of text with other text, for example: https://chrome.google.com/webstore/detail/cloud-to-butt-plus/apmlngnhgbnjpajelfkmabhkfapgnoai?hl=en
-replace all profile images on facebook with pictures from flickr.
*/

/* Replace profile pics with another photo 
    var dataObj = {
            api_key : 'd99a583f0b168b27152d3b67bf01b0dc',
            method : 'flickr.photos.search',
            tags: 'shiba inu',  //what do you want to search for?
            sort: 'relevance',
            media: 'photos',
            format: 'json',
            per_page: 1,
            content_type: 1,
            nojsoncallback: 1,
            format: 'json',
        };
    $.ajax({
        url: 'http://api.flickr.com/services/rest/',
        data: dataObj,
        success: function(data) {
            var photo = data.photos.photo[0];
            var image = $('img.profilePic').first();
            image.attr('src', buildLink(photo));
           
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });	
    
     function buildLink(photo) {
       return 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'    
     }

*/

$('img').each(function() {
    $(this).remove();
});
