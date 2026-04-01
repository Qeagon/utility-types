export type User = {
  id: number;
  name: string;
  age: number;
  email: string;
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type Person = {
  name: string;
  age: number;
  socialSecurityNumber: string;
}

export type Config = {
  apiKey: string;
  baseUrl: string;
  timeout: number;
}

export type AvailableColors = "red" | "green" | "blue" | "yellow";

export type Address = string | null | undefined;