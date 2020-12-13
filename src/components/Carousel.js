import React from 'react';

import Card from './Card'


import habitat from '../assets/images/img0.jpg';
import circle from '../assets/images/img1.jpg';
import statera from '../assets/images/img2.jpg';
import { Container, Row } from 'react-bootstrap';





class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [

                {
                    id: 0,
                    title: 'Habitat',
                    subTitle: 'A productivity app for managing your tasks as well as collaborative ones.',
                    imgSrc: habitat,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Circle',
                    subTitle: 'An app to manage your social circles and relationships when life gets busy',
                    imgSrc: circle,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Statera',
                    subTitle: 'The only todo list you\'ll ever need',
                    imgSrc: statera,
                    link: '',
                    selected: false
                }

            ]

        }

    }

    handleCardClick = (id, card) => {
        let items = {...this.state.items};

        items(id).selected = items[id].selected ? false : true;

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
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
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