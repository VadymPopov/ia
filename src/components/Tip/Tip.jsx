import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { SubTitle } from 'components/CommonStyles';
import useGlobalState from 'hooks/useGlobalState';
import { calculateTip } from 'utils/helpers';
import CustomTipForm from 'components/CustomTipForm';
import {
  Container,
  TipsItem,
  TipsContainer,
  Price,
  SummaryTable,
  Row,
  LastRow,
  TableCell,
} from './Tip.styled';

const tipsArray = [15, 20, 25, 30];

export default function Tip() {
  const { paymentInfo, setPaymentInfo } = useGlobalState();
  const [tip, setTip] = useState(0);
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(null);
  const [customTip, setCustomTip] = useState(null);
  const [showInputForm, setShowInputForm] = useState(false);

  const navigate = useNavigate();
  const amount = paymentInfo?.amount || 0;
  const taxes = useMemo(() => Number((amount * 0.16).toFixed(2)), [amount]);
  const total = useMemo(() => amount + taxes + tip, [amount, taxes, tip]);

  useEffect(() => {
    if (!amount) {
      navigate('/payment/client-info');
    }
  });

  useEffect(() => {
    if (amount && selectedTipPercentage) {
      setTip(calculateTip(amount, selectedTipPercentage));
    }
  }, [setTip, amount, selectedTipPercentage]);

  const handleTipClick = value => {
    if (selectedTipPercentage === value) {
      setSelectedTipPercentage(null);
      setTip(0);
    } else {
      setSelectedTipPercentage(value);
      setCustomTip(null);
    }
  };

  const handleCustomTipClick = value => {
    if (customTip === value) {
      setCustomTip(null);
      setTip(0);
      setShowInputForm(false);
    } else {
      setCustomTip(value);
      setSelectedTipPercentage(null);
      setTip(0);
      setShowInputForm(true);
    }
  };

  const onBtnClick = () => {
    setPaymentInfo(prevState => ({ ...prevState, tip, taxes, total }));
    navigate('/payment/confirmation');
  };

  return (
    <Container>
      <SubTitle>Select the tip amount:</SubTitle>
      <TipsContainer>
        {tipsArray.map(tip => (
          <TipsItem
            key={tip}
            onClick={() => handleTipClick(tip)}
            active={selectedTipPercentage === tip ? tip : null}
          >
            <p>{tip}%</p>
            {selectedTipPercentage === tip && <Price>CA$ {tip}</Price>}
          </TipsItem>
        ))}
        <TipsItem
          onClick={() => handleCustomTipClick('custom')}
          active={customTip === 'custom' ? 'custom' : null}
        >
          <p>Custom</p>
          {tip !== 0 && customTip && <Price>CA$ {tip}</Price>}
        </TipsItem>
      </TipsContainer>

      {customTip && (
        <CustomTipForm
          setTip={setTip}
          showInputForm={showInputForm}
          setShowInputForm={setShowInputForm}
        />
      )}

      <SummaryTable>
        <tbody>
          <Row>
            <TableCell>Amount due</TableCell>
            <TableCell>CA${amount}</TableCell>
          </Row>
          <Row>
            <TableCell>Tips</TableCell>
            <TableCell>CA${tip}</TableCell>
          </Row>
          <Row>
            <TableCell>Taxes & Fees</TableCell>
            <TableCell>CA${taxes}</TableCell>
          </Row>
          <LastRow>
            <TableCell>Total</TableCell>
            <TableCell>CA${total}</TableCell>
          </LastRow>
        </tbody>
      </SummaryTable>

      <Button onClick={onBtnClick} type="button">
        Next
      </Button>
    </Container>
  );
}
