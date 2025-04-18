import {Fragment} from "react";
import styles from "./projects.module.css"
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";


export default function Projects() {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HeaderDefault/>


                    {/*<HomePageBanner/>*/}
                    {/*<Brands/>*/}
                    {/*{loading ? (*/}
                    {/*    <section className={styles.containerSkeleton}>*/}
                    {/*        <section>*/}
                    {/*            <Skeleton width="550px" height={60} sx={{mt: 1}}/>*/}
                    {/*        </section>*/}
                    {/*        <div className={styles.skeletonGrid}>*/}
                    {/*            {Array.from(new Array(4)).map((_, index) => (*/}
                    {/*                <div key={index} className={styles.skeletonCard}>*/}
                    {/*                    <Skeleton*/}
                    {/*                        variant="rectangular"*/}
                    {/*                        sx={{*/}
                    {/*                            width: '295px',*/}
                    {/*                            height: '298px',*/}
                    {/*                            borderRadius: '8px'*/}
                    {/*                        }}*/}
                    {/*                    />*/}
                    {/*                    <Skeleton width="70%" height={27} sx={{mt: 1}}/>*/}
                    {/*                    <Skeleton width="70%" height={27} sx={{mt: 1}}/>*/}
                    {/*                    <Skeleton width="40%" height={19}/>*/}
                    {/*                    <Skeleton width="30%" height={32} sx={{mt: 0.5}}/>*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </section>*/}
                    {/*) : (*/}
                    {/*    <ClothesSection*/}
                    {/*        title="NEW ARRIVALS"*/}
                    {/*        products={arrivals}*/}
                    {/*        clotheImage={images}*/}
                    {/*        ratingImage={ratingImages}*/}
                    {/*        handlerProductDetails={handlerProductDetails}*/}
                    {/*        buttonApears={true}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*{loading ? (*/}
                    {/*    <section className={styles.containerSkeleton}>*/}
                    {/*        <section>*/}
                    {/*            <Skeleton width="550px" height={60} sx={{mt: 1}}/>*/}
                    {/*        </section>*/}
                    {/*        <div className={styles.skeletonGrid}>*/}
                    {/*            {Array.from(new Array(4)).map((_, index) => (*/}
                    {/*                <div key={index} className={styles.skeletonCard}>*/}
                    {/*                    <Skeleton*/}
                    {/*                        variant="rectangular"*/}
                    {/*                        sx={{*/}
                    {/*                            width: '295px',*/}
                    {/*                            height: '298px',*/}
                    {/*                            borderRadius: '8px'*/}
                    {/*                        }}*/}
                    {/*                    />*/}
                    {/*                    <Skeleton width="70%" height={27} sx={{mt: 1}}/>*/}
                    {/*                    <Skeleton width="70%" height={27} sx={{mt: 1}}/>*/}
                    {/*                    <Skeleton width="40%" height={19}/>*/}
                    {/*                    <Skeleton width="30%" height={32} sx={{mt: 0.5}}/>*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </section>*/}
                    {/*) : (*/}
                    {/*    <ClothesSection*/}
                    {/*        title="TOP SELLING"*/}
                    {/*        products={topSellings}*/}
                    {/*        clotheImage={images}*/}
                    {/*        ratingImage={ratingImages}*/}
                    {/*        handlerProductDetails={handlerProductDetails}*/}
                    {/*        buttonApears={true}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*<BrowseStyle/>*/}
                    {/*<GoodReviews/>*/}
                    {/*<Footer/>*/}
                </section>
            </section>
        </Fragment>
    );
}