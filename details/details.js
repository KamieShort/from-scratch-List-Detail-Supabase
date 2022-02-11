// // import { findById } from '../utils.js';
import { fetchMember } from '../fetch-utils.js';

// console.log('is this details page working?');
// console.log(window.location);
// // eslint-disable-next-line space-before-function-paren
// // window.addEventListener('load', async () => {
// //     console.log(member);
async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    // console.log(id);
    const member = await fetchMember(id);
    // console.log(member);

    const memberDetailContainer = document.getElementById('member-detail-container');
    const name = document.getElementById('name');
    name.id = member.name;
    const age = document.getElementById('age');
    const funFact = document.getElementById('fun-fact');
    const hobbies = document.getElementById('hobbies');
    const dislikes = document.getElementById('dislikes');
    const favFood = document.getElementById('fav-food');
    const image = document.getElementById('member-image');

    name.textContent = member.name;

    age.textContent = `Age: ${member.age}`;
    funFact.textContent = `Fun Fact: ${member.fun_fact}`;
    hobbies.textContent = `Hobbies: ${member.hobbies}`;
    dislikes.textContent = `Dislikes: ${member.dislikes}`;
    favFood.textContent = `Favorite Food: ${member.fav_food}`;
    image.src = `../assets/${member.name}.jpeg`;

    const div = fetchMember(member);
    memberDetailContainer.append(div);
    console.log(member);
}
loadData();
