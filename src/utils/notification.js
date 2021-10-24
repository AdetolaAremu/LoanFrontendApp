import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message, style) => {
  switch (style) {
    case 'error':
      toast.error(message)
      break
    case 'success':
      toast.success(message)
      break
    case 'warning':
      toast.warning(message)
      break
    default:
      toast.info(message)
  }
}