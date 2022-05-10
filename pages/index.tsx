import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import Header from "../components/Header";
import { HowDoesItWork, PressRelease, Hero } from "../components/home";
import RouteContainer from "../components/ui/RouteContainer";

const Index = () => {
    const { locale } = useRouter();

    const routeTitle = "Timeling";
    const routeDescription = "";

    return (
        <RouteContainer title={routeTitle} description={routeDescription} name="home">
            <Header></Header>
            <Hero></Hero>
            <section className="how-work-section">
                <div className="container">
                    <h2 className="work-title">
                        <FormattedMessage id="how_title" />
                    </h2>
                    <p className="work-title-dec">
                        <FormattedMessage id="how_title_dec" />
                    </p>
                    <ul className="work-ul">
                        <li>
                            <h6>
                                <FormattedMessage id="work_title_01" />
                            </h6>
                            <p>
                                <FormattedMessage id="work_dec_01" />
                            </p>
                            <div className="work-mobile-img">
                                <Image
                                    src={`/assets/${locale}/01_event.png`}
                                    alt="01_event_eng"
                                    width={280}
                                    height={566}
                                />
                            </div>
                        </li>
                        <li>
                            <h6>
                                <FormattedMessage id="work_title_02" />
                            </h6>
                            <p>
                                <FormattedMessage id="work_dec_02" />
                            </p>
                            <div className="work-mobile-img">
                                <Image
                                    src={`/assets/${locale}/02_event.png`}
                                    alt="02_matches_eng"
                                    width={280}
                                    height={566}
                                />
                            </div>
                        </li>
                        <li>
                            <h6>
                                <FormattedMessage id="work_title_03" />
                            </h6>
                            <p>
                                <FormattedMessage id="work_dec_03" />
                            </p>
                            <div className="work-mobile-img">
                                <Image
                                    src={`/assets/${locale}/03_event.png`}
                                    alt="03_chat_eng"
                                    width={280}
                                    height={566}
                                />
                            </div>
                        </li>
                        <li>
                            <h6>
                                <FormattedMessage id="work_title_04" />
                            </h6>
                            <p>
                                <FormattedMessage id="work_dec_04" />
                            </p>
                            <div className="work-mobile-img">
                                <Image
                                    src={`/assets/${locale}/04_event.png`}
                                    alt="04_confirm_eng"
                                    width={280}
                                    height={566}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <HowDoesItWork />
            <PressRelease />
        </RouteContainer>
    );
};

export default Index;
