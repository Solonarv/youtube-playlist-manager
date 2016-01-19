window.playlistmanager = {
    init: function(){
        this.playlists_link = $("body").attr("playlists-link");
        
    },
    
    loadPlaylists: function() {
        // Fuck it, I'm getting an API key.
        
        // $.get(this.playlists_link, function(playlists) {
        //     var $playlists = $(playlists),
        //         $own = $playlists.find("ul#browse-items-primary > li:nth-child(1) ul.shelf-content > li"),
        //         $saved = $playlists.find("ul#browse-items-primary > li:nth-child(2) ul.shelf-content > li"),
        //         $own_more = $own.find(".compact-shelf-view-all-card-link"),
        //         $saved_more = $saved.find(".compact-shelf-view-all-card-link");
        //         if ($own_more.length > 0) {
        //             $.get($own_more.attr("href"), function (
        // });
    }
}