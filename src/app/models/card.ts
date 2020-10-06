export interface ICard {
  title: string;
  description: string;
  image: string;
}

export class Card implements ICard {
  constructor(public title: string, public description: string, public image: string,) {}
}