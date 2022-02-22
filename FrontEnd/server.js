var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/public", express.static("public"));

// use res.render to load up an ejs view file

// resonance page
app.get('/resonance', function (req, res) {
    var resonance_info = [
        "RESONANCE is an intra college symposium which is organized by the students.It is particularly conducted for freshers to help them adapt to college and mingle with their friends and seniors.It has multiple events and workshops.This symposium helps students to get more engaged in the field of electronics and communication."
        , "The Electronics and Communication Engineers' Association, ECEA organized RESONANCE, an intra college technical symposium on 29thDec 2021. The ceremony also witnessed the release of PULSEMagazine's December edition, the official magazine of DECE.",
        "A total of 9 events worth 8k cash prize, based upon diverse themes were organized on the day.Among these 5 were technical events and the other 4 were non - technical events.The renowned Project Display and exciting Carnival were part of this lineup.All the events were conducted following social distancing and Covid 19 protocols."
    ];
    res.render('pages/resonance', {
        resonance_info: resonance_info
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');
