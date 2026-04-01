import { User, Product, Person, Config, AvailableColors, Address } from '../models/types';


export function updateUser(user: Partial<User>): void {
  console.log('Updated user:', user);
}


export function getProductSummary(product: Pick<Product, "id" | "name">): void {
  console.log('Product summary:', product);
}


export function getPublicPerson(person: Omit<Person, "socialSecurityNumber">): void {
  console.log('Public person:', person);
}


export function createConfig(config: Readonly<Config>): void {
  console.log('Config:', config);
  
}


export function createDictionary(data: Record<string, number>): void {
  console.log('Dictionary:', data);
}


export function setNonRedColor(color: Exclude<AvailableColors, "red">): void {
  console.log('Color (not red):', color);
}


export function setWarmColor(color: Extract<AvailableColors, "red" | "yellow">): void {
  console.log('Warm color:', color);
}


export function setAddress(address: NonNullable<Address>): void {
  console.log('Address:', address);
}
