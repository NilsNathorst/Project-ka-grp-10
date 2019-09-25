import React, { Fragment } from 'react';
import CategoryPageHero from '../Components/CategoryPageHero';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const CategoryPage = (props) => {

    const category = props.match.params.categoryId;

    return (
        <Fragment>
            <CategoryPageHero category={category} goBack={props.history.goBack}/>
            <ContentContainer size="small" text="Senaste Podcasts" content={podcasts.slice(20, 35)}/>
            <ContentContainer size="small" text="Senaste Videoföreläsningar" content={videos.slice(5, 20)}/>
            <ContentContainer size="small" text="Kategori Namn" content={podcasts.slice(50, 65)}/>
        </Fragment>
    );
};

export default CategoryPage;