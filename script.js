const books = [
    [
        {
            "id": 1,
            "title": "The Shining",
            "genre": "Horror",
            "author": "Stephen King",
            "review": "A chilling tale of a family isolated in a haunted hotel during the winter. As supernatural forces take hold, the psychological horror unfolds.",
            "price": "$19.99"
        },
        {
            "id": 2,
            "title": "Dracula",
            "genre": "Gothic Horror",
            "author": "Bram Stoker",
            "review": "The classic novel that introduced Count Dracula, a vampire who terrorizes London. A tale of suspense, terror, and the battle between good and evil.",
            "price": "$15.99"
        },
        {
            "id": 3,
            "title": "Psycho",
            "genre": "Thriller",
            "author": "Robert Bloch",
            "review": "Norman Bates and his eerie motel take center stage in this psychological thriller, which inspired Alfred Hitchcock's iconic film.",
            "price": "$14.95"
        },
        {
            "id": 4,
            "title": "The Exorcist",
            "genre": "Supernatural Horror",
            "author": "William Peter Blatty",
            "review": "A mother's desperate attempt to save her daughter from demonic possession becomes a harrowing battle between good and evil.",
            "price": "$21.50"
        },
        {
            "id": 5,
            "title": "Bird Box",
            "genre": "Post-Apocalyptic Horror",
            "author": "Josh Malerman",
            "review": "In a world where mysterious creatures drive people to madness when seen, a mother and her children must navigate a blindfolded existence.",
            "price": "$17.99"
        },
        {
            "id": 6,
            "title": "The Haunting of Hill House",
            "genre": "Psychological Horror",
            "author": "Shirley Jackson",
            "review": "A group of people with paranormal experiences gather at the haunted Hill House, unleashing a series of unsettling events.",
            "price": "$18.75"
        },
        {
            "id": 7,
            "title": "American Psycho",
            "genre": "Psychological Thriller",
            "author": "Bret Easton Ellis",
            "review": "A disturbing journey into the mind of Patrick Bateman, a wealthy and deranged New York City businessman with a taste for violence.",
            "price": "$22.99"
        },
        {
            "id": 8,
            "title": "It",
            "genre": "Horror",
            "author": "Stephen King",
            "review": "A group of friends confronts a malevolent entity that takes the form of Pennywise the Dancing Clown. A tale of childhood fears and the power of friendship.",
            "price": "$20.00"
        },
        {
            "id": 9,
            "title": "House of Leaves",
            "genre": "Experimental Horror",
            "author": "Mark Z. Danielewski",
            "review": "A mind-bending narrative that explores a family's experience with a strange house, blending horror, mystery, and experimental storytelling.",
            "price": "$24.95"
        },
        {
            "id": 10,
            "title": "Mexican Gothic",
            "genre": "Gothic Horror",
            "author": "Silvia Moreno-Garcia",
            "review": "In 1950s Mexico, a socialite confronts supernatural horrors in a decaying mansion, uncovering family secrets and facing ancient evils.",
            "price": "$19.99"
        },
        {
            "id": 11,
            "title": "Pride and Prejudice",
            "genre": "Romance",
            "author": "Jane Austen",
            "review": "A classic novel that explores the themes of love, class, and societal expectations through the spirited Elizabeth Bennet and the proud Mr. Darcy.",
            "price": "$12.99"
        },
        {
            "id": 12,
            "title": "Outlander",
            "genre": "Historical Romance",
            "author": "Diana Gabaldon",
            "review": "A time-traveling love story that follows Claire Randall, a nurse from the 1940s, who finds herself in 18th-century Scotland, where she meets Jamie Fraser.",
            "price": "$23.50"
        },
        {
            "id": 13,
            "title": "The Notebook",
            "genre": "Contemporary Romance",
            "author": "Nicholas Sparks",
            "review": "A heartwarming tale of Noah and Allie, two people from different social classes who fall in love during the summer but face challenges that test their commitment.",
            "price": "$14.95"
        },
        {
            "id": 14,
            "title": "Me Before You",
            "genre": "Contemporary Romance",
            "author": "Jojo Moyes",
            "review": "A poignant love story between Louisa Clark, a young woman who becomes a caregiver, and Will Traynor, a quadriplegic man, exploring themes of life and choice.",
            "price": "$16.99"
        },
        {
            "id": 15,
            "title": "The Fault in Our Stars",
            "genre": "Young Adult Romance",
            "author": "John Green",
            "review": "A heartwarming and heartbreaking story of two teenagers, Hazel Grace Lancaster and Augustus Waters, who meet at a cancer support group and embark on a journey of love and loss.",
            "price": "$13.50"
        },
        {
            "id": 16,
            "title": "Gone with the Wind",
            "genre": "Historical Romance",
            "author": "Margaret Mitchell",
            "review": "Set against the backdrop of the American Civil War and Reconstruction era, Scarlett O'Hara and Rhett Butler's tumultuous love story unfolds in the South.",
            "price": "$19.95"
        },
        {
            "id": 17,
            "title": "Eleanor Oliphant Is Completely Fine",
            "genre": "Contemporary Romance",
            "author": "Gail Honeyman",
            "review": "A quirky and heartwarming tale of Eleanor Oliphant, a socially awkward woman, and her unexpected journey towards self-discovery and love.",
            "price": "$22.00"
        },
        {
            "id": 18,
            "title": "Sense and Sensibility",
            "genre": "Romance",
            "author": "Jane Austen",
            "review": "A classic exploration of love and societal expectations, focusing on the contrasting personalities of the Dashwood sisters, Elinor and Marianne.",
            "price": "$15.99"
        },
        {
            "id": 19,
            "title": "The Hating Game",
            "genre": "Contemporary Romance",
            "author": "Sally Thorne",
            "review": "A delightful enemies-to-lovers office romance that follows Lucy Hutton and Joshua Templeman as they navigate workplace rivalry and unexpected attraction.",
            "price": "$17.75"
        },
        {
            "id": 20,
            "title": "To All the Boys I've Loved Before",
            "genre": "Young Adult Romance",
            "author": "Jenny Han",
            "review": "Lara Jean Covey's life takes a turn when her secret love letters are accidentally sent out, leading to unexpected romantic adventures and self-discovery.",
            "price": "$14.99"
        },
        {
            "id": 21,
            "title": "The Great Gatsby",
            "genre": "Fiction",
            "author": "F. Scott Fitzgerald",
            "review": "A story of wealth, love, and tragedy set in the Roaring Twenties, capturing the essence of the American Dream.",
            "price": "$18.99"
        },
        {
            "id": 22,
            "title": "To Kill a Mockingbird",
            "genre": "Fiction",
            "author": "Harper Lee",
            "review": "Set in the American South, this novel addresses issues of racial injustice and moral growth through the eyes of a young girl.",
            "price": "$15.50"
        },
        {
            "id": 23,
            "title": "1984",
            "genre": "Dystopian Fiction",
            "author": "George Orwell",
            "review": "A dystopian novel that explores the dangers of totalitarianism and the erosion of truth and freedom.",
            "price": "$16.75"
        },
        {
            "id": 24,
            "title": "Brave New World",
            "genre": "Dystopian Fiction",
            "author": "Aldous Huxley",
            "review": "In a future society where people are engineered for specific roles, the novel explores the impact of advanced technology on human nature.",
            "price": "$20.00"
        },
        {
            "id": 25,
            "title": "One Hundred Years of Solitude",
            "genre": "Magical Realism",
            "author": "Gabriel García Márquez",
            "review": "A multi-generational tale that blends magical elements with the reality of a small town, exploring the cyclical nature of history.",
            "price": "$22.99"
        },
        {
            "id": 26,
            "title": "The Catcher in the Rye",
            "genre": "Fiction",
            "author": "J.D. Salinger",
            "review": "A classic novel that explores the struggles of adolescence and the search for identity.",
            "price": "$14.95"
        },
        {
            "id": 27,
            "title": "The Alchemist",
            "genre": "Philosophical Fiction",
            "author": "Paulo Coelho",
            "review": "Santiago's journey to discover his personal legend is a philosophical and allegorical tale about following one's dreams.",
            "price": "$19.99"
        },
        {
            "id": 28,
            "title": "Norwegian Wood",
            "genre": "Fiction",
            "author": "Haruki Murakami",
            "review": "A nostalgic and coming-of-age novel that explores love, loss, and the impact of the past on the present.",
            "price": "$17.50"
        },
        {
            "id": 29,
            "title": "The Kite Runner",
            "genre": "Fiction",
            "author": "Khaled Hosseini",
            "review": "Set in Afghanistan, this novel explores the complex relationships between friends and family against the backdrop of a changing nation.",
            "price": "$21.99"
        },
        {
            "id": 30,
            "title": "The Road",
            "genre": "Post-Apocalyptic Fiction",
            "author": "Cormac McCarthy",
            "review": "A father and son's journey through a post-apocalyptic world, exploring themes of survival, love, and the human condition.",
            "price": "$23.00"
        },
        {
            "id": 31,
            "title": "The Hobbit",
            "genre": "Fantasy",
            "author": "J.R.R. Tolkien",
            "review": "The classic tale of Bilbo Baggins, a hobbit who embarks on an epic journey to reclaim treasure guarded by the dragon Smaug.",
            "price": "$25.99"
        },
        {
            "id": 32,
            "title": "Harry Potter and the Philosopher's Stone",
            "genre": "Fantasy",
            "author": "J.K. Rowling",
            "review": "The start of the magical journey at Hogwarts School of Witchcraft and Wizardry as Harry Potter discovers his true identity and battles dark forces.",
            "price": "$19.95"
        },
        {
            "id": 33,
            "title": "The Name of the Wind",
            "genre": "Fantasy",
            "author": "Patrick Rothfuss",
            "review": "The autobiographical tale of Kvothe, a gifted musician and magician, as he recounts his life's adventures and the pursuit of knowledge.",
            "price": "$22.50"
        },
        {
            "id": 34,
            "title": "Mistborn: The Final Empire",
            "genre": "Fantasy",
            "author": "Brandon Sanderson",
            "review": "In a world ruled by the immortal Lord Ruler, a street thief named Vin discovers her magical abilities and joins a rebellion to overthrow the empire.",
            "price": "$24.99"
        },
        {
            "id": 35,
            "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "genre": "Fantasy",
            "author": "C.S. Lewis",
            "review": "The enchanting story of the Pevensie siblings who discover the magical land of Narnia and join the fight against the White Witch.",
            "price": "$18.50"
        },
        {
            "id": 36,
            "title": "A Game of Thrones",
            "genre": "Epic Fantasy",
            "author": "George R.R. Martin",
            "review": "The first book in the 'A Song of Ice and Fire' series, where noble families vie for control of the Iron Throne in the fictional land of Westeros.",
            "price": "$27.99"
        },
        {
            "id": 37,
            "title": "The Way of Kings",
            "genre": "Epic Fantasy",
            "author": "Brandon Sanderson",
            "review": "In the world of Roshar, where magical storms shape the land, different characters embark on epic journeys that will change the fate of their world.",
            "price": "$30.00"
        },
        {
            "id": 38,
            "title": "The Magicians",
            "genre": "Contemporary Fantasy",
            "author": "Lev Grossman",
            "review": "Quentin Coldwater discovers that the magical land he read about in childhood books is real, leading him to a magical academy and an adventure beyond imagination.",
            "price": "$21.95"
        },
        {
            "id": 39,
            "title": "Good Omens",
            "genre": "Fantasy",
            "author": "Neil Gaiman, Terry Pratchett",
            "review": "A humorous fantasy novel that follows an angel and a demon as they team up to prevent the apocalypse and save the world.",
            "price": "$25.99"
        },
        {
            "id": 40,
            "title": "The Fellowship of the Ring",
            "genre": "Fantasy",
            "author": "J.R.R. Tolkien",
            "review": "The first book in 'The Lord of the Rings' trilogy, as Frodo Baggins and his companions set out to destroy the One Ring and save Middle-earth.",
            "price": "$28.50"
        },
        {
            "id": 41,
            "title": "Dune",
            "genre": "Science Fiction",
            "author": "Frank Herbert",
            "review": "A sprawling epic set in a distant future where noble families control planets and a young hero, Paul Atreides, rises to power.",
            "price": "$32.99"
        },
        {
            "id": 42,
            "title": "Neuromancer",
            "genre": "Cyberpunk",
            "author": "William Gibson",
            "review": "Considered a cornerstone of cyberpunk literature, 'Neuromancer' follows a washed-up computer hacker hired for one last job in cyberspace.",
            "price": "$23.75"
        },
        {
            "id": 43,
            "title": "Ender's Game",
            "genre": "Science Fiction",
            "author": "Orson Scott Card",
            "review": "In a future where gifted children are trained to fight an alien threat, Ender Wiggin emerges as a strategic genius.",
            "price": "$26.99"
        },
        {
            "id": 44,
            "title": "The Hitchhiker's Guide to the Galaxy",
            "genre": "Comic Science Fiction",
            "author": "Douglas Adams",
            "review": "An entertaining and humorous space adventure that follows Arthur Dent as he travels through space after Earth's destruction.",
            "price": "$20.95"
        },
        {
            "id": 45,
            "title": "Snow Crash",
            "genre": "Cyberpunk",
            "author": "Neal Stephenson",
            "review": "In a near-future America, the protagonist, Hiro Protagonist, uncovers a virtual drug and a conspiracy that threatens reality.",
            "price": "$24.50"
        },
        {
            "id": 46,
            "title": "Foundation",
            "genre": "Science Fiction",
            "author": "Isaac Asimov",
            "review": "The first book in the Foundation series, exploring the decline and fall of a vast galactic empire and the scientific effort to shorten the ensuing dark age.",
            "price": "$29.99"
        },
        {
            "id": 47,
            "title": "Do Androids Dream of Electric Sheep?",
            "genre": "Science Fiction",
            "author": "Philip K. Dick",
            "review": "In a post-apocalyptic world, bounty hunter Rick Deckard hunts down androids, blurring the lines between humanity and artificial intelligence.",
            "price": "$27.00"
        },
        {
            "id": 48,
            "title": "The Left Hand of Darkness",
            "genre": "Science Fiction",
            "author": "Ursula K. Le Guin",
            "review": "A tale set on a planet where inhabitants can change gender, exploring themes of identity, friendship, and the human condition.",
            "price": "$22.95"
        },
        {
            "id": 49,
            "title": "Altered Carbon",
            "genre": "Cyberpunk",
            "author": "Richard K. Morgan",
            "review": "In a world where consciousness can be transferred between bodies, Takeshi Kovacs investigates a wealthy man's apparent suicide.",
            "price": "$31.50"
        },
        {
            "id": 50,
            "title": "Hyperion",
            "genre": "Science Fiction",
            "author": "Dan Simmons",
            "review": "A frame narrative that weaves together the stories of seven pilgrims on a journey through a distant future, each revealing their connection to the enigmatic planet Hyperion.",
            "price": "$34.99"
        },
        {
            "id": 51,
            "title": "The Girl with the Dragon Tattoo",
            "genre": "Thriller",
            "author": "Stieg Larsson",
            "review": "A gripping mystery that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a wealthy family's dark secrets.",
            "price": "$25.95"
        },
        {
            "id": 52,
            "title": "Gone Girl",
            "genre": "Psychological Thriller",
            "author": "Gillian Flynn",
            "review": "A psychological thriller that explores the complexities of marriage and deception after the disappearance of Amy Dunne on her fifth wedding anniversary.",
            "price": "$29.50"
        },
        {
            "id": 53,
            "title": "The Da Vinci Code",
            "genre": "Mystery Thriller",
            "author": "Dan Brown",
            "review": "A code-breaking adventure that follows symbologist Robert Langdon as he unravels cryptic clues while investigating a murder at the Louvre.",
            "price": "$28.75"
        },
        {
            "id": 54,
            "title": "The Silence of the Lambs",
            "genre": "Psychological Thriller",
            "author": "Thomas Harris",
            "review": "FBI trainee Clarice Starling seeks the help of the brilliant but insane Dr. Hannibal Lecter to catch a serial killer known as Buffalo Bill.",
            "price": "$26.00"
        },
        {
            "id": 55,
            "title": "The Bourne Identity",
            "genre": "Spy Thriller",
            "author": "Robert Ludlum",
            "review": "A fast-paced spy thriller that follows Jason Bourne as he discovers his true identity and becomes entangled in a dangerous conspiracy.",
            "price": "$18.99"
        },
        {
            "id": 56,
            "title": "The Silent Patient",
            "genre": "Psychological Thriller",
            "author": "Alex Michaelides",
            "review": "A psychological mystery involving a woman who shoots her husband and then stops speaking, leading a criminal psychotherapist to unravel the truth.",
            "price": "$15.50"
        },
        {
            "id": 57,
            "title": "Sharp Objects",
            "genre": "Mystery Thriller",
            "author": "Gillian Flynn",
            "review": "Journalist Camille Preaker returns to her hometown to cover the murder of two young girls, uncovering dark secrets about her own past.",
            "price": "$16.75"
        },
        {
            "id": 58,
            "title": "The Reversal",
            "genre": "Legal Thriller",
            "author": "Michael Connelly",
            "review": "A legal thriller featuring defense attorney Mickey Haller, who is recruited to prosecute a high-profile case involving a convicted child molester seeking to overturn his conviction.",
            "price": "$20.00"
        },
        {
            "id": 59,
            "title": "Before I Go to Sleep",
            "genre": "S.J. Watson",
            "author": "S.J. Watson",
            "review": "A psychological thriller about a woman with amnesia who wakes up each day with no memory, piecing together the truth about her past.",
            "price": "$22.99"
        },
        {
            "id": 60,
            "title": "The Girl on the Train",
            "genre": "Psychological Thriller",
            "author": "Paula Hawkins",
            "review": "A gripping psychological thriller centered around the lives of three women and the events that unfold during their daily commutes.",
            "price": "$14.95"
        }
    ]
];

function getRandomBookById() {
    const randomId = Math.floor(Math.random() * books.length) + 1;
    return books.find(book => book.id === randomId);
}

function displayBook(book) {
    const titleElement = document.getElementById('book-title');
    const detailsElement = document.getElementById('book-details');
    const priceElement = document.getElementById('book-price');

    titleElement.textContent = book.title;
    detailsElement.textContent = `Autor: ${book.author}\nGénero: ${book.genre}\nReseña: ${book.review}`;
    priceElement.textContent = `Precio: ${book.price}`;
}

// Función para generar un nuevo libro aleatorio y mostrarlo
function generateRandomBook() {
    const randomBook = getRandomBookById();
    displayBook(randomBook);
}

// Generar un libro aleatorio al cargar la página
generateRandomBook();

// Actualizar cada 24 horas (en milisegundos)
setInterval(generateRandomBook, 24 * 60 * 60 * 1000);