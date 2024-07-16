let currentIndex = 0;
let playlist = JSON.parse(localStorage.getItem("music-playlist")) || [];

function getData(index) {
    let music = JSON.parse(localStorage.getItem("music-list")) || [];
    let displayMusic = document.querySelector(".music-player");
    if (music.length === 0) {
        console.log("No music in the list");
        displayMusic.innerHTML = "No Music is Remaining";
        document
            .querySelector(".next-prevBtn")
            .setAttribute("style", "display:none");
        return;
    } else {
        currentIndex += index;

        if (currentIndex < 0) {
            currentIndex = music.length - 1;
        } else if (currentIndex >= music.length) {
            currentIndex = 0;
        }
        displayMusic = "";
        displayMusic += `<div>
        <img src="${music[currentIndex].artwork}"/>
        <h2>${music[currentIndex].title}</h2>
        <p>artist : ${music[currentIndex].artist}</p>
        <div>
            <button class="playlist-btn" onclick="addPlaylist(${music[currentIndex].id})"><i class="fa fa-bookmark" style="font-size:24px"></i></button>
            <audio controls class="audio-tag">
                <source src="${music[currentIndex].url}" type="audio/mpeg">
            </audio>
            <button class="delete-btn" onclick="deleteSong(${music[currentIndex].id})">&#128465;</button>
        </div>
        
    </div>`;
        document.querySelector(".music-player").innerHTML = displayMusic;
    }
}
getData(currentIndex);

let nextBtn_music = document.querySelector(".next-btn");
nextBtn_music.addEventListener("click", () => {
    getData(1);
});

let preBtn = document.querySelector(".prev-btn");
preBtn.addEventListener("click", () => {
    getData(-1);
});

function deleteSong(id) {
    let music = JSON.parse(localStorage.getItem("music-list"));
    let playlistData = JSON.parse(localStorage.getItem("music_playlist"));

    let newMusic = music.filter((value) => value.id != id);
    localStorage.setItem("music-list", JSON.stringify(newMusic));

    console.log(playlistData.filter((value) => value.id != id));
    let deletedPlaylist = playlistData.filter((value) => value.id != id);
    localStorage.setItem("music_playlist", JSON.stringify(deletedPlaylist));

    getData(currentIndex);
}

function addSong(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let url = document.getElementById("url").value;
    let artwork = document.getElementById("artwork").value;

    let music = JSON.parse(localStorage.getItem("music-list")) || [];

    let newSong = {
        id: Date.now(),
        title: title,
        artist: artist,
        url: url,
        artwork: artwork,
    };

    music.push(newSong);
    localStorage.setItem("music-list", JSON.stringify(music));
    document.getElementById("addSongForm").reset();
    getData(0);
    showAllSong();
}

document.getElementById("addSongForm").addEventListener("submit", addSong);

function addPlaylist(id) {
    event.preventDefault();
    let music = JSON.parse(localStorage.getItem("music-list"));
    let music_id = music.find((value) => value.id == id);

    let playlistData = JSON.parse(localStorage.getItem("music_playlist")) || [];
    let playlist_id = playlistData.find((value) => value.id == id);
    console.log("--", playlist_id);
    if (playlist_id == undefined) {
        playlist.push(music_id);
    }
    localStorage.setItem("music_playlist", JSON.stringify(playlist));
}

function showAllSong() {
    let music = JSON.parse(localStorage.getItem("music-list"));
    let div = document.querySelector(".all-song");
    div = "";
    music.map((value) => {
        div += `<div>
            <img src="${value.artwork}" />
            <div>
                <h3>${value.title}</h3>
                <p>${value.artist}</p>
            </div>
        </div>`;
    });
    document.querySelector(".all-song").innerHTML = div;
}
showAllSong();

function displayForm() {
    document.getElementById("addSongForm").classList.toggle("hide");

    if (document.querySelector(".add-song-btn").textContent == "Add song") {
        document.querySelector(".add-song-btn").textContent = "Close";
    } else {
        document.querySelector(".add-song-btn").textContent = "Add song";
    }
}

function showPlaylist() {
    document.querySelector(".playlist").setAttribute("style", "display:block");

    let playlistData = JSON.parse(localStorage.getItem("music_playlist")) || [];
    let musicData = JSON.parse(localStorage.getItem("music-list"));

    let playlist_div = document.querySelector(".playlist");
    playlist_div = "";
    if (playlistData !== "") {
        playlistData.map((value) => {
            playlist_div += `<div>
                <img src="${value.artwork}"/>
                <div>
                    <h3>${value.title}</h3>
                    <p>${value.artist}</p>
                </div>
                <audio controls class="playlist-audio">
                    <source src="${value.url}" type="audio/mpeg">
                </audio>
                <button class="delete-playlist-btn" onclick="deletePlaylist(${value.id})">&#128465;</delete>
            </div>`;
        });
        
    }
    document.querySelector(".playlist").innerHTML = playlist_div;

    if (playlistData.length === 0) {
        console.log("empty !");
        playlist = [];
        document.querySelector(".playlist").textContent = "No item is added";
        document
            .querySelector(".playlist")
            .setAttribute("style", "display:none");
        return;
    }

    if (
        document.querySelector(".play-playlist-btn").textContent ==
        "Show Playlist"
    ) {
        document
            .querySelector(".playlist")
            .setAttribute("style", "display:block");
        document.querySelector(".play-playlist-btn").textContent = "Close";
    } else if (
        document.querySelector(".play-playlist-btn").textContent == "Close"
    ) {
        document.querySelector(".play-playlist-btn").textContent =
            "Show Playlist";
        document
            .querySelector(".playlist")
            .setAttribute("style", "display:none");
    }
}

function deletePlaylist(id) {
    event.preventDefault();
    console.log(id);
    let playListData = JSON.parse(localStorage.getItem("music_playlist"));
    let deletedList = playListData.filter((value) => value.id != id);
    console.log(deletedList);
    localStorage.setItem("music_playlist", JSON.stringify(deletedList));
    playlist = deletedList;
    document.querySelector(".play-playlist-btn").textContent = "Show Playlist";
    showPlaylist();
}

function shuffleSong() {
    let data = JSON.parse(localStorage.getItem("music-list"));
    let shuffleItem = data.sort(() => Math.random() - 0.5);
    console.log(shuffleItem);

    let audio = document.querySelector(".audio-tag")
    console.log(audio.firstElementChild);
    
    localStorage.setItem("music-list", JSON.stringify(shuffleItem));
    getData(currentIndex);
}


getData(currentIndex);

