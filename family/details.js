import { findById } from '../utils.js';
import { fetchMember } from '../fetch-utils.js';

// console.log('is this details page working?');
const memberDetailContainer = document.getElementById('member-detail-container');
// eslint-disable-next-line space-before-function-paren
window.addEventListener('load', async () => {
    //     console.log(member);
    const params = new URLSearchParams(window.location.search);
    const member = await findById(params.get('id'));

    const name = document.getElementById('name');

    const age = document.getElementById('age');
    const funFact = document.getElementById('fun-fact');
    const hobbies = document.getElementById('hobbies');
    const dislikes = document.getElementById('dislikes');
    const favFood = document.getElementById('fav-food');
    const image = document.getElementById('member-image');

    name.textContent = member.name;
    name.id = member.id;
    age.textContent = `Age: ${member.age}`;
    funFact.textContent = member.funFact;
    hobbies.textContent = member.hobbies;
    dislikes.textContent = member.dislikes;
    favFood.textContent = member.favFood;
    image.src = member.image;

    const div = fetchMember(member);
    memberDetailContainer.append(div);
});
