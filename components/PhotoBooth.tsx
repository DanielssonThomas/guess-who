"use client";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";

const PhotoBooth = (props: any) => {
  const webcamRef: any = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const capture = async (e: any) => {
    e.preventDefault();
    const canvas: any = await html2canvas(webcamRef.current.video);
    const dataUrl: any = canvas.toDataURL("image/png");
    setPhotoUrl(dataUrl);
  };

  return photoUrl === null ? (
    <div className="flex flex-col justify-center">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" />
      <button
        className="bg-orange-400 rounded px-4 py-2 text-white mb-2"
        onClick={capture}
      >
        Capture photo
      </button>
      {photoUrl && <img src={photoUrl} alt="Captured" />}
    </div>
  ) : (
    <div className="flex flex-col justify-center">
      {photoUrl && <img src={photoUrl} alt="Captured" />}
      <input type="hidden" value={photoUrl} name="user_image" required />
      <button
        className="bg-orange-400 rounded px-4 py-2 text-white mb-2"
        onClick={(e: any) => {
          setPhotoUrl(null);
          e.preventDefault();
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default PhotoBooth;
