import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from './components/title_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        prevButtonClassName="main-nav"
        nextButtonClassName="main-nav"
        assets={[
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}main-nav`}
                frameSelectors={[
                    '.play-button',
                    '.play-button:hover',
                    '.close-button',
                    '.close-button:hover',
                    '.prev-screen',
                    '.prev-screen:hover',
                    '.next-screen',
                    '.next-screen:hover',
                    '.yes-button',
                    '.yes-button:hover',
                    '.no-button',
                    '.no-button:hover',
                ]}
                spriteClass="main-nav"
            />,
            /*
            <skoash.Audio ref="BKG0" type="background" src={`${CMWN.MEDIA.EFFECT}titlescreen.mp3`} loop />,
            */
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-02-galaxypano.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-05.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-06.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-07.jpg`} />,
            <div className="background bkg-1" />,
            <div className="background bkg-2" />,
            <div className="background bkg-3" />,
            <div className="background bkg-4" />,
            <div className="background bkg-5" />,
            <div className="background bkg-6" />,
            <div className="background bkg-7" />,
            <div className="background quit" />,
        ]}
    />
);

if (module.hot) module.hot.accept();
