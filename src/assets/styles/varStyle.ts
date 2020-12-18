interface IVarStyle {
  primaryColor: string;
  warningColor: string;
  dangerColor: string;
  defaultColor: string;
  successColor: string;
  messageZIndex: number;
  modalZIndex: number;
}

const varStyle: IVarStyle = {
  primaryColor: '#4569d4',
  warningColor: '#f50',
  dangerColor: '#f50f50',
  defaultColor: '#858585',
  successColor: '#a0d911',
  messageZIndex: 1024,
  modalZIndex: 1000,
};

export default varStyle;
