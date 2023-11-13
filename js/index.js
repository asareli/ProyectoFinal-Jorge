const booksArray = [
    {
        id: "book-01",
        title: "The Shining",
        author: "Stephen King",
        image: "../img/theshining.jpg",
        review: "A chilling tale of a family isolated in a haunted hotel during the winter. As supernatural forces take hold, the psychological horror unfolds.",
        category: {
            genre: "Horror",
            id: "book",
        },
        price: 19.99
    },
    {
        id: "book-02",
        title: "Dracula",
        author: "Bram Stoker",
        image: "../img/dracula.jpg",
        review: "The classic novel that introduced Count Dracula, a vampire who terrorizes London. A tale of suspense, terror, and the battle between good and evil.",
        category: {
            genre: "Gothic Horror",
            id: "book",
        },
        price: 15.99
    },
    {
        id: "book-03",
        title: "Psycho",
        author: "Robert Bloch",
        image: "../img/psycho.jpg",
        review: "Norman Bates and his eerie motel take center stage in this psychological thriller, which inspired Alfred Hitchcock's iconic film.",
        category: {
            genre: "Thriller",
            id: "book",
        },
        price: 14.95
    },
    {
        id: "book-04",
        title: "The Exorcist",
        author: "William Peter Blatty",
        image: "../img/theexorcist.jpg",
        review: "A mother's desperate attempt to save her daughter from demonic possession becomes a harrowing battle between good and evil.",
        category: {
            genre: "Supernatural Horror",
            id: "book",
        },
        price: 21.50
    },
    {
        id: "book-05",
        title: "Bird Box",
        author: "Josh Malerman",
        image: "../img/birdbox.jpg",
        review: "In a world where mysterious creatures drive people to madness when seen, a mother and her children must navigate a blindfolded existence.",
        category: {
            genre: "Post-Apocalyptic Horror",
            id: "book",
        },
        price: 17.99
    },
    {
        id: "book-06",
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        image: "../img/thehauntingofhillhouse.jpg",
        review: "A group of people with paranormal experiences gather at the haunted Hill House, unleashing a series of unsettling events.",
        category: {
            genre: "Psychological Horror",
            id: "book",
        },
        price: 18.75
    },
    {
        id: "book-07",
        title: "American Psycho",
        author: "Bret Easton Ellis",
        image: "../img/AmericanPsycho.jpg",
        review: "A disturbing journey into the mind of Patrick Bateman, a wealthy and deranged New York City businessman with a taste for violence.",
        category: {
            genre: "Psychological Thriller",
            id: "book",
        },
        price: 22.99
    },
    {
        id: "book-08",
        title: "It",
        author: "Stephen King",
        image: "../img/it.png",
        review: "A group of friends confronts a malevolent entity that takes the form of Pennywise the Dancing Clown. A tale of childhood fears and the power of friendship.",
        category: {
            genre: "Horror",
            id: "book",
        },
        price: 20.00
    },
    {
        id: "book-09",
        title: "House of Leaves",
        author: "Mark Z. Danielewski",
        image: "../img/theexorcist.jpg",
        review: "A mind-bending narrative that explores a family's experience with a strange house, blending horror, mystery, and experimental storytelling.",
        category: {
            genre: "Experimental Horror",
            id: "book",
        },
        price: 24.95
    },
    {
        id: "book-10",
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        image: "../img/mexicangothic.jpg",
        review: "In 1950s Mexico, a socialite confronts supernatural horrors in a decaying mansion, uncovering family secrets and facing ancient evils.",
        category: {
            genre: "Gothic Horror",
            id: "book",
        },
        price: 19.99
    },
    {
        id: "book-11",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "../img/prideandprejudice.jpg",
        review: "A classic novel that explores the themes of love, class, and societal expectations through the spirited Elizabeth Bennet and the proud Mr. Darcy.",
        category: {
            genre: "Romance",
            id: "book",
        },
        price: 12.99
    },
    {
        id: "book-12",
        title: "Outlander",
        author: "Diana Gabaldon",
        image: "../img/outlander.jpg",
        review: "A time-traveling love story that follows Claire Randall, a nurse from the 1940s, who finds herself in 18th-century Scotland, where she meets Jamie Fraser.",
        category: {
            genre: "Historical Romance",
            id: "book",
        },
        price: 23.50
    },
    {
        id: "book-13",
        title: "The Notebook",
        author: "Nicholas Sparks",
        image: "../img/thenotebook.jpg",
        review: "A heartwarming tale of Noah and Allie, two people from different social classes who fall in love during the summer but face challenges that test their commitment.",
        category: {
            genre: "Contemporary Romance",
            id: "book",
        },
        price: 14.95
    },
    {
        id: "book-14",
        title: "Me Before You",
        author: "Jojo Moyes",
        image: "../img/mebeforeyou.jpg",
        review: "A poignant love story between Louisa Clark, a young woman who becomes a caregiver, and Will Traynor, a quadriplegic man, exploring themes of life and choice.",
        category: {
            genre: "Contemporary Romance",
            id: "book",
        },
        price: 16.99
    },
    {
        id: "book-15",
        title: "The Fault in Our Stars",
        author: "John Green",
        image: "../img/thefaultinourstars.jpg",
        review: "A heartwarming and heartbreaking story of two teenagers, Hazel Grace Lancaster and Augustus Waters, who meet at a cancer support group and embark on a journey of love and loss.",
        category: {
            genre: "Young Adult Romance",
            id: "book",
        },
        price: 13.50
    },
    {
        id: "book-16",
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        image: "../img/gonewiththewind.jpg",
        review: "Set against the backdrop of the American Civil War and Reconstruction era, Scarlett O'Hara and Rhett Butler's tumultuous love story unfolds in the South.",
        category: {
            genre: "Historical Romance",
            id: "book",
        },
        price: 19.95
    },
    {
        id: "book-17",
        title: "Eleanor Oliphant Is Completely Fine",
        author: "Gail Honeyman",
        image: "../img/eleanoroliphantiscompletelyfine.jpg",
        review: "A quirky and heartwarming tale of Eleanor Oliphant, a socially awkward woman, and her unexpected journey towards self-discovery and love.",
        category: {
            genre: "Contemporary Romance",
            id: "book",
        },
        price: 22.00
    },
    {
        id: "book-18",
        title: "Sense and Sensibility",
        author: "Jane Austen",
        image: "../img/senseandsensibility.jpg",
        review: "A classic exploration of love and societal expectations, focusing on the contrasting personalities of the Dashwood sisters, Elinor and Marianne.",
        category: {
            genre: "Romance",
            id: "book",
        },
        price: 15.99
    },
    {
        id: "book-19",
        title: "The Hating Game",
        author: "Sally Thorne",
        image: "../img/thehatinggame.jpg",
        review: "A delightful enemies-to-lovers office romance that follows Lucy Hutton and Joshua Templeman as they navigate workplace rivalry and unexpected attraction.",
        category: {
            genre: "Contemporary Romance",
            id: "book",
        },
        price: 17.75
    },
    {
        id: "book-20",
        title: "To All the Boys I've Loved Before",
        author: "Jenny Han",
        image: "../img/ToAlltheBoysI'veLovedBefore.jpg",
        review: "Lara Jean Covey's life takes a turn when her secret love letters are accidentally sent out, leading to unexpected romantic adventures and self-discovery.",
        category: {
            genre: "Young Adult Romance",
            id: "book",
        },
        price: 14.99
    },
    {
        id: "book-21",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "../img/thegreatgatsby.webp",
        review: "A story of wealth, love, and tragedy set in the Roaring Twenties, capturing the essence of the American Dream.",
        category: {
            genre: "Fiction",
            id: "book",
        },
        price: 18.99
    },
    {
        id: "book-22",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "../img/tokillamockingbird.jpg",
        review: "Set in the American South, this novel addresses issues of racial injustice and moral growth through the eyes of a young girl.",
        category: {
            genre: "Fiction",
            id: "book",
        },
        price: 15.50
    },
    {
        id: "book-23",
        title: "1984",
        author: "George Orwell",
        image: "../img/1984.jpg",
        review: "A dystopian novel that explores the dangers of totalitarianism and the erosion of truth and freedom.",
        category: {
            genre: "Dystopian Fiction",
            id: "book",
        },
        price: 16.75
    },
    {
        id: "book-24",
        title: "Brave New World",
        author: "Aldous Huxley",
        image: "../img/bravenewworld.jpg",
        review: "In a future society where people are engineered for specific roles, the novel explores the impact of advanced technology on human nature.",
        category: {
            genre: "Dystopian Fiction",
            id: "book",
        },
        price: 20.00
    },
    {
        id: "book-25",
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        image: "../img/OneHundredYearsofSolitude.jpg",
        review: "A multi-generational tale that blends magical elements with the reality of a small town, exploring the cyclical nature of history.",
        category: {
            genre: "Magical Realism",
            id: "book",
        },
        price: 22.99
    },
    {
        id: "book-26",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        image: "../img/TheCatcherintheRye.webp",
        review: "A classic novel that explores the struggles of adolescence and the search for identity.",
        category: {
            genre: "Fiction",
            id: "book",
        },
        price: 14.95
    },
    {
        id: "book-27",
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "../img/TheAlchemist.jpg",
        review: "Santiago's journey to discover his personal legend is a philosophical and allegorical tale about following one's dreams.",
        category: {
            genre: "Philosophical Fiction",
            id: "book",
        },
        price: 19.99
    },
    {
        id: "book-28",
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        image: "../img/NorwegianWood.jpg",
        review: "A nostalgic and coming-of-age novel that explores love, loss, and the impact of the past on the present.",
        category: {
            genre: "Fiction",
            id: "book",
        },
        price: 17.50
    },
    {
        id: "book-29",
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        image: "../img/TheKiteRunner.jpg",
        review: "Set in Afghanistan, this novel explores the complex relationships between friends and family against the backdrop of a changing nation.",
        category: {
            genre: "Fiction",
            id: "book",
        },
        price: 21.99
    },
    {
        id: "book-30",
        title: "The Road",
        author: "Cormac McCarthy",
        image: "../img/TheRoad.jpg",
        review: "A father and son's journey through a post-apocalyptic world, exploring themes of survival, love, and the human condition.",
        category: {
            genre: "Post-Apocalyptic Fiction",
            id: "book",
        },
        price: 23.00
    },
    {
        id: "book-31",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "../img/TheHobbit.jpg",
        review: "The classic tale of Bilbo Baggins, a hobbit who embarks on an epic journey to reclaim treasure guarded by the dragon Smaug.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 25.99
    },
    {
        id: "book-32",
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "../img/HarryPotterandthePhilosopher'sStone.jpg",
        review: "The start of the magical journey at Hogwarts School of Witchcraft and Wizardry as Harry Potter discovers his true identity and battles dark forces.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 19.95
    },
    {
        id: "book-33",
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        image: "../img/TheNameoftheWind.jpg",
        review: "The autobiographical tale of Kvothe, a gifted musician and magician, as he recounts his life's adventures and the pursuit of knowledge.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 22.50
    },
    {
        id: "book-34",
        title: "Mistborn: The Final Empire",
        author: "Fantasy",
        image: "../img/MistbornTheFinalEmpire.jpg",
        review: "Brandon Sanderson",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 24.99
    },
    {
        id: "book-35",
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        image: "../img/TheChroniclesOfNarniaThe LiontheWitchandtheWardrobe.jpg",
        review: "The enchanting story of the Pevensie siblings who discover the magical land of Narnia and join the fight against the White Witch.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 18.50
    },
    {
        id: "book-36",
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        image: "../img/AGameofThrones.jpg",
        review: "The first book in the 'A Song of Ice and Fire' series, where noble families vie for control of the Iron Throne in the fictional land of Westeros.",
        category: {
            genre: "Epic Fantasy",
            id: "book",
        },
        price: 27.99
    },
    {
        id: "book-37",
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        image: "../img/TheWayofKings.jpg",
        review: "In the world of Roshar, where magical storms shape the land, different characters embark on epic journeys that will change the fate of their world.",
        category: {
            genre: "Epic Fantasy",
            id: "book",
        },
        price: 30.00
    },
    {
        id: "book-38",
        title: "The Magicians",
        author: "Lev Grossman",
        image: "../img/TheMagicians.jpg",
        review: "Quentin Coldwater discovers that the magical land he read about in childhood books is real, leading him to a magical academy and an adventure beyond imagination.",
        category: {
            genre: "Contemporary Fantasy",
            id: "book",
        },
        price: 21.95
    },
    {
        id: "book-39",
        title: "Good Omens",
        author: "Neil Gaiman, Terry Pratchett",
        image: "../img/GoodOmens.jpg",
        review: "A humorous fantasy novel that follows an angel and a demon as they team up to prevent the apocalypse and save the world.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 25.99
    },
    {
        id: "book-40",
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        image: "../img/TheFellowshipoftheRing.gif",
        review: "The first book in 'The Lord of the Rings' trilogy, as Frodo Baggins and his companions set out to destroy the One Ring and save Middle-earth.",
        category: {
            genre: "Fantasy",
            id: "book",
        },
        price: 28.50
    },
    {
        id: "book-41",
        title: "Dune",
        author: "Frank Herbert",
        image: "../img/TheFellowshipoftheRing.gif",
        review: "A sprawling epic set in a distant future where noble families control planets and a young hero, Paul Atreides, rises to power.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 32.99
    },
    {
        id: "book-42",
        title: "Neuromancer",
        author: "William Gibson",
        image: "../img/Neuromancer.jpg",
        review: "Considered a cornerstone of cyberpunk literature, 'Neuromancer' follows a washed-up computer hacker hired for one last job in cyberspace.",
        category: {
            genre: "Cyberpunk",
            id: "book",
        },
        price: 23.75
    },
    {
        id: "book-43",
        title: "Ender's Game",
        author: "Orson Scott Card",
        image: "../img/Ender'sGame.jpg",
        review: "In a future where gifted children are trained to fight an alien threat, Ender Wiggin emerges as a strategic genius.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 26.99
    },
    {
        id: "book-44",
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        image: "../img/TheHitchhiker'sGuidetotheGalaxy.jpg",
        review: "An entertaining and humorous space adventure that follows Arthur Dent as he travels through space after Earth's destruction.",
        category: {
            genre: "Comic Science Fiction",
            id: "book",
        },
        price: 20.95
    },
    {
        id: "book-45",
        title: "Snow Crash",
        author: "Neal Stephenson",
        image: "../img/SnowCrash.jpg",
        review: "In a near-future America, the protagonist, Hiro Protagonist, uncovers a virtual drug and a conspiracy that threatens reality.",
        category: {
            genre: "Cyberpunk",
            id: "book",
        },
        price: 24.50
    },
    {
        id: "book-46",
        title: "Foundation",
        author: "Isaac Asimov",
        image: "../img/Foundation.jpg",
        review: "The first book in the Foundation series, exploring the decline and fall of a vast galactic empire and the scientific effort to shorten the ensuing dark age.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 29.99
    },
    {
        id: "book-47",
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        image: "../img/DoAndroidsDreamofElectricSheep.jpg",
        review: "In a post-apocalyptic world, bounty hunter Rick Deckard hunts down androids, blurring the lines between humanity and artificial intelligence.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 27.00
    },
    {
        id: "book-48",
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        image: "../img/TheLeftHandofDarkness.jpg",
        review: "A tale set on a planet where inhabitants can change gender, exploring themes of identity, friendship, and the human condition.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 22.95
    },
    {
        id: "book-49",
        title: "Altered Carbon",
        author: "Richard K. Morgan",
        image: "../img/AlteredCarbon.jpg",
        review: "In a world where consciousness can be transferred between bodies, Takeshi Kovacs investigates a wealthy man's apparent suicide.",
        category: {
            genre: "Cyberpunk",
            id: "book",
        },
        price: 31.50
    },
    {
        id: "book-50",
        title: "Hyperion",
        author: "Dan Simmons",
        image: "../img/Hyperion.jpg",
        review: "A frame narrative that weaves together the stories of seven pilgrims on a journey through a distant future, each revealing their connection to the enigmatic planet Hyperion.",
        category: {
            genre: "Science Fiction",
            id: "book",
        },
        price: 34.99
    },
];

const containerBooks = document.querySelector("#books-container");

function loadBooks(books) {
    books.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = `
            <img class="book-image" src="${product.image}" alt="${product.title}">
            <div class="book-details">
                <h3 class="book-title">${product.title}</h3>
                <p class="book-author">${product.price}</p>
                <p class="book-review">"${product.review}"</p>
                <p class="book-price">${product.price}</p>
                <button class="book-add" id="${product.id}">Add to cart</button>

            </div>
        `;
        booksContainer.append(div);
    })
}