class Jukebox {
    constructor() {
        this.albums = [];
    }
    
    addAlbum(album) {
        this.albums.push(album);
    }
    
    playAlbum(label) {
        const album = this.albums.find(album => album.getLabel() === label);
        if (album) {
            album.play();
        }
    }
    
    favoriteAlbum() {
        let max = -1;
        let fav = null;

        for (const album of this.albums) {
            if (album.played > max) {
                max = album.played;
                fav = album;
            }
        }
        return fav ? fav.display() : "No albums played yet.";
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    
    play() {
        this.played += 1;
    }
    
    getLabel() {
        return `${this.artist} : ${this.title}`;
    }
    
    display() {
        return `${this.getLabel()}. The album has been played ${this.played} time${this.played === 1 ? '' : 's'}.`;
    }
}

const jukebox = new Jukebox();

const playHandler = () => {
    const menu = document.getElementById("dropDown");
    jukebox.playAlbum(menu.options[menu.selectedIndex].text);
};

const showFavoriteHandler = () => {
    document.getElementById("favoriteAlbum").innerHTML = jukebox.favoriteAlbum();
};

const main = () => {
    const albums = [
        ["Operation Ivy", "Energy"],
        ["Blink 182", "Dude Ranch"],
        ["New Found Glory", "Sticks and Stones"]
    ];
    
    const dropDown = document.getElementById("dropDown");
    
    for (const [artist, title] of albums) {
        const album = new Album(artist, title);
        jukebox.addAlbum(album);
        
        const option = new Option(album.getLabel(), artist);
        dropDown.appendChild(option);
    }
    
    document.getElementById("play").addEventListener("click", playHandler);
    document.getElementById("showFavorite").addEventListener("click", showFavoriteHandler);
};

window.addEventListener("load", main);
