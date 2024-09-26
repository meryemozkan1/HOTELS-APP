import axios from "axios";
import { PlaceData } from "../types";

//Base url'e sahip bir axios örneği oluştrduk

const api = axios.create({ baseURL: "http://localhost:4001" });

export type Params = {
  location: string;
  title: string;
  order: string;
};

//Bütün konaklama yerlerini getren

export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

//1 konaklama yerlerini getir
export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

//1 konaklama yerlerini sil
export const deletePlace = (id: number) => api.delete(`/api/place/${id}`);

//1 konaklama yerlerini oluştur

// 1 konaklama yerini oluştur
export const createPlace = (body: PlaceData) => api.post(`/api/places`, body);
