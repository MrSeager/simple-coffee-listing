import { FC, useState, useEffect } from 'react';
//Components
import './coffeeListingStyle.css';
import CLTop from './CLTop.tsx';
import CoffeList from './CoffeeList.tsx';
import { useScale } from './anim.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { animated } from '@react-spring/web';

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

const CoffeListingPage: FC = () => {
    const [coffeeItems, setCoffeeItems] = useState<coffeeItemProps[]>([]);
    const [filteredCoffeeItems, setFilteredCoffeeItems] = useState<coffeeItemProps[]>([]);
    const [availableFilter, setAvailableFilter] = useState<boolean>(false);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json').then((response) => {
          setCoffeeItems(response.data);
        });
    }, []);

    useEffect(() => {
        const filtered = availableFilter
            ? coffeeItems.filter(item => item.available)
            : coffeeItems;

        setFilteredCoffeeItems(filtered);
    }, [coffeeItems, availableFilter]);

    const blindsAnim = useScale(200);

    return (
        <Container fluid className='py-5 cs-max-w cs-bg-image shadow min-vh-100'>
                <animated.div
                    style={{ ...blindsAnim, transformOrigin: 'top' }}
                    className='container cs-bg-one cs-mt rounded rounded-3 py-5'
                >
                    <CLTop
                        setAvailableFilter={setAvailableFilter}
                    />
                    <CoffeList 
                        coffeeItems={filteredCoffeeItems}
                    />
                </animated.div>
        </Container>
    );
}

export default CoffeListingPage;
