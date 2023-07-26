const wordsOfWisdomStart = 
    ["In ancient times cats were worshipped as gods; ",
        "Cats are inquisitive, ",
        "The only thing a cat worries about, ",
        "Cats have it all: ",
        "Cats are kindly masters, ",
        "Cats, like all pure creatures, ",
        "A cat understands how to be pleasant in the morning, ",
        "Cats are intended to teach us ",
        "You know how it is with cats: "
    ];

const wordsOfWisdomMid = 
    ["Cats are connoisseurs of comfort;",
        "admiration, an endless sleep, and company only when they want it,",
        "a cat will do what it wants when it wants,",
        "one cat just leads to another.",
        "what greater gift than the love of a cat?",
        "cats are connoisseurs of comfort,",
        "even the smallest feline is a work of art,",
        "cats never listen. They're dependable that way; when Rome burned, the emperor's cats still expected to be fed on time.",
        "one of the ways in which they show happiness is by sleeping."
    ];

const wordsOfWisdomEnd = 
    [" they draw the conclusion that they are God.",
        " the smallest feline is a masterpiece.",
        " cats rule the world.",
        " cats are practical.",
        " they have not forgotten this.",
        " Dogs eat. Cats dine.",
        " The wisdom of cats is infinitely superior.",
        " What greater gift than the love of a cat.",
        "Cats surpass dogs, easily."
    ];
    
    const wisdomLibrary = [wordsOfWisdomStart, wordsOfWisdomMid, wordsOfWisdomEnd];

function guessingGame() {
    let wisdom = "";
    for(let i = 0; i < 3; i++)
    {
        let quoteSelect = Math.floor(Math.random() * (10 - 0));
        wisdom += wisdomLibrary[i][quoteSelect];
    }
     
    console.log(wisdom);
}

guessingGame();