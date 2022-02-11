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
