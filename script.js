var nomen = $("#name")
var image = $("#representation")

var person = {
  name: "Clay",
  representation: "https://i.ytimg.com/vi/Ovn3ehANSvA/maxresdefault.jpg",
  height: "500px",	
  favoriteColor: "blue",
  catchphrase: "Get pumped!"
}
var i

function drawPerson(person) {
 nomen.html(person.name)
 image.html('<img src=person.representation>')
 
}

drawPerson(person)