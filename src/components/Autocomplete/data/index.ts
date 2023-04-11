export async function searchSwissCantons(query = '') {
  const swissCantons = [
    { name: 'Aargau', abbreviation: 'AG' },
    { name: 'Appenzell Ausserrhoden', abbreviation: 'AR' },
    { name: 'Appenzell Innerrhoden', abbreviation: 'AI' },
    { name: 'Basel-Landschaft', abbreviation: 'BL' },
    { name: 'Basel-Stadt', abbreviation: 'BS' },
    { name: 'Bern', abbreviation: 'BE' },
    { name: 'Fribourg', abbreviation: 'FR' },
    { name: 'Geneva', abbreviation: 'GE' },
    { name: 'Glarus', abbreviation: 'GL' },
    { name: 'Graubünden', abbreviation: 'GR' },
    { name: 'Jura', abbreviation: 'JU' },
    { name: 'Lucerne', abbreviation: 'LU' },
    { name: 'Neuchâtel', abbreviation: 'NE' },
    { name: 'Nidwalden', abbreviation: 'NW' },
    { name: 'Obwalden', abbreviation: 'OW' },
    { name: 'Schaffhausen', abbreviation: 'SH' },
    { name: 'Schwyz', abbreviation: 'SZ' },
    { name: 'Solothurn', abbreviation: 'SO' },
    { name: 'St. Gallen', abbreviation: 'SG' },
    { name: 'Thurgau', abbreviation: 'TG' },
    { name: 'Ticino', abbreviation: 'TI' },
    { name: 'Uri', abbreviation: 'UR' },
    { name: 'Valais', abbreviation: 'VS' },
    { name: 'Vaud', abbreviation: 'VD' },
    { name: 'Zug', abbreviation: 'ZG' },
    { name: 'Zürich', abbreviation: 'ZH' }
  ]

  if (!query) {
    return []
  }

  const searchQuery = query.toLowerCase()
  return swissCantons.filter((canton) => canton.name.toLowerCase().startsWith(searchQuery))
}
