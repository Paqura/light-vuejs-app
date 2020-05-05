export const allowedFields = [
  {
    key: 'country',
    label: 'Country',
  },
  {
    key: 'cases',
    label: 'Cases',
  },
  {
    key: 'flag',
    label: 'Flag',
    formatter: 'flagFormatter',
  },
];

export const flagFormatter = (value, key, item) => item.countryInfo.flag;
