import React from 'react';
import PricingOption from '../PricingOptino/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free',price:0, benefits:[
            'lifetime free',
            'unlimited deals',
            'localized deals'
        ]},
        {id:2, name: 'Regular',price:9.99,
        benefits:[
            'Regular free',
            'unlimited deals',
            'localized deals'
        ]},
        {id:3, name: 'premium',price:19.99,
        benefits:[
            'premium deals',
            'unlimited deals',
            'localized deals'
        ]}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, odio beatae? Voluptate, animi quidem maiores tenetur voluptatem ipsa tempore ullam?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
               {
                   pricingOptions.map(option => <PricingOption
                   key={option.id}
                   option={option}
                   ></PricingOption>)
               } 
            </div>
        </div>
    );
};

export default Pricing;