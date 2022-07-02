export const storeData = (data: string) => {
  localStorage.setItem("@storage_user", data);
};

export const getData = () => {
  return localStorage.getItem("@storage_user");
};

export const removeData = () => {
  localStorage.removeItem("@storage_user");
};
