console.log(err);

//delete one item by id
app.get("/removeone", (req, res) => {
  Profile.findByIdAndRemove({ _id: "61cc6227ab4f637b57df513d" })

    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete many items by name
app.get("/removeone", (req, res) => {
  Profile.remove({ name: "Remmy" })

    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Querybuilder
app.get("qhelper", (req, res) => {
  Profile.find({
    name: "Remmy",
  })
    .where("age")
    .gt(10)
    .lt(5)
    .where("favoriteFoods")
    .in(["rice", "salad"])
    .limit(2)
    .sort("-timestamps")
    .select("name occupation")
    .exec(callback);
});