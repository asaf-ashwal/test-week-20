import {useEffect, useState} from "react";

export function useSearch(oldArr) {
  const [arr, setArr] = useState(oldArr);
    useEffect(() => {setArr(oldArr);}, [oldArr]);
  const search = (v) =>
    setArr(
      oldArr.filter((m) =>
        m.Title.toLocaleLowerCase().includes(v.toLocaleLowerCase()),
      ),
    );
  return [arr, search];
}
