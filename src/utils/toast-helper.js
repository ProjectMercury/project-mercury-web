import { css } from "glamor";
import { toast } from "react-toastify";

export const openNotifications = (array, history) => {
  let index = 0;
  console.log(index);
  if (array) {
    return notify;
  }

  function notify() {
    if (index !== array.length) {
      const id = array[index].formId;

      if (toast.isActive(id)) {
        return null;
      }

      toast.info(
        `${array[index].notification_count} new ${
          array[index].notification_count > 1 ? "people have " : "person has "
        }filled out ${array[index].form_title}`,
        {
          className: "toast",
          toastId: id,

          onClick: () => {
            history.push(`/forms/${id}`);
          },
          bodyClassName: css({
            fontSize: "0.9rem"
          })
        }
      );

      console.log(index);
      index++;
      return notify();
    } else index = 0;
  }
};
