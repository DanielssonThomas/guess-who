"use client";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";

const PhotoBooth = (props: any) => {
  const webcamRef: any = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const capture = async () => {
    const canvas: any = await html2canvas(webcamRef.current.video);
    const dataUrl: any = canvas.toDataURL("image/png");
    setPhotoUrl(dataUrl);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" />
      <button onClick={capture}>Capture Photo</button>
      {photoUrl && <img src={photoUrl} alt="Captured" />}
    </div>
  );
};

export default PhotoBooth;
