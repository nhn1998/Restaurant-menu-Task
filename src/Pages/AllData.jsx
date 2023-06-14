import { useQuery } from "@tanstack/react-query";
import DataItem from "./DataItem";
import { useState } from "react";
import Modal from "./Modal";




const AllData = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [modal, setModal] = useState(null)

    const { data: allData, isLoading } = useQuery({
        queryKey: ['allData'],
        queryFn: () => fetch('FakeData.json')
            .then(res => res.json())
    })


    if (isLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    }
    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }
    const filteredList = () => {
        if (selectedCategory === 'All Items' || !selectedCategory) {
            return allData;
        }
        return allData.filter(item => item.category === selectedCategory)
    }

    const filter = filteredList()


    return (
        <div className="mx-5 lg:mx-20">
            <h1 className="mt-10 text-center font-bold text-4xl dark:text-white">Those Are The Foods We Make</h1>
            <div>

                <label htmlFor="countries" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">You Can Choose Item By these Category</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleCategoryChange}>
                    <option defaultValue="All Data">All Items</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Indian">Indian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Salad">Salad</option>
                    <option value="Italian">Italian</option>
                    <option value="Thai">Thai</option>
                    <option value="Chinese">Chinese</option>
                    <option value="British">British</option>
                    <option value="American">American</option>
                    <option value="Sandwich">Sandwich</option>
                </select>

            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    filter?.map(data => <DataItem key={data.id} data={data} setModal={setModal}></DataItem>)
                }

            </div>
            {
                modal && <Modal setModal={setModal} modal={modal}></Modal>
            }
        </div>
    );
};

export default AllData;