const Modal = ({modal}) => {
console.log(modal)
    return (
        <div><dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-medium text-lg"><span className="font-bold mr-1">Item Name:</span>  {modal.name}</h3>
          <h3 className=" text-lg"><span className="font-bold mr-1">Ingredients:</span>{modal.ingredients}</h3>
          <p className="py-4"><span className="font-bold">Time:</span> It take {modal.time} mins to cook</p>
          <div className="modal-action">
      
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
        </div>
    );
};

export default Modal;