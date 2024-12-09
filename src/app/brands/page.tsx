import React from 'react'
import Products from '../new-arrivals/page';
import ProductsList from '../product-list/page';
import DressStyle from '@/components/dressStyle';

const Brand = () => (
    <main>
        <div>
            <DressStyle/>
        </div>
        <div>
            <ProductsList />
        </div>
        <div>
            <Products />
        </div>
    </main>
)

export default Brand;