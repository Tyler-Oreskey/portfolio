import React, { useState, useEffect, useCallback } from "react";

import classes from "./Toast.module.css";

const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => setList(toastList), [toastList, list]);

  const deleteToast = useCallback(
    (id) => {
      const index = list.findIndex((item) => item.id === id);
      list.splice(index, 1);
      setList([...list]);
    },
    [list]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [deleteToast, list.length, toastList.length]);

  const listedToast = list.map((toast, i) => (
    <div
      key={i}
      className={[classes.Notification, classes.Toast, classes[position]].join(
        " "
      )}
      style={{ backgroundColor: toast.backgroundColor }}
    >
      <button onClick={() => deleteToast(i)}>X</button>
      <div className={classes.NotificationImage}>
        <img src={toast.icon} alt="" />
      </div>
      <div>
        <p className={classes.NotificationTitle}>{toast.type}</p>
        <p className={classes.NotificationMessage}>{toast.message}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div
        className={[classes.NotificationContainer, classes[position]].join(" ")}
      >
        {listedToast}
      </div>
      {props.children}
    </>
  );
};

export default Toast;
