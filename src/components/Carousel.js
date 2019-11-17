import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Reddit-Clone',
                    subTitle: 'Created a full-stack reddit clone',
                    imgSrc: devgrub,
                    link: 'https://github.com/dinoshanr/Back-end-Reddit/tree/master',
                    selected: false
                },
                {
                    id: 1,
                    title: 'ToDoApp',
                    subTitle: 'Created a to do-app using React',
                    imgSrc: youtube,
                    link: 'https://github.com/dinoshanr/ToDoApp',
                    selected: false
                },
                {
                    id: 2,
                    title: 'YouTube Clone',
                    subTitle: 'Created YouTube clone specifially for simple learning',
                    imgSrc: evverest,
                    link: 'https://github.com/dinoshanr/YouTube-Clone',//put link here
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
