"use client";

import { useState } from "react";

import { uploadGallery }
from "@/lib/galleryApi";

export default function GalleryAdmin() {

  const [title, setTitle] =
    useState("");

  const [file, setFile] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function submit(e) {

    e.preventDefault();

    if (!file) return;

    try {

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "image",
        file
      );

      await uploadGallery(
        formData
      );

      setMessage(
        "Upload successful"
      );

      setTitle("");

      setPreview("");

      setFile(null);

    }

    catch {

      setMessage(
        "Upload failed"
      );

    }

  }

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">

        Gallery Upload

      </h1>

      <form

        onSubmit={submit}

        className="space-y-4"

      >

        <input

          type="text"

          placeholder="Title"

          value={title}

          onChange={(e)=>

            setTitle(
              e.target.value
            )

          }

          className="border p-3 w-full"

        />

        <input

          type="file"

          accept="image/*"

          onChange={(e)=>{

            const selected =

             e.target.files[0];

            setFile(selected);

            setPreview(

              URL.createObjectURL(

                selected

              )

            );

          }}

        />

        {preview && (

          <img

            src={preview}

            alt="preview"

            className="h-56 rounded"

          />

        )}

        <button

          className="bg-black text-white px-6 py-3 rounded"

        >

          Upload

        </button>

        <p>

          {message}

        </p>

      </form>

    </div>

  );

}