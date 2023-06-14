import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Search from './Search';
import { useQuery } from '@tanstack/react-query';


const SearchFood = () => {
    const [inputValue,setInputValue]=useState()
    const { data: data, isLoading } = useQuery({
        queryKey: ['allData'],
        queryFn: () => fetch('FakeData.json')
            .then(res => res.json())
    })
    if(isLoading){
        return <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    </div>
    }
    

    const getInputValue=(e)=>{
        const value=e.target.value;
        setInputValue(value)
    }
    const filterItem = () => {
        return data.filter(d => {
            if (typeof inputValue === 'undefined' || inputValue === '') {
                return d;
            } else {
                return d.name.toLowerCase().includes(inputValue.toLowerCase());
            }
        });
    };
    const item=filterItem()
    console.log(item)
    return (
        <div className='mt-10' style={{ fontFamily: 'Poppins' }}>
            <h1 className='text-4xl font-bold text-center dark:text-white'>You can search Food From Here</h1>
            <h1 className='text-4xl font-bold text-center dark:text-white'>What You want ?</h1>

            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative lg:mx-72 mt-10">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={getInputValue} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Food..." required/>
                        
                </div>
            </form>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:mx-20 mx-5 mt-20 gap-10'>
            {
                item?.map(d=><Search key={d.id} d={d}></Search>)
            }
        </div>
        
        </div>
    );
};

export default SearchFood;