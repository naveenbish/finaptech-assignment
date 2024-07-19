import { atom, atomFamily, selector, selectorFamily } from "recoil";

type Person = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  description: string;
};

let people: Person[] = [
  {
    id: 0,
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    description: "---",
  },
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "098-765-4321",
    description: "---",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobile: "555-555-5555",
    description: "---",
  },
];

export const inquiryTable = atom({
  key: "inquiryTable",
  default: people,
});
