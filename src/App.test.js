import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

// test('button has correct initial color and text', () => {
//   render(<App/>);
//   //find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'});
//   //expect the background color to be red
//   expect(colorButton).toHaveStyle({backgroundColor: 'red'})
// });


// test('button turns blue when clicked', ()  => {
//   render(<App/>);
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'});
//   expect(colorButton).toHaveStyle({backgroundColor: 'red'})
//   // click button
//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
//   //Expect the button text to be 'Change to red'
//   expect(colorButton.textContent).toBe('Change to red');

// })

// test('initial conditions', () => {
//   render(<App/>);
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'});
//   const checbox = screen.getByRole('checkbox', {name : 'Disable button'});
//   //check that the button starts out enabled
//   expect(colorButton).toBeEnabled();
//   //check that the checkbox starts out unchecked
//   expect(checbox).not.toBeChecked();
//   fireEvent.click(checbox);
//   expect(colorButton).toBeDisabled();
//   expect(checbox).toBeChecked();

// })

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () =>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letter', () =>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})

