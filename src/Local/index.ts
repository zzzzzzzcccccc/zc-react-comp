export interface IGlobal {
  prompt: string;
  title: string;
  ok: string;
  cancel: string;
  null: string;
}

export interface ILocal {
  global: IGlobal;
}
