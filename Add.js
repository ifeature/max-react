import React from 'react';
import ReactDOM from 'react-dom';
import emitter from './emitter';

const Add = React.createClass({
    getInitialState: function () {
        return {
            authorIsEmpty: true,
            textIsEmpty: true,
            btnIsDisabled: true
        };
    },
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onFieldChange: function (fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({ ['' + fieldName]: false })
        } else {
            this.setState({ ['' + fieldName]: true })
        }
    },
    onCheckRuleClick: function (e) {
        this.setState({ btnIsDisabled: !this.state.btnIsDisabled });
    },
    onBtnClickHandler: function (e) {
        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);

        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;

        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];

        emitter.emit('News.add', item);

        textEl.value = '';
        this.setState({ textIsEmpty: true });
    },
    render() {
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                />
                <textarea
                    className='add__text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                ></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}>
                    Добавить новость
                </button>
            </form>
        );
    }
});

export default Add;