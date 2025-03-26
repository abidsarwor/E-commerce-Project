import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import Layout from "../components/layout/layout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";

const HowToBuyPage = () => {
    const {LegalDetailsRequest} =FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("how-to-buy");
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default HowToBuyPage;