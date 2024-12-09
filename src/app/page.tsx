import HeroSection from '@/components/heroSection';
import React from 'react'
import NewArrivals from './new-arrivals/page';
import DressStyle from '@/components/dressStyle';
import ProductsList from './product-list/page';
import HappyCustomers from '@/components/ourClients';

const Mainpage = () => {
  return (
    <main>

      <div>
        {/* components/heroSection.tsx */}
        <HeroSection/>
      </div>

      <div>
        {/* app/new-arrivals */}
        {/* components/showNewArrivals.tsx */}
        <NewArrivals/>
      </div>

        {/* app/product-list */}
        {/* components/typingText.tsx */}
      <div>
        <ProductsList/>
      </div>

        {/* components/dressStyle.tsx */}
      <div>
        <DressStyle/>
      </div>

      {/* components/ourClients.tsx */}
      <div>
        <HappyCustomers/>
      </div>

    </main>
  )
}

export default Mainpage;