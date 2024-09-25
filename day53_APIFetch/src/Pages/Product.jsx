import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const arr = [
        {
            id: 'MERN001',
            course_name: 'Mern_Stack', price: '1000',
            duration: '5 Month'
        },
        {
            id: 'JAVA002',
            course_name: 'java full Stack', price: '20000', duration: '5 Month'
        },
        {
            id: 'PY003',
            course_name: 'Python',
            price: '40000',
            duration: '5 Month'
        },
        {
            id: 'DOT004',
            course_name: 'Dot Net',
            price: '100',
            duration: '5 Month'
        }

    ]
    return (

        <div>
            <ul>
                {arr.map((data) => <div key={data.id}>
                    <li><Link to={`/course/${data.id}`}>{data.course_name}</Link></li>

                </div>)}
            </ul>
        </div>
    )
}

export default Product