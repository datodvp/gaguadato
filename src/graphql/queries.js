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

export const customProductQuery = (id) => {
  return new Query('product')
    .addArgument('id', 'String!', id)
    .addField('id')
    .addField('name')
    .addField('inStock')
    .addField('gallery')
    .addField('description')
    .addField('category')
    .addField('brand')
    .addField(
      new Field('attributes', true)
        .addField('id')
        .addField('name')
        .addField('type')
        .addField(
          new Field('items', true)
            .addField('id')
            .addField('displayValue')
            .addField('value')
        )
    )
    .addField(
      new Field('prices', true)
        .addField('amount')
        .addField(new Field('currency').addField('label').addField('symbol'))
    );
};
