import type { AxiosError } from "axios";
import axios from "axios";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const sendContactForm = async (
  data: ContactFormData
): Promise<ContactResponse> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/contact`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: false, // set true only if backend uses cookies/sessions
      }
    );
    // console.log("Contact form sent successfully:", response);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Failed to send contact form"
    );
  }
};
