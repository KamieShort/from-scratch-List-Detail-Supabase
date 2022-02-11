export function renderDetails(member) {
    const li = document.createElement('li');
    li.classList.add('member-link');
    const a = document.createElement('a');
    a.href = `/details/?id=${member.id}`;
    a.textContent = member.name;
    li.append(a);
    return li;
}
