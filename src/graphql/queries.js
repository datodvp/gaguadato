import { Query, Field } from '@tilework/opus';

export const categoriesQuery = new Query('categories', true).addField('name');
