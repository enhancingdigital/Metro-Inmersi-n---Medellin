
export interface ServicePlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  maxArea?: number;
  popular?: boolean;
}

export interface HostingOption {
  months: number;
  price: number;
}

export interface Addon {
  name: string;
  price: number;
  description: string;
}
