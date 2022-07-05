import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ModalContext } from "../ModalProvider";

const winStatus = ({ win }: { win: boolean }) => {
  const { hideModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const goToMainMenu = () => {
    hideModal();
    // typescript shows error when assigning string to window.location
    window.location = "/" as any;
  };
  const reloadPage = () => {
    hideModal();
    window.location.reload();
  };
  const headerClass = win ? "green-text" : "red-text";
  return (
    <div>
      <h1 className={`modal-header ${headerClass}`}>
        {win ? "You won!" : "You lost!"}
      </h1>
      <p>{win ? "Congratulations..." : "Good luck next time"}</p>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={goToMainMenu} className="btn btn-outline-primary">
          Go To Main Menu
        </button>
        <button onClick={reloadPage} className="btn btn-outline-primary">
          Replay with another word
        </button>
      </div>
    </div>
  );
};

export default winStatus;
