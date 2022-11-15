import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />;

createRoot.render(element, document.body);

export const Contact = () => {
    return(
        <div className='container'>
            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
            <i className="fa-brands fa-linkedin"></i>
            </button>
            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
                Tooltip on right
            </button>
            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                Tooltip on bottom
            </button>
            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
                Tooltip on left
            </button>
      </div>
    )
}