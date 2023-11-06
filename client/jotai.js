import { atom, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import WritePrice from "./WritePrice";

const priceAtom = atom(10000);

const App = () => {
    const setPrice = useSetAtom(priceAtom);

    const handleClick = useCallback(() => {
        setPrice((prev) => (prev += 1000));
    }, [setPrice]);

    return (
        <div>
            <button onClick={handleClick}>+</button>
            <WritePrice />
        </div>
    );
};

export default App;