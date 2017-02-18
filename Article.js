import React, { PropTypes } from 'react';

const Article = React.createClass({
    propTypes: {
        author: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired
    },
    getInitialState() {
        return {
            visible: false
        };
    },
    readmoreClick(event) {
        event.preventDefault();
        this.setState({
            visible: true
        });
    },
    render() {
        const { author, bigText } = this.props;
        const { visible } = this.state;
        const text = this.props.children;

        return (
            <article className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {   visible ||
                    <a href="#" className='news__readmore' onClick={this.readmoreClick}>Подробнее</a>
                }
                {
                    visible &&
                    <p className='news__big-text'>{bigText}</p>
                }
            </article>
        );
    }
});

export default Article;