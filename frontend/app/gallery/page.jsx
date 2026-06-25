"use client";

import { useEffect, useState } from "react";
import {
  getGallery,
  uploadGallery,
} from "@/lib/galleryApi";

export default function GalleryAdmin() {

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [gallery, setGallery] = useState([]);

  async function loadGallery() {
    const data = await getGallery();
    setGallery(data);
  }

  useEffect(() => {
    loadGallery();
  }, []);

  async function handleUpload(e) {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", file);

    await uploadGallery(formData);

    setTitle("");
    setFile(null);
    setPreview("");

    loadGallery();
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Gallery Management
      </h1>

      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-xl shadow mb-8"
      >

        <input
          type="text"
          placeholder="Image Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e)=>{

            const selected =
              e.target.files[0];

            setFile(selected);

            setPreview(
              URL.createObjectURL(selected)
            );

          }}
        />

        {preview && (

          <img
            src={preview}
            alt="preview"
            className="h-48 mt-4 rounded"
          />

        )}

        <button
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Upload
        </button>

      </form>

      <div className="grid md:grid-cols-3 gap-6">

        {gallery.map((item)=>(
          <div
            key={item._id}
            className="bg-white rounded-xl shadow p-4"
          >

            <img
              src={`http://localhost:5000/uploads/${item.imageUrl}`}
              alt={item.title}
              className="h-48 w-full object-cover rounded"
            />

            <h3 className="font-semibold mt-3">
              {item.title}
            </h3>

          </div>
        ))}

      </div>

    </div>
  );
}