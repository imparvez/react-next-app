import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import WatchImage from 'components/watch-image'
import Description from 'components/description'
import Footer from 'components/footer'
import {
    Section,
    FeatureListContainer,
    FeatureList,
    Title,
} from 'styles/index'

const Home = () => (
    <Fragment>
        <Section>
            <WatchImage />
            <Description />
        </Section>
        <Title>Our Core Features</Title>
        <Section>
            <FeatureListContainer>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Smooth Touch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Easy Pricing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Stock Images</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
            </FeatureListContainer>
            <WatchImage />
            <FeatureListContainer>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Smooth Touch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Easy Pricing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
                <FeatureList>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='1x'
                    />
                    <h3>Stock Images</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?</p>
                </FeatureList>
            </FeatureListContainer>
        </Section>
        <Title>Checkout Some Amazing Shots</Title>
        <Section>
            <img src='https://previews.dropbox.com/p/thumb/AAfkpM-0w5Qqbml9OZJq26ZwcbMR2VsdhbnrMrtFlMjm06vM3DSV_l0UW0L_UaXGoo6rYQ5MQ7DCNZ6187C-t5McgUbRggQloQDi4PEGN3zX8hVm3UeDVOZKOmOLyppVPPv2f7YCWsTiUT_2LUYSDkneqKE_hNdoL6uDnbbI2TlDUD6sa8Q6taTYxqeNm1kTk9ui_DFdV20DhAjz1YzPmo26bt85_nUaHrsthLNNzbBkYN2pRklvSHGjvKYPWSEeMo9Bmxq3mOpY7no4L6Cadakfb0f8AvpXCeXk_F2GJt0YqzK8hEWzXibTHuW8oG9F-tWaLSANDHidLwlPk7ClzfAwKSftqyy7yRkGvv6aULr1Vw/p.png?fv_content=true&size_mode=5' alt='variant one' />
            <img src='https://previews.dropbox.com/p/thumb/AAcDrL8-G99qRINU8aenkBI4l7i_jBuflXwQ7vfSsB99W94o606IC-rhkOKDtXskx8TV6BZNT3W9M1dCtdHbjbWZaU-Vs93miISM_5r-14DhjLR7gHFlh5kkjYiQL1lKFcTiGQs_D2bM5SLwVvkH05KDBWMtfQmBd3YoqPAqIGLLIQ5GB7QvR7kL-8ZtTRMuDEcryxMFvNTZeLsI0aqOOUbXQzRytc3yjwyq9XjKdwcrhMA6_b_-msfwDPc71YqpT8S_xjMnZH9ZOESkeD6LWr4eQLznGhJFrqoGTaO_yaXhRcgkqyDIxQz3n-5h764zeKxY5F19eSuRXavVGc524EujkJxH3y6Xf5-KrzF9q4zoLw/p.png?fv_content=true&size_mode=5' alt='variant two'/>
            <img src='https://previews.dropbox.com/p/thumb/AAea8jOvjoM0rIaafX1XFr5zCD8Eyv0TdM0zhWqu_mkxI2CQKzs0X-yN36I83FMX9Sjj32nAO4f3LhhGY4_uMIk9rw7CKrLRdyz3bmuQb8vLt4Fx66TKfy3AG_zzgjCGUKISorF2YXeBDevoNnW9180gB3lKdxfMmLLW-I7o8dYhmxRO3ZxWc2ry9I2mgmAp9OqjN59c5EN1lMi-Bjt_TGMbrXEl5OvTrUuM9nhxbRldYLLQ5q5xhNMxKRJ7SH7oy8qOTzTtgMMgEZUhi86Sn3SM4ZMVeNyE5eFdZc03jN88kDjiaVDs889ZKD55oTSzy0iqUXKYafwmxSSVHCNMb_lV7vGZDZ7mjkDx4Qf7O_0C_g/p.png?fv_content=true&size_mode=5' alt='variant three'/>
            <img src='https://previews.dropbox.com/p/thumb/AAdAxS8JuDcS_OlLuYyTKSBe6fce21lq43HgYnM3YHyYYnIZxowOR0Z7mZAutwsSKcI5sKwkGWiTZYBIEei47TpboqZk9SAkAEkIHcPwFSbPOOc-A0V79PHJ4ZgSIRuJusj6AIFR6F3lwJw9KPEEDdgDtm3WDvPvdRvUUEi3OgHmQGc9WzN7HSJn4GHDABaEQM1BiEM1Endk_-4w0hqto41sj0KZX-xY65T1Te6o6RCIW-wDk-cQh-iRSN8dBx90TujkdVC9d_GhH1muWUnLgFyfviF1yzzUA6xdTaKIA7PiCgNR_V7K1cFZKQFmHDEcRQuWDS1qtqnPAutumnPMHaF61dEEP4ZuPF97ElkUjGikkQ/p.png?fv_content=true&size_mode=5' alt='variant four'/>
        </Section>
        <Footer />
    </Fragment>
)

export default Home
