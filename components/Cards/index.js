// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(articleObj) {
    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const byline = document.createElement('span');

    // set classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // set content
    headline.textContent = articleObj.headline;
    authorImg.src = articleObj.authorPhoto;
    byline.textContent = `By ${articleObj.authorName}`;

    // set structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(byline);
    imgContainer.appendChild(authorImg);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // select cards container
        const cardsContainer = document.querySelector('.cards-container');
        // get article arrays
        const articleContent = Object.entries(response.data.articles);
        // add a card for each article in each topic array
        articleContent.forEach(topic => {
            topic[1].forEach(article => {
                // create a new card
                const newCard = createCard(article);
                // set card data attr
                if (topic[0] === "node") newCard.dataset.topic = "node.js";
                else newCard.dataset.topic = topic[0];
                // add card to DOM
                cardsContainer.appendChild(newCard);
            })
        })
    })
    .catch(err => {
        console.log(err);
    })
    