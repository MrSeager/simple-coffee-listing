import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Spinner, Image } from 'react-bootstrap';

interface coffeeItemProps {
    id: number,
    name: string,
    image: string,
    price: string,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean,
}

interface CoffeListProps {
    coffeeItems: coffeeItemProps[],
}

const CoffeList: FC<CoffeListProps> = ({ coffeeItems }) => {
    return (
        <Row className='cs-w-two mx-auto px-0'>
            {coffeeItems.length > 0 ? (
                coffeeItems.map((item, index) => (
                    <Col lg={4} md={6} xs={12}>
                        <Image fluid src={item.image} alt='coffee image' />
                    </Col>
                ))
            ) : <Spinner className='mx-auto my-5' animation="grow" variant="light" role='status' />}
        </Row>
    );
}

export default CoffeList;