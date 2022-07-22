import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import PeopleDetails from './PeopleDetails';

const People = ({ people }) => {
    const { name, gender, birth_year, url } = people;
    const [clickToDetail, setClickToDetail] = useState(false);

    const handleDetailBtn = () => {
        setClickToDetail(true);
    }

    return (
        <div>
            <Table striped bordered hover className='text-center' >
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{name}</td>
                        <td>{gender}</td>
                        <td>{birth_year}</td>
                        <td><button onClick={handleDetailBtn} className="btn btn-danger">Details</button></td>
                    </tr>


                </tbody>
            </Table>
            <div>
                {
                    clickToDetail && <PeopleDetails setClickToDetail={setClickToDetail} url={url} ></PeopleDetails>
                }
            </div>
        </div>
    );
};

export default People;