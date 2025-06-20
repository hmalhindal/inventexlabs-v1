export const SERVICE_TYPES = [
  { id: 'laser_cutting', name: 'Laser Cutting' },
  { id: 'cnc_machining', name: 'CNC Machining' },
] as const;

export type ServiceTypeId = typeof SERVICE_TYPES[number]['id'];
export type ServiceTypeName = typeof SERVICE_TYPES[number]['name'];


export const MATERIALS = [
  { id: 'Aluminum', name: 'Aluminum' },
  { id: 'Steel', name: 'Steel' },
  { id: 'Plastic', name: 'Plastic' },
] as const;

export type MaterialId = typeof MATERIALS[number]['id'];
export type MaterialName = typeof MATERIALS[number]['name'];
