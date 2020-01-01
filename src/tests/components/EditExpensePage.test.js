import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

// let editExpense, removeExpense, history, wrapper;
let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    // removeExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            // removeExpense={removeExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history} 
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

// test('should handle removeExpense correctly', () => {
test('should handle startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    // expect(removeExpense).toHaveBeenCalledWith({ id: expenses[2].id });
    expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[2].id });
});