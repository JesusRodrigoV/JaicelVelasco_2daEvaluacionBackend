export interface UserProfile {
  id: number;
  email: string;
  nombre: string;
  biografia: string | null;
  role: number;
  two_factor_enabled: boolean;
}
