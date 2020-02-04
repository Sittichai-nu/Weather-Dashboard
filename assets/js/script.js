        // // create row function
        var createRow = function(data) {

        //     // create new table
            var tRow =$("<tr>");
            var cityTd = $("<td>").text(data.city);

        //     // append the newly created
            tRow.append(cityTd);
            $("tbody").append(tRow);
        };

        var searchOMDB = function(city) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=8796682f89508d38c2a35ab159e08782";
        $.ajax({
            url: queryURL,
            method: "GET"

        })
        .then(function(response){
            console.log(queryURL);
            console.log(response);
            createRow(response)
            $(".city").html("<h1>" + response.name + "");
            $(".temp").text("Temperature: " +response.main.temp + " F");
            $(".humidity").text("Humidity: " + response.main.humidity + " %");
            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".table").text(response.name)

            var tempF= (response.main.temp - 273.15) * 1.80 + 32; 
                $("tempF").text("Temperature (Kelvin) " + tempF);
            
        })
    };
    searchOMDB("Houston")
