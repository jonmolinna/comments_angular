type RequiredInputType = {
  type: string;
  controlName: string;
};

type OptionalInputType = {
  placeholder: string;
};

export type InputType = RequiredInputType & Partial<OptionalInputType>;
