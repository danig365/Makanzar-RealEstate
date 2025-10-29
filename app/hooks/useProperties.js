"use client";
import { useQuery } from "@tanstack/react-query";
import api from "../auth/api";


const fetchProperties = async (params = {}) => {
  const normalized = { ...params };

  if (Array.isArray(normalized.amenityKeys)) {
    normalized.amenityKeys = normalized.amenityKeys.join(",");
  }

  const { data } = await api.get("/properties", { params: normalized });
  return data;
};

export const useProperties = (params = {}, options) => {
  // keepPreviousData helps with paginated lists
  return useQuery({
    queryKey: ["properties", params],
    queryFn: () => fetchProperties(params),
    placeholderData: (prev) => prev, // v5 replacement for keepPreviousData
    ...options,
  });
};

// ✅ API call for single property by ID or slug
const fetchPropertyByIdOrSlug = async (idOrSlug, includeDeleted = false) => {
  const { data } = await api.get(`/properties/${idOrSlug}`, {
    params: { includeDeleted },
  });
  return data;
};

// ✅ React Query hook
export const useProperty = (idOrSlug, includeDeleted = false, options = {}) => {
  return useQuery({
    queryKey: ["property", idOrSlug, includeDeleted],
    queryFn: () => fetchPropertyByIdOrSlug(idOrSlug, includeDeleted),
    enabled: !!idOrSlug, // only runs when idOrSlug is available
    ...options,
  });
};
