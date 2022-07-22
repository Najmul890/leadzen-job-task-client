import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import People from './People';

const Peoples = () => {
    const [peoples, setPeoples] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
    
    



    useEffect(() => {

        const fetchData = async () => {
            
            const res = await fetch(`https://swapi.dev/api/people?page=${page}`);
            const data = await res.json();
            const count = data.count;
            const pages = Math.ceil(count / 10);
            setTotalPage(pages);
            setPeoples(data.results);
            
        }

        fetchData()

            .catch(console.error);
    }, [page])


    const pageBtn = (number) => {
        setPage(number + 1);
        
    }

    const next = () => {
        if(page<totalPage){
            setPage(page+1);
        }
    }

    const previous = () => {
        if (page>1) {
            setPage(page-1);
        }
    }

    



    return (
        <div className='p-5' >
            <h2 className='text-danger text-center mb-3' >Leadzen</h2>

            <div>
                <h2 className="text-center mb-3">The info of peoples</h2>
                {
                    <Row className="g-4">
                        {
                            peoples.map((people, index) => <People key={index} people={people} ></People>)
                        }
                    </Row>
                }
            </div>
            <div className='p-5 text-center' >
                <div onClick={previous} className="btn btn-white">&lt;</div>
                {
                    [...Array(totalPage).keys()]
                        .map(number => <button key={number} onClick={() => pageBtn(number)} className={page === number + 1 ? 'btn btn-danger ms-1' : 'btn btn-white ms-1'} >{number + 1}</button>)
                }
                <button onClick={next} className="btn btn-white ms-1">&gt;</button>
            </div>
        </div>
    );
};

export default Peoples;