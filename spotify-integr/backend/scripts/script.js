const onGetArtist = () => {
    const name = $("#artistName").val();
    const token = $("#token").val();

    $.ajax({
        url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true,
        success: (result) => {
            const artist = result.artists.items.find((artist) => {
                return artist.name === name;
            })
            if (artist === undefined)
                return;
            console.log(artist);
            $("#name").text(artist.name);

            let genres = "";
            for (let i = 0; i < artist.genres.length; i++) {
                if (genres === "")
                    genres = artist.genres[i];
                else
                    genres += (", " + artist.genres[i]);
            }
            $("#genres").text(genres);
            $("#followers").text(artist.followers.total);

            const image = $("#artistImage");
            image.attr('src', artist.images[0].url);

        }
    })
}

const onGetAlbum = () => {
    const name = $("#albumName").val();
    const token = $("#token").val();

    $.ajax({
        url: "https://api.spotify.com/v1/search?q=" + name + "&type=album",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true,
        success: (result) => {
            const album = result.albums.items.find((album) => {
                return album.name === name;
            })
            albumDetails(album.id, token);
        }
    })
}


const albumDetails = function(id, token) {
    const url = "https://api.spotify.com/v1/albums/";

    $.ajax({
        url: url + id,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true,
        success: (result) => {

        }
    })
}

//On load
$(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenVal = urlParams.get("token");
    $("#artistsLink").attr("href", "/artists?token=" + tokenVal);
});