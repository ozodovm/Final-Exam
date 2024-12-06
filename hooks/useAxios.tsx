"use client";

import axios from "axios";
import { useContext, useMemo } from "react";
import { Context } from "@/context/Context";

export const useAxios = () => {
    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(Context);

    const api = useMemo(() => {
        const instance = axios.create({
            baseURL: "http://3.125.43.204:7777/v1",
        });

        // Attach Authorization header if accessToken exists
        if (accessToken) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }

        // Request interceptor
        instance.interceptors.request.use(
            (config) => config,
            (error) => {
                console.error('Request error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor for token refresh and error handling
        instance.interceptors.response.use(
            (response) => response, // Pass through successful responses
            async (error) => {
                // Token refresh handling if 401 status code (Unauthorized)
                if (error.response?.status === 401 && refreshToken) {
                    try {
                        const refreshResponse = await instance.get(`/token/${refreshToken}`);
                        const newAccessToken = refreshResponse.data.access_token;
                        setAccessToken(newAccessToken);
                        setRefreshToken(refreshResponse.data.refresh_token);

                        // Retry the original request with the new token
                        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return instance(error.config);
                    } catch (refreshError) {
                        console.error('Failed to refresh token:', refreshError);
                        return Promise.reject(refreshError);
                    }
                }

                // Handle other error statuses (like 400, 500)
                if (error.response) {
                    console.error('Response error:', error.response.data);
                    console.error('Status:', error.response.status);
                    console.error('Headers:', error.response.headers);
                    // Optionally, show a user-friendly error message
                    if (error.response.status === 400) {
                        alert('Bad Request: Please check your input.');
                    } else if (error.response.status === 500) {
                        alert('Server error: Please try again later.');
                    }
                } else {
                    console.error('Network error or no response:', error.message);
                    alert('Network error or no response from the server.');
                }

                return Promise.reject(error);
            }
        );

        return instance;
    }, [accessToken, refreshToken, setAccessToken, setRefreshToken]);

    return api;
};
