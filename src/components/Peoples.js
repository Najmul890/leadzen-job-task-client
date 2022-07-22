import React, { useEffect, useState } from 'react';

const Peoples = () => {
    const [peoples, setPeoples] = useState([]);
    const [url, setUrl] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);



    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(`https://swapi.dev/api/people?page=${page}`);
            const data = await res.json();
            const count = data.count;
            const pages = Math.ceil(count / 10);
            setPageCount(pages);
            setPeoples(data.results);
        }

        fetchData()

            .catch(console.error);;
    }, [page])



    return (
        <div>
            <h2>this is people {peoples[0]?.name} </h2>
            <div>
                <div className="btn btn-success">prev</div>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button onClick={() => setPage(number + 1)} className={page === number + 1 ? 'btn btn-warning ms-1' : 'btn btn-primary ms-1'} >{number + 1}</button>)
                }
                <div className="btn btn-success">Next</div>
            </div>
        </div>
    );
};

export default Peoples;