import React from 'react';
import News from './News';
import Comments from './Comments';
import Add from './Add';
import emitter from './emitter';

var myNews = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

const App = React.createClass({
    getInitialState: function () {
        return {
            news: myNews
        };
    },
    componentDidMount: function () {
        const self = this;
        emitter.on('News.add', function (item) {
            const nextNews = item.concat(self.state.news);
            self.setState({ news: nextNews });
        });
    },
    componentWillUnmount: function () {
        emitter.removeListener('News.add');
    },
    render() {
        return (
            <div className="app">
                <h3>News</h3>
                <Add />
                <News data={this.state.news} />
                <Comments />
            </div>
        );
    }
});

export default App;