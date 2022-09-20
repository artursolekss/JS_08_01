const getArtist = () => {
    getArtistOffs(0);
}

function getArtistOffs(offset) {
    const artistResultElem = $("#artistsResult");
    artistResultElem.empty();
    $("#artistListPagination").empty();
    const url = "https://api.spotify.com/v1/search";
    const artistSrchVal = $("#artistSearch").val();
    $.ajax({
        url: url + "?q=" + artistSrchVal + "&type=artist&limit=10&offset=" + offset,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        json: true,
        success: (result) => {
            const totalNumber = result.artists.total;
            createPagination(totalNumber);
            const artistsResult = result.artists.items;
            for (let i = 0; i < artistsResult.length; i++) {
                const artCard = getArtistCard(artistsResult[i]);
                artistResultElem.append(artCard);
            }
        }
    })
}

function createPagination(totalNumber) {
    const paginationElement = $("#artistListPagination");
    const totalPages =
        Math.min(Math.ceil(totalNumber / 10), 30);
    for (let i = 0; i < totalPages; i++) {
        const li = $("<li>");
        li.addClass("page-item");
        const btn = $("<button>");
        const offset = 10 * i;
        btn.on("click", () => {
            getArtistOffs(offset);
        })
        btn.addClass("btn");
        btn.addClass("btn-light");
        btn.append((i + 1));
        li.append(btn);
        paginationElement.append(li);
    }
}

function getArtistCard(artist) {
    const artistCard = $("<div>");
    artistCard.addClass("card");
    const img = $("<img>");
    img.addClass("card-img-top");
    img.attr("src", artist.images[0] !== undefined ?
        artist.images[0].url : "");

    artistCard.append(img);
    const cardBody = $("<div>");
    cardBody.addClass("card-body");

    const cardTitle = $("<h5>");
    cardTitle.append("<b>Name: </b>" + artist.name);
    cardBody.append(cardTitle);
    const genresElement = $("<p>");
    genresElement.addClass("card-text");
    genresElement.append("<b>Genres : </b>" + artist.genres.map((genre) => {
        return genre + " "
    }));
    cardBody.append(genresElement);

    artistCard.append(cardBody);

    return artistCard;
}

//On load
$(function() {
    $("#artistSrchBtn").on("click", getArtist);
});

function getToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenVal = urlParams.get("token");
    return tokenVal;
}