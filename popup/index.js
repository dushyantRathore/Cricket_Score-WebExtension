$.getJSON('https://powerful-tor-13817.herokuapp.com/live', function(data) {
    // data is the JSON string
    // console.log(data["Matches"][0]["Team A"]);
    // document.getElementById('Team A').innerHTML = data["Matches"][0]["Team A"];
    // console.log(data["Matches"][0]["Team B"]);
    // document.getElementById('Team B').innerHTML = data["Matches"][0]["Team B"];
    // console.log(data["Matches"][0]["Status"]);
    // document.getElementById('Status').innerHTML = "Status : " + data["Matches"][0]["Status"];

    var size = data["Matches"].length;
    var HTMLtext = '';

    for (var i =0; i<size; i++){
            HTMLtext += '<div class = "button">';
            HTMLtext += '<span id = "Team_A">' + data["Matches"][i]["Team A"] + '</span>';
            HTMLtext += '<b> v/s </b>';
            HTMLtext += '<span id = "Team_B">' + data["Matches"][i]["Team B"] + '</span>';
            HTMLtext += '<br /><br />';
            HTMLtext += '<span id = "Status">' + data["Matches"][i]["Status"] + '</span>';
            HTMLtext += '</div>';
    }

    $('body').append(HTMLtext);

});
