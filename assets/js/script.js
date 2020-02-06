        var cities = ["Houston", "New York", "Denver", "Las Vegas", "Los Angeles", "Chicago", "Seattle", "Moscow"];
        
         
        function displayCityInfo() {
            var city = $(this).attr("data-name");
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=8796682f89508d38c2a35ab159e08782";

            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response) {
                console.log(response);
                $(".acity").html("<h1>" + response.name + "");
                $(".temp").text("Temperature: " +response.main.temp + " F");
                $(".humidity").text("Humidity: " + response.main.humidity + " %");
                $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
                $(".").text(response.name)

                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                 $(".tempF").text("Temperature (Kelvin) " + tempF);
              });
            
        }
        function renderTable() {
            $("#td").empty();
            for (var i = 0; i < cities.length; i++) {
                var a = $("<tr>");
                a.addClass("city");
                a.attr("data-name", cities[i]);
                a.text(cities[i]);
                $("#td").append(a);
            }
        }
        
        $("#search-city").on("click", function(event) {
            event.preventDefault();
            var city = $("#city-input").val().trim();
            cities.push(city);
            console.log(cities)
            
            renderTable();
        });
        
        $(document).on("click", ".city", displayCityInfo);
        
        renderTable();