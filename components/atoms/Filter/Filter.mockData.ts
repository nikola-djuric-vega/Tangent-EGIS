export const Projects = {
  title: 'Projects',
  type: 'project',
  optionGroups: [
    {
      title: 'title',
      options: [
        { value: 'Project1', label: 'Project 1' },
        { value: 'Project2', label: 'Project 2' },
        { value: 'Project3', label: 'Project 3' },
        { value: 'Project4', label: 'Project 4' },
        { value: 'Project5', label: 'Project 5' },
        { value: 'Project6', label: 'Project 6' },
        { value: 'Project7', label: 'Project 7' },
        { value: 'Project8', label: 'Project 8' },
      ],
    },
    {
      title: 'title',
      options: [
        { value: 'Location1', label: 'Location 1' },
        { value: 'Location2', label: 'Location 2' },
        { value: 'Location3', label: 'Location 3' },
        { value: 'Location4', label: 'Location 4' },
        { value: 'Location5', label: 'Location 5' },
        { value: 'Location6', label: 'Location 6' },
        { value: 'Location7', label: 'Location 7' },
        { value: 'Location8', label: 'Location 8' },
      ],
    },
  ],
  selected: '',
  setSelected: () => {},
  isDropdownOpen: false,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
}

export const Service = {
  title: 'Service',
  type: 'service',
  optionGroups: [
    {
      title: 'service',
      options: [
        { value: 'Service1', label: 'Service 1' },
        { value: 'Service2', label: 'Service 2' },
        { value: 'Service3', label: 'Service 3' },
        { value: 'Service4', label: 'Service 4' },
        { value: 'Service5', label: 'Service 5' },
        { value: 'Service6', label: 'Service 6' },
        { value: 'Service7', label: 'Service 7' },
        { value: 'Service8', label: 'Service 8' },
      ],
    },
  ],
  selected: '',
  setSelected: () => {},
  isDropdownOpen: false,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
}

export const Type = {
  title: 'Type',
  type: 'type',
  optionGroups: [
    {
      title: 'type',
      options: [
        { value: 'Type1', label: 'Type 1' },
        { value: 'Type2', label: 'Type 2' },
        { value: 'Type3', label: 'Type 3' },
        { value: 'Type4', label: 'Type 4' },
        { value: 'Type5', label: 'Type 5' },
        { value: 'Type6', label: 'Type 6' },
        { value: 'Type7', label: 'Type 7' },
        { value: 'Type8', label: 'Type 8' },
      ],
    },
  ],
  selected: '',
  setSelected: () => {},
  isDropdownOpen: false,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
}
export const Sector = {
  title: 'Sector',
  type: 'sector',
  optionGroups: [
    {
      title: 'sector',
      options: [
        { value: 'Sector1', label: 'Sector 1' },
        { value: 'Sector2', label: 'Sector 2' },
        { value: 'Sector3', label: 'Sector 3' },
        { value: 'Sector4', label: 'Sector 4' },
        { value: 'Sector5', label: 'Sector 5' },
        { value: 'Sector6', label: 'Sector 6' },
        { value: 'Sector7', label: 'Sector 7' },
        { value: 'Sector8', label: 'Sector 8' },
      ],
    },
  ],
  selected: '',
  setSelected: () => {},
  isDropdownOpen: false,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
}

export const Order = {
  title: 'Order',
  type: 'order',
  optionGroups: [
    {
      title: 'order',
      options: [
        { value: 'Order1', label: 'Order 1' },
        { value: 'Order2', label: 'Order 2' },
        { value: 'Order3', label: 'Order 3' },
        { value: 'Order4', label: 'Order 4' },
        { value: 'Order5', label: 'Order 5' },
        { value: 'Order6', label: 'Order 6' },
        { value: 'Order7', label: 'Order 7' },
        { value: 'Order8', label: 'Order 8' },
      ],
    },
  ],
  selected: '',
  setSelected: () => {},
  isDropdownOpen: false,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
}

export const Locations = {
  title: 'Locations',
  type: 'location',
  optionGroups: [
    {
      title: 'title',
      options: [
        { value: 'Location1', label: 'Location 1' },
        { value: 'Location2', label: 'Location 2' },
        { value: 'Location3', label: 'Location 3' },
        { value: 'Location4', label: 'Location 4' },
        { value: 'Location5', label: 'Location 5' },
        { value: 'Location6', label: 'Location 6' },
        { value: 'Location7', label: 'Location 7' },
        { value: 'Location8', label: 'Location 8' },
      ],
    },
    {
      title: 'title',
      options: [
        { value: 'Location1', label: 'Location 1' },
        { value: 'Location2', label: 'Location 2' },
        { value: 'Location3', label: 'Location 3' },
        { value: 'Location4', label: 'Location 4' },
        { value: 'Location5', label: 'Location 5' },
        { value: 'Location6', label: 'Location 6' },
        { value: 'Location7', label: 'Location 7' },
        { value: 'Location8', label: 'Location 8' },
      ],
    },
  ],
  selected: 'Location1',
  setSelected: () => {},
  isDropdownOpen: true,
  setIsOpen: (value: string, isOpen: boolean) => {
    console.log(value, isOpen)
  },
  inDropdown: true,
}
