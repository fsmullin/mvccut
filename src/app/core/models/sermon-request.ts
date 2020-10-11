export class SermonRequest {
  videoLink: string;
  textDesc: string;

  constructor(obj: Partial<SermonRequest>) {
    Object.assign(this, obj);
  }
}
