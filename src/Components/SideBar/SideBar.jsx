import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { cwppRemoveWidget, removeWidget , businessRemoveWidget} from '../../feature/slice';
import { cspmData } from '../../utils/cspm_Section_Data';
import { cwppData } from '../../utils/cwpp_Section_Data';
import { buisnessMatricesData } from '../../utils/buisness_matrices';


const Sidebar = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const initializeCheckboxes = (widgets, prefix) => {
    const checkboxes = {};
    widgets.forEach((_, index) => {
      checkboxes[`${prefix}${index}`] = true;
    });
    return checkboxes;
  };
  
  const [cspmCheckboxes, setCspmCheckboxes] = useState({});
  const [cwppCheckboxes, setCwppCheckboxes] = useState({});
  const [businessCheckboxes, setBusinessCheckboxes] = useState({});
  
  const CSPM_Widgets = useSelector((state) => state.widget.widgets);
  const CWPP_Widgets = useSelector((state) => state.widget.cwppWidgets);
  const Business_Widgets = useSelector((state) => state.widget.businessWidgets);
  
  useEffect(() => {
    setCspmCheckboxes(initializeCheckboxes(CSPM_Widgets, 'CSPM'));
  }, [CSPM_Widgets]);

  useEffect(() => {
    setCwppCheckboxes(initializeCheckboxes(CWPP_Widgets, 'CWPP'));
  }, [CWPP_Widgets]);

  useEffect(() => {
    setBusinessCheckboxes(initializeCheckboxes(Business_Widgets, 'Business'));
  }, [Business_Widgets]);

  const handleCheckboxChange = (event, index , name) => {
    const { id, checked } = event.target;
    if (name ==='cspm') {      
      dispatch(removeWidget(index))
      setCspmCheckboxes((prevState) => ({
        ...prevState,
        [id]: checked,
      }))
    }
    if (name ==='cwpp') {
      dispatch(cwppRemoveWidget(index))
      setCwppCheckboxes((prevState) => ({
        ...prevState,
        [id]: checked,
      }));
    }
    if (name ==='business') {
      dispatch(businessRemoveWidget(index))
      setBusinessCheckboxes((prevState) => ({
        ...prevState,
        [id]: checked,
      }));
 };
}

  const [activeTab, setActiveTab] = useState('CSPM');

  const renderContent = () => {
    switch (activeTab) {
      case 'CSPM':
        return (
          <div className="widget-list">
            {cspmData?.map((item, index) => (
              <label key={index} htmlFor={`CSPM${index}`}>
                <input
                  type="checkbox"
                  id={`CSPM${index}`}
                  checked={cspmCheckboxes[`CSPM${index}`] || false}
                  onChange={(e)=>handleCheckboxChange(e,index, 'cspm')}
                />
                {item?.title}
              </label>
            ))}
          </div>
        );

      case 'CWPP':
        return (
          <div className="widget-list">
            {cwppData.map((item, index) => (
              <label key={index} htmlFor={`CWPP${index}`}>
                <input
                  type="checkbox"
                  id={`CWPP${index}`}
                  checked={cwppCheckboxes[`CWPP${index}`] || false}
                  onChange={(e)=>handleCheckboxChange(e,index, 'cwpp')}
                />
                {item.title}
              </label>
            ))}
          </div>
        );

      case 'business':
        return (
          <div className="widget-list">
            {buisnessMatricesData.map((item, index) => (
              <label key={index} htmlFor={`Business${index}`}>
                <input
                  type="checkbox"
                  id={`Business${index}`}
                  checked={businessCheckboxes[`Business${index}`] || false}
                 onChange={(e)=>handleCheckboxChange(e,index, 'business')}
                />
                {item.title}
              </label>
            ))}
          </div>
        );

      case 'Ticket':
        return <div className="widget-list">Ticket Content</div>;

      default:
        return null;
    }
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <div className="sidebar-header">
        <h3>Add Widget</h3>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="sidebar-content">
        <p>Personalize your dashboard by adding the following widgets:</p>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'CSPM' ? 'active' : ''}`}
            onClick={() => setActiveTab('CSPM')}
          >
            CSPM
          </button>
          <button
            className={`tab ${activeTab === 'CWPP' ? 'active' : ''}`}
            onClick={() => setActiveTab('CWPP')}
          >
            CWPP
          </button>
          <button
            className={`tab ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Business
          </button>
          <button
            className={`tab ${activeTab === 'Ticket' ? 'active' : ''}`}
            onClick={() => setActiveTab('Ticket')}
          >
            Ticket
          </button>
        </div>

        <div>{renderContent()}</div>
      </div>

      <div className="sidebar-footer">
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <button className="confirm-btn" onClick={onClose}>Confirm</button>
      </div>
    </div>
  );
};

export default Sidebar;
