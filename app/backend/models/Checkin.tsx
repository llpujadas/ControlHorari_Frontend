export type Checkin = {
  checkinType: keyof typeof CheckinType;
  timestamp: string;
  latitud: string;
  longitud: string;
  deviceInfo: string;
};

export type CheckinDto = {
  userId: number;
  checkinType: keyof typeof CheckinType;
  latitud: string;
  longitud: string;
  deviceInfo: string;
};

export const enum CheckinType {
  "ENTRADA" = "ENTRADA",
  "SORTIDA" = "SORTIDA",
}
