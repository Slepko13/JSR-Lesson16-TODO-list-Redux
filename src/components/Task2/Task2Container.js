import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, handleChange, removeItem, doneItem, correctItem, handleCorrection } from '../redux/todoReducer';
import Task2 from './Task2';




const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(
    mapStateToProps,
    {
        addItem,
        handleChange,
        removeItem,
        doneItem,
        correctItem,
        handleCorrection
    })(Task2);