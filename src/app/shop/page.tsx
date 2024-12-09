import React from 'react'
import Products from '../new-arrivals/page';
import ProductsList from '../product-list/page';
import HappyCustomers from '@/components/ourClients';

const Shop = () => (
    <main>
        <div>
            <Products />
        </div>
        <div>
            <ProductsList />
        </div>
        <div>
            <HappyCustomers/>
        </div>


    </main>
)

export default Shop;