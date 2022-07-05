function spliceSplit(
  originString: string,
  index: number,
  addedSlice: string
): string {
  if (index > originString.length - 1) {
    return originString + addedSlice;
  } else {
    return (
      originString.substring(0, index) +
      addedSlice +
      originString.substring(index)
    );
  }
}
export { spliceSplit };
