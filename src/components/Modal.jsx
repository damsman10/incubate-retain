import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-sm">
        <h2 className="text-xl font-bold mb-4">Form Submitted Successfully!</h2>
        <p className="mb-6">You can return to home.</p>
        <Link to="/" onClick={onClose} className="block text-center">
          <button
            className="bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
