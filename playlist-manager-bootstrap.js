// Replace the current page with playlist-manager.html

var manager_url = chrome.extension.getURL("playlist-manager.html");
    
document.write("<html></html>");
document.title = "Loading YT Playlist Manager...";


$.get("https://youtube.com", function(youtube) {
    
    document.write(youtube);
    
    $("body").hide();
    document.title = "Loading YT Playlist Manager...";
            
    // This is running too early. I need to defer it to *after*
    // the stuff from the above document.write has been processed.
    $(function(){
        // UGLY HAX!
        setTimeout(function() {
            $.get(manager_url, function(manager) {
                resetHomepage();
                $("#content").html(manager);
                $("body").show();
                document.title = "Playlist Manager - YouTube (add-on)";
                
                chrome.storage.local.get("oauth", function (data) {
                    $("ypm-oauth-info").attr("data", data.oauth);
                });
            }, "html");
        }, 1500);
    });    
    
}, "html");

function resetHomepage() {
    // Nuke the banner ad
    $("#header").remove();
    
    // Nuke the header thingy
    $("#masthead-appbar-container").remove();
    
    // We are not actually on the home page, the guide should reflect that
    $(".guide-item-selected").removeClass("guide-item-selected");
    
    // Alter the "playlists" link (which for some reason doesn't have an ID) to point here
    var playlists_link = $("a[data-name='g-personal']"),
        playlists_page = playlists_link.attr("href");
    playlists_link.attr("href", "https://youtube.com/playlists");
    $("body").attr("playlists-link", playlists_link);
    
    // Unfocus the search box
    $("#masthead-search-term").blur();
    
    // Nuke the content, keep the <div /> because that's where the manager will go later
    // This doesn't work consistently, because #content is last in the source and therefore
    // loaded last. This means it isn't always loaded by the time this gets called.
    $("#content").children().remove();
}