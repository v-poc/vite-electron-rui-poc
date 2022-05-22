import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import todoMock from "./todo";

export const setupMock = () => {
  console.log("setupMock");
  createProdMockServer([...todoMock]);
};
