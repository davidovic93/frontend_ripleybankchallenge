
export class Transferencia {

  constructor(
      public destinatario_name?: string,
      public destinatario?: string,
      public rut?: string,
      public email?: string,
      public bank?: string,
      public type_account?: string,
      public amount?: number,
      public uid?: string,
      public usuario?: string,
      public fecha?: Date
  ) {
    this.destinatario = "";
  }
}
