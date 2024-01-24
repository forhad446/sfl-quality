import PhotoAlbum from "react-photo-album";
import PageTitle from "../Shared/PageTitle/PageTitle";

const PhotoGallery = () => {
    const photos = [
        { src: "https://i.ibb.co/K7Nr3jL/4171.jpg", width: 1200, height: 1400 },
        { src: "https://i.ibb.co/SfBTpFM/135209692-1008057213022703-6076395981027978805-n.jpg", width: 1900, height: 2000 },
        { src: "https://i.ibb.co/cFSFTvF/360123649-111631011996319-4056916690233710646-n.jpg", width: 1600, height: 3000 },
        { src: "https://i.ibb.co/82WZMd5/397988885-1766746897106948-2454269159546811894-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/cbfdCyP/268264990-1151654168701972-6230433875890358864-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/SXfWpyj/349313386-275188334968147-8656130508178958030-n.jpg", width: 1200, height: 1400 },
        { src: "https://i.ibb.co/V3zvS3F/299529788-1463053970876959-7763467763872347219-n.jpg", width: 1600, height: 1500 },
        { src: "https://i.ibb.co/Bs4Kjfg/167761995-781624789423347-8110843186034904106-n.jpg", width: 1600, height: 1200 },
        { src: "https://i.ibb.co/304f13k/Whats-App-Image-2024-01-23-at-10-37-11-0ea28ae2.jpg", width: 1600, height: 2000 },
        { src: "https://i.ibb.co/tZYtF4K/332706432-747384516679367-3231799246770486711-n.jpg", width: 1600, height: 2000 },
        { src: "https://i.ibb.co/B43hLHC/378059467-1723716041426435-9149067049138424466-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/T44dPHK/325405444-878127430051288-3221504988247322599-n.jpg", width: 1200, height: 1300 },
        { src: "https://i.ibb.co/gVJXSmj/279893750-432191928617493-4043359348520444685-n.jpg", width: 1600, height: 2400 },
        // ===========================
        //      double photo setup
        // ===========================

        { src: "https://i.ibb.co/K7Nr3jL/4171.jpg", width: 1200, height: 1400 },
        { src: "https://i.ibb.co/SfBTpFM/135209692-1008057213022703-6076395981027978805-n.jpg", width: 1900, height: 2000 },
        { src: "https://i.ibb.co/cFSFTvF/360123649-111631011996319-4056916690233710646-n.jpg", width: 1600, height: 3000 },
        { src: "https://i.ibb.co/82WZMd5/397988885-1766746897106948-2454269159546811894-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/cbfdCyP/268264990-1151654168701972-6230433875890358864-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/SXfWpyj/349313386-275188334968147-8656130508178958030-n.jpg", width: 1200, height: 1400 },
        { src: "https://i.ibb.co/V3zvS3F/299529788-1463053970876959-7763467763872347219-n.jpg", width: 1600, height: 1500 },
        { src: "https://i.ibb.co/Bs4Kjfg/167761995-781624789423347-8110843186034904106-n.jpg", width: 1600, height: 1200 },
        { src: "https://i.ibb.co/304f13k/Whats-App-Image-2024-01-23-at-10-37-11-0ea28ae2.jpg", width: 1600, height: 2000 },
        { src: "https://i.ibb.co/tZYtF4K/332706432-747384516679367-3231799246770486711-n.jpg", width: 1600, height: 2000 },
        { src: "https://i.ibb.co/B43hLHC/378059467-1723716041426435-9149067049138424466-n.jpg", width: 1600, height: 1900 },
        { src: "https://i.ibb.co/T44dPHK/325405444-878127430051288-3221504988247322599-n.jpg", width: 1200, height: 1300 },
        { src: "https://i.ibb.co/gVJXSmj/279893750-432191928617493-4043359348520444685-n.jpg", width: 1600, height: 2400 },
    ];
    return (
        <div>
            <PageTitle title={'Photo Gallery'}></PageTitle>
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    );
};

export default PhotoGallery;