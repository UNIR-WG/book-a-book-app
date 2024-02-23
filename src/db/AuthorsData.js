/*const authorsList = [{
    "AuthorId": 1,
    "FirstName": "Alfonso",
    "LastName": "Goizueta",
    "BirthDate": "8/10/1908",
    "Nationality": "China",
    "Email": "ochiverton0@nps.gov",
    "Website": "https://www.amazon.es/stores/Alfonso-Goizueta/author/B0CMDBZWDC?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
    "Biography": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  }, {
    "AuthorId": 2,
    "FirstName": "Ken",
    "LastName": "Follett",
    "BirthDate": "9/6/1912",
    "Nationality": "Japan",
    "Email": "bferrolli1@mtv.com",
    "Website": "https://www.amazon.es/stores/author/B000APHCPQ/about",
    "Biography": "Ken Follett was only twenty-seven when he wrote the award-winning EYE OF THE NEEDLE, which became an international bestseller. His celebrated PILLARS OF THE EARTH was voted into the top 100 of Britain's best-loved books in the BBC's the Big Read and the sequel, WORLD WITHOUT END, was published to critical acclaim. He lives with his family in London and Hertfordshire.."
  }, {
    "AuthorId": 3,
    "FirstName": "Santiago",
    "LastName": "Posteguillo",
    "BirthDate": "10/11/1982",
    "Nationality": "Spanish",
    "Email": "plockhead2@furl.net",
    "Website": "",
    "Biography": "Santiago Posteguillo es profesor de lengua y literatura en la Universidad Jaume I de Castellón. Estudió literatura creativa en Estados Unidos y lingüística, análisis del discurso y traducción en el Reino Unido. De 2006 a 2009 publicó su trilogía Africanus sobre Escipión y Aníbal y de 2011 a 2016 la trilogía sobre el emperador de origen hispano Marco Ulpio Trajano. Ha sido galardonado por la semana de novela histórica de Cartagena, obtuvo el Premio de las Letras de la Comunidad Valenciana en 2010 y el Premio Internacional de Novela Histórica de Barcelona en 2014. En 2015 fue proclamado escritor del año por la Generalitat  Valenciana. Entre 2012 y 2017 publicó también tres volúmenes de relatos sobre la historia de la literatura muy elogiados por crítica y público. Santiago Posteguillo es Doctor por la Universidad de Valencia y ha impartido seminarios sobre ficción histórica en diversas universidades europeas y de América Latina. En 2018 ha sido profesor invitado del Sidney Sussex College de la Universidad de Cambridge."
  }, {
    "AuthorId": 4,
    "FirstName": "Paulo",
    "LastName": "Coelho",
    "BirthDate": "10/19/1964",
    "Nationality": "Portugues",
    "Email": "dhacking3@over-blog.com",
    "Website": "https://paulocoelhoblog.com/",
    "Biography": `Paulo Coelho is the author of "The Alchemist", he was born in 1947 in the city of Rio de Janeiro, Brazil. Being the author of 30 books that have sold over 320 million copies in 170 countries, he has become one of the most widely read authors in the world today. Paulo Coelho has been a United Nations Messenger of Peace since 2007 and this has allowed him to continue to promote intercultural dialogue and to focus on the needs of children. He is a member of the Brazilian Academy of Letters and the recipient of over 115 awards and honours, including the Hans Christian Andersen Award, the Grinzane Cavour Book Award and the Chevalier de l’Ordre National de la Légion d’Honneur, to name a few.

    Other titles include “The Pilgrimage”, “Brida”, "The Supreme Gift", “The Valkyries”, “By the River Piedra I Sat Down and Wept”, “Maktub”, “The Fifth Mountain”, “Manual of the Warrior of Light”, “Veronika Decides to Die”, “The Devil and Miss Prym”, “Stories for Parents, Children and Grandchildren”, “Eleven Minutes”, “The Zahir”, “Like the Flowing River”, “The Witch of Portobello”, “The Winner Stands Alone”, “Aleph”, “Manuscript Found in Accra”, “Adultery”, “The Spy”, “Hippie”. Also “Journey” guided journal.`
  }];*/

const authorsList = [{
    "AuthorId": 1,
    "FirstName": "Alfonso",
    "LastName": "Goizueta",
    "BirthDate": "8/10/1908",
    "Nationality": "China",
    "Email": "ochiverton0@nps.gov",
    "Website": "https://www.amazon.es/stores/Alfonso-Goizueta/author/B0CMDBZWDC?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
    "Biography": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}];

const userAction = async () => {
    let myBody={
        "targetMethod": "GET"
    };
    const response = await fetch('https://book-a-book-gateway-production.up.railway.app/buscador/authors', {
        method: 'POST',
        body: myBody, // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson)
    // do something with myJson
}

userAction()


export default authorsList;