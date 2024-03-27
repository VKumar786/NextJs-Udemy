//@ts-nocheck

"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
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
          {pickedImage?.length > 0 && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept=".pdf"
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
