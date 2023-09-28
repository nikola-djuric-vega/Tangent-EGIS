import {
  Locations,
  Order,
  Projects,
  Sector,
  Service,
  Type,
} from '../../atoms/Filter/Filter.mockData'

export const one = { filters: [Projects] }
export const two = {
  filters: [Locations, Projects, Sector, Order, Service, Type],
}
export const projectData = { filters: [Projects] }
export const secotrData = { filters: [Sector] }
