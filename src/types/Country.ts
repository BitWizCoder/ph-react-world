type Flags = {
  alt: string;
  svg: string;
  png: string;
};

type Name = {
  common: string;
  official: string;
};

type CountryType = {
  name: Name;
  capital: string[];
  flags: Flags;
  independent: boolean;
};

export type { CountryType };
