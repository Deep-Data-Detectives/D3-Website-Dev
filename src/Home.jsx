import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories.jsx';
import ProductSmokingHero from './modules/views/ProductSmokingHero.jsx';
import AppFooter from './modules/views/AppFooter.jsx';
import ProductValues from './modules/views/ProductValues.jsx';
import ProductHowItWorks from './modules/views/ProductHowItWorks.jsx';
import ProductCTA from './modules/views/ProductCTA.jsx';
import AppAppBar from './modules/views/AppAppBar.jsx';
import withRoot from './modules/withRoot.jsx';
// import HeroSlider from "./MyComponents/HeroSlider.jsx";
import ProductHero from "./modules/views/ProductHero.jsx";
import Mission from "./MyComponents/Mission.jsx";

function Index() {
    return (<React.Fragment>
        <AppAppBar/>
        {/*<HeroSlider/>*/}
        <ProductHero/>
        <Mission/>
        <ProductHowItWorks/>
        <ProductValues/>
        <ProductCategories/>
        <ProductCTA/>
        <ProductSmokingHero/>
        <AppFooter/>
    </React.Fragment>);
}

export default withRoot(Index);
