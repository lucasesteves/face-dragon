import { api } from "../../infra";
import * as T from "./types";

export const useRequest = () => {
  let error = "Something bad has happened";

  const getDragons = async () => {
    try {
      const response = await api.get("/dragon");
      return response.data;
    } catch (err) {
      return error;
    }
  };

  const getDragonsById = async (id: string) => {
    try {
      const response = await api.get(`/dragon/${id}`);
      return response.data;
    } catch (err) {
      return error;
    }
  };

  const createDragon = async (data: T.CreateDragon) => {
    try {
      await api.post("/dragon", data);
    } catch (err) {
      return error;
    }
  };

  const updateDragon = async (data: any, id: string) => {
    try {
      await api.put(`/dragon/${id}`, data);
    } catch (err) {
      return error;
    }
  };

  const deleteDragon = async (id: string) => {
    try {
      const response = await api.delete(`/dragon/${id}`);
      if (response) {
        return true;
      }
    } catch (err) {
      return error;
    }
  };

  return {
    getDragons,
    getDragonsById,
    createDragon,
    updateDragon,
    deleteDragon,
  };
};
