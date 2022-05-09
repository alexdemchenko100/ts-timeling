import Image from "next/image";
import { FormattedMessage } from "react-intl";
import elle_magazine from "../../public/assets/logo/elle_magazine_pr.png";
import extra_avisen from "../../public/assets/logo/extra_avisen_pr.png";
import kom24 from "../../public/assets/logo/kom24_pr.png";
import newsreport from "../../public/assets/logo/newsreport_pr.png";
import oslo_avisa from "../../public/assets/logo/Oslo_avisa_pr.png";

/* URL Links */
const LINK_VART_OSLO =
    "https://vartoslo.no/misa-dangelo-oslo-timeling/italienske-misa-velger-oslo-for-a-verdenslansere-ny-datingapp-folk-skal-motes-ikke-sveipes/350504";
const LINK_EXTRA_AVISEN = "https://www.extraavisen.no/verdenslansering-i-datingapp-i-norge/";
const LINK_ELLE = "";
const LINK_NEWSREPORT =
    "https://www.yournewsnet.com/story/46091632/world-launch-of-the-dating-app-timeling-in-oslo-go-on-dates-and-meet-new-friends";
const LINK_KOM24 =
    "https://www.kom24.no/datingapp-happn-misa-dangelo/misa-skal-gjore-datingappen-kjent-i-norge-vil-endre-maten-vi-kommuniserer-pa/460485";

export const PressRelease = () => {
    return (
        <div className="press_release_container">
            <div className="container">
                <div className="press_release_title">
                    <h2>
                        <FormattedMessage id="press_realease" />
                    </h2>
                </div>
                <div className="press_release_content">
                    <a href={LINK_VART_OSLO} target="_blank" rel="noopener noreferrer">
                        <Image src={oslo_avisa} placeholder="blur" alt="vartoslo logo" />
                    </a>
                    <a href={LINK_EXTRA_AVISEN} target="_blank" rel="noopener noreferrer">
                        <Image src={extra_avisen} placeholder="blur" alt="extraavisen logo" />
                    </a>
                    <a href={LINK_ELLE} target="_blank" rel="noopener noreferrer">
                        <Image src={elle_magazine} placeholder="blur" alt="elle magazine logo" />
                    </a>
                    <a href={LINK_NEWSREPORT} target="_blank" rel="noopener noreferrer">
                        <Image src={newsreport} placeholder="blur" alt="your news net logo" />
                    </a>
                    <a href={LINK_KOM24} target="_blank" rel="noopener noreferrer">
                        <Image src={kom24} placeholder="blur" alt="kom24 logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};
