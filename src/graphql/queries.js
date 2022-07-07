import { Query, Field } from '@tilework/opus';

export const categoriesQuery = new Query('categories', true).addField('name');

export const currenciesQuery = new Query('currencies', true)
  .addField('label')
  .addField('symbol');
