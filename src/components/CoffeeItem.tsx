import { FC, useState } from 'react';
//Components
import { useHover } from './anim.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Badge } from 'react-bootstrap';
//Icons
import { FaStar, FaRegStar } from "react-icons/fa";
//Spring
import { useSpring, animated } from '@react-spring/web';

interface itemProps {
    id: number,
    name: string,
    image: string,
    price: string,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean,
}

interface CoffeeItemProps {
    item: itemProps,
}

const CoffeeItem: FC<CoffeeItemProps> = ({ item }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const animHover = useHover(isHover, 1.05);

    return (
        <animated.div
            style={animHover}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} 
            className='user-select-none card border-0 bg-transparent position-relative'
        >
            <Card.Img 
                variant='top' 
                src={item.image} 
                alt='coffee image'
                className='rounded-3'
            />
            {item.popular === true 
                ? <Badge bg='custom' className='cs-tc-four cs-bg-badge rounded-pill mt-2 ms-2 px-3 py-2 position-absolute'>Polpular</Badge>
                : ''
            }
            <Card.Header className='border-0 px-0 d-flex flex-row align-items-center justify-content-between'>
                <Card.Title className='cs-tc-one cs-fw-700'>{item.name}</Card.Title>
                <Card.Subtitle className='cs-bg-price rounded px-2 py-1 cs-fw-700'>{item.price}</Card.Subtitle>
            </Card.Header>
            <Card.Body className='px-0 py-0 d-flex flex-row align-items-start justify-content-between'>
                {item.rating > 0 
                    ? 
                        <Card.Text className='cs-tc-one cs-fw-700 fs-5 d-flex flex-row align-items-center gap-1'>
                            <FaStar className='cs-tc-three' />
                            {item.rating}
                            <span className='cs-tc-two fs-6 fw-normal'>({item.votes} votes)</span>
                        </Card.Text>
                    : 
                        <Card.Text className='cs-tc-two cs-tc-one fs-5 d-flex flex-row align-items-center gap-1'>
                            <FaRegStar />
                            <span className='fs-6 fw-normal'>No ratings</span>
                        </Card.Text>
                }
                {item.available === false 
                    ? <Card.Text className='pt-1 cs-tc-three'>Sold Out</Card.Text>
                    : ''
                }
            </Card.Body>
        </animated.div>
    );
}

export default CoffeeItem;