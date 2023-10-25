//Randomize Json data
import { useEffect, useState } from "react";

export interface DataItem {
    id: string;
    brand: string;
    name: string;
    price: string;
    regular: string;
    percent: string;
    img: string;
    imgSub: string;
    category: string;
    gender: string;
    style: string;
}

export function useRandomData(allData: DataItem[]): DataItem[] {
    const [randomData, setRandomData] = useState<DataItem[]>([]);

    useEffect(() => {
        const shuffledData = [...allData].sort(() => Math.random() - 0.5);
        //-0.5는 sort 함수의 비교자(comparator)로 사용되며, 배열의 요소들을 무작위로 섞기 위한 것
        // Math.random() 함수는 0(포함)부터 1(제외) 사이의 무작위 숫자를 생성합니다.
        // 즉, 0.0, 0.1, 0.2, ..., 0.99999까지의 값을 생성할 수 있지만, 실제로 1.0은 생성하지 않습니다.

        // 0.5를 Math.random()에서 뺄셈하는 것은 주로 무작위 값을 0을 중심으로 가운데 정렬하는 데 사용됩니다.
        // 이렇게 하면 대략 절반의 시간 동안 결과값이 음수가 되고,
        // 절반의 시간 동안 양수가 됩니다.

        // 이러한 값을 sort() 함수의 비교자로 사용하면 배열의 요소들을 사실상 무작위로 섞을 수 있습니다.
        // 양수 값을 가진 요소는 배열 끝으로 이동하고,
        // 음수 값을 가진 요소는 배열 앞쪽으로 이동하면서 배열이 섞인 효과를 만듭니다.

        const limitedData = shuffledData.slice(0, 10);
        // 갯수 열개로 제한
        setRandomData(limitedData);
    }, []);

    return randomData;
}
