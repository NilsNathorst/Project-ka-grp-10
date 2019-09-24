import React, { Fragment } from 'react';
import CategoryPageHero from '../Components/CategoryPageHero';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const CategoryPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

    return (
        <Fragment>
            <CategoryPageHero category={category} />
            <ContentContainer size="small" text="Senaste Podcasts" content={podcasts.slice(50, 65)}/>
            <ContentContainer size="small" text="Senaste Videoföreläsningar" content={videos.slice(1, 16)}/>
            <ContentContainer size="small" text="Kategori Namn" content={podcasts.slice(65, 80)}/>
        </Fragment>
    );
};

export default CategoryPage;