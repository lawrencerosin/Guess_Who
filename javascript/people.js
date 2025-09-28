const people=[
    {
        name:"mike",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url: "images/man 1.jpg"
    },
     {
        name:"michelle",
        gender: "woman",
        skin_color:"black",
        hair_color: "black",
        bald:false,
        image_url: "images/woman 1.jpg"
    },
     {
        name:"james",
        gender: "man",
        skin_color:"black",
        hair_color: "black",
        bald:false,
        image_url:"images/man 2.jpg"
    },
     {
        name:"catherine",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 2.jpg"
    },
     {
        name:"arnold",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url: "images/man 3.jpg"
    },
     {
        name:"dianna",
        gender: "woman",
        skin_color:"white",
        hair_color: "blond",
        bald:false,
        image_url: "images/woman 3.jpg"
    },
     {
        name:"max",
        gender: "man",
        skin_color:"black",
        hair_color: "",
        bald:true,
        image_url:"images/man 4.jpg"
    },
    {
        name:"kelly",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:true,
        image_url:"images/woman 4.jpg"
    },
     {
        name:"josh",
        gender: "man",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/man 5.jpg"
    },
     {
        name:"sabrina",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 5.jpg"
    },
    {
        name:"brian",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 6.jpg"
    },
    {
        name:"jessie",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 6.jpg"
    },
    {
        name:"benjamin",
        gender: "man",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/man 7.jpg"
    },
    {
        name:"ashley",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 7.jpg"
    },
    {
        name:"chris",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 8.jpg"
    },
    {
        name:"anna",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 8.jpg"
    },
    {
        name:"andrew",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:true,
        image_url:"images/man 9.jpg"
    },
    {
        name:"jenny",
        gender: "woman",
        skin_color:"white",
        hair_color: "brown",
        bald:false,
        image_url:"images/woman 9.jpg"
    },
     {
        name:"david",
        gender: "man",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/man 10.jpg"
    },
     {
        name:"sally",
        gender: "woman",
        skin_color:"white",
        hair_color: "black",
        bald:false,
        image_url:"images/woman 10.jpg"
    },
]; 
const computerChoice=people[Math.floor(Math.random()*people.length)];
let playerChoice;