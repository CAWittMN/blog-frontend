import { useState, useEffect } from "react";

/**
 * A hook that stores a string as state and on local storage.
 * Pass in a string that will be used as the storage key on initiation.
 * An optional initialValue string can be passed in to set a value on initiation.
 * Use the returned set function to change the value, or set as null to remove from local storage.
 * @param key
 * @param initialValue
 * @returns
 */
const useLocalStorage = (
  key: string,
  initialValue: string | null = null
): [string | null, Function] => {
  const value = localStorage.getItem(key) || initialValue;

  const [item, setItem] = useState(value);

  useEffect(() => {
    if (!item) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
};

export default useLocalStorage;
