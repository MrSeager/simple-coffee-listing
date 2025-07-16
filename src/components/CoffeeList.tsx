import { FC } from 'react';
//Components
import CoffeeItem from './CoffeeItem.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Spinner } from 'react-bootstrap';

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
                    <Col index={index} lg={4} md={6} xs={12} className='px-3 py-2'>
                        <CoffeeItem
                            item={item}
                        />
                    </Col>
                ))
            ) : <Spinner className='mx-auto my-5' animation="grow" variant="light" role='status' />}
        </Row>
    );
}

export default CoffeList;