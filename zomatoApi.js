const Zomato = require("zomato.js");
var zomato = new Zomato("59304a7ddb4b77672ec1dbd72b36a701");
var cityId;
var resId;

// step 1 return city id, and return dallas id: 276
zomato
  .cities({
    q: "dallas",
    count: 1
  })
  .then(function(data) {
    // console.log(data);
    console.log("cityId is", data[0].id);
    cityId = data[0].id;
    /// dallas city id 276*********
    // step 2 using city id search res id（chick-fil-a id 16940679)
    zomato
      .search({
        entity_id: cityId,
        entity_type: "city",
        q: "chick-fil-a"
      })
      .then(function(data) {
        // console.log(data);

        console.log("restaurantID is", data.restaurants[0].id);
        resId = data.restaurants[0].id;

        // //   step 3 using city id & res id return restaurant info
        zomato
          .restaurant({
            res_id: resId
          })
          .then(function(data) {
            console.log(data);
          })
          .catch(function(err) {
            console.error(err);
          });
      })
      .catch(function(err) {
        console.error(err);
      });
  })
  .catch(function(err) {
    console.error(err);
  });
