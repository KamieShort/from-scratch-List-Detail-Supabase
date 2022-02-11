// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDetails } from '../utils.js';

const test = QUnit.test;

test('renderFamily should return <li> with family info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li id="family-list"></li>`;

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

// skip('renderDetails should return <li> with detail info', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<ul id="family-list"></ul>`;

//     //Act
//     // Call the function you're testing and set the result to a const
//     const actual = renderDetails({
//         id: 'Amanda',
//         age: '34',
//     });
//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });
