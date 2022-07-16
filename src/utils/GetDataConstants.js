import { BUSINESS_TYPE, CITIES, PROPERTY_TYPE } from "./../constants/data";

export const getPropertyTypeLabel = (id) => {
  return PROPERTY_TYPE[id] || "-";
};

export const getBusinessTypeLabel = (id) => {
  return BUSINESS_TYPE[id] || "-";
};

export const getCityZoneLabel = (idCity, idZone) => {
    const cityObject = CITIES[idCity] || { city: '', zones: {} } ;
    const zoneValue = cityObject.zones[idZone] || "";
    return `${zoneValue}, ${cityObject.city}`;
};
