// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const cards = document.querySelectorAll('.card');
        response.data.topics.forEach(topic => {
            // create new tab
            const newTab = document.createElement('div');
            // set class
            newTab.classList.add('tab');
            // set content
            newTab.textContent = topic;
            // set data attr
            newTab.dataset.topic = topic;
            // add click event
            newTab.addEventListener('click', e => {
                cards.forEach(card => {
                    if (card.dataset.topic !== e.target.dataset.topic) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'flex';
                    }
                })
                
            })
            // add tab to DOM
            document.querySelector('.topics').appendChild(newTab);
        })
    })
