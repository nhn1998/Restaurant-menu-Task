import { useEffect } from "react";


const DataItem = ({data,setModal}) => {

    const {name,img,description,category,details}=data;


    return (
        <div>

            <div className="card h-full bg-base-100 shadow-xl dark:bg-gray-800 dark:text-white ">
                
                <figure className=""><img src={img} alt="Shoes" className="h-72 "/></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{category}</h2>
                    <p className="text-justify">{description}</p>
                    <div onClick={()=>setModal(data)}  className="card-actions justify-end">
                        <button onClick={()=>window.my_modal_1.showModal()}  className="btn bg-green-200">Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DataItem;