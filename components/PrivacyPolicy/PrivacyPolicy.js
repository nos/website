import Container from '../Container';
import Menu from './Menu';
import Introduction from './Introduction';
import ApplicableLaws from './ApplicableLaws';
import WhatIsPersonalData from './WhatIsPersonalData';
import WhatWeCollect from './WhatWeCollect';
import SocialMedia from './SocialMedia';
import HowWeCollect from './HowWeCollect';
import PersonalToThirdParties from './PersonalToThirdParties';
import WhatWeUsePersonalDataFor from './WhatWeUsePersonalDataFor';
import SpecialNoteConsent from './SpecialNoteConsent';
import DirectMarketing from './DirectMarketing';
import TransfersToThirdCountries from './TransfersToThirdCountries';
import InternetCommunications from './InternetCommunications';
import AuthorizedDisclosures from './AuthorizedDisclosures';
import SharingPersonalData from './SharingPersonalData';
import SecurityMeasures from './SecurityMeasures';
import RetentionPeriods from './RetentionPeriods';
import ProcessingForResearch from './ProcessingForResearch';
import LinksToThirdParties from './LinksToThirdParties';
import Cookies from './Cookies';
import Minors from './Minors';
import YourRights from './YourRights';
import Company from './Company';
import Updates from './Updates';

const PrivacyPolicy = () => (
  <Container>
    <p align="justify">
      <u><strong>nOS LIMITED - MASTER PRIVACY POLICY</strong></u>
    </p>
    <p>
      <strong>Last Updated on September 20 2018</strong>{' '}
      Version 1.0
    </p>
    <Introduction />
    <Menu />
    <ApplicableLaws />
    <WhatIsPersonalData />
    <WhatWeCollect />
    <SocialMedia />
    <HowWeCollect />
    <PersonalToThirdParties />
    <WhatWeUsePersonalDataFor />
    <SpecialNoteConsent />
    <DirectMarketing />
    <TransfersToThirdCountries />
    <InternetCommunications />
    <AuthorizedDisclosures />
    <SharingPersonalData />
    <SecurityMeasures />
    <RetentionPeriods />
    <ProcessingForResearch />
    <LinksToThirdParties />
    <Cookies />
    <Minors />
    <YourRights />
    <Company />
    <Updates lastUpdate="September 20 2018" />
  </Container>
);

export default PrivacyPolicy;
