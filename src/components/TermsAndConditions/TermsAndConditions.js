import React, { memo, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const TermsAndConditionsModal = memo(function TermsAndConditionsModal({ isOpen, handleClose }) {
  const { t } = useTranslation();
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = event => {
    setAgree(event.target.checked);
  };

  const handleAgreeClick = () => {
    if (agree) {
      document.cookie = 'termsAgreed=true; expires=Fri, 17 Feb 2023 23:59:59 GMT; path=/';
      handleClose();
    }
  };

  const handleCloseClick = () => {
    if (agree) {
      document.cookie = 'termsAgreed=false; path=/';
    } else {
      window.location.href = 'https://www.google.com'; // Redirect to Google.com if disagree
    }
    handleClose();
  };

  const termsAgreed =
    document.cookie.replace(/(?:(?:^|.*;\s*)termsAgreed\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true';

  return (
    <Dialog open={isOpen && !termsAgreed} onClose={handleCloseClick}>
      <DialogTitle>{t('Terms-and-Conditions')}</DialogTitle>
      <DialogContent>
        <p>
          Before using WorldofMagik.com, Magik.Finance, Magik.Farm, MagikSwap.dog and any of their
          subdomains you are required to read and agree to the following terms.
        </p>
        <p>
          <strong>LEGAL DISCLAIMER</strong>
        </p>
        <p>
          Please read this disclaimer carefully before using https://worldofmagik.com/,
          https://magik.finance/, https://magik.farm/, https://magikswap.dog/ or any of their
          sub-domains, smart contracts and dapps created by the team or its contributors and
          contractors (hereinafter referred to as the "The Websites”). By using The Websites, you
          confirm that you accept this legal disclaimer and agree to comply with it. If you do not
          agree, you must not use The Websites.{' '}
        </p>
        <p>
          Note that the World of Magik is an experiment in on chain gaming and content, and as such
          should be considered high risk. Do not allocate any funds that you cannot afford to lose.
        </p>
        <p>
          <strong>INFORMATION PUBLISHED IS NOT ADVICE</strong>
        </p>
        <p>
          The information provided on The Websites does not constitute investment advice, financial
          advice, trading advice, or any other sort of advice, and you should not treat any of The
          Websites content as such. Our team provides The Websites as a service to the public, and
          is not responsible for and expressly disclaims all liability for damages of any kind
          arising out of use, reference to, or reliance on any information contained within The
          Websites.{' '}
        </p>
        <p>
          While the information contained within the Websites is periodically updated, there is no
          guarantee that the information provided on the Websites is correct, complete, and
          up-to-date.{' '}
        </p>
        <p>
          <strong>USAGE RISKS</strong>
        </p>
        <p>
          The Websites will not be responsible for any losses, damages, or claims arising from
          events like, but not limited to: mistakes made by the user (e.g., payments sent to wrong
          addresses), software problems of The Websites or any related software or service (e.g.,
          malware or unsafe cryptographic libraries), technical failures (e.g., hardware wallets
          malfunction), security problems experienced by the user (e.g., unauthorized access to
          wallets), actions or omissions of third parties (e.g., bankruptcy of service providers,
          information security attacks on service providers, or criminal activities conducted by
          third parties).{' '}
        </p>
        <p>
          <strong>OTHER RISKS</strong>
        </p>
        <p>
          The use of experimental cryptocurrencies and smart contracts can lead to a total loss of
          money. The information published on The Websites does not guarantee any monetary gain or
          protection from monetary loss. Users accept that they have read these terms and done their
          own due diligence to understand these risks, and made an autonomous decision on how to
          interact with The Websites.{' '}
        </p>
        <p>
          <strong>COMPLIANCE WITH TAX OBLIGATIONS</strong>
        </p>
        <p>
          The users of The Websites are solely responsible to determine what, if any, taxes apply to
          their cryptocurrency holdings. The Websites are NOT responsible for determining the taxes
          that apply to user transactions.{' '}
        </p>
        <p>
          <strong>NO WARRANTIES</strong>
        </p>
        <p>
          The Websites are provided on an "as is" basis, without any warranties of any kind
          regarding The Websites and/or any content, data, materials and/or services provided on The
          Websites. The functionality of The Websites is not guaranteed and could be disabled fully
          or in part without prior notice. Security audits do not eliminate risks completely. The
          Websites are not guaranteed to be secure or free from bugs or viruses. Unless otherwise
          required by law, in no event shall The Websites be liable for damages of any kind,
          including, but not limited to, loss of use or access, loss of funds, or loss of data
          arising out of or in any way connected with the use of The Websites.{' '}
        </p>
        <p>
          <strong>NO ARBITRATION</strong>
        </p>
        <p>
          Users of The Websites agree to arbitrate any dispute arising from or in connection with
          The Websites or this disclaimer, except for disputes related to copyrights, logos,
          trademarks, trade names, trade secrets or patents.
        </p>
        <p>
          <strong>TERRITORY RESTRICTIONS</strong>
        </p>
        <p>
          Consult your domestic and local laws before agreeing to these terms and interacting with
          any smart contract, frontend or cryptocurrency. Use of The Websites by users from OFAC
          sanctioned countries or individuals on the SDN or FSE lists is strictly prohibited.
        </p>
        <p>
          <strong>AGE RESTRICTIONS</strong>
        </p>
        <p>By accepting these terms you certify that you are at least 18 years of age.</p>
        <FormControlLabel
          control={<Checkbox checked={agree} onChange={handleAgreeChange} />}
          label={t('I Agree to the Terms and Conditions')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgreeClick} disabled={!agree} color="primary">
          {t('Agree')}
        </Button>
        <Button onClick={handleCloseClick} color="primary">
          {t('Disagree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default TermsAndConditionsModal;
