import React, { useState } from "react";
import Modal from "react-modal";

const Update = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>Edit Profile</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
          },
          content: {
            position: 'absolute',
            top: '50px',
            left: '400px',
            right: '400px',
            bottom: '0px',
            border: '0px solid #ccc',
            background: 'rgba(255, 255, 255, 0.0)',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0px',
            outline: 'none',
            padding: '0px',
          }
        }}>

      <div className="specialheading3">

        <p className="contactform">Update your account details</p>

        <p className="contactform">Current avatar:<br></br>
          <img src="https://picsum.photos/200" alt="something" /></p>

        <p className="contactform">Username
          <br></br><input onClick={("")} placeholder="Username" />
        </p>



        <p className="contactform">Email
          <br></br><input onClick={("")} placeholder="Email" />
        </p>

        <p className="contactform">Password
          <br></br><input onClick={("")} placeholder="Password" />
        </p>

        <p className="contactform">Custom avatar URL
          <br></br><input onClick={("")} placeholder="Custom avatar URL" />
        </p>


        <button onClick={toggleModal}>Submit</button>

      </div>
    </Modal>
    </div >
  );
};

export default Update;
