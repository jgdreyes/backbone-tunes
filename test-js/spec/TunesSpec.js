var albumData = [{
    "title":  "Album A",
    "artist": "Artist A",
    "tracks": [
        {
            "title": "Track A",
            "url": "/music/Album A Track A.mp3"
        },
        {
            "title": "Track B",
            "url": "/music/Album A Track B.mp3"
        }]
}, {
    "title": "Album B",
    "artist": "Artist B",
    "tracks": [
        {
            "title": "Track A",
            "url": "/music/Album B Track A.mp3"
        },
        {
            "title": "Track B",
            "url": "/music/Album B Track B.mp3"
    }]
}];

describe("Album", function () {

    beforeEach(function () {
        this.album = new Album(albumData[0]);
    });

    it("creates from data", function () {
        expect(this.album.get('tracks').length).toEqual(2);
    });

    describe ("first track", function() {
        it("identifies correct first track", function() {
            expect(this.album.isFirstTrack(0)).toBeTruthy();
        });
    });

    describe ("last track", function() {
        it("identifies correct last track", function() {
            expect(this.album.isLastTrack(1)).toBeTruthy();
        });
    });

    describe("URL for a track", function() {
        it("returns the URL for a track", function() {
            expect(this.album.trackUrlAtIndex(0))
                .toEqual('/music/Album A Track A.mp3');
        });

        it ("returns the URL as null for a non existent index", function() {
            expect(this.album.trackUrlAtIndex(3))
                .toEqual(null);
        });
    });

});


describe("Playlist", function() {
    beforeEach(function () {
        this.playlist = new Playlist();
        this.playlist.add(albumData[0]);
    });

    it("identifies first album as first", function() {
        expect(this.playlist.isFirstAlbum(0)).toBeTruthy();
    });

    it("rejects non-first album as first", function() {
        expect(this.playlist.isFirstAlbum(1)).toBeFalsy();
    });

    it("identifies last album as last", function() {
        this.playlist.add(albumData[1]);
        expect(this.playlist.isLastAlbum(1)).toBeTruthy();
    });

    it("rejects non-last album as last", function() {
        this.playlist.add(albumData[1]);
        expect(this.playlist.isLastAlbum(0)).toBeFalsy();
    });

});
