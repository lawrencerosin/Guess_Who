const people=[
    {
        name:"Mike",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url: "images/man 1.jpg"
    },
     {
        name:"Michelle",
        gender: "woman",
        skin_color:"black",
        hair_color: "black",
        bald:false,
        image_url: "images/woman 1.jpg"
    },
     {
        name:"James",
        gender: "man",
        skin_color:"black",
        hair_color: "black",
        bald:false,
        image_url:"images/man 2.jpg"
    },
     {
        name:"Catherine",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 2.jpg"
    },
     {
        name:"Arnold",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url: "images/man 3.jpg"
    },
     {
        name:"Dianna",
        gender: "woman",
        skin_color:"white",
        hair_color: "blond",
        bald:false,
        image_url: "images/woman 3.jpg"
    },
     {
        name:"Max",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url:"images/man 4.jpg"
    },
    {
        name:"Kelly",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:true,
        image_url:"images/woman 4.jpg"
    },
     {
        name:"Josh",
        gender: "man",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/man 5.jpg"
    },
     {
        name:"Sabrina",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 5.jpg"
    },
    {
        name:"Brian",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 6.jpg"
    },
    {
        name:"Jessie",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 6.jpg"
    },
    {
        name:"Benjamin",
        gender: "man",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/man 7.jpg"
    },
    {
        name:"Ashley",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 7.jpg"
    },
    {
        name:"Chris",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 8.jpg"
    },
    {
        name:"Anna",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 8.jpg"
    },
    {
        name:"Andrew",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:true,
        image_url:"images/man 9.jpg"
    },
    {
        name:"Jenny",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 9.jpg"
    },
     {
        name:"David",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 10.jpg"
    },
     {
        name:"Sally",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 10.jpg"
    },
]; 
const computerCharacter=people[Math.floor(Math.random()*people.length)];
let playerCharacter;