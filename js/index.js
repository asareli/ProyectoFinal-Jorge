const books = [
    { id: 1, title: "The Shining", author: "Stephen King", genre: "Horror", image: "./img/horror/theshining.jpg", review: "A chilling tale of a family isolated in a haunted hotel during the winter. As supernatural forces take hold, the psychological horror unfolds.", price: "$19.99" },
    { id: 2, title: "Dracula", author: "Bram Stoker", genre: "Gothic Horror", image: "./img/horror/dracula.jpg", review: "The classic novel that introduced Count Dracula, a vampire who terrorizes London. A tale of suspense, terror, and the battle between good and evil.", price: "$15.99" },
    { id: 3, title: "Psycho", author: "Robert Bloch", genre: "Thriller", image: "./img/horror/psycho.jpg", review: "Norman Bates and his eerie motel take center stage in this psychological thriller, which inspired Alfred Hitchcock's iconic film.", price: "$14.95" },
    { id: 4, title: "The Exorcist", author: "William Peter Blatty", genre: "Supernatural Horror", image: "./img/horror/theexorcist.jpg", review: "A mother's desperate attempt to save her daughter from demonic possession becomes a harrowing battle between good and evil.", price: "$21.50" },
    { id: 5, title: "Bird Box", author: "Josh Malerman", genre: "Post-Apocalyptic Horror", image: "./img/horror/birdbox.jpg", review: "In a world where mysterious creatures drive people to madness when seen, a mother and her children must navigate a blindfolded existence.", price: "$17.99" },
    { id: 6, title: "The Haunting of Hill House", author: "Shirley Jackson", genre: "Psychological Horror", image: "./img/horror/thehauntingofhillhouse.jpg", review: "A group of people with paranormal experiences gather at the haunted Hill House, unleashing a series of unsettling events.", price: "$18.75" },
    { id: 7, title: "American Psycho", author: "Bret Easton Ellis", genre: "Psychological Thriller", image: "./img/horror/AmericanPsycho.jpg", review: "A disturbing journey into the mind of Patrick Bateman, a wealthy and deranged New York City businessman with a taste for violence.", price: "$22.99" },
    { id: 8, title: "It", author: "Stephen King", genre: "Horror", image: "./img/horror/it.png", review: "A group of friends confronts a malevolent entity that takes the form of Pennywise the Dancing Clown. A tale of childhood fears and the power of friendship.", price: "$20.00" },
    { id: 9, title: "House of Leaves", author: "Mark Z. Danielewski", genre: "Experimental Horror", image: "./img/horror/houseofleaves.jpg", review: "A mind-bending narrative that explores a family's experience with a strange house, blending horror, mystery, and experimental storytelling.", price: "$24.95" },
    { id: 10, title: "Mexican Gothic", author: "Silvia Moreno-Garcia", genre: "Gothic Horror", image: "./img/horror/mexicangothic.jpg", review: "In 1950s Mexico, a socialite confronts supernatural horrors in a decaying mansion, uncovering family secrets and facing ancient evils.", price: "$19.99" },
    { id: 11, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", image: "./img/romance/prideandprejudice.jpg", review: "A classic novel that explores the themes of love, class, and societal expectations through the spirited Elizabeth Bennet and the proud Mr. Darcy.", price: "$12.99" },
    { id: 12, title: "Outlander", author: "Diana Gabaldon", genre: "Historical Romance", image: "./img/romance/outlander.jpg", review: "A time-traveling love story that follows Claire Randall, a nurse from the 1940s, who finds herself in 18th-century Scotland, where she meets Jamie Fraser.", price: "$23.50" },
    { id: 13, title: "The Notebook", author: "Nicholas Sparks", genre: "Contemporary Romance", image: "./img/romance/thenotebook.jpg", review: "A heartwarming tale of Noah and Allie, two people from different social classes who fall in love during the summer but face challenges that test their commitment.", price: "$14.95" },
    { id: 14, title: "Me Before You", author: "Jojo Moyes", genre: "Contemporary Romance", image: "./img/romance/mebeforeyou.jpg", review: "A poignant love story between Louisa Clark, a young woman who becomes a caregiver, and Will Traynor, a quadriplegic man, exploring themes of life and choice.", price: "$16.99" },
    { id: 15, title: "The Fault in Our Stars", author: "John Green", genre: "Young Adult Romance", image: "./img/romance/thefaultinourstars.jpg", review: "A heartwarming and heartbreaking story of two teenagers, Hazel Grace Lancaster and Augustus Waters, who meet at a cancer support group and embark on a journey of love and loss.", price: "$13.50" },
    { id: 16, title: "Gone with the Wind", author: "Margaret Mitchell", genre: "Historical Romance", image: "./img/romance/gonewiththewind.jpg", review: "Set against the backdrop of the American Civil War and Reconstruction era, Scarlett O'Hara and Rhett Butler's tumultuous love story unfolds in the South.", price: "$19.95" },
    { id: 17, title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", genre: "Contemporary Romance", image: "./img/romance/eleanoroliphantiscompletelyfine.jpg", review: "A quirky and heartwarming tale of Eleanor Oliphant, a socially awkward woman, and her unexpected journey towards self-discovery and love.", price: "$22.00" },
    { id: 18, title: "Sense and Sensibility", author: "Jane Austen", genre: "Romance", image: "./img/romance/senseandsensibility.jpg", review: "A classic exploration of love and societal expectations, focusing on the contrasting personalities of the Dashwood sisters, Elinor and Marianne.", price: "$15.99" },
    { id: 19, title: "The Hating Game", author: "Sally Thorne", genre: "Contemporary Romance", image: "./img/romance/thehatinggame.jpg", review: "A delightful enemies-to-lovers office romance that follows Lucy Hutton and Joshua Templeman as they navigate workplace rivalry and unexpected attraction.", price: "$17.75" },
    { id: 20, title: "To All the Boys I've Loved Before", author: "Jenny Han", genre: "Young Adult Romance", image: "./img/romance/ToAlltheBoysI'veLovedBefore.jpg", review: "Lara Jean Covey's life takes a turn when her secret love letters are accidentally sent out, leading to unexpected romantic adventures and self-discovery.", price: "$14.99" },
    { id: 21, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", image: "./img/fiction/thegreatgatsby.webp", review: "A story of wealth, love, and tragedy set in the Roaring Twenties, capturing the essence of the American Dream.", price: "$18.99" },
    { id: 22, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", image: "./img/fiction/tokillamockingbird.jpg", review: "Set in the American South, this novel addresses issues of racial injustice and moral growth through the eyes of a young girl.", price: "$15.50" },
    { id: 23, title: "1984", author: "George Orwell", genre: "Dystopian Fiction", image: "./img/fiction/1984.jpg", review: "A dystopian novel that explores the dangers of totalitarianism and the erosion of truth and freedom.", price: "$16.75" },
    { id: 24, title: "Brave New World", author: "Aldous Huxley", genre: "Fiction", image: "./img/fiction/bravenewworld.jpg", review: "In a future society where people are engineered for specific roles, the novel explores the impact of advanced technology on human nature.", price: "$20.00" },
    { id: 25, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Fiction", image: "./img/fiction/OneHundredYearsofSolitude.jpg", review: "A multi-generational tale that blends magical elements with the reality of a small town, exploring the cyclical nature of history.", price: "$22.99" },
    { id: 26, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", image: "./img/fiction/TheCatcherintheRye.webp", review: "A classic novel that explores the struggles of adolescence and the search for identity.", price: "$14.95" },
    { id: 27, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", image: "./img/fiction/TheAlchemist.jpg", review: "Santiago's journey to discover his personal legend is a philosophical and allegorical tale about following one's dreams.", price: "$19.99" },
    { id: 28, title: "Norwegian Wood", author: "Haruki Murakami", genre: "Fiction", image: "./img/fiction/NorwegianWood.jpg", review: "A nostalgic and coming-of-age novel that explores love, loss, and the impact of the past on the present.", price: "$17.50" },
    { id: 29, title: "The Kite Runner", author: "Khaled Hosseini", genre: "Fiction", image: "./img/thriller/TheKiteRunner.jpg", review: "Set in Afghanistan, this novel explores the complex relationships between friends and family against the backdrop of a changing nation.", price: "$21.99" },
    { id: 30, title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic Fiction", image: "./img/fiction/TheRoad.jpg", review: "A father and son's journey through a post-apocalyptic world, exploring themes of survival, love, and the human condition.", price: "$23.00" },
    { id: 31, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", image: "./img/fantasy/TheHobbit.jpg", review: "The classic tale of Bilbo Baggins, a hobbit who embarks on an epic journey to reclaim treasure guarded by the dragon Smaug.", price: "$25.99" },
    { id: 32, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", image: "./img/fantasy/HarryPotterandthePhilosopher'sStone.jpg", review: "The start of the magical journey at Hogwarts School of Witchcraft and Wizardry as Harry Potter discovers his true identity and battles dark forces.", price: "$19.95" },
    { id: 33, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", image: "./img/fantasy/TheNameoftheWind.jpg", review: "The autobiographical tale of Kvothe, a gifted musician and magician, as he recounts his life's adventures and the pursuit of knowledge.", price: "22.50" },
    { id: 34, title: "Mistborn: The Final Empire", author: "Brandon Sanderson", genre: "Fantasy", image: "./img/fantasy/MistbornTheFinalEmpire.jpg", review: "In a world ruled by the immortal Lord Ruler, a street thief named Vin discovers her magical abilities and joins a rebellion to overthrow the empire.", price: "$24.99" },
    { id: 35, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", genre: "Fantasy", image: "./img/fantasy/TheChroniclesOfNarniaThe LiontheWitchandtheWardrobe.jpg", review: "The enchanting story of the Pevensie siblings who discover the magical land of Narnia and join the fight against the White Witch.", price: "$18.50" },
    { id: 36, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Epic Fantasy", image: "./img/fantasy/AGameofThrones.jpg", review: "The first book in the 'A Song of Ice and Fire' series, where noble families vie for control of the Iron Throne in the fictional land of Westeros.", price: "$27.99" },
    { id: 37, title: "The Way of Kings", author: "Brandon Sanderson", genre: "Epic Fantasy", image: "./img/fantasy/TheWayofKings.jpg", review: "In the world of Roshar, where magical storms shape the land, different characters embark on epic journeys that will change the fate of their world.", price: "$30.00" },
    { id: 38, title: "The Magicians", author: "Lev Grossman", genre: "Contemporary Fantasy", image: "./img/fantasy/TheMagicians.jpg", review: "Quentin Coldwater discovers that the magical land he read about in childhood books is real, leading him to a magical academy and an adventure beyond imagination.", price: "$21.95" },
    { id: 39, title: "Good Omens", author: "Neil Gaiman, Terry Pratchett", genre: "Fantasy", image: "./img/fantasy/GoodOmens.jpg", review: "A humorous fantasy novel that follows an angel and a demon as they team up to prevent the apocalypse and save the world.", price: "$25.99" },
    { id: 40, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "Fantasy", image: "./img/thriller/TheFellowshipoftheRing.gif", review: "The first book in 'The Lord of the Rings' trilogy, as Frodo Baggins and his companions set out to destroy the One Ring and save Middle-earth.", price: "$28.50" },
    { id: 41, title: "Dune", author: "Frank Herbert", genre: "Science Fiction", image: "./img/science fiction/Dune.jpg", review: "A sprawling epic set in a distant future where noble families control planets and a young hero, Paul Atreides, rises to power.", price: "$32.99" },
    { id: 42, title: "Neuromancer", author: "William Gibson", genre: "Cyberpunk", image: "./img/science fiction/Neuromancer.jpg", review: "Considered a cornerstone of cyberpunk literature, 'Neuromancer' follows a washed-up computer hacker hired for one last job in cyberspace.", price: "23.75" },
    { id: 43, title: "Ender's Game", author: "Orson Scott Card", genre: "Science Fiction", image: "./img/science fiction/Ender'sGame.jpg", review: "In a future where gifted children are trained to fight an alien threat, Ender Wiggin emerges as a strategic genius.", price: "$26.99" },
    { id: 44, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Comic Science Fiction", image: "./img/science fiction/TheHitchhiker'sGuidetotheGalaxy.jpg", review: "An entertaining and humorous space adventure that follows Arthur Dent as he travels through space after Earth's destruction.", price: "$20.95" },
    { id: 45, title: "Snow Crash", author: "Neal Stephenson", genre: "Cyberpunk", image: "./img/science fiction/SnowCrash.jpg", review: "In a near-future America, the protagonist, Hiro Protagonist, uncovers a virtual drug and a conspiracy that threatens reality.", price: "$24.50" },
    { id: 46, title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction", image: "./img/science fiction/Foundation.jpg", review: "The first book in the Foundation series, exploring the decline and fall of a vast galactic empire and the scientific effort to shorten the ensuing dark age.", price: "$29.99" },
    { id: 47, title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", genre: "Science Fiction", image: "./img/science fiction/DoAndroidsDreamofElectricSheep.jpg", review: "In a post-apocalyptic world, bounty hunter Rick Deckard hunts down androids, blurring the lines between humanity and artificial intelligence.", price: "$27.00" },
    { id: 48, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Science Fiction", image: "./img/science fiction/TheLeftHandofDarkness.jpg", review: "A tale set on a planet where inhabitants can change gender, exploring themes of identity, friendship, and the human condition.", price: "$22.95" },
    { id: 49, title: "Altered Carbon", author: "Richard K. Morgan", genre: "Cyberpunk", image: "./img/science fiction/AlteredCarbon.jpg", review: "In a world where consciousness can be transferred between bodies, Takeshi Kovacs investigates a wealthy man's apparent suicide.", price: "$31.50" },
    { id: 50, title: "Hyperion", author: "Dan Simmons", genre: "Science Fiction", image: "./img/science fiction/Hyperion.jpg", review: "A frame narrative that weaves together the stories of seven pilgrims on a journey through a distant future, each revealing their connection to the enigmatic planet Hyperion.", price: "34.99" },
    { id: 51, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Thriller", image: "./img/thriller/TheGirlwiththeDragonTattoo.jpg", review: "A gripping mystery that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a wealthy family's dark secrets.", price: "$25.95" },
    { id: 52, title: "Gone Girl", author: "Gillian Flynn", genre: "Psychological Thriller", image: "./img/thriller/GoneGirl.jpg", review: "A psychological thriller that explores the complexities of marriage and deception after the disappearance of Amy Dunne on her fifth wedding anniversary.", price: "$29.50" },
    { id: 53, title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery Thriller", image: "./img/thriller/TheDaVinciCode.jpg", review: "A code-breaking adventure that follows symbologist Robert Langdon as he unravels cryptic clues while investigating a murder at the Louvre.", price: "$28.75" },
    { id: 54, title: "The Silence of the Lambs", author: "Thomas Harris", genre: "Psychological Thriller", image: "./img/thriller/TheSilenceoftheLambs.png", review: "FBI trainee Clarice Starling seeks the help of the brilliant but insane Dr. Hannibal Lecter to catch a serial killer known as Buffalo Bill.", price: "$26.00" },
    { id: 55, title: "The Bourne Identity", author: "Robert Ludlum", genre: "Spy Thriller", image: "./img/thriller/TheBourneIdentity.png", review: "A fast-paced spy thriller that follows Jason Bourne as he discovers his true identity and becomes entangled in a dangerous conspiracy.", price: "$18.99" },
    { id: 56, title: "The Silent Patient", author: "Alex Michaelides", genre: "Psychological Thriller", image: "./img/thriller/TheSilentPatient.jpg", review: "A psychological mystery involving a woman who shoots her husband and then stops speaking, leading a criminal psychotherapist to unravel the truth.", price: "$15.50" },
    { id: 57, title: "Sharp Objects", author: "Gillian Flynn", genre: "Mystery Thriller", image: "./img/thriller/SharpObjects.jpg", review: "Journalist Camille Preaker returns to her hometown to cover the murder of two young girls, uncovering dark secrets about her own past.", price: "$16.75" },
    { id: 58, title: "The Reversal", author: "Michael Connelly", genre: "Legal Thriller", image: "./img/thriller/TheReversal.jpg", review: "A legal thriller featuring defense attorney Mickey Haller, who is recruited to prosecute a high-profile case involving a convicted child molester seeking to overturn his conviction.", price: "$20.00" },
    { id: 59, title: "Before I Go to Sleep", author: "S.J. Watson", genre: "S.J. Watson", image: "./img/thriller/BeforeIGotoSleep.jpg", review: "A psychological thriller about a woman with amnesia who wakes up each day with no memory, piecing together the truth about her past.", price: "$22.99" },
    { id: 60, title: "The Girl on the Train", author: "Paula Hawkins", genre: "Psychological Thriller", image: "./img/thriller/TheGirlontheTrain.png", review: "A gripping psychological thriller centered around the lives of three women and the events that unfold during their daily commutes.", price: "$14.95" },
]
/* funcion para buscar los libros en el array */
function searchBooks() {
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    searchByGenre(searchTerm);
}

function searchByGenre(searchTerm) {
    document.getElementById("searchResults").innerHTML = "";

    books.forEach(book => {
        if (book.genre.toLowerCase().includes(searchTerm)) {
            const div = document.createElement("div");
            div.classList.add("book-result");
            div.innerHTML = `
                <img class="imagepreview" src=${book.image}>
                <h3>Title: ${book.title}</h3> 
                <p>Author: ${book.author}</p> 
                <small>Review: ${book.review}</small> 
                <p>Price: ${book.price}</p>
            `;
            document.getElementById("searchResults").appendChild(div);
        }
    });

    if (document.querySelectorAll('.book-result').length === 0) {
        alert(`There are no matches with that word..."${searchTerm}".`);
    }
}
/* funcion para generar un libro aleatorio en la parte recommendation of the day (no pude solucionar el problema de las imágenes aún. espero comentarios al respecto :) ) */
function getRandomBookById() {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
}
function displayBook(book) {
    const div = document.createElement("div");
            div.classList.add("bookRecommendation");
            div.innerHTML = `<img class="imagepreview" src=${book.image}>
                <h3>Title: ${book.title}</h3> 
                <p>Author: ${book.author}</p> 
                <small>Review: ${book.review}</small> 
                <p>Price: ${book.price}</p>`;
    bookRecommendation.appendChild(div);
}

function generateRandomBook() {
    const randomBook = getRandomBookById();
    displayBook(randomBook);
}

generateRandomBook();

setInterval(generateRandomBook, 24 * 60 * 60 * 1000);

