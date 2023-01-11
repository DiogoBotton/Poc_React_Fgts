import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, Lazy, Zoom } from 'swiper';

// Components
import Contract from '../Contract/Contract';
import Accession from '../Accession/Accession';
import Authorization from '../Authorization/Authorization';
import Information from '../Information/Information';

export default function HomeComoContratar() {
    return (
        <Box>
            <Swiper
                modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
                centeredSlides
                slidesPerView={1}
                grabCursor
                navigation
                autoplay={{delay: 10000}}
                lazy
                zoom
            >
                <SwiperSlide>
                    <Contract />
                </SwiperSlide>
                <SwiperSlide>
                    <Accession />
                </SwiperSlide>
                <SwiperSlide>
                    <Authorization />
                </SwiperSlide>
                <SwiperSlide>
                    <Information />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}