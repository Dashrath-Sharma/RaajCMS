import React from 'react'
import ServiceHome from '../component/Service/ServiceHome'
import ServiceCheck from '../component/Service/ServiceCheck'
import NoTax from '../component/Service/NoTax'
import Serving from '../component/Service/Serving'
import NewBussiness from '../component/Service/NewBussiness'
const Service = () => {
    return (
        <div>
            <ServiceHome />
            <ServiceCheck />
            <NoTax />
            <Serving />
            <NewBussiness />
        </div>
    )
}

export default Service