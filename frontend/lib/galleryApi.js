import api from "./api";

export async function getGallery() {
  const response = await api.get("/gallery");

  return response.data;
}

export async function uploadGallery(formData) {
  const response = await api.post(
    "/gallery",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}