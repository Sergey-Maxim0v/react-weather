export interface IFetchGetOption {
  name: string;
  value: string;
}

const buildUrlWithParams = ({
  base,
  options,
}: {
  base: string;
  options: IFetchGetOption[];
}): string => {
  const url = new URL(base);

  options.forEach((option) =>
    url.searchParams.append(option.name, option.value),
  );

  return url.href;
};

export default buildUrlWithParams;
