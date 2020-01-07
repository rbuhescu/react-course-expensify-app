import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // this.props.editExpense(this.props.expense.id, expense);
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        // this.props.removeExpense({ id: this.props.expense.id });
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
};

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    // editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    // removeExpense: (data) => dispatch(removeExpense(data))
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);