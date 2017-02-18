import React, { PropTypes } from 'react';
import Article from './Article';

const News = React.createClass({
    propTypes: {
        data: PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    render() {
        const { data } = this.props;
        let newsTemplate;
        
        if (data.length > 0) {
            newsTemplate = data.map((item, index) => {
                const { text, ...other } = item;
                return (<Article key={index} {...other}>{text}</Article>);
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>;
        }
        return (
            <section className="news">
                { newsTemplate }
                { data.length > 0 &&
                    <strong className="news__count">Всего новостей: {data.length}</strong>
                }
            </section>
        );
    }
});

export default News;