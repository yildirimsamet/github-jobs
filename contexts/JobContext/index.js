import { createContext, useContext } from "react";
const JobContext = createContext();
export const JobProvider = JobContext.Provider;
export const useJob = () => useContext(JobContext);
