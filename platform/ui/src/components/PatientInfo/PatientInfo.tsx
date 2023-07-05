import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import formatDICOMDate from '../../utils/formatDICOMDate';

import Icon from '../Icon';
import Tooltip from '../Tooltip';

const classes = {
  infoHeader: 'text-base text-primary-light',
  infoText: 'text-base text-white max-w-24 truncate',
  infoText2: 'text-base text-white ',
  firstRow: 'flex flex-col',
  row: 'flex flex-col ml-4',
  row2: 'flex flex-col ',
};

function PatientInfo({
  patientName,
  patientSex,
  patientAge,
  institutionName,
  accessionNumber,
  patientBirthDate,
  MRN,
  thickness,
  spacing,
  scanner,
  isOpen,
  showPatientInfoRef,
}) {
  const { t } = useTranslation('PatientInfo');

  while (patientAge.charAt(0) === '0') {
    patientAge = patientAge.substr(1);
  }

  return (
    <div ref={showPatientInfoRef}>
      <Tooltip
        isSticky
        isDisabled={!isOpen}
        position="bottom-right"
        content={
          isOpen && (
            <div className="flex py-2">
              <div className="flex pt-1">
                <Icon name="info-link" className="w-4 text-primary-main" />
              </div>
              <div className="flex flex-col ml-2">
                <span
                  className="text-base font-bold text-white"
                  title={patientName}
                >
                  {patientName}
                </span>

                <div className="flex pb-4 mt-2 mb-2 border-b border-secondary-main">
                  <div className={classnames(classes.firstRow)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Sex')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={patientSex}
                    >
                      {patientSex}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('MRN')}
                    </span>
                    <span className={classnames(classes.infoText)} title={MRN}>
                      {MRN}
                    </span>
                  </div>
                </div>

                <div className="flex pb-4 mt-2 mb-2 border-b border-secondary-main">
                  <div className={classnames(classes.row2)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Age')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={patientAge}
                    >
                      {patientAge}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('DOB')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={patientBirthDate}
                    >
                      {patientBirthDate
                        ? formatDICOMDate(patientBirthDate)
                        : ''}
                    </span>
                  </div>
                </div>

                <div className="flex pb-4 mt-2 mb-2 border-b border-secondary-main ">
                  <div className={classnames(classes.row2)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Institution Name')}
                    </span>
                    <span
                      className={classnames(classes.infoText2)}
                      title={institutionName}
                    >
                      {institutionName}
                    </span>
                  </div>
                </div>

                <div className="flex pb-4 mt-2 mb-2 border-b border-secondary-main ">
                  <div className={classnames(classes.row2)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Accession Number')}
                    </span>
                    <span
                      className={classnames(classes.infoText2)}
                      title={accessionNumber}
                    >
                      {accessionNumber}
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <div className={classnames(classes.firstRow)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Thickness')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={thickness}
                    >
                      {thickness}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Spacing')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={spacing}
                    >
                      {spacing}
                    </span>
                  </div>
                  <div className={classnames(classes.row)}>
                    <span className={classnames(classes.infoHeader)}>
                      {t('Scanner')}
                    </span>
                    <span
                      className={classnames(classes.infoText)}
                      title={scanner}
                    >
                      {scanner}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      >
        <Icon
          className="cursor-pointer text-white hover:text-primary-light"
          name="info-action"
        />
      </Tooltip>
    </div>
  );
}

PatientInfo.propTypes = {
  patientName: PropTypes.string,
  patientSex: PropTypes.string,
  patientAge: PropTypes.string,
  patientBirthDate: PropTypes.string,
  institutionName: PropTypes.string,
  accessionNumber: PropTypes.string,
  MRN: PropTypes.string,
  thickness: PropTypes.string,
  spacing: PropTypes.string,
  scanner: PropTypes.string,
  isOpen: PropTypes.bool,
  showPatientInfoRef: PropTypes.object,
};

export default PatientInfo;
