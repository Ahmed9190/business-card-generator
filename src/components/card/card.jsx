import React, { useCallback, useEffect, useState } from 'react';
import './card.scss';
import { ReactComponent as NavyCurve } from '../../assets/SVG/card-navy-card-orange-part.svg';
import { ReactComponent as ColoredCurve } from '../../assets/SVG/card-orange-part.svg';
import { ReactComponent as location } from '../../assets/SVG/location.svg';
import { ReactComponent as email } from '../../assets/SVG/email.svg';
import { ReactComponent as web } from '../../assets/SVG/web.svg';
import { ReactComponent as whatsapp } from '../../assets/SVG/whatsapp.svg';
import { ReactComponent as call } from '../../assets/SVG/call.svg';
import { ReactComponent as facebook } from '../../assets/SVG/facebook.svg';
import { ReactComponent as instagram } from '../../assets/SVG/instagram.svg';
import getSuitableTextFontSizeOfMultipleData from './handle-font-size';
import CardData from './card-data';
import CardName from './card-name';

const useActiveElementName = () => {
  const [active, setActive] = React.useState(document.activeElement);

  const handleFocusIn = e => {
    setActive(document.activeElement);
  };

  React.useEffect(() => {
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  return active.name;
};

const Card = ({ color, hasWhatsapp, cardData }) => {
  const [dataFontSize, setDataFontSize] = useState(11);
  const [nameFontSize, setNameFontSize] = useState(20);
  const [companyNameFontSize, setCompanyNameFontSize] = useState(20);

  const focusedElement = useActiveElementName();

  const getCardDataChunk = cardData => {
    const obj = { ...cardData };
    delete obj.f_name;
    delete obj.l_name;
    delete obj.position;
    return obj;
  };
  const getCardNameChunk = cardData => ({
    f_name: cardData.f_name,
    l_name: cardData.l_name,
  });

  const handleNameFontSize = useCallback(
    () =>
      setNameFontSize(
        Math.min(
          //get min of position and name
          getSuitableTextFontSizeOfMultipleData(
            getCardNameChunk(cardData),
            20,
            83
          ),
          getSuitableTextFontSizeOfMultipleData(
            { position: cardData.position },
            20,
            200
          )
        )
      ),
    [cardData]
  );
  const handleCompanyNameFontSize = useCallback(
    () =>
      setCompanyNameFontSize(
        getSuitableTextFontSizeOfMultipleData(
          { compnay_name: cardData?.compnay_name },
          20,
          135
        )
      ),
    [cardData.compnay_name]
  );
  const handleDataFontSize = useCallback(
    () =>
      setDataFontSize(
        getSuitableTextFontSizeOfMultipleData(
          getCardDataChunk(cardData),
          11,
          150
        )
      ),
    [cardData]
  );

  useEffect(() => {
    handleNameFontSize();
    handleCompanyNameFontSize();
    handleDataFontSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (
      focusedElement === 'f_name' ||
      focusedElement === 'l_name' ||
      focusedElement === 'position'
    )
      handleNameFontSize();
    else if (focusedElement === 'company_name') handleCompanyNameFontSize();
    else handleDataFontSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardData, focusedElement]);

  return (
    <div className="card-container">
      <div className="card-sections">
        <div className="left-card-section">
          <CardData
            Leading={location}
            text={cardData.address}
            focus={focusedElement === 'address'}
            fontSize={dataFontSize}
          />
          <CardData
            Leading={email}
            text={cardData.email}
            focus={focusedElement === 'email'}
            fontSize={dataFontSize}
          />
          <CardData
            Leading={web}
            text={cardData.website}
            focus={focusedElement === 'website'}
            fontSize={dataFontSize}
          />
          <CardData
            Leading={hasWhatsapp ? whatsapp : call}
            text={cardData.phone_num}
            focus={focusedElement === 'phone_num'}
            fontSize={dataFontSize}
          />
          <CardData
            Leading={facebook}
            text={cardData.fb}
            focus={focusedElement === 'fb'}
            fontSize={dataFontSize}
          />
          <CardData
            Leading={instagram}
            text={cardData.insta}
            focus={focusedElement === 'insta'}
            fontSize={dataFontSize}
          />
        </div>
        <div className="right-card-section">
          <div className="card-holder-name">
            <CardName
              text={cardData.f_name}
              focus={focusedElement === 'f_name'}
              fontSize={nameFontSize}
              maxWidth={83}
            />
            <CardName
              text={cardData.l_name}
              focus={focusedElement === 'l_name'}
              fontSize={nameFontSize}
              color={`#${color}`}
              maxWidth={83}
            />
          </div>
          <div
            className="card-holder-position"
            style={{ fontSize: nameFontSize - 5 }}
          >
            <CardName
              text={cardData.position}
              focus={focusedElement === 'position'}
              fontSize={nameFontSize > 16 ? nameFontSize - 5 : nameFontSize - 3}
              fontWeight="normal"
              maxWidth={135}
            />
          </div>
        </div>
      </div>
      <NavyCurve className="card-navy-curve" />
      <div style={{ transition: '1s', fill: `#${color}` }}>
        <ColoredCurve className="card-colored-curve" />
      </div>

      <div className="card-company-name">
        <CardName
          text={cardData.compnay_name}
          focus={focusedElement === 'compnay_name'}
          fontSize={companyNameFontSize}
          color="#fff"
          fontWeight="normal"
          maxWidth={135}
        />
      </div>
    </div>
  );
};

export default Card;
