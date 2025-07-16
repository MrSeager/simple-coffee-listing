import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

interface CLTopProps {
    setAvailableFilter: (availableFilter: boolean) => void
}

const CLTop: FC<CLTopProps> = ({ setAvailableFilter }) => {
    return (
        <Container className='cs-w cs-bg-vector text-center d-flex flex-column align-items-center gap-3 py-5'>
            <h1 className='cs-tc-one'>Our Collection</h1>
            <p className='cs-tc-two'>Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.</p>
            <ButtonGroup className='gap-3'>
                <Button onClick={() => setAvailableFilter(false)} className='cs-tc-one cs-transition border-0 rounded rounded-3 bg-transparent cs-btn'>All Products</Button>
                <Button onClick={() => setAvailableFilter(true)} className='cs-tc-one cs-transition border-0 rounded rounded-3 bg-transparent cs-btn'>Available Now</Button>
            </ButtonGroup>
        </Container>
    );
}

export default CLTop;