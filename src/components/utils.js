export const allowedFields = [
  {
    key: 'country',
    label: 'Country',
    sortable: true,
  },
  {
    key: 'cases',
    label: 'Cases',
    sortable: true,
  },
  {
    key: 'flag',
    label: 'Flag',
    formatter: 'flagFormatter',
  },
];

export const flagFormatter = (value, key, item) => item.countryInfo.flag;
