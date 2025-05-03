import { UserProfile } from "./userProfile";

const integratorUrl = process.env.INTEGRATOR_BASE_URL!;

export const getProfile = async (
  _: any,
  __: any,
  context: { token?: string },
): Promise<UserProfile> => {
  if (!context.token) {
    throw new Error("Missing authorization token");
  }

  const response = await fetch(`${integratorUrl}/auth/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching profile: ${response.statusText}`);
  }

  return (await response.json()) as UserProfile;
};

export default { getProfile };
