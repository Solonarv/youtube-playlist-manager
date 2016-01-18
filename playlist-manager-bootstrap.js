// Replace the current page with playlist-manager.html

(function(){
    var manager_url = chrome.extension.getURL("playlist-manager.html");
    
    // document.write("<html><head><title>Loading YT Playlist Manager</title></head><body><h1>Loading...</h1></body></html>");
    // document.body.style.background = "#b7b7b7";
    
    $.get("https://youtube.com", function(youtube) {
        // youtube = $(youtube);
        // youtube = resetHomepage(youtube);
        
        document.write(youtube);
        
        $.get(manager_url, function(manager) {
            $("#content").append(manager);
        }, "html");
    }, "html");
})();

function resetHomepage(youtube) {
    // Nuke the banner ad
    $("#header", youtube).remove();
    
    // Nuke the content, keep the <div /> because that's where the manager will go later
    $("#content", youtube).empty();
    
    // Nuke the header thingy
    $("#masthead-appbar-container", youtube).remove();
    
    // We are not actually on the home page, the guide should reflect that
    $(".guide-item-selected", youtube).removeClass("guide-item-selected");
    
    // Alter the "playlists" link (which for some reason doesn't have an ID) to point here
    $("a[data-name='g-personal']", youtube).attr("href", "https://youtube.com/playlists");
    
    // Unfocus the search box
    $("#masthead-search-term", youtube).blur();
    
    return youtube;
}