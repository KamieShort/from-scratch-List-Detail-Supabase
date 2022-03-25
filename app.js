// import functions and grab DOM elements
import { fetchFamily } from './fetch-utils.js';
import { renderDetails } from './render-utils.js';

const familyList = document.getElementById('family-list');
// set event listeners
// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    const members = await fetchFamily();
    // eslint-disable-next-line no-console
    console.log(members);

    for (let member of members) {
        const li = renderDetails(member);
        familyList.append(li);
    }
});
