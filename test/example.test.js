// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDetails, renderMemberDetails } from '../render-utils.js';

const test = QUnit.test;

test('renderFamily should return <li> with family info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="member-list"><a href="/details/?id=Amanda"></a><img src="../assets/undefined.jpeg"></li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDetails({
        id: 'Amanda',
        age: '34',
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderMemberDetails should return <li> with family info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><p id="undefined"></p><p>Age: 34</p><p>Fun Fact: undefined</p><p>Hobbies: undefined</p><p>Dislikes: undefined</p><p>Favorite Food: undefined</p><img src="../assets/undefined.jpeg"></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderMemberDetails({
        id: 'Amanda',
        age: '34',
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
