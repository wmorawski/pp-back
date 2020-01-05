export function renameProp<T>(
  oldProp: any,
  newProp: any,
  { [oldProp]: old, ...others },
): T {
  return {
    [newProp]: old,
    ...others,
  } as T;
}
