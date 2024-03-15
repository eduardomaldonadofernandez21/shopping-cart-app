import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";


export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOffProducts() {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if(data) {
            setLoading(false);
            setProducts(data);
        }
    }

    useEffect( () => {
        fetchListOffProducts();
    },[]);
    return (
        <div>
            {loading ? (
                <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles
                        height={'120'}
                        width={'120'}
                        color="rbg(127,29,29)"
                        visible={true}
                    />
                </div>
            ) : ( null

            )}
        </div>
    );
}