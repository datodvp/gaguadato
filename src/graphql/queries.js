import { Query, Field } from '@tilework/opus';

export const categoriesQuery = new Query('categories', true).addField('name');

export const currenciesQuery = new Query('currencies', true)
  .addField('label')
  .addField('symbol');

export const customProductsQuery = (category) => {
  return new Query('category')
    .addArgument('input', 'CategoryInput', { title: category })
    .addField(
      new Field('products', true)
        .addField('id')
        .addField('name')
        .addField('inStock')
        .addField('gallery')
        .addField('brand')
        .addField(
          new Field('prices', true)
            .addField('amount')
            .addField(
              new Field('currency', true).addField('label').addField('symbol')
            )
        )
    );
};
