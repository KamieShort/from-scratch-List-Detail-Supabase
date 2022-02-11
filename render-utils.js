export function renderDetails(member) {
    const li = document.createElement('li');
    li.classList.add('member-list');
    const a = document.createElement('a');
    a.href = `/details/?id=${member.id}`;
    a.textContent = member.name;
    li.append(a);
    // console.log(a);
    return li;
}

// export function renderMemberDetails() {
//     const memberDetailContainer = document.createElement('member-detail-container');
//     const member = document.createElement('div');
//     const name = document.createElement('name');
//     name.id = member.name;
//     const age = document.createElement('age');
//     const funFact = document.createElement('fun-fact');
//     const hobbies = document.createElement('hobbies');
//     const dislikes = document.createElement('dislikes');
//     const favFood = document.createElement('fav-food');
//     const image = document.createElement('member-image');

//     name.textContent = member.name;

//     age.textContent = `Age: ${member.age}`;
//     funFact.textContent = `Fun Fact: ${member.fun_fact}`;
//     hobbies.textContent = `Hobbies: ${member.hobbies}`;
//     dislikes.textContent = `Dislikes: ${member.dislikes}`;
//     favFood.textContent = `Favorite Food: ${member.fav_food}`;
//     image.src = `../assets/${member.name}.jpeg`;

//     memberDetailContainer.append(name, age, funFact, hobbies, dislikes, favFood, image);
//     return member;
// }
