import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addWidget, addCWPPWidget, addbuisnessWidget } from '../../../feature/slice';

import './addWidgetCard.css'
function AddWidgetCard({section}) {

  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState(null);
  const [paraText ,setParaText] = useState(null);
  const handleInputChange=(inputname ,e)=>{
    if (inputname==='name') {
      setName(e.target.value)
    }
    else{
      setParaText(e.target.value)
    }
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();

    if(section === 'CSPM'){
      dispatch(addWidget({title :name,paraText}))
    }
    else if(section === 'CWPP'){
      dispatch(addCWPPWidget({title :name,paraText}))
    }
    else if(section === 'buisness'){
      dispatch(addbuisnessWidget({title :name,paraText}))
    }

    setName(null)
    setParaText(null)
  };
  return (

    <>
      <div className='AddCard'>
        <div className='buttonContainer'>
            <div className='AddWidgetBtn'>
            <button className='btn' onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faPlus} className='iconPlus'/>
                Add Widget
            </button>
            </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='modalBackdrop'>
          <div className='modalContent'>
            <div className='navModal'>
              <button className='closeModalBtn' onClick={handleCloseModal}>
                &times; 
              </button>
              <h2 className='modalTitle'>Add New Widget</h2>
            </div>

            <form className='widgetForm' onSubmit={handleSubmit}>
              <div className='formGroup'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' className='inputField' value={name} onChange={(e)=>handleInputChange('name' ,e)} required/>
              </div>
              <div className='formGroup'>
                <label htmlFor='text'>Text</label>
                <textarea id='text' name='text' className='inputField' value={paraText} onChange={(e)=>handleInputChange('paratext' ,e)}  required></textarea>
              </div>
              <button type='submit' className='submitBtn'>Submit</button>
            </form>
          </div>
        </div>
      )}

    </>
  )
}

export default AddWidgetCard
