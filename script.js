const books = [
    { 
        id: "horror-01", 
        title: "The Shining by Stephen King", 
        image: "./img/horror/theshining.jpg",
        category: {
            genre: "Horror",
            id: "horror",
        },
        price: 19.99,
    },
    { 
        id: "horror-02", 
        title: "Dracula by Bram Stoker", 
        image: "./img/horror/dracula.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 15.99,
    },
    { 
        id: "horror-03", 
        title: "Psycho by Robert Bloch", 
        image: "./img/horror/psycho.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 14.95,
    },
    { 
        id: "horror-04", 
        title: "The Exorcist by William Peter Blatty", 
        image: "./img/horror/theexorcist.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 21.50,
    },
    { 
        id: "horror-05", 
        title: "Bird Box by Josh Malerman", 
        image: "./img/horror/birdbox.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 17.99,
    },
    { 
        id: "horror-06", 
        title: "The Haunting of Hill House by Shirley Jackson", 
        image: "./img/horror/thehauntingofhillhouse.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 18.75,
    },
    { 
        id: "horror-07", 
        title: "American Psycho by Bret Easton Ellis", 
        image: "./img/horror/AmericanPsycho.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 22.99,
    },
    { 
        id: "horror-08", 
        title: "It by Stephen King", 
        image: "./img/horror/it.png",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 20.00,
    },
    { 
        id: "horror-09", 
        title: "House of Leaves by Mark Z. Danielewski", 
        image: "./img/horror/houseofleaves.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 24.95,
    },
    { 
        id: "horror-10", 
        title: "Mexican Gothic by Silvia Moreno-Garcia", 
        image: "./img/horror/mexicangothic.jpg",
        category: {
            genero: "Horror",
            id: "horror",
        },
        price: 19.99,
    },
    { 
        id: "romance-11", 
        title: "Pride and Prejudice by Jane Austen", 
        image: "./img/romance/prideandprejudice.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 12.99,
    },
    { 
        id: "romance-12", 
        title: "Outlander by Diana Gabaldon", 
        image: "./img/romance/outlander.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 23.50,
    },
    { 
        id: "romance-13", 
        title: "The Notebook by Nicholas Sparks", 
        image: "./img/romance/thenotebook.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 14.95,
    },
    { 
        id: "romance-14", 
        title: "Me Before You by Jojo Moyes", 
        image: "./img/romance/mebeforeyou.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 16.99,
    },
    { 
        id: "romance-15", 
        title: "The Fault in Our Stars by John Green", 
        image: "./img/romance/thefaultinourstars.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 13.50,
    },
    { 
        id: "romance-16", 
        title: "Gone with the Wind by Margaret Mitchell", 
        image: "./img/romance/gonewiththewind.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 19.95,
    },
    { 
        id: "romance-17", 
        title: "Eleanor Oliphant Is Completely Fine by Gail Honeyman", 
        image: "./img/romance/eleanoroliphantiscompletelyfine.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 22.00,
    },
    { 
        id: "romance-18", 
        title: "Sense and Sensibility by Jane Austen", 
        image: "./img/romance/senseandsensibility.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 15.99,
    },
    { 
        id: "romance-19", 
        title: "The Hating Game by Sally Thorne", 
        image: "./img/romance/thehatinggame.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 17.75,
    },
    { 
        id: "romance-20", 
        title: "To All the Boys I've Loved Before by Jenny Han", 
        image: "./img/romance/ToAlltheBoysI'veLovedBefore.jpg",
        category: {
            genero: "Romance",
            id: "romance",
        },
        price: 14.99,
    },
    { 
        id: "fiction-21", 
        title: "The Great Gatsby by F. Scott Fitzgerald", 
        image: "./img/fiction/thegreatgatsby.webp",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 18.99,
    },
    { 
        id: "fiction-22", 
        title: "To Kill a Mockingbird by Harper Lee", 
        image: "./img/fiction/tokillamockingbird.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 15.50,
    },
    { 
        id: "fiction-23", 
        title: "1984 by George Orwell", 
        image: "./img/fiction/1984.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 16.75,
    },
    { 
        id: "fiction-24", 
        title: "Brave New World by Aldous Huxley", 
        image: "./img/fiction/bravenewworld.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 20.00,
    },
    { 
        id: "fiction-25", 
        title: "One Hundred Years of Solitude by Gabriel García Márquez", 
        image: "./img/fiction/OneHundredYearsofSolitude.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 22.99,
    },
    { 
        id: "fiction-26", 
        title: "The Catcher in the Rye by J.D. Salinger", 
        image: "./img/fiction/TheCatcherintheRye.webp",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 14.95,
    },
    { 
        id: "fiction-27", 
        title: "The Alchemist by Paulo Coelho", 
        image: "./img/fiction/TheAlchemist.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 19.99,
    },
    { 
        id: "fiction-28", 
        title: "Norwegian Wood by Haruki Murakami", 
        image: "./img/fiction/NorwegianWood.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 17.50,
    },
    { 
        id: "fiction-29", 
        title: "The Kite Runner by Khaled Hosseini", 
        image: "./img/thriller/TheKiteRunner.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 21.99,
    },
    { 
        id: "fiction-30", 
        title: "The Road by Cormac McCarthy", 
        image: "./img/fiction/TheRoad.jpg",
        category: {
            genero: "Fiction",
            id: "fiction",
        },
        price: 23.00,
    },
    { 
        id: "fantasy-31", 
        title: "The Hobbit by J.R.R. Tolkien", 
        image: "./img/fantasy/TheHobbit.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 25.99,
    },
    { 
        id: "fantasy-32", 
        title: "Harry Potter and the Philosopher's Stone by J.K. Rowling", 
        image: "./img/fantasy/HarryPotterandthePhilosopher'sStone.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 19.95,
    },
    { 
        id: "fantasy-33", 
        title: "The Name of the Wind by Patrick Rothfuss", 
        image: "./img/fantasy/TheNameoftheWind.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 22.50,
    },
    { 
        id: "fantasy-34", 
        title: "Mistborn: The Final Empire by Brandon Sanderson", 
        image: "./img/fantasy/MistbornTheFinalEmpire.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 24.99,
    },
    { 
        id: "fantasy-35", 
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe by C.S. Lewis", 
        image: "./img/fantasy/TheChroniclesOfNarniaThe LiontheWitchandtheWardrobe.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 18.50,
    },
    { 
        id: "fantasy-36", 
        title: "A Game of Thrones by George R.R. Martin", 
        image: "./img/fantasy/AGameofThrones.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 27.99,
    },
    { 
        id: "fantasy-37", 
        title: "The Way of Kings by Brandon Sanderson", 
        image: "./img/fantasy/TheWayofKings.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 30.00,
    },
    { 
        id: "fantasy-38", 
        title: "The Magicians by Lev Grossman", 
        image: "./img/fantasy/TheMagicians.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 21.95,
    },
    { 
        id: "fantasy-39", 
        title: "Good Omens by Neil Gaiman, Terry Pratchett", 
        image: "./img/fantasy/GoodOmens.jpg",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 25.99,
    },
    { 
        id: "fantasy-40", 
        title: "The Fellowship of the Ring by J.R.R. Tolkien", 
        image: "./img/thriller/TheFellowshipoftheRing.gif",
        category: {
            genero: "Fantasy",
            id: "fantasy",
        },
        price: 28.50,
    },
    { 
        id: "sciencefiction-41", 
        title: "Dune by Frank Herbert", 
        image: "./img/science fiction/Dune.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 32.99,
    },
    { 
        id: "sciencefiction-42", 
        title: "Neuromancer by William Gibson", 
        image: "./img/science fiction/Neuromancer.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 23.75,
    },
    { 
        id: "sciencefiction-43", 
        title: "Ender's Game by Orson Scott Card", 
        image: "./img/science fiction/Ender'sGame.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 26.99,
    },
    { 
        id: "sciencefiction-44", 
        title: "The Hitchhiker's Guide to the Galaxy by Douglas Adams", 
        image: "./img/science fiction/TheHitchhiker'sGuidetotheGalaxy.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 20.95,
    },
    { 
        id: "sciencefiction-45", 
        title: "Snow Crash by Neal Stephenson", 
        image: "./img/science fiction/SnowCrash.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 24.50,
    },
    { 
        id: "sciencefiction-46", 
        title: "Foundation by Isaac Asimov", 
        image: "./img/science fiction/Foundation.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 29.99,
    },
    { 
        id: "sciencefiction-47", 
        title: "Do Androids Dream of Electric Sheep? by Philip K. Dick", 
        image: "./img/science fiction/DoAndroidsDreamofElectricSheep.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 27.00,
    },
    { 
        id: "sciencefiction-48", 
        title: "The Left Hand of Darkness by Ursula K. Le Guin", 
        image: "./img/science fiction/TheLeftHandofDarkness.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 22.95,
    },
    { 
        id: "sciencefiction-49", 
        title: "Altered Carbon by Richard K. Morgan", 
        image: "./img/science fiction/AlteredCarbon.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 31.50,
    },
    { 
        id: "sciencefiction-50", 
        title: "Hyperion by Dan Simmons", 
        image: "./img/science fiction/Hyperion.jpg",
        category: {
            genero: "Science Fiction",
            id: "sciencefiction",
        },
        price: 34.99,
    },
    { 
        id: "thriller-51", 
        title: "The Girl with the Dragon Tattoo by Stieg Larsson", 
        image: "./img/thriller/TheGirlwiththeDragonTattoo.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 25.95,
    },
    { 
        id: "thriller-52", 
        title: "Gone Girl by Gillian Flynn", 
        image: "./img/thriller/GoneGirl.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 29.50,
    },
    { 
        id: "thriller-53", 
        title: "The Da Vinci Code by Dan Brown", 
        image: "./img/thriller/TheDaVinciCode.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 28.75,
    },
    { 
        id: "thriller-54", 
        title: "The Silence of the Lambs by Thomas Harris", 
        image: "./img/thriller/TheSilenceoftheLambs.png",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 26.00,
    },
    { 
        id: "thriller-55", 
        title: "The Bourne Identity by Robert Ludlum", 
        image: "./img/thriller/TheBourneIdentity.png",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 18.99,
    },
    { 
        id: "thriller-56", 
        title: "The Silent Patient by Alex Michaelides", 
        image: "./img/thriller/TheSilentPatient.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 15.50,
    },
    { 
        id: "thriller-57", 
        title: "Sharp Objects by Gillian Flynn", 
        image: "./img/thriller/SharpObjects.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 16.75,
    },
    { 
        id: "thriller-58", 
        title: "The Reversal by Michael Connelly", 
        image: "./img/thriller/TheReversal.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 20.00,
    },
    { 
        id: "thriller-59", 
        title: "Before I Go to Sleep by S.J. Watson", 
        image: "./img/thriller/BeforeIGotoSleep.jpg",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 22.99,
    },
    { 
        id: "thriller-60", 
        title: "The Girl on the Train by Paula Hawkins", 
        image: "./img/thriller/TheGirlontheTrain.png",
        category: {
            genero: "Thriller",
            id: "thriller",
        },
        price: 14.95,
    },
]

