import { toast } from "react-toastify";

const Toast = (msg, type = "success", autoClose = 2500) =>
  toast[type](msg, {
    position: "bottom-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export default Toast;
