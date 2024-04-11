import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    displayName: Attribute.String;
    linkTo: Attribute.String;
    isActive: Attribute.Boolean;
    icon: Attribute.Enumeration<['mdiApple', 'mdiSpotify', 'mdiYoutube']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.menu': SharedMenu;
    }
  }
}
