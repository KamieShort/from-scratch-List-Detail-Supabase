export function renderDetails(member) {
    const li = document.createElement('li');
    li.classList.add('member-list');
    const a = document.createElement('a');
    const image = document.createElement('img');
    a.href = `/details/?id=${member.id}`;
    image.src = `../assets/${member.name}.jpeg`;
    a.textContent = member.name;
    li.append(a, image);
    // console.log(a);
    return li;
}

export function renderMemberDetails(person) {
    // const div = document.createElement('div');
    const member = document.createElement('div');
    const name = document.createElement('p');
    name.id = member.name;
    const age = document.createElement('p');
    const funFact = document.createElement('p');
    const hobbies = document.createElement('p');
    const dislikes = document.createElement('p');
    const favFood = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = person.name;

    age.textContent = `Age: ${person.age}`;
    funFact.textContent = `Fun Fact: ${person.fun_fact}`;
    hobbies.textContent = `Hobbies: ${person.hobbies}`;
    dislikes.textContent = `Dislikes: ${person.dislikes}`;
    favFood.textContent = `Favorite Food: ${person.fav_food}`;
    image.src = `../assets/${person.name}.jpeg`;

    member.append(name, age, funFact, hobbies, dislikes, favFood, image);
    return member;
}
