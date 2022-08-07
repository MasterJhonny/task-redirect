import React, { useRef } from "react";
import { config } from "../../config";

const url = "https://i.postimg.cc/L8WsQc0n/horario.png";

function Schedule({ user }) {
  const useFile = useRef();
  const useImg = useRef();
  
  function hadleClick() {
    if (useFile.current.style.display === "none") {
      useFile.current.style.display = "block";
    } else {
      useFile.current.style.display = "none";
    }
  }
  
  function updateScheduleApi (file) {
    const API_URL = `${config.API_BASE_URL}users/schedule/${user.id}`;
    const formData = new FormData();
    formData.append("schedule", file);
    

    fetch(API_URL, {
      method: 'PATCH',
      body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Ups!, sucedio un error.', err)) 
  } 

  function loadImage() {
    console.log(user);
    const file = URL.createObjectURL(useFile.current.files[0]);
    useImg.current.src = file.toString();
    updateScheduleApi(useFile.current.files[0]);
  }

  return (
    <div className="main main-schedule">
      <h2 style={{ textAlign: 'center' }}>
        This is my Schedule{" "}
        <span className="btn btn-edit" onClick={hadleClick}>
          Editar horario
        </span>
      </h2>
      <input
        ref={useFile}
        style={{ display: "none" }}
        type="file"
        name="schedule"
        className="input"
        onChange={loadImage}
        accept='.jpg,.png'
      />
      <br />
      <picture className="img-container img-container-schedule">
        <img
          ref={useImg}
          className="img-schedule"
          src={user.schedule ? user.schedule : url}
          alt="image from horario"
        />
      </picture>
    </div>
  );
}

export { Schedule };
