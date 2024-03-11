//@ts-nocheck

"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Image Picked yet</p>}
          {pickedImage && <Image  src={pickedImage} alt="image selected by user"/>}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            imageInputRef.current.click();
          }}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
