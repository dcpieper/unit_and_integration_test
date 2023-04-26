import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add', () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4")
    const buttonAdd = container.getByTestId("operator-add")
    const buttonEqual = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract', () => {
    const button4 = container.getByTestId("number4");
    const button7 = container.getByTestId("number7")
    const buttonSubtract = container.getByTestId("operator-subtract")
    const buttonEqual = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply', () => {
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5")
    const buttonMultiply = container.getByTestId("operator-multiply")
    const buttonEqual = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide', () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1")
    const button7 = container.getByTestId("number7")
    const buttonDivide = container.getByTestId("operator-divide")
    const buttonEqual = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple numbers', () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('21')
  })

  it('should be able to chain multiple operators', () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1")
    const buttonAdd = container.getByTestId("operator-add")
    const buttonMultiply = container.getByTestId("operator-multiply")
    const runningTotal = container.getByTestId('running-total')
    const buttonEqual = container.getByTestId("operator-equals")
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button2)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('6')
  })

  it('should be able to clear running total without affecting the calculation', () => {
    const button2 = container.getByTestId("number2")
    const button1 = container.getByTestId("number1")
    const buttonAdd = container.getByTestId("operator-add")
    const buttonClear = container.getByTestId("clear")
    const buttonEqual = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonEqual)
    fireEvent.click(buttonClear)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('4')
  })
})


