export const measureTextWidth = (str, fontSize) => {
  const widths = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875, 0.5546875,
    0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625, 0.5828125,
    0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875,
    0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
    0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875, 1.0140625,
    0.665625, 0.665625, 0.721875, 0.721875, 0.665625, 0.609375, 0.7765625,
    0.721875, 0.2765625, 0.5, 0.665625, 0.5546875, 0.8328125, 0.721875,
    0.7765625, 0.665625, 0.7765625, 0.721875, 0.665625, 0.609375, 0.721875,
    0.665625, 0.94375, 0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875,
    0.2765625, 0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5,
    0.5546875, 0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875, 0.240625,
    0.5, 0.221875, 0.8328125, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
    0.3328125, 0.5, 0.2765625, 0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5,
    0.3546875, 0.259375, 0.353125, 0.5890625,
  ];
  const avg = 0.5279276315789471;
  str = String(str);
  return str
    ? str
        ?.split("")
        .map((c) =>
          c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg
        )
        .reduce((cur, acc) => acc + cur) * fontSize
    : 0;
};

export const getSuitableTextFontSize = (text, fontSize, maxWidth) =>
  measureTextWidth(text, fontSize) > maxWidth
    ? getSuitableTextFontSize(text, fontSize - 0.5, maxWidth)
    : fontSize;

const getSuitableTextFontSizeOfMultipleData = (obj, fontSize, maxWidth) => {
  const fontSizes = Object.keys(obj).map((key, i) =>
    getSuitableTextFontSize(obj[key], fontSize, maxWidth)
  );
  if (!fontSizes.length) return fontSize;
  const minFontSize = Math.min(...fontSizes);
  return minFontSize;
};

export default getSuitableTextFontSizeOfMultipleData;
