import React, { useState } from "react";

import Modal from "react-modal";

const Newbill = () => {
  

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="specialheading3">
      <button onClick={toggleModal}>Register</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div className="specialheading3">
          
          <p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            
            
            </div>
        <button onClick={toggleModal}>Register</button>
      </Modal>
    </div>
  );

  
  
//   const submitHandler = () => {};

//   return (
//     <form onSubmit = {submitHandler}>

// <div id="container2"></div><div class="specialheading3">Open modal
            
//             <button type="password">Open modal</button>

//         </div>
//         </form>
//   );


};

export default Newbill;
