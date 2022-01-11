import React from 'react';
import parse from "html-react-parser";
import logo from './logo.svg';
import './App.css';
import background1 from './background1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpeg';
import bg_4 from './bg_4.jpeg';
import bg5 from './bg5.jpeg';
import bg6 from './bg6.jpeg';


function App() {







    function blockgenrator(data, requiredBlocks) {
        let dataElement = '';
        let newString = data;

        if (typeof data === 'number') {
            // console.log('Its Number converted to string');
            newString = data.toString();
        }
        for (let index = 0; index < requiredBlocks; index++) {
            if (index < newString.length) {
                dataElement =
                    dataElement +
                    "<span className='blockSpan'>" +
                    newString[index].toString() +
                    '</span>';
                console.log(newString[index].toString());
            } else {
                dataElement = dataElement + "<span className='blockSpan'> </span>";
            }
        }
        return parse(dataElement);
    }


    return (

            <
            div >
            <
            div >
            <
            div style = {
                { position: 'absolute', left: '50%', marginLeft: '-297px', top: '0px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden' }
            } >
            <
            div style = {
                { position: 'absolute', left: '0px', top: '0px' }
            } >
            <
            img src = { background1 }
            width = { 595 }
            height = { 841 }
            /></div >
            <
            div style = {
                { position: 'absolute', left: '141.48px', top: '36.47px' }
            }
            className = "cls_041" > < span className = "cls_041" > ICICI Lombard Health Care Claim Form - Hospitalisation < /span></div >
            <
            div style = {
                { position: 'absolute', left: '520.50px', top: '38.81px' }
            }
            className = "cls_002" > < span className = "cls_002" > ICICI Lombard < /span></div >
            <
            div style = {
                { position: 'absolute', left: '211.33px', top: '50.79px' }
            }
            className = "cls_004" > < span className = "cls_004" > (Issuance of this form is not to be taken as an admission of liability) < /span></div >
            <
            div style = {
                { position: 'absolute', left: '529.40px', top: '47.59px' }
            }
            className = "cls_002" > < span className = "cls_002" > Health Care < /span></div >
            <
            div style = {
                { position: 'absolute', left: '188.75px', top: '66.82px' }
            }
            className = "cls_005" > < span className = "cls_005" > Overview Health Claim Form - Hospitalization < /span></div >
            <
            div style = {
                { position: 'absolute', left: '170.72px', top: '85.59px' }
            }
            className = "cls_006" > < span className = "cls_006" > Part A < /span></div >
            <
            div style = {
                { position: 'absolute', left: '367.74px', top: '85.59px' }
            }
            className = "cls_006" > < span className = "cls_006" > To be filled < /span></div >
            <
            div style = {
                { position: 'absolute', left: '480.22px', top: '85.59px' }
            }
            className = "cls_006" > < span className = "cls_006" > Required to < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '97.45px' }
            }
            className = "cls_007" > < span className = "cls_007" > A1 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '97.45px' }
            }
            className = "cls_007" > < span className = "cls_007" > Self Declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '109.32px' }
            }
            className = "cls_007" > < span className = "cls_007" > A2 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '109.32px' }
            }
            className = "cls_007" > < span className = "cls_007" > Self Declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '121.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > A3 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '121.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > Available in Policy Copy / Employee details < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '133.05px' }
            }
            className = "cls_007" > < span className = "cls_007" > A4 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '133.05px' }
            }
            className = "cls_007" > < span className = "cls_007" > Available in Policy Copy < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '144.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > A5 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '144.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > Available in Discharge Summary < /span></div >
            <
            div style = {
                { position: 'absolute', left: '354.49px', top: '144.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > By insured / insured < /span></div >
            <
            div style = {
                { position: 'absolute', left: '462.57px', top: '144.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > To track the policy and < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '156.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > A6 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '156.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > Self Declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '373.00px', top: '156.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > relatives < /span></div >
            <
            div style = {
                { position: 'absolute', left: '456.63px', top: '156.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > other details of the insured < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '168.65px' }
            }
            className = "cls_007" > < span className = "cls_007" > A7 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '168.65px' }
            }
            className = "cls_007" > < span className = "cls_007" > Self Declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '180.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > A8 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '180.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > Available in Hospital Bills / Self Declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '54.90px', top: '192.39px' }
            }
            className = "cls_007" > < span className = "cls_007" > A9 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '192.39px' }
            }
            className = "cls_007" > < span className = "cls_007" > Available in Hospital Bills < /span></div >
            <
            div style = {
                { position: 'absolute', left: '52.74px', top: '204.26px' }
            }
            className = "cls_007" > < span className = "cls_007" > A10 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '204.26px' }
            }
            className = "cls_007" > < span className = "cls_007" > Checklist < /span></div >
            <
            div style = {
                { position: 'absolute', left: '39.49px', top: '216.12px' }
            }
            className = "cls_007" > < span className = "cls_007" > A11, Page end < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '216.12px' }
            }
            className = "cls_007" > < span className = "cls_007" > Self declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '170.83px', top: '227.99px' }
            }
            className = "cls_006" > < span className = "cls_006" > Part B < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.05px', top: '239.86px' }
            }
            className = "cls_007" > < span className = "cls_007" > B1 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '239.86px' }
            }
            className = "cls_007" > < span className = "cls_007" > Hospital Details < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.05px', top: '251.72px' }
            }
            className = "cls_007" > < span className = "cls_007" > B2 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '251.72px' }
            }
            className = "cls_007" > < span className = "cls_007" > Doctor Details < /span></div >
            <
            div style = {
                { position: 'absolute', left: '347.90px', top: '251.72px' }
            }
            className = "cls_007" > < span className = "cls_007" > To be filled by Hospital / < /span></div >
            <
            div style = {
                { position: 'absolute', left: '466.62px', top: '251.72px' }
            }
            className = "cls_007" > < span className = "cls_007" > To track the hospital < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.05px', top: '263.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > B3 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '263.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > Patient details < /span></div >
            <
            div style = {
                { position: 'absolute', left: '361.81px', top: '263.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > Treating doctor < /span></div >
            <
            div style = {
                { position: 'absolute', left: '458.32px', top: '263.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > details and the treatment < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.05px', top: '275.46px' }
            }
            className = "cls_007" > < span className = "cls_007" > B4 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '275.46px' }
            }
            className = "cls_007" > < span className = "cls_007" > Treatment / Procedure Details < /span></div >
            <
            div style = {
                { position: 'absolute', left: '466.11px', top: '275.46px' }
            }
            className = "cls_007" > < span className = "cls_007" > details related to the < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.05px', top: '287.32px' }
            }
            className = "cls_007" > < span className = "cls_007" > B5 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '287.32px' }
            }
            className = "cls_007" > < span className = "cls_007" > Required only
            for Retail / Individual customers < /span></div >
            <
            div style = {
                { position: 'absolute', left: '470.80px', top: '287.32px' }
            }
            className = "cls_007" > < span className = "cls_007" > patient admission < /span></div >
            <
            div style = {
                { position: 'absolute', left: '44.12px', top: '299.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > Page end < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '299.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > Hospital declaration < /span></div >
            <
            div style = {
                { position: 'absolute', left: '170.96px', top: '311.06px' }
            }
            className = "cls_006" > < span className = "cls_006" > Part C < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '322.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > C1 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '322.92px' }
            }
            className = "cls_007" > < span className = "cls_007" > Patient 's Name</span></div> <
            div style = {
                { position: 'absolute', left: '55.13px', top: '334.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > C2 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '334.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > Policy Number < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '346.66px' }
            }
            className = "cls_007" > < span className = "cls_007" > C3 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '346.66px' }
            }
            className = "cls_007" > < span className = "cls_007" > Card No. / UHID No. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '469.18px', top: '346.66px' }
            }
            className = "cls_007" > < span className = "cls_007" > For Electronic fund < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '358.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > C4 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '358.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > Group / Company name < /span></div >
            <
            div style = {
                { position: 'absolute', left: '350.40px', top: '358.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > To be filled by Insured < /span></div >
            <
            div style = {
                { position: 'absolute', left: '467.72px', top: '358.52px' }
            }
            className = "cls_007" > < span className = "cls_007" > transfer to the bank < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '370.39px' }
            }
            className = "cls_007" > < span className = "cls_007" > C5 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '370.39px' }
            }
            className = "cls_007" > < span className = "cls_007" > Claim number(
                if allotted) < /span></div >
            <
            div style = {
                { position: 'absolute', left: '487.34px', top: '370.39px' }
            }
            className = "cls_007" > < span className = "cls_007" > account < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '382.26px' }
            }
            className = "cls_007" > < span className = "cls_007" > C6 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '382.26px' }
            }
            className = "cls_007" > < span className = "cls_007" > Mobile / Contact no. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '394.12px' }
            }
            className = "cls_007" > < span className = "cls_007" > C7 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '394.12px' }
            }
            className = "cls_007" > < span className = "cls_007" > Provide any 1 document of proposer < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.13px', top: '405.99px' }
            }
            className = "cls_007" > < span className = "cls_007" > C8 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '405.99px' }
            }
            className = "cls_007" > < span className = "cls_007" > As per bank pass book < /span></div >
            <
            div style = {
                { position: 'absolute', left: '44.12px', top: '417.86px' }
            }
            className = "cls_007" > < span className = "cls_007" > Page end < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '417.86px' }
            }
            className = "cls_007" > < span className = "cls_007" > Account holder 's signature</span></div> <
            div style = {
                { position: 'absolute', left: '43.93px', top: '429.73px' }
            }
            className = "cls_006" > < span className = "cls_006" > Part D(Only
                for Retail / Individual customers
                if claiming & gt; 1 lakh rupees) < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '441.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > D1 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '441.59px' }
            }
            className = "cls_007" > < span className = "cls_007" > Patient 's Name</span></div> <
            div style = {
                { position: 'absolute', left: '55.01px', top: '453.46px' }
            }
            className = "cls_007" > < span className = "cls_007" > D2 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '453.46px' }
            }
            className = "cls_007" > < span className = "cls_007" > Policy Number < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '465.33px' }
            }
            className = "cls_007" > < span className = "cls_007" > D3 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '465.33px' }
            }
            className = "cls_007" > < span className = "cls_007" > Card No. / UHID No. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '477.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > D4 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '477.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > Group / Company name < /span></div >
            <
            div style = {
                { position: 'absolute', left: '350.40px', top: '477.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > To be filled by Insured < /span></div >
            <
            div style = {
                { position: 'absolute', left: '464.28px', top: '477.19px' }
            }
            className = "cls_007" > < span className = "cls_007" > As per IRDA mandate < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '489.06px' }
            }
            className = "cls_007" > < span className = "cls_007" > D5 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '489.06px' }
            }
            className = "cls_007" > < span className = "cls_007" > Claim number(
                if allotted) < /span></div >
            <
            div style = {
                { position: 'absolute', left: '470.18px', top: '489.06px' }
            }
            className = "cls_007" > < span className = "cls_007" >
            for claims & gt; 1 lac < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '500.93px' }
            }
            className = "cls_007" > < span className = "cls_007" > D6 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '500.93px' }
            }
            className = "cls_007" > < span className = "cls_007" > Mobile / Contact no. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '55.01px', top: '512.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > D7 < /span></div >
            <
            div style = {
                { position: 'absolute', left: '105.76px', top: '512.79px' }
            }
            className = "cls_007" > < span className = "cls_007" > KYC documents < /span></div >
            <
            div style = {
                { position: 'absolute', left: '44.12px', top: '524.66px' }
            }
            className = "cls_007" > < span className = "cls_007" > Page end < /span></div >
            <
            div style = {
                { position: 'absolute', left: '103.60px', top: '524.66px' }
            }
            className = "cls_007" > < span className = "cls_007" > Claimant 's signature</span></div> <
            div style = {
                { position: 'absolute', left: '244.39px', top: '547.10px' }
            }
            className = "cls_005" > < span className = "cls_005" > Documents Submitted < /span></div >
            <
            div style = {
                { position: 'absolute', left: '43.40px', top: '564.50px' }
            }
            className = "cls_006" > < span className = "cls_006" > S.No. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '207.79px', top: '564.50px' }
            }
            className = "cls_006" > < span className = "cls_006" > Document < /span></div >
            <
            div style = {
                { position: 'absolute', left: '426.50px', top: '564.50px' }
            }
            className = "cls_006" > < span className = "cls_006" > Yes < /span></div >
            <
            div style = {
                { position: 'absolute', left: '458.10px', top: '564.50px' }
            }
            className = "cls_006" > < span className = "cls_006" > No < /span></div >
            <
            div style = {
                { position: 'absolute', left: '485.11px', top: '564.50px' }
            }
            className = "cls_006" > < span className = "cls_006" > Type of document < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '576.37px' }
            }
            className = "cls_007" > < span className = "cls_007" > 1. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '576.37px' }
            }
            className = "cls_006" > < span className = "cls_006" > Claim form duly filled < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '577.51px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '577.51px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '576.37px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '588.23px' }
            }
            className = "cls_007" > < span className = "cls_007" > 2. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '588.23px' }
            }
            className = "cls_006" > < span className = "cls_006" > Discharge Summary / Daycare Summary < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '589.43px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '589.43px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '588.23px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '600.10px' }
            }
            className = "cls_007" > < span className = "cls_007" > 3. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '600.10px' }
            }
            className = "cls_006" > < span className = "cls_006" > Final Hospital Bill < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '601.34px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '601.34px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '600.10px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '611.97px' }
            }
            className = "cls_007" > < span className = "cls_007" > 4. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '611.97px' }
            }
            className = "cls_006" > < span className = "cls_006" > Payment Receipts < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '613.26px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '613.26px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '611.97px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '623.83px' }
            }
            className = "cls_007" > < span className = "cls_007" > 5. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '623.83px' }
            }
            className = "cls_006" > < span className = "cls_006" > Investigation Reports < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '625.18px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '625.18px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '623.83px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '635.70px' }
            }
            className = "cls_007" > < span className = "cls_007" > 6. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '635.70px' }
            }
            className = "cls_006" > < span className = "cls_006" > Pharmacy Bills < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '637.10px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '637.10px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '635.70px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '647.57px' }
            }
            className = "cls_007" > < span className = "cls_007" > 7. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '647.57px' }
            }
            className = "cls_006" > < span className = "cls_006" > Implant Sticker / Invoice < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '649.01px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '649.01px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '504.27px', top: '647.57px' }
            }
            className = "cls_007" > < span className = "cls_007" > Original < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '659.43px' }
            }
            className = "cls_007" > < span className = "cls_007" > 8. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '659.43px' }
            }
            className = "cls_006" > < span className = "cls_006" > Doctor Prescriptions < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '660.93px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '660.93px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '499.05px', top: '659.43px' }
            }
            className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
            <
            div style = {
                { position: 'absolute', left: '49.98px', top: '671.30px' }
            }
            className = "cls_007" > < span className = "cls_007" > 9. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '671.30px' }
            }
            className = "cls_006" > < span className = "cls_006" > Consultation Paper < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '672.85px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '672.85px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '499.05px', top: '671.30px' }
            }
            className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
            <
            div style = {
                { position: 'absolute', left: '47.83px', top: '683.17px' }
            }
            className = "cls_007" > < span className = "cls_007" > 10. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.85px', top: '683.17px' }
            }
            className = "cls_006" > < span className = "cls_006" > Age Proof < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '684.76px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '684.76px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '499.05px', top: '683.17px' }
            }
            className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
            <
            div style = {
                { position: 'absolute', left: '47.83px', top: '695.03px' }
            }
            className = "cls_007" > < span className = "cls_007" > 11. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.84px', top: '695.03px' }
            }
            className = "cls_006" > < span className = "cls_006" > Indoor Case Paper < /span></div >
            <
            div style = {
                { position: 'absolute', left: '430.68px', top: '696.68px' }
            }
            className = "cls_008" > < span className = "cls_008" > Y < /span></div >
            <
            div style = {
                { position: 'absolute', left: '460.80px', top: '696.68px' }
            }
            className = "cls_008" > < span className = "cls_008" > N < /span></div >
            <
            div style = {
                { position: 'absolute', left: '499.05px', top: '695.03px' }
            }
            className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
            <
            div style = {
                { position: 'absolute', left: '47.83px', top: '706.90px' }
            }
            className = "cls_007" > < span className = "cls_007" > 12. < /span></div >
            <
            div style = {
                { position: 'absolute', left: '77.84px', top: '706.90px' }
            }
            className = "cls_006" > < span className = "cls_006" > EFT(Copy of cancelled cheque / self attested ID poof / Bank attested copy < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '430.68px', top: '715.19px' }
                }
                className = "cls_008" > < span className = "cls_008" > Y < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '460.80px', top: '715.19px' }
                }
                className = "cls_008" > < span className = "cls_008" > N < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '77.84px', top: '718.77px' }
                }
                className = "cls_006" > < span className = "cls_006" > of passbook with IFSC code < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '499.05px', top: '718.77px' }
                }
                className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '47.83px', top: '730.64px' }
                }
                className = "cls_007" > < span className = "cls_007" > 13. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '77.84px', top: '730.64px' }
                }
                className = "cls_006" > < span className = "cls_006" > KYC(Copy of ID proof, Residence proof, & amp; 2 Passport size photos) < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '430.68px', top: '732.65px' }
                }
                className = "cls_008" > < span className = "cls_008" > Y < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '460.80px', top: '732.65px' }
                }
                className = "cls_008" > < span className = "cls_008" > N < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '499.05px', top: '730.64px' }
                }
                className = "cls_007" > < span className = "cls_007" > Photocopy < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '70.26px', top: '783.41px' }
                }
                className = "cls_009" > < span className = "cls_009"
                style = {
                    { fontSize: '7.8' }
                } > Mailing Address: < /span><span className="cls_010" style={{fontSize: '7.9'}}>ICICI Lombard Healthcare, ICICI Bank Tower, Plot No. 12, Financial District, Nanakram Guda, Gachibowli, Hyderabad-500032</span > < /div> <
                div style = {
                    { position: 'absolute', left: '89.32px', top: '793.96px' }
                }
                className = "cls_009" > < span className = "cls_009"
                style = {
                    { fontSize: '7.8' }
                } > Registered Office Address: < /span><span className="cls_010" style={{fontSize: '7.9'}}> ICICI Lombard House, 414, Veer Savarkar Marg, Near  Siddhi Vinayak Temple, Prabhadevi, Mumbai 400 025.</span > < /div> <
                div style = {
                    { position: 'absolute', left: '32.04px', top: '804.51px' }
                }
                className = "cls_009" > < span className = "cls_009"
                style = {
                    { fontSize: '7.8' }
                } > Visit us at: < /span><span className="cls_010" style={{fontSize: '7.8'}}> <a href="http:/ / www.icicilombard.com. / ">www.icicilombard.com.</a>  • </span><span className="
                cls_009 " style={{fontSize: '7.8'}}>E-Mail us at:</span> <
                span className = "cls_010" > ihealthcare @icicilombard.com.• < /span> <
                span className = "cls_009"
                style = {
                    { fontSize: '7.8' }
                } > Toll Free Number: < /span><span className="cls_010">1800 2666. • </span > < span className = "cls_009"
                style = {
                    { fontSize: '7.8' }
                } > Toll Free Fax Number: < /span><span className="cls_010" style={{fontSize: '7.1'}}>1800-209-8880</span > < /div> <
                div style = {
                    { position: 'absolute', left: '253.22px', top: '815.12px' }
                }
                className = "cls_007" > < span className = "cls_007" > IRDA Registration No .115 < /span></div >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '50%', marginLeft: '-297px', top: '883px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden' }
                } >
                <
                div style = {
                    { position: 'absolute', left: '0px', top: '0px' }
                } >
                <
                img src = { bg2 }
                width = { 595 }
                height = { 140 }
                /></div >
                <
                div style = {
                    { position: 'absolute', left: '520.50px', top: '38.81px' }
                }
                className = "cls_002" > < span className = "cls_002" > ICICI Lombard < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '141.48px', top: '41.95px' }
                }
                className = "cls_041" > < span className = "cls_041" > ICICI Lombard Health Care Claim Form - Hospitalisation < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '529.40px', top: '47.59px' }
                }
                className = "cls_002" > < span className = "cls_002" > Health Care < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '211.33px', top: '56.28px' }
                }
                className = "cls_004" > < span className = "cls_004" > (Issuance of this form is not to be taken as an admission of liability) < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '17.03px', top: '68.95px' }
                }
                className = "cls_013" > < span className = "cls_013" > ALL CLAIM SETTLEMENTS SHOULD BE MADE THROUGH NEFT(AS PER IRDA CIRCULAR), PLEASE PROVIDE YOUR BANK ACCOUNT DETAILS.REFER TO PART C. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '95.42px', top: '86.75px' }
                }
                className = "cls_016" > < span className = "cls_016" > < span > ★ < /span>Non-submission of original bills and receipts is the main reason for delay in claim settlements. Please provide the originals &amp; mandatory documents</span >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '7.72px', top: '96.09px' }
                }
                className = "cls_017" > < span className = "cls_017" > Do You Know < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '95.42px', top: '101.08px' }
                }
                className = "cls_016" > < span className = "cls_016" > < span > ★ < /span>To receive update on your claim status, provide your mobile no. &amp; E-mail ID</span >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '95.42px', top: '115.41px' }
                }
                className = "cls_016" > < span className = "cls_016" > < span > ★ < /span>You can track your claim status at: www.icicilombard.com</span > < span > → < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '303.36px', top: '115.41px' }
                }
                className = "cls_016" > < span className = "cls_016" > Claims & amp; Wellnes < /span><span>→</span > < /div> <
                div style = {
                    { position: 'absolute', left: '389.29px', top: '115.41px' }
                }
                className = "cls_016" > < span className = "cls_016" > Health Claims & amp; Wellness < /span><span>→</span > < /div> <
                div style = {
                    { position: 'absolute', left: '501.72px', top: '115.60px' }
                }
                className = "cls_016" > < span className = "cls_016" > Track Your Claims < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '232.80px', top: '128.45px' }
                }
                className = "cls_014" > < span className = "cls_014" > Part - A(To be filled by Insured) < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '24.69px', top: '141.21px' }
                }
                className = "cls_018" > < span className = "cls_018" > TO BE FILLED IN CAPITAL LETTERS ONLY < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '24.69px', top: '152.37px' }
                }
                className = "cls_011" > < span className = "cls_011" > A1.Type of Claim: < /span><span className="cls_012">Main Hospitalisation Expenses  <span className="spanBox" / > < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '270.61px', top: '152.37px' }
                }
                className = "cls_012" > < span className = "cls_012" > Pre & amp; PostHospitalisation Expenses < span className = "spanBox" / > < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '448.01px', top: '152.36px' }
                }
                className = "cls_012" > < span className = "cls_012" > Cashless Obtained: Yes < span className = "spanBox" / > < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '564.61px', top: '152.37px' }
                }
                className = "cls_012" > < span className = "cls_012" > No < span className = "spanBox" / > < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '24.69px', top: '167.95px' }
                }
                className = "cls_011" > < span className = "cls_011" > A2.Details of the Insured person in respect of whom claim is made: (patient details) < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '183.53px' }
                }
                className = "cls_012" > < span className = "cls_012" > Name of the Patient: < /span> 



                { blockgenrator('', 36) }






                <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '198.51px' }
                }
                className = "cls_012" > < span className = "cls_012" > Card No. / UHID of the Patient: < /span> 


                { blockgenrator('', 33) } <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '213.50px' }
                }
                className = "cls_012" > < span className = "cls_012" > Gender: Male < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '112.38px', top: '213.50px' }
                }
                className = "cls_012" > < span className = "cls_012" > Female < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '179.19px', top: '213.50px' }
                }
                className = "cls_012" > < span className = "cls_012" > Date of Birth: < /span> <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '381.83px', top: '213.50px' }
                }
                className = "cls_012" > < span className = "cls_012" > Completed age: Years < /span><span className="spanBox" / >
                <
                span className = "spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '505.31px', top: '213.50px' }
                }
                className = "cls_012" > < span className = "cls_012" > Months < /span><span className="spanBox" / >
                <
                span className = "spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Occupation: Service < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '140.48px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Self Employed < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '218.35px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Homemaker < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '288.22px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Student < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '335.85px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Retired < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '382.23px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > Other < /span><span className="spanBox" / > < /div> <
                div style = {
                    { position: 'absolute', left: '420.61px', top: '228.48px' }
                }
                className = "cls_012" > < span className = "cls_012" > (Please specify) < span className = "spanLine"
                style = {
                    { width: '95px' }
                }
                /></span >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '243.47px' }
                }
                className = "cls_012" > < span className = "cls_012" > Are you previously covered by any other Mediclaim / Health Insurance: Yes < span className = "spanBox" / > No < span className = "spanBox" / > .If yes, Company name: < span className = "spanLine"
                style = {
                    { width: '70px' }
                }
                /></span >
                <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '258.45px' }
                }
                className = "cls_012" > < span className = "cls_012" > Current residential address: < /span>  { blockgenrator('', 98) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '308.01px', top: '283.42px' }
                }
                className = "cls_012" > < span className = "cls_012" > City: < /span>  { blockgenrator('', 20) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '303.40px' }
                }
                className = "cls_012" > < span className = "cls_012" > State: < /span>  { blockgenrator('', 32) }

                <
                /div> <
                div style = {
                    { position: 'absolute', left: '474.53px', top: '303.40px' }
                }
                className = "cls_012" > < span className = "cls_012" > Pin code: < /span> 


                { blockgenrator('', 6) } <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '318.38px' }
                }
                className = "cls_012" > < span className = "cls_012" > Mobile no. < /span> 

                { blockgenrator('', 10) }

                <
                /div> <
                div style = {
                    { position: 'absolute', left: '211.44px', top: '318.38px' }
                }
                className = "cls_012" > < span className = "cls_012" > Landline no. < /span>  { blockgenrator('', 25) }

                <
                /div> <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '333.37px' }
                }
                className = "cls_012" > < span className = "cls_012" > E - mail: < /span>  { blockgenrator('', 40) }

                <
                /div> <
                div style = {
                    { position: 'absolute', left: '24.69px', top: '347.38px' }
                }
                className = "cls_011" > < span className = "cls_011" > A3. < /span><span className="cls_012">For </span > < span className = "cls_011" > Group / Corporate < /span><span className="cls_012">Policy</span > < /div> <
                div style = {
                    { position: 'absolute', left: '294.15px', top: '347.38px' }
                }
                className = "cls_012" > < span className = "cls_012" > For < /span><span className="cls_011">Individual/
                Retail < /span><span className="cls_012">Policy</span > < /div> <
                div style = {
                    { position: 'absolute', left: '524.10px', top: '347.38px' }
                }
                className = "cls_012" > < span className = "cls_012" > ( * < /span><span className="cls_019">Mandatory</span > < span className = "cls_012" > ) < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '362.97px' }
                }
                className = "cls_012" > < span className = "cls_012" > Member ID No. / Employee ID(Client ID): < /span>

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >



                <
                /div >

                <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '366.97px' }
                } >

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >

                <
                /div>

                <
                div style = {
                    { position: 'absolute', left: '294.15px', top: '362.97px' }
                }
                className = "cls_012" > < span className = "cls_012" > * Claim Intimation Service Request no.: < /span>

                { blockgenrator('', 11) }

                <
                /div > <
                div style = {
                    { position: 'absolute', left: '294.15px', top: '378.55px' }
                }
                className = "cls_012" > < span className = "cls_012" > Is this a renewal policy: Yes < /span> { blockgenrator('', 1) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '412.54px', top: '378.55px' }
                }
                className = "cls_012" > < span className = "cls_012" > No < /span> { blockgenrator('', 1) }

                <
                /div > <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '394.13px' }
                }
                className = "cls_012" > < span className = "cls_012" > Group / Company name: < /span>

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >



                <
                /div > 

                <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '399.97px' }
                } >

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >

                <
                /div>

                <
                div style = {
                    { position: 'absolute', left: '294.15px', top: '394.13px' }
                }
                className = "cls_012" > < span className = "cls_012" > If Yes, kindly mention your previous policy no.: < /span>

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >

                <
                /div > <
                div style = {
                    { position: 'absolute', left: '294.15px', top: '399.97px' }
                } >

                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / > < span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >
                <
                span className = "spanBox" / >

                <
                /div>


                <
                div style = {
                    { position: 'absolute', left: '24.69px', top: '425.00px' }
                }
                className = "cls_011" > < span className = "cls_011" > A4.Name of the Proposer *: < /span> { blockgenrator('', 33) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '440.58px' }
                }
                className = "cls_012" > < span className = "cls_012" > Relationship with the Proposer *: < /span> { blockgenrator('', 17) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '34.32px', top: '456.17px' }
                }
                className = "cls_012" > < span className = "cls_012" > Current Policy No.: < /span> { blockgenrator('', 15) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '315.25px', top: '456.17px' }
                }
                className = "cls_012" > < span className = "cls_012" > Card No. / UHID: < /span> { blockgenrator('', 16) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '34.31px', top: '471.75px' }
                }
                className = "cls_012" > < span className = "cls_012" > ( < /span><span className="cls_020">*Policy Holder.  For Retail policy, Proposer name required. For Corporate policy, provide Employee name)</span > < /div> <
                    div style = {
                        { position: 'absolute', left: '24.69px', top: '486.89px' }
                    }
                    className = "cls_011" > < span className = "cls_011" > A5.Nature of disease / illness contracted or injury sufferedfor which Insured was hospitalized(Diagnosis): < /span><span className="cls_012"><span className="spanLine" style={{width: '130px'}} / > < /span> < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '502.47px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > < span className = "spanLine"
                    style = {
                        { width: '550px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '518.05px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Name of hospital where admitted: < /span> { blockgenrator('', 33) } < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '533.64px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Room category occupied: Day care < /span> <span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '208.17px', top: '533.64px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Single occupancy < /span> <span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '299.87px', top: '533.64px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Twin sharing < /span> <span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '370.84px', top: '533.64px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > 3 or more beds per room < /span> <span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '493.83px', top: '533.64px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Others < span className = "spanLine"
                    style = {
                        { width: '50px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '549.22px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Date of Admission: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '228.28px', top: '549.22px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Time: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span >: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '313.93px', top: '549.22px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Date of Discharge: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '504.02px', top: '549.22px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Time: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span >: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '564.80px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Date of injury sustained or disease / Illness first detected: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.42px', top: '580.38px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > If Injury, give cause: Self inflicted < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '180.97px', top: '580.38px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Road traffic accident < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '280.91px', top: '580.38px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Substance abuse / Alcohol consumption < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '450.75px', top: '580.38px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Others < span className = "spanLine"
                    style = {
                        { width: '90px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.40px', top: '595.97px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > If Medico legal: Yes < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '125.73px', top: '595.97px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > No < span className = "spanBox" / > Reported to police: Yes < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '255.64px', top: '595.97px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > No < span className = "spanBox" / > MLC Report & amp; Police FIR attached: Yes < span className = "spanBox" / > No < span className = "spanBox" / > < /span> < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '494.85px', top: '595.97px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > (If yes, attach report) < /span></div >
                    <
                    div style = {
                        { position: 'absolute', left: '37.39px', top: '611.55px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > System of Medicine: < span className = "spanLine"
                    style = {
                        { width: '450px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '24.63px', top: '627.13px' }
                    }
                    className = "cls_011" > < span className = "cls_011" > A6. < /span><span className="cls_012"> </span > < span className = "cls_011" > Are you covered under any Topup / Additional policy: < /span><span className="cls_012">Yes </span > < span className = "spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '292.73px', top: '627.13px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > No < /span><span className="spanBox" / > < /div> <
                    div style = {
                        { position: 'absolute', left: '325.68px', top: '627.13px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > If yes, provide policy no. < span className = "spanLine"
                    style = {
                        { width: '150px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '24.62px', top: '642.72px' }
                    }
                    className = "cls_011" > < span className = "cls_011" > A7.Currently covered by any other Mediclaim / Health Insurance: < /span> { blockgenrator('', 2) } < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '314.39px', top: '642.72px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Date of commencement of first Insurance without
                    break: < /span> 

                    <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> <
                    span style = {
                        { width: "5.7px", height: "10px" }
                    }
                    className = 'spanBox' > < /span> < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '37.35px', top: '658.30px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Have you been hospitalized in the last 4 years since inception of contract: < /span>{ blockgenrator('', 2) } < /
                    div > <
                    div style = {
                        { position: 'absolute', left: '350.01px', top: '658.30px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Date: < /span> <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    span > /</span >
                    <
                    span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / > < span className = "spanBox" / >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '482.68px', top: '658.30px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Dignosis: < span className = "spanLine"
                    style = {
                        { width: '65px' }
                    }
                    /></span >
                    <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '37.33px', top: '673.88px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Have you lodged any claim against this particular admission date / attached bills with any other Insurance company: If yes, attach settlement letter, < /span></div >
                    <
                    div style = {
                        { position: 'absolute', left: '37.31px', top: '689.47px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > Company name: < span className = "spanLine"
                    style = {
                        { width: '130px' }
                    }
                    /> Policy No. <span className="spanLine" style={{width: '170px'}} / > Sum Insured: < span > ₹ < /span></span > { blockgenrator('', 7) } <
                    /div> <
                    div style = {
                        { position: 'absolute', left: '24.69px', top: '704.45px' }
                    }
                    className = "cls_011" > < span className = "cls_011" > A8.Details of Claim < /span></div >
                    <
                    div style = {
                        { position: 'absolute', left: '37.43px', top: '720.04px' }
                    }
                    className = "cls_012" > < span className = "cls_012" > a) Details of the treatment expenses claimed < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '51.88px', top: '734.42px' }
                }
                className = "cls_012" > < span className = "cls_012" > i. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '69.45px', top: '734.42px' }
                }
                className = "cls_012" > < span className = "cls_012" > Pre - hospitalization expenses: < /span> <
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '314.92px', top: '734.42px' }
                }
                className = "cls_012" > < span className = "cls_012" > ii. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '330.56px', top: '734.42px' }
                }
                className = "cls_012" > < span className = "cls_012" > Hospitalization expenses: < /span><
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '51.87px', top: '748.80px' }
                }
                className = "cls_012" > < span className = "cls_012" > iii. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '69.44px', top: '748.80px' }
                }
                className = "cls_012" > < span className = "cls_012" > Post - hospitalization expenses: < /span> <span > ₹ < /span > { blockgenrator('', 7) } <
                /div> <
                div style = {
                    { position: 'absolute', left: '314.91px', top: '748.80px' }
                }
                className = "cls_012" > < span className = "cls_012" > iv.Health - check up cost: < /span><
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '51.86px', top: '763.19px' }
                }
                className = "cls_012" > < span className = "cls_012" > v. < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '69.43px', top: '763.19px' }
                }
                className = "cls_012" > < span className = "cls_012" > Ambulance charges: < /span><
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '314.90px', top: '763.19px' }
                }
                className = "cls_012" > < span className = "cls_012" > vi.Others < span className = "spanLine"
                style = {
                    { width: '50px' }
                }
                /> :</span >
                <
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '330.54px', top: '777.57px' }
                }
                className = "cls_011" > < span className = "cls_011" > Total: < /span> <
                span > ₹ < /span> { blockgenrator('', 7) } < /
                div > <
                div style = {
                    { position: 'absolute', left: '51.85px', top: '791.96px' }
                }
                className = "cls_012" > < span className = "cls_012" > vii.Pre - hospitalization period < /span> < /
                div > <
                div style = {
                    { position: 'absolute', left: '190.93px', top: '791.96px' }
                }
                className = "cls_012" > { blockgenrator('', 3) } <
                span className = "cls_012" > Days < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '314.89px', top: '791.96px' }
                }
                className = "cls_012" > < span className = "cls_012" > viii.Post - hospitalization period: < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '435.61px', top: '791.96px' }
                }
                className = "cls_012" > { blockgenrator('', 3) } <
                span className = "cls_012" > Days < /span></div >
                <
                div style = {
                    { position: 'absolute', left: '165.12px', top: '806.04px' }
                }
                className = "cls_011" > < span className = "cls_011" >
                क्लेम फॉर्म हिंदी के लिए कृपया हमारी वेबसाइट पर जाँच कीजिये < /span > <
                a href = "http://www.icicilombard.com/" > www.icicilombard.com < /a>  < /
                div > <
                div style = {
                    { position: 'absolute', left: '18.86px', top: '817.32px' }
                }
                className = "cls_006" > < span className = "cls_006" > Claim documents to be dispatched to: < /span><span className="cls_007">ICICI Lombard Healthcare, ICICI Bank Tower, Plot No. 12, Financial District, Nanakram Guda, Gachibowli, Hyderabad-500032</span > < /div> < /
                div > <
                div style = {
                    { position: 'absolute', left: '50%', marginLeft: '-297px', top: '1765px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden' }
                } >
                <
                div style = {
                    { position: 'absolute', left: '0px', top: '0px' }
                } >
                <
                img src = { bg3 }
                width = { 595 }
                height = { 841 }
                /></div >
                <
                div style = {
                    { position: 'absolute', left: '37.43px', top: '34.58px' }
                }
                className = "cls_012" > < span className = "cls_012" > b) Claim
            for < /span></div >
            <
            div style = {
                { position: 'absolute', left: '51.88px', top: '48.96px' }
            }
            className = "cls_012" > < span className = "cls_012" > i.Domiciliary Hospitalization: < /span></div >
            <
            div style = {
                { position: 'absolute', left: '221.55px', top: '48.96px' }
            }
            className = "cls_012" > < span className = "cls_012" > Yes < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '254.89px', top: '48.96px' }
            }
            className = "cls_012" > < span className = "cls_012" > No < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '281.42px', top: '48.96px' }
            }
            className = "cls_012" > < span className = "cls_012" > (If yes, provide details in annexure) < /span></div >
            <
            div style = {
                { position: 'absolute', left: '51.88px', top: '63.34px' }
            }
            className = "cls_012" > < span className = "cls_012" > ii.Day care: < /span></div >
            <
            div style = {
                { position: 'absolute', left: '221.54px', top: '63.34px' }
            }
            className = "cls_012" > < span className = "cls_012" > Yes < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '257.28px', top: '63.34px' }
            }
            className = "cls_012" > < span className = "cls_012" > No < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '51.87px', top: '77.73px' }
            }
            className = "cls_012" > < span className = "cls_012" > iii.Extended care / Inpatient rehabilitation: < /span></div >
            <
            div style = {
                { position: 'absolute', left: '221.54px', top: '77.73px' }
            }
            className = "cls_012" > < span className = "cls_012" > Yes < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '257.52px', top: '77.73px' }
            }
            className = "cls_012" > < span className = "cls_012" > No < /span><span className="spanBox" / > < /div> <
            div style = {
                { position: 'absolute', left: '37.42px', top: '93.31px' }
            }
            className = "cls_012" > < span className = "cls_012" > c) Details of lump sum / cash benefit claimed: < /span></div >
        <
        div style = {
            { position: 'absolute', left: '51.87px', top: '107.69px' }
        }
    className = "cls_012" > < span className = "cls_012" > i.Hospital daily cash: < /span> <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '339.93px', top: '107.69px' }
        }
    className = "cls_012" > < span className = "cls_012" > ii. < /span></div >
        <
        div style = {
            { position: 'absolute', left: '357.26px', top: '107.69px' }
        }
    className = "cls_012" > < span className = "cls_012" > Surgical cash: < /span> <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '51.86px', top: '125.67px' }
        }
    className = "cls_012" > < span className = "cls_012" > iii.Critical illness: < /span> <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '339.93px', top: '125.67px' }
        }
    className = "cls_012" > < span className = "cls_012" > iv.Convalescence: < /span> <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '51.85px', top: '143.65px' }
        }
    className = "cls_012" > < span className = "cls_012" > v.Pre / Post hospitalizationlump sum benefit: < /span> <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '339.92px', top: '143.65px' }
        }
    className = "cls_012" > < span className = "cls_012" > vi.Others: < span className = "spanLine"
    style = {
        { width: '65px' }
    }
    /></span >
    <
    span > ₹ < /span> { blockgenrator('', 7) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '162.14px' }
        }
    className = "cls_011" > < span className = "cls_011" > A9.Details of the amount claimed < /span></div >
        <
        div style = {
            { position: 'absolute', left: '24.69px', top: '177.55px' }
        }
    className = "cls_011" > < span className = "cls_011" > Bill heads < /span><span className="cls_012">(as applicable)</span > < /div> <
    div style = {
        { position: 'absolute', left: '283.40px', top: '177.55px' }
    }
    className = "cls_011" > < span className = "cls_011" > Bill number < /span></div >
        <
        div style = {
            { position: 'absolute', left: '366.15px', top: '177.55px' }
        }
    className = "cls_011" > < span className = "cls_011" > Bill date < /span></div >
        <
        div style = {
            { position: 'absolute', left: '422.86px', top: '177.55px' }
        }
    className = "cls_011" > < span className = "cls_011" > Bills attached < /span></div >
        <
        div style = {
            { position: 'absolute', left: '524.64px', top: '177.55px' }
        }
    className = "cls_011" > < span className = "cls_011" > Amount < /span></div >
        <
        div style = {
            { position: 'absolute', left: '24.69px', top: '191.29px' }
        }
    className = "cls_023" > < span className = "cls_023" > Room rent < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '186.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '343.64px', top: '185.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '185.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '189.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '204.95px' }
        }
    className = "cls_023" > < span className = "cls_023" > Doctors consultation / Visit charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '199.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '197.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '198.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '202.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '218.62px' }
        }
    className = "cls_023" > < span className = "cls_023" > Investigation charges(Includes Radiology and Pathology reports) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '214.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '210.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '211.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '215.29px' }
        } >
        <
        span > ₹ < /span>{ blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '232.28px' }
        }
    className = "cls_023" > < span className = "cls_023" > Surgeon and Asst.surgeon charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '227.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '225.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '226.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '230.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '245.94px' }
        }
    className = "cls_023" > < span className = "cls_023" > Anesthetist charges & amp;
    Operation theatre charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '241.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '238.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '239.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '243.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '259.61px' }
        }
    className = "cls_023" > < span className = "cls_023" > Equipment charges / Procedure charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '254.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '252.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '253.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '257.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '273.27px' }
        }
    className = "cls_023" > < span className = "cls_023" > Cost of implant(If any) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '269.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '265.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '266.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '270.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '286.94px' }
        }
    className = "cls_023" > < span className = "cls_023" > Medicine charges < /span><span className="cls_024">(Includes ward and OT medicines and consumables)</span > < /div> <
    div style = {
            { position: 'absolute', left: '274.64px', top: '283.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '278.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '279.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '283.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '300.60px' }
        }
    className = "cls_023" > < span className = "cls_023" > Pharmacy charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '296.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '293.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '293.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '295.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '314.27px' }
        }
    className = "cls_023" > < span className = "cls_023" > Taxes / Surcharges / Service charge < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '309.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '306.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '305.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '309.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '327.93px' }
        }
    className = "cls_023" > < span className = "cls_023" > Miscellaneous / Other charges < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '323.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '318.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '319.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '323.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '341.60px' }
        }
    className = "cls_023" > < span className = "cls_023" > Pre hospitalization bills(If any) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '336.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '333.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '334.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '338.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '355.26px' }
        }
    className = "cls_023" > < span className = "cls_023" > Post hospitalization bills(If any) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '351.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '347.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '348.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '352.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '368.92px' }
        }
    className = "cls_023" > < span className = "cls_023" > Discount provided by hospital(If any) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '274.64px', top: '364.29px' }
        } >
        <
        span className = "spanLine"
    style = {
        { width: '75px' }
    }
    /> < /
    div > <
        div style = {
            { position: 'absolute', left: '344.64px', top: '361.29px' }
        } > { blockgenrator('', 6) } <
        /div> <
    div style = {
            { position: 'absolute', left: '434.64px', top: '362.29px' }
        } > { blockgenrator('', 2) } <
        /div> <
    div style = {
            { position: 'absolute', left: '500.64px', top: '366.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '24.69px', top: '382.59px' }
        }
    className = "cls_025" > < span className = "cls_025" > Total claimed amount(In < /span><span className="cls_023">`</span > < span className = "cls_025" > ) < /span><span className="cls_009"> </span > < span className = "cls_010" > (Total claimed amount should be equal to the amount in attached bill documents) < /span></div >
        <
        div style = {
            { position: 'absolute', left: '500.64px', top: '380.29px' }
        } >
        <
        span > ₹ < /span> { blockgenrator('', 6) } < /
    div > <
        div style = {
            { position: 'absolute', left: '16.51px', top: '405.22px' }
        }
    className = "cls_026" > < span className = "cls_026" > MANDATORY: ALL CLAIM SETTLEMENTS SHOULD BE MADE THROUGH NEFT(AS PER IRDA CIRCULAR), PLEASE PROVIDE YOUR BANK ACCOUNT DETAILS.REFER TO PART C. < /span></div >
        <
        div style = {
            { position: 'absolute', left: '22.60px', top: '428.86px' }
        }
    className = "cls_011" > < span className = "cls_011" > A10. < /span><span className="cls_012">In support of the above claim, I enclose following documents in original</span > < span className = "cls_011" > < /span><span className="cls_012">(Please indicate by ticking in the </span > < span className = "cls_011" > Yes / No < /span> <
    span className = "cls_012" > column below) < /span> < /
div > <
    div style = {
        { position: 'absolute', left: '22.60px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > Type of Document(s) - * Mandatory < /span></div >
    <
    div style = {
        { position: 'absolute', left: '248.53px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > Yes < /span></div >
    <
    div style = {
        { position: 'absolute', left: '276.28px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > No < /span></div >
    <
    div style = {
        { position: 'absolute', left: '298.40px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > Type of Document(s) - As Applicable < /span></div >
    <
    div style = {
        { position: 'absolute', left: '544.55px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > Yes < /span></div >
    <
    div style = {
        { position: 'absolute', left: '572.30px', top: '443.46px' }
    }
className = "cls_011" > < span className = "cls_011" > No < /span></div >
    <
    div style = {
        { position: 'absolute', left: '22.60px', top: '457.14px' }
    }
className = "cls_007" > < span className = "cls_007" > 1. Claim form duly filled and signed * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '452.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '452.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '457.14px' }
}
className = "cls_007" > < span className = "cls_007" > 9. ICICI Lombard GIC Authorisation Letter < /span></div >
    <
    div style = {
        { position: 'absolute', left: '547.64px', top: '452.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '573.64px', top: '452.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '469.54px' }
}
className = "cls_007" > < span className = "cls_007" > 2. Discharge summary * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '464.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '464.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '469.54px' }
}
className = "cls_007" > < span className = "cls_007" > 10. Implant name and invoice(
        if any) with implant sticker < /span></div >
    <
    div style = {
        { position: 'absolute', left: '547.64px', top: '464.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '573.64px', top: '464.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '481.95px' }
}
className = "cls_007" > < span className = "cls_007" > 3. Hospital bills, Final / main hospital bill and other bills(
        if any) * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '476.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '476.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '481.95px' }
}
className = "cls_007" > < span className = "cls_007" > 11. Indoor Case Papers < /span></div >
    <
    div style = {
        { position: 'absolute', left: '547.64px', top: '476.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '573.64px', top: '476.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '494.36px' }
}
className = "cls_007" > < span className = "cls_007" > 4. Hospital payment receipt & amp;
other receipts supporting bills * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '488.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '488.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '494.36px' }
}
className = "cls_007" > < span className = "cls_007" > 12. Prescription papers / Consultation papers < /span></div >
    <
    div style = {
        { position: 'absolute', left: '547.64px', top: '488.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '573.64px', top: '488.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '506.76px' }
}
className = "cls_007" > < span className = "cls_007" > 5. Investigation reports * (Including ECG / CT / MRI / USG / HPE) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '499.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '499.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '506.76px' }
}
className = "cls_007" > < span className = "cls_007" > 13. Others(details) < span className = "spanLine"
style = {
    { width: '155px' }
}
/> < /span > < /div > <
div style = {
        { position: 'absolute', left: '547.64px', top: '506.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '573.64px', top: '506.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '519.17px' }
}
className = "cls_007" > < span className = "cls_007" > 6. Medicine / Pharmacy bills with doctors prescription * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '512.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '512.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '312.36px', top: '519.17px' }
}
className = "cls_007" > < span className = "cls_007" > < span className = "spanLine"
style = {
    { width: '210px' }
}
/> < /span > < /div > <
div style = {
    { position: 'absolute', left: '22.60px', top: '531.58px' }
}
className = "cls_007" > < span className = "cls_007" > 7. < /span><span className="cls_024"> Age proof (Driving License/
PAN card / Passport / Aadhar copy) * < /span></div >
<
div style = {
        { position: 'absolute', left: '250.64px', top: '526.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
        { position: 'absolute', left: '277.64px', top: '526.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '22.60px', top: '547.76px' }
}
className = "cls_027" > < span className = "cls_027" > 8. Part - C(For EFT / RTGS / NEFT) * < /span></div >
    <
    div style = {
        { position: 'absolute', left: '250.64px', top: '540.29px' }
    } >
    <
    span className = "spanBox" / >
    <
    /div> <
div style = {
    { position: 'absolute', left: '298.40px', top: '548.26px' }
}
className = "cls_028" > < span className = "cls_028" > 14. Part - D(KYC documents required
    if total claimed amt.is & gt;
    `1 lakh)</span></div>
    <div style={{position: 'absolute', left: '547.64px', top: '542.29px'}}>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '573.64px', top: '542.29px'}}>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.60px', top: '563.50px'}} className="cls_009"><span className="cls_009">Please attach all the documents as per above serial number.</span><span className="cls_010"> Films like x-ray film, CT Scan film, MRI Scan film, etc. are not required. Provide reports only</span></div>
    <div style={{position: 'absolute', left: '22.60px', top: '584.65px'}} className="cls_011"><span className="cls_011">A11.Please provide the reason for delay in submitting the documents</span>
    
    
    
    
    </div>

    <div style={{position: 'absolute', left: '301.60px', top: '573.65px'}}>
    <span className='imagespan' />

    </div>
    <div style={{position: 'absolute', left: '413.11px', top: '591.51px'}} className="cls_031"><span className="cls_031">Provide Details</span></div>
    <div style={{position: 'absolute', left: '22.60px', top: '596.64px'}} className="cls_012"><span className="cls_012">(Post 30 days from Date of Discharge)</span></div>
    <div style={{position: 'absolute', left: '22.99px', top: '625.96px'}} className="cls_011"><span className="cls_011">Declaration by the Insured:</span></div>
    <div style={{position: 'absolute', left: '22.99px', top: '643.94px'}} className="cls_012"><span className="cls_012">I hereby declare that the information furnished in this claim form is true and correct to the best of my knowledge and belief. If I have made any false or</span></div>
    <div style={{position: 'absolute', left: '22.98px', top: '657.73px'}} className="cls_012"><span className="cls_012">untrue statement, suppression or concealment of any material fact with respect to questions asked in relation to this claim, my right to claim</span></div>
    <div style={{position: 'absolute', left: '22.98px', top: '671.51px'}} className="cls_012"><span className="cls_012">reimbursement shall be forfeited. I also consent and authorize TPA/ insurance company, to seek necessary medical information/ documents from any</span></div>
    <div style={{position: 'absolute', left: '22.97px', top: '685.29px'}} className="cls_012"><span className="cls_012">hospital/ Medical Practitioner who has attended on the person against whom this claim is made. I hereby declare that I have included all the bills/</span></div>
    <div style={{position: 'absolute', left: '22.97px', top: '699.08px'}} className="cls_012"><span className="cls_012">receipts for the purpose of this claim and that I will not be making any supplementary claim except the pre/ post-hospitalization claim, if any.</span></div>
    <div style={{position: 'absolute', left: '22.97px', top: '735.04px'}} className="cls_012"><span className="cls_012">Date:</span>
      <span className="spanBox" /><span className="spanBox" />
      <span>/</span>
      <span className="spanBox" /><span className="spanBox" />
      <span>/</span>
      <span className="spanBox" /><span className="spanBox" /><span className="spanBox" /><span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '185.22px', top: '735.04px'}} className="cls_012"><span className="cls_012">Place: <span className="spanLine" style={{width: '95px'}} />     Insured's Signature: ____________________________</span></div>
    <div style={{position: 'absolute', left: '164.19px', top: '752.89px'}} className="cls_011"><span className="cls_011">क्लेम फॉर्म हिंदी के लिए कृपया हमारी वेबसाइट पर जाँच कीजिये  </span>
      <a href="http://www.icicilombard.com/">www.icicilombard.com</a> 
    </div>
    <div style={{position: 'absolute', left: '17.94px', top: '764.17px'}} className="cls_006"><span className="cls_006">Claim documents to be dispatched to: </span><span className="cls_007">ICICI Lombard Healthcare, ICICI Bank Tower, Plot No. 12, Financial District, Nanakram Guda, Gachibowli, Hyderabad-500032</span></div>
    <div style={{position: 'absolute', left: '189.44px', top: '784.50px'}} className="cls_030"><span className="cls_030">Your Claim details are just an SMS away, Please SMS &lt;KEYWORD&gt; to 57 57 58</span></div>
    <div style={{position: 'absolute', left: '16.40px', top: '797.83px'}} className="cls_030"><span className="cls_030">• Cashless Status: &lt;KEYWORD&gt; is  “ILHC AL &lt;12-digit-AL-No.&gt;”  • Claim Status: &lt;KEYWORD&gt; is "ILHC CL &lt;12-digit-CL-No.&gt;"  • Payment details: &lt;KEYWORD&gt; is "ILHC PAY &lt;12-digit-Claim-No.&gt;"</span></div>
    <div style={{position: 'absolute', left: '180.53px', top: '811.16px'}} className="cls_030"><span className="cls_030">(AL No. &amp; CL No. is the one you have received on your mobile no. after intimating us)</span></div>
    <div style={{position: 'absolute', left: '145.09px', top: '824.49px'}} className="cls_030"><span className="cls_030">To view real time claim status, please click: </span>
      <a href="https://www.icicilombard.com/il-health-care/customer/claimstatus/">https://www.icicilombard.com/IL-Health-Care/Customer/ClaimStatus</a> </div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '2619px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
      <img src={bg_4} width={595} height={841} /></div>
    <div style={{position: 'absolute', left: '186.11px', top: '35.70px'}} className="cls_005"><span className="cls_005" style={{fontSize: '10.1'}}>Part - B </span><span className="cls_032">(To be filled by Treating Doctor/ Hospital only)</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '49.30px'}} className="cls_011"><span className="cls_011">B1. Details of the Hospital/ Nursing home in which treatment was taken</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '63.60px'}} className="cls_023"><span className="cls_023">Name of the Hospital/ Nursing home:</span>
    { blockgenrator('', 33) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '77.27px'}} className="cls_023"><span className="cls_023">Address:</span>
    { blockgenrator('', 41) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '90.93px'}} className="cls_023"><span className="cls_023">City:</span>
    { blockgenrator('', 18) }
    </div>
    <div style={{position: 'absolute', left: '290.84px', top: '90.93px'}} className="cls_023"><span className="cls_023">State:</span>
    { blockgenrator('', 21) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '104.60px'}} className="cls_023"><span className="cls_023">Pincode:</span>
    { blockgenrator('', 6) }
    </div>
    <div style={{position: 'absolute', left: '143.55px', top: '104.60px'}} className="cls_023"><span className="cls_023">Telephone no.:</span>
    { blockgenrator('', 15) }
    </div>
    <div style={{position: 'absolute', left: '408.72px', top: '104.60px'}} className="cls_023"><span className="cls_023">Mobile no.:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '118.26px'}} className="cls_023"><span className="cls_023">ROHINI ID:</span>
    { blockgenrator('', 15) }
    </div>
    <div style={{position: 'absolute', left: '257.52px', top: '118.26px'}} className="cls_023"><span className="cls_023">Type of Hospital: Network</span>
    { blockgenrator('', 1) }
    </div>
    <div style={{position: 'absolute', left: '367.85px', top: '118.26px'}} className="cls_023"><span className="cls_023">Non Network  { blockgenrator('', 1) } . If Non Network, provide below details</span>
    </div>
    <div style={{position: 'absolute', left: '22.79px', top: '131.93px'}} className="cls_023"><span className="cls_023">Registration No. with State Code: <span className="spanLine" style={{width: '95px'}} /> PAN:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '403.27px', top: '131.93px'}} className="cls_023"><span className="cls_023">Number of Inpatient beds:</span>
    { blockgenrator('', 3) }
    </div>
    <div style={{position: 'absolute', left: '22.78px', top: '145.59px'}} className="cls_023"><span className="cls_023">Facilities available in the hospital:  OT:</span>
    { blockgenrator('', 2) }
    </div>
    <div style={{position: 'absolute', left: '193.75px', top: '145.59px'}} className="cls_023"><span className="cls_023">ICU:</span>
    { blockgenrator('', 2) }
    </div>
    <div style={{position: 'absolute', left: '22.77px', top: '159.33px'}} className="cls_011"><span className="cls_011">B2. Details of the attending Medical Practitioner/ Doctor/ Treating Physician or Surgeon</span></div>
    <div style={{position: 'absolute', left: '22.76px', top: '173.64px'}} className="cls_023"><span className="cls_023">Name:</span>
    { blockgenrator('', 39) }
    </div>
    <div style={{position: 'absolute', left: '22.76px', top: '188.44px'}} className="cls_023"><span className="cls_023">Qualification:</span>
    { blockgenrator('', 16) }
    </div>
    <div style={{position: 'absolute', left: '297.92px', top: '188.44px'}} className="cls_023"><span className="cls_023">Registration no:</span>
    { blockgenrator('', 17) }
    </div>
    <div style={{position: 'absolute', left: '22.76px', top: '202.11px'}} className="cls_023"><span className="cls_023">Telephone no.:</span>
    { blockgenrator('', 16) }
    </div>
    <div style={{position: 'absolute', left: '297.92px', top: '202.11px'}} className="cls_023"><span className="cls_023">Mobile no.:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '220.28px'}} className="cls_011"><span className="cls_011">B3. Details of the patient admitted</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '235.27px'}} className="cls_012"><span className="cls_012">Name of the patient:</span>
    { blockgenrator('', 38) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '250.25px'}} className="cls_012"><span className="cls_012">IP Registration no.:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '229.76px', top: '250.25px'}} className="cls_012"><span className="cls_012">Gender:</span>
    { blockgenrator('', 2) }
    </div>
    <div style={{position: 'absolute', left: '294.27px', top: '250.25px'}} className="cls_012"><span className="cls_012">Age:</span>
    { blockgenrator('', 2) }
    </div>
    <div style={{position: 'absolute', left: '339.79px', top: '250.25px'}} className="cls_012"><span className="cls_012">Years</span>
    { blockgenrator('', 2) }
    </div>
    <div style={{position: 'absolute', left: '390.36px', top: '250.25px'}} className="cls_012"><span className="cls_012">Months    Date of Birth:</span>
    { blockgenrator('', 8) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '265.23px'}} className="cls_012"><span className="cls_012">Date of Admission:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '221.24px', top: '265.23px'}} className="cls_012"><span className="cls_012">Time:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>:</span>
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '302.81px', top: '265.23px'}} className="cls_012"><span className="cls_012">Date of Discharge:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '493.97px', top: '265.23px'}} className="cls_012"><span className="cls_012">Time:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>:</span>
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '280.22px'}} className="cls_012"><span className="cls_012">Type of Admission:  Emergency </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '188.52px', top: '280.22px'}} className="cls_012"><span className="cls_012">Planned </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '267.92px', top: '280.22px'}} className="cls_012"><span className="cls_012">Day Care </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '350.76px', top: '280.22px'}} className="cls_012"><span className="cls_012">Maternity </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '295.20px'}} className="cls_012"><span className="cls_012">Type of Treatment: Surgical Procedure </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '188.12px', top: '295.20px'}} className="cls_012"><span className="cls_012">Multiple Surgical Procedure </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '315.75px', top: '295.20px'}} className="cls_012"><span className="cls_012">Medical Treatment </span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.79px', top: '310.19px'}} className="cls_012"><span className="cls_012">If Maternity, Date of Delivery:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '286.84px', top: '310.19px'}} className="cls_012"><span className="cls_012">Gravida Status: G</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '369.29px', top: '310.19px'}} className="cls_012"><span className="cls_012">P</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '392.57px', top: '310.19px'}} className="cls_012"><span className="cls_012">A <span className="spanBox" /> L</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.79px', top: '325.17px'}} className="cls_012"><span className="cls_012">Premature Baby: Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '122.40px', top: '325.17px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.79px', top: '340.15px'}} className="cls_012"><span className="cls_012">Status at time of discharge: Discharge to home</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '229.33px', top: '340.15px'}} className="cls_012"><span className="cls_012">Discharge to another hospital</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '372.23px', top: '340.15px'}} className="cls_012"><span className="cls_012">Deceased</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.79px', top: '355.14px'}} className="cls_012"><span className="cls_012">Total claimed amount: </span>
      <span>₹</span>
      { blockgenrator('', 6) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '368.97px'}} className="cls_011"><span className="cls_011">B4. Details of the procedure</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '383.96px'}} className="cls_012"><span className="cls_012">Pre-authorization obtained: Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '158.11px', top: '383.96px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '184.57px', top: '383.96px'}} className="cls_012"><span className="cls_012">If yes,  Pre-authorization No.:</span>
    { blockgenrator('', 12) }
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '398.94px'}} className="cls_012"><span className="cls_012">If authorization by network hospital not obtained, give reason: <span className="spanLine" style={{width: '325px'}} /></span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '413.92px'}} className="cls_012"><span className="cls_012">Date of injury sustained or disease/ illness first detected:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '428.91px'}} className="cls_012"><span className="cls_012">If Injury, give cause: Self inflicted</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '169.88px', top: '428.91px'}} className="cls_012"><span className="cls_012">Road traffic accident</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '274.43px', top: '428.91px'}} className="cls_012"><span className="cls_012">Substance abuse/Alcohol consumption</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '446.32px', top: '428.91px'}} className="cls_012"><span className="cls_012">Others <span className="spanLine" style={{width: '95px'}} /></span></div>
    <div style={{position: 'absolute', left: '22.78px', top: '443.89px'}} className="cls_012"><span className="cls_012">If Medico legal:  Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '110.11px', top: '443.89px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '141.44px', top: '443.89px'}} className="cls_012"><span className="cls_012">Reported to police: Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '242.01px', top: '443.89px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '270.35px', top: '443.89px'}} className="cls_012"><span className="cls_012">MLC Report &amp; Police FIR attached:  Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '433.70px', top: '443.89px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '458.63px', top: '443.89px'}} className="cls_012"><span className="cls_012">(If yes, attach report)</span></div>
    <div style={{position: 'absolute', left: '22.77px', top: '458.87px'}} className="cls_012"><span className="cls_012">FIR no. <span className="spanLine" style={{width: '125px'}} />  If not reported to Police, give reason: <span className="spanLine" style={{width: '275px'}} /></span></div>
    <div style={{position: 'absolute', left: '22.77px', top: '473.86px'}} className="cls_012"><span className="cls_012">If injury due to substance abuse/alcohol consumption, test conducted to establish this: Yes</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '380.09px', top: '473.86px'}} className="cls_012"><span className="cls_012">No</span>
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '405.74px', top: '473.86px'}} className="cls_012"><span className="cls_012">(If yes, attach report)</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '492.43px'}} className="cls_011"><span className="cls_011">B5. This section is mandatory </span><span className="cls_012">only</span><span className="cls_033"> </span><span className="cls_011">if your health policy is not provided by your</span></div>
    <div style={{position: 'absolute', left: '347.12px', top: '493.43px'}} className="cls_011"><span className="cls_011">employer</span></div>
    <div style={{position: 'absolute', left: '22.92px', top: '512.63px'}} className="cls_012"><span className="cls_012">A) Diagnosis (ICD 10 Code primary &amp; additional dignosis)</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '100px'}} />
    </div>
    <div style={{position: 'absolute', left: '36.26px', top: '527.01px'}} className="cls_012"><span className="cls_012">i) Primary diagnosis (with ICD 10 code )</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '150px'}} />
    </div>
    <div style={{position: 'absolute', left: '36.26px', top: '541.40px'}} className="cls_012"><span className="cls_012">ii) Additional diagnosis (with ICD 10 code)</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '150px'}} />
    </div>
    <div style={{position: 'absolute', left: '36.26px', top: '555.78px'}} className="cls_012"><span className="cls_012">iii) Procedure diagnosis (with ICD 10 PCS code)</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '120px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.92px', top: '570.16px'}} className="cls_012"><span className="cls_012">B) Nature of surgery/ treatment given for present ailment</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '105px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.92px', top: '584.55px'}} className="cls_012"><span className="cls_012">C) Date of first consultation (Prior to hospitalization)</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '120px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.92px', top: '598.93px'}} className="cls_012"><span className="cls_012">D) Presenting complaints of the patient during admission</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '100px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.92px', top: '613.32px'}} className="cls_012"><span className="cls_012">E)  Past medical history of the patient along with duration of illness</span>
      <span className="spanLine" style={{width: '250px', position: 'absolute', left: '320px', top: '9px'}} />
    </div>
    <div style={{position: 'absolute', left: '36.26px', top: '625.38px'}} className="cls_010"><span className="cls_010">(If yes, attach first &amp; all past consultation paper)</span>
    </div>
    <div style={{position: 'absolute', left: '22.92px', top: '637.19px'}} className="cls_012"><span className="cls_012">F)  Was the patient under influence of alcohol during admission</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '80px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.91px', top: '651.58px'}} className="cls_012"><span className="cls_012">G) Whether the present treatment ailment is a complication of pre-existing disease ?</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '20px' , top:"1px"}} />
    </div>
    <div style={{position: 'absolute', left: '36.25px', top: '665.89px'}} className="cls_023"><span className="cls_023">i)  If yes, please specify the disease (or) complication of any previous surgery done ?</span>
      <span className="spanLine" style={{width: '250px', position: 'absolute', left: '310px', top: '1px'}} />
    </div>
    <div style={{position: 'absolute', left: '36.25px', top: '679.55px'}} className="cls_023"><span className="cls_023">ii) If yes, please specify the details</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '175px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.91px', top: '693.29px'}} className="cls_012"><span className="cls_012">H) Whether the disease/ disorder is congenital in nature ?</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '100px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.91px', top: '708.28px'}} className="cls_012"><span className="cls_012">I)  Number of in-patient beds in the hospital (including ICU)</span>
      <span className="spanLine" style={{width: '250px', position: 'relative', left: '100px' , top:'1px'}} />
    </div>
    <div style={{position: 'absolute', left: '22.80px', top: '722.44px'}} className="cls_011"><span className="cls_011">Declaration by the hospital</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '736.23px'}} className="cls_012"><span className="cls_012">We hereby declare that the information furnished in this Claim Form is true &amp; correct to the best of our knowledge and belief. If we have made any</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '749.41px'}} className="cls_012"><span className="cls_012">false or untrue statement, suppression or concealment of any material fact, our right to claim under this claim shall be forfeited.</span></div>
    <div style={{position: 'absolute', left: '34.93px', top: '784.23px'}} className="cls_023"><span className="cls_023">Registration No. of Hospital</span></div>
    <div style={{position: 'absolute', left: '34.93px', top: '797.66px'}} className="cls_023"><span className="cls_023">(Rubber stamp of the hospital)</span></div>
    <div style={{position: 'absolute', left: '255.69px', top: '798.16px'}} className="cls_007"><span className="cls_007">Date:</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span>/</span>
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
      <span className="spanBox" />
    </div>
    <div style={{position: 'absolute', left: '454.80px', top: '798.16px'}} className="cls_007"><span className="cls_007">Doctor’s Seal and Signature</span></div>
    <div style={{position: 'absolute', left: '22.80px', top: '811.10px'}} className="cls_023"><span className="cls_023">As per the policy Terms and Conditions, the Company reserves its right to have the Insured examined by a doctor appointed by it for verification of diagnosis.</span></div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '3485px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
      <img src={bg5} width={595} height={841} /></div>
    <div style={{position: 'absolute', left: '267.95px', top: '32.48px'}} className="cls_005"><span className="cls_005" style={{fontSize: '11.1px'}}>Part - C -</span></div>
    <div style={{position: 'absolute', left: '315.96px', top: '32.48px'}} className="cls_005"><span className="cls_005" style={{fontSize: '11.1px'}}>NEFT Form</span></div>
    <div style={{position: 'absolute', left: '246.43px', top: '47.01px'}} className="cls_035"><span className="cls_035">(For Direct Electronic</span></div>
    <div style={{position: 'absolute', left: '329.31px', top: '47.01px'}} className="cls_035"><span className="cls_035">Fund Transfer)</span></div>
    <div style={{position: 'absolute', left: '50.25px', top: '66.21px'}} className="cls_013"><span className="cls_013" style={{fontSize: '7.6px'}}>ALL CLAIM SETTLEMENTS SHOULD BE MADE THROUGH NEFT (AS PER IRDA CIRCULAR), PLEASE PROVIDE YOUR BANK ACCOUNT DETAILS.</span></div>
    <div style={{position: 'absolute', left: '16.96px', top: '80.10px'}} className="cls_011"><span className="cls_011">C1. Patient's Name:</span>
    { blockgenrator('', 38) }
    </div>
    <div style={{position: 'absolute', left: '16.96px', top: '89.69px'}} className="cls_036"><span className="cls_036">(in respect of whom claim is made)</span><span className="cls_012">:</span></div>
    <div style={{position: 'absolute', left: '16.96px', top: '104.68px'}} className="cls_011"><span className="cls_011">C2. Policy Number:</span>
    { blockgenrator('', 38) }
    </div>
    <div style={{position: 'absolute', left: '16.96px', top: '119.66px'}} className="cls_011"><span className="cls_011">C3. Card No./ UHID No.:</span>
    { blockgenrator('', 37) }
    </div>
    <div style={{position: 'absolute', left: '16.96px', top: '134.64px'}} className="cls_011"><span className="cls_011">C4. Group/Company Name</span><span className="cls_012"> </span><span className="cls_036">(for Group/Corporate policy holders)</span><span className="cls_012">:</span>
    { blockgenrator('', 28) }
    </div>
    <div style={{position: 'absolute', left: '16.96px', top: '149.63px'}} className="cls_011"><span className="cls_011">C5. Claim Number</span><span className="cls_012"> </span><span className="cls_036">(if allotted)</span><span className="cls_012">:</span>
    { blockgenrator('', 11) }
    </div>
    <div style={{position: 'absolute', left: '276.39px', top: '149.63px'}} className="cls_011"><span className="cls_011">C6. Mobile/ Contact No.</span><span className="cls_012">:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '16.96px', top: '164.61px'}} className="cls_011"><span className="cls_011">C7. Email:</span>
    { blockgenrator('', 41) }
    </div>
    <div style={{position: 'absolute', left: '17.01px', top: '179.33px'}} className="cls_034"><span className="cls_034">C8. As per IRDA Circular No.: IRDA/F&amp;A/CIR/GLD/056/02/2014, Proposer's/ policy holder's bank account details are mandatory to process the</span></div>
    <div style={{position: 'absolute', left: '17.00px', top: '194.91px'}} className="cls_034"><span className="cls_034">claim through EFT.</span></div>
    <div style={{position: 'absolute', left: '17.00px', top: '210.49px'}} className="cls_034"><span className="cls_034">Please provide ANY ONE of the below documents of proposer/ policy holder-</span></div>
    <div style={{position: 'absolute', left: '40.85px', top: '226.07px'}} className="cls_012"><span className="spanBox" /><span className="cls_012"> Please provide a self-attested copy of a valid Identity proof of the Proposer/Policy holder </span><span className="cls_010" style={{fontSize: '6.1px'}}>(provide any of the mentioned documents in Proof of Identity under Part-D)</span></div>
    <div style={{position: 'absolute', left: '40.84px', top: '241.66px'}} className="cls_012"><span className="spanBox" /><span className="cls_012"> Cancelled cheque copy</span></div>
    <div style={{position: 'absolute', left: '40.84px', top: '257.24px'}} className="cls_012"><span className="spanBox" /><span className="cls_012"> Bank attested copy of Passbook with IFSC code</span></div>
    <div style={{position: 'absolute', left: '17.00px', top: '272.82px'}} className="cls_034"><span className="cls_034">C9. Please provide the below details (all fields are compulsory)</span></div>
    <div style={{position: 'absolute', left: '28.19px', top: '288.66px'}} className="cls_037"><span className="cls_037">• Proposer (policy holder)/ Employee name*</span><span className="cls_010">(as per bank records)</span><span className="cls_037">:</span>
    { blockgenrator('', 18) }
    </div>
    <div style={{position: 'absolute', left: '28.85px', top: '305.80px'}} className="cls_037"><span className="cls_037">• Proposer/ policy holder Bank account no.:</span>
    { blockgenrator('', 22) }
    </div>
    <div style={{position: 'absolute', left: '28.85px', top: '322.69px'}} className="cls_012"><span className="cls_012">• Name of the bank:</span>
    { blockgenrator('', 31) }
    </div>
    <div style={{position: 'absolute', left: '28.85px', top: '338.27px'}} className="cls_012"><span className="cls_012">• Branch name:</span>
    { blockgenrator('', 31) }
    </div>
    <div style={{position: 'absolute', left: '28.85px', top: '353.85px'}} className="cls_012"><span className="cls_012">• Address of the bank:</span>
    { blockgenrator('', 62) }
    </div>
    <div style={{position: 'absolute', left: '28.19px', top: '385.27px'}} className="cls_037"><span className="cls_037">• IFSC code no. of the bank:</span>
    { blockgenrator('', 11) }
    </div>
    <div style={{position: 'absolute', left: '360.64px', top: '388.27px'}} className="cls_010"><span className="cls_010">(should be same as per the provided cheque leaflet)</span></div>
    <div style={{position: 'absolute', left: '28.19px', top: '402.16px'}} className="cls_012"><span className="cls_012">• PAN no. of Proposer:</span>
    { blockgenrator('', 10) }
    </div>
    <div style={{position: 'absolute', left: '17.00px', top: '417.37px'}} className="cls_038"><span className="cls_038">*Proposer/ Policy holder is the person who has paid premium for the policy.</span></div>
    <div style={{position: 'absolute', left: '16.99px', top: '427.56px'}} className="cls_038"><span className="cls_038">For Retail policy, Name &amp; Account details of Proposer required. For Corporate policy, Employee Name &amp; Account details required.</span></div>
    <div style={{position: 'absolute', left: '17.01px', top: '444.50px'}} className="cls_039"><span className="cls_039">Terms and Conditions for Payments through RTGS/ NEFT</span></div>
    <div style={{position: 'absolute', left: '17.01px', top: '454.40px'}} className="cls_036"><span className="cls_036">1.</span></div>
    <div style={{position: 'absolute', left: '32.75px', top: '454.40px'}} className="cls_036"><span className="cls_036">The details provided by the Proposers/ policy holder in the Mandate Form shall be considered as final and ICICI Lombard General Insurance Company Ltd. shall not be responsible for cross verification of any of the</span></div>
    <div style={{position: 'absolute', left: '32.87px', top: '463.63px'}} className="cls_036"><span className="cls_036">details provided therein.</span></div>
    <div style={{position: 'absolute', left: '17.00px', top: '473.53px'}} className="cls_036"><span className="cls_036">2.</span></div>
    <div style={{position: 'absolute', left: '32.75px', top: '473.53px'}} className="cls_036"><span className="cls_036">The  RTGS/ NEFT facility shall be effective for the respective Proposer(s)/ policy holder within 15 days of the receipt of the Mandate Form by ICICI Lombard General Insurance Company Ltd. and/ or within such period</span></div>
    <div style={{position: 'absolute', left: '32.86px', top: '482.76px'}} className="cls_036"><span className="cls_036">as may be reasonably required by ICICI Lombard General Insurance Company Ltd. to activate the RTGS/ NEFT facility.</span></div>
    <div style={{position: 'absolute', left: '16.99px', top: '492.66px'}} className="cls_036"><span className="cls_036">3.</span></div>
    <div style={{position: 'absolute', left: '32.74px', top: '492.66px'}} className="cls_036"><span className="cls_036">The Proposer/ policy holder agrees that under the RTGS/ NEFT facility, there may be a risk of non-payment in the Proposer/ policy holder Accounts No. on the day of the credit of payments due to change in the</span></div>
    <div style={{position: 'absolute', left: '32.85px', top: '501.89px'}} className="cls_036"><span className="cls_036">applicable regulations pertaining to RTGS/ NEFT facility or due to any other reasons without any fault/ inaction/ failure on part of ICICI Lombard General Insurance Company or any factor beyond the control of ICICI</span></div>
    <div style={{position: 'absolute', left: '32.85px', top: '511.12px'}} className="cls_036"><span className="cls_036">Lombard General Insurance Company Limited.</span></div>
    <div style={{position: 'absolute', left: '16.98px', top: '521.02px'}} className="cls_036"><span className="cls_036">4.</span></div>
    <div style={{position: 'absolute', left: '32.73px', top: '521.02px'}} className="cls_036"><span className="cls_036">The Proposer/ policy holder agrees to indemnify, without delay or demur, ICICI Lombard General Insurance Company Ltd. and its agents and keep ICICI Lombard General Insurance Company Ltd. and its agent</span></div>
    <div style={{position: 'absolute', left: '32.85px', top: '530.25px'}} className="cls_036"><span className="cls_036">indemnified harmless at all times from and against any and all claims, damages, losses, costs, and expenses (including attorney's fees) which ICICI Lombard General Insurance Company Ltd. may suffer or incur,</span></div>
    <div style={{position: 'absolute', left: '32.84px', top: '539.48px'}} className="cls_036"><span className="cls_036">directly or indirectly, arising from or in connection with, amongst other things, either of the aforesaid reasons stated in above clauses.</span></div>
    <div style={{position: 'absolute', left: '16.98px', top: '549.38px'}} className="cls_036"><span className="cls_036">5.</span></div>
    <div style={{position: 'absolute', left: '32.72px', top: '549.38px'}} className="cls_036"><span className="cls_036">ICICI Lombard General Insurance Company Ltd. May sub-contract and employ agents to carry out any of its obligations under the RTGS/ NEFT facility. The Proposer/ policy holder may discontinue or terminate the</span></div>
    <div style={{position: 'absolute', left: '32.84px', top: '558.61px'}} className="cls_036"><span className="cls_036">use of RTGS/ NEFT facility by giving a minimum of 15 days prior written notice to ICICI Lombard General Insurance Company Ltd. The notice of, such termination should be given to ICICI Lombard only at its corporate</span></div>
    <div style={{position: 'absolute', left: '32.83px', top: '567.84px'}} className="cls_036"><span className="cls_036">address and be addressed at ICICI Lombard GIC Ltd., ICICI Lombard House (Old Tata Press Building), 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</span></div>
    <div style={{position: 'absolute', left: '16.96px', top: '577.74px'}} className="cls_036"><span className="cls_036">6.</span></div>
    <div style={{position: 'absolute', left: '32.71px', top: '577.74px'}} className="cls_036"><span className="cls_036">A confirmation of the receipt of termination notice given by the Proposer/ policy holder will be acknowledged through a confirmation letter by ICICI Lombard General Insurance Company Ltd. In no case can the</span></div>
    <div style={{position: 'absolute', left: '32.82px', top: '586.97px'}} className="cls_036"><span className="cls_036">Proposer/ policy holder construe his termination notice as effective unless a confirmation has been provided by ICICI Lombard to the Proposer/ policy holder stating the date of receipt of such communication by the</span></div>
    <div style={{position: 'absolute', left: '32.82px', top: '596.20px'}} className="cls_036"><span className="cls_036">Proposer/ policy holder.</span></div>
    <div style={{position: 'absolute', left: '16.95px', top: '606.10px'}} className="cls_036"><span className="cls_036">7.</span></div>
    <div style={{position: 'absolute', left: '32.70px', top: '606.10px'}} className="cls_036"><span className="cls_036">The Proposer/ policy holder agrees that transaction(s) through RTGS/ NEFT facility may attract inward RTGS/ NEFT charges, which if levied by the Proposer's/ policy holder's bank, shall be borne by the Proposer/</span></div>
    <div style={{position: 'absolute', left: '32.81px', top: '615.33px'}} className="cls_036"><span className="cls_036">policy holder only.</span></div>
    <div style={{position: 'absolute', left: '16.95px', top: '625.23px'}} className="cls_036"><span className="cls_036">8.</span></div>
    <div style={{position: 'absolute', left: '32.69px', top: '625.23px'}} className="cls_036"><span className="cls_036">ICICI Lombard has the absolute discretion to amend or supplement any Terms and Condition stated herein at any time and will endeavor to give prior notice of ten days for such changes wherever feasible for the</span></div>
    <div style={{position: 'absolute', left: '32.81px', top: '634.46px'}} className="cls_036"><span className="cls_036">Terms and Conditions to be applicable. By using the new services, or at the completion of such period, whichever is earlier, the Proposer/ policy holder shall be deemed to have accepted the changed Terms and</span></div>
    <div style={{position: 'absolute', left: '32.80px', top: '643.69px'}} className="cls_036"><span className="cls_036">Conditions.</span></div>
    <div style={{position: 'absolute', left: '16.94px', top: '653.59px'}} className="cls_036"><span className="cls_036">9.</span></div>
    <div style={{position: 'absolute', left: '32.68px', top: '653.59px'}} className="cls_036"><span className="cls_036">Submission of documents or bank details or any other information does not in any way, shape or form, imply or express or suggest admission of liability by the company.</span></div>
    <div style={{position: 'absolute', left: '16.93px', top: '663.49px'}} className="cls_036"><span className="cls_036">10.</span></div>
    <div style={{position: 'absolute', left: '32.68px', top: '663.49px'}} className="cls_036"><span className="cls_036">Notices under these Terms and Conditions may be given in writing by delivering them by hand or e-mail or on ICICI Lombard General Insurance Company Ltd. website </span>
      <a href="http://www.icicilombard.com/">www.icicilombard.com</a> or by sending them by</div>
    <div style={{position: 'absolute', left: '32.79px', top: '672.72px'}} className="cls_036"><span className="cls_036">post to the last address of the Proposer/ policy holder.</span></div>
    <div style={{position: 'absolute', left: '16.93px', top: '682.62px'}} className="cls_036"><span className="cls_036">11.   These Terms and Conditions will be governed by the laws of India and any legal action or proceedings arising out of these Terms and Conditions shall be initiated in the courts or tribunals at Mumbai in India.</span></div>
    <div style={{position: 'absolute', left: '16.90px', top: '692.52px'}} className="cls_036"><span className="cls_036">12.   I/We further undertake to refund any excess amount whether demanded by ICICI Lombard General Insurance Company Ltd. or not, which has been credited in excess to my account at any time due to any reason</span></div>
    <div style={{position: 'absolute', left: '32.76px', top: '701.75px'}} className="cls_036"><span className="cls_036">within 7 days of such receipt of such communication from ICICI Lombard of such excess credit or such information of excess credit coming to the knowledge of the Proposer/ policy holder through any other source.</span></div>
    <div style={{position: 'absolute', left: '16.89px', top: '711.65px'}} className="cls_036"><span className="cls_036">13.   I/We agree that my/ our claim payment will be credited from the date ICICI Lombard General Insurance Company Ltd. gets confirmation from its bankers, This facility will continue unless it is revoked by any party</span></div>
    <div style={{position: 'absolute', left: '32.75px', top: '720.88px'}} className="cls_036"><span className="cls_036">and any issuance of relevant credit instruction from ICICI Lombard General Insurance Company Ltd. to its bankers will be valid till such instruction is complete irrespective of the fact that the notice period has</span></div>
    <div style={{position: 'absolute', left: '32.74px', top: '730.11px'}} className="cls_036"><span className="cls_036">expired provided such a credit request has been made by ICICI Lombard General Insurance Company Ltd. before the expiry of the notice period of the Proposer/ policy holder.</span></div>
    <div style={{position: 'absolute', left: '451.19px', top: '779.62px'}} className="cls_036"><span className="cls_036">Account holder's Signature</span></div>
    <div style={{position: 'absolute', left: '55.40px', top: '796.90px'}} className="cls_006"><span className="cls_006">Mailing Address: </span><span className="cls_007">ICICI Lombard Healthcare, ICICI Bank Tower, Plot No. 12, Financial District, Nanakram Guda, Gachibowli, Hyderabad-500032</span></div>
    <div style={{position: 'absolute', left: '48.06px', top: '809.67px'}} className="cls_006"><span className="cls_006">Visit us at: </span><span className="cls_007"> <a href="http://www.icicilombard.com/">www.icicilombard.com</a> • </span><span className="cls_006">E-Mail us at:</span><span className="cls_007">  ihealthcare@icicilombard.com • </span>
      <span className="cls_006">Toll Free Number: </span><span className="cls_007">1800 2666. • IRDA Registration No. 115</span></div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '4360px', width: '595px', height: '841px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
      <img src={bg6} width={595} height={841} /></div>
    <div style={{position: 'absolute', left: '212.82px', top: '36.96px'}} className="cls_005"><span className="cls_005">Part - D (Know Your Customer) KYC</span></div>
    <div style={{position: 'absolute', left: '17.01px', top: '65.97px'}} className="cls_011"><span className="cls_011">KYC is required </span><span className="cls_012">only</span><span className="cls_011"> for </span><span className="cls_012">Individual/ Retail</span><span className="cls_011"> policy holders if the total claimed amount exceeds</span></div>
    <div style={{position: 'absolute', left: '390.13px', top: '65.97px'}} className="cls_011"><span className="cls_011">100,000.</span></div>
    <div style={{position: 'absolute', left: '382.66px', top: '65.96px'}} className="cls_012"><span className="cls_012">` < /span></div >
    <
    div style = {
        { position: 'absolute', left: '17.01px', top: '83.95px' }
    }
    className = "cls_011" > < span className = "cls_011" > D1.Patient 's Name:</span> 

    { blockgenrator('', 38) }


    <
    /div> <
    div style = {
        { position: 'absolute', left: '17.01px', top: '93.54px' }
    }
    className = "cls_036" > < span className = "cls_036" > ( in respect of whom claim is made) < /span><span className="cls_012">:</span > < /div> <
    div style = {
        { position: 'absolute', left: '17.01px', top: '108.52px' }
    }
    className = "cls_011" > < span className = "cls_011" > D2.Policy Number: < /span> { blockgenrator('', 38) } < /
    div > <
    div style = {
        { position: 'absolute', left: '17.01px', top: '123.50px' }
    }
    className = "cls_011" > < span className = "cls_011" > D3.Card No. / UHID No.: < /span> { blockgenrator('', 36) } < /
    div > <
    div style = {
        { position: 'absolute', left: '17.01px', top: '138.49px' }
    }
    className = "cls_011" > < span className = "cls_011" > D4.Group / Company Name < /span><span className="cls_012"> </span > < span className = "cls_036" > (
        for Group / Corporate policy holders) < /span><span className="cls_012">:</span > { blockgenrator('', 28) } <
    /div> <
    div style = {
        { position: 'absolute', left: '17.01px', top: '153.47px' }
    }
    className = "cls_011" > < span className = "cls_011" > D5.Claim Number < /span><span className="cls_012"> </span > < span className = "cls_036" > (
        if allotted) < /span><span className="cls_012">:</span > { blockgenrator('', 12) } <
    /div> <
    div style = {
        { position: 'absolute', left: '286.81px', top: '153.47px' }
    }
    className = "cls_011" > < span className = "cls_011" > D6.Mobile / Contact No.: < /span> { blockgenrator('', 10) } < /
    div > <
    div style = {
        { position: 'absolute', left: '17.01px', top: '171.45px' }
    }
    className = "cls_011" > < span className = "cls_011" > D7.The below KYC documents are mandatory as per AML guidelines by IRDA < /span></div >
    <
    div style = {
        { position: 'absolute', left: '17.01px', top: '183.44px' }
    }
    className = "cls_012" > < span className = "cls_012" > 1. < /span> <
    span className = "spanBox" / >
    <
    /div> <
    div style = {
        { position: 'absolute', left: '43.40px', top: '183.44px' }
    }
    className = "cls_012" > < span className = "cls_012" > Two passport size photos of Proposer < /span><span className="cls_010">(stick in the space provided below)</span > < /div> <
    div style = {
        { position: 'absolute', left: '17.01px', top: '197.82px' }
    }
    className = "cls_012" > < span className = "cls_012" > 2. < /span> <
    span className = "spanBox" / >
    <
    /div> <
    div style = {
        { position: 'absolute', left: '43.40px', top: '197.82px' }
    }
    className = "cls_012" > < span className = "cls_012" > One photocopy of proof of identity of Proposer < /span><span className="cls_010">(any 1 in the below list)</span > < /div> <
    div style = {
        { position: 'absolute', left: '17.00px', top: '212.20px' }
    }
    className = "cls_012" > < span className = "cls_012" > 3. < /span> <
    span className = "spanBox" / >
    <
    /div> <
    div style = {
        { position: 'absolute', left: '43.39px', top: '212.20px' }
    }
    className = "cls_012" > < span className = "cls_012" > One photocopy of proof of residence of Proposer < /span><span className="cls_010">(any 1 in the below list)</span > < /div> <
    div style = {
        { position: 'absolute', left: '116.73px', top: '234.21px' }
    }
    className = "cls_014" > < span className = "cls_014" > Proof of Identity < /span></div >
    <
    div style = {
        { position: 'absolute', left: '408.70px', top: '234.21px' }
    }
    className = "cls_014" > < span className = "cls_014" > Proof of Residence < /span></div >
    <
    div style = {
        { position: 'absolute', left: '53.16px', top: '246.20px' }
    }
    className = "cls_040" > < span className = "cls_040" > (Any one of below mentioned documents required) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '350.80px', top: '246.20px' }
    }
    className = "cls_040" > < span className = "cls_040" > (Any one of below mentioned documents required) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.76px', top: '263.87px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Passport < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.78px', top: '263.87px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Electricity bill < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.76px', top: '284.48px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > PAN card < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.78px', top: '284.43px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Ration card < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.76px', top: '303.26px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Voter’ s Identity card < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.78px', top: '303.24px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Letter from any recognized public authority < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.76px', top: '322.85px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Driving license < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.78px', top: '320.50px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Current statement of bank account with details of permanent / present < /span></div >
    <
    div style = {
        { position: 'absolute', left: '323.78px', top: '331.29px' }
    }
    className = "cls_007" > < span className = "cls_007" > residence address(as downloaded) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.60px', top: '345.18px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Personal identification and certification of the employees of the insurer
    for < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.54px', top: '344.70px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Current passbook with details of permanent / present residence address < /span></div >
    <
    div style = {
        { position: 'absolute', left: '36.59px', top: '355.97px' }
    }
    className = "cls_007" > < span className = "cls_007" > identity of the prospective policyholder. < /span></div >
    <
    div style = {
        { position: 'absolute', left: '323.54px', top: '355.49px' }
    }
    className = "cls_007" > < span className = "cls_007" > (updated upto the previous month) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.60px', top: '370.75px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Letter issued by Unique Identification Authority of India containing details of < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.30px', top: '368.74px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Valid lease agreement along with rent receipt, which is not more than three < /span></div >
    <
    div style = {
        { position: 'absolute', left: '36.60px', top: '381.54px' }
    }
    className = "cls_007" > < span className = "cls_007" > name, address and Aadhar number. < /span></div >
    <
    div style = {
        { position: 'absolute', left: '323.29px', top: '379.53px' }
    }
    className = "cls_007" > < span className = "cls_007" > months old as a residence proof. < /span></div >
    <
    div style = {
        { position: 'absolute', left: '310.77px', top: '394.56px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Telephone bill pertaining to any kind of telephone connection like, mobile, < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.60px', top: '404.99px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Job card issued by NREGA duly signed by an officer of the State Government < /span></div >
    <
    div style = {
        { position: 'absolute', left: '323.76px', top: '405.35px' }
    }
    className = "cls_007" > < span className = "cls_007" > landline, wireless, etc.provided it is not older than six months from the date of < /span></div >
    <
    div style = {
        { position: 'absolute', left: '323.75px', top: '416.14px' }
    }
    className = "cls_007" > < span className = "cls_007" > insurance contract < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.15px', top: '432.51px' }
    }
    className = "cls_007" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_007" > Letter from a recognized Public Authority(as defined under Section 2(h) of < /span></div >
        <
        div style = {
            { position: 'absolute', left: '310.78px', top: '437.91px' }
        }
        className = "cls_007" >
        <
        span className = "spanBox" / >
        <
        span className = "cls_007" > Employer’ s certificate as a proof of residence(Certificates of employers who < /span></div >
            <
            div style = {
                { position: 'absolute', left: '35.14px', top: '443.30px' }
            }
            className = "cls_007" > < span className = "cls_007" > the Right to Information Act, 2005) or Public Servant(as defined in Section < /span></div >
            <
            div style = {
                { position: 'absolute', left: '323.78px', top: '448.70px' }
            }
            className = "cls_007" > < span className = "cls_007" > have in place systematic procedures
            for recruitment along with < /span></div >
            <
            div style = {
                { position: 'absolute', left: '35.14px', top: '454.09px' }
            }
            className = "cls_007" > < span className = "cls_007" > 2(c) of the‘ The Prevention of Corruption Act, 1988’) verifying the identity and < /span></div >
        <
        div style = {
            { position: 'absolute', left: '323.77px', top: '459.48px' }
        }
        className = "cls_007" > < span className = "cls_007" > maintenance of mandatory records of its employees are generally reliable) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '35.14px', top: '464.88px' }
    }
    className = "cls_007" > < span className = "cls_007" > residence of the customer < /span></div >
    <
    div style = {
        { position: 'absolute', left: '219.37px', top: '488.11px' }
    }
    className = "cls_014" > < span className = "cls_014" > Proofs of(both) Identity and Residence < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.15px', top: '508.42px' }
    }
    className = "cls_012" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_012" > Passport < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.15px', top: '525.20px' }
    }
    className = "cls_012" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_012" > Written confirmation from the banks where the prospect is a customer, regarding identification and proof of residence. < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.14px', top: '541.99px' }
    }
    className = "cls_012" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_012" > Current passbook with details of present / permanent residence address(updated to the previous month) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '25.14px', top: '558.77px' }
    }
    className = "cls_012" >
    <
    span className = "spanBox" / >
    <
    span className = "cls_012" > Current statement of Bank account with details of present / permanent residence address(as downloaded) < /span></div >
    <
    div style = {
        { position: 'absolute', left: '72.70px', top: '592.27px' }
    }
    className = "cls_011" > < span className = "cls_011" > Stick Proposer 's Photographs</span></div> <
    div style = {
        { position: 'absolute', left: '68.36px', top: '646.15px' }
    }
    className = "cls_031" > < span className = "cls_031" > Stick < /span></div >
    <
    div style = {
        { position: 'absolute', left: '176.69px', top: '646.15px' }
    }
    className = "cls_031" > < span className = "cls_031" > Stick < /span></div >
    <
    div style = {
        { position: 'absolute', left: '58.27px', top: '658.14px' }
    }
    className = "cls_031" > < span className = "cls_031" > Proposer 's</span></div> <
    div style = {
        { position: 'absolute', left: '166.60px', top: '658.14px' }
    }
    className = "cls_031" > < span className = "cls_031" > Proposer 's</span></div> <
    div style = {
        { position: 'absolute', left: '56.25px', top: '670.12px' }
    }
    className = "cls_031" > < span className = "cls_031" > Photograph < /span></div >
    <
    div style = {
        { position: 'absolute', left: '164.58px', top: '670.12px' }
    }
    className = "cls_031" > < span className = "cls_031" > Photograph < /span></div >
    <
    div style = {
        { position: 'absolute', left: '444.90px', top: '700.74px' }
    }
    className = "cls_012" > < span className = "cls_012" > Claimant 's Signature</span></div> <
    div style = {
        { position: 'absolute', left: '74.26px', top: '780.51px' }
    }
    className = "cls_009" > < span className = "cls_009" > Mailing Address: < /span><span className="cls_010">ICICI Lombard Healthcare, ICICI Bank Tower, Plot No. 12, Financial District, Nanakram Guda, Gachibowli, Hyderabad-500032</span > < /div> <
    div style = {
        { position: 'absolute', left: '81.32px', top: '791.05px' }
    }
    className = "cls_009" > < span className = "cls_009" > Registered Office Address: < /span><span className="cls_010"> ICICI Lombard House, 414, Veer Savarkar Marg, Near  Siddhi Vinayak Temple, Prabhadevi, Mumbai 400 025.</span > < /div> <
    div style = {
        { position: 'absolute', left: '41.04px', top: '801.60px' }
    }
    className = "cls_009" > < span className = "cls_009" > Visit us at: < /span><span className="cls_010"> <a href="http:/ / www.icicilombard.com. / ">www.icicilombard.com.</a>  • </span><span className="
    cls_009 ">E-Mail us at:</span><span className="
    cls_010 ">  ihealthcare@icicilombard.com.• </span> <
    span className = "cls_009" > Toll Free Number: < /span><span className="cls_010">1800 2666. • </span > < span className = "cls_009" > Toll Free Fax Number: < /span><span className="cls_010" style={{fontSize: '7.6px'}}>1800-209-8880</span > < /div> <
    div style = {
        { position: 'absolute', left: '253.22px', top: '812.21px' }
    }
    className = "cls_007" > < span className = "cls_007" > IRDA Registration No .115 < /span></div >
    <
    /div> < /
    div > <
    /div>

);
}

export default App;